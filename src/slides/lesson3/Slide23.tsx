import { motion } from "framer-motion";
import SlideLayout from "../../layouts/SlideLayout";
import { Title } from "../../components/Title";

// Simple placeholder components for the diagram
const Box = ({
	color = "bg-blue-200",
	text = "",
	textColor = "text-black",
	className = "",
}) => (
	<div
		className={`flex h-16 w-32 items-center justify-center rounded-lg p-2 text-center ${color} ${textColor} ${className}`}
	>
		{text}
	</div>
);

const Arrow = ({ big = false }) => (
	<span className={`mx-2 text-3xl font-bold ${big ? "text-4xl" : ""}`}>→</span>
);

const Emoji = ({ type = "sad" }) => (
	<span className="mt-1 text-4xl">{type === "sad" ? "😟" : "😄"}</span>
);

const Snowflake = () => (
	<span className="absolute -right-2 -top-2 text-2xl text-blue-300">❄️</span>
);

export function Lesson3Slide23() {
	// Speaker Notes:
	// 這就帶出了「提示工程」(Prompt Engineering) 的概念。
	// Prompt Engineering 可以看作是人類與 AI 溝通的藝術與科學。
	// 就像圖示一樣，一個普通的 Prompt 可能只能得到普通甚至不滿意的結果（例如：語言模型輸出不精確，就像得到一個哭臉）。
	// 但透過精心設計的「Better Prompt」，我們可以引導同一個語言模型產生更優質、更符合我們預期的結果（得到一個笑臉）。
	// 「Engineering」這個字本身就很有趣，它源自拉丁文的「巧妙」和「設計」。
	// 這也恰恰說明了 Prompt Engineering 的核心：巧妙地設計你的輸入（提示），以獲得更好的輸出。
	// 這不是在調整模型，而是在調整你和模型的溝通方式。

	return (
		<SlideLayout slide={23}>
			<motion.div
				className="flex h-full w-full flex-col items-center justify-center p-8 text-white"
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 0.5 }}
			>
				<Title className="text-3xl md:text-4xl">
					Prompt Engineering: 人類與人工智慧溝通的藝術
				</Title>

				{/* Diagram Section */}
				<motion.div
					className="my-8 flex flex-col items-center space-y-6 md:flex-row md:space-x-4 md:space-y-0"
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.2, duration: 0.5 }}
				>
					{/* First Flow */}
					<div className="flex flex-col items-center md:flex-row md:items-center">
						<div className="flex flex-col items-center">
							<Box color="bg-green-100" text="Prompt" />
							<span className="mt-1 text-sm text-gray-400">
								(給語言模型的輸入)
							</span>
						</div>
						<Arrow />
						<div className="relative">
							<Box color="bg-blue-100" text="語言模型" />
							<Snowflake />
						</div>
						<Arrow />
						<div className="flex flex-col items-center">
							<Box color="bg-orange-100" />
							<Emoji type="sad" />
						</div>
					</div>

					<Arrow big={true} />

					{/* Second Flow */}
					<div className="flex flex-col items-center md:flex-row md:items-center">
						<Box
							color="bg-green-200/70"
							text="Better Prompt"
							className="bg-stripes"
						/>
						{/* Basic CSS Stripes for illustration */}
						<style>{`.bg-stripes { background-image: repeating-linear-gradient(-45deg, transparent, transparent 5px, rgba(0, 128, 0, 0.1) 5px, rgba(0, 128, 0, 0.1) 10px); }`}</style>
						<Arrow />
						<div className="relative">
							<Box color="bg-blue-100" text="語言模型" />
							<Snowflake />
						</div>
						<Arrow />
						<div className="flex flex-col items-center">
							<Box color="bg-yellow-100" />
							<Emoji type="happy" />
						</div>
					</div>
				</motion.div>

				{/* Definition Section */}
				<motion.div
					className="mt-6 max-w-3xl text-center text-sm text-gray-300 md:text-base"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 0.4, duration: 0.5 }}
				>
					<p>
						Engineering: 工程學的英文「engineering」一詞來自於拉丁文
						ingenium（意為「巧妙」）、ingeniare（意為「設計」）
					</p>
					<p className="mt-1 text-xs text-gray-500">
						(中文維基百科，2024/02/17)
					</p>
				</motion.div>
			</motion.div>
		</SlideLayout>
	);
}
