import { motion } from "framer-motion";
import SlideLayout from "../../layouts/SlideLayout";
import { Title } from "../../components/Title";
import analysisImage from "../../assets/analysis.png"; // Assuming image is in src/assets

export function Lesson3Slide28() {
	// Speaker Notes:
	// 這是姜成翰助教的論文中提到的一個技巧，可以看作是 COT 的變形或應用。
	// 想法很簡單：不要讓模型直接給出評分或答案，而是要求它先進行分析（Analyze），再給出評分（Rate）。
	// 就像圖片上半部的 Prompt 範例，要求模型先以 "Analysis:" 開頭進行分析，然後再以 "Rating:" 開頭給出評分。
	// 下半部的表格數據顯示，這種「Analyze-rate」的方式（先解釋再回答）比起直接給答案（Score only / Free Text），
	// 在多個評估指標（如 Coherence, Consistency, Relevance）上都能取得更好的結果。
	// 這再次印證了引導模型進行思考、解釋其推理過程的重要性。
	// 論文來源：
	// https://arxiv.org/abs/2305.01937
	// https://arxiv.org/abs/2310.05657

	return (
		<SlideLayout slide={28}>
			<motion.div
				className="flex h-full w-full flex-col items-center justify-start p-8 text-white"
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 0.5 }}
			>
				<Title>讓模型解釋自己的答案</Title>

				<motion.div
					className="mt-4 w-full max-w-6xl overflow-hidden rounded-lg border border-gray-700 shadow-lg"
					initial={{ opacity: 0, scale: 0.9 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ delay: 0.2, duration: 0.5 }}
				>
					<img
						src={analysisImage}
						alt="Analysis-rate Prompt Example and Results"
						className="h-full w-full object-contain bg-white" // Added bg-white for better image visibility
					/>
				</motion.div>
				<motion.p
					className="mt-4 text-xs text-gray-500"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 0.5, duration: 0.5 }}
				>
					圖片來源: Chiang & Lee (2023)
				</motion.p>
			</motion.div>
		</SlideLayout>
	);
}
