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

export default function Slide17() {
	const flexboxExample = `/* 容器屬性示例 */
.container {
  display: flex;
  flex-direction: row | column | row-reverse | column-reverse;
  justify-content: flex-start | center | flex-end | space-between | space-around;
  align-items: stretch | flex-start | center | flex-end | baseline;
  flex-wrap: nowrap | wrap | wrap-reverse;
  gap: 10px;
}`;

	return (
		<SlideLayout currentSlide="17">
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
								Flexbox 基礎 (1/4)
							</h1>
							<h2 className="text-2xl text-tech-highlight/80">容器屬性介紹</h2>
						</motion.div>

						<div className="grid grid-cols-2 gap-8">
							{/* Left Column - Concept */}
							<motion.div
								initial={{ opacity: 0, x: -20 }}
								animate={{ opacity: 1, x: 0 }}
								transition={{ duration: 0.6, delay: 0.2 }}
								className="bg-[#1a1a1a] rounded-lg p-8"
							>
								<h3 className="text-2xl font-bold text-tech-highlight mb-6">
									什麼是 Flexbox？
								</h3>
								<div className="space-y-4">
									<p className="text-gray-300">
										Flexbox
										是一種一維的彈性布局模型，能夠更有效地分配和對齊容器內的項目。
									</p>
									<div className="bg-black/30 rounded-lg p-4">
										<h4 className="text-xl font-bold text-tech-purple mb-2">
											兩個重要概念
										</h4>
										<ul className="list-disc list-inside text-gray-300 space-y-2">
											<li>Flex Container（容器）：使用 display: flex 的元素</li>
											<li>Flex Items（項目）：容器內的直接子元素</li>
										</ul>
									</div>
									<div className="mt-6">
										<h4 className="text-xl font-bold text-tech-purple mb-2">
											主軸與交叉軸
										</h4>
										<div className="border-2 border-dashed border-tech-highlight/30 p-4 rounded-lg">
											<div className="flex items-center justify-center">
												<div className="relative bg-tech-highlight/20 w-full h-16 rounded-lg flex items-center justify-center">
													<div className="absolute w-full h-0.5 bg-tech-purple"></div>
													<div className="absolute h-full w-0.5 bg-tech-highlight"></div>
													<div className="text-tech-highlight text-sm">
														主軸 (Main Axis)
													</div>
													<div className="absolute -right-16 text-tech-purple text-sm">
														交叉軸
														<br />
														(Cross Axis)
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</motion.div>

							{/* Right Column - Properties */}
							<motion.div
								initial={{ opacity: 0, x: 20 }}
								animate={{ opacity: 1, x: 0 }}
								transition={{ duration: 0.6, delay: 0.4 }}
								className="space-y-6"
							>
								<div className="bg-[#1a1a1a] rounded-lg p-8">
									<h3 className="text-2xl font-bold text-tech-highlight mb-6">
										容器屬性
									</h3>
									<CodeBlock code={flexboxExample} language="css" />
								</div>

								<div className="bg-[#1a1a1a] rounded-lg p-6">
									<h4 className="text-xl font-bold text-tech-purple mb-4">
										屬性說明
									</h4>
									<ul className="space-y-3 text-gray-300">
										<li className="flex items-start gap-2">
											<span className="text-tech-purple">•</span>
											<div>
												<strong>flex-direction</strong>
												：定義主軸的方向，決定項目的排列方向
											</div>
										</li>
										<li className="flex items-start gap-2">
											<span className="text-tech-purple">•</span>
											<div>
												<strong>justify-content</strong>
												：定義項目在主軸上的對齊方式
											</div>
										</li>
										<li className="flex items-start gap-2">
											<span className="text-tech-purple">•</span>
											<div>
												<strong>align-items</strong>
												：定義項目在交叉軸上的對齊方式
											</div>
										</li>
										<li className="flex items-start gap-2">
											<span className="text-tech-purple">•</span>
											<div>
												<strong>flex-wrap</strong>：定義項目是否換行
											</div>
										</li>
										<li className="flex items-start gap-2">
											<span className="text-tech-purple">•</span>
											<div>
												<strong>gap</strong>：定義項目之間的間距
											</div>
										</li>
									</ul>
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
