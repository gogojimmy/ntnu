import SlideLayout from "../../layouts/SlideLayout";
import { motion } from "motion/react";

// Helper component for a single node (neuron)
const Neuron = ({ color = "bg-blue-500/70" }: { color?: string }) => (
	<div className={`w-10 h-10 rounded-full ${color} border border-white/30`} />
);

// Helper component for a layer of neurons
const Layer = ({
	count,
	color,
	children,
}: {
	count: number;
	color?: string;
	children?: React.ReactNode;
}) => (
	<div className="flex flex-col items-center justify-around h-full gap-5 py-4 px-2 bg-gray-700/30 rounded-lg relative z-10">
		{/* Added z-10 */}
		{children ||
			Array.from({ length: count }).map((_, i) => (
				<Neuron key={i} color={color} />
			))}
		{count > 3 && <span className="text-gray-400 text-xl">⋮</span>}
	</div>
);

export default function Lesson3Slide10() {
	// Speaker Notes:
	// 在機器學習的領域，我們通常會用一種叫做「類神經網路」（neural network）的方式來表示這個有上萬個參數的函數。
	// 有些人可能覺得類神經網路聽起來很像人類的大腦，但實際上它只是一個擁有非常多參數的複雜函數。
	// 當我們用類神經網路來描述這個函數，並透過訓練找出這些參數的過程，這個技術就叫做「深度學習」（deep learning）。
	// 所以，深度學習是機器學習的一種。

	return (
		<SlideLayout currentSlide="10" courseName="AI概論與工具介紹">
			<div className="relative h-full flex flex-col justify-center items-center">
				{/* Background Elements */}
				<div className="absolute inset-0 rounded-2xl bg-black/40 backdrop-blur-sm border border-tech-grid-bright" />

				{/* Content */}
				<div className="relative px-16 py-8 w-full">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6 }}
						className="flex flex-col md:flex-row items-center justify-center gap-16"
					>
						{/* Left Text Section */}
						<motion.div
							initial={{ opacity: 0, x: -20 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.6, delay: 0.2 }}
							className="text-left md:w-2/5 space-y-6"
						>
							<h1 className="text-5xl font-bold text-white">
								深度學習{" "}
								<span className="block text-4xl text-gray-400">
									(Deep Learning)
								</span>
							</h1>
							<p className="text-3xl text-tech-highlight/80">
								是一種機器學習技術
							</p>
							<p className="text-xl text-gray-300 mt-4">
								通常將帶有大量參數的函數表示成類神經網路 (neural network)。
								當使用類神經網路來描述模型並訓練時，就是
								<strong className="text-white">深度學習</strong>。
							</p>
						</motion.div>

						{/* Right Neural Network Diagram Section */}
						<motion.div
							initial={{ opacity: 0, x: 20 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.6, delay: 0.4 }}
							className="relative md:w-3/5 flex flex-col items-center"
						>
							{/* Simplified Neural Network Diagram */}
							<div className="relative flex items-stretch justify-center gap-5 h-80 w-full max-w-2xl">
								{/* Added items-stretch */}
								{/* Input Layer */}
								<Layer count={3} color="bg-yellow-500/70" />

								{/* Connections (Simplified visually) */}
								<div className="absolute inset-0 flex items-center justify-center z-0">
									<svg
										className="absolute w-full h-full"
										fill="none"
										viewBox="0 0 240 120"
										preserveAspectRatio="none"
									>
										{/* Lines from input to hidden1 */}
										<line
											x1="30"
											y1="20"
											x2="90"
											y2="20"
											stroke="#6b7280"
											strokeWidth="0.5"
										/>
										<line
											x1="30"
											y1="20"
											x2="90"
											y2="60"
											stroke="#6b7280"
											strokeWidth="0.5"
										/>
										<line
											x1="30"
											y1="20"
											x2="90"
											y2="100"
											stroke="#6b7280"
											strokeWidth="0.5"
										/>
										<line
											x1="30"
											y1="60"
											x2="90"
											y2="20"
											stroke="#6b7280"
											strokeWidth="0.5"
										/>
										<line
											x1="30"
											y1="60"
											x2="90"
											y2="60"
											stroke="#6b7280"
											strokeWidth="0.5"
										/>
										<line
											x1="30"
											y1="60"
											x2="90"
											y2="100"
											stroke="#6b7280"
											strokeWidth="0.5"
										/>
										<line
											x1="30"
											y1="100"
											x2="90"
											y2="20"
											stroke="#6b7280"
											strokeWidth="0.5"
										/>
										<line
											x1="30"
											y1="100"
											x2="90"
											y2="60"
											stroke="#6b7280"
											strokeWidth="0.5"
										/>
										<line
											x1="30"
											y1="100"
											x2="90"
											y2="100"
											stroke="#6b7280"
											strokeWidth="0.5"
										/>
										{/* Lines from hidden1 to hidden2 */}
										<line
											x1="90"
											y1="20"
											x2="150"
											y2="20"
											stroke="#6b7280"
											strokeWidth="0.5"
										/>
										<line
											x1="90"
											y1="20"
											x2="150"
											y2="60"
											stroke="#6b7280"
											strokeWidth="0.5"
										/>
										<line
											x1="90"
											y1="20"
											x2="150"
											y2="100"
											stroke="#6b7280"
											strokeWidth="0.5"
										/>
										<line
											x1="90"
											y1="60"
											x2="150"
											y2="20"
											stroke="#6b7280"
											strokeWidth="0.5"
										/>
										<line
											x1="90"
											y1="60"
											x2="150"
											y2="60"
											stroke="#6b7280"
											strokeWidth="0.5"
										/>
										<line
											x1="90"
											y1="60"
											x2="150"
											y2="100"
											stroke="#6b7280"
											strokeWidth="0.5"
										/>
										<line
											x1="90"
											y1="100"
											x2="150"
											y2="20"
											stroke="#6b7280"
											strokeWidth="0.5"
										/>
										<line
											x1="90"
											y1="100"
											x2="150"
											y2="60"
											stroke="#6b7280"
											strokeWidth="0.5"
										/>
										<line
											x1="90"
											y1="100"
											x2="150"
											y2="100"
											stroke="#6b7280"
											strokeWidth="0.5"
										/>
										{/* Lines from hidden2 to output - simplified */}
										{/* Adjusted coordinates slightly */}
										<line
											x1="150"
											y1="20"
											x2="210"
											y2="20"
											stroke="#6b7280"
											strokeWidth="0.5"
										/>
										<line
											x1="150"
											y1="60"
											x2="210"
											y2="60"
											stroke="#6b7280"
											strokeWidth="0.5"
										/>
										<line
											x1="150"
											y1="100"
											x2="210"
											y2="100"
											stroke="#6b7280"
											strokeWidth="0.5"
										/>
									</svg>
								</div>

								{/* Hidden Layer 1 */}
								<Layer count={3} color="bg-blue-500/70" />
								{/* Hidden Layer 2 */}
								<Layer count={3} color="bg-orange-500/70" />
								{/* Ellipsis */}
								<div className="flex flex-col items-center justify-around h-full text-gray-400 text-3xl py-4 px-2 relative z-10">
									{/* Added z-10 */}
									<span>...</span>
									<span>...</span>
									<span>...</span>
								</div>
								{/* Output Layer */}
								<Layer count={3} color="bg-green-500/70" />

								{/* Output Arrows */}
								<div className="absolute right-0 top-0 bottom-0 flex flex-col justify-around pr-[-25px] translate-x-full">
									{/* Adjusted positioning */}
									<svg
										className="w-8 h-8 text-gray-400"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M14 5l7 7m0 0l-7 7m7-7H3"
										/>
									</svg>
									<svg
										className="w-8 h-8 text-gray-400"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M14 5l7 7m0 0l-7 7m7-7H3"
										/>
									</svg>
									<svg
										className="w-8 h-8 text-gray-400"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M14 5l7 7m0 0l-7 7m7-7H3"
										/>
									</svg>
								</div>
							</div>
							<p className="text-2xl text-tech-highlight/90 mt-4">
								類神經網路 (Neural Network)
							</p>
						</motion.div>
					</motion.div>
				</div>

				{/* Optional Decorative Elements */}
				<motion.div
					className="absolute bottom-10 right-10 w-24 h-24 bg-orange-500/10 blur-[50px] rounded-full"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 1.5 }}
				/>
				<motion.div
					className="absolute top-10 left-10 w-24 h-24 bg-green-500/10 blur-[50px] rounded-full"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 1.5, delay: 0.3 }}
				/>
			</div>
		</SlideLayout>
	);
}
