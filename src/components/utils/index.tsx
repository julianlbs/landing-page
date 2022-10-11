import React from "react";

export const Container = ({
	children,
	className,
	onClick,
}: React.ComponentProps<"div">) => {
	return (
		<div
			className={`py-12 px-8 ${className ? className : ""}`}
			onClick={onClick}
		>
			{children}
		</div>
	);
};
