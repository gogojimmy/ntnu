import SlideLayout from "../../layouts/SlideLayout";
import { motion } from "motion/react";
import { Highlight, themes } from "prism-react-renderer";

const CodeBlock = ({ code, language }: { code: string; language: string }) => (
	<Highlight theme={themes.nightOwl} code={code.trim()} language={language}>
		{({ style, tokens, getLineProps, getTokenProps }) => (
			<pre
				className="bg-black/30 p-3 rounded-md overflow-x-auto text-sm"
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
		.preview-content .block-container {
			border: 1px solid rgba(34, 211, 238, 0.3);
			padding: 0.5rem;
			margin-bottom: 0.5rem;
			border-radius: 0.25rem;
		}
		.preview-content .username {
			color: #22d3ee;
			font-weight: bold;
		}
		.preview-content .highlight {
			color: #22d3ee;
			font-weight: bold;
		}
	`}</style>
);

export default function Slide6() {
	const containersCode = `<!-- 區塊級容器 -->
<div class="block-container">
  這是一個區塊容器
  <span class="username">這是行內容器</span>
  區塊容器會換行
</div>

<!-- 行內容器 -->
這是一段文字，包含<span class="highlight">重點內容</span>，
不會換行`;

	return (
		<SlideLayout
			prevSlide="/lesson1/slide5"
			nextSlide="/lesson1/slide7"
			currentSlide="06"
			totalSlides="25"
			courseName="NTNU Web Development Course"
		>
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
							<h1 className="text-4xl font-bold text-white mb-2">
								常用 HTML 標籤 (3)
							</h1>
							<h2 className="text-2xl text-tech-highlight/80">容器元素</h2>
						</motion.div>

						<div className="grid grid-cols-2 gap-8">
							{/* Code Section */}
							<motion.div
								initial={{ opacity: 0, x: -20 }}
								animate={{ opacity: 1, x: 0 }}
								transition={{ duration: 0.6, delay: 0.2 }}
								className="space-y-4"
							>
								<div className="bg-black/20 rounded-lg border border-tech-grid-bright/30 p-4">
									<h3 className="text-lg font-bold text-tech-purple mb-2">
										程式碼：
									</h3>
									<CodeBlock code={containersCode} language="html" />
								</div>
							</motion.div>

							{/* Preview Section */}
							<motion.div
								initial={{ opacity: 0, x: 20 }}
								animate={{ opacity: 1, x: 0 }}
								transition={{ duration: 0.6, delay: 0.4 }}
								className="space-y-4"
							>
								<div className="bg-black/20 rounded-lg border border-tech-grid-bright/30 p-4">
									<h3 className="text-lg font-bold text-tech-purple mb-4">
										顯示效果與說明：
									</h3>
									<div className="space-y-6">
										<div
											className="text-white/90 preview-content"
											dangerouslySetInnerHTML={{
												__html: containersCode,
											}}
										/>
										<div className="space-y-4 mt-6 border-t border-tech-grid-bright/30 pt-4">
											<div className="flex items-start gap-2">
												<div className="w-16 shrink-0 text-tech-highlight">
													&lt;div&gt;
												</div>
												<div className="text-white/90">
													- 區塊級元素，預設佔據整行
													<br />
													- 常用於頁面布局和分區
													<br />- 會自動換行
												</div>
											</div>
											<div className="flex items-start gap-2">
												<div className="w-16 shrink-0 text-tech-highlight">
													&lt;span&gt;
												</div>
												<div className="text-white/90">
													- 行內元素，不會換行
													<br />
													- 用於文字內的局部樣式
													<br />- 只佔用必要的空間
												</div>
											</div>
										</div>
									</div>
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
