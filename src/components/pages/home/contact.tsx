import React from "react";
import { IconContext } from "react-icons";
import { FaWhatsapp } from "react-icons/fa";

const Contact = () => {
	return (
		<div>
			<IconContext.Provider value={{ className: "text-4xl mb-2" }}>
				<div>
					<span>
						<FaWhatsapp color="lightgreen" />
					</span>
				</div>
			</IconContext.Provider>
		</div>
	);
};

export default Contact;
