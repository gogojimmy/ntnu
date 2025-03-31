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

export default function Slide16() {
	const htmlExample = `<!-- HTML 檔案 -->
<!DOCTYPE html>
<html>
<head>
  <title>外部樣式表範例</title>
  <!-- 使用 link 標籤引入外部 CSS 檔案 -->
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <div class="container">
    <h1 class="title">歡迎使用外部樣式表</h1>
    <button class="btn">點擊我</button>
  </div>
</body>
</html>`;

	const cssExample = `/* styles.css */
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

.title {
  color: #333;
  font-size: 24px;
  margin-bottom: 16px;
}

.btn {
  background-color: #007bff;
  color: white;
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.btn:hover {
  background-color: #0056b3;
}`;

	return (
		<SlideLayout
			prevSlide="/lesson1/slide15"
			nextSlide="/lesson1/slide17"
			currentSlide="16"
			totalSlides="29"
			courseName="NTNU Web Development Course"
		>
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
							<h2 className="text-2xl text-tech-highlight/80">外部樣式表</h2>
						</motion.div>

						<div className="grid grid-cols-2 gap-8">
							{/* Left Column - HTML Example */}
							<motion.div
								initial={{ opacity: 0, x: -20 }}
								animate={{ opacity: 1, x: 0 }}
								transition={{ duration: 0.6, delay: 0.2 }}
								className="bg-[#1a1a1a] rounded-lg p-8 flex flex-col"
							>
								<h3 className="text-2xl font-bold text-tech-highlight mb-6 flex items-center gap-2">
									<span className="text-3xl">📄</span> HTML 檔案
								</h3>
								<div className="flex-1 overflow-hidden">
									<div className="h-full overflow-auto">
										<CodeBlock code={htmlExample} language="html" />
									</div>
								</div>
								<div className="mt-4 bg-black/30 rounded-lg p-4">
									<p className="text-gray-300">
										使用 link 標籤引入外部 CSS 檔案，讓 HTML 結構與樣式分離。
									</p>
								</div>
							</motion.div>

							{/* Right Column - CSS Example */}
							<motion.div
								initial={{ opacity: 0, x: 20 }}
								animate={{ opacity: 1, x: 0 }}
								transition={{ duration: 0.6, delay: 0.4 }}
								className="bg-[#1a1a1a] rounded-lg p-8 flex flex-col"
							>
								<h3 className="text-2xl font-bold text-tech-highlight mb-6 flex items-center gap-2">
									<span className="text-3xl">🎨</span> CSS 檔案
								</h3>
								<div className="flex-1 overflow-hidden">
									<div className="h-full overflow-auto">
										<CodeBlock code={cssExample} language="css" />
									</div>
								</div>
								<div className="mt-4 bg-black/30 rounded-lg p-4">
									<p className="text-gray-300">
										獨立的 CSS 檔案可以被多個 HTML 檔案重複使用，提高維護性。
									</p>
								</div>
							</motion.div>
						</div>

						{/* Benefits Section */}
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, delay: 0.6 }}
							className="bg-[#1a1a1a] rounded-lg p-8"
						>
							<h3 className="text-2xl font-bold text-tech-highlight mb-6">
								外部樣式表的優點
							</h3>
							<div className="grid grid-cols-3 gap-4">
								<div className="bg-black/30 rounded-lg p-4">
									<h4 className="text-xl font-bold text-tech-purple mb-2 flex items-center gap-2">
										<span>📦</span> 可重複使用
									</h4>
									<p className="text-gray-300 text-sm">
										一個 CSS 檔案可以被多個頁面共用，減少重複代碼。
									</p>
								</div>
								<div className="bg-black/30 rounded-lg p-4">
									<h4 className="text-xl font-bold text-tech-purple mb-2 flex items-center gap-2">
										<span>🚀</span> 快取機制
									</h4>
									<p className="text-gray-300 text-sm">
										瀏覽器會快取外部 CSS 檔案，提升載入速度。
									</p>
								</div>
								<div className="bg-black/30 rounded-lg p-4">
									<h4 className="text-xl font-bold text-tech-purple mb-2 flex items-center gap-2">
										<span>🔧</span> 易於維護
									</h4>
									<p className="text-gray-300 text-sm">
										集中管理樣式，修改一處即可套用全站。
									</p>
								</div>
							</div>
						</motion.div>
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
