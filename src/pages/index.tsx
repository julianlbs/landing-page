import type { NextPage } from "next";
import Layout from "../components/layout/layout";
import { Container } from "../components/utils";
// import Head from "next/head";

const Home: NextPage = () => {
	return (
		<Layout>
			<main>
				<Container>
					<div>Hello World!</div>
				</Container>
			</main>
		</Layout>
	);
};

export default Home;
