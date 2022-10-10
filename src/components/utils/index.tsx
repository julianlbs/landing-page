import React, { HtmlHTMLAttributes } from "react";

export const Container = ({
	children,
	className,
}: React.ComponentProps<"div">) => {
	return <div className={`py-12 px-8 ${className}`}>{children}</div>;
};
