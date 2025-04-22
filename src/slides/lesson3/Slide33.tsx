import { motion } from "framer-motion";
import SlideLayout from "../../layouts/SlideLayout";
import { Title } from "../../components/Title";
import React from "react";

export function Lesson3Slide33() {
	// Speaker Notes:
	// 現在，我們來舉辦一個小小的提示詞大賽！
	// 目標是寫出一個能讓 ChatGPT 產生出一個符合要求的個人簡介網頁的提示詞。
	// 這個練習的重點在於如何將需求拆解成具體的指示，並且考慮到設計、技術限制等各個面向。
	// 看看大家能想出什麼樣的「魔法咒語」！

	const webpageRequirements = [
		"大頭貼與姓名",
		"自我介紹（約 1 段文字）",
		"技能清單（3–6 項）",
		"社群連結圖示（例如 IG、LinkedIn、GitHub）",
		"聯絡我（Email 或表單區）",
	];

	const promptRequirements = [
		"頁面主題：明確告知是個人簡介網頁。",
		"設計風格：指定「現代感十足」的風格。",
		"排版要求：提及五個基本區塊的佈局概念 (e.g., 單欄、多欄組合)。",
		"色彩與字體：建議使用的主色調、輔助色及字體風格。",
		"響應式需求：要求網頁在不同裝置上都能良好顯示。",
		"特別互動：(可選) 提出希望有的動態效果或互動元素。",
		"技術限制：明確指出使用 HTML + Tailwind CSS。",
	];

	return (
		<SlideLayout>
			<motion.div
				className="flex h-full w-full flex-col items-center justify-start p-8 text-white"
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 0.5 }}
			>
				<Title>提示詞大賽</Title>
				<motion.div
					className="mt-6 w-full max-w-4xl text-left text-lg text-gray-200"
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.2, duration: 0.5 }}
				>
					<p className="mb-6">
						請撰寫一份提示詞，引導 ChatGPT 使用{" "}
						<span className="font-semibold text-cyan-300">
							HTML + Tailwind CSS
						</span>{" "}
						製作一個「
						<span className="font-semibold text-yellow-300">
							現代感十足的個人簡介網頁
						</span>
						」。
					</p>
					<p className="mb-4">網頁必須具備以下五個基本區塊（不限定順序）：</p>
					<ul className="mb-6 ml-6 list-disc space-y-1">
						{webpageRequirements.map((req, index) => (
							<motion.li
								key={`web-${index}`}
								initial={{ opacity: 0, x: -10 }}
								animate={{ opacity: 1, x: 0 }}
								transition={{ delay: 0.3 + index * 0.1 }}
							>
								{req}
							</motion.li>
						))}
					</ul>
					<p className="mb-4">你的提示詞至少需包含以下資訊：</p>
					<ul className="ml-6 list-decimal space-y-1">
						{promptRequirements.map((req, index) => (
							<motion.li
								key={`prompt-${index}`}
								initial={{ opacity: 0, x: -10 }}
								animate={{ opacity: 1, x: 0 }}
								transition={{ delay: 0.8 + index * 0.1 }}
								dangerouslySetInnerHTML={{ __html: req.replace(/：/g, ": ") }} // Add space after colon
							></motion.li>
						))}
					</ul>
				</motion.div>
			</motion.div>
		</SlideLayout>
	);
}
