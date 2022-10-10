import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import Footer from "./footer";
import CustomHeader from "./header";

interface Props {
	children: React.ReactNode;
}

export default function Layout({ children }: Props) {
	const [mounted, setMounted] = useState(false);
	const { theme, setTheme } = useTheme();

	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) {
		return null;
	}

	return (
		<div data-theme={theme === "dark" ? "night" : "winter"}>
			<CustomHeader />
			{children}
			<Footer />
		</div>
	);
}
