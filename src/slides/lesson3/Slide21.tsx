import { motion } from "framer-motion";
import SlideLayout from "../../layouts/SlideLayout";
import { Title } from "../../components/Title";

export function Lesson3Slide21() {
	// Speaker Notes:
	// 今天大家在討論這些大型語言模型的時候，往往會說這些模型有時候會犯錯或者是有時候會有幻覺（hallucination）這個問題。
	// 但是你有沒有想過，對一個模型來說，要完全不犯錯、完全沒有幻覺其實並不困難，
	// 它只要你問什麼問題它統統都說「我不想回答」、「身為一個 AI 我不想回答這個問題」、「我無法做這件事情」，它其實就不會犯任何錯。
	// 它今天會犯錯是因為它努力的嘗試想要幫你，所以它才會犯錯。
	// 所以其實我們對這些模型犯錯也許不需要太過苛責。

	const points = [
		"模型努力的嘗試想要幫你，所以才會犯錯。",
		"要完全不犯錯很簡單，只要什麼問題都說「我無法回答」。",
		"我們對這些模型犯錯也許不需要太過苛責。",
	];

	return (
		<SlideLayout>
			<motion.div
				className="flex h-full w-full flex-col items-center justify-center p-8 text-white"
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 0.5 }}
			>
				<Title>AI 的「錯誤」與「幻覺」</Title>

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
