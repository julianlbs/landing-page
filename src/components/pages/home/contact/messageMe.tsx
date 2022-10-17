import { FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function MessageMe() {
	return (
		<>
			<h3 className="text-secondary">You can message me on</h3>
			<div className="flex gap-2 items-center">
				<FaWhatsapp color="limegreen" />
				<span>+55 (27) 98849-9157</span>
			</div>
			<div className="flex gap-2 items-center">
				<MdEmail />
				<span>julianlimalbs@gmail.com</span>
			</div>
		</>
	);
}
