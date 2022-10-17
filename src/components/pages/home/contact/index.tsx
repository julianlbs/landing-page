import { Container } from "../../../utils";

import { IconContext } from "react-icons";
import ContactForm from "./form";
import MessageMe from "./messageMe";

export default function Contact() {
	return (
		<section
			className="bg-gradient-to-r from-white to-slate-200 dark:from-gray-800 dark:to-gray-900"
			id="contact"
		>
			<Container>
				<h2 className="text-center text-primary uppercase mb-12">Contact</h2>
				<div className="flex flex-col md:flex-row gap-8">
					<div className="md:flex-[2]">
						<IconContext.Provider value={{ className: "text-3xl" }}>
							<div className="flex flex-col gap-2">
								<MessageMe />
							</div>
						</IconContext.Provider>
					</div>
					<div className="md:flex-[3]">
						<ContactForm />
					</div>
				</div>
			</Container>
		</section>
	);
}
