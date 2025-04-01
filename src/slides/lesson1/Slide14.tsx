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
		.preview-section {
			background: rgba(0, 0, 0, 0.3);
			border-radius: 0.5rem;
			padding: 1.5rem;
			margin-bottom: 1rem;
		}

		.css-method {
			background: #1a1a1a;
			border-radius: 0.5rem;
			padding: 2rem;
			margin-bottom: 1rem;
		}

		.method-title {
			color: #22d3ee;
			font-size: 2rem;
			font-weight: bold;
			margin-bottom: 1.5rem;
			display: flex;
			align-items: center;
			gap: 0.5rem;
		}

		.method-title .icon {
			color: #f5f524;
			font-size: 2.5rem;
		}

		.method-description {
			color: #a3a3a3;
			margin-bottom: 2rem;
			font-size: 1.1rem;
			line-height: 1.6;
		}

		.usage-tag {
			display: inline-block;
			padding: 0.5rem 1rem;
			border-radius: 9999px;
			font-size: 1rem;
			font-weight: 500;
			margin-top: 1rem;
		}

		.one-time {
			background: rgba(244, 63, 94, 0.2);
			color: #f43f5e;
			border: 1px solid #f43f5e;
		}

		.preview {
			margin-top: 1.5rem;
			padding: 1.5rem;
			border-radius: 0.5rem;
			background: rgba(0, 0, 0, 0.2);
		}

		.example {
			margin-top: 2rem;
			padding: 1.5rem;
			border-radius: 0.5rem;
			background: rgba(0, 0, 0, 0.2);
		}

		.live-preview {
			margin-top: 1rem;
			padding: 1rem;
			border-radius: 0.5rem;
			background: #1a1a1a;
			text-align: center;
		}
	`}</style>
);

export default function Slide14() {
	const inlineStyleCode = `<!-- 內聯樣式範例 -->
<div style="color: red; font-size: 20px; text-align: center;">
  直接在 HTML 元素上添加樣式
</div>

<button style="
  background-color: #22d3ee;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
">
  點擊我
</button>`;

	return (
		<SlideLayout
			prevSlide="/lesson1/slide13"
			nextSlide="/lesson1/slide15"
			currentSlide="14"
			totalSlides="31"
			courseName="NTNU Web Development Course"
		>
			<PreviewStyles />
			<div className="relative h-full flex flex-col justify-center">
				{/* Background Elements */}
				<div className="absolute inset-0 rounded-2xl bg-black/40 backdrop-blur-sm border border-tech-grid-bright" />

				{/* Content */}
				<div className="relative px-16 py-8">
					<div className="space-y-8 max-w-[1280px] mx-auto">
						{/* Title */}
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6 }}
						>
							<h1 className="text-4xl font-bold text-white mb-2">
								CSS 引入方式 (1/3)
							</h1>
							<h2 className="text-2xl text-tech-highlight/80">
								內聯樣式 Inline Styles
							</h2>
						</motion.div>

						<div className="grid grid-cols-2 gap-8">
							{/* Left Column - Description */}
							<motion.div
								initial={{ opacity: 0, x: -20 }}
								animate={{ opacity: 1, x: 0 }}
								transition={{ duration: 0.6, delay: 0.2 }}
								className="css-method"
							>
								<div className="method-title">
									<span className="icon">{"<>"}</span>
									內聯樣式
								</div>
								<div className="method-description">
									內聯樣式是直接在 HTML 元素的 style 屬性中定義 CSS
									樣式。這種方式的特點是：
									<ul className="list-disc list-inside mt-4 space-y-2">
										<li>樣式直接作用於單個元素</li>
										<li>優先級最高</li>
										<li>無法重複使用</li>
										<li>適合臨時或一次性的樣式需求</li>
									</ul>
								</div>
								<div className="usage-tag one-time">特定元素一次性樣式</div>
							</motion.div>

							{/* Right Column - Code Example and Preview */}
							<motion.div
								initial={{ opacity: 0, x: 20 }}
								animate={{ opacity: 1, x: 0 }}
								transition={{ duration: 0.6, delay: 0.4 }}
								className="css-method"
							>
								<div className="example [&_pre]:!text-sm">
									<CodeBlock code={inlineStyleCode} language="html" />
									<div className="live-preview">
										<div
											style={{
												color: "red",
												fontSize: "20px",
												textAlign: "center",
												marginBottom: "1rem",
											}}
										>
											直接在 HTML 元素上添加樣式
										</div>
										<button
											style={{
												backgroundColor: "#22d3ee",
												color: "white",
												padding: "10px 20px",
												border: "none",
												borderRadius: "5px",
												cursor: "pointer",
											}}
										>
											點擊我
										</button>
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
