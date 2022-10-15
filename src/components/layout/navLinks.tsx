import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { BsFillMoonFill } from "react-icons/bs";
import { BsFillSunFill } from "react-icons/bs";
import Link from "next/link";

export default function NavLinks() {
	const [mounted, setMounted] = useState(false);
	const { theme, setTheme } = useTheme();

	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) {
		return null;
	}

	return (
		<>
			<div
				id="theme"
				className="hover:cursor-pointer transition-all duration-300 hover:bg-gray-200 dark:hover:bg-gray-900 rounded-lg p-2 sm:hidden md:block menu-item mr-8 mb-4 md:mb-0"
				onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
			>
				{theme === "dark" ? (
					<BsFillSunFill color="yellow" />
				) : (
					<BsFillMoonFill color="black" />
				)}
			</div>
			<div id="home" className="mx-2">
				<Link href="/">
					<a>Home</a>
				</Link>
			</div>
			<div id="blog" className="mx-2">
				<Link href="/blog/">
					<a>Blog</a>
				</Link>
			</div>
			{/* <div id="search" className="mx-2">
				[algolia-search]
			</div> */}
		</>
	);
}
