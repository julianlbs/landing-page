import { IconContext } from "react-icons";
import { AiFillGithub } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import { GiBrazilFlag } from "react-icons/gi";
import { Container } from "../utils";
import { format } from "date-fns";

export default function Footer() {
	return (
		<footer className="footer footer-center p-4 bg-base-300 text-base-content">
			<div>
				<p>Copyright © {format(new Date(), "yyyy")} - All rights reserved</p>
			</div>
		</footer>
	);
}
