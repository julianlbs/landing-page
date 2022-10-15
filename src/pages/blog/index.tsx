import { GetStaticProps, InferGetStaticPropsType } from "next";
import Head from "next/head";
import { createContext } from "react";
import { TypeAnimation } from "react-type-animation";
import Layout from "../../components/layout/layout";
import ArticleCard from "../../components/pages/blog/articleCard";
import { Container } from "../../components/utils";
import { fetchBlogAPI } from "../../lib/blog/api";
import { trpc } from "../../utils/trpc";
import { Article, Articles } from "../../core/blogTypes";
interface Props extends React.ComponentPropsWithRef<"div"> {
	articles: Articles;
}

export default function BlogHomePage({
	articles,
}: InferGetStaticPropsType<typeof getStaticProps>) {
	return (
		<>
			<Head>
				<title>Julian - Blog Home Page</title>
				<link rel="shortcut icon" />
			</Head>
			<Layout>
				<main>
					<Container className="flex flex-col mx-auto items-center max-w-5xl">
						<div className="flex justify-between items-center w-full">
							<span>Categories</span>
							<div>Sort by</div>
						</div>
						<div
							className="w-full bg-primary opacity-20 mt-2"
							style={{ height: 1 }}
						></div>

						<Container>
							{!articles && (
								<TypeAnimation
									sequence={[
										"Loading.",
										1000,
										"Loading..",
										"Loading...",
										1000,
										"Loading.....",
									]}
									repeat={Infinity}
								/>
							)}
							{articles && (
								<div className="flex flex-wrap justify-evenly items-center gap-4">
									{articles.map((article, i) => (
										<ArticleCard key={article.id} article={article} />
									))}
								</div>
							)}
						</Container>
					</Container>
				</main>
			</Layout>
		</>
	);
}

export const getStaticProps = async () => {
	const response = await fetchBlogAPI("/articles", {
		populate: ["image", "category", "author.picture"],
	});
	const articles: Article[] = response.data;

	return { props: { articles: articles }, revalidate: 1 };
};
