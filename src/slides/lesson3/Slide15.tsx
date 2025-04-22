import SlideLayout from "../../layouts/SlideLayout";
import { motion } from "motion/react";

// Reusable Box component for nesting (can be shared or redefined)
const NestedBox = ({
	color,
	label,
	children,
	className = "",
	labelClassName = "",
	contentClassName = "",
}: {
	color: string;
	label: string;
	children?: React.ReactNode;
	className?: string;
	labelClassName?: string;
	contentClassName?: string;
}) => (
	<div className={`rounded-2xl border p-4 md:p-6 ${color} ${className}`}>
		<p
			className={`text-lg md:text-xl font-semibold mb-3 md:mb-4 text-center md:text-left ${labelClassName}`}
		>
			{label}
		</p>
		<div className={contentClassName}>{children}</div>
	</div>
);

export default function Lesson3Slide15() {
	// Speaker Notes: (Optional - Can refine based on previous slides)
	// 我們可以看到，語言模型是實現生成式 AI 的一種常見方式，
	// 它通常建立在深度學習技術之上，而深度學習又是機器學習的一種方法，
	// 這一切最終都是為了達成人工智慧的目標。
	// 這種層層遞進的關係幫助我們理解不同術語之間的聯繫。

	return (
		<SlideLayout currentSlide="15" courseName="AI概論與工具介紹">
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
						{/* Title (Can reuse title from slide 11 or adjust) */}
						<h1 className="text-3xl md:text-4xl font-bold text-white text-center">
							生成式 AI 與語言模型
						</h1>

						{/* Nested Boxes Visualization with Language Model */}
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
											labelClassName="mb-2 md:mb-3" // Adjust margin for inner content
											contentClassName="flex items-center gap-4" // Align label and inner box
										>
											{/* Added Language Model Box */}
											<div className="flex-grow">
												{/* Empty div for spacing or keep label left aligned */}
											</div>
											<NestedBox
												color="bg-sky-200/80 border-sky-400"
												label=""
												className="flex-1 min-w-[150px] !p-3" // Smaller padding, ensure min width
												labelClassName="!mb-0" // Remove margin from empty label
											>
												<p className="text-center text-lg font-semibold text-sky-800">
													語言模型
												</p>
											</NestedBox>
										</NestedBox>
									</NestedBox>
								</NestedBox>
							</NestedBox>
						</motion.div>

						{/* Content Points (Can be refined or removed based on focus) */}
						<motion.p
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ duration: 0.6, delay: 0.4 }}
							className="text-center text-lg md:text-xl text-gray-300 max-w-3xl mx-auto"
						>
							<strong className="text-sky-400">語言模型</strong>是實現
							<strong className="text-red-400">生成式 AI</strong>目標的一種基於
							<strong className="text-green-400">深度學習</strong>的常見
							<strong className="text-yellow-400">手段</strong>。
						</motion.p>
					</motion.div>
				</div>

				{/* Optional Decorative Elements (Can reuse from slide 11) */}
				<motion.div
					className="absolute -bottom-8 -left-8 w-24 h-24 bg-blue-500/10 blur-[50px] rounded-full"
					initial={{ opacity: 0, scale: 0.8 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ duration: 1 }}
				/>
				<motion.div
					className="absolute -top-8 -right-8 w-24 h-24 bg-sky-500/10 blur-[50px] rounded-full"
					initial={{ opacity: 0, scale: 0.8 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ duration: 1, delay: 0.2 }}
				/>
			</div>
		</SlideLayout>
	);
}
