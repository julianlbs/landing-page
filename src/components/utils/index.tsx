import React, { HtmlHTMLAttributes } from "react";

export const Container = ({
	children,
	className,
}: React.ComponentProps<"div">) => {
	return (
		<div
			className={className}
			style={
				!className
					? {
							paddingTop: "1rem",
							paddingBottom: "1rem",
							paddingLeft: "2rem",
							paddingRight: "2rem",
					  }
					: undefined
			}
		>
			{children}
		</div>
	);
};
