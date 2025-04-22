import SlideLayout from "../../layouts/SlideLayout";
import { motion } from "motion/react";

// Simple Text/Edit Icon component
const TextEditIcon = ({ color = "text-blue-400" }) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		className={`h-16 w-16 ${color} inline-block align-middle border border-gray-500 p-2 rounded`}
		fill="none"
		viewBox="0 0 24 24"
		stroke="currentColor"
		strokeWidth={1.5}
	>
		{/* Document part */}
		<path
			strokeLinecap="round"
			strokeLinejoin="round"
			d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
		/>
		{/* Pencil part */}
		<path
			strokeLinecap="round"
			strokeLinejoin="round"
			d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
		/>
	</svg>
);

export default function Lesson3Slide12() {
	// Speaker Notes:
	// 接下來，我們思考一下像 ChatGPT 這樣厲害的生成式 AI，它是怎麼被打造出來的呢？
	// 我們可以把它想像成是一個函數，輸入一段文字，輸出就是 ChatGPT 給你的回覆。
	// 但這個函數非常複雜，可能包含數十億個參數 (實際上 GPT-3.5 約 175B, GPT-4 約 1.76T)。
	// ChatGPT 背後的核心原理可以概括為「文字接龍」。
	// 它並不是直接產生完整的答案，而是將生成答案的過程拆解成一系列的文字接龍問題。
	// 它會先預測在給定的文字後面，下一個最有可能出現的字是什麼。

	const examples = [
		{ input: "何謂人工智慧？", output: "人工智慧就是 ......" },
		{ input: "說個跟人工智慧有關的故事", output: "很久很久以前 ......" },
		{ input: "寫一首詩", output: "床前明月光 ......" },
		{ input: "人工智慧的英文翻譯", output: "Artificial Intelligence (AI)" },
	];

	return (
		<SlideLayout currentSlide="12" courseName="AI概論與工具介紹">
			<div className="relative h-full flex flex-col justify-center items-center">
				{/* Background Elements */}
				<div className="absolute inset-0 rounded-2xl bg-black/40 backdrop-blur-sm border border-tech-grid-bright" />

				{/* Content */}
				<div className="relative px-4 md:px-16 py-8 w-full">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6 }}
						className="space-y-6 md:space-y-8"
					>
						{/* Title - Updated */}
						<h1 className="text-3xl md:text-4xl font-bold text-white text-center">
							ChatGPT 的運作原理
						</h1>
						<p className="text-2xl text-gray-300 text-center">
							ChatGPT 也就是個函式
						</p>

						{/* Function/Model Representation */}
						<motion.div
							initial={{ opacity: 0, scale: 0.95 }}
							animate={{ opacity: 1, scale: 1 }}
							transition={{ duration: 0.5, delay: 0.2 }}
							className="bg-[#1a1a1a] rounded-lg p-6 md:p-8 max-w-4xl mx-auto space-y-4 mb-6"
						>
							<p className="text-2xl md:text-3xl text-gray-100 font-mono text-center flex items-center justify-center gap-4 relative flex-wrap">
								<TextEditIcon color="text-blue-400" />
								<span className="mx-1">=</span> f(
								<TextEditIcon color="text-gray-300" />)
								<span className="mx-1">=</span>
								<span className="relative inline-block ml-2">
									{/* Parameter Annotation */}
									<span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-6 w-max">
										<span className="block text-lg text-tech-cyan font-semibold mb-1">
											模型 (上億個參數)
										</span>
										<svg
											className="w-32 h-6 text-gray-400 mx-auto"
											fill="none"
											viewBox="0 0 120 24"
											stroke="currentColor"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth={2}
												d="M10 18 Q10 10 60 10 Q110 10 110 18 M60 10 L60 0"
											/>
										</svg>
									</span>
									<span className="text-gray-500 tracking-widest break-words text-2xl">
										...a...b...c...d...e...f...g......
									</span>
								</span>
							</p>
						</motion.div>

						{/* Input/Output Examples - Corrected Layout */}
						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ delay: 0.4, duration: 0.5 }}
							className="grid grid-cols-2 gap-x-8 gap-y-4 text-lg md:text-xl text-gray-300 max-w-4xl mx-auto"
						>
							{/* Column 1 */}
							<div className="space-y-4">
								{/* Input 1 */}
								<div className="flex">
									<span className="text-gray-500 w-16 flex-shrink-0">
										輸入:
									</span>
									<span>{examples[0].input}</span>
								</div>
								{/* Input 3 */}
								<div className="flex">
									<span className="text-gray-500 w-16 flex-shrink-0">
										輸入:
									</span>
									<span>{examples[1].input}</span>
								</div>
								{/* Output 1 */}
								<div className="flex">
									<span className="text-gray-500 w-16 flex-shrink-0">
										輸入:
									</span>
									<span>{examples[2].input}</span>
								</div>
								{/* Output 3 */}
								<div className="flex">
									<span className="text-gray-500 w-16 flex-shrink-0">
										輸入:
									</span>
									<span>{examples[3].input}</span>
								</div>
							</div>

							{/* Column 2 */}
							<div className="space-y-4">
								{/* Input 2 */}
								<div className="flex">
									<span className="text-gray-500 w-16 flex-shrink-0">
										輸出:
									</span>
									<span>{examples[0].output}</span>
								</div>
								{/* Input 4 */}
								<div className="flex">
									<span className="text-gray-500 w-16 flex-shrink-0">
										輸出:
									</span>
									<span>{examples[1].input}</span>
								</div>
								{/* Output 2 */}
								<div className="flex">
									<span className="text-gray-500 w-16 flex-shrink-0">
										輸出:
									</span>
									<span>{examples[2].output}</span>
								</div>
								{/* Output 4 */}
								<div className="flex">
									<span className="text-gray-500 w-16 flex-shrink-0">
										輸出:
									</span>
									<span>{examples[3].output}</span>
								</div>
							</div>
						</motion.div>
					</motion.div>
				</div>

				{/* Optional Decorative Elements */}
				<motion.div
					className="absolute -bottom-4 -left-4 w-20 h-20 bg-blue-500/10 blur-[40px] rounded-full"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 1.5 }}
				/>
				<motion.div
					className="absolute -top-4 -right-4 w-20 h-20 bg-red-500/10 blur-[40px] rounded-full"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 1.5, delay: 0.3 }}
				/>
			</div>
		</SlideLayout>
	);
}
