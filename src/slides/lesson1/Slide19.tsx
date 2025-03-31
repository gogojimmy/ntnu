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

export default function Slide19() {
	const bootstrapExample = `<!-- Bootstrap 範例 -->
<div class="container">
  <nav class="navbar navbar-dark bg-dark">
    <a class="navbar-brand" href="#">網站名稱</a>
    <button class="btn btn-primary">登入</button>
  </nav>
  <div class="row mt-4">
    <div class="col-md-6">
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">卡片標題</h5>
          <p class="card-text">使用 Bootstrap 快速建立美觀的介面</p>
        </div>
      </div>
    </div>
  </div>
</div>`;

	const tailwindExample = `<!-- Tailwind CSS 範例 -->
<div class="container mx-auto px-4">
  <nav class="flex items-center justify-between p-4 bg-gray-800">
    <a class="text-white text-xl font-bold" href="#">網站名稱</a>
    <button class="bg-blue-500 text-white px-4 py-2 rounded">
      登入
    </button>
  </nav>
  <div class="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
    <div class="bg-white rounded-lg shadow p-6">
      <h5 class="text-xl font-bold mb-2">卡片標題</h5>
      <p class="text-gray-600">使用 Tailwind 靈活定制樣式</p>
    </div>
  </div>
</div>`;

	return (
		<SlideLayout
			prevSlide="/lesson1/slide18"
			nextSlide="/lesson1/slide20"
			currentSlide="19"
			totalSlides="27"
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
							<h2 className="text-2xl text-tech-highlight/80">框架使用實例</h2>
						</motion.div>

						<div className="grid grid-cols-2 gap-8">
							{/* Left Column - Bootstrap Example */}
							<motion.div
								initial={{ opacity: 0, x: -20 }}
								animate={{ opacity: 1, x: 0 }}
								transition={{ duration: 0.6, delay: 0.2 }}
								className="bg-[#1a1a1a] rounded-lg p-8 flex flex-col"
							>
								<h3 className="text-2xl font-bold text-tech-highlight mb-6 flex items-center gap-2">
									<span className="text-3xl">🎨</span> Bootstrap 範例
								</h3>
								<div className="flex-1 overflow-hidden">
									<div className="h-full overflow-auto">
										<CodeBlock code={bootstrapExample} language="html" />
									</div>
								</div>
								<div className="mt-4 bg-black/30 rounded-lg p-4">
									<p className="text-gray-300">
										Bootstrap 使用預定義的類別名稱，提供完整的組件系統。
									</p>
								</div>
							</motion.div>

							{/* Right Column - Tailwind Example */}
							<motion.div
								initial={{ opacity: 0, x: 20 }}
								animate={{ opacity: 1, x: 0 }}
								transition={{ duration: 0.6, delay: 0.4 }}
								className="bg-[#1a1a1a] rounded-lg p-8 flex flex-col"
							>
								<h3 className="text-2xl font-bold text-tech-highlight mb-6 flex items-center gap-2">
									<span className="text-3xl">💨</span> Tailwind CSS 範例
								</h3>
								<div className="flex-1 overflow-hidden">
									<div className="h-full overflow-auto">
										<CodeBlock code={tailwindExample} language="html" />
									</div>
								</div>
								<div className="mt-4 bg-black/30 rounded-lg p-4">
									<p className="text-gray-300">
										Tailwind CSS 採用原子化類別，直接在 HTML 中組合樣式。
									</p>
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
