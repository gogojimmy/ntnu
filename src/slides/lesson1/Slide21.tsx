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

export default function Slide21() {
	const flexGrowExample = `/* flex-grow 示例 */
.container {
  display: flex;
  width: 500px;
}

.item-1 {
  flex-grow: 1;    /* 分配剩餘空間的比例為 1 */
}

.item-2 {
  flex-grow: 2;    /* 分配剩餘空間的比例為 2 */
}

.item-3 {
  flex-grow: 0;    /* 預設值：不分配剩餘空間 */
}`;

	const flexShrinkExample = `/* flex-shrink 示例 */
.container {
  display: flex;
  width: 300px;    /* 容器寬度小於項目總寬度 */
}

.item-1 {
  flex-shrink: 1;  /* 預設值：等比例縮小 */
  width: 150px;
}

.item-2 {
  flex-shrink: 2;  /* 縮小比例為其他項目的兩倍 */
  width: 150px;
}

.item-3 {
  flex-shrink: 0;  /* 不縮小 */
  width: 150px;
}`;

	return (
		<SlideLayout currentSlide="21">
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
								Flexbox 基礎 (5/9)
							</h1>
							<h2 className="text-xl text-tech-highlight/80">
								flex-grow 與 flex-shrink
							</h2>
						</motion.div>

						<div className="grid grid-cols-2 gap-4">
							{/* Left Column - flex-grow */}
							<motion.div
								initial={{ opacity: 0, x: -20 }}
								animate={{ opacity: 1, x: 0 }}
								transition={{ duration: 0.6, delay: 0.2 }}
								className="space-y-4"
							>
								<div className="bg-[#1a1a1a] rounded-lg p-4">
									<h3 className="text-xl font-bold text-tech-highlight mb-3">
										flex-grow
									</h3>
									<CodeBlock code={flexGrowExample} language="css" />
									<div className="mt-4 space-y-4">
										<div className="space-y-2">
											<h4 className="text-lg font-bold text-tech-purple">
												基本示例
											</h4>
											<div className="border-2 border-dashed border-tech-highlight/30 p-2 rounded-lg">
												<div className="flex gap-2">
													<div className="bg-tech-highlight/20 rounded-lg flex items-center justify-center text-tech-highlight p-3 flex-grow">
														flex-grow: 1
													</div>
													<div className="bg-tech-highlight/20 rounded-lg flex items-center justify-center text-tech-highlight p-3 flex-grow-[2]">
														flex-grow: 2
													</div>
													<div className="bg-tech-highlight/20 rounded-lg flex items-center justify-center text-tech-highlight p-3 w-14">
														0
													</div>
												</div>
											</div>
										</div>
										<div className="space-y-2">
											<h4 className="text-lg font-bold text-tech-purple">
												實際應用
											</h4>
											<div className="border-2 border-dashed border-tech-highlight/30 p-2 rounded-lg">
												<div className="flex gap-2">
													<div className="bg-tech-highlight/20 rounded-lg flex items-center justify-center text-tech-highlight p-3 w-14">
														Logo
													</div>
													<div className="bg-tech-highlight/20 rounded-lg flex items-center justify-center text-tech-highlight p-3 flex-grow">
														Navigation
													</div>
													<div className="bg-tech-highlight/20 rounded-lg flex items-center justify-center text-tech-highlight p-3 w-14">
														User
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</motion.div>

							{/* Right Column - flex-shrink */}
							<motion.div
								initial={{ opacity: 0, x: 20 }}
								animate={{ opacity: 1, x: 0 }}
								transition={{ duration: 0.6, delay: 0.4 }}
								className="space-y-4"
							>
								<div className="bg-[#1a1a1a] rounded-lg p-4">
									<h3 className="text-xl font-bold text-tech-highlight mb-3">
										flex-shrink
									</h3>
									<CodeBlock code={flexShrinkExample} language="css" />
									<div className="mt-4 space-y-4">
										<div className="space-y-2">
											<h4 className="text-lg font-bold text-tech-purple">
												基本示例
											</h4>
											<div className="border-2 border-dashed border-tech-highlight/30 p-2 rounded-lg">
												<div className="flex gap-2">
													<div className="bg-tech-highlight/20 rounded-lg flex items-center justify-center text-tech-highlight p-3 w-32 flex-shrink">
														shrink: 1
													</div>
													<div className="bg-tech-highlight/20 rounded-lg flex items-center justify-center text-tech-highlight p-3 w-32 flex-shrink-[2]">
														shrink: 2
													</div>
													<div className="bg-tech-highlight/20 rounded-lg flex items-center justify-center text-tech-highlight p-3 w-32 flex-shrink-0">
														shrink: 0
													</div>
												</div>
											</div>
										</div>
										<div className="space-y-2">
											<h4 className="text-lg font-bold text-tech-purple">
												實際應用
											</h4>
											<div className="border-2 border-dashed border-tech-highlight/30 p-2 rounded-lg">
												<div className="flex gap-2">
													<div className="bg-tech-highlight/20 rounded-lg flex items-center justify-center text-tech-highlight p-3 w-32 flex-shrink-0">
														固定寬度
													</div>
													<div className="bg-tech-highlight/20 rounded-lg flex items-center justify-center text-tech-highlight p-3 flex-grow flex-shrink">
														可縮放內容
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
							className="grid grid-cols-3 gap-4"
						>
							<div className="bg-[#1a1a1a] rounded-lg p-4">
								<h4 className="text-lg font-bold text-tech-purple mb-2">
									使用時機
								</h4>
								<ul className="text-sm space-y-1 text-gray-300">
									<li>• 需要動態分配空間時使用 flex-grow</li>
									<li>• 空間不足需要縮放時使用 flex-shrink</li>
								</ul>
							</div>
							<div className="bg-[#1a1a1a] rounded-lg p-4">
								<h4 className="text-lg font-bold text-tech-purple mb-2">
									最佳實踐
								</h4>
								<ul className="text-sm space-y-1 text-gray-300">
									<li>• 使用整數值來設定比例</li>
									<li>• 考慮內容的最小寬度</li>
								</ul>
							</div>
							<div className="bg-[#1a1a1a] rounded-lg p-4">
								<h4 className="text-lg font-bold text-tech-purple mb-2">
									注意事項
								</h4>
								<ul className="text-sm space-y-1 text-gray-300">
									<li>• flex-grow 預設值為 0</li>
									<li>• flex-shrink 預設值為 1</li>
								</ul>
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
