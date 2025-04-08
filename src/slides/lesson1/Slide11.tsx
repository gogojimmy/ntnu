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
		.preview-content .selector-example {
			background: rgba(245, 245, 36, 0.1);
			border: 2px solid rgba(245, 245, 36, 0.3);
			border-radius: 1rem;
			padding: 1.5rem;
		}
		.preview-content .selector-highlight {
			color: #f5f524;
			font-weight: bold;
		}
		.preview-content .selector-note {
			font-size: 0.9rem;
			color: rgba(255, 255, 255, 0.7);
			font-style: italic;
			margin-top: 0.5rem;
		}
		.preview-content .example-element {
			padding: 0.75rem;
			background: rgba(245, 245, 36, 0.05);
			border: 1px solid rgba(245, 245, 36, 0.2);
			border-radius: 0.5rem;
			margin: 0.5rem 0;
		}
		.preview-content .special-class {
			color: #f5f524;
			font-weight: bold;
		}
		#special-id {
			color: #f5f524;
			text-decoration: underline;
		}
		.preview-content .parent > p {
			color: #f5f524;
			font-style: italic;
		}
		.preview-content .container p {
			border-left: 2px solid #f5f524;
			padding-left: 0.5rem;
		}
	`}</style>
);

export default function Slide11() {
	const basicSelectorsCode = `/* 基本選擇器 */
p {
  color: yellow;         /* 元素選擇器 */
}

.special-class {
  font-weight: bold;    /* 類選擇器 */
}

#special-id {
  text-decoration: underline;  /* ID 選擇器 */
}`;

	const combinedSelectorsCode = `/* 組合選擇器 */
.container p {
  border-left: 2px solid yellow;  /* 後代選擇器 */
}

.parent > p {
  font-style: italic;    /* 子選擇器 */
}`;

	const htmlCode = `<div class="selector-example">
  <h3>基本選擇器示例</h3>
  
  <div class="example-element">
    <p>這是一個段落元素 (元素選擇器)</p>
    <p class="special-class">這是一個有特殊類別的段落 (類選擇器)</p>
    <p id="special-id">這是一個有 ID 的段落 (ID 選擇器)</p>
  </div>

  <h3 class="mt-4">組合選擇器示例</h3>
  
  <div class="example-element container">
    <div>
      <p>這是 container 內的段落 (後代選擇器)</p>
      <div>
        <p>這也是 container 內的段落</p>
      </div>
    </div>
  </div>

  <div class="example-element parent">
    <p>這是 parent 的直接子段落 (子選擇器)</p>
    <div>
      <p>這不是 parent 的直接子段落</p>
    </div>
  </div>
</div>`;

	return (
		<SlideLayout currentSlide="11">
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
							<h1 className="text-4xl font-bold text-white mb-2">CSS 選擇器</h1>
							<h2 className="text-2xl text-tech-highlight/80">
								基本選擇器與組合選擇器
							</h2>
						</motion.div>

						<div className="grid grid-cols-2 gap-8">
							{/* Basic Selectors Section */}
							<motion.div
								initial={{ opacity: 0, x: -20 }}
								animate={{ opacity: 1, x: 0 }}
								transition={{ duration: 0.6, delay: 0.2 }}
								className="space-y-4"
							>
								<h2 className="text-2xl font-bold text-tech-highlight">
									基本選擇器
								</h2>
								<div className="bg-black/20 rounded-lg border border-tech-grid-bright/30 p-4">
									<CodeBlock code={basicSelectorsCode} language="css" />
								</div>

								<h2 className="text-2xl font-bold text-tech-highlight mt-8">
									組合選擇器
								</h2>
								<div className="bg-black/20 rounded-lg border border-tech-grid-bright/30 p-4">
									<CodeBlock code={combinedSelectorsCode} language="css" />
								</div>
							</motion.div>

							{/* Preview Section */}
							<motion.div
								initial={{ opacity: 0, x: 20 }}
								animate={{ opacity: 1, x: 0 }}
								transition={{ duration: 0.6, delay: 0.4 }}
								className="space-y-4"
							>
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
