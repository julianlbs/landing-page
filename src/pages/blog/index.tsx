import Head from "next/head";
import { createContext } from "react";
import { TypeAnimation } from "react-type-animation";
import Layout from "../../components/layout/layout";
import ArticleCard from "../../components/pages/blog/articleCard";
import { Container } from "../../components/utils";
import { trpc } from "../../utils/trpc";

interface Props {
	pageProps: { global: any };
}

export const StrapiContext = createContext({});

export default function BlogHomePage({ pageProps }: Props) {
	const articles = trpc.getArticles.useQuery();

	const dataLoaded = !articles.isLoading && articles.data;
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
							{articles.isLoading && (
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
							{dataLoaded && (
								<div className="flex flex-wrap justify-evenly items-center gap-4">
									{articles.data?.map((article, i) => (
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
