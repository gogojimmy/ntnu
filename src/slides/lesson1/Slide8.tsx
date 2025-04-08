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

const PreviewStyles = () => (
	<style>{`
		.preview-content {
			font-family: system-ui, -apple-system, sans-serif;
		}
		.preview-content form {
			background: rgba(34, 211, 238, 0.05);
			border: 1px solid rgba(34, 211, 238, 0.2);
			border-radius: 0.5rem;
			padding: 1rem;
		}
		.preview-content .form-group {
			margin-bottom: 1rem;
		}
		.preview-content label {
			display: block;
			margin-bottom: 0.5rem;
			color: rgba(255, 255, 255, 0.9);
		}
		.preview-content input,
		.preview-content textarea {
			width: 100%;
			padding: 0.5rem;
			border: 1px solid rgba(34, 211, 238, 0.3);
			border-radius: 0.25rem;
			background: rgba(0, 0, 0, 0.2);
			color: white;
		}
		.preview-content input:focus,
		.preview-content textarea:focus {
			outline: none;
			border-color: #22d3ee;
		}
		.preview-content button {
			background: rgba(34, 211, 238, 0.2);
			border: 1px solid rgba(34, 211, 238, 0.3);
			color: #22d3ee;
			padding: 0.5rem 1rem;
			border-radius: 0.25rem;
			cursor: pointer;
			transition: all 0.2s;
		}
		.preview-content button:hover {
			background: rgba(34, 211, 238, 0.3);
		}
	`}</style>
);

export default function Slide8() {
	const formCode = `<form>
  <div class="form-group">
    <label>使用者名稱</label>
    <input type="text" placeholder="請輸入使用者名稱">
  </div>
  
  <div class="form-group">
    <label>電子郵件</label>
    <input type="email" placeholder="請輸入電子郵件">
  </div>
  
  <div class="form-group">
    <label>密碼</label>
    <input type="password" placeholder="請輸入密碼">
  </div>
  
  <div class="form-group">
    <label>留言</label>
    <textarea placeholder="請輸入留言"></textarea>
  </div>
  
  <button>送出</button>
</form>`;

	return (
		<SlideLayout currentSlide="08">
			<PreviewStyles />
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
								常用 HTML 標籤 (5)
							</h1>
							<h2 className="text-2xl text-tech-highlight/80">表單元素</h2>
						</motion.div>

						<div className="grid grid-cols-2 gap-8">
							{/* Code Section */}
							<motion.div
								initial={{ opacity: 0, x: -20 }}
								animate={{ opacity: 1, x: 0 }}
								transition={{ duration: 0.6, delay: 0.2 }}
								className="space-y-4"
							>
								<div className="bg-black/20 rounded-lg border border-tech-grid-bright/30 p-4">
									<h3 className="text-lg font-bold text-tech-purple mb-2">
										程式碼：
									</h3>
									<CodeBlock code={formCode} language="html" />
								</div>
							</motion.div>

							{/* Preview Section */}
							<motion.div
								initial={{ opacity: 0, x: 20 }}
								animate={{ opacity: 1, x: 0 }}
								transition={{ duration: 0.6, delay: 0.4 }}
								className="space-y-4"
							>
								<div className="bg-black/20 rounded-lg border border-tech-grid-bright/30 p-4">
									<h3 className="text-lg font-bold text-tech-purple mb-4">
										顯示效果與說明：
									</h3>
									<div className="space-y-6">
										<div
											className="text-white/90 preview-content"
											dangerouslySetInnerHTML={{
												__html: formCode,
											}}
										/>
										<div className="space-y-3 mt-6 border-t border-tech-grid-bright/30 pt-4">
											<h4 className="text-tech-purple font-bold mb-2">
												表單元素說明：
											</h4>
											<ul className="space-y-2 text-white/90">
												<li>
													<span className="text-tech-highlight">
														&lt;form&gt;
													</span>
													：表單容器，用於包裝所有表單元素
												</li>
												<li>
													<span className="text-tech-highlight">
														&lt;input type="text"&gt;
													</span>
													：單行文字輸入欄位
												</li>
												<li>
													<span className="text-tech-highlight">
														&lt;input type="email"&gt;
													</span>
													：電子郵件輸入欄位，會自動驗證格式
												</li>
												<li>
													<span className="text-tech-highlight">
														&lt;input type="password"&gt;
													</span>
													：密碼輸入欄位，會隱藏輸入內容
												</li>
												<li>
													<span className="text-tech-highlight">
														&lt;textarea&gt;
													</span>
													：多行文字輸入區域
												</li>
												<li>
													<span className="text-tech-highlight">
														&lt;button&gt;
													</span>
													：按鈕元素，用於提交表單或觸發操作
												</li>
											</ul>
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
