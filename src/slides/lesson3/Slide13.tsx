import SlideLayout from "../../layouts/SlideLayout";
import { motion } from "motion/react";

// Reusable Icon Component
const IconDisplay = ({
	children,
	label,
}: {
	children: React.ReactNode;
	label: string;
}) => (
	<motion.div
		initial={{ opacity: 0, y: 10 }}
		animate={{ opacity: 1, y: 0 }}
		transition={{ duration: 0.5 }}
		className="flex flex-col items-center text-center bg-[#1a1a1a]/80 rounded-lg p-6 space-y-3"
	>
		<div className="text-6xl mb-3">{children}</div>
		<p className="text-lg text-gray-300">{label}</p>
	</motion.div>
);

export default function Lesson3Slide13() {
	// Speaker Notes:
	// 我們之前提到，生成式 AI 的目標是產生複雜且有結構的物件。
	// 這裡有一個關鍵點：產生的物件必須是「新」的，是模型在訓練過程中從未直接「看過」或「背誦」過的。
	// 模型學習的是數據中的模式、風格和結構，而不是具體的某個樣本。
	// 就像學畫畫，老師給你看了很多貓的照片（訓練資料），但要求你畫一隻「新的」貓，而不是複製照片。
	// 同樣地，AI 模型要能根據學習到的知識，創造出獨一無二的圖片、文章或旋律，這才是真正的「生成」。
	// 如果模型只是輸出訓練資料裡的東西，那更像是搜尋引擎或資料庫，而不是生成式 AI。

	return (
		<SlideLayout currentSlide="13" courseName="AI概論與工具介紹">
			<div className="relative h-full flex flex-col justify-center items-center">
				{/* Background Elements */}
				<div className="absolute inset-0 rounded-2xl bg-black/40 backdrop-blur-sm border border-tech-grid-bright" />

				{/* Content */}
				<div className="relative px-4 md:px-16 py-8 w-full">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6 }}
						className="space-y-8"
					>
						{/* Title */}
						<h1 className="text-3xl md:text-4xl font-bold text-white text-center">
							機器要能夠產生訓練時從沒看過的東西
						</h1>

						{/* Explanation */}
						<p className="text-xl md:text-2xl text-gray-300 text-center max-w-3xl mx-auto">
							生成式 AI 的目標是
							<strong className="text-tech-highlight">創造新的內容</strong>，
							而不僅僅是複製或分類訓練資料。 模型學習模式與結構，並
							<strong className="text-white">泛化</strong>以產生獨特輸出。
						</p>

						{/* Examples Section */}
						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ delay: 0.3, duration: 0.5 }}
							className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mt-10"
						>
							<IconDisplay label="生成一張獨一無二的貓咪圖片 (非訓練圖片)">
								🖼️✨ {/* Image generation icon */}
							</IconDisplay>
							<IconDisplay label="根據提示寫一首新的詩 (非現有詩句組合)">
								✍️📜 {/* Text generation icon */}
							</IconDisplay>
							<IconDisplay label="創作一段符合特定風格的新旋律 (非複製樂譜)">
								🎵🎹 {/* Music generation icon */}
							</IconDisplay>
						</motion.div>

						<motion.p
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ delay: 0.6, duration: 0.5 }}
							className="text-center text-xl text-red-400 font-semibold mt-8"
						>
							關鍵在於「生成」而非「記憶」。
						</motion.p>
					</motion.div>
				</div>

				{/* Optional Decorative Elements */}
				<motion.div
					className="absolute -top-10 left-1/4 w-20 h-20 bg-yellow-500/10 blur-[45px] rounded-full"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 1.5 }}
				/>
				<motion.div
					className="absolute -bottom-10 right-1/4 w-20 h-20 bg-teal-500/10 blur-[45px] rounded-full"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 1.5, delay: 0.3 }}
				/>
			</div>
		</SlideLayout>
	);
}
