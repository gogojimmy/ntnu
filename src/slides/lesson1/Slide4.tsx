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

export default function Slide4() {
	const headingsAndParagraphsCode = `<h1>第一級標題</h1>
<h2>第二級標題</h2>
<h3>第三級標題</h3>
<p>這是一個段落。<br>這是新的一行。</p>`;

	const textFormattingCode = `<p>
  <strong>這是粗體文字</strong> 或 <b>這也是粗體</b><br>
  <em>這是斜體文字</em> 或 <i>這也是斜體</i><br>
  <u>這是帶底線的文字</u>
</p>`;

	return (
		<SlideLayout currentSlide="04" totalSlidesInLesson={31}>
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
								常用 HTML 標籤 (1)
							</h1>
						</motion.div>

						<div className="grid grid-cols-2 gap-8">
							{/* Headings and Paragraphs Section */}
							<motion.div
								initial={{ opacity: 0, x: -20 }}
								animate={{ opacity: 1, x: 0 }}
								transition={{ duration: 0.6, delay: 0.2 }}
								className="space-y-6"
							>
								<div>
									<h2 className="text-2xl font-bold text-tech-highlight mb-4">
										標題與段落
									</h2>
									<div className="space-y-4">
										<CodeBlock
											code={headingsAndParagraphsCode}
											language="html"
										/>
										<div className="bg-black/20 p-4 rounded-lg border border-tech-grid-bright/30">
											<h3 className="text-lg font-bold text-tech-purple mb-2">
												顯示效果：
											</h3>
											<div
												className="space-y-2 text-white/90"
												dangerouslySetInnerHTML={{
													__html: headingsAndParagraphsCode,
												}}
											/>
										</div>
									</div>
								</div>
							</motion.div>

							{/* Text Formatting Section */}
							<motion.div
								initial={{ opacity: 0, x: 20 }}
								animate={{ opacity: 1, x: 0 }}
								transition={{ duration: 0.6, delay: 0.4 }}
								className="space-y-6"
							>
								<div>
									<h2 className="text-2xl font-bold text-tech-highlight mb-4">
										格式化文字
									</h2>
									<div className="space-y-4">
										<CodeBlock code={textFormattingCode} language="html" />
										<div className="bg-black/20 p-4 rounded-lg border border-tech-grid-bright/30">
											<h3 className="text-lg font-bold text-tech-purple mb-2">
												顯示效果：
											</h3>
											<div
												className="space-y-2 text-white/90"
												dangerouslySetInnerHTML={{
													__html: textFormattingCode,
												}}
											/>
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
