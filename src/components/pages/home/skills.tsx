import React from "react";
import { IconContext } from "react-icons";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { SiTypescript, SiNextdotjs } from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";
import { Container } from "../../utils";

const Skills = () => {
	return (
		<Container>
			<div className="flex flex-wrap flex-row justify-between items-center select-none">
				<IconContext.Provider value={{ className: "text-3xl mb-2" }}>
					<div className="flex flex-col items-center hover:scale-150 hover:transition-all">
						<span className="hover:animate-spin">
							<FaReact style={{ color: "aqua" }} />
						</span>{" "}
						React
					</div>
					<div className="flex flex-col items-center hover:scale-150 hover:transition-all">
						<span className="hover:animate-spin">
							<SiTypescript style={{ color: "DodgerBlue" }} />
						</span>{" "}
						TypeScript
					</div>
					<div className="flex flex-col items-center hover:scale-150 hover:transition-all">
						<span className="hover:animate-spin">
							<FaNodeJs style={{ color: "green" }} />
						</span>{" "}
						NodeJS
					</div>
					<div className="flex flex-col items-center hover:scale-150 hover:transition-all">
						<span className="hover:animate-spin">
							<SiNextdotjs style={{ color: "black" }} />
						</span>{" "}
						NextJS
					</div>
					<div className="flex flex-col items-center hover:scale-150 hover:transition-all">
						<span className="hover:animate-spin">
							<TbBrandReactNative style={{ color: "DarkMagenta" }} />
						</span>{" "}
						React Native
					</div>
				</IconContext.Provider>
			</div>
		</Container>
	);
};

export default Skills;