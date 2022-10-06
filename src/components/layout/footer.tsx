import { IconContext } from "react-icons";
import { AiFillGithub } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import { GiBrazilFlag } from "react-icons/gi";
import { Container } from "../utils";

export default function Footer() {
	return (
		<footer>
			<IconContext.Provider value={{ size: "44px" }}>
				<Container>
					<div className="flex flex-row justify-between items-center px-4">
						<div className="flex flex-col items-center">
							<p>Brazilian Web Developer</p>
							<GiBrazilFlag color="limegreen" />
						</div>
						<a
							href="https://github.com/julianlbs"
							target="_blank"
							rel="noreferrer"
						>
							<AiFillGithub />
						</a>
						<a
							href="mailto:julianlimalbs@gmail.com"
							className="flex flex-col items-center"
						>
							<MdEmail />
						</a>
					</div>
				</Container>
			</IconContext.Provider>
		</footer>
	);
}
