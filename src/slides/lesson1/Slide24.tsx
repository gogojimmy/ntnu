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

export default function Slide24() {
	const bestPracticesExample = `/* Flexbox 最佳實踐 */
.container {
  display: flex;
  gap: 1rem;              /* 使用 gap 替代 margin */
  flex-wrap: wrap;        /* 響應式設計的基礎 */
  min-height: 0;          /* 防止溢出問題 */
}

/* 避免固定寬度，使用 flex-basis */
.item {
  flex: 1 1 300px;       /* grow shrink basis */
  min-width: 0;          /* 防止文字溢出 */
}

/* 使用 flex-direction 進行響應式設計 */
@media (max-width: 768px) {
  .container {
    flex-direction: column;
  }
}`;

	const commonIssuesExample = `/* 常見問題與解決方案 */
.container {
  display: flex;
  min-height: 0;         /* 修復 Safari 的溢出問題 */
  min-width: 0;         /* 修復 Firefox 的溢出問題 */
}

.item {
  flex: 1;             /* 簡寫可能導致問題 */
  flex: 1 1 auto;      /* 完整寫法更安全 */
}

/* 文字溢出問題 */
.text-item {
  min-width: 0;        /* 允許文字換行 */
  word-wrap: break-word;
}`;

	return (
		<SlideLayout currentSlide="24">
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
								Flexbox 基礎 (8/9)
							</h1>
							<h2 className="text-xl text-tech-highlight/80">
								最佳實踐與常見問題
							</h2>
						</motion.div>

						<div className="grid grid-cols-2 gap-4">
							{/* Left Column - Best Practices */}
							<motion.div
								initial={{ opacity: 0, x: -20 }}
								animate={{ opacity: 1, x: 0 }}
								transition={{ duration: 0.6, delay: 0.2 }}
								className="space-y-4"
							>
								<div className="bg-[#1a1a1a] rounded-lg p-4">
									<h3 className="text-xl font-bold text-tech-highlight mb-3">
										最佳實踐
									</h3>
									<CodeBlock code={bestPracticesExample} language="css" />
									<div className="mt-3">
										<div className="space-y-2">
											<h4 className="text-lg font-bold text-tech-purple">
												實際應用
											</h4>
											<div className="border-2 border-dashed border-tech-highlight/30 p-2 rounded-lg">
												<div className="flex flex-wrap gap-2">
													<div className="bg-tech-highlight/20 flex-1 basis-[150px] rounded-lg p-2 flex items-center justify-center text-tech-highlight text-sm">
														響應式卡片 1
													</div>
													<div className="bg-tech-highlight/20 flex-1 basis-[150px] rounded-lg p-2 flex items-center justify-center text-tech-highlight text-sm">
														響應式卡片 2
													</div>
													<div className="bg-tech-highlight/20 flex-1 basis-[150px] rounded-lg p-2 flex items-center justify-center text-tech-highlight text-sm">
														響應式卡片 3
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</motion.div>

							{/* Right Column - Common Issues */}
							<motion.div
								initial={{ opacity: 0, x: 20 }}
								animate={{ opacity: 1, x: 0 }}
								transition={{ duration: 0.6, delay: 0.4 }}
								className="space-y-4"
							>
								<div className="bg-[#1a1a1a] rounded-lg p-4">
									<h3 className="text-xl font-bold text-tech-highlight mb-3">
										常見問題
									</h3>
									<CodeBlock code={commonIssuesExample} language="css" />
									<div className="mt-3">
										<div className="space-y-2">
											<h4 className="text-lg font-bold text-tech-purple">
												問題示例
											</h4>
											<div className="border-2 border-dashed border-tech-highlight/30 p-2 rounded-lg">
												<div className="flex gap-2">
													<div className="bg-tech-highlight/20 flex-1 rounded-lg p-2 flex items-center justify-center text-tech-highlight text-sm overflow-hidden">
														<span className="truncate">
															這是一段很長的文字，可能會造成溢出問題
														</span>
													</div>
													<div className="bg-tech-highlight/20 flex-1 rounded-lg p-2 flex items-center justify-center text-tech-highlight text-sm min-w-0">
														<span className="break-words">
															這是一段很長的文字，但已經正確處理溢出問題
														</span>
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
								重要提醒
							</h3>
							<div className="grid grid-cols-2 gap-4">
								<div className="space-y-2">
									<h4 className="text-lg font-bold text-tech-purple">
										瀏覽器兼容性
									</h4>
									<div className="border-2 border-dashed border-tech-highlight/30 p-2 rounded-lg">
										<ul className="list-disc list-inside text-tech-highlight space-y-1 text-sm">
											<li>Safari 需要 min-height: 0</li>
											<li>Firefox 需要 min-width: 0</li>
											<li>IE11 需要額外的 flex-basis 設定</li>
										</ul>
									</div>
								</div>
								<div className="space-y-2">
									<h4 className="text-lg font-bold text-tech-purple">
										性能考量
									</h4>
									<div className="border-2 border-dashed border-tech-highlight/30 p-2 rounded-lg">
										<ul className="list-disc list-inside text-tech-highlight space-y-1 text-sm">
											<li>避免過度使用 flex: 1</li>
											<li>大量元素時考慮使用 Grid</li>
											<li>動態高度時注意效能影響</li>
										</ul>
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
