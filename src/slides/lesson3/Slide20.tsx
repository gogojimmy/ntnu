import { motion } from "framer-motion";
import SlideLayout from "../../layouts/SlideLayout";
import { Title } from "../../components/Title";
import chatgptImg from "../../assets/chatgtp_hahaha.png"; // Assuming image is in src/assets
import claudeImg from "../../assets/claude_hahaha.png"; // Assuming image is in src/assets
import copilotImg from "../../assets/copilot_hahaha.png"; // Assuming image is in src/assets

export function Lesson3Slide20() {
	// Speaker Notes:
	// 評估大型語言模型的好壞，有時候並不像傳統軟體測試那樣有明確的標準。
	// 我們可以看到，即使是同樣的簡單指令，像是「講說『哈哈哈』一百次」。
	// 不同的模型（ChatGPT, Claude, Copilot/Gemini）的回應方式也可能大相逕庭。
	// 有的會直接照做，有的會覺得指令奇怪而拒絕或打哈哈。
	// 這顯示了評估模型需要考慮多方面的因素，包括理解指令的準確性、遵循指令的能力、以及生成內容的「合理性」或「創造性」。
	// 沒有絕對的「最好」，而是要看具體應用場景和需求。

	const images = [
		{
			src: chatgptImg,
			alt: "ChatGPT response to 'say hahaha 100 times'",
			delay: 0.2,
		},
		{
			src: claudeImg,
			alt: "Claude response to 'say hahaha 100 times'",
			delay: 0.4,
		},
		{
			src: copilotImg,
			alt: "Copilot response to 'say hahaha 100 times'",
			delay: 0.6,
		},
	];

	return (
		<SlideLayout slide={20}>
			<motion.div
				className="flex h-full w-full flex-col items-center justify-start p-8 text-white"
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 0.5 }}
			>
				<Title>要如何評估模型</Title>

				<div className="mt-4 grid w-full max-w-5xl grid-cols-1 gap-2 mx-auto">
					{images.map((image, index) => (
						<motion.div
							key={index}
							className="overflow-hidden rounded-lg border border-gray-700 shadow-lg max-h-[25vh]"
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: image.delay, duration: 0.5 }}
						>
							<img
								src={image.src}
								alt={image.alt}
								className="h-full w-full object-contain"
							/>
						</motion.div>
					))}
				</div>
				<motion.p
					className="mt-6 text-lg text-gray-400"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 0.8, duration: 0.5 }}
				>
					不同模型對相同指令可能有不同反應 (指令：「講說『哈哈哈』一百次」)
				</motion.p>
			</motion.div>
		</SlideLayout>
	);
}
