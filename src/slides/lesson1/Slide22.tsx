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

export default function Slide22() {
	const flexBasisExample = `/* flex-basis 示例 */
.container {
  display: flex;
}

.item {
  flex-basis: auto;     /* 預設值：根據內容自動計算 */
  /* flex-basis: 200px;    固定基準值 */
  /* flex-basis: 50%;      相對於容器的百分比 */
  /* flex-basis: 0;        從 0 開始計算大小 */
}`;

	const flexShorthandExample = `/* flex 簡寫屬性 */
.item {
  /* flex: none;        等同於 flex: 0 0 auto */
  /* flex: auto;        等同於 flex: 1 1 auto */
  /* flex: initial;     等同於 flex: 0 1 auto */
  
  /* flex: <grow> <shrink> <basis> */
  flex: 1 1 200px;    /* 可增長、可收縮、基準值 200px */
  flex: 0 0 100px;    /* 固定寬度，不增長不收縮 */
  flex: 2 0 0;        /* 從 0 開始，按比例分配空間 */
}`;

	return (
		<SlideLayout
			prevSlide="/lesson1/slide21"
			nextSlide="/lesson1/slide23"
			currentSlide="22"
			totalSlides="25"
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
								Flexbox 基礎 (6/9)
							</h1>
							<h2 className="text-2xl text-tech-highlight/80">
								flex-basis 與 flex 簡寫
							</h2>
						</motion.div>

						<div className="grid grid-cols-2 gap-8">
							{/* Left Column - flex-basis */}
							<motion.div
								initial={{ opacity: 0, x: -20 }}
								animate={{ opacity: 1, x: 0 }}
								transition={{ duration: 0.6, delay: 0.2 }}
								className="space-y-6"
							>
								<div className="bg-[#1a1a1a] rounded-lg p-8">
									<h3 className="text-2xl font-bold text-tech-highlight mb-6">
										flex-basis
									</h3>
									<CodeBlock code={flexBasisExample} language="css" />
									<div className="mt-6 space-y-6">
										<div className="space-y-4">
											<h4 className="text-xl font-bold text-tech-purple">
												不同基準值的效果
											</h4>
											<div className="space-y-4">
												<div className="border-2 border-dashed border-tech-highlight/30 p-4 rounded-lg">
													<p className="text-sm text-gray-400 mb-2">
														auto（根據內容）
													</p>
													<div className="flex gap-2">
														<div className="bg-tech-highlight/20 rounded-lg p-4 flex items-center justify-center text-tech-highlight">
															短文本
														</div>
														<div className="bg-tech-highlight/20 rounded-lg p-4 flex items-center justify-center text-tech-highlight">
															較長的文本內容
														</div>
													</div>
												</div>
												<div className="border-2 border-dashed border-tech-highlight/30 p-4 rounded-lg">
													<p className="text-sm text-gray-400 mb-2">
														固定值（200px）
													</p>
													<div className="flex gap-2">
														<div className="bg-tech-highlight/20 w-[200px] rounded-lg p-4 flex items-center justify-center text-tech-highlight">
															200px
														</div>
														<div className="bg-tech-highlight/20 w-[200px] rounded-lg p-4 flex items-center justify-center text-tech-highlight">
															200px
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</motion.div>

							{/* Right Column - flex shorthand */}
							<motion.div
								initial={{ opacity: 0, x: 20 }}
								animate={{ opacity: 1, x: 0 }}
								transition={{ duration: 0.6, delay: 0.4 }}
								className="space-y-6"
							>
								<div className="bg-[#1a1a1a] rounded-lg p-8">
									<h3 className="text-2xl font-bold text-tech-highlight mb-6">
										flex 簡寫
									</h3>
									<CodeBlock code={flexShorthandExample} language="css" />
									<div className="mt-6 space-y-6">
										<div className="space-y-4">
											<h4 className="text-xl font-bold text-tech-purple">
												常用簡寫組合
											</h4>
											<div className="space-y-4">
												<div className="border-2 border-dashed border-tech-highlight/30 p-4 rounded-lg">
													<p className="text-sm text-gray-400 mb-2">
														flex: 1 1 200px
													</p>
													<div className="flex gap-2">
														<div className="bg-tech-highlight/20 flex-[1_1_200px] rounded-lg p-4 flex items-center justify-center text-tech-highlight">
															可增長可收縮
														</div>
														<div className="bg-tech-highlight/20 flex-[1_1_200px] rounded-lg p-4 flex items-center justify-center text-tech-highlight">
															基準值 200px
														</div>
													</div>
												</div>
												<div className="border-2 border-dashed border-tech-highlight/30 p-4 rounded-lg">
													<p className="text-sm text-gray-400 mb-2">
														flex: 0 0 100px
													</p>
													<div className="flex gap-2">
														<div className="bg-tech-highlight/20 flex-[0_0_100px] rounded-lg p-4 flex items-center justify-center text-tech-highlight">
															固定
														</div>
														<div className="bg-tech-highlight/20 flex-[0_0_100px] rounded-lg p-4 flex items-center justify-center text-tech-highlight">
															固定
														</div>
														<div className="bg-tech-highlight/20 flex-[0_0_100px] rounded-lg p-4 flex items-center justify-center text-tech-highlight">
															固定
														</div>
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
							className="bg-[#1a1a1a] rounded-lg p-8"
						>
							<h3 className="text-2xl font-bold text-tech-highlight mb-6">
								使用建議
							</h3>
							<div className="grid grid-cols-3 gap-4">
								<div className="bg-black/30 p-4 rounded-lg">
									<h4 className="text-xl font-bold text-tech-purple mb-2">
										flex-basis vs width
									</h4>
									<p className="text-gray-300 text-sm">
										優先使用 flex-basis，它更符合 Flexbox 的設計理念
									</p>
								</div>
								<div className="bg-black/30 p-4 rounded-lg">
									<h4 className="text-xl font-bold text-tech-purple mb-2">
										簡寫優點
									</h4>
									<p className="text-gray-300 text-sm">
										使用簡寫可以一次設置多個屬性，程式碼更簡潔
									</p>
								</div>
								<div className="bg-black/30 p-4 rounded-lg">
									<h4 className="text-xl font-bold text-tech-purple mb-2">
										常見用法
									</h4>
									<p className="text-gray-300 text-sm">
										flex: 1 用於自適應布局，flex: none 用於固定尺寸
									</p>
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
