import { motion } from "framer-motion";
import SlideLayout from "../../layouts/SlideLayout";
import { Title } from "../../components/Title";

export function Lesson3Slide19() {
	// Speaker Notes:
	// 所以，跟 ChatGPT 互動的關鍵在於心態的轉變。
	// 不要再把它當成一個功能固定的「工具」，期望它自動知道要做什麼。
	// 而是要把它看作一個需要你明確指示的「工具人」或「助理」。
	// 你必須清楚地告訴它你的目標和要求，它才能有效地幫助你完成任務。
	// 關鍵在於「問對問題」，也就是下達清晰、具體的指令。

	return (
		<SlideLayout slide={19}>
			<motion.div
				className="flex h-full w-full flex-col items-center justify-center p-8 text-white"
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 0.5 }}
			>
				<Title>與 ChatGPT 互動的心態轉變</Title>

				<motion.div
					className="mt-12 w-full max-w-4xl space-y-16 text-center"
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.2, duration: 0.5 }}
				>
					<div>
						<h2 className="text-4xl font-semibold md:text-5xl">
							<span className="text-red-500 line-through">不要問</span> ChatGPT
							能為你做什麼
						</h2>
						<p className="mt-4 text-xl text-blue-400 md:text-2xl">
							(你認為 ChatGPT 是「工具」，只有某些固定功能)
						</p>
					</div>

					<div>
						<h2 className="text-4xl font-semibold md:text-5xl">
							<span className="text-green-500">要問</span> 你想要 ChatGPT
							幫你做什麼
						</h2>
						<p className="mt-4 text-xl text-blue-400 md:text-2xl">
							(只要你下對指示，ChatGPT 就能幫助你)
						</p>
					</div>
				</motion.div>
			</motion.div>
		</SlideLayout>
	);
}
