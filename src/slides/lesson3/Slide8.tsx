import SlideLayout from "../../layouts/SlideLayout";
import { motion } from "motion/react";

export default function Lesson3Slide8() {
	// Speaker Notes:
	// 我們為什麼要讓機器自動找參數呢？因為我們真正要面對的問題往往比 y = ax + b 複雜得多。
	// 例如，我們要讓機器學會分辨一張圖片裡是貓還是狗，這可能需要一個像 F(圖片) 這樣的函數，輸入是一張圖片，輸出是貓或狗。
	// 這樣的函數顯然非常複雜，可能需要上萬個參數才能準確判斷。
	// 這個帶有大量未知參數的函數，在機器學習中又被稱為「模型」。

	return (
		<SlideLayout currentSlide="08" courseName="AI概論與工具介紹">
			<div className="relative h-full flex flex-col justify-center">
				{/* Background Elements */}
				<div className="absolute inset-0 rounded-2xl bg-black/40 backdrop-blur-sm border border-tech-grid-bright" />

				{/* Content */}
				<div className="relative px-16 py-8">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6 }}
						className="space-y-6"
					>
						{/* Title */}
						<h1 className="text-4xl font-bold text-white mb-4 text-center">
							機器學習的應用：複雜函數 (模型)
						</h1>

						{/* Problem Statement */}
						<p className="text-2xl text-gray-300 text-center mb-8">
							假設我要做一個機器可以分辨貓和狗
						</p>

						{/* Function/Model Representation - Adjusted Layout */}
						<motion.div
							initial={{ opacity: 0, scale: 0.95 }}
							animate={{ opacity: 1, scale: 1 }}
							transition={{ duration: 0.5, delay: 0.2 }}
							className="bg-[#1a1a1a] rounded-lg p-8 max-w-4xl mx-auto space-y-4 mb-8"
						>
							{/* Adjusted Layout - Equation Only */}
							<div className="flex items-center justify-center gap-6 relative text-3xl text-gray-100 font-mono">
								{/* Horizontal Equation Part - Centered */}
								<div className="flex-grow text-center overflow-hidden">
									<p className="flex items-center justify-center gap-x-3 relative flex-wrap">
										<span className="text-yellow-400 whitespace-nowrap">
											貓 or 狗
										</span>
										<span className="mx-1">=</span> F(
										<svg
											xmlns="http://www.w3.org/2000/svg"
											className="h-10 w-10 text-gray-300 inline-block align-middle border border-gray-500 p-1 rounded mx-1 flex-shrink-0"
											fill="none"
											viewBox="0 0 24 24"
											stroke="currentColor"
											strokeWidth={1.5}
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
											/>
										</svg>
										)<span className="mx-1">=</span>
										<span className="relative inline-block">
											{/* Parameter Annotation */}
											<span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-6 w-max">
												<span className="block text-lg text-tech-cyan font-semibold mb-1">
													模型 (上萬個參數)
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
											{/* Added break-words */}
											<span className="text-gray-500 tracking-widest break-words">
												...a...b...c...d...e...f...g......
											</span>
										</span>
									</p>
								</div>
							</div>
							<p className="text-center text-tech-highlight text-xl mt-4">
								帶有大量未知參數的函數又稱為{" "}
								<strong className="text-white">模型</strong>
							</p>
						</motion.div>

						{/* Input/Output Examples using Emoji */}
						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ delay: 0.4, duration: 0.5 }}
							className="grid grid-cols-4 gap-6 text-center max-w-5xl mx-auto"
						>
							{["🐱", "🐶", "😻", "🐕"].map((emoji, index) => (
								<div
									key={index}
									className="bg-[#1a1a1a]/80 rounded-lg p-4 space-y-2"
								>
									<p className="text-lg text-gray-400">輸入:</p>
									<div className="w-24 h-24 mx-auto flex items-center justify-center text-6xl mb-2">
										{emoji}
									</div>
									<p className="text-lg text-gray-400">輸出:</p>
									<p className="text-2xl font-bold text-yellow-400">
										{index % 2 === 0 ? "貓" : "狗"}
									</p>
								</div>
							))}
						</motion.div>

						{/* Training Explanation */}
						<motion.p
							initial={{ opacity: 0, y: 10 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.6, duration: 0.5 }}
							className="text-xl text-tech-highlight/90 mt-8 text-center"
						>
							機器學習可以把上萬個參數找出來 →
							<span className="text-red-400 font-semibold">
								訓練, training (學習, learning)
							</span>
							<span className="block text-gray-400 text-lg mt-1">
								a = 1.3, b = -7.2, c = 0.4, ...
							</span>
						</motion.p>
					</motion.div>
				</div>

				{/* Decorative Elements */}
				<motion.div
					className="absolute left-10 top-20 w-24 h-24 bg-purple-500/10 blur-[50px] rounded-full"
					initial={{ opacity: 0, scale: 0.8 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ duration: 1, delay: 0.1 }}
				/>
				<motion.div
					className="absolute right-10 bottom-20 w-24 h-24 bg-green-500/10 blur-[50px] rounded-full"
					initial={{ opacity: 0, scale: 0.8 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ duration: 1, delay: 0.3 }}
				/>
			</div>
		</SlideLayout>
	);
}
