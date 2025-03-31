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

		.specific {
			background: rgba(149, 76, 233, 0.2);
			color: #954ce9;
			border: 1px solid #954ce9;
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
		}

		/* 內部樣式示例 */
		.special-heading {
			color: #954ce9;
			font-size: 1.5rem;
			text-align: center;
			margin-bottom: 1rem;
		}

		.special-button {
			background: #954ce9;
			color: white;
			padding: 10px 20px;
			border: none;
			border-radius: 5px;
			cursor: pointer;
			display: block;
			margin: 0 auto;
		}

		.special-text {
			text-align: center;
			color: #a3a3a3;
			margin-top: 1rem;
		}
	`}</style>
);

export default function Slide15() {
	const internalStyleCode = `<!-- 內部樣式表範例 -->
<head>
  <style>
    .special-heading {
      color: #954ce9;
      font-size: 1.5rem;
      text-align: center;
      margin-bottom: 1rem;
    }

    .special-button {
      background: #954ce9;
      color: white;
      padding: 10px 20px;
      border: none;
      border-radius: 5px;
      cursor: pointer;
      display: block;
      margin: 0 auto;
    }

    .special-text {
      text-align: center;
      color: #a3a3a3;
      margin-top: 1rem;
    }
  </style>
</head>
<body>
  <h2 class="special-heading">特殊標題樣式</h2>
  <button class="special-button">特殊按鈕</button>
  <p class="special-text">特殊文字樣式</p>
</body>`;

	return (
		<SlideLayout
			prevSlide="/lesson1/slide14"
			nextSlide="/lesson1/slide16"
			currentSlide="15"
			totalSlides="25"
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
								CSS 引入方式 (2/3)
							</h1>
							<h2 className="text-2xl text-tech-highlight/80">
								內部樣式表 Internal Styles
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
									<span className="icon">{"<style>"}</span>
									內部樣式表
								</div>
								<div className="method-description">
									內部樣式表是在 HTML 文件的 head 區域中使用 style 標籤定義的
									CSS 樣式。這種方式的特點是：
									<ul className="list-disc list-inside mt-4 space-y-2">
										<li>樣式只在當前頁面生效</li>
										<li>可以使用選擇器重複使用樣式</li>
										<li>適合單頁面的特殊樣式需求</li>
										<li>不需要額外的文件請求</li>
									</ul>
								</div>
								<div className="usage-tag specific">單頁特殊樣式</div>
							</motion.div>

							{/* Right Column - Code Example and Preview */}
							<motion.div
								initial={{ opacity: 0, x: 20 }}
								animate={{ opacity: 1, x: 0 }}
								transition={{ duration: 0.6, delay: 0.4 }}
								className="css-method h-[600px] flex flex-col"
							>
								<div className="example [&_pre]:!text-sm flex-1 flex flex-col overflow-hidden">
									<div className="flex-1 overflow-auto">
										<CodeBlock code={internalStyleCode} language="html" />
									</div>
									<div className="live-preview mt-4">
										<h2 className="special-heading">特殊標題樣式</h2>
										<button className="special-button">特殊按鈕</button>
										<p className="special-text">特殊文字樣式</p>
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
