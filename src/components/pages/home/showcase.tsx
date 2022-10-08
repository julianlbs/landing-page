import { Container } from "../../utils";
import Intro from "./intro";
import Skills from "./skills";

const Showcase = () => {
	return (
		<section
			id="showcase"
			className="md:w-full dark:bg-gradient-to-r from-gray-700 to-gray-800 grid grid-rows-2 gap-8"
		>
			<Intro />
			<Skills />
		</section>
	);
};

export default Showcase;
