import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
	return (
		<Html data-theme="night">
			<Head />
			<body className="dark:bg-gray-800">
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
