import SlideLayout from "../../layouts/SlideLayout";
import { motion } from "motion/react";

// Reusable component for showing the object and its decomposition
const GenerationExample = ({
	objectLabel,
	compositionLabel,
	objectColor,
	unitLabel,
	unitCount,
	unitGrid = false,
}: {
	objectLabel: string;
	compositionLabel: string;
	objectColor: string;
	unitLabel: string;
	unitCount: number;
	unitGrid?: boolean;
}) => (
	<motion.div
		initial={{ opacity: 0, x: -20 }}
		animate={{ opacity: 1, x: 0 }}
		transition={{ duration: 0.5, delay: 0.2 }}
		className="flex items-center justify-center gap-6 md:gap-10"
	>
		{/* Complex Object */}
		<div className="text-center w-40 flex-shrink-0">
			<p className="text-lg text-gray-300 mb-1">複雜的物件</p>
			<div
				className={`rounded-lg p-4 md:p-6 border ${objectColor} border-opacity-50 bg-opacity-30 min-h-[80px] flex items-center justify-center`}
			>
				<p className="text-xl md:text-2xl font-semibold text-white">
					{objectLabel}
				</p>
			</div>
			<p className="text-base text-gray-400 mt-1">{compositionLabel}</p>
		</div>

		{/* Arrow */}
		<svg
			className="w-12 h-12 md:w-16 md:h-16 text-gray-400 flex-shrink-0"
			fill="none"
			viewBox="0 0 24 24"
			stroke="currentColor"
		>
			<path
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth={2}
				d="M17 8l4 4m0 0l-4 4m4-4H3"
			/>
		</svg>

		{/* Smaller Units */}
		<div className="text-center w-48 md:w-64 flex-shrink-0">
			<p className="text-lg text-gray-300 mb-1">較小的單位</p>
			{unitGrid ? (
				<div className="grid grid-cols-4 gap-1 md:gap-2 p-2 bg-orange-900/20 border border-orange-700/50 rounded">
					{Array.from({ length: unitCount }).map((_, i) => (
						<div
							key={i}
							className="h-6 w-6 md:h-8 md:w-8 bg-orange-200/80 border border-orange-400 rounded-sm"
						/>
					))}
				</div>
			) : (
				<div className="flex justify-center gap-1 md:gap-2">
					{Array.from({ length: unitCount }).map((_, i) => (
						<div
							key={i}
							className="bg-blue-200/80 border border-blue-400 rounded px-2 py-1 md:px-3 md:py-2 text-blue-800 font-semibold text-lg md:text-xl"
						>
							{unitLabel}
						</div>
					))}
				</div>
			)}
			<p className="text-base text-gray-400 mt-1">依照某種固定的順序依序生成</p>
		</div>
	</motion.div>
);

export default function Lesson3Slide16() {
	// Speaker Notes:
	// 我們已經知道生成式 AI 要產生複雜的物件，而語言模型是透過文字接龍的方式來生成文字。
	// 這種「一次生成一個單位、依照固定順序」的策略，就叫做自迴歸生成 (Autoregressive Generation)。
	// 不只是文字，圖片生成也可以用類似的策略。例如，將圖片看作是由像素構成的，我們可以依照順序，一次生成一個像素 (或一小塊像素)。
	// 想像一下，就像印表機一樣，從左到右、從上到下逐行生成圖像。
	// 這是一種常見的生成策略，將複雜的生成任務分解成一系列較簡單、可依序處理的步驟。

	return (
		<SlideLayout currentSlide="16" courseName="AI概論與工具介紹">
			<div className="relative h-full flex flex-col justify-center items-center">
				{/* Background Elements */}
				<div className="absolute inset-0 rounded-2xl bg-black/40 backdrop-blur-sm border border-tech-grid-bright" />

				{/* Content */}
				<div className="relative px-4 md:px-16 py-8 w-full">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6 }}
						className="space-y-10 md:space-y-16"
					>
						{/* Title */}
						<h1 className="text-4xl md:text-5xl font-bold text-white text-center">
							生成策略
						</h1>

						{/* Examples Section */}
						<div className="space-y-10 md:space-y-14 relative">
							{/* Text Example */}
							<GenerationExample
								objectLabel="文章"
								compositionLabel="由文字構成"
								objectColor="border-blue-400 bg-blue-900"
								unitLabel="字"
								unitCount={5}
							/>

							{/* Image Example */}
							<GenerationExample
								objectLabel="圖片"
								compositionLabel="由像素構成"
								objectColor="border-orange-400 bg-orange-900"
								unitLabel=""
								unitCount={12} // 4x3 grid
								unitGrid={true}
							/>

							{/* Autoregressive Label */}
							<motion.p
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								transition={{ delay: 0.6, duration: 0.5 }}
								className="absolute bottom-[-30px] right-0 text-xl md:text-2xl text-white font-semibold tracking-wider"
							>
								Autoregressive Generation
							</motion.p>
						</div>
					</motion.div>
				</div>

				{/* Optional Decorative Elements */}
				{/* ... */}
			</div>
		</SlideLayout>
	);
}
