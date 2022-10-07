import type { NextPage } from "next";
import Layout from "../components/layout/layout";
import HomePage from "./home/HomePage";

const Home: NextPage = () => {
	return (
		<Layout>
			<HomePage />
		</Layout>
	);
};

export default Home;
