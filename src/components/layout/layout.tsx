import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";
import Footer from "./footer";
import CustomHeader from "./header";

export default function Layout({
	children,
	className,
}: React.ComponentPropsWithRef<"div">) {
	const [mounted, setMounted] = useState(false);
	const { theme, setTheme } = useTheme();

	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) {
		return null;
	}

	return (
		<div
			className={className}
			data-theme={theme === "dark" ? "night" : "winter"}
		>
			<CustomHeader />
			{children}
			<Footer />
		</div>
	);
}
