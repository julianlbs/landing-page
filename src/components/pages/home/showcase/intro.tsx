import React, { useEffect, useState } from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import AuthorPhoto from "../../../../../public/author-photo.jpg";
import { Container } from "../../../utils";
import SocialIcons from "./socialIcons";

const Intro = () => {
	const [mounted, setMounted] = useState(false);
	const [width, setWidth] = useState(800);

	useEffect(() => {
		setMounted(true);
		setWidth(window.innerWidth);
	}, []);

	if (!mounted) return null;

	return (
		<Container>
			<div className="relative">
				<div className="flex flex-col sm:flex-row justify-center items-center">
					<div className="rounded overflow-hidden">
						<Image
							src={AuthorPhoto}
							height={width < 640 ? 260 : 360}
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
						<p className="mt-8">
							Increase your{" "}
							<span className="font-bold text-primary">reach</span> and{" "}
							<span className="font-bold text-red-400">boost</span> your
							business.
						</p>
						<div className="mt-4 max-w-xl flex flex-wrap items-center justify-evenly gap-4">
							<a href="#contact">
								<button className="btn btn-primary">Contact</button>
							</a>
							<a href="#portfolio">
								<button className="btn btn-secondary">Portfolio</button>
							</a>
							<button className="btn btn-secondary">About me</button>
						</div>
					</div>
				</div>
				<div className="lg:absolute lg:left-0 lg:top-28">
					<SocialIcons />
				</div>
			</div>
		</Container>
	);
};

export default Intro;
