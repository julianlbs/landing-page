import { useTheme } from "next-themes";
import { BsFillMoonFill } from "react-icons/bs";
import { BsFillSunFill } from "react-icons/bs";
import Link from "next/link";
import { TypeAnimation } from "react-type-animation";

export default function CustomHeader() {
	const { theme, setTheme } = useTheme();

	return (
		<header className="flex justify-between items-center py-4 px-8 shadow">
			<h1 className="text-2xl pointer-events-none select-none">
				<TypeAnimation
					sequence={[
						"julian.dev",
						4000,
						"julian.FrontEnd",
						1000,
						"julian.BackEnd",
						1000,
						"julian.FullStack",
						1000,
					]}
					speed={1}
					cursor={true}
					repeat={Infinity}
				/>
			</h1>
			<div className="flex items-center">
				<span
					className="hover:cursor-pointer transition-all duration-300 hover:bg-gray-200 dark:hover:bg-gray-900 rounded-lg p-2"
					onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
				>
					{theme === "dark" ? (
						<BsFillSunFill color="yellow" />
					) : (
						<BsFillMoonFill color="black" />
					)}
				</span>
				<ul className="flex mx-4">
					<li className="mx-2">
						<Link href="/">
							<a>Home</a>
						</Link>
					</li>
					<li className="mx-2">
						<Link href="/blog/">
							<a>Blog</a>
						</Link>
					</li>
				</ul>
				<div>[algolia-search]</div>
			</div>
		</header>
	);
}
