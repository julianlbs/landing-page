import React from "react";
import { Container } from "../../../utils";
import { Portfolio } from "../../../../constants/portfolio";
import { MdKeyboardArrowRight } from "react-icons/md";

interface Props {
	items: Portfolio;
	onClick: (id: number) => void | React.Dispatch<React.SetStateAction<number>>;
}

const PortfolioList: React.FC<Props> = ({ items, onClick }) => {
	return (
		<>
			{items.map((p) => (
				<div key={p.id}>
					<Container
						className="py-6 flex justify-between items-center hover:bg-base-200 overflow-hidden select-none cursor-pointer"
						onClick={() => onClick(p.id)}
					>
						<div>
							<h3 className="text-accent">{p.name}</h3>
							<p className="text-sm text-secondary">{p.description.about}</p>
						</div>
						<MdKeyboardArrowRight />
					</Container>
					<div
						className="bg-secondary opacity-20 mx-auto"
						style={{ width: "90%", height: "1px" }}
					></div>
				</div>
			))}
			<div className="btn-group flex justify-center my-4">
				<button className="btn btn-active">1</button>
			</div>
		</>
	);
};

export default PortfolioList;
