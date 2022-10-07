import Head from "next/head";
import { Response } from "node-fetch";
import { TypeAnimation } from "react-type-animation";
import Layout from "../../components/layout/layout";
import { Container } from "../../components/utils";
import { trpc } from "../../utils/trpc";

export default function BlogHomePage() {
	const restaurants = trpc.restaurantList.useQuery();

	return (
		<>
			<Head>
				<title>Julian - Blog home page</title>
			</Head>
			<Layout>
				<main>
					<Container>
						{restaurants.isLoading && (
							<TypeAnimation
								sequence={[
									"Loading.",
									1000,
									"Loading..",
									"Loading...",
									1000,
									"Loading.....",
								]}
							/>
						)}
						{!restaurants.isLoading &&
							restaurants.data?.map((r, i) => (
								<div key={i}>
									<h3>{r.attributes.Name}</h3>
									<p>{r.attributes.Description}</p>
								</div>
							))}
					</Container>
				</main>
			</Layout>
		</>
	);
}
