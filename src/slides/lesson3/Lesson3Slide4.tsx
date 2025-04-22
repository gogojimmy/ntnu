import SlideLayout from "../../layouts/SlideLayout";
import { motion } from "motion/react";

export default function Lesson3Slide4() {
	return (
		<SlideLayout currentSlide="04" courseName="AI概論與工具介紹">
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
						<h1 className="text-4xl font-bold text-white mb-2">
							什麼不是生成式人工智慧 (Generative AI)?
						</h1>

						{/* Subtitle/Explanation */}
						<div className="bg-[#1a1a1a] rounded-lg p-8">
							<h2 className="text-2xl font-bold text-tech-highlight mb-4">
								分類 (Classification) 不是生成式 AI
							</h2>
							<div className="flex items-center gap-3 text-xl text-white/90 mb-6">
								<span className="text-tech-highlight/80 text-3xl">•</span>
								<span>
									分類 : 從
									<strong className="text-tech-cyan">有限的選項</strong>中做選擇
								</span>
							</div>
							<p className="text-gray-400 text-lg">
								分類模型的任務是將輸入分配到預先定義好的類別中，而不是創造新的、複雜的內容。
							</p>
						</div>

						{/* Examples */}
						<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
							{/* Spam Detection */}
							<motion.div
								initial={{ opacity: 0, x: -20 }}
								animate={{ opacity: 1, x: 0 }}
								transition={{ duration: 0.6, delay: 0.2 }}
								className="bg-[#1a1a1a] rounded-lg p-8 flex flex-col items-center text-center"
							>
								<div className="text-6xl mb-4 flex gap-4">
									<span>📧</span>
									<span className="text-red-500">🚫</span>
									<span className="text-green-500">✔️</span>
								</div>
								<h3 className="text-2xl font-bold text-white mb-2">
									垃圾郵件偵測
								</h3>
								<p className="text-gray-400">
									判斷郵件是「垃圾郵件」還是「非垃圾郵件」。
								</p>
							</motion.div>

							{/* Cat/Dog Classifier */}
							<motion.div
								initial={{ opacity: 0, x: 20 }}
								animate={{ opacity: 1, x: 0 }}
								transition={{ duration: 0.6, delay: 0.4 }}
								className="bg-[#1a1a1a] rounded-lg p-8 flex flex-col items-center text-center"
							>
								<div className="text-6xl mb-4 flex gap-4">
									<span>🐈</span>
									<span>🐕</span>
								</div>
								<h3 className="text-2xl font-bold text-white mb-2">
									貓狗分類器
								</h3>
								<p className="text-gray-400">判斷圖片是「貓」還是「狗」。</p>
							</motion.div>
						</div>

						{/* Optional Caption */}
						{/* <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-8 text-center text-lg text-tech-highlight/70"
            >
              今天叫做分類
            </motion.div> */}
					</motion.div>
				</div>
			</div>
		</SlideLayout>
	);
}
