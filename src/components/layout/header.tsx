import { useTheme } from "next-themes";
import { BsFillMoonFill } from "react-icons/bs";
import { BsFillSunFill } from "react-icons/bs";
import Link from "next/link";
import { useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import styles from "./header.module.css";

export default function CustomHeader() {
	const [mounted, setMounted] = useState(false);
	const [width, setWidth] = useState(800);
	const { theme, setTheme } = useTheme();

	useEffect(() => {
		setMounted(true);
		setWidth(window.innerWidth);
	}, []);

	if (!mounted) {
		return null;
	}

	return (
		<header className="flex justify-between items-center py-4 px-8 shadow w-full bg-slate-50 dark:bg-gray-800 sm:absolute md:static">
			<h1 className="text-2xl pointer-events-none select-none">julian.dev</h1>
			<div className="flex items-center relative overflow-hidden">
				<div className="md:hidden transition-all text-3xl cursor-pointer">
					<GiHamburgerMenu />
				</div>
				<div className={width < 640 ? styles.mobile : styles.desktop}>
					<span
						id="theme"
						className="hover:cursor-pointer transition-all duration-300 hover:bg-gray-200 dark:hover:bg-gray-900 rounded-lg p-2 sm:hidden md:block menu-item"
						onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
					>
						{theme === "dark" ? (
							<BsFillSunFill color="yellow" />
						) : (
							<BsFillMoonFill color="black" />
						)}
					</span>
					<span id="home" className="mx-2">
						<Link href="/">
							<a>Home</a>
						</Link>
					</span>
					<span id="blog" className="mx-2">
						<Link href="/blog/">
							<a>Blog</a>
						</Link>
					</span>
					<span id="search" className="mx-2">
						[algolia-search]
					</span>
				</div>
			</div>
		</header>
	);
}
