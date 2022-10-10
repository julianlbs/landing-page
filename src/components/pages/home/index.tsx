import Head from "next/head";
import Portfolio from "./portfolio";
import Showcase from "./showcase";

export default function HomePage() {
	return (
		<>
			<Head>
				<title>Julian FullStack Web Developer</title>
			</Head>
			<main>
				<Showcase />
				<Portfolio />
			</main>
		</>
	);
}
