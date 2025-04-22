import SlideLayout from "../../layouts/SlideLayout";
import { motion } from "motion/react";

// Reusable Box component for nesting
const NestedBox = ({
	color,
	label,
	children,
	className = "",
}: {
	color: string;
	label: string;
	children?: React.ReactNode;
	className?: string;
}) => (
	<div className={`rounded-2xl border p-4 md:p-6 ${color} ${className}`}>
		<p className="text-lg md:text-xl font-semibold mb-3 md:mb-4 text-center md:text-left">
			{label}
		</p>
		{children}
	</div>
);

export default function Lesson3Slide11() {
	// Speaker Notes:
	// 那麼，生成式 AI 和機器學習、深度學習之間有什麼關係呢？
	// 生成式 AI 是一個目標，我們可以利用機器學習的方法來達成這個目標。
	// 由於生成複雜的物件通常是一個非常困難的問題，所以目前來說，我們通常會使用深度學習的技術來取得比較好的成果。
	// 因此，你可以理解成深度學習是一種實現生成式 AI 這個目標的常用技術。

	return (
		<SlideLayout currentSlide="11" courseName="AI概論與工具介紹">
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
						{/* Title */}
						<h1 className="text-3xl md:text-4xl font-bold text-white text-center">
							生成式 AI、機器學習與深度學習的關係
						</h1>

						{/* Nested Boxes Visualization */}
						<motion.div
							initial={{ opacity: 0, scale: 0.9 }}
							animate={{ opacity: 1, scale: 1 }}
							transition={{ duration: 0.6, delay: 0.2 }}
							className="max-w-4xl mx-auto text-gray-800"
						>
							<NestedBox
								color="bg-blue-200/80 border-blue-400"
								label="人工智慧 (目標)"
							>
								<NestedBox
									color="bg-yellow-200/80 border-yellow-400"
									label="機器學習 (手段)"
								>
									<NestedBox
										color="bg-green-200/80 border-green-400"
										label="深度學習 (更厲害的手段)"
									>
										<NestedBox
											color="bg-red-200/80 border-red-400"
											label="生成式人工智慧"
											className="text-center"
										>
											<p className="text-lg md:text-xl text-red-800 font-semibold">
												今日的生成式人工智慧多以深度學習達成
											</p>
										</NestedBox>
									</NestedBox>
								</NestedBox>
							</NestedBox>
						</motion.div>

						{/* Content Points */}
						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ duration: 0.6, delay: 0.4 }}
							className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 text-base md:text-lg text-gray-300 max-w-5xl mx-auto text-center md:text-left"
						>
							<div className="bg-[#1a1a1a]/80 rounded-lg p-4">
								<span className="text-tech-highlight text-xl md:text-2xl mr-2">
									•
								</span>
								生成式 AI (目標) 可以用{" "}
								<strong className="text-yellow-400">機器學習</strong> (手段)
								來解決。
							</div>
							<div className="bg-[#1a1a1a]/80 rounded-lg p-4">
								<span className="text-tech-highlight text-xl md:text-2xl mr-2">
									•
								</span>
								由於問題困難，目前常使用{" "}
								<strong className="text-green-400">深度學習</strong>{" "}
								(更厲害的手段) 達成。
							</div>
							<div className="bg-[#1a1a1a]/80 rounded-lg p-4">
								<span className="text-tech-highlight text-xl md:text-2xl mr-2">
									•
								</span>
								<strong className="text-green-400">深度學習</strong> 是技術，
								<strong className="text-red-400">生成式 AI</strong> 是目標。
							</div>
						</motion.div>
					</motion.div>
				</div>

				{/* Optional Decorative Elements */}
				<motion.div
					className="absolute -bottom-8 -left-8 w-24 h-24 bg-blue-500/10 blur-[50px] rounded-full"
					initial={{ opacity: 0, scale: 0.8 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ duration: 1 }}
				/>
				<motion.div
					className="absolute -top-8 -right-8 w-24 h-24 bg-red-500/10 blur-[50px] rounded-full"
					initial={{ opacity: 0, scale: 0.8 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ duration: 1, delay: 0.2 }}
				/>
			</div>
		</SlideLayout>
	);
}
