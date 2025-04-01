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

export default function Slide23() {
	const alignSelfExample = `/* align-self 示例 */
.container {
  display: flex;
  align-items: center;    /* 容器的預設對齊方式 */
  height: 200px;
}

.item {
  align-self: flex-start;  /* 覆蓋容器的對齊方式 */
  /* align-self: center;      跟隨容器的對齊方式 */
  /* align-self: flex-end;    底部對齊 */
  /* align-self: stretch;     拉伸填滿（預設） */
  /* align-self: baseline;    基線對齊 */
}`;

	const orderExample = `/* order 示例 */
.container {
  display: flex;
}

.first {
  order: -1;    /* 排在最前面 */
}

.normal {
  order: 0;     /* 預設值 */
}

.last {
  order: 1;     /* 排在最後面 */
}`;

	return (
		<SlideLayout
			prevSlide="/lesson1/slide22"
			nextSlide="/lesson1/slide24"
			currentSlide="23"
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
							<h1 className="text-3xl font-bold text-white mb-1">
								Flexbox 基礎 (7/9)
							</h1>
							<h2 className="text-xl text-tech-highlight/80">
								align-self 與 order
							</h2>
						</motion.div>

						<div className="grid grid-cols-2 gap-4">
							{/* Left Column - align-self */}
							<motion.div
								initial={{ opacity: 0, x: -20 }}
								animate={{ opacity: 1, x: 0 }}
								transition={{ duration: 0.6, delay: 0.2 }}
								className="space-y-4"
							>
								<div className="bg-[#1a1a1a] rounded-lg p-4">
									<h3 className="text-xl font-bold text-tech-highlight mb-3">
										align-self
									</h3>
									<CodeBlock code={alignSelfExample} language="css" />
									<div className="mt-3">
										<div className="space-y-2">
											<h4 className="text-lg font-bold text-tech-purple">
												個別項目對齊
											</h4>
											<div className="border-2 border-dashed border-tech-highlight/30 p-2 rounded-lg h-32">
												<div className="flex items-center h-full gap-2">
													<div className="bg-tech-highlight/20 w-20 h-12 rounded-lg flex items-center justify-center text-tech-highlight text-sm">
														center
													</div>
													<div className="bg-tech-highlight/20 w-20 self-start h-12 rounded-lg flex items-center justify-center text-tech-highlight text-sm">
														flex-start
													</div>
													<div className="bg-tech-highlight/20 w-20 self-end h-12 rounded-lg flex items-center justify-center text-tech-highlight text-sm">
														flex-end
													</div>
													<div className="bg-tech-highlight/20 w-20 self-stretch rounded-lg flex items-center justify-center text-tech-highlight text-sm">
														stretch
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</motion.div>

							{/* Right Column - order */}
							<motion.div
								initial={{ opacity: 0, x: 20 }}
								animate={{ opacity: 1, x: 0 }}
								transition={{ duration: 0.6, delay: 0.4 }}
								className="space-y-4"
							>
								<div className="bg-[#1a1a1a] rounded-lg p-4">
									<h3 className="text-xl font-bold text-tech-highlight mb-3">
										order
									</h3>
									<CodeBlock code={orderExample} language="css" />
									<div className="mt-3">
										<div className="space-y-2">
											<h4 className="text-lg font-bold text-tech-purple">
												改變排序順序
											</h4>
											<div className="border-2 border-dashed border-tech-highlight/30 p-2 rounded-lg">
												<p className="text-sm text-gray-400 mb-1">原始順序</p>
												<div className="flex gap-2 mb-2">
													<div className="bg-tech-highlight/20 w-20 rounded-lg p-2 flex items-center justify-center text-tech-highlight text-sm">
														1
													</div>
													<div className="bg-tech-highlight/20 w-20 rounded-lg p-2 flex items-center justify-center text-tech-highlight text-sm">
														2
													</div>
													<div className="bg-tech-highlight/20 w-20 rounded-lg p-2 flex items-center justify-center text-tech-highlight text-sm">
														3
													</div>
												</div>
												<p className="text-sm text-gray-400 mb-1">
													使用 order 後
												</p>
												<div className="flex gap-2">
													<div className="bg-tech-highlight/20 w-20 order-2 rounded-lg p-2 flex items-center justify-center text-tech-highlight text-sm">
														1
													</div>
													<div className="bg-tech-highlight/20 w-20 order-3 rounded-lg p-2 flex items-center justify-center text-tech-highlight text-sm">
														2
													</div>
													<div className="bg-tech-highlight/20 w-20 order-1 rounded-lg p-2 flex items-center justify-center text-tech-highlight text-sm">
														3
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</motion.div>
						</div>

						{/* Additional Info */}
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, delay: 0.6 }}
							className="bg-[#1a1a1a] rounded-lg p-4"
						>
							<h3 className="text-xl font-bold text-tech-highlight mb-3">
								使用場景
							</h3>
							<div className="grid grid-cols-2 gap-4">
								<div className="space-y-2">
									<h4 className="text-lg font-bold text-tech-purple">
										align-self 應用
									</h4>
									<div className="border-2 border-dashed border-tech-highlight/30 p-2 rounded-lg">
										<div className="flex items-center gap-2 h-24">
											<div className="bg-tech-highlight/20 w-20 rounded-lg p-2 flex items-center justify-center text-tech-highlight text-sm">
												Logo
											</div>
											<div className="bg-tech-highlight/20 w-20 self-start rounded-lg p-2 flex items-center justify-center text-tech-highlight text-sm">
												選單
											</div>
											<div className="bg-tech-highlight/20 w-20 self-end rounded-lg p-2 flex items-center justify-center text-tech-highlight text-sm">
												登入
											</div>
										</div>
									</div>
								</div>
								<div className="space-y-2">
									<h4 className="text-lg font-bold text-tech-purple">
										order 應用
									</h4>
									<div className="border-2 border-dashed border-tech-highlight/30 p-2 rounded-lg">
										<div className="flex gap-2">
											<div className="bg-tech-highlight/20 w-20 order-last rounded-lg p-2 flex items-center justify-center text-tech-highlight text-sm">
												次要按鈕
											</div>
											<div className="bg-tech-highlight/20 w-20 order-first rounded-lg p-2 flex items-center justify-center text-tech-highlight text-sm">
												主要按鈕
											</div>
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
