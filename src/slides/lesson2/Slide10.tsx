import SlideLayout from "../../layouts/SlideLayout";
import CodeBlock from "../../components/CodeBlock";
import { motion } from "motion/react";

// Define props
interface Lesson2Slide10Props {
	totalSlidesInLesson: number;
}

const tailwindIntro = `
Tailwind CSS 是一個 Utility-First (工具優先) 的 CSS 框架，它提供了一系列低階的工具類別 (utility classes)，讓開發者可以直接在 HTML 中組合出複雜的樣式，而不需要撰寫大量的自訂 CSS。

主要特點：
- Utility-First: 提供大量原子化、單一用途的 class (如 text-center, pt-4, bg-blue-500)。
- Highly Customizable: 容易透過設定檔 (tailwind.config.js) 客製化顏色、間距、字型等。
- Responsive Design: 內建響應式設計語法 (如 md:text-left, lg:grid-cols-3)。
- No Unused CSS: 搭配 PurgeCSS (或內建 JIT) 能有效移除未使用的樣式，減小最終檔案大小。
- Developer Experience: 通常能提升開發效率，減少 CSS 檔案管理負擔。
`;

const tailwindExample = `
<div class="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4">
  <div class="shrink-0">
    <img class="h-12 w-12" src="/img/logo.svg" alt="ChitChat Logo">
  </div>
  <div>
    <div class="text-xl font-medium text-black">ChitChat</div>
    <p class="text-slate-500">You have a new message!</p>
  </div>
</div>
`;

export default function Lesson2Slide10({
	totalSlidesInLesson,
}: Lesson2Slide10Props) {
	return (
		<SlideLayout
			currentSlide="10"
			courseName="lesson2"
			totalSlidesInLesson={totalSlidesInLesson}
		>
			<div className="relative h-full flex flex-col justify-center">
				<div className="absolute inset-0 rounded-2xl bg-black/40 backdrop-blur-sm border border-tech-grid-bright" />
				<div className="relative px-12 py-8 max-w-7xl mx-auto w-full">
					<div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
						{/* Left Column: Explanation */}
						<motion.div
							initial={{ opacity: 0, x: -20 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.6, delay: 0.1 }}
							className="space-y-5"
						>
							<div className="text-center md:text-left">
								<h1 className="text-4xl font-bold text-white mb-2">
									Tailwind CSS 簡介
								</h1>
								<h2 className="text-2xl text-tech-highlight/80">
									Introduction to Tailwind CSS
								</h2>
							</div>

							<div className="bg-[#1a1a1a] p-5 rounded-lg border border-teal-500/40 space-y-3">
								<h3 className="text-xl font-bold text-teal-400">
									什麼是 Tailwind CSS？
								</h3>
								<p className="text-gray-300 text-sm whitespace-pre-line">
									{tailwindIntro}
								</p>
							</div>
						</motion.div>

						{/* Right Column: Example Code */}
						<motion.div
							initial={{ opacity: 0, x: 20 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.6, delay: 0.2 }}
							className="bg-[#1a1a1a] p-5 rounded-lg border border-gray-700 space-y-3 h-[60vh] flex flex-col"
						>
							<h3 className="text-xl font-bold text-gray-300 flex-shrink-0">
								Tailwind 範例程式碼
							</h3>
							<div className="flex-grow overflow-hidden">
								<CodeBlock
									code={tailwindExample}
									language="html"
									className="text-xs h-full"
								/>
							</div>
							<p className="text-xs text-gray-500 mt-2 text-center">
								注意：此範例需搭配 Tailwind CSS 環境才能正確顯示樣式。
							</p>
						</motion.div>
					</div>
				</div>
			</div>
		</SlideLayout>
	);
}
