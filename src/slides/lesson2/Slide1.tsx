import SlideLayout from "../../layouts/SlideLayout";
import { motion } from "motion/react";

export default function Slide1() {
	return (
		<SlideLayout
			nextSlide="/lesson2/slide2"
			currentSlide="1"
			totalSlides="3"
			courseName="lesson2"
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
								Design System 的核心概念
							</h1>
							<h2 className="text-2xl text-tech-highlight/80">
								設計系統如何提升設計與開發效率
							</h2>
						</motion.div>

						<div className="grid grid-cols-2 gap-8">
							{/* Left Column - Core Concepts */}
							<motion.div
								initial={{ opacity: 0, x: -20 }}
								animate={{ opacity: 1, x: 0 }}
								transition={{ duration: 0.6, delay: 0.2 }}
								className="bg-[#1a1a1a] rounded-lg p-8 flex flex-col"
							>
								<h3 className="text-2xl font-bold text-tech-highlight mb-6">
									核心概念
								</h3>
								<div className="space-y-6">
									<div className="bg-black/30 rounded-lg p-6">
										<h4 className="text-xl font-bold text-tech-purple mb-4 flex items-center gap-2">
											<span>🎯</span> 統一的設計語言
										</h4>
										<p className="text-gray-300 leading-relaxed">
											建立一致的視覺元素、間距、色彩和互動模式，確保產品體驗的一致性。
										</p>
									</div>
									<div className="bg-black/30 rounded-lg p-6">
										<h4 className="text-xl font-bold text-tech-purple mb-4 flex items-center gap-2">
											<span>🧩</span> 可重複使用的元件
										</h4>
										<p className="text-gray-300 leading-relaxed">
											將介面拆分為可重複使用的元件，每個元件都有明確的使用規範和變體。
										</p>
									</div>
								</div>
							</motion.div>

							{/* Right Column - Efficiency Benefits */}
							<motion.div
								initial={{ opacity: 0, x: 20 }}
								animate={{ opacity: 1, x: 0 }}
								transition={{ duration: 0.6, delay: 0.4 }}
								className="bg-[#1a1a1a] rounded-lg p-8 flex flex-col"
							>
								<h3 className="text-2xl font-bold text-tech-highlight mb-6">
									效率提升
								</h3>
								<div className="space-y-6">
									<div className="bg-black/30 rounded-lg p-6">
										<h4 className="text-xl font-bold text-tech-purple mb-4 flex items-center gap-2">
											<span>⚡️</span> 設計效率
										</h4>
										<p className="text-gray-300 leading-relaxed">
											• 減少重複設計工作
											<br />
											• 快速製作原型
											<br />• 確保設計決策的一致性
										</p>
									</div>
									<div className="bg-black/30 rounded-lg p-6">
										<h4 className="text-xl font-bold text-tech-purple mb-4 flex items-center gap-2">
											<span>🚀</span> 開發效率
										</h4>
										<p className="text-gray-300 leading-relaxed">
											• 標準化的元件庫
											<br />
											• 減少重複開發
											<br />• 更容易進行維護和更新
										</p>
									</div>
								</div>
							</motion.div>
						</div>

						{/* Bottom Section - Example */}
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, delay: 0.6 }}
							className="bg-[#1a1a1a] rounded-lg p-8"
						>
							<h3 className="text-2xl font-bold text-tech-highlight mb-6">
								實際應用示例
							</h3>
							<div className="grid grid-cols-2 gap-8">
								<div className="bg-black/30 rounded-lg p-6">
									<h4 className="text-xl font-bold text-tech-purple mb-4">
										元件庫
									</h4>
									<div className="space-y-4">
										<div className="flex items-center gap-4">
											<button className="bg-tech-highlight text-white px-4 py-2 rounded">
												主要按鈕
											</button>
											<button className="border border-tech-highlight text-tech-highlight px-4 py-2 rounded">
												次要按鈕
											</button>
										</div>
										<div className="flex items-center gap-4">
											<div className="w-8 h-8 rounded-full bg-tech-purple"></div>
											<div className="w-8 h-8 rounded-full bg-tech-highlight"></div>
											<div className="w-8 h-8 rounded-full bg-tech-grid-bright"></div>
										</div>
									</div>
								</div>
								<div className="bg-black/30 rounded-lg p-6">
									<h4 className="text-xl font-bold text-tech-purple mb-4">
										設計規範
									</h4>
									<div className="space-y-2 text-gray-300">
										<p>• 間距系統：4px, 8px, 16px, 24px, 32px</p>
										<p>• 字體大小：12px, 14px, 16px, 20px, 24px</p>
										<p>• 圓角：4px, 8px, 12px</p>
									</div>
								</div>
							</div>
						</motion.div>
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
