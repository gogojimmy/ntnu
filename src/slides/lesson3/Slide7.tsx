import SlideLayout from "../../layouts/SlideLayout";
import { motion } from "motion/react";

export default function Lesson3Slide7() {
	// Speaker Notes:
	// 為了讓大家更容易理解，我們舉一個國中數學的例子。
	// 給你一個函數 y = ax + b，當輸入 x=4 時，輸出 y=5；當輸入 x=2 時，輸出 y=-1，請問 a 和 b 是多少？
	// 解這個方程式後，我們會得到 a=3，b=-7。
	// 在機器學習的領域，這些我們需要找出來的未知數 a 和 b，又叫做「參數」（parameter）。
	// 機器學習就是希望透過一系列的方法，自動地把這些參數計算出來。

	return (
		<SlideLayout currentSlide="07" courseName="AI概論與工具介紹">
			<div className="relative h-full flex flex-col justify-center">
				{/* Background Elements */}
				<div className="absolute inset-0 rounded-2xl bg-black/40 backdrop-blur-sm border border-tech-grid-bright" />

				{/* Content */}
				<div className="relative px-16 py-8">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6 }}
						className="space-y-6 text-center"
					>
						{/* Title */}
						<h1 className="text-4xl font-bold text-white mb-2">
							機器學習：從資料中找出函數
						</h1>
						<p className="text-2xl text-tech-highlight/80 mb-8">
							機器學習 ≈ 機器自動從資料找一個函數 (Machine Learning)
						</p>

						{/* Example Section */}
						<motion.div
							initial={{ opacity: 0, scale: 0.95 }}
							animate={{ opacity: 1, scale: 1 }}
							transition={{ duration: 0.5, delay: 0.2 }}
							className="bg-[#1a1a1a] rounded-lg p-8 max-w-3xl mx-auto space-y-6"
						>
							{/* Equation with Parameter Annotation */}
							<div className="text-center mt-8">
								<p className="text-3xl text-gray-100 font-mono">
									<span className="text-gray-400">有一個函數：</span>
									<span className="text-yellow-400">y</span> = f(x) =
									<span className="relative inline-block ml-2">
										{/* Parameter Label and Pointer */}
										<span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-4 w-max">
											<span className="block text-lg text-tech-cyan font-semibold mb-1">
												參數 (Parameter)
											</span>
											<svg
												className="w-16 h-6 text-gray-400 mx-auto"
												fill="none"
												viewBox="0 0 60 24"
												stroke="currentColor"
											>
												{/* Adjusted bracket path */}
												<path
													strokeLinecap="round"
													strokeLinejoin="round"
													strokeWidth={2}
													d="M10 18 L10 10 L50 10 L50 18 M30 10 L30 0"
												/>
											</svg>
										</span>
										{/* ax + b */}
										<span className="text-red-400">a</span>x +
										<span className="text-blue-400">b</span>
									</span>
								</p>
							</div>

							<div className="text-2xl text-gray-300 space-y-3 text-center pt-6">
								<p>
									假設輸入 <code className="text-yellow-400">x = 4</code>, 輸出{" "}
									<code className="text-yellow-400">y = 5</code>
								</p>
								<p>
									假設輸入 <code className="text-yellow-400">x = 2</code>, 輸出{" "}
									<code className="text-yellow-400">y = -1</code>
								</p>
							</div>

							<p className="text-2xl text-tech-highlight pt-4">
								請找出 <span className="text-red-400">a</span>,{" "}
								<span className="text-blue-400">b</span> ?
							</p>

							<motion.div
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								transition={{ delay: 0.8, duration: 0.5 }}
								className="text-3xl text-green-400 font-bold pt-2"
							>
								a = 3, b = -7
							</motion.div>
						</motion.div>

						{/* Key Takeaway */}
						<motion.p
							initial={{ opacity: 0, y: 10 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 1, duration: 0.5 }}
							className="text-xl text-tech-highlight/90 mt-8 max-w-4xl mx-auto"
						>
							國中的時候你用人力算出參數，
							<strong className="text-white">
								機器學習是自動找出參數的方法
							</strong>
							。
						</motion.p>
					</motion.div>
				</div>

				{/* Decorative Elements */}
				{/* Adjusted decorative elements */}
				<motion.div
					className="absolute -left-8 top-1/3 w-20 h-20 bg-yellow-500/10 blur-[40px] rounded-full"
					initial={{ opacity: 0, scale: 0.8 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ duration: 1 }}
				/>
				<motion.div
					className="absolute -right-8 bottom-1/3 w-20 h-20 bg-red-500/10 blur-[40px] rounded-full"
					initial={{ opacity: 0, scale: 0.8 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ duration: 1, delay: 0.2 }}
				/>
				<motion.div
					className="absolute left-1/2 -bottom-12 w-20 h-20 bg-blue-500/10 blur-[40px] rounded-full"
					initial={{ opacity: 0, scale: 0.8 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ duration: 1, delay: 0.4 }}
				/>
			</div>
		</SlideLayout>
	);
}
