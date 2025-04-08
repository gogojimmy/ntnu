import SlideLayout from "../../layouts/SlideLayout";
import { motion } from "motion/react";
import CodeBlock from "../../components/CodeBlock";
import { useState, useRef, useEffect } from "react";

const initialBootstrapExample = `<button type="button" class="btn btn-primary">
  Bootstrap 按鈕
</button>`;

const initialTailwindExample = `<button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
  Tailwind CSS 按鈕
</button>`;

// Helper function to create srcDoc for iframe
const createSrcDoc = (htmlContent: string, headContent: string = "") => `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  ${headContent}
  <style>
    body { 
      padding: 1rem; 
      background-color: #2a2a2e; /* Slightly different background */
      display: flex;
      justify-content: center;
      align-items: center;
      min-height: 80px; /* Ensure button is visible */
      font-family: sans-serif; /* Add a default font */
    }
  </style>
</head>
<body>
  ${htmlContent}
</body>
</html>
`;

export default function Slide4() {
	// State for editable code and editing status
	const [bootstrapCode, setBootstrapCode] = useState(initialBootstrapExample);
	const [isEditingBootstrap, setIsEditingBootstrap] = useState(false);
	const bootstrapTextareaRef = useRef<HTMLTextAreaElement>(null);

	const [tailwindCode, setTailwindCode] = useState(initialTailwindExample);
	const [isEditingTailwind, setIsEditingTailwind] = useState(false);
	const tailwindTextareaRef = useRef<HTMLTextAreaElement>(null);

	// Focus textarea when entering edit mode
	useEffect(() => {
		if (isEditingBootstrap && bootstrapTextareaRef.current) {
			bootstrapTextareaRef.current.focus();
			// Select text maybe?
			// bootstrapTextareaRef.current.select();
		}
	}, [isEditingBootstrap]);

	useEffect(() => {
		if (isEditingTailwind && tailwindTextareaRef.current) {
			tailwindTextareaRef.current.focus();
			// tailwindTextareaRef.current.select();
		}
	}, [isEditingTailwind]);

	// Generate srcDocs dynamically based on state
	const bootstrapSrcDoc = createSrcDoc(
		bootstrapCode,
		'<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">'
	);

	const tailwindSrcDoc = createSrcDoc(
		tailwindCode,
		'<script src="https://cdn.tailwindcss.com"></script>'
	);

	return (
		<SlideLayout
			prevSlide="/lesson2/slide3"
			// nextSlide - Add if there are more slides later
			currentSlide="4"
			totalSlides="4" // Updated total slides for lesson 2
			courseName="lesson2"
		>
			<div className="relative h-full flex flex-col justify-center">
				{/* Background Elements */}
				<div className="absolute inset-0 rounded-2xl bg-black/40 backdrop-blur-sm border border-tech-grid-bright" />

				{/* Content */}
				<div
					className="relative px-16 py-8 overflow-y-auto"
					style={{ maxHeight: "calc(100vh - 150px)" }}
				>
					<div className="space-y-8 max-w-[1280px] mx-auto">
						{/* Title */}
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6 }}
						>
							<h1 className="text-4xl font-bold text-white mb-2">
								CSS Framework 與 Design System 的關聯
							</h1>
							<h2 className="text-2xl text-tech-highlight/80">
								加速開發與保持一致性的工具
							</h2>
						</motion.div>

						<div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
							{/* Definition */}
							<motion.div
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.6, delay: 0.2 }}
								className="bg-[#1a1a1a] rounded-lg p-6"
							>
								<h3 className="text-xl font-bold text-tech-highlight mb-4">
									<span className="text-2xl mr-2">💡</span>定義：CSS Framework
									是什麼？
								</h3>
								<p className="text-gray-300 leading-relaxed">
									CSS Framework 是一套預先定義好的 CSS
									樣式、元件（如按鈕、表單）和工具（如網格系統），旨在加速網頁介面的開發過程。
									開發者可以直接使用框架提供的類別來建立佈局和元件，而無需從頭編寫所有
									CSS。
								</p>
							</motion.div>

							{/* Common Frameworks */}
							<motion.div
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.6, delay: 0.3 }}
								className="bg-[#1a1a1a] rounded-lg p-6 space-y-6"
							>
								<h3 className="text-xl font-bold text-tech-highlight mb-4">
									<span className="text-2xl mr-2">🔧</span>常見框架範例
									(點擊程式碼區塊可編輯)
								</h3>
								{/* Bootstrap Example (Editable) */}
								<div className="space-y-3">
									<h4 className="text-lg font-semibold text-tech-purple">
										Bootstrap
									</h4>
									<p className="text-gray-400 text-sm mb-3">
										提供豐富的預設元件庫和樣式，適合快速搭建原型或標準介面。
										<a
											href="https://getbootstrap.com/"
											target="_blank"
											rel="noopener noreferrer"
											className="text-tech-highlight hover:underline ml-1"
										>
											官網
										</a>
									</p>
									{isEditingBootstrap ? (
										<textarea
											ref={bootstrapTextareaRef}
											value={bootstrapCode}
											onChange={(e) => setBootstrapCode(e.target.value)}
											onBlur={() => setIsEditingBootstrap(false)}
											className="w-full h-28 p-3 rounded-md bg-black/40 border border-tech-highlight text-sm font-mono text-gray-200 focus:outline-none focus:ring-1 focus:ring-tech-highlight resize-none"
											spellCheck="false"
										/>
									) : (
										<div
											onClick={() => setIsEditingBootstrap(true)}
											className="cursor-pointer rounded-md border border-transparent hover:border-tech-highlight/50 p-[1px]"
										>
											<CodeBlock
												code={bootstrapCode}
												language="html"
												className="border-tech-grid-bright"
											/>
										</div>
									)}
									<h5 className="text-sm text-tech-highlight/70 mt-2">
										視覺預覽 (iframe)
									</h5>
									<iframe
										srcDoc={bootstrapSrcDoc}
										title="Bootstrap Example Preview"
										className="w-full h-24 mt-1 rounded border border-tech-grid-bright bg-[#2a2a2e]"
										sandbox="allow-scripts"
									></iframe>
								</div>
								<hr className="border-tech-grid-bright/30" />
								{/* Tailwind CSS Example (Editable) */}
								<div className="space-y-3">
									<h4 className="text-lg font-semibold text-tech-green">
										Tailwind CSS
									</h4>
									<p className="text-gray-400 text-sm mb-3">
										採用 Utility-First
										的原子化類別，提供極高客製化彈性，適合需要獨特設計風格的專案。
										<a
											href="https://tailwindcss.com/"
											target="_blank"
											rel="noopener noreferrer"
											className="text-tech-highlight hover:underline ml-1"
										>
											官網
										</a>
									</p>
									{isEditingTailwind ? (
										<textarea
											ref={tailwindTextareaRef}
											value={tailwindCode}
											onChange={(e) => setTailwindCode(e.target.value)}
											onBlur={() => setIsEditingTailwind(false)}
											className="w-full h-28 p-3 rounded-md bg-black/40 border border-tech-highlight text-sm font-mono text-gray-200 focus:outline-none focus:ring-1 focus:ring-tech-highlight resize-none"
											spellCheck="false"
										/>
									) : (
										<div
											onClick={() => setIsEditingTailwind(true)}
											className="cursor-pointer rounded-md border border-transparent hover:border-tech-highlight/50 p-[1px]"
										>
											<CodeBlock
												code={tailwindCode}
												language="html"
												className="border-tech-grid-bright"
											/>
										</div>
									)}
									<h5 className="text-sm text-tech-highlight/70 mt-2">
										即時視覺預覽 (iframe)
									</h5>
									<iframe
										srcDoc={tailwindSrcDoc}
										title="Tailwind CSS Example Preview"
										className="w-full h-24 mt-1 rounded border border-tech-grid-bright bg-[#2a2a2e]"
										sandbox="allow-scripts allow-same-origin"
									></iframe>
								</div>
							</motion.div>

							{/* Relation to Design System */}
							<motion.div
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.6, delay: 0.4 }}
								className="bg-[#1a1a1a] rounded-lg p-6"
							>
								<h3 className="text-xl font-bold text-tech-highlight mb-4">
									<span className="text-2xl mr-2">🔗</span>與 Design System
									的關聯
								</h3>
								<p className="text-gray-300 leading-relaxed mb-4">
									CSS Framework 可以被視為**實現 Design System 的工具**之一。
									Design System 定義了設計的規則、原則和元件規範，而 CSS
									Framework 則提供了實現這些規範的具體程式碼基礎。
								</p>
								<p className="text-gray-300 leading-relaxed">
									例如，可以基於 Design System 的規範來客製化 Tailwind
									CSS，或者選擇一個元件豐富的框架（如
									Bootstrap）快速實現設計系統中定義的元件，從而加速開發並確保視覺一致性。
								</p>
							</motion.div>
						</div>
					</div>
				</div>

				{/* Decorative Elements */}
				<motion.div
					className="absolute -left-4 top-1/4 w-32 h-32 bg-tech-highlight/20 blur-[64px] rounded-full"
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
