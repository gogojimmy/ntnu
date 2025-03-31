import SlideLayout from "../../layouts/SlideLayout";
import { motion } from "motion/react";

export default function Slide17() {
	return (
		<SlideLayout
			prevSlide="/lesson1/slide16"
			nextSlide="/lesson1/slide18"
			currentSlide="17"
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
								Design System 包含哪些內容？
							</h1>
							<h2 className="text-2xl text-tech-highlight/80">
								設計系統的四大核心組成
							</h2>
						</motion.div>

						<div className="grid grid-cols-2 gap-8">
							{/* Left Column */}
							<motion.div
								initial={{ opacity: 0, x: -20 }}
								animate={{ opacity: 1, x: 0 }}
								transition={{ duration: 0.6, delay: 0.2 }}
								className="bg-[#1a1a1a] rounded-lg p-8 flex flex-col"
							>
								<div className="space-y-6">
									<div className="bg-black/30 rounded-lg p-6">
										<h4 className="text-xl font-bold text-tech-purple mb-4 flex items-center gap-2">
											<span>🎨</span> 設計層面（Design Tokens）
										</h4>
										<ul className="list-disc list-inside space-y-2 text-gray-300">
											<li>顏色（Color Palette）</li>
											<li>字體（Typography）</li>
											<li>間距（Spacing, Margin, Padding）</li>
											<li>圓角、陰影（Border Radius, Shadow）</li>
										</ul>
									</div>
									<div className="bg-black/30 rounded-lg p-6">
										<h4 className="text-xl font-bold text-tech-purple mb-4 flex items-center gap-2">
											<span>🧩</span> 元件庫（Component Library）
										</h4>
										<ul className="list-disc list-inside space-y-2 text-gray-300">
											<li>Button、Input、Modal</li>
											<li>Card、Navbar</li>
											<li>Form、Table</li>
											<li>Layout Components</li>
										</ul>
									</div>
								</div>
							</motion.div>

							{/* Right Column */}
							<motion.div
								initial={{ opacity: 0, x: 20 }}
								animate={{ opacity: 1, x: 0 }}
								transition={{ duration: 0.6, delay: 0.4 }}
								className="bg-[#1a1a1a] rounded-lg p-8 flex flex-col"
							>
								<div className="space-y-6">
									<div className="bg-black/30 rounded-lg p-6">
										<h4 className="text-xl font-bold text-tech-purple mb-4 flex items-center gap-2">
											<span>📘</span> 文件與規範（Documentation）
										</h4>
										<ul className="list-disc list-inside space-y-2 text-gray-300">
											<li>使用規則</li>
											<li>命名規則</li>
											<li>行為指南（如互動狀態）</li>
											<li>最佳實踐範例</li>
										</ul>
									</div>
									<div className="bg-black/30 rounded-lg p-6">
										<h4 className="text-xl font-bold text-tech-purple mb-4 flex items-center gap-2">
											<span>⚙️</span> 程式碼實作（Code Implementation）
										</h4>
										<ul className="list-disc list-inside space-y-2 text-gray-300">
											<li>React/Vue/HTML + CSS 元件</li>
											<li>整合 Tailwind / Styled Components</li>
											<li>Storybook 整合</li>
											<li>版本控制與發布流程</li>
										</ul>
									</div>
								</div>
							</motion.div>
						</div>

						{/* Visual Example */}
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, delay: 0.6 }}
							className="bg-[#1a1a1a] rounded-lg p-8"
						>
							<div className="grid grid-cols-4 gap-4">
								{/* Design Tokens */}
								<div className="bg-black/30 rounded-lg p-4">
									<div className="flex gap-2 mb-2">
										<div className="w-8 h-8 rounded bg-blue-500" />
										<div className="w-8 h-8 rounded bg-blue-400" />
										<div className="w-8 h-8 rounded bg-blue-300" />
									</div>
									<div className="text-sm text-gray-400">Design Tokens</div>
								</div>
								{/* Components */}
								<div className="bg-black/30 rounded-lg p-4">
									<button className="bg-blue-500 text-white px-4 py-2 rounded mb-2 w-full">
										Button
									</button>
									<div className="text-sm text-gray-400">Components</div>
								</div>
								{/* Documentation */}
								<div className="bg-black/30 rounded-lg p-4">
									<div className="border border-gray-600 rounded p-2 mb-2 text-xs text-gray-400">
										📝 Usage Guidelines
									</div>
									<div className="text-sm text-gray-400">Documentation</div>
								</div>
								{/* Code */}
								<div className="bg-black/30 rounded-lg p-4">
									<div className="font-mono text-xs text-gray-400 bg-black/50 p-2 rounded mb-2">
										{"<Button variant='primary'>"}
									</div>
									<div className="text-sm text-gray-400">Implementation</div>
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
