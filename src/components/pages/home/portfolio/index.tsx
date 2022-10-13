import { Container } from "../../../utils";
import { IconContext } from "react-icons";
import PortfolioList from "./portfolioList";
import Image from "next/image";

import { PORTFOLIO } from "../../../../constants/portfolio";
import { useState } from "react";
import Carousel from "../../../utils/carousel";

export default function Portfolio() {
	const [currentItem, setCurrentItem] = useState(PORTFOLIO[0]);

	const handleSelectItem = (id: number) => {
		setCurrentItem(PORTFOLIO.find((p) => p.id === id) || PORTFOLIO[0]);
	};

	return (
		<IconContext.Provider value={{ className: "text-2xl text-accent" }}>
			<section id="portfolio">
				<Container>
					<h2 className="text-center text-primary uppercase mb-12 ">
						Portfolio
					</h2>
					<div className="flex flex-col w-full md:flex-row">
						<div className="flex-[1] card bg-base-300 rounded-box md:mr-2">
							<PortfolioList items={PORTFOLIO} onClick={handleSelectItem} />
						</div>
						<div className="flex-[3] card bg-base-300 rounded-box">
							<div className="pt-4">
								<Carousel
									images={currentItem.images.paths}
									phone={currentItem.images.phone}
								/>
							</div>
							<div>
								<Container className="py-4">
									<h3 className="text-accent mb-2">{currentItem.name}</h3>
									<p>
										<strong>Plataform</strong>:{" "}
										{currentItem.description.platform}
									</p>
									<p>
										<strong>Language</strong>:{" "}
										{currentItem.description.language}
									</p>
									<p>
										<strong>Frameworks</strong>:{" "}
										{currentItem.description.Frameworks}
									</p>
								</Container>
							</div>
						</div>
					</div>
				</Container>
			</section>
		</IconContext.Provider>
	);
}
