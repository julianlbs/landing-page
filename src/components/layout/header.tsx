import { GiHamburgerMenu } from "react-icons/gi";
import { slide as Menu } from "react-burger-menu";
import { useEffect, useState } from "react";
import NavLinks from "./navLinks";

import { IoMdClose } from "react-icons/io";
import Link from "next/link";

export default function CustomHeader() {
	const [width, setWidth] = useState(800);
	const [mounted, setMounted] = useState(false);
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const handleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	useEffect(() => {
		setMounted(true);
		setWidth(window.innerWidth);
	}, []);

	if (!mounted) {
		return null;
	}

	return (
		<header className="flex justify-between items-center py-4 px-8 shadow w-full bg-slate-50 dark:bg-gray-800 relative">
			<Link href="/">
				<a>
					<h1 className="text-2xl pointer-events-none select-none">
						julianlbs
					</h1>
				</a>
			</Link>
			<div className="flex items-center relative overflow-hidden">
				{width > 640 ? (
					<>
						<div className="flex justify-between items-center">
							<NavLinks />
						</div>
					</>
				) : (
					<>
						<div
							className="md:hidden transition-all text-3xl cursor-pointer"
							onClick={handleMenu}
						>
							<Menu
								isOpen={isMenuOpen}
								onStateChange={(state) => setIsMenuOpen(state.isOpen)}
								menuClassName={"bg-slate-50 dark:bg-slate-800"}
								right
							>
								<div className="absolute top-4 left-4">
									<IoMdClose />
								</div>
								<NavLinks />
							</Menu>
							<GiHamburgerMenu />
						</div>
					</>
				)}
			</div>
		</header>
	);
}
