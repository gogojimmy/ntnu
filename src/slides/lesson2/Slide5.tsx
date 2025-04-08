import SlideLayout from "../../layouts/SlideLayout";
import { motion } from "motion/react";
import CodeBlock from "../../components/CodeBlock";
import { useState, useRef, useEffect } from "react";

const initialBootstrapExample = `
<div class="alert alert-primary d-flex align-items-center" role="alert">
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" class="bi bi-info-circle-fill me-2" viewBox="0 0 16 16">
    <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"/>
  </svg>
  <div>
    這是一個 Bootstrap 提示框！
  </div>
</div>
<button type="button" class="btn btn-success mt-3">
  成功按鈕
</button>
`;

const initialTailwindExample = `
<div class="flex items-center p-4 mb-4 text-sm text-blue-800 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400" role="alert">
  <svg class="flex-shrink-0 inline w-4 h-4 me-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
  </svg>
  <span class="sr-only">Info</span>
  <div>
    <span class="font-medium">提示!</span> 這是一個 Tailwind CSS 提示框.
  </div>
</div>
<button class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
  成功按鈕
</button>
`;

const createSrcDoc = (htmlContent: string, headContent: string = "") => `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  ${headContent}
  <style>
    body { padding: 1.5rem; background-color: #f9fafb; font-family: sans-serif; }
    /* Additional reset for iframe */
    button, div { margin-bottom: 0.5rem; }
  </style>
</head>
<body>
  ${htmlContent}
</body>
</html>
`;

export default function Slide5() {
	const [bootstrapCode, setBootstrapCode] = useState(initialBootstrapExample);
	const [isEditingBootstrap, setIsEditingBootstrap] = useState(false);
	const bootstrapTextareaRef = useRef<HTMLTextAreaElement>(null);

	const [tailwindCode, setTailwindCode] = useState(initialTailwindExample);
	const [isEditingTailwind, setIsEditingTailwind] = useState(false);
	const tailwindTextareaRef = useRef<HTMLTextAreaElement>(null);

	useEffect(() => {
		/* ... bootstrap focus logic ... */
	}, [isEditingBootstrap]);
	useEffect(() => {
		/* ... tailwind focus logic ... */
	}, [isEditingTailwind]);

	const bootstrapHead = `<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css">`;
	const tailwindHead = `<script src="https://cdn.tailwindcss.com"></script>`;

	const bootstrapSrcDoc = createSrcDoc(bootstrapCode, bootstrapHead);
	const tailwindSrcDoc = createSrcDoc(tailwindCode, tailwindHead);

	return (
		<SlideLayout
			prevSlide="/lesson2/slide4"
			currentSlide="5"
			totalSlides="5"
			courseName="lesson2"
		>
			<div className="relative h-full flex flex-col justify-center">
				<div className="absolute inset-0 rounded-2xl bg-black/40 backdrop-blur-sm border border-tech-grid-bright" />
				<div
					className="relative px-16 py-8 overflow-y-auto"
					style={{ maxHeight: "calc(100vh - 150px)" }}
				>
					<div className="space-y-8 max-w-[1400px] mx-auto">
						{" "}
						{/* Wider max-width */}
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6 }}
						>
							<h1 className="text-4xl font-bold text-white mb-2 text-center">
								Bootstrap vs. Tailwind CSS
							</h1>
							<h2 className="text-2xl text-tech-highlight/80 text-center">
								理念、優缺點與適用場景
							</h2>
						</motion.div>
						<div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
							{/* Bootstrap Section */}
							<motion.div
								initial={{ opacity: 0, x: -20 }}
								animate={{ opacity: 1, x: 0 }}
								transition={{ duration: 0.6, delay: 0.2 }}
								className="bg-[#1a1a1a] rounded-lg p-6 space-y-4 border border-tech-purple/50"
							>
								<h3 className="text-2xl font-bold text-tech-purple mb-3">
									Bootstrap
								</h3>
								<p className="text-gray-300">
									<strong className="text-tech-purple/80">理念：</strong>{" "}
									元件驅動 (Component-Based)。提供一套預先設計好的、功能完整的
									UI 元件 (按鈕、導航欄、模態框等)。
								</p>
								<p className="text-gray-300">
									<strong className="text-tech-purple/80">優點：</strong>{" "}
									學習曲線平緩，開發速度快，元件豐富，社群龐大。
								</p>
								<p className="text-gray-300">
									<strong className="text-tech-purple/80">缺點：</strong>{" "}
									客製化較為複雜，容易產生相似的介面外觀，可能包含不需要的樣式。.
								</p>
								<p className="text-gray-300">
									<strong className="text-tech-purple/80">適用：</strong>{" "}
									快速原型、後台管理系統、對設計獨特性要求不高的專案、團隊中有較少前端經驗的成員。
								</p>
								<h4 className="text-lg font-semibold text-tech-purple mt-4">
									範例 (可編輯)
								</h4>
								{isEditingBootstrap ? (
									<textarea
										ref={bootstrapTextareaRef}
										value={bootstrapCode}
										onChange={(e) => setBootstrapCode(e.target.value)}
										onBlur={() => setIsEditingBootstrap(false)}
										className="w-full h-40 p-3 rounded-md bg-black/40 border border-tech-purple text-sm font-mono text-gray-200 focus:outline-none focus:ring-1 focus:ring-tech-purple resize-none"
										spellCheck="false"
									/>
								) : (
									<div
										onClick={() => setIsEditingBootstrap(true)}
										className="cursor-pointer rounded-md border border-transparent hover:border-tech-purple/50 p-[1px]"
									>
										<CodeBlock
											code={bootstrapCode}
											language="html"
											className="border-tech-grid-bright"
										/>
									</div>
								)}
								<h5 className="text-sm text-tech-purple/70 mt-2">
									即時視覺預覽 (iframe)
								</h5>
								<iframe
									srcDoc={bootstrapSrcDoc}
									title="Bootstrap Example Preview"
									className="w-full h-32 mt-1 rounded border border-tech-grid-bright bg-white"
									sandbox="allow-scripts"
								></iframe>
							</motion.div>

							{/* Tailwind CSS Section */}
							<motion.div
								initial={{ opacity: 0, x: 20 }}
								animate={{ opacity: 1, x: 0 }}
								transition={{ duration: 0.6, delay: 0.3 }}
								className="bg-[#1a1a1a] rounded-lg p-6 space-y-4 border border-tech-green/50"
							>
								<h3 className="text-2xl font-bold text-tech-green mb-3">
									Tailwind CSS
								</h3>
								<p className="text-gray-300">
									<strong className="text-tech-green/80">理念：</strong>{" "}
									工具類優先 (Utility-First)。提供大量底層的、單一用途的 CSS
									工具類別，讓你直接在 HTML 中組合樣式。
								</p>
								<p className="text-gray-300">
									<strong className="text-tech-green/80">優點：</strong>{" "}
									極高的客製化彈性，易於創建獨特設計，不會產生未使用的
									CSS，易於響應式設計。
								</p>
								<p className="text-gray-300">
									<strong className="text-tech-green/80">缺點：</strong>{" "}
									需要學習和記憶較多類別，HTML 可能變得較長，初期設置可能比
									Bootstrap 複雜。
								</p>
								<p className="text-gray-300">
									<strong className="text-tech-green/80">適用：</strong>{" "}
									需要高度客製化設計的專案，注重設計細節和品牌一致性，開發者熟悉
									CSS 概念。
								</p>
								<h4 className="text-lg font-semibold text-tech-green mt-4">
									範例 (可編輯)
								</h4>
								{isEditingTailwind ? (
									<textarea
										ref={tailwindTextareaRef}
										value={tailwindCode}
										onChange={(e) => setTailwindCode(e.target.value)}
										onBlur={() => setIsEditingTailwind(false)}
										className="w-full h-40 p-3 rounded-md bg-black/40 border border-tech-green text-sm font-mono text-gray-200 focus:outline-none focus:ring-1 focus:ring-tech-green resize-none"
										spellCheck="false"
									/>
								) : (
									<div
										onClick={() => setIsEditingTailwind(true)}
										className="cursor-pointer rounded-md border border-transparent hover:border-tech-green/50 p-[1px]"
									>
										<CodeBlock
											code={tailwindCode}
											language="html"
											className="border-tech-grid-bright"
										/>
									</div>
								)}
								<h5 className="text-sm text-tech-green/70 mt-2">
									即時視覺預覽 (iframe)
								</h5>
								<iframe
									srcDoc={tailwindSrcDoc}
									title="Tailwind CSS Example Preview"
									className="w-full h-32 mt-1 rounded border border-tech-grid-bright bg-white"
									sandbox="allow-scripts allow-same-origin"
								></iframe>
							</motion.div>
						</div>
					</div>
				</div>

				{/* Decorative Elements (Adjust colors if needed) */}
				<motion.div
					className="absolute -left-4 top-1/4 w-32 h-32 bg-tech-purple/20 blur-[64px] rounded-full"
					initial={{ opacity: 0, scale: 0.8 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ duration: 1 }}
				/>
				<motion.div
					className="absolute -right-4 bottom-1/4 w-32 h-32 bg-tech-green/20 blur-[64px] rounded-full"
					initial={{ opacity: 0, scale: 0.8 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ duration: 1, delay: 0.2 }}
				/>
			</div>
		</SlideLayout>
	);
}
