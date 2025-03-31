import SlideLayout from "../../layouts/SlideLayout";
import { motion } from "motion/react";

export default function Slide1() {
	return (
		<SlideLayout
			prevSlide="/lesson1/slide16"
			nextSlide="/lesson2/slide2"
			currentSlide="1"
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
								我們為什麼需要 Design System？
							</h1>
							<h2 className="text-2xl text-tech-highlight/80">
								設計系統帶來的好處
							</h2>
						</motion.div>

						<div className="grid grid-cols-2 gap-8">
							{/* Left Column - Benefits */}
							<motion.div
								initial={{ opacity: 0, x: -20 }}
								animate={{ opacity: 1, x: 0 }}
								transition={{ duration: 0.6, delay: 0.2 }}
								className="bg-[#1a1a1a] rounded-lg p-8 flex flex-col"
							>
								<div className="space-y-6">
									<div className="bg-black/30 rounded-lg p-6">
										<h4 className="text-xl font-bold text-tech-purple mb-4 flex items-center gap-2">
											<span>✅</span> 提升一致性
										</h4>
										<p className="text-gray-300 leading-relaxed">
											不同設計師／工程師開發的畫面看起來風格統一。
										</p>
									</div>
									<div className="bg-black/30 rounded-lg p-6">
										<h4 className="text-xl font-bold text-tech-purple mb-4 flex items-center gap-2">
											<span>✅</span> 加快開發速度
										</h4>
										<p className="text-gray-300 leading-relaxed">
											使用現有元件，重複利用，不需要每次都重做。
										</p>
									</div>
								</div>
							</motion.div>

							{/* Right Column - More Benefits */}
							<motion.div
								initial={{ opacity: 0, x: 20 }}
								animate={{ opacity: 1, x: 0 }}
								transition={{ duration: 0.6, delay: 0.4 }}
								className="bg-[#1a1a1a] rounded-lg p-8 flex flex-col"
							>
								<div className="space-y-6">
									<div className="bg-black/30 rounded-lg p-6">
										<h4 className="text-xl font-bold text-tech-purple mb-4 flex items-center gap-2">
											<span>✅</span> 提升協作效率
										</h4>
										<p className="text-gray-300 leading-relaxed">
											設計師與工程師有共同語言（按鈕的狀態、尺寸有標準）。
										</p>
									</div>
									<div className="bg-black/30 rounded-lg p-6">
										<h4 className="text-xl font-bold text-tech-purple mb-4 flex items-center gap-2">
											<span>✅</span> 易於維護與擴展
										</h4>
										<p className="text-gray-300 leading-relaxed">
											想要全站換色、改字體，只需改一處。
										</p>
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
								{/* Before Design System */}
								<div className="col-span-2 bg-black/30 rounded-lg p-6">
									<h4 className="text-xl font-bold text-red-400 mb-4">
										沒有 Design System
									</h4>
									<div className="space-y-4">
										<button className="bg-blue-500 text-white px-4 py-2 rounded-lg">
											按鈕 A
										</button>
										<button className="bg-indigo-500 text-white px-6 py-3 rounded">
											按鈕 B
										</button>
										<button className="bg-purple-500 text-white px-5 py-2 rounded-xl">
											按鈕 C
										</button>
									</div>
								</div>
								{/* After Design System */}
								<div className="col-span-2 bg-black/30 rounded-lg p-6">
									<h4 className="text-xl font-bold text-green-400 mb-4">
										使用 Design System
									</h4>
									<div className="space-y-4 space-x-4">
										<button className="bg-blue-500 text-white px-4 py-2 rounded">
											按鈕 A
										</button>
										<button className="bg-blue-500 text-white px-4 py-2 rounded">
											按鈕 B
										</button>
										<button className="bg-blue-500 text-white px-4 py-2 rounded">
											按鈕 C
										</button>
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
