import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import AuthorPhoto from "../../../../public/author-photo.jpg";
import Contact from "./contact";
import { Container } from "../../utils";

const Intro = () => {
	return (
		<Container>
			<div className="flex flex-row justify-center items-center">
				<div className="rounded overflow-hidden">
					<Image
						src={AuthorPhoto}
						height={360}
						width={180}
						alt="Author photo"
						style={{ borderRadius: 8 }}
						objectFit="cover"
						objectPosition="50% 20%"
					/>
				</div>
				<div className="md:max-w-md md:ml-8">
					<div className="flex flex-row items-center select-none">
						<h1>Hi, I&apos;m Julian</h1>
					</div>
					<h3 className="italic text-green-400 select-none">
						<TypeAnimation
							sequence={[
								2000,
								"Web Developer <FrontEnd>",
								1000,
								"Web Developer <BackEnd>",
								1000,
								"Web Developer <FullStack>",
								1000,
							]}
						/>
					</h3>
					<p className="mt-4 uppercase">
						Increase your{" "}
						<span className="font-bold text-green-400">reach</span> and{" "}
						<span className="font-bold text-red-400">boost</span> your business.
					</p>
					<div className="mt-2">CONTACT-ME BUTTON</div>
				</div>
			</div>
		</Container>
	);
};

export default Intro;
