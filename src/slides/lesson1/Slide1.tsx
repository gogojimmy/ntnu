import SlideLayout from "../../layouts/SlideLayout";
import { motion } from "motion/react";

export default function Slide1() {
	return (
		<SlideLayout
			nextSlide="/lesson1/slide2"
			currentSlide="01"
			totalSlides="25"
			courseName="NTNU Web Development Course"
		>
			<div className="relative h-full flex flex-col justify-center">
				{/* Background Elements */}
				<div className="absolute inset-0 rounded-2xl bg-black/40 backdrop-blur-sm border border-tech-grid-bright" />

				{/* Content */}
				<div className="relative px-16 py-12">
					<div className="space-y-8">
						{/* Title */}
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6 }}
						>
							<div className="space-y-4">
								<div className="text-6xl font-bold">
									<span className="text-white block mb-4">HTML/CSS 基礎與</span>
									<div className="flex items-center gap-2">
										<span className="text-tech-highlight">AI 輔助開發</span>
										<span className="text-tech-purple">入門</span>
									</div>
								</div>
							</div>
						</motion.div>

						{/* Subtitle */}
						<motion.p
							className="text-xl text-tech-highlight/60 max-w-3xl"
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, delay: 0.2 }}
						>
							透過實作學習網頁開發基礎，並結合現代 AI 工具加速開發流程，
							打造高效率的開發環境。
						</motion.p>

						{/* Topics */}
						<motion.div
							className="mt-12"
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, delay: 0.4 }}
						>
							<h2 className="text-2xl font-bold text-tech-highlight mb-6">
								學習目標
							</h2>
							<div className="space-y-4">
								{[
									{ number: "01", text: "了解網頁開發的基本原理" },
									{ number: "02", text: "掌握基礎 HTML 標籤和結構" },
									{ number: "03", text: "學習 CSS 基本概念和應用" },
									{ number: "04", text: "認識 CSS 框架及其優勢" },
									{ number: "05", text: "熟悉 Cursor 編輯器和 AI 輔助開發" },
								].map((item, index) => (
									<motion.div
										key={index}
										initial={{ opacity: 0, x: -20 }}
										animate={{ opacity: 1, x: 0 }}
										transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
										className="flex items-center gap-4 group"
									>
										<div className="flex items-center justify-center w-8 h-8 rounded border border-tech-highlight/20 bg-tech-highlight/5 text-tech-highlight/60 font-mono text-sm">
											{item.number}
										</div>
										<span className="text-lg text-white/90 group-hover:text-tech-highlight transition-colors">
											{item.text}
										</span>
									</motion.div>
								))}
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
