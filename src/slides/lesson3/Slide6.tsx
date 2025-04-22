import SlideLayout from "../../layouts/SlideLayout";
import { motion } from "motion/react";

export default function Lesson3Slide6() {
	// Speaker Notes:
	// 所以，我們知道生成式人工智慧是人工智慧的一個目標，旨在讓機器產生複雜有結構的物件，例如文字、圖片或聲音。
	// 接下來，我們要介紹另一個常與人工智慧一起提到的概念，叫做機器學習。
	// 機器學習簡單來說，就是讓機器能夠自動地從資料裡面找到一個函數。

	return (
		<SlideLayout currentSlide="06" courseName="AI概論與工具介紹">
			<div className="relative h-full flex flex-col justify-center">
				{/* Background Elements */}
				<div className="absolute inset-0 rounded-2xl bg-black/40 backdrop-blur-sm border border-tech-grid-bright" />

				{/* Content */}
				<div className="relative px-16 py-8">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6 }}
						className="space-y-8"
					>
						{/* Title */}
						<h1 className="text-4xl font-bold text-white mb-6 text-center">
							生成式 AI：人工智慧的眾多目標之一
						</h1>

						{/* Visual Representation (Inspired by screenshot - Nested) */}
						<motion.div
							initial={{ opacity: 0, scale: 0.9 }}
							animate={{ opacity: 1, scale: 1 }}
							transition={{ duration: 0.6, delay: 0.2 }}
							className="bg-blue-900/40 border border-blue-700 rounded-2xl p-6 mx-auto max-w-4xl"
						>
							{/* Outer AI Goal Box Title */}
							<h2 className="text-xl font-semibold text-blue-300 mb-4 text-center">
								人工智慧 (目標)
							</h2>

							{/* Inner Generative AI Goal Box */}
							<div className="bg-orange-900/40 border border-orange-700 rounded-lg p-4 mt-4">
								<h2 className="text-xl font-semibold text-orange-300 mb-6 text-center">
									生成式人工智慧 (目標之一)
								</h2>
								<div className="flex justify-around items-center">
									{/* Text Icon */}
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className="h-16 w-16 text-gray-300"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
										strokeWidth={1.5}
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
										/>
									</svg>
									{/* Image Icon */}
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className="h-16 w-16 text-gray-300"
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
									{/* Audio Icon */}
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className="h-16 w-16 text-gray-300"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
										strokeWidth={1.5}
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											d="M9 9l10.5-3m0 6.553v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 11-.99-3.467l2.31-.66a2.25 2.25 0 001.632-2.163zm0 0V2.25L9 5.25v10.303m0 0v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 01-.99-3.467l2.31-.66A2.25 2.25 0 009 15.553z"
										/>
									</svg>
								</div>
							</div>
						</motion.div>

						{/* Content Points */}
						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ duration: 0.6, delay: 0.4 }}
							className="grid grid-cols-1 md:grid-cols-2 gap-6 text-lg text-gray-300 max-w-4xl mx-auto"
						>
							<div className="bg-[#1a1a1a]/80 rounded-lg p-6">
								<span className="text-tech-highlight text-2xl mr-2">•</span>
								生成式 AI 是人工智慧眾多可能的目標之一。
							</div>
							<div className="bg-[#1a1a1a]/80 rounded-lg p-6">
								<span className="text-tech-highlight text-2xl mr-2">•</span>
								<strong className="text-tech-cyan">
									機器學習 (Machine Learning)
								</strong>
								：讓機器自動從資料中找出一個函數。
							</div>
						</motion.div>
					</motion.div>
				</div>

				{/* Decorative Elements */}
				{/* You can reuse or adjust decorative elements from previous slides */}
				<motion.div
					className="absolute left-1/4 -top-10 w-24 h-24 bg-blue-500/10 blur-[50px] rounded-full"
					initial={{ opacity: 0, scale: 0.8 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ duration: 1 }}
				/>
				<motion.div
					className="absolute right-1/4 -bottom-10 w-24 h-24 bg-orange-500/10 blur-[50px] rounded-full"
					initial={{ opacity: 0, scale: 0.8 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ duration: 1, delay: 0.2 }}
				/>
			</div>
		</SlideLayout>
	);
}
