import { motion } from "framer-motion";
import SlideLayout from "../../layouts/SlideLayout";
import { Title } from "../../components/Title";

export function Lesson3Slide24() {
	// Speaker Notes:
	// 在我們深入探討 Prompt Engineering 之前，有幾點需要釐清。
	// 首先，這堂課的重點不是訓練 AI 模型本身，我們不會接觸到模型訓練的技術細節。
	// 我們的真正目標，是「訓練我們自己」。學習如何更有效地與現有的人工智慧工具互動，從而放大我們自身的能力。
	// 另外，雖然我們會討論提示的技巧，但目標不是教你如何為特定名人或非常具體的、單一的任務去寫完美的提示。
	// 重點在於掌握通用的原則和方法，讓你能應對各種不同的情況。

	const points = [
		"本節課中沒有任何模型被訓練。",
		"課程目標：訓練我們自己，在使用人工智慧時發揮更強大的力量。",
	];

	return (
		<SlideLayout slide={24}>
			<motion.div
				className="flex h-full w-full flex-col items-center justify-center p-8 text-white"
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 0.5 }}
			>
				<Title>免責聲明與課程目標</Title>

				<motion.ul
					className="mt-12 w-full max-w-3xl list-disc space-y-6 text-left text-2xl md:text-3xl"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 0.2, staggerChildren: 0.2 }}
				>
					{points.map((point, index) => (
						<motion.li
							key={index}
							className="leading-relaxed"
							initial={{ opacity: 0, x: -20 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.4 }}
						>
							{point}
						</motion.li>
					))}
				</motion.ul>
			</motion.div>
		</SlideLayout>
	);
}
