import SlideLayout from "../../layouts/SlideLayout";
import { motion } from "motion/react";
import { Highlight, themes } from "prism-react-renderer";

const CodeBlock = ({ code, language }: { code: string; language: string }) => (
	<Highlight theme={themes.nightOwl} code={code.trim()} language={language}>
		{({ style, tokens, getLineProps, getTokenProps }) => (
			<pre
				className="bg-black/30 p-3 rounded-md overflow-x-auto text-sm"
				style={style}
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

export default function Slide3() {
	const htmlCode = `<!DOCTYPE html>
<html lang="zh-TW">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>我的第一個網頁</title>
</head>
<body>
    <!-- 內容放這裡 -->
</body>
</html>`;

	const structureItems = [
		{
			element: "<!DOCTYPE html>",
			description: "文件類型宣告",
			color: "text-tech-purple",
		},
		{
			element: "<html>",
			description: "根元素",
			color: "text-tech-highlight",
		},
		{
			element: "<head>",
			description: "元數據區域",
			color: "text-tech-green",
		},
		{
			element: "<body>",
			description: "可見內容區域",
			color: "text-tech-yellow",
		},
	];

	return (
		<SlideLayout
			currentSlide="03"
			totalSlidesInLesson={31}
			courseName="lesson1"
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
								HTML 基本結構
							</h1>
						</motion.div>

						<div className="grid grid-cols-2 gap-8">
							{/* Code Section */}
							<motion.div
								initial={{ opacity: 0, x: -20 }}
								animate={{ opacity: 1, x: 0 }}
								transition={{ duration: 0.6, delay: 0.2 }}
								className="space-y-4"
							>
								<h2 className="text-2xl font-bold text-tech-highlight mb-4">
									基本架構
								</h2>
								<CodeBlock code={htmlCode} language="html" />
							</motion.div>

							{/* Structure Explanation */}
							<motion.div
								initial={{ opacity: 0, x: 20 }}
								animate={{ opacity: 1, x: 0 }}
								transition={{ duration: 0.6, delay: 0.4 }}
								className="space-y-4"
							>
								<h2 className="text-2xl font-bold text-tech-highlight mb-4">
									結構說明
								</h2>
								<div className="space-y-4">
									{structureItems.map((item, index) => (
										<motion.div
											key={index}
											initial={{ opacity: 0, y: 10 }}
											animate={{ opacity: 1, y: 0 }}
											transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
											className="flex items-center space-x-4 bg-black/20 p-4 rounded-lg border border-tech-grid-bright/30"
										>
											<code className={`${item.color} font-mono text-lg`}>
												{item.element}
											</code>
											<span className="text-white/80">{item.description}</span>
										</motion.div>
									))}
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
