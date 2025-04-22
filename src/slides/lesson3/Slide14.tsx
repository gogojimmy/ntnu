import SlideLayout from "../../layouts/SlideLayout";
import { motion } from "motion/react";

// Reusable component for the function box and arrow
const FunctionProcess = ({
	input,
	output,
	label,
	annotation,
	annotationColor = "text-red-400",
	modelLabel,
}: {
	input: string;
	output: string;
	label?: string;
	annotation?: string;
	annotationColor?: string;
	modelLabel?: string;
}) => (
	<div className="flex items-center justify-center gap-3 md:gap-4 relative text-lg md:text-xl">
		{label && (
			<span className="text-gray-400 w-28 text-right flex-shrink-0 hidden md:inline-block">
				{label}
			</span>
		)}
		<span className="text-gray-200 flex-grow text-left md:text-right max-w-[250px] md:max-w-xs break-words">
			{input}
		</span>
		<svg
			className="w-6 h-6 md:w-8 md:h-8 text-gray-400 flex-shrink-0"
			fill="none"
			viewBox="0 0 24 24"
			stroke="currentColor"
		>
			<path
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth={2}
				d="M14 5l7 7m0 0l-7 7m7-7H3"
			/>
		</svg>
		<div className="relative flex-shrink-0 text-center">
			<div className="bg-blue-900/60 border border-blue-600 rounded-lg px-4 py-2 text-blue-200 w-24">
				函式
			</div>
			{modelLabel && (
				<p
					className={`absolute top-full mt-2 left-1/2 -translate-x-1/2 text-base ${annotationColor} whitespace-nowrap`}
				>
					{modelLabel}
				</p>
			)}
		</div>
		<svg
			className="w-6 h-6 md:w-8 md:h-8 text-gray-400 flex-shrink-0"
			fill="none"
			viewBox="0 0 24 24"
			stroke="currentColor"
		>
			<path
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth={2}
				d="M14 5l7 7m0 0l-7 7m7-7H3"
			/>
		</svg>
		<span className="text-yellow-400 font-semibold w-20 text-left flex-shrink-0">
			{output}
		</span>
		{annotation && (
			<p className={`absolute -top-6 right-10 text-base ${annotationColor}`}>
				{annotation}
			</p>
		)}
	</div>
);

export default function Lesson3Slide14() {
	// Speaker Notes:
	// 這樣做有什麼好處呢？本來生成一個完整的答案，可能性是無窮無盡的。
	// 但是，如果我們把問題變成預測下一個字，那麼下一個字的選項就是有限的（例如，中文常用字就幾千個）。
	// 這樣，原本看似困難的生成問題，就被轉化成了一系列從有限選項中選擇的分類問題，這就是我們人類一直都知道怎麼解決的問題。
	// 能夠進行文字接龍的模型，我們稱之為「語言模型」。
	// 實際上，相同的概念也可以應用於生成其他類型的資料，例如圖片，我們可以想像成是「像素接龍」。

	return (
		<SlideLayout currentSlide="14" courseName="AI概論與工具介紹">
			<div className="relative h-full flex flex-col justify-center items-center">
				{/* Background Elements */}
				<div className="absolute inset-0 rounded-2xl bg-black/40 backdrop-blur-sm border border-tech-grid-bright" />

				{/* Content */}
				<div className="relative px-4 md:px-16 py-8 w-full">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6 }}
						className="space-y-8 md:space-y-10"
					>
						{/* Title */}
						<h1 className="text-3xl md:text-4xl font-bold text-white text-center">
							文字接龍：將生成問題轉化為分類問題
						</h1>

						{/* Original Goal Section */}
						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ delay: 0.2, duration: 0.5 }}
							className="space-y-4"
						>
							<h2 className="text-2xl text-gray-300 text-center md:text-left md:pl-8">
								文字接龍
							</h2>
							<FunctionProcess
								label="原本的目標"
								input="台灣最高的山是哪座？"
								output="玉山"
								annotation="可能性 • 窮盡無窮"
							/>
						</motion.div>

						{/* Decomposed Section */}
						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ delay: 0.4, duration: 0.5 }}
							className="space-y-4 bg-[#1a1a1a]/60 p-6 rounded-lg border border-gray-700 relative"
						>
							<h2 className="text-2xl text-gray-300 text-center md:text-left flex items-center gap-4">
								拆解成一連串文字接龍
								<span className="text-red-400 text-xl font-semibold">
									(分類問題)
								</span>
							</h2>
							<p className="absolute top-4 right-6 text-xl text-red-400 font-bold">
								答案有限!
							</p>
							<FunctionProcess input="台灣最高的山是哪座？" output="玉" />
							<FunctionProcess input="台灣最高的山是哪座？ 玉" output="山" />
							<FunctionProcess
								input="台灣最高的山是哪座？ 玉山"
								output="[END]"
								modelLabel="語言模型"
								annotationColor="text-red-400"
							/>
						</motion.div>

						{/* Key Takeaway */}
						<motion.p
							initial={{ opacity: 0, y: 10 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.6, duration: 0.5 }}
							className="text-center text-lg md:text-xl text-tech-highlight/90 mt-6 md:mt-8 max-w-3xl mx-auto"
						>
							將生成問題轉為
							<strong className="text-white">一系列分類問題</strong>{" "}
							(預測下一個字/token)，使答案選項
							<strong className="text-white">從無限變為有限</strong>
							。執行此任務的模型稱為
							<strong className="text-white">語言模型</strong>。
						</motion.p>
					</motion.div>
				</div>

				{/* Optional Decorative Elements */}
				<motion.div
					className="absolute top-5 right-5 w-16 h-16 bg-red-500/10 blur-[30px] rounded-full"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 1.5 }}
				/>
				<motion.div
					className="absolute bottom-5 left-5 w-16 h-16 bg-blue-500/10 blur-[30px] rounded-full"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 1.5, delay: 0.3 }}
				/>
			</div>
		</SlideLayout>
	);
}
