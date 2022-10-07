import Footer from "./footer";
import CustomHeader from "./header";

interface Props {
	children: React.ReactNode;
}

export default function Layout({ children }: Props) {
	return (
		<>
			<CustomHeader />
			{children}
			<Footer />
		</>
	);
}
