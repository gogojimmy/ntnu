import { motion } from "framer-motion";
import SlideLayout from "../../layouts/SlideLayout";
import { Title } from "../../components/Title";

export function Lesson3Slide26() {
	// Speaker Notes:
	// 在這個世界上呢，確實存在一些被稱為「神奇的咒語」的東西，
	// 這些咒語有可能可以強化模型的能力。
	// 但我要先加一個免責聲明，這些神奇的咒語並非對所有的模型和所有的任務都適用。
	// 其中一個最經典的咒語就是 COT (Chain of Thought)。
	// COT是什麼意思呢？一句話就可以說完，就是叫模型「思考」。

	const points = [
		'世界上存在一些<span class="text-yellow-300">神奇的咒語</span>，可能可以強化模型的能力。',
		'<span class="text-red-400">免責聲明</span>：這些咒語<span class="text-red-400">不一定對所有模型和任務都適用</span>。',
		'最經典的咒語之一：<span class="text-green-300 font-semibold">COT (Chain of Thought)</span>。',
		'COT 的意思：叫模型<span class="text-blue-300">思考</span>。',
	];

	return (
		<SlideLayout slide={26}>
			<motion.div
				className="flex h-full w-full flex-col items-center justify-center p-8 text-white"
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 0.5 }}
			>
				<Title>強化語言模型的方法 (不訓練模型)</Title>

				<motion.div
					className="mt-10 w-full max-w-4xl text-center"
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.2, duration: 0.5 }}
				>
					<h3 className="mb-4 text-3xl font-semibold text-purple-300">
						第一部分：神奇的咒語 (Magic Prompts)
					</h3>
					<h4 className="mb-8 text-2xl font-medium text-teal-300">
						神奇的咒語：COT (Chain of Thought)
					</h4>

					<motion.ul
						className="list-disc space-y-5 pl-12 text-left text-xl md:text-2xl"
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ delay: 0.4, staggerChildren: 0.2 }}
					>
						{points.map((point, index) => (
							<motion.li
								key={index}
								className="leading-relaxed"
								initial={{ opacity: 0, x: -20 }}
								animate={{ opacity: 1, x: 0 }}
								transition={{ duration: 0.4 }}
								dangerouslySetInnerHTML={{ __html: point }}
							></motion.li>
						))}
					</motion.ul>
				</motion.div>
			</motion.div>
		</SlideLayout>
	);
}
