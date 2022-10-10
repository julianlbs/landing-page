import Intro from "./intro";
import Skills from "./skills";

const Showcase = () => {
	return (
		<section
			id="showcase"
			className="md:w-full bg-gradient-to-r from-white to-slate-200 dark:from-gray-700 dark:to-gray-800"
		>
			<Intro />
			<Skills />
		</section>
	);
};

export default Showcase;
