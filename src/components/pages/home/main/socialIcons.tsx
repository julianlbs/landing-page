import React from "react";
import { IconContext } from "react-icons";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const socialIcons = () => {
	return (
		<IconContext.Provider
			value={{ className: "text-3xl md:mx-4 lg:mx-0 lg:my-4" }}
		>
			<div className="flex flex-row justify-evenly md:justify-center items-center py-8 lg:py-0 lg:flex-col">
				<a href="https://github.com/julianlbs" target="_blank" rel="noreferrer">
					<AiFillGithub />
				</a>
				<a
					href="https://linkedin.com/in/julianlbs"
					target="_blank"
					rel="noreferrer"
				>
					<FaLinkedin color="royalblue" />
				</a>
				<a
					href="mailto:julianlimalbs@gmail.com"
					target="_blank"
					rel="noreferrer"
				>
					<MdEmail />
				</a>
			</div>
		</IconContext.Provider>
	);
};

export default socialIcons;
