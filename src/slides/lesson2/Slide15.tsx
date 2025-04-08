import SlideLayout from "../../layouts/SlideLayout";
import { motion } from "motion/react";
import CodeBlock from "../../components/CodeBlock";
import { useState, Fragment, useEffect } from "react";
import { Dialog, Transition } from "@headlessui/react";
import {
	EyeIcon,
	XMarkIcon,
	ComputerDesktopIcon,
	DeviceTabletIcon,
	DevicePhoneMobileIcon,
	TvIcon,
} from "@heroicons/react/24/outline";

// --- HTML Example Snippet for Preview ---
const stickyFixedExampleHtml = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sticky Top & Fixed Bottom</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" 
          rel="stylesheet" 
          integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" 
          crossorigin="anonymous">
    <style>
      /* Necessary padding for fixed-bottom footer */
      body {
        /* Adjust padding based on footer height */
        padding-bottom: 70px; 
      }
      /* Add some height to demonstrate scrolling */
      .content-area {
          min-height: 150vh; /* Make page scrollable */
          padding-top: 2rem; /* Spacing below sticky nav */
          background-color: #f8f9fa; 
      }
      .sticky-nav { background-color: rgba(0, 0, 0, 0.85); backdrop-filter: blur(5px); }
      .fixed-footer { background-color: rgba(52, 58, 64, 0.95); backdrop-filter: blur(5px); }
    </style>
</head>
<body>

    <!-- Sticky Top Navbar -->
    <nav class="navbar navbar-expand-lg navbar-dark sticky-top sticky-nav">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Sticky Navbar</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavSticky" aria-controls="navbarNavSticky" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavSticky">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item"><a class="nav-link" href="#">Home</a></li>
            <li class="nav-item"><a class="nav-link" href="#">Features</a></li>
            <li class="nav-item"><a class="nav-link" href="#">Pricing</a></li>
          </ul>
        </div>
      </div>
    </nav>

    <!-- Scrollable Content Area -->
    <div class="container content-area">
        <h1>Scroll Down to See Effects</h1>
        <p>The navbar above uses <code>sticky-top</code>. It will stick to the top once you scroll past it.</p>
        <p>The footer below uses <code>fixed-bottom</code>. It will always stay at the bottom of the viewport.</p>
        <p>Notice the bottom padding on the body to prevent the fixed footer from overlapping this content.</p>
        
        <div style="height: 100vh;"></div> {/* Extra space */} 

        <p>End of scrollable content.</p>
    </div>

    <!-- Fixed Bottom Footer -->
    <footer class="py-3 text-white fixed-bottom fixed-footer">
      <div class="container text-center">
        <small>Copyright &copy; Your Website 2024</small>
      </div>
    </footer>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
</body>
</html>
`;

// --- Code Snippets for Explanation ---
const stickyTopExample = `<nav class="navbar sticky-top navbar-light bg-light"> ... </nav>`;
const fixedBottomExample = `<footer class="footer fixed-bottom py-3 bg-light"> ... </footer>`;
const bodyPaddingCss = `body { padding-bottom: 60px; /* Adjust to footer height */ }`;

// Data URI function for preview
const createDataUriForStickyFixedPreview = (htmlContent: string) => {
	return `data:text/html;charset=utf-8,${encodeURIComponent(htmlContent)}`;
};

export default function Lesson2Slide15() {
	// Renamed component
	const [isDialogOpen, setIsDialogOpen] = useState(false);
	const [previewWidth, setPreviewWidth] = useState("100%");

	// Reset width when dialog opens/closes
	useEffect(() => {
		if (!isDialogOpen) {
			const timer = setTimeout(() => setPreviewWidth("100%"), 300);
			return () => clearTimeout(timer);
		} else {
			setPreviewWidth("100%");
		}
	}, [isDialogOpen]);

	const previewDataUri = createDataUriForStickyFixedPreview(
		stickyFixedExampleHtml
	);

	return (
		<SlideLayout currentSlide="15" courseName="lesson2">
			<div className="relative h-full flex flex-col justify-center">
				<div className="absolute inset-0 rounded-2xl bg-black/40 backdrop-blur-sm border border-tech-grid-bright" />
				<div className="relative px-12 py-8 max-w-7xl mx-auto w-full">
					<div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
						{/* Left Column: Explanation */}
						<motion.div
							initial={{ opacity: 0, x: -20 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.6, delay: 0.1 }}
							className="space-y-5"
						>
							<div className="text-center md:text-left">
								<h1 className="text-4xl font-bold text-white mb-2">
									Sticky Header / Fixed Footer
								</h1>
								<h2 className="text-2xl text-tech-highlight/80">
									黏性頁首 / 固定頁尾
								</h2>
							</div>

							{/* Sticky Top Explanation */}
							<div className="bg-[#1a1a1a] p-5 rounded-lg border border-cyan-500/40 space-y-3">
								<h3 className="text-xl font-bold text-cyan-400">
									黏性頁首 (Sticky Top)
								</h3>
								<p className="text-gray-300 text-sm">
									使用 <code>.sticky-top</code> class 可以讓元素 (通常是導覽列
									Navbar) 在頁面滾動到它之後固定在視窗頂部。它基於 CSS 的{" "}
									<code>position: sticky</code> 屬性。
								</p>
								<ul className="text-gray-300 text-sm list-disc pl-5 space-y-1">
									<li>
										套用方式：直接將 <code>.sticky-top</code> class
										加入到目標元素 (例如 <code>&lt;nav&gt;</code>)。
									</li>
									<li>
										注意：<code>position: sticky</code> 的行為可能受到父層元素{" "}
										<code>overflow</code> 屬性的影響。
									</li>
								</ul>
								<CodeBlock
									code={stickyTopExample}
									language="html"
									className="text-xs"
								/>
							</div>

							{/* Fixed Bottom Explanation */}
							<div className="bg-[#1a1a1a] p-5 rounded-lg border border-lime-500/40 space-y-3">
								<h3 className="text-xl font-bold text-lime-400">
									固定頁尾 (Fixed Bottom)
								</h3>
								<p className="text-gray-300 text-sm">
									使用 <code>.fixed-bottom</code> class 可以讓元素 (通常是頁尾
									Footer) 固定在視窗底部，不論頁面如何滾動。它基於 CSS 的{" "}
									<code>position: fixed</code> 屬性。
								</p>
								<ul className="text-gray-300 text-sm list-disc pl-5 space-y-1">
									<li>
										套用方式：直接將 <code>.fixed-bottom</code> class
										加入到目標元素 (例如 <code>&lt;footer&gt;</code>)。
									</li>
									<li>
										<strong className="text-red-400">重要：</strong>使用{" "}
										<code>.fixed-bottom</code>{" "}
										時，它可能會覆蓋頁面底部的其他內容。必須手動在{" "}
										<code>&lt;body&gt;</code> 或主要內容容器上添加足夠的{" "}
										<code>padding-bottom</code> 或 <code>margin-bottom</code>{" "}
										(值約等於頁尾高度) 來避免內容被遮擋。
									</li>
								</ul>
								<CodeBlock
									code={fixedBottomExample}
									language="html"
									className="text-xs"
								/>
								<p className="text-gray-300 text-sm pt-2">
									搭配的 CSS 設定範例：
								</p>
								<CodeBlock
									code={bodyPaddingCss}
									language="css"
									className="text-xs"
								/>
							</div>
						</motion.div>

						{/* Right Column: Preview Button */}
						<motion.div
							initial={{ opacity: 0, x: 20 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.6, delay: 0.2 }}
							// Make this column slightly taller or adjust content
							className="bg-[#1a1a1a] p-5 rounded-lg border border-gray-700 space-y-3 flex flex-col justify-center items-center h-[60vh] md:h-auto md:min-h-[60vh]"
						>
							<p className="text-gray-400 text-center mb-4">
								點擊下方按鈕查看 <code>.sticky-top</code> 和{" "}
								<code>.fixed-bottom</code> 的實際效果。
							</p>
							<button
								onClick={() => setIsDialogOpen(true)}
								className="inline-flex items-center justify-center gap-1 px-4 py-2 border border-transparent text-sm font-medium rounded shadow-sm text-white bg-tech-highlight/70 hover:bg-tech-highlight focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-tech-highlight transition-colors"
							>
								<EyeIcon className="h-5 w-5" /> 顯示效果預覽
							</button>
						</motion.div>
					</div>
				</div>
			</div>

			{/* Preview Dialog */}
			<Transition appear show={isDialogOpen} as={Fragment}>
				<Dialog
					as="div"
					className="relative z-50"
					onClose={() => setIsDialogOpen(false)}
				>
					{/* Overlay */}
					<Transition.Child
						as={Fragment}
						enter="ease-out duration-300"
						enterFrom="opacity-0"
						enterTo="opacity-100"
						leave="ease-in duration-200"
						leaveFrom="opacity-100"
						leaveTo="opacity-0"
					>
						<div className="fixed inset-0 bg-black/60 backdrop-blur-sm" />
					</Transition.Child>

					{/* Dialog Content */}
					<div className="fixed inset-0 overflow-y-auto">
						<div className="flex min-h-full items-center justify-center p-4 text-center">
							<Transition.Child
								as={Fragment}
								enter="ease-out duration-300"
								enterFrom="opacity-0 scale-95"
								enterTo="opacity-100 scale-100"
								leave="ease-in duration-200"
								leaveFrom="opacity-100 scale-100"
								leaveTo="opacity-0 scale-95"
							>
								<Dialog.Panel
									className="w-full h-[85vh] transform overflow-hidden rounded-lg bg-[#1e1e1e] border border-tech-grid-bright/50 p-6 text-left align-middle shadow-xl transition-all flex flex-col"
									style={{
										width: previewWidth,
										maxWidth: "95vw",
										transition: "width 0.3s ease-in-out",
									}}
								>
									<Dialog.Title
										as="h3"
										className="text-lg font-medium leading-6 text-tech-highlight mb-2 flex justify-between items-center flex-shrink-0"
									>
										Sticky/Fixed 效果預覽
										<button
											onClick={() => setIsDialogOpen(false)}
											className="text-gray-400 hover:text-white"
										>
											<XMarkIcon className="h-6 w-6" />
										</button>
									</Dialog.Title>

									{/* Width Controls */}
									<div className="mb-3 flex items-center justify-center gap-3 flex-shrink-0 border-b border-gray-700 pb-3">
										<span className="text-xs text-gray-400 mr-2">
											預覽寬度:
										</span>
										{/* Width control buttons */}
										<button
											onClick={() => setPreviewWidth("100%")}
											className={`p-1 rounded ${
												previewWidth === "100%"
													? "bg-tech-highlight/30"
													: "hover:bg-gray-700"
											}`}
											title="Desktop (100%)"
										>
											<ComputerDesktopIcon className="h-5 w-5 text-gray-300" />
										</button>
										<button
											onClick={() => setPreviewWidth("1200px")}
											className={`p-1 rounded ${
												previewWidth === "1200px"
													? "bg-tech-highlight/30"
													: "hover:bg-gray-700"
											}`}
											title="XL Desktop (1200px)"
										>
											<TvIcon className="h-5 w-5 text-gray-300" />
										</button>
										<button
											onClick={() => setPreviewWidth("768px")}
											className={`p-1 rounded ${
												previewWidth === "768px"
													? "bg-tech-highlight/30"
													: "hover:bg-gray-700"
											}`}
											title="Tablet (768px)"
										>
											<DeviceTabletIcon className="h-5 w-5 text-gray-300" />
										</button>
										<button
											onClick={() => setPreviewWidth("375px")}
											className={`p-1 rounded ${
												previewWidth === "375px"
													? "bg-tech-highlight/30"
													: "hover:bg-gray-700"
											}`}
											title="Mobile (375px)"
										>
											<DevicePhoneMobileIcon className="h-5 w-5 text-gray-300" />
										</button>
									</div>

									{/* Preview Iframe Only */}
									<div className="mt-2 flex-grow overflow-auto bg-white rounded relative border border-gray-600">
										<iframe
											src={previewDataUri}
											title="Sticky Top & Fixed Bottom Preview"
											className="w-full h-full border-0"
											sandbox="allow-scripts" // For potential navbar toggler
										></iframe>
									</div>

									{/* Close Footer */}
									<div className="mt-4 text-right flex-shrink-0">
										<button
											type="button"
											className="inline-flex justify-center rounded-md border border-transparent bg-tech-purple/80 px-4 py-2 text-sm font-medium text-white hover:bg-tech-purple focus:outline-none focus-visible:ring-2 focus-visible:ring-tech-purple focus-visible:ring-offset-2 focus-visible:ring-offset-tech-darker"
											onClick={() => setIsDialogOpen(false)}
										>
											關閉
										</button>
									</div>
								</Dialog.Panel>
							</Transition.Child>
						</div>
					</div>
				</Dialog>
			</Transition>
		</SlideLayout>
	);
}
