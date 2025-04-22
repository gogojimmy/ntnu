import { motion } from "framer-motion";
import SlideLayout from "../../layouts/SlideLayout";
import { Title } from "../../components/Title";
import googleTranslateImg from "../../assets/google_translate.png"; // Assuming image is in src/assets

export function Lesson3Slide17() {
	// Speaker Notes: (Optional)
	// 很多人可能覺得生成式 AI 是最近幾年才出現的新技術，像是 ChatGPT。
	// 但其實，生成式 AI 的概念和應用早就存在了。
	// 例如大家常用的 Google 翻譯，它不僅是翻譯，某種程度上也可以看作是一種生成式任務。
	// 它需要理解來源語言的語意，然後用目標語言「生成」出意思相同但表達方式不同的句子。
	// 這顯示了生成式技術的發展是逐步演進的。

	return (
		<SlideLayout slide={17}>
			<motion.div
				className="flex h-full w-full flex-col items-center justify-center p-8"
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 0.5 }}
			>
				<Title>生成式人工智慧不是今天才有...</Title>
				<motion.img
					src={googleTranslateImg}
					alt="Google Translate Example"
					className="mt-8 h-auto max-h-[70vh] w-auto rounded-lg shadow-lg"
					initial={{ scale: 0.8, opacity: 0 }}
					animate={{ scale: 1, opacity: 1 }}
					transition={{ delay: 0.3, duration: 0.5 }}
				/>
			</motion.div>
		</SlideLayout>
	);
}
