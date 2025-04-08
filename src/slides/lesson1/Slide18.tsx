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

export default function Slide18() {
	const flexDirectionExample = `/* flex-direction 示例 */
.container {
  display: flex;
  flex-direction: row;         /* 預設值：從左到右 */
  /* flex-direction: column;      從上到下 */
  /* flex-direction: row-reverse; 從右到左 */
  /* flex-direction: column-reverse; 從下到上 */
}`;

	const flexWrapExample = `/* flex-wrap 示例 */
.container {
  display: flex;
  flex-wrap: nowrap;    /* 預設值：不換行 */
  /* flex-wrap: wrap;      換行 */
  /* flex-wrap: wrap-reverse; 反向換行 */
  
  gap: 10px;           /* 項目間距 */
}`;

	return (
		<SlideLayout currentSlide="18">
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
								Flexbox 基礎 (2/9)
							</h1>
							<h2 className="text-xl text-tech-highlight/80">
								flex-direction 與 flex-wrap
							</h2>
						</motion.div>

						<div className="grid grid-cols-2 gap-4">
							{/* Left Column - flex-direction */}
							<motion.div
								initial={{ opacity: 0, x: -20 }}
								animate={{ opacity: 1, x: 0 }}
								transition={{ duration: 0.6, delay: 0.2 }}
								className="space-y-4"
							>
								<div className="bg-[#1a1a1a] rounded-lg p-4">
									<h3 className="text-xl font-bold text-tech-highlight mb-3">
										flex-direction
									</h3>
									<CodeBlock code={flexDirectionExample} language="css" />
									<div className="mt-4 space-y-4">
										<div className="space-y-2">
											<h4 className="text-lg font-bold text-tech-purple">
												row（預設）
											</h4>
											<div className="border-2 border-dashed border-tech-highlight/30 p-2 rounded-lg">
												<div className="flex gap-2">
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
										<div className="space-y-2">
											<h4 className="text-lg font-bold text-tech-purple">
												column
											</h4>
											<div className="border-2 border-dashed border-tech-highlight/30 p-2 rounded-lg">
												<div className="flex flex-col gap-2">
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

							{/* Right Column - flex-wrap */}
							<motion.div
								initial={{ opacity: 0, x: 20 }}
								animate={{ opacity: 1, x: 0 }}
								transition={{ duration: 0.6, delay: 0.4 }}
								className="space-y-4"
							>
								<div className="bg-[#1a1a1a] rounded-lg p-4">
									<h3 className="text-xl font-bold text-tech-highlight mb-3">
										flex-wrap
									</h3>
									<CodeBlock code={flexWrapExample} language="css" />
									<div className="mt-4 space-y-4">
										<div className="space-y-2">
											<h4 className="text-lg font-bold text-tech-purple">
												nowrap（預設）
											</h4>
											<div className="border-2 border-dashed border-tech-highlight/30 p-2 rounded-lg">
												<div className="flex flex-nowrap gap-2 overflow-x-auto">
													<div className="bg-tech-highlight/20 w-28 h-14 rounded-lg flex-shrink-0 flex items-center justify-center text-tech-highlight">
														1
													</div>
													<div className="bg-tech-highlight/20 w-28 h-14 rounded-lg flex-shrink-0 flex items-center justify-center text-tech-highlight">
														2
													</div>
													<div className="bg-tech-highlight/20 w-28 h-14 rounded-lg flex-shrink-0 flex items-center justify-center text-tech-highlight">
														3
													</div>
													<div className="bg-tech-highlight/20 w-28 h-14 rounded-lg flex-shrink-0 flex items-center justify-center text-tech-highlight">
														4
													</div>
												</div>
											</div>
										</div>
										<div className="space-y-2">
											<h4 className="text-lg font-bold text-tech-purple">
												wrap
											</h4>
											<div className="border-2 border-dashed border-tech-highlight/30 p-2 rounded-lg">
												<div className="flex flex-wrap gap-2">
													<div className="bg-tech-highlight/20 w-28 h-14 rounded-lg flex items-center justify-center text-tech-highlight">
														1
													</div>
													<div className="bg-tech-highlight/20 w-28 h-14 rounded-lg flex items-center justify-center text-tech-highlight">
														2
													</div>
													<div className="bg-tech-highlight/20 w-28 h-14 rounded-lg flex items-center justify-center text-tech-highlight">
														3
													</div>
													<div className="bg-tech-highlight/20 w-28 h-14 rounded-lg flex items-center justify-center text-tech-highlight">
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
							className="grid grid-cols-2 gap-4"
						>
							<div className="bg-[#1a1a1a] rounded-lg p-4">
								<h4 className="text-lg font-bold text-tech-purple mb-2">
									row-reverse
								</h4>
								<div className="border-2 border-dashed border-tech-highlight/30 p-2 rounded-lg">
									<div className="flex flex-row-reverse gap-2">
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
									wrap-reverse
								</h4>
								<div className="border-2 border-dashed border-tech-highlight/30 p-2 rounded-lg">
									<div className="flex flex-wrap-reverse gap-2">
										<div className="bg-tech-highlight/20 w-28 h-14 rounded-lg flex items-center justify-center text-tech-highlight">
											1
										</div>
										<div className="bg-tech-highlight/20 w-28 h-14 rounded-lg flex items-center justify-center text-tech-highlight">
											2
										</div>
										<div className="bg-tech-highlight/20 w-28 h-14 rounded-lg flex items-center justify-center text-tech-highlight">
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
