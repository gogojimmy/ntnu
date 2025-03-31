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
		.preview-content {
			font-family: system-ui, -apple-system, sans-serif;
		}
		.preview-content .syntax-example {
			background: rgba(245, 245, 36, 0.1);
			border: 2px solid rgba(245, 245, 36, 0.3);
			border-radius: 1rem;
			padding: 1.5rem;
		}
		.preview-content .syntax-highlight {
			color: #f5f524;
			font-weight: bold;
		}
		.preview-content .demo-text {
			color: #f5f524;
			font-size: 16px;
			margin: 1rem 0;
			padding: 1rem;
			background: rgba(245, 245, 36, 0.1);
			border-radius: 0.5rem;
		}
		.preview-content .syntax-note {
			font-size: 0.9rem;
			color: rgba(255, 255, 255, 0.7);
			font-style: italic;
		}
		.preview-content .syntax-breakdown {
			display: grid;
			grid-template-columns: auto 1fr;
			gap: 1rem;
			align-items: start;
			margin-top: 1rem;
		}
		.preview-content .syntax-part {
			padding: 0.5rem;
			background: rgba(245, 245, 36, 0.05);
			border: 1px solid rgba(245, 245, 36, 0.2);
			border-radius: 0.25rem;
			margin-bottom: 0.5rem;
		}
	`}</style>
);

export default function Slide10() {
	const syntaxCode = `/* CSS 語法結構 */
選擇器 {
  屬性: 值;
  屬性: 值;
}`;

	const exampleCode = `/* CSS 實際示例 */
p {
  color: #f5f524;       /* 文字顏色 */
  font-size: 16px;   /* 文字大小 */
}`;

	const htmlCode = `<div class="syntax-example">
  <h3>CSS 語法結構</h3>
  <div class="syntax-breakdown">
    <div>
      <div class="syntax-part">
        <span class="syntax-highlight">選擇器</span>
      </div>
      <div class="syntax-note">用來指定要套用樣式的 HTML 元素</div>
    </div>
    <div>
      <div class="syntax-part">
        <span class="syntax-highlight">屬性: 值;</span>
      </div>
      <div class="syntax-note">定義要改變的樣式屬性和對應的值</div>
    </div>
  </div>
  
  <h3 class="mt-6">實際示例</h3>
  <p class="demo-text">這是一個黃色、16px 大小的段落</p>
</div>`;

	return (
		<SlideLayout
			prevSlide="/lesson1/slide9"
			nextSlide="/lesson1/slide11"
			currentSlide="10"
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
							<h1 className="text-4xl font-bold text-white mb-2">CSS 語法</h1>
							<h2 className="text-2xl text-tech-highlight/80">基本語法結構</h2>
						</motion.div>

						<div className="space-y-8">
							{/* Syntax Section */}
							<motion.div
								initial={{ opacity: 0, y: -20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.6, delay: 0.2 }}
								className="space-y-4"
							>
								<h2 className="text-2xl font-bold text-tech-highlight">
									語法結構
								</h2>
								<div className="bg-black/20 rounded-lg border border-tech-grid-bright/30 p-4">
									<CodeBlock code={syntaxCode} language="css" />
								</div>
							</motion.div>

							{/* Example Section */}
							<motion.div
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.6, delay: 0.4 }}
								className="grid grid-cols-2 gap-8"
							>
								<div className="space-y-4">
									<h2 className="text-2xl font-bold text-tech-highlight">
										實際示例
									</h2>
									<div className="bg-black/20 rounded-lg border border-tech-grid-bright/30 p-4">
										<CodeBlock code={exampleCode} language="css" />
									</div>
								</div>

								<div className="space-y-4">
									<h2 className="text-2xl font-bold text-tech-highlight">
										效果展示
									</h2>
									<div className="preview-content">
										<div
											dangerouslySetInnerHTML={{
												__html: htmlCode,
											}}
										/>
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
