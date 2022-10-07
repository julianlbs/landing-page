import "../styles/globals.scss";
import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";
import { trpc } from "../utils/trpc";

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<ThemeProvider attribute="class">
			<Component {...pageProps} />
		</ThemeProvider>
	);
}

export default trpc.withTRPC(MyApp);
