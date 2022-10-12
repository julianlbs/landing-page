import { AppProps } from "next/app";
import Head from "next/head";
import { createContext } from "react";
import { TypeAnimation } from "react-type-animation";
import Layout from "../../components/layout/layout";
import PostCard from "../../components/pages/blog/postCard";
import { Container } from "../../components/utils";
import { fetchBlogAPI } from "../../lib/blog/api";
import { getStrapiMedia } from "../../lib/blog/media";
import { trpc } from "../../utils/trpc";

interface Props {
	pageProps: { global: any };
}

export const StrapiContext = createContext({});

export default function BlogHomePage({ pageProps }: Props) {
	const { global } = pageProps;
	const articles = trpc.articles.useQuery();

	const dataLoaded = !articles.isLoading && articles.data;
	return (
		<>
			<Head>
				<title>Julian - Blog Home Page</title>
				<link
					rel="shortcut icon"
					href={getStrapiMedia(global.attributes.favicon)}
				/>
			</Head>
			<Layout>
				<StrapiContext.Provider value={global.attributes}>
					<main>
						<Container>
							<div className="flex justify-between items-center">
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
										{articles.data?.map((a, i) => (
											<PostCard key={a.id} post={a} />
										))}
									</div>
								)}
							</Container>
						</Container>
					</main>
				</StrapiContext.Provider>
			</Layout>
		</>
	);
}

export const getStaticProps = async () => {
	const globalRes = await fetchBlogAPI("/global", {
		populate: {
			favicon: "*",
			defaultSeo: {
				populate: "*",
			},
		},
	});
	// Pass the data to our page via props
	return { props: { pageProps: { global: globalRes.data } } };
};
