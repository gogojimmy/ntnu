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

		.recommended {
			background: rgba(34, 211, 238, 0.2);
			color: #22d3ee;
			border: 1px solid #22d3ee;
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

		.file-structure {
			margin: 2rem 0;
			padding: 1.5rem;
			border-radius: 0.5rem;
			background: rgba(0, 0, 0, 0.2);
			font-family: monospace;
		}

		.file-structure .folder {
			color: #22d3ee;
		}

		.file-structure .file {
			color: #a3a3a3;
			margin-left: 1.5rem;
		}

		.file-structure .file.css {
			color: #f5f524;
		}

		.file-structure .file.html {
			color: #954ce9;
		}
	`}</style>
);

export default function Slide16() {
	const htmlCode = `<!-- index.html -->
<head>
  <link rel="stylesheet" href="styles.css">
  <link rel="stylesheet" href="components.css">
  <link rel="stylesheet" href="theme.css">
</head>
<body>
  <nav class="navbar">
    <a href="/" class="nav-link">首頁</a>
    <a href="/about" class="nav-link">關於</a>
  </nav>
  <button class="btn btn-primary">開始使用</button>
</body>`;

	const cssCode = `/* styles.css */
.navbar {
  background: #1a1a1a;
  padding: 1rem;
  display: flex;
  gap: 1rem;
}

.nav-link {
  color: white;
  text-decoration: none;
}

.btn {
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 0.25rem;
  cursor: pointer;
}

.btn-primary {
  background: #22d3ee;
  color: white;
}`;

	return (
		<SlideLayout
			prevSlide="/lesson1/slide15"
			nextSlide="/lesson1/slide17"
			currentSlide="16"
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
								CSS 引入方式 (3/3)
							</h1>
							<h2 className="text-2xl text-tech-highlight/80">
								外部樣式表 External Styles
							</h2>
						</motion.div>

						<div className="grid grid-cols-2 gap-8">
							{/* Left Column - Description */}
							<motion.div
								initial={{ opacity: 0, x: -20 }}
								animate={{ opacity: 1, x: 0 }}
								transition={{ duration: 0.6, delay: 0.2 }}
								className="css-method flex flex-col"
							>
								<div className="method-title">
									<span className="icon">{"📄"}</span>
									外部樣式表
								</div>
								<div className="method-description">
									外部樣式表是將 CSS 代碼寫在獨立的 .css 文件中，通過 link
									標籤引入。這種方式的特點是：
									<ul className="list-disc list-inside mt-4 space-y-2">
										<li>樣式可以在多個頁面重複使用</li>
										<li>便於維護和更新</li>
										<li>支持瀏覽器緩存，提高加載速度</li>
										<li>可以根據功能拆分成多個檔案</li>
									</ul>
								</div>

								<div className="file-structure mt-auto">
									<div className="folder">📁 project/</div>
									<div className="file html">📄 index.html</div>
									<div className="file css">📄 styles.css</div>
									<div className="file css">📄 components.css</div>
									<div className="file css">📄 theme.css</div>
								</div>
								<div className="usage-tag recommended mt-4">推薦使用方式</div>
							</motion.div>

							{/* Right Column - Code Example and Preview */}
							<motion.div
								initial={{ opacity: 0, x: 20 }}
								animate={{ opacity: 1, x: 0 }}
								transition={{ duration: 0.6, delay: 0.4 }}
								className="css-method flex flex-col"
							>
								<div className="example [&_pre]:!text-sm flex-1 overflow-hidden">
									<div className="h-full overflow-auto">
										<CodeBlock code={htmlCode} language="html" />
										<div className="mt-4">
											<CodeBlock code={cssCode} language="css" />
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
