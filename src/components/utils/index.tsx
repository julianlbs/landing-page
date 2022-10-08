import React from "react";

export const Container: React.FC<{ children: React.ReactNode }> = ({
	children,
}) => {
	return <div className="py-4 px-8">{children}</div>;
};
