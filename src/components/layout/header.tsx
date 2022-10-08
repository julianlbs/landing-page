import { useTheme } from "next-themes";
import { BsFillMoonFill } from "react-icons/bs";
import { BsFillSunFill } from "react-icons/bs";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function CustomHeader() {
	const [mounted, setMounted] = useState(false);
	const { theme, setTheme } = useTheme();

	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) {
		return null;
	}

	return (
		<header className="flex justify-between items-center py-4 px-8 shadow w-full bg-slate-50 dark:bg-gray-800 sm:absolute md:static">
			<h1 className="text-2xl pointer-events-none select-none">julian.dev</h1>
			<div className="flex items-center">
				<span
					className="hover:cursor-pointer transition-all duration-300 hover:bg-gray-200 dark:hover:bg-gray-900 rounded-lg p-2 sm:hidden md:block"
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
