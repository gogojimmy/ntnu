import SlideLayout from "../../layouts/SlideLayout";
import { motion } from "motion/react";

export default function Lesson3Slide9() {
	// Speaker Notes: (Optional: Add speaker notes if needed)
	// 這張投影片總結了目前一些主流大型語言模型的參數規模。
	// 數據主要來自公開論文或報告，例如 Phi-3 有 70 億參數，Claude 3.5 和 ChatGPT 大約是 1750 億，GPT-4 則達到約 1.76 兆。
	// 需要注意的是，這些數字大多是估計值，因為許多模型的確切參數數量並未公開。
	// 更詳細和精確的資訊，可以參考原始論文，例如我們在這裡附上的連結。

	const models = [
		{
			name: "Phi-3-7B",
			params: "~7B",
			citation: "Abdin et al., 2024",
			description: "Small Language Model (SLM)",
		},
		{
			name: "Claude 3.5 Sonnet",
			params: "~175B",
			citation: "Anthropic, 2024",
			description:
				"(2024-10-22) Latest model offering state-of-the-art performance",
		},
		{
			name: "Gemini 2.0 Flash",
			params: "N/A",
			citation: "Google, 2024",
			description:
				"Latest/most advanced Gemini model (Other models like Med-PaLM 540B not public)",
		},
		{
			name: "ChatGPT / GPT-4",
			params: "~175B / ~1.76T",
			citation: "OpenAI, 2023a/b",
			description: "High-intelligence models",
		},
		{
			name: "GPT-4o / GPT-4o-mini",
			params: "~200B / ~8B",
			citation: "OpenAI, 2024a/b",
			description:
				"GPT-4 level intelligence but faster / Small model for focused tasks",
		},
		{
			name: "o1-mini / o1-preview",
			params: "~100B / ~300B",
			citation: "OpenAI, 2024c/d",
			description: "Latest models with new AI capabilities",
		},
	];

	return (
		<SlideLayout currentSlide="09" courseName="AI概論與工具介紹">
			<div className="relative h-full flex flex-col justify-center">
				{/* Background Elements */}
				<div className="absolute inset-0 rounded-2xl bg-black/40 backdrop-blur-sm border border-tech-grid-bright" />

				{/* Content */}
				<div className="relative px-12 py-6">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6 }}
						className="space-y-4"
					>
						{/* Title */}
						<h1 className="text-3xl font-bold text-white mb-4 text-center">
							5.1 Language Models - 主流 AI 模型與參數量
						</h1>

						{/* Introduction Text */}
						<p className="text-lg text-gray-300 mb-6">
							We experiment with several recent small and large language models:
						</p>

						{/* Model List */}
						<div className="space-y-3 max-w-5xl mx-auto text-gray-200">
							{models.map((model, index) => (
								<motion.div
									key={index}
									initial={{ opacity: 0, x: -10 }}
									animate={{ opacity: 1, x: 0 }}
									transition={{ duration: 0.5, delay: 0.1 * index }}
									className="bg-[#1a1a1a]/80 rounded-lg p-3 flex items-start gap-3"
								>
									<span className="font-mono text-tech-highlight/80 w-6 text-right flex-shrink-0">
										{index + 1}.
									</span>
									<div className="flex-grow">
										<p className="font-semibold">
											{model.name}
											<span className="font-normal text-tech-cyan ml-2">
												({model.params} parameters)
											</span>
											<span className="text-sm text-gray-400 ml-2">
												[{model.citation}]
											</span>
										</p>
										<p className="text-sm text-gray-400 mt-1">
											{model.description}
										</p>
									</div>
								</motion.div>
							))}
						</div>

						{/* Disclaimer and Reference */}
						<motion.div
							initial={{ opacity: 0, y: 10 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.8, duration: 0.5 }}
							className="mt-6 text-sm text-gray-400 max-w-5xl mx-auto space-y-2"
						>
							<p>
								The exact numbers of parameters of several LLMs (e.g., GPT,
								Gemini 2.0 Flash) have not been publicly disclosed yet. The
								model size estimates reported here are mined from public
								articles only; the authors cannot vouch for their accuracy and
								they are provided only to aid in contextualizing model
								performance. Please refer to the original/future documentation
								for more precise information about these models.
							</p>
							<p>
								參考論文 (Reference Paper):
								<a
									href="https://arxiv.org/pdf/2412.19260"
									target="_blank"
									rel="noopener noreferrer"
									className="text-tech-highlight hover:underline ml-2"
								>
									https://arxiv.org/pdf/2412.19260
								</a>
							</p>
							<p>
								Few models (e.g., Phi-3 and Claude) required minimal automatic
								post-processing to correct some formatting issues.
							</p>
						</motion.div>
					</motion.div>
				</div>

				{/* Optional Decorative Elements */}
				<motion.div
					className="absolute bottom-10 left-10 w-20 h-20 bg-blue-600/10 blur-[45px] rounded-full"
					initial={{ opacity: 0 }}
					animate={{ opacity: 0.8 }}
					transition={{ duration: 1.5 }}
				/>
				<motion.div
					className="absolute top-10 right-10 w-20 h-20 bg-cyan-500/10 blur-[45px] rounded-full"
					initial={{ opacity: 0 }}
					animate={{ opacity: 0.8 }}
					transition={{ duration: 1.5, delay: 0.3 }}
				/>
			</div>
		</SlideLayout>
	);
}
