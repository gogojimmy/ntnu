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

export default function Slide15() {
	const internalStyleCode = `<!-- 內部樣式範例 -->
<head>
  <style>
    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 20px;
    }
    
    .title {
      color: #22d3ee;
      font-size: 24px;
      text-align: center;
    }
    
    .button {
      background-color: #22d3ee;
      color: white;
      padding: 10px 20px;
      border: none;
      border-radius: 5px;
      cursor: pointer;
    }
  </style>
</head>

<body>
  <div class="container">
    <h1 class="title">使用內部樣式</h1>
    <button class="button">點擊我</button>
  </div>
</body>`;

	return (
		<SlideLayout
			prevSlide="/lesson1/slide14"
			nextSlide="/lesson1/slide16"
			currentSlide="15"
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
								CSS 引入方式 (2/3)
							</h1>
							<h2 className="text-2xl text-tech-highlight/80">
								內部樣式 Internal Styles
							</h2>
						</motion.div>

						<div className="grid grid-cols-2 gap-8">
							{/* Left Column - Description */}
							<motion.div
								initial={{ opacity: 0, x: -20 }}
								animate={{ opacity: 1, x: 0 }}
								transition={{ duration: 0.6, delay: 0.2 }}
								className="bg-[#1a1a1a] rounded-lg p-8"
							>
								<div className="space-y-6">
									<div className="bg-black/30 rounded-lg p-6">
										<h4 className="text-xl font-bold text-tech-purple mb-4 flex items-center gap-2">
											<span>📝</span> 內部樣式
										</h4>
										<p className="text-gray-300 leading-relaxed mb-4">
											內部樣式是在 HTML 文件的 &lt;head&gt; 區塊中使用
											&lt;style&gt; 標籤定義 CSS。這種方式的特點是：
										</p>
										<ul className="list-disc list-inside space-y-2 text-gray-300">
											<li>樣式只對當前頁面有效</li>
											<li>可以重複使用於頁面內的多個元素</li>
											<li>不需要額外的檔案請求</li>
											<li>適合單頁面的樣式定義</li>
										</ul>
									</div>
									<div className="bg-black/30 rounded-lg p-6">
										<h4 className="text-xl font-bold text-tech-purple mb-4 flex items-center gap-2">
											<span>💡</span> 使用時機
										</h4>
										<ul className="list-disc list-inside space-y-2 text-gray-300">
											<li>製作獨立的單頁面</li>
											<li>快速原型設計</li>
											<li>頁面特定的樣式覆蓋</li>
										</ul>
									</div>
								</div>
							</motion.div>

							{/* Right Column - Code Example */}
							<motion.div
								initial={{ opacity: 0, x: 20 }}
								animate={{ opacity: 1, x: 0 }}
								transition={{ duration: 0.6, delay: 0.4 }}
								className="bg-[#1a1a1a] rounded-lg p-8"
							>
								<div className="space-y-4">
									<h3 className="text-xl font-bold text-tech-purple mb-4">
										程式碼範例
									</h3>
									<CodeBlock code={internalStyleCode} language="html" />
									<div className="mt-6 bg-black/30 rounded-lg p-4">
										<div className="container mx-auto">
											<h1 className="text-[#22d3ee] text-2xl text-center mb-4">
												使用內部樣式
											</h1>
											<div className="text-center">
												<button className="bg-[#22d3ee] text-white px-5 py-2.5 rounded border-none cursor-pointer">
													點擊我
												</button>
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
