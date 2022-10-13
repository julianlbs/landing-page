import { format } from "date-fns";
import Layout from "../../components/layout/layout";
import { Article, Articles } from "../../core/blogTypes";
import ReactMarkdown from "react-markdown";
import { GetStaticPaths } from "next";
import { ParsedUrlQuery } from "querystring";
import { fetchBlogAPI } from "../../lib/blog/api";
import { Container } from "../../components/utils";
import rehypeRaw from "rehype-raw";

import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import Link from "next/link";
import Image from "next/image";
import { getBlogMedia } from "../../lib/blog/media";

interface Props extends React.ComponentPropsWithRef<"div"> {
	article: Article;
}

export default function Post({ article }: Props) {
	const authorPic =
		article.attributes.author?.data.attributes.picture?.data.attributes.formats
			.thumbnail.url;

	if (!article) return null;
	return (
		<Layout className="relative">
			<div className="absolute top-20 left-8">
				<Link href="/blog">
					<a className="flex gap-2 items-center">
						<BsFillArrowLeftCircleFill size={32} />
						<span>Go back</span>
					</a>
				</Link>
			</div>
			<article>
				<Container className="max-w-4xl mx-auto">
					<div className="h-60 w-full overflow-hidden">
						{article.attributes.image && (
							<Image
								src={getBlogMedia(article.attributes.image)}
								alt={article.attributes.image.data.attributes.caption}
								height={article.attributes.image.data.attributes.height}
								width={article.attributes.image.data.attributes.width}
								objectFit="contain"
							/>
						)}
					</div>
					<h2 className="text-primary">{article.attributes.title}</h2>
					<span className="block mb-4">
						{format(new Date(article.attributes.publishedAt), "PPP")}
					</span>
					<ReactMarkdown
						className="flex flex-col gap-4"
						rehypePlugins={[rehypeRaw]}
						components={{
							h1: "h3",
							h2: "h4",
							h4: "h5",
						}}
					>
						{article.attributes.content}
					</ReactMarkdown>
					<div className="flex gap-2 items-center mt-8">
						<div className="w-16 h-16 rounded-full overflow-hidden">
							{authorPic && (
								<Image
									src={authorPic}
									height={80}
									width={80}
									alt="Author Picture"
									objectFit="cover"
								/>
							)}
						</div>
						<span className="text-secondary">
							by {article.attributes.author?.data.attributes.name}
						</span>
					</div>
				</Container>
			</article>
		</Layout>
	);
}

export const getStaticPaths: GetStaticPaths = async () => {
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
		populate: ["image", "category", "author.picture"],
	});
	const article: Article = response.data[0];

	return { props: { article: article }, revalidate: 1 };
};
