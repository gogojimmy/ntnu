import { motion } from "framer-motion";
import SlideLayout from "../../layouts/SlideLayout";
import { Title } from "../../components/Title";
import cotImage from "../../assets/cot.png"; // Assuming image is in src/assets

export function Lesson3Slide27() {
	// Speaker Notes:
	// 這是 Chain of Thought (COT) 的一個經典範例。
	// 左邊可以看到，對於一個數學問題，如果直接要求答案，模型可能會直接給出錯誤的結果（雖然範例中剛好對）。
	// 但是，如果在問題後面加上一句神奇的咒語，例如「Let's think step by step」，
	// 模型就會先輸出一系列的思考步驟，然後基於這些步驟給出最終答案。
	// 右邊的表格顯示，僅僅加上這句話，就能顯著提高模型在數學推理任務上的準確率（從 Zero-shot 的 17.7% 提升到 78.7%）。
	// 這證明了引導模型進行逐步思考的重要性。
	// 圖片來源：
	// https://arxiv.org/abs/2205.11916 (左邊範例)
	// https://arxiv.org/abs/2211.01910 (右邊表格)

	return (
		<SlideLayout>
			<motion.div
				className="flex h-full w-full flex-col items-center justify-start p-8 text-white"
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 0.5 }}
			>
				<Title>Chain of Thought (COT) 範例</Title>

				<motion.div
					className="mt-4 w-full max-w-5xl overflow-hidden rounded-lg border border-gray-700 shadow-lg"
					initial={{ opacity: 0, scale: 0.9 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ delay: 0.2, duration: 0.5 }}
				>
					<img
						src={cotImage}
						alt="Chain of Thought Example Diagram"
						className="h-full w-full object-contain"
					/>
				</motion.div>
				<motion.p
					className="mt-4 text-xs text-gray-500"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 0.5, duration: 0.5 }}
				>
					圖片來源: Kojima et al. (2022), Wei et al. (2022)
				</motion.p>
			</motion.div>
		</SlideLayout>
	);
}
