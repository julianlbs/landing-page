import { format } from "date-fns";
import Layout from "../../components/layout/layout";
import { Article, Articles } from "../../core/blogTypes";
import ReactMarkdown from "react-markdown";
import { GetStaticPaths } from "next";
import { ParsedUrlQuery } from "querystring";
import { fetchBlogAPI } from "../../lib/blog/api";
import { Container } from "../../components/utils";
import rehypeRaw from "rehype-raw";

interface Props extends React.ComponentPropsWithRef<"div"> {
	post: Article;
}

export default function Post({ post }: Props) {
	if (!post) return null;
	return (
		<Layout>
			<article>
				<Container className="max-w-4xl mx-auto">
					<h2 className="text-primary">{post.attributes.title}</h2>
					<span>{format(new Date(post.attributes.publishedAt), "PPP")}</span>
					<ReactMarkdown
						className="flex flex-col gap-4"
						rehypePlugins={[rehypeRaw]}
						components={{
							h1: "h2",
						}}
					>
						{post.attributes.content}
					</ReactMarkdown>
					<span className="text-secondary">
						by {post.attributes.author?.data.attributes.name}
					</span>
				</Container>
			</article>
		</Layout>
	);
}

export const getStaticPaths: GetStaticPaths = async () => {
	console.log("slug");
	const articles: Articles = await fetchBlogAPI("/articles", {
		fields: ["slug"],
	});

	return {
		paths: articles.data.map((a) => ({ params: { slug: a.attributes.slug } })),
		fallback: false,
	};
};

export const getStaticProps = async ({
	params,
}: {
	params: ParsedUrlQuery;
}) => {
	const slug = params.slug! as string;
	const response = await fetchBlogAPI("/articles", {
		filters: { slug: slug },
		populate: ["image", "category", "author"],
	});
	const article: Article = response.data[0];

	return { props: { post: article }, revalidate: 1 };
};
