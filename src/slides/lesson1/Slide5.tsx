import SlideLayout from "../../layouts/SlideLayout";
import { motion } from "motion/react";
import { Highlight, themes } from "prism-react-renderer";

const CodeBlock = ({ code, language }: { code: string; language: string }) => (
	<Highlight theme={themes.nightOwl} code={code.trim()} language={language}>
		{({ style, tokens, getLineProps, getTokenProps }) => (
			<pre
				className="bg-black/30 p-3 rounded-md overflow-x-auto text-sm h-full min-h-[200px]"
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

export default function Slide5() {
	const listsCode = `<ul>
  <li>無序清單項目 1</li>
  <li>無序清單項目 2</li>
  <li>無序清單項目 3</li>
</ul>

<ol>
  <li>有序清單項目 1</li>
  <li>有序清單項目 2</li>
  <li>有序清單項目 3</li>
</ol>`;

	const linksAndImagesCode = `<p>
  <a href="https://www.ntnu.edu.tw">
    點擊訪問 NTNU 網站
  </a>
</p>

<img 
  src="https://picsum.photos/200/100" 
  alt="示例圖片"
/>`;

	return (
		<SlideLayout
			prevSlide="/lesson1/slide4"
			nextSlide="/lesson1/slide6"
			currentSlide="05"
			totalSlides="25"
			courseName="NTNU Web Development Course"
		>
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
								常用 HTML 標籤 (2)
							</h1>
						</motion.div>

						<div className="grid grid-cols-2 gap-8">
							{/* Lists Section */}
							<motion.div
								initial={{ opacity: 0, x: -20 }}
								animate={{ opacity: 1, x: 0 }}
								transition={{ duration: 0.6, delay: 0.2 }}
								className="flex flex-col"
							>
								<h2 className="text-2xl font-bold text-tech-highlight mb-4">
									清單
								</h2>
								<div className="grid grid-rows-2 gap-4 flex-1">
									<div className="w-full h-full">
										<CodeBlock code={listsCode} language="html" />
									</div>
									<div className="w-full h-full bg-black/20 p-4 rounded-lg border border-tech-grid-bright/30">
										<h3 className="text-lg font-bold text-tech-purple mb-2">
											顯示效果：
										</h3>
										<div
											className="text-white/90"
											dangerouslySetInnerHTML={{
												__html: listsCode,
											}}
										/>
									</div>
								</div>
							</motion.div>

							{/* Links and Images Section */}
							<motion.div
								initial={{ opacity: 0, x: 20 }}
								animate={{ opacity: 1, x: 0 }}
								transition={{ duration: 0.6, delay: 0.4 }}
								className="flex flex-col"
							>
								<h2 className="text-2xl font-bold text-tech-highlight mb-4">
									連結與圖片
								</h2>
								<div className="grid grid-rows-2 gap-4 flex-1">
									<div className="w-full h-full">
										<CodeBlock code={linksAndImagesCode} language="html" />
									</div>
									<div className="w-full h-full bg-black/20 p-4 rounded-lg border border-tech-grid-bright/30">
										<h3 className="text-lg font-bold text-tech-purple mb-2">
											顯示效果：
										</h3>
										<div
											className="text-white/90"
											dangerouslySetInnerHTML={{
												__html: linksAndImagesCode,
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
