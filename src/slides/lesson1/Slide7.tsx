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
		.preview-content header {
			background: rgba(34, 211, 238, 0.1);
			padding: 0.5rem;
			border-bottom: 1px solid rgba(34, 211, 238, 0.3);
			margin-bottom: 1rem;
		}
		.preview-content nav {
			display: flex;
			gap: 1rem;
		}
		.preview-content a {
			color: #22d3ee;
			text-decoration: none;
		}
		.preview-content a:hover {
			text-decoration: underline;
		}
		.preview-content main {
			padding: 1rem;
			background: rgba(34, 211, 238, 0.05);
			border: 1px solid rgba(34, 211, 238, 0.2);
			border-radius: 0.25rem;
			margin-bottom: 1rem;
		}
		.preview-content section {
			margin-bottom: 1rem;
		}
		.preview-content h2 {
			color: #22d3ee;
			font-size: 1.25rem;
			margin-bottom: 0.5rem;
		}
		.preview-content footer {
			border-top: 1px solid rgba(34, 211, 238, 0.3);
			padding-top: 0.5rem;
			font-size: 0.875rem;
			color: rgba(255, 255, 255, 0.6);
		}
	`}</style>
);

export default function Slide7() {
	const semanticCode = `<header>
  <nav>
    <a href="/">首頁</a>
    <a href="/about">關於</a>
  </nav>
</header>

<main>
  <section class="intro">
    <h2>網站簡介</h2>
    <p>這是主要內容區域</p>
  </section>
</main>

<footer>
  <p>© 2024 版權所有</p>
</footer>`;

	return (
		<SlideLayout
			prevSlide="/lesson1/slide6"
			nextSlide="/lesson1/slide8"
			currentSlide="07"
			totalSlides="31"
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
								常用 HTML 標籤 (4)
							</h1>
							<h2 className="text-2xl text-tech-highlight/80">語義化標籤</h2>
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
									<CodeBlock code={semanticCode} language="html" />
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
										顯示效果與優點：
									</h3>
									<div className="space-y-6">
										<div
											className="text-white/90 preview-content"
											dangerouslySetInnerHTML={{
												__html: semanticCode,
											}}
										/>
										<div className="space-y-3 mt-6 border-t border-tech-grid-bright/30 pt-4">
											<h4 className="text-tech-purple font-bold mb-2">
												優點：
											</h4>
											<ul className="list-disc list-inside space-y-2 text-white/90">
												<li>提高程式碼可讀性</li>
												<li>有助於搜尋引擎優化 (SEO)</li>
												<li>改善網頁的無障礙性</li>
												<li>使結構更加清晰明確</li>
												<li>便於維護和團隊協作</li>
											</ul>
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
