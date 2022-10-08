import React from "react";

interface Props {
	children: React.ReactNode;
	onPress?: () => void;
}

const Button: React.FC<Props> = (props) => {
	return <button className="p-2 rounded">{props.children}</button>;
};

export default Button;
