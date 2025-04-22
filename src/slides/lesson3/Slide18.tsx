import { motion } from "framer-motion";
import SlideLayout from "../../layouts/SlideLayout";
import { Title } from "../../components/Title";

export function Lesson3Slide18() {
	// Speaker Notes:
	// 過去的 AI：
	// 在過去，我們往往覺得生成式人工智慧是一個專才，它只能夠做一件事情。
	// 以 Google 翻譯為例，它的唯一功能就是幫你做翻譯，你給它一段中文，它就幫你翻譯成英文，功能非常單一，就像一個工具一樣。
	// 今日的 AI：
	// 但是，像 ChatGPT 這類的新一代生成式人工智慧，它們的特別之處在於沒有特定的功能。
	// 即使 ChatGPT 也可以做翻譯，但如果你只給它一句中文，它並不會立刻幫你翻譯，因為它根本不知道你想要它做什麼。
	// 你需要明確地告訴它你的要求，例如「我要把以下文句做翻譯」，它才知道你的目的是要進行翻譯。

	const textExample = "這堂課我們要講如何駕馭大型語言模型 ......";

	return (
		<SlideLayout slide={18}>
			<motion.div
				className="flex h-full flex-col items-center justify-center p-8 text-white"
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 0.5 }}
			>
				<Title>今日的生成式人工智慧厲害在哪裡？</Title>

				<div className="mt-8 grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-8 w-full max-w-5xl">
					{/* Past AI Section */}
					<motion.div
						className="rounded-lg border border-gray-700 bg-gray-800/50 p-6 shadow-lg"
						initial={{ opacity: 0, x: -20 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ delay: 0.2, duration: 0.5 }}
					>
						<h3 className="mb-4 text-center text-xl font-semibold text-blue-400">
							過去的 AI：單一功能的「工具」
						</h3>
						<p className="mb-2 text-center text-gray-400">例如：Google 翻譯</p>
						<div className="flex flex-col items-center space-y-2 text-center">
							<p className="text-sm text-gray-300">{textExample}</p>
							<span className="text-2xl text-blue-400">→</span>
							<div className="rounded bg-green-600/30 px-2 py-1 text-sm text-green-300">
								翻譯系統 (自動)
							</div>
							<span className="text-2xl text-blue-400">→</span>
							<p className="text-sm text-gray-300">
								This course is about ......
							</p>
						</div>
					</motion.div>

					{/* Today's AI Section */}
					<motion.div
						className="rounded-lg border border-gray-700 bg-gray-800/50 p-6 shadow-lg"
						initial={{ opacity: 0, x: 20 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ delay: 0.4, duration: 0.5 }}
					>
						<h3 className="mb-4 text-center text-xl font-semibold text-orange-400">
							今日的 AI：沒有特定功能的「工具人」
						</h3>
						<p className="mb-2 text-center text-gray-400">例如：ChatGPT</p>
						<div className="flex flex-col items-center space-y-2 text-center">
							<p className="rounded border border-dashed border-orange-400 px-2 py-1 text-sm text-orange-300">
								你要說清楚你要幹嘛
							</p>
							<p className="text-sm text-red-400">對以下文句做翻譯：</p>
							<p className="text-sm text-gray-300">{textExample}</p>
							<span className="text-2xl text-orange-400">→</span>
							<div className="rounded bg-purple-600/30 px-2 py-1 text-sm text-purple-300">
								ChatGPT (需指令)
							</div>
							<span className="text-2xl text-orange-400">→</span>
							<p className="text-sm text-gray-300">
								This course is about ......
							</p>
						</div>
					</motion.div>
				</div>
			</motion.div>
		</SlideLayout>
	);
}
