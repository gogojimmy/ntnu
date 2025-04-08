import SlideLayout from "../../layouts/SlideLayout";
import { motion } from "motion/react";
import { Highlight, themes } from "prism-react-renderer";

const CodeBlock = ({ code, language }: { code: string; language: string }) => (
	<Highlight theme={themes.nightOwl} code={code.trim()} language={language}>
		{({ style, tokens, getLineProps, getTokenProps }) => (
			<pre
				className="bg-black/30 p-3 rounded-md overflow-x-auto text-sm h-full"
				style={{ ...style }}
			>
				{tokens.map((line, i) => (
					<div key={i} {...getLineProps({ line })}>
						{line.map((token, key) => (
							<span key={key} {...getTokenProps({ token })} />
						))}
					</div>
				))}
			</pre>
		)}
	</Highlight>
);

const PreviewStyles = () => (
	<style>{`
		.preview-content {
			font-family: system-ui, -apple-system, sans-serif;
		}
		.preview-content .unstyled {
			background: rgba(255, 99, 71, 0.1);
			border: 1px dashed rgba(255, 99, 71, 0.3);
			padding: 1rem;
			border-radius: 0px;
		}
		.preview-content .unstyled h3 {
			color: rgba(255, 255, 255, 0.7);
			margin-bottom: 0.5rem;
			font-weight: normal;
		}
		.preview-content .unstyled p {
			color: rgba(255, 255, 255, 0.6);
		}
		.preview-content .styled {
			background: rgba(34, 211, 238, 0.1);
			border: 2px solid rgba(34, 211, 238, 0.3);
			padding: 1.5rem;
			border-radius: 1rem;
			box-shadow: 0 4px 20px rgba(34, 211, 238, 0.2);
		}
		.preview-content .styled h3 {
			color: #22d3ee;
			font-size: 1.5rem;
			margin-bottom: 1rem;
			font-weight: bold;
			text-shadow: 0 0 10px rgba(34, 211, 238, 0.3);
		}
		.preview-content .styled p {
			color: rgba(255, 255, 255, 0.9);
			line-height: 1.6;
			font-size: 1.1rem;
		}
	`}</style>
);

export default function Slide9() {
	const htmlCode = `<!-- 純 HTML 結構 -->
<div class="unstyled">
  <h3>未加入 CSS 的內容</h3>
  <p>這是一個沒有樣式的區塊，可以看到純 HTML 的呈現效果。文字沒有特別的排版與設計，也沒有美觀的外框與背景。</p>
</div>

<!-- 加入 CSS 樣式後 -->
<div class="styled">
  <h3>加入 CSS 後的內容</h3>
  <p>這是一個有樣式的區塊，可以看到加入 CSS 後的效果。包含了精美的邊框、陰影、字體大小、顏色和間距的設計。</p>
</div>`;

	const cssCode = `/* CSS 樣式定義 */
.styled {
  /* 背景與邊框 */
  background: rgba(34, 211, 238, 0.1);
  border: 2px solid rgba(34, 211, 238, 0.3);
  border-radius: 1rem;
  padding: 1.5rem;
  
  /* 陰影效果 */
  box-shadow: 0 4px 20px rgba(34, 211, 238, 0.2);
}

.styled h3 {
  /* 標題樣式 */
  color: #22d3ee;
  font-size: 1.5rem;
  margin-bottom: 1rem;
  font-weight: bold;
  text-shadow: 0 0 10px rgba(34, 211, 238, 0.3);
}

.styled p {
  /* 內文樣式 */
  color: rgba(255, 255, 255, 0.9);
  line-height: 1.6;
  font-size: 1.1rem;
}`;

	return (
		<SlideLayout currentSlide="09">
			<PreviewStyles />
			<div className="relative h-full flex flex-col justify-center">
				{/* Background Elements */}
				<div className="absolute inset-0 rounded-2xl bg-black/40 backdrop-blur-sm border border-tech-grid-bright" />

				{/* Content */}
				<div className="relative px-16 py-8">
					<div className="space-y-8">
						{/* Title */}
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6 }}
						>
							<h1 className="text-4xl font-bold text-white mb-2">CSS 介紹</h1>
							<h2 className="text-2xl text-tech-highlight/80">
								層疊樣式表 (Cascading Style Sheets)
							</h2>
						</motion.div>

						<div className="grid grid-cols-2 gap-8">
							{/* Left Column - CSS Value & Demo */}
							<motion.div
								initial={{ opacity: 0, x: -20 }}
								animate={{ opacity: 1, x: 0 }}
								transition={{ duration: 0.6, delay: 0.2 }}
								className="space-y-6"
							>
								{/* CSS Value Section */}
								<div className="space-y-4">
									<h2 className="text-2xl font-bold text-tech-highlight">
										CSS 的價值
									</h2>
									<div className="bg-black/20 rounded-lg border border-tech-grid-bright/30 p-6">
										<ul className="space-y-4 text-white/90">
											<li className="flex items-start gap-3">
												<div className="mt-1 w-6 h-6 rounded bg-tech-highlight/20 border border-tech-highlight/30 flex items-center justify-center text-tech-highlight">
													1
												</div>
												<div>
													<h4 className="font-bold text-tech-highlight mb-1">
														分離內容與表現
													</h4>
													<p className="text-sm text-white/70">
														HTML 專注於結構，CSS
														負責外觀，使代碼更容易維護和更新
													</p>
												</div>
											</li>
											<li className="flex items-start gap-3">
												<div className="mt-1 w-6 h-6 rounded bg-tech-highlight/20 border border-tech-highlight/30 flex items-center justify-center text-tech-highlight">
													2
												</div>
												<div>
													<h4 className="font-bold text-tech-highlight mb-1">
														統一管理樣式
													</h4>
													<p className="text-sm text-white/70">
														一次定義，多處使用，確保網站風格的一致性
													</p>
												</div>
											</li>
											<li className="flex items-start gap-3">
												<div className="mt-1 w-6 h-6 rounded bg-tech-highlight/20 border border-tech-highlight/30 flex items-center justify-center text-tech-highlight">
													3
												</div>
												<div>
													<h4 className="font-bold text-tech-highlight mb-1">
														響應式設計
													</h4>
													<p className="text-sm text-white/70">
														根據不同設備尺寸調整版面，提供最佳使用體驗
													</p>
												</div>
											</li>
										</ul>
									</div>
								</div>

								{/* CSS Demo Section */}
								<div className="space-y-4">
									<h2 className="text-2xl font-bold text-tech-highlight">
										CSS 效果展示
									</h2>
									<div className="preview-content space-y-6">
										<div
											dangerouslySetInnerHTML={{
												__html: htmlCode,
											}}
										/>
									</div>
								</div>
							</motion.div>

							{/* Right Column - Code */}
							<motion.div
								initial={{ opacity: 0, x: 20 }}
								animate={{ opacity: 1, x: 0 }}
								transition={{ duration: 0.6, delay: 0.4 }}
								className="bg-black/20 rounded-lg border border-tech-grid-bright/30 p-6 flex flex-col h-full"
							>
								<h3 className="text-lg font-bold text-tech-purple mb-4">
									CSS 程式碼
								</h3>
								<div className="flex-1">
									<CodeBlock code={cssCode} language="css" />
								</div>
							</motion.div>
						</div>
					</div>
				</div>

				{/* Decorative Elements */}
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
