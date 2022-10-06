import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import MyPick from "../../../public/my-pic.jpg";
import { IconContext } from "react-icons";

import { FaReact, FaNodeJs } from "react-icons/fa";
import { SiTypescript, SiNextdotjs } from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";

export default function HomePage() {
	return (
		<main>
			<section
				id="showcase"
				className="w-full h-screen dark:bg-gradient-to-r from-gray-700 to-gray-800 grid grid-cols-2 gap-8"
			>
				<div className="flex flex-col items-end justify-center">
					<div className="rounded overflow-hidden">
						<Image
							src={MyPick}
							height={360}
							width={180}
							alt="Author photo"
							style={{ borderRadius: 8 }}
							objectFit="cover"
							objectPosition="50% 20%"
						/>
					</div>
				</div>
				<div className="flex flex-col justify-center items-start">
					<div>
						<div className="flex flex-row items-center select-none">
							<h1>Hi, I&apos;m Julian</h1>
						</div>
						<h2 className="italic text-green-400 select-none">
							<TypeAnimation
								sequence={[
									2000,
									"<FrontEnd>",
									1000,
									"<BackEnd>",
									1000,
									"<FullStack>",
									1000,
								]}
							/>
						</h2>
					</div>
					<div className="md:mt-20 flex flex-row">
						<IconContext.Provider value={{ className: "text-2xl mb-2" }}>
							<div className="flex flex-col items-center mr-6">
								<FaReact style={{ color: "aqua" }} /> React
							</div>
							<div className="flex flex-col items-center mr-6">
								<SiTypescript style={{ color: "DodgerBlue" }} /> TypeScript
							</div>
							<div className="flex flex-col items-center mr-6">
								<FaNodeJs style={{ color: "green" }} /> NodeJS
							</div>
							<div className="flex flex-col items-center mr-6">
								<SiNextdotjs style={{ color: "black" }} /> NextJS
							</div>
							<div className="flex flex-col items-center mr-6">
								<TbBrandReactNative style={{ color: "DarkMagenta" }} /> React
								Native
							</div>
						</IconContext.Provider>
					</div>
				</div>
			</section>
		</main>
	);
}
