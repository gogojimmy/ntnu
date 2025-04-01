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

export default function Slide20() {
	const alignItemsExample = `/* align-items 示例 */
.container {
  display: flex;
  align-items: stretch;     /* 預設值：拉伸填滿 */
  /* align-items: flex-start;  起點對齊 */
  /* align-items: center;      置中對齊 */
  /* align-items: flex-end;    終點對齊 */
  /* align-items: baseline;    基線對齊 */
}`;

	const alignContentExample = `/* align-content 示例 */
.container {
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;    /* 起點對齊 */
  /* align-content: center;        置中對齊 */
  /* align-content: flex-end;      終點對齊 */
  /* align-content: space-between; 兩端對齊 */
  /* align-content: space-around;  環繞空間 */
  /* align-content: stretch;       拉伸填滿（預設） */
}`;

	return (
		<SlideLayout
			prevSlide="/lesson1/slide19"
			nextSlide="/lesson1/slide21"
			currentSlide="20"
			totalSlides="31"
			courseName="NTNU Web Development Course"
		>
			<div className="relative h-full flex flex-col justify-center">
				{/* Background Elements */}
				<div className="absolute inset-0 rounded-2xl bg-black/40 backdrop-blur-sm border border-tech-grid-bright" />

				{/* Content */}
				<div className="relative px-12 py-6">
					<div className="space-y-4 max-w-[1280px] mx-auto">
						{/* Title */}
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6 }}
						>
							<h1 className="text-3xl font-bold text-white mb-2">
								Flexbox 基礎 (4/9)
							</h1>
							<h2 className="text-xl text-tech-highlight/80">
								align-items 與 align-content
							</h2>
						</motion.div>

						<div className="grid grid-cols-2 gap-4">
							{/* Left Column - align-items */}
							<motion.div
								initial={{ opacity: 0, x: -20 }}
								animate={{ opacity: 1, x: 0 }}
								transition={{ duration: 0.6, delay: 0.2 }}
								className="space-y-4"
							>
								<div className="bg-[#1a1a1a] rounded-lg p-4">
									<h3 className="text-xl font-bold text-tech-highlight mb-3">
										align-items
									</h3>
									<CodeBlock code={alignItemsExample} language="css" />
									<div className="mt-4 space-y-4">
										<div className="space-y-2">
											<h4 className="text-lg font-bold text-tech-purple">
												stretch（預設）
											</h4>
											<div className="border-2 border-dashed border-tech-highlight/30 p-2 rounded-lg h-24">
												<div className="flex h-full gap-2">
													<div className="bg-tech-highlight/20 w-14 rounded-lg flex items-center justify-center text-tech-highlight">
														1
													</div>
													<div className="bg-tech-highlight/20 w-14 rounded-lg flex items-center justify-center text-tech-highlight">
														2
													</div>
													<div className="bg-tech-highlight/20 w-14 rounded-lg flex items-center justify-center text-tech-highlight">
														3
													</div>
												</div>
											</div>
										</div>
										<div className="space-y-2">
											<h4 className="text-lg font-bold text-tech-purple">
												flex-start
											</h4>
											<div className="border-2 border-dashed border-tech-highlight/30 p-2 rounded-lg h-24">
												<div className="flex h-full items-start gap-2">
													<div className="bg-tech-highlight/20 w-14 h-14 rounded-lg flex items-center justify-center text-tech-highlight">
														1
													</div>
													<div className="bg-tech-highlight/20 w-14 h-14 rounded-lg flex items-center justify-center text-tech-highlight">
														2
													</div>
													<div className="bg-tech-highlight/20 w-14 h-14 rounded-lg flex items-center justify-center text-tech-highlight">
														3
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</motion.div>

							{/* Right Column - align-content */}
							<motion.div
								initial={{ opacity: 0, x: 20 }}
								animate={{ opacity: 1, x: 0 }}
								transition={{ duration: 0.6, delay: 0.4 }}
								className="space-y-4"
							>
								<div className="bg-[#1a1a1a] rounded-lg p-4">
									<h3 className="text-xl font-bold text-tech-highlight mb-3">
										align-content
									</h3>
									<CodeBlock code={alignContentExample} language="css" />
									<div className="mt-4 space-y-4">
										<div className="space-y-2">
											<h4 className="text-lg font-bold text-tech-purple">
												flex-start
											</h4>
											<div className="border-2 border-dashed border-tech-highlight/30 p-2 rounded-lg h-32">
												<div className="flex flex-wrap content-start gap-2">
													<div className="bg-tech-highlight/20 w-14 h-14 rounded-lg flex items-center justify-center text-tech-highlight">
														1
													</div>
													<div className="bg-tech-highlight/20 w-14 h-14 rounded-lg flex items-center justify-center text-tech-highlight">
														2
													</div>
													<div className="bg-tech-highlight/20 w-14 h-14 rounded-lg flex items-center justify-center text-tech-highlight">
														3
													</div>
													<div className="bg-tech-highlight/20 w-14 h-14 rounded-lg flex items-center justify-center text-tech-highlight">
														4
													</div>
												</div>
											</div>
										</div>
										<div className="space-y-2">
											<h4 className="text-lg font-bold text-tech-purple">
												space-between
											</h4>
											<div className="border-2 border-dashed border-tech-highlight/30 p-2 rounded-lg h-32">
												<div className="flex flex-wrap content-between h-full gap-2">
													<div className="bg-tech-highlight/20 w-14 h-14 rounded-lg flex items-center justify-center text-tech-highlight">
														1
													</div>
													<div className="bg-tech-highlight/20 w-14 h-14 rounded-lg flex items-center justify-center text-tech-highlight">
														2
													</div>
													<div className="bg-tech-highlight/20 w-14 h-14 rounded-lg flex items-center justify-center text-tech-highlight">
														3
													</div>
													<div className="bg-tech-highlight/20 w-14 h-14 rounded-lg flex items-center justify-center text-tech-highlight">
														4
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</motion.div>
						</div>

						{/* Additional Examples */}
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, delay: 0.6 }}
							className="grid grid-cols-3 gap-4"
						>
							<div className="bg-[#1a1a1a] rounded-lg p-4">
								<h4 className="text-lg font-bold text-tech-purple mb-2">
									center
								</h4>
								<div className="border-2 border-dashed border-tech-highlight/30 p-2 rounded-lg h-24">
									<div className="flex h-full items-center gap-2">
										<div className="bg-tech-highlight/20 w-14 h-14 rounded-lg flex items-center justify-center text-tech-highlight">
											1
										</div>
										<div className="bg-tech-highlight/20 w-14 h-14 rounded-lg flex items-center justify-center text-tech-highlight">
											2
										</div>
										<div className="bg-tech-highlight/20 w-14 h-14 rounded-lg flex items-center justify-center text-tech-highlight">
											3
										</div>
									</div>
								</div>
							</div>
							<div className="bg-[#1a1a1a] rounded-lg p-4">
								<h4 className="text-lg font-bold text-tech-purple mb-2">
									flex-end
								</h4>
								<div className="border-2 border-dashed border-tech-highlight/30 p-2 rounded-lg h-24">
									<div className="flex h-full items-end gap-2">
										<div className="bg-tech-highlight/20 w-14 h-14 rounded-lg flex items-center justify-center text-tech-highlight">
											1
										</div>
										<div className="bg-tech-highlight/20 w-14 h-14 rounded-lg flex items-center justify-center text-tech-highlight">
											2
										</div>
										<div className="bg-tech-highlight/20 w-14 h-14 rounded-lg flex items-center justify-center text-tech-highlight">
											3
										</div>
									</div>
								</div>
							</div>
							<div className="bg-[#1a1a1a] rounded-lg p-4">
								<h4 className="text-lg font-bold text-tech-purple mb-2">
									baseline
								</h4>
								<div className="border-2 border-dashed border-tech-highlight/30 p-2 rounded-lg h-24">
									<div className="flex h-full items-baseline gap-2">
										<div className="bg-tech-highlight/20 w-14 h-10 rounded-lg flex items-center justify-center text-tech-highlight">
											1
										</div>
										<div className="bg-tech-highlight/20 w-14 h-14 rounded-lg flex items-center justify-center text-tech-highlight">
											2
										</div>
										<div className="bg-tech-highlight/20 w-14 h-12 rounded-lg flex items-center justify-center text-tech-highlight">
											3
										</div>
									</div>
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
