import { Container } from "../../../utils";

import { MdKeyboardArrowRight } from "react-icons/md";
import { IconContext } from "react-icons";
import { PORTFOLIO } from "../../../../constants/portfolio";

export default function Portfolio() {
	return (
		<IconContext.Provider value={{ className: "text-2xl text-accent" }}>
			<section id="portfolio">
				<Container>
					<h2 className="text-center text-primary uppercase mb-12 ">
						Portfolio
					</h2>
					<div className="flex flex-col w-full md:flex-row">
						<div className="flex-[1] card bg-base-300 rounded-box md:mr-2">
							{PORTFOLIO.map((p) => (
								<>
									<Container
										className="py-6 flex justify-between items-center hover:bg-base-200 overflow-hidden select-none cursor-pointer"
										onClick={() => console.log("click")}
									>
										<div>
											<h3 className="text-accent">{p.name}</h3>
											<p className="text-sm text-secondary">
												{p.description.about}
											</p>
										</div>
										<MdKeyboardArrowRight />
									</Container>
									<div
										className="bg-secondary opacity-20 mx-auto"
										style={{ width: "90%", height: "1px" }}
									></div>
								</>
							))}
							<div className="btn-group flex justify-center my-4">
								<button className="btn btn-active">1</button>
							</div>
						</div>
						<div className="grid flex-[2] h-32 card bg-base-300 rounded-box place-items-center">
							content
						</div>
					</div>
				</Container>
			</section>
		</IconContext.Provider>
	);
}
