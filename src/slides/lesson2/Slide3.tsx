import SlideLayout from "../../layouts/SlideLayout";
import { motion } from "motion/react";
import CodeBlock from "../../components/CodeBlock";

export default function Slide3() {
	const tokensExample = `{
  "color": {
    "primary": { "value": "#4F46E5" },
    "secondary": { "value": "#D1D5DB" },
    "text": { "value": "#111827" }
  },
  "size": {
    "font": {
      "small": { "value": "12px" },
      "medium": { "value": "16px" },
      "large": { "value": "20px" }
    },
    "spacing": {
      "small": { "value": "4px" },
      "medium": { "value": "8px" },
      "large": { "value": "16px" }
    }
  }
}`;

	return (
		<SlideLayout
			prevSlide="/lesson2/slide2"
			nextSlide="/lesson2/slide4"
			currentSlide="3"
			totalSlides="4"
			courseName="lesson2"
		>
			<div
				className={`relative h-full flex flex-col justify-center bg-black/40`}
			>
				<div className="absolute inset-0 rounded-2xl backdrop-blur-sm border border-tech-grid-bright" />

				<div className="relative px-16 py-8">
					<div className="space-y-8 max-w-[1280px] mx-auto">
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6 }}
						>
							<h1 className="text-4xl font-bold text-white mb-2">
								Design System 實際應用與案例
							</h1>
							<h2 className={`text-2xl text-tech-highlight/80`}>
								從規範到實現的流程
							</h2>
						</motion.div>

						<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
							<motion.div
								initial={{ opacity: 0, x: -20 }}
								animate={{ opacity: 1, x: 0 }}
								transition={{ duration: 0.6, delay: 0.2 }}
								className="space-y-6"
							>
								<div className="bg-[#1a1a1a] rounded-lg p-8">
									<div className="flex items-center gap-4 mb-4">
										<svg
											className="w-10 h-10"
											viewBox="0 0 24 24"
											fill="#757575"
										>
											<path d="M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0zm0 22C6.48 22 2 17.52 2 12S6.48 2 12 2s10 4.48 10 10-4.48 10-10 10zm-1-10.69L7.12 15H5V9h2.12l3.88 4.31V9h2v6.31L16.88 9H19v6h-2.12l-3.88-4.31V15h-2v-4.69z" />
										</svg>
										<div>
											<a
												href="https://m3.material.io/"
												target="_blank"
												rel="noopener noreferrer"
												className="text-2xl font-bold text-tech-highlight transition-colors hover:opacity-80"
											>
												Material Design
											</a>
											<p className="text-gray-400">Google 的設計系統範例</p>
										</div>
									</div>
									<p className="leading-relaxed text-gray-300">
										Google
										提出的完整設計系統，囊括了顏色、字體大小、間距、元件行為、動態效果等各方面規範。
										它提供了詳細的文件和工具，幫助開發者和設計師打造一致且高品質的使用者體驗。
									</p>
								</div>

								<div className="bg-[#1a1a1a] rounded-lg p-8">
									<h3 className="text-2xl font-bold mb-4 text-tech-purple">
										設計標籤 (Design Tokens)
									</h3>
									<p className="leading-relaxed mb-4 text-gray-300">
										Design Tokens
										是設計系統中的最小單位，用於存儲設計決策（如顏色、字體、間距等）的變數。
										它們使得設計元素可以被轉換為跨平台（Web, iOS,
										Android）使用的代碼，確保一致性並簡化維護。
									</p>
									<p className="text-sm mb-4 text-gray-400">
										例如，可以使用工具（如 Style Dictionary）將 Tokens 轉換為
										CSS 變數、iOS/Android 樣式等。
									</p>
									<CodeBlock code={tokensExample} language="json" />
								</div>
							</motion.div>

							<motion.div
								initial={{ opacity: 0, x: 20 }}
								animate={{ opacity: 1, x: 0 }}
								transition={{ duration: 0.6, delay: 0.4 }}
								className="space-y-6"
							>
								<div className="bg-[#1a1a1a] rounded-lg p-8">
									<h3 className="text-2xl font-bold mb-6 text-tech-green">
										實際應用流程
									</h3>
									<div className="space-y-6">
										{[1, 2, 3].map((step) => (
											<div className="flex items-start gap-4" key={step}>
												<div className="flex-shrink-0 w-8 h-8 rounded-full bg-tech-green/20 border border-tech-green/50 flex items-center justify-center font-bold text-tech-green">
													{step}
												</div>
												<div>
													<h4 className="text-xl font-bold mb-2 text-tech-green">
														{step === 1
															? "制定基本規範"
															: step === 2
															? "建立元件庫"
															: "組合模板與頁面"}
													</h4>
													<p className="leading-relaxed text-gray-300">
														{step === 1
															? "定義核心的設計原則，確定主要的顏色、字體、間距系統等基礎視覺元素（Design Tokens）。"
															: step === 2
															? "基於基本規範，開始建立可重複使用的 UI 元件（Atoms, Molecules），例如按鈕、輸入框、卡片等。"
															: "將元件組合成更複雜的結構（Organisms），定義頁面佈局（Templates），最終填入內容形成完整頁面（Pages）。"}
													</p>
												</div>
											</div>
										))}
									</div>
								</div>
							</motion.div>
						</div>
					</div>
				</div>

				<motion.div
					className="absolute -left-4 top-1/4 w-32 h-32 bg-tech-purple/20 blur-[64px] rounded-full"
					initial={{ opacity: 0, scale: 0.8 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ duration: 1 }}
				/>
				<motion.div
					className="absolute -right-4 bottom-1/4 w-32 h-32 bg-tech-highlight/20 blur-[64px] rounded-full"
					initial={{ opacity: 0, scale: 0.8 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ duration: 1, delay: 0.2 }}
				/>
			</div>
		</SlideLayout>
	);
}
