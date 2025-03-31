import SlideLayout from "../../layouts/SlideLayout";
import { motion } from "motion/react";

export default function Slide15() {
	return (
		<SlideLayout
			prevSlide="/lesson1/slide14"
			nextSlide="/lesson1/slide16"
			currentSlide="15"
			totalSlides="29"
			courseName="NTNU Web Development Course"
		>
			<div className="relative h-full flex flex-col justify-center">
				{/* Background Elements */}
				<div className="absolute inset-0 rounded-2xl bg-black/40 backdrop-blur-sm border border-tech-grid-bright" />

				{/* Content */}
				<div className="relative px-16 py-8">
					<div className="space-y-8 max-w-[1280px] mx-auto">
						{/* Title */}
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6 }}
						>
							<h1 className="text-4xl font-bold text-white mb-2">
								Design System 是什麼？
							</h1>
							<h2 className="text-2xl text-tech-highlight/80">
								設計系統的基本概念
							</h2>
						</motion.div>

						<div className="grid grid-cols-2 gap-8">
							{/* Left Column - Definition */}
							<motion.div
								initial={{ opacity: 0, x: -20 }}
								animate={{ opacity: 1, x: 0 }}
								transition={{ duration: 0.6, delay: 0.2 }}
								className="bg-[#1a1a1a] rounded-lg p-8 flex flex-col"
							>
								<div className="space-y-6">
									<div className="bg-black/30 rounded-lg p-6">
										<h4 className="text-xl font-bold text-tech-purple mb-4">
											核心定義
										</h4>
										<p className="text-gray-300 text-lg leading-relaxed mb-4">
											Design System（設計系統）是一套
											<span className="text-tech-highlight">
												可重複使用的設計與程式規範
											</span>
											。
										</p>
										<p className="text-gray-300 text-lg leading-relaxed mb-4">
											它結合了
											<span className="text-tech-highlight">
												設計規則、元件庫、開發標準
											</span>
											，確保產品在不同情境下都能保持一致性。
										</p>
									</div>
									<div className="bg-black/30 rounded-lg p-6">
										<h4 className="text-xl font-bold text-tech-purple mb-4">
											一句話說明
										</h4>
										<p className="text-2xl font-bold text-tech-highlight text-center py-4">
											Design System 是一個團隊在做 UI 時的共同語言。
										</p>
									</div>
								</div>
							</motion.div>

							{/* Right Column - Visual Example */}
							<motion.div
								initial={{ opacity: 0, x: 20 }}
								animate={{ opacity: 1, x: 0 }}
								transition={{ duration: 0.6, delay: 0.4 }}
								className="bg-[#1a1a1a] rounded-lg p-8 flex flex-col"
							>
								<div className="bg-black/30 rounded-lg p-6 h-full">
									<h4 className="text-xl font-bold text-tech-purple mb-4">
										設計系統示例
									</h4>
									<div className="space-y-6">
										{/* Colors */}
										<div className="space-y-2">
											<p className="text-gray-300 mb-2">🎨 色彩系統</p>
											<div className="flex gap-2">
												<div className="w-12 h-12 rounded bg-blue-500" />
												<div className="w-12 h-12 rounded bg-blue-400" />
												<div className="w-12 h-12 rounded bg-blue-300" />
												<div className="w-12 h-12 rounded bg-gray-500" />
												<div className="w-12 h-12 rounded bg-gray-400" />
												<div className="w-12 h-12 rounded bg-gray-300" />
											</div>
										</div>
										{/* Typography */}
										<div className="space-y-2">
											<p className="text-gray-300 mb-2">📝 字體規範</p>
											<div className="space-y-2">
												<div className="text-2xl font-bold text-white">
													標題文字
												</div>
												<div className="text-lg text-gray-300">內文文字</div>
												<div className="text-sm text-gray-400">輔助文字</div>
											</div>
										</div>
										{/* Components */}
										<div className="space-y-2">
											<p className="text-gray-300 mb-2">🧩 基礎元件</p>
											<div className="flex gap-2">
												<button className="bg-blue-500 text-white px-4 py-2 rounded">
													主要按鈕
												</button>
												<button className="bg-gray-600 text-white px-4 py-2 rounded">
													次要按鈕
												</button>
												<button className="border border-blue-500 text-blue-500 px-4 py-2 rounded">
													外框按鈕
												</button>
											</div>
										</div>
									</div>
								</div>
							</motion.div>
						</div>
					</div>
				</div>

				{/* Decorative Elements */}
				<motion.div
					className="absolute -left-4 top-1/4 w-32 h-32 bg-tech-purple/20 blur-[64px] rounded-full"
					initial={{ opacity: 0, scale: 0.8 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ duration: 1 }}
				/>
				<motion.div
					className="absolute -right-4 bottom-1/4 w-32 h-32 bg-tech-highlight/20 blur-[64px] rounded-full"
					initial={{ opacity: 0, scale: 0.8 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ duration: 1, delay: 0.2 }}
				/>
			</div>
		</SlideLayout>
	);
}
