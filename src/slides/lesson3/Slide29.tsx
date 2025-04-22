import { motion } from "framer-motion";
import SlideLayout from "../../layouts/SlideLayout";
import { Title } from "../../components/Title";
import emotionImage from "../../assets/emotion.png"; // Assuming image is in src/assets

export function Lesson3Slide29() {
	// Speaker Notes:
	// 除了讓模型思考，還有一些更有趣、甚至有點「旁門左道」的技巧，例如「情緒勒索」。
	// 這篇論文提出的 "EmotionPrompt" 技巧，核心思想是在原本的指令後面，
	// 加上一句帶有情感壓力、強調任務重要性的話，例如「This is very important to my career」。
	// 實驗結果顯示（看右邊的表格），對於多種大型語言模型（LLMs），
	// 加上這句情感提示後，在特定任務上的表現（例如判斷詞語意義是否相同）普遍有所提升。
	// 這似乎利用了模型在訓練過程中學到的、對人類情感表達的反應模式。
	// 雖然效果顯著，但這種方法是否穩健、是否適用所有情境，還需要更多研究。
	// 論文來源：https://arxiv.org/abs/2307.11760

	return (
		<SlideLayout>
			<motion.div
				className="flex h-full w-full flex-col items-center justify-start p-8 text-white"
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 0.5 }}
			>
				<Title>對模型情緒勒索</Title>

				<motion.div
					className="mt-4 w-full max-w-5xl overflow-hidden rounded-lg border border-gray-700 shadow-lg"
					initial={{ opacity: 0, scale: 0.9 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ delay: 0.2, duration: 0.5 }}
				>
					<img
						src={emotionImage}
						alt="EmotionPrompt Example and Results"
						className="h-full w-full object-contain bg-white" // Added bg-white for better image visibility
					/>
				</motion.div>
				<motion.p
					className="mt-4 text-xs text-gray-500"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 0.5, duration: 0.5 }}
				>
					圖片來源: Li et al. (2023)
				</motion.p>
			</motion.div>
		</SlideLayout>
	);
}
