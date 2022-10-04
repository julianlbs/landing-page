import React from "react";

export const Container: React.FC<{ children: React.ReactNode }> = ({
	children,
}) => {
	return <div className="p-4">{children}</div>;
};
