import Head from "next/head";
import Showcase from "./main/showcase";

export default function HomePage() {
	return (
		<>
			<Head>
				<title>Julian FullStack Web Developer</title>
			</Head>
			<main>
				<Showcase />
			</main>
		</>
	);
}
