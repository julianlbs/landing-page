import { useTheme } from "next-themes";
import { Button } from "@mui/material";
import { BsFillMoonFill } from "react-icons/bs";
import { BsFillSunFill } from "react-icons/bs";
import Link from "next/link";

export default function CustomHeader() {
	const { theme, setTheme } = useTheme();

	return (
		<header className="flex justify-between items-center py-4 px-8 shadow">
			<h1>Julian</h1>
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
				<div>algolia search</div>
			</div>
		</header>
	);
}
