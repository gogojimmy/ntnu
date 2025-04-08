import SlideLayout from "../../layouts/SlideLayout";
import { motion } from "motion/react";
import CodeBlock from "../../components/CodeBlock";
import { useState, useRef, useEffect } from "react";

// Theme Definitions
const themes = {
	tech: {
		name: "科技風",
		highlight: "#00FFA3",
		purple: "#BD00FF",
		green: "#00FFA3",
		gridBright: "rgba(0, 255, 163, 0.15)",
		bgCard: "#1a1a1a",
		bgSlide: "bg-black/40",
		textColor: "#E5E7EB",
		textColorSecondary: "#9CA3AF",
		fontFamily: "'Inter', sans-serif", // Default font
		buttonStyle: "border-tech-highlight text-tech-highlight",
		cardBorder: "border-tech-grid-bright",
	},
	chiikawa: {
		name: "吉伊卡哇",
		highlight: "#FFACEC", // Pink
		purple: "#ADE2FF", // Light Blue
		green: "#FFACEC", // Use pink as green replacement
		gridBright: "rgba(255, 172, 236, 0.2)",
		bgCard: "#FFF0F5", // Lavender Blush bg
		bgSlide: "bg-[#FFFAFA]/90", // Snow bg with opacity
		textColor: "#4A4A4A", // Dark Gray text
		textColorSecondary: "#8A8A8A", // Lighter Gray
		fontFamily: "'Comic Sans MS', cursive, sans-serif", // Chiikawa-esque font
		buttonStyle: "border-[#FF69B4] text-[#FF69B4] bg-white", // Hot Pink button
		cardBorder: "border-[#FFACEC]/50",
	},
};

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
      background-color: #ffffff; /* Default to white for iframe */
      display: flex;
      justify-content: center;
      align-items: center;
      min-height: 80px; /* Ensure button is visible */
      font-family: sans-serif; /* Add a default font */
      margin: 0;
    }
    /* Basic button reset for consistency */
    button {
      border: 1px solid transparent;
      padding: 0.375rem 0.75rem;
      font-size: 1rem;
      border-radius: 0.25rem;
      cursor: pointer;
    }
  </style>
</head>
<body>
  ${htmlContent}
</body>
</html>
`;

export default function Slide4() {
	const [currentThemeKey, setCurrentThemeKey] =
		useState<keyof typeof themes>("tech");
	const theme = themes[currentThemeKey];

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

	// Update iframe content based on theme
	const bootstrapHead = `<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet"><style>body{background-color: ${
		theme.bgCard === "#FFF0F5" ? "#FFF0F5" : "#2a2a2e"
	};}</style>`;
	const tailwindHead = `<script src="https://cdn.tailwindcss.com"></script><style>body{background-color: ${
		theme.bgCard === "#FFF0F5" ? "#FFF0F5" : "#2a2a2e"
	};}</style>`;

	const bootstrapSrcDoc = createSrcDoc(bootstrapCode, bootstrapHead);
	const tailwindSrcDoc = createSrcDoc(tailwindCode, tailwindHead);

	// CSS Variables Style Object for the slide itself
	const slideThemeStyles = {
		"--theme-highlight": theme.highlight,
		"--theme-purple": theme.purple,
		"--theme-green": theme.green,
		"--theme-grid-bright": theme.gridBright,
		"--theme-bg-card": theme.bgCard,
		"--theme-text-color": theme.textColor,
		"--theme-text-color-secondary": theme.textColorSecondary,
		fontFamily: theme.fontFamily, // Apply font family
	} as React.CSSProperties;

	const toggleTheme = () => {
		setCurrentThemeKey(currentThemeKey === "tech" ? "chiikawa" : "tech");
	};

	return (
		<SlideLayout
			prevSlide="/lesson2/slide3"
			nextSlide="/lesson2/slide5"
			currentSlide="4"
			totalSlides="5"
			courseName="lesson2"
		>
			{/* Apply theme styles and background to the outermost div */}
			<div
				className={`relative h-full flex flex-col justify-center ${theme.bgSlide}`}
				style={slideThemeStyles}
			>
				{/* Background Elements - Use CSS vars */}
				<div
					className="absolute inset-0 rounded-2xl backdrop-blur-sm border"
					style={{ borderColor: "var(--theme-grid-bright)" }}
				/>

				{/* Content */}
				<div
					className="relative px-16 py-8 overflow-y-auto"
					style={{ maxHeight: "calc(100vh - 150px)" }}
				>
					{/* Theme Toggle Button */}
					<button
						onClick={toggleTheme}
						className={`absolute top-6 right-16 px-4 py-2 rounded text-sm z-10 border transition-colors ${theme.buttonStyle}`}
					>
						切換主題 (
						{themes[currentThemeKey === "tech" ? "chiikawa" : "tech"].name})
					</button>

					<div className="space-y-8 max-w-[1280px] mx-auto">
						{/* Title - Use CSS vars */}
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6 }}
						>
							<h1
								className="text-4xl font-bold mb-2"
								style={{ color: "var(--theme-text-color)" }}
							>
								CSS Framework 與 Design System 的關聯
							</h1>
							<h2
								className="text-2xl"
								style={{ color: "var(--theme-highlight)" }}
							>
								加速開發與保持一致性的工具
							</h2>
						</motion.div>

						<div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
							{/* Definition - Use CSS vars */}
							<motion.div
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.6, delay: 0.2 }}
								className={`rounded-lg p-6 ${theme.cardBorder}`}
								style={{ backgroundColor: "var(--theme-bg-card)" }}
							>
								<h3
									className="text-xl font-bold mb-4"
									style={{ color: "var(--theme-highlight)" }}
								>
									<span className="text-2xl mr-2">💡</span>定義：CSS Framework
									是什麼？
								</h3>
								<p
									className="leading-relaxed"
									style={{ color: "var(--theme-text-color)" }}
								>
									CSS Framework 是一套預先定義好的 CSS
									樣式、元件（如按鈕、表單）和工具（如網格系統），旨在加速網頁介面的開發過程。
									開發者可以直接使用框架提供的類別來建立佈局和元件，而無需從頭編寫所有
									CSS。
								</p>
							</motion.div>

							{/* Common Frameworks - Use CSS vars */}
							<motion.div
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.6, delay: 0.3 }}
								className={`rounded-lg p-6 space-y-6 ${theme.cardBorder}`}
								style={{ backgroundColor: "var(--theme-bg-card)" }}
							>
								<h3
									className="text-xl font-bold mb-4"
									style={{ color: "var(--theme-highlight)" }}
								>
									<span className="text-2xl mr-2">🔧</span>常見框架範例
									(點擊程式碼區塊可編輯)
								</h3>
								{/* Bootstrap Example */}
								<div className="space-y-3">
									<h4
										className="text-lg font-semibold"
										style={{ color: "var(--theme-purple)" }}
									>
										Bootstrap
									</h4>
									<p
										className="text-sm mb-3"
										style={{ color: "var(--theme-text-color-secondary)" }}
									>
										提供豐富的預設元件庫和樣式，適合快速搭建原型或標準介面。
										<a
											href="https://getbootstrap.com/"
											target="_blank"
											rel="noopener noreferrer"
											className="hover:underline ml-1"
											style={{ color: "var(--theme-highlight)" }}
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
											className={`w-full h-28 p-3 rounded-md border text-sm font-mono focus:outline-none focus:ring-1 resize-none ${theme.cardBorder}`}
											style={{
												backgroundColor: "#00000030",
												color: "var(--theme-text-color)",
												borderColor: "var(--theme-highlight)",
											}}
											spellCheck="false"
										/>
									) : (
										<div
											onClick={() => setIsEditingBootstrap(true)}
											className={`cursor-pointer rounded-md border border-transparent hover:border-[var(--theme-highlight)]/50 p-[1px]`}
										>
											<CodeBlock
												code={bootstrapCode}
												language="html"
												className={theme.cardBorder}
											/>
										</div>
									)}
									<h5
										className="text-sm mt-2"
										style={{ color: "var(--theme-text-color-secondary)" }}
									>
										視覺預覽 (iframe)
									</h5>
									<iframe
										srcDoc={bootstrapSrcDoc}
										title="Bootstrap Example Preview"
										className={`w-full h-24 mt-1 rounded border ${theme.cardBorder}`}
										style={{
											backgroundColor:
												theme.bgCard === "#FFF0F5" ? "#FFF0F5" : "#2a2a2e",
										}}
										sandbox="allow-scripts"
									></iframe>
								</div>
								<hr style={{ borderColor: "var(--theme-grid-bright)" }} />
								{/* Tailwind CSS Example */}
								<div className="space-y-3">
									<h4
										className="text-lg font-semibold"
										style={{ color: "var(--theme-green)" }}
									>
										Tailwind CSS
									</h4>
									<p
										className="text-sm mb-3"
										style={{ color: "var(--theme-text-color-secondary)" }}
									>
										採用 Utility-First
										的原子化類別，提供極高客製化彈性，適合需要獨特設計風格的專案。
										<a
											href="https://tailwindcss.com/"
											target="_blank"
											rel="noopener noreferrer"
											className="hover:underline ml-1"
											style={{ color: "var(--theme-highlight)" }}
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
											className={`w-full h-28 p-3 rounded-md border text-sm font-mono focus:outline-none focus:ring-1 resize-none ${theme.cardBorder}`}
											style={{
												backgroundColor: "#00000030",
												color: "var(--theme-text-color)",
												borderColor: "var(--theme-highlight)",
											}}
											spellCheck="false"
										/>
									) : (
										<div
											onClick={() => setIsEditingTailwind(true)}
											className={`cursor-pointer rounded-md border border-transparent hover:border-[var(--theme-highlight)]/50 p-[1px]`}
										>
											<CodeBlock
												code={tailwindCode}
												language="html"
												className={theme.cardBorder}
											/>
										</div>
									)}
									<h5
										className="text-sm mt-2"
										style={{ color: "var(--theme-text-color-secondary)" }}
									>
										即時視覺預覽 (iframe)
									</h5>
									<iframe
										srcDoc={tailwindSrcDoc}
										title="Tailwind CSS Example Preview"
										className={`w-full h-24 mt-1 rounded border ${theme.cardBorder}`}
										style={{
											backgroundColor:
												theme.bgCard === "#FFF0F5" ? "#FFF0F5" : "#2a2a2e",
										}}
										sandbox="allow-scripts allow-same-origin"
									></iframe>
								</div>
							</motion.div>

							{/* Relation to Design System - Use CSS vars */}
							<motion.div
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.6, delay: 0.4 }}
								className={`rounded-lg p-6 ${theme.cardBorder}`}
								style={{ backgroundColor: "var(--theme-bg-card)" }}
							>
								<h3
									className="text-xl font-bold mb-4"
									style={{ color: "var(--theme-highlight)" }}
								>
									<span className="text-2xl mr-2">🔗</span>與 Design System
									的關聯
								</h3>
								<p
									className="leading-relaxed mb-4"
									style={{ color: "var(--theme-text-color)" }}
								>
									CSS Framework 可以被視為**實現 Design System 的工具**之一。
									Design System 定義了設計的規則、原則和元件規範，而 CSS
									Framework 則提供了實現這些規範的具體程式碼基礎。
								</p>
								<p
									className="leading-relaxed"
									style={{ color: "var(--theme-text-color)" }}
								>
									例如，可以基於 Design System 的規範來客製化 Tailwind
									CSS，或者選擇一個元件豐富的框架（如
									Bootstrap）快速實現設計系統中定義的元件，從而加速開發並確保視覺一致性。
								</p>
							</motion.div>
						</div>
					</div>
				</div>

				{/* Decorative Elements - Use CSS vars */}
				<motion.div
					className="absolute -left-4 top-1/4 w-32 h-32 blur-[64px] rounded-full"
					style={{
						backgroundColor: `color-mix(in srgb, var(--theme-purple) 20%, transparent)`,
					}}
					initial={{ opacity: 0, scale: 0.8 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ duration: 1 }}
				/>
				<motion.div
					className="absolute -right-4 bottom-1/4 w-32 h-32 blur-[64px] rounded-full"
					style={{
						backgroundColor: `color-mix(in srgb, var(--theme-green) 20%, transparent)`,
					}}
					initial={{ opacity: 0, scale: 0.8 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ duration: 1, delay: 0.2 }}
				/>
			</div>
		</SlideLayout>
	);
}
