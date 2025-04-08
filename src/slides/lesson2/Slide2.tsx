import SlideLayout from "../../layouts/SlideLayout";
import { motion, AnimatePresence } from "motion/react";
import { useState, useRef } from "react";
import ErrorBoundary from "../../components/ErrorBoundary";
import CodeBlock from "../../components/CodeBlock";

interface AtomicExample {
	title: string;
	description: string;
	code: string;
	preview: React.ReactNode;
}

const atomicExamples: Record<string, AtomicExample> = {
	atoms: {
		title: "Atoms（原子）",
		description: "最基本的UI元素，不可再分割的組件。",
		code: `<!-- Button Atom -->\n<button class="btn btn-primary">\n  按鈕文字\n</button>\n\n<!-- Input Atom -->\n<input \n  type="text"\n  class="input"\n  placeholder="輸入提示"\n/>`,
		preview: (
			<div className="flex gap-4">
				<button className="bg-tech-highlight px-4 py-2 rounded">按鈕</button>
				<input
					className="bg-black/30 border border-tech-grid-bright rounded px-3"
					placeholder="輸入文字"
				/>
			</div>
		),
	},
	molecules: {
		title: "Molecules（分子）",
		description: "由多個原子組合而成的簡單元件。",
		code: `<!-- Search Bar Molecule -->\n<div class="search-bar">\n  <input \n    type="text"\n    class="input"\n    placeholder="搜尋..."\n  />\n  <button class="btn btn-primary">\n    <!-- Assuming an SVG or img for the icon -->\n    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>\n  </button>\n</div>`,
		preview: (
			<div className="flex gap-2 items-center bg-black/30 rounded-lg p-2 border border-tech-grid-bright">
				<input
					className="bg-black/30 border border-tech-grid-bright rounded px-3 py-1"
					placeholder="搜尋..."
				/>
				<button className="bg-tech-highlight p-2 rounded">
					<svg
						className="w-4 h-4"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth={2}
							d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
						/>
					</svg>
				</button>
			</div>
		),
	},
	organisms: {
		title: "Organisms（組織）",
		description: "由多個分子組合而成的複雜組件。",
		code: `<!-- Navigation Bar Organism -->\n<nav class="navbar">\n  <div class="logo">網站Logo</div>\n  <div class="nav-links">\n    <a href="#">首頁</a>\n    <a href="#">關於</a>\n    <a href="#">服務</a>\n  </div>\n  <!-- Includes Search Bar Molecule -->\n  <div class="search-bar">\n    <input type="text" class="input" placeholder="搜尋..." />\n    <button class="btn btn-primary">\n      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>\n    </button>\n  </div>\n</nav>`,
		preview: (
			<div className="flex justify-between items-center bg-black/30 p-4 rounded-lg border border-tech-grid-bright">
				<div className="text-tech-highlight font-bold">Logo</div>
				<div className="flex gap-4">
					<a
						href="#"
						className="text-tech-highlight/80 hover:text-tech-highlight"
					>
						首頁
					</a>
					<a
						href="#"
						className="text-tech-highlight/80 hover:text-tech-highlight"
					>
						關於
					</a>
					<a
						href="#"
						className="text-tech-highlight/80 hover:text-tech-highlight"
					>
						服務
					</a>
				</div>
				<div className="flex gap-2 items-center">
					<input
						className="bg-black/30 border border-tech-grid-bright rounded px-3 py-1"
						placeholder="搜尋..."
					/>
					<button className="bg-tech-highlight p-2 rounded">
						<svg
							className="w-4 h-4"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
							/>
						</svg>
					</button>
				</div>
			</div>
		),
	},
	templates: {
		title: "Templates（模板）",
		description: "定義頁面的基本結構和布局。",
		code: `<!-- Blog Post Template -->\n<div class="blog-layout">\n  <header class="main-header">\n    <!-- Placeholder for Header Organism -->\n  </header>\n  <div class="main-content">\n    <aside class="sidebar">\n      <!-- Placeholder for Sidebar Organism -->\n    </aside>\n    <main class="content-area">\n      <!-- Placeholder for Content Molecules/Atoms -->\n    </main>\n  </div>\n  <footer class="main-footer">\n    <!-- Placeholder for Footer Organism -->\n  </footer>\n</div>`,
		preview: (
			<div className="bg-black/30 p-4 rounded-lg border border-tech-grid-bright">
				<div className="h-8 bg-tech-highlight/20 rounded mb-4"></div>
				<div className="flex gap-4">
					<div className="w-1/4 h-32 bg-tech-highlight/20 rounded"></div>
					<div className="flex-1 h-32 bg-tech-highlight/20 rounded"></div>
				</div>
				<div className="h-8 bg-tech-highlight/20 rounded mt-4"></div>
			</div>
		),
	},
	pages: {
		title: "Pages（頁面）",
		description: "將模板填入實際內容，形成完整頁面。",
		code: `<!-- Blog Post Page (Example) -->\n<!DOCTYPE html>\n<html>\n<head>\n  <title>我的部落格文章</title>\n  <link rel="stylesheet" href="styles.css">\n</head>\n<body>\n  <div class="blog-layout">\n    <header class="main-header">\n      <!-- Actual Navigation Bar Organism would go here -->\n      <nav>...</nav>\n    </header>\n    <div class="main-content">\n      <aside class="sidebar">\n        <h2>分類</h2>\n        <ul><li>...</li></ul>\n      </aside>\n      <main class="content-area">\n        <h1>文章標題</h1>\n        <p>這是文章的第一段...</p>\n        <img src="image.jpg" alt="文章圖片">\n        <p>這是文章的第二段...</p>\n      </main>\n    </div>\n    <footer class="main-footer">\n      <p>&copy; 2024 我的網站</p>\n    </footer>\n  </div>\n</body>\n</html>`,
		preview: (
			<div className="bg-black/30 p-4 rounded-lg border border-tech-grid-bright">
				<div className="h-12 bg-tech-highlight/20 rounded mb-4 flex items-center px-4 text-tech-highlight/50">
					導航列
				</div>
				<div className="flex gap-4">
					<div className="w-1/4 space-y-2">
						<div className="h-8 bg-tech-highlight/20 rounded"></div>
						<div className="h-8 bg-tech-highlight/20 rounded"></div>
						<div className="h-8 bg-tech-highlight/20 rounded"></div>
					</div>
					<div className="flex-1 space-y-4">
						<div className="h-12 bg-tech-highlight/20 rounded"></div>
						<div className="h-24 bg-tech-highlight/20 rounded"></div>
						<div className="h-24 bg-tech-highlight/20 rounded"></div>
					</div>
				</div>
				<div className="h-12 bg-tech-highlight/20 rounded mt-4 flex items-center px-4 text-tech-highlight/50">
					頁尾
				</div>
			</div>
		),
	},
};

function Dialog({
	isOpen,
	onClose,
	children,
}: {
	isOpen: boolean;
	onClose: () => void;
	children: React.ReactNode;
}) {
	const dialogRef = useRef<HTMLDivElement>(null);

	return (
		<AnimatePresence>
			{isOpen && (
				<motion.div
					className="fixed inset-0 flex items-center justify-center z-50"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
				>
					<div
						className="absolute inset-0 bg-black/60 backdrop-blur-sm"
						onClick={onClose}
					/>
					<motion.div
						ref={dialogRef}
						className="relative bg-[#1a1a1a] rounded-xl border border-tech-grid-bright p-8 max-w-2xl w-full max-h-[80vh] overflow-y-auto"
						initial={{ scale: 0.9, opacity: 0 }}
						animate={{ scale: 1, opacity: 1 }}
						exit={{ scale: 0.9, opacity: 0 }}
						transition={{ type: "spring", stiffness: 300, damping: 30 }}
					>
						<button
							onClick={onClose}
							className="absolute top-4 right-4 text-tech-highlight/60 hover:text-tech-highlight"
						>
							<svg
								className="w-6 h-6"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M6 18L18 6M6 6l12 12"
								/>
							</svg>
						</button>
						{children}
					</motion.div>
				</motion.div>
			)}
		</AnimatePresence>
	);
}

export default function Slide2() {
	const [selectedLevel, setSelectedLevel] = useState<string | null>(null);

	const containerVariants = {
		hidden: { opacity: 0 },
		show: {
			opacity: 1,
			transition: {
				staggerChildren: 0.08, // Stagger effect for children
			},
		},
	};

	const itemVariants = {
		hidden: { y: 20, opacity: 0 },
		show: {
			y: 0,
			opacity: 1,
			transition: {
				type: "spring",
				stiffness: 100,
				damping: 12,
			},
		},
	};

	return (
		<ErrorBoundary>
			<SlideLayout
				prevSlide="/lesson2/slide1"
				nextSlide="/lesson2/slide3"
				currentSlide="2"
				totalSlides="3"
				courseName="lesson2"
			>
				<div className="relative h-full flex flex-col justify-center">
					<div className="absolute inset-0 rounded-2xl bg-black/40 backdrop-blur-sm border border-tech-grid-bright" />
					<div className="relative px-16 py-8">
						<div className="space-y-8 max-w-[1280px] mx-auto">
							<motion.div
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.6 }}
							>
								<h1 className="text-4xl font-bold text-white mb-2">
									原子設計理論（Atomic Design）
								</h1>
								<h2 className="text-2xl text-tech-highlight/80">
									從最小單位到完整頁面的設計方法論
								</h2>
							</motion.div>

							<motion.div
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.6, delay: 0.2 }}
							>
								<p className="text-lg text-gray-300 leading-relaxed max-w-4xl">
									原子設計是由 Brad Frost
									提出的一種設計系統方法論，靈感來自於化學。
									它將使用者介面拆解為不同層級的組件，從最小的「原子」開始，逐步組合成更複雜的「分子」、「組織」，最終形成完整的「模板」和「頁面」。
									這種方法有助於建立可擴展、一致性高且易於維護的設計系統。
								</p>
							</motion.div>

							<motion.div
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.6, delay: 0.3 }}
							>
								<a
									href="https://x.com/brad_frost/status/1449026849246482434"
									target="_blank"
									rel="noopener noreferrer"
									className="inline-flex items-center gap-2 text-tech-highlight hover:underline"
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className="h-5 w-5"
										fill="currentColor"
										viewBox="0 0 24 24"
									>
										<path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
									</svg>
									<span>查看 Brad Frost 關於原子設計的 X 貼文</span>
									<svg
										className="w-4 h-4"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
										/>
									</svg>
								</a>
							</motion.div>

							<motion.div
								className="grid grid-cols-5 gap-4"
								variants={containerVariants}
								initial="hidden"
								animate="show"
							>
								{Object.entries(atomicExamples).map(([key, example]) => (
									<motion.div
										key={key}
										className="bg-[#1a1a1a] rounded-lg p-6 cursor-pointer hover:border-tech-highlight transition-colors border border-tech-grid-bright"
										onClick={() => setSelectedLevel(key)}
										variants={itemVariants}
										whileHover={{ scale: 1.03 }}
										whileTap={{ scale: 0.98 }}
									>
										<h3 className="text-xl font-bold text-tech-purple mb-4">
											{example.title}
										</h3>
										<p className="text-gray-400 text-sm mb-4">
											{example.description}
										</p>
										<div className="text-tech-highlight/60 text-sm hover:text-tech-highlight">
											點擊查看範例 →
										</div>
									</motion.div>
								))}
							</motion.div>
						</div>
					</div>

					<Dialog
						isOpen={!!selectedLevel}
						onClose={() => setSelectedLevel(null)}
					>
						{selectedLevel && (
							<div className="space-y-6">
								<h3 className="text-2xl font-bold text-tech-highlight">
									{atomicExamples[selectedLevel].title}
								</h3>
								<p className="text-gray-300">
									{atomicExamples[selectedLevel].description}
								</p>
								<div className="bg-black/30 rounded-lg p-6 border border-tech-grid-bright">
									<h4 className="text-lg font-bold text-tech-purple mb-4">
										預覽
									</h4>
									{atomicExamples[selectedLevel].preview}
								</div>
								<div className="bg-black/30 rounded-lg border border-tech-grid-bright">
									<h4 className="text-lg font-bold text-tech-purple mb-4 px-6 pt-6">
										程式碼範例
									</h4>
									<CodeBlock
										code={atomicExamples[selectedLevel].code}
										language="html"
									/>
								</div>
							</div>
						)}
					</Dialog>

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
		</ErrorBoundary>
	);
}
