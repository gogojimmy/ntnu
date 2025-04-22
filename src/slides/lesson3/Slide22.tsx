import { motion } from "framer-motion";
import SlideLayout from "../../layouts/SlideLayout";
import { Title } from "../../components/Title";
import React from "react";

interface DocumentIconProps {
	color?: string;
	className?: string;
	children?: React.ReactNode; // Allow children for embedding other icons like Crown
}

// Placeholder for document icons - replace with actual SVGs if available
const DocumentIcon = ({
	color = "currentColor",
	className = "",
	children,
}: DocumentIconProps) => (
	<svg
		className={`inline-block h-20 w-20 ${className}`}
		viewBox="0 0 24 24"
		fill="none"
		stroke={color}
		strokeWidth="1"
	>
		<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
		<polyline points="14 2 14 8 20 8"></polyline>
		<line x1="16" y1="13" x2="8" y2="13"></line>
		<line x1="16" y1="17" x2="8" y2="17"></line>
		<polyline points="10 9 9 9 8 9"></polyline>
		{children} {/* For crown etc. */}
	</svg>
);

const CrownIcon = () => (
	<path
		d="M12 6l2.12 4.24L19 11.5l-3.5 3.4.83 4.6L12 17l-4.33 2.5.83-4.6L5 11.5l4.88-1.26L12 6z"
		stroke="#FBBF24" // gold color
		strokeWidth="1.5"
		fill="#FDE68A" // light gold fill
	/>
);

export function Lesson3Slide22() {
	// Speaker Notes:
	// 把大型語言模型想像成一個固定的數學函數 f。這個函數本身（例如 ChatGPT 的核心模型）我們通常無法直接修改。
	// 要得到好的輸出結果（藍色帶皇冠的文件），關鍵不在於調整函數 f 本身。
	// 而是調整輸入給 f 的參數：也就是我們的「指令」（黑色文件）和「額外資訊/上下文」（橘色文件）。
	// 與其期待模型改變，不如改變我們自己，學習如何下達更清晰的指令、提供更豐富的上下文。
	// 調整人（使用者）的輸入，比調整函式（模型）本身更實際、更有效。

	return (
		<SlideLayout>
			<motion.div
				className="flex h-full w-full flex-col items-center justify-center p-8 text-white"
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 0.5 }}
			>
				<Title>與其調整函式，不如調整人</Title>
				<motion.p
					className="mb-12 text-2xl text-gray-400"
					initial={{ opacity: 0, y: 10 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.2, duration: 0.5 }}
				>
					給更清楚的指令、提供額外資訊
				</motion.p>

				<motion.div
					className="flex flex-col items-center space-y-4 md:flex-row md:items-center md:space-x-6 md:space-y-0"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 0.4, duration: 0.5 }}
				>
					{/* Desired Output */}
					<motion.div
						initial={{ scale: 0.8, opacity: 0 }}
						animate={{ scale: 1, opacity: 1 }}
						transition={{ delay: 0.6, duration: 0.5 }}
					>
						<DocumentIcon color="#60A5FA">
							{" "}
							{/* Blue */}
							<CrownIcon />
						</DocumentIcon>
					</motion.div>

					<span className="text-4xl font-bold">=</span>

					{/* Function */}
					<div className="relative flex flex-col items-center">
						<span className="text-5xl font-serif italic">f</span>
						<motion.div
							className="absolute -bottom-24 text-center text-sm text-gray-300"
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ delay: 1, duration: 0.5 }}
						>
							<span className="text-xl">↑</span>
							<br />
							函式固定
							<br />
							(e.g., ChatGPT)
						</motion.div>
					</div>

					<span className="text-4xl font-bold">(</span>

					{/* Inputs */}
					<motion.div
						className="flex items-center space-x-4"
						initial={{ scale: 0.8, opacity: 0 }}
						animate={{ scale: 1, opacity: 1 }}
						transition={{ delay: 0.8, duration: 0.5 }}
					>
						<DocumentIcon color="#D1D5DB" /> {/* Black/Gray */}
						<DocumentIcon color="#F97316" /> {/* Orange */}
					</motion.div>

					<span className="text-4xl font-bold">)</span>
				</motion.div>
			</motion.div>
		</SlideLayout>
	);
}
