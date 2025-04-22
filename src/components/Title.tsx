import { motion } from "framer-motion";
import React from "react";

interface TitleProps {
	children: React.ReactNode;
	className?: string;
}

export function Title({ children, className = "" }: TitleProps) {
	return (
		<motion.h1
			className={`text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center mb-8 ${className}`.trim()}
			initial={{ opacity: 0, y: -20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.5 }}
		>
			{children}
		</motion.h1>
	);
}
