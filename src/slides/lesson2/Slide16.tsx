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

// --- CSS Example Snippet ---
const fixedSidebarCss = `
/* CSS for the fixed sidebar */
.fixed-sidebar {
  position: sticky; /* Make it sticky */
  top: 0;           /* Stick to the top */
  height: 100vh;    /* Full viewport height */
  overflow-y: auto; /* Enable vertical scroll *within* the sidebar if content overflows */
  background-color: #f8f9fa; /* Example background */
  border-right: 1px solid #dee2e6; /* Example border */
  padding-top: 1rem; /* Optional padding */
  padding-bottom: 1rem; /* Optional padding */
}

/* Ensure columns don't have default padding if needed */
/* .row > * { padding-left: 0; padding-right: 0; } */

/* Style for the main content area */
.main-content {
  padding: 2rem;
  min-height: 150vh; /* Make content area scrollable for demo */
}
`;

// --- HTML Example Snippet for Preview ---
const fixedSidebarExampleHtml = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Fixed Sidebar Layout</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" 
          rel="stylesheet" 
          integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" 
          crossorigin="anonymous">
    <style>
      /* Embedding CSS directly */
      ${fixedSidebarCss}

      /* Ensure html/body take full height for sticky to work correctly relative to viewport */
      html, body {
          height: 100%;
          overflow-x: hidden; /* Prevent horizontal scroll */
      }
    </style>
</head>
<body>

<div class="container-fluid">
  <div class="row">
    
    <!-- Sidebar Column -->
    <div class="col-md-3 col-lg-2 fixed-sidebar">
      <h5>Sidebar</h5>
      <ul class="nav flex-column">
        ${(() => {
					let items = "";
					for (let i = 1; i <= 30; i++) {
						items += `<li class="nav-item"><a class="nav-link" href="#">Nav item ${i}</a></li>`;
					}
					return items;
				})()}
      </ul>
    </div>

    <!-- Main Content Column -->
    <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4 main-content">
      <h1>Main Content Area</h1>
      <p>This area scrolls independently of the sidebar.</p>
      <p>The sidebar uses <code>position: sticky</code>, <code>top: 0</code>, <code>height: 100vh</code>, and <code>overflow-y: auto</code>.</p>
      
      <div style="height: 120vh;"></div> {/* Extra space to ensure scrolling */}

      <p>End of main content.</p>
    </main>
  
  </div>
</div>

<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
</body>
</html>
`;

// Data URI function for preview
const createDataUriForFixedSidebarPreview = (htmlContent: string) => {
	return `data:text/html;charset=utf-8,${encodeURIComponent(htmlContent)}`;
};

export default function Lesson2Slide16() {
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

	const previewDataUri = createDataUriForFixedSidebarPreview(
		fixedSidebarExampleHtml
	);

	return (
		<SlideLayout currentSlide="16" courseName="lesson2">
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
									Fixed Sidebar Layout
								</h1>
								<h2 className="text-2xl text-tech-highlight/80">
									固定側邊欄佈局
								</h2>
							</div>

							<div className="bg-[#1a1a1a] p-5 rounded-lg border border-blue-500/40 space-y-3">
								<h3 className="text-xl font-bold text-blue-400">佈局目標</h3>
								<p className="text-gray-300 text-sm">
									建立一個常見的網頁佈局：左側有一個固定高度的側邊欄
									(Sidebar)，右側是主要內容區域。當頁面內容過多時，只有主要內容區域會滾動，側邊欄保持在原地，且側邊欄自身的內容若過長也能獨立滾動。
								</p>
								<h4 className="text-lg font-semibold text-gray-200 pt-2">
									實現方式 (Bootstrap + CSS)：
								</h4>
								<ul className="text-gray-300 text-sm list-disc pl-5 space-y-2">
									<li>
										<strong className="text-yellow-400">HTML 結構:</strong> 使用
										Bootstrap 格線系統 (<code>.container-fluid</code> {">"}{" "}
										<code>.row</code> {">"} <code>.col-*</code>)
										來劃分側邊欄和主內容區。
										<pre className="text-xs text-gray-400 bg-black/30 p-2 rounded mt-1 overflow-x-auto">
											<code>{`<div class="row">
  <div class="col-md-3 fixed-sidebar">...</div>
  <main class="col-md-9 ms-sm-auto">...</main>
</div>`}</code>
										</pre>
									</li>
									<li>
										<strong className="text-yellow-400">
											CSS 關鍵屬性 (應用於側邊欄 <code>.col-*</code>):
										</strong>
										<ul className="list-inside list-['-_'] pl-4 text-gray-400 text-xs mt-1 space-y-1">
											<li>
												<code>position: sticky;</code>:
												讓側邊欄相對於其最近的滾動祖先元素定位。
											</li>
											<li>
												<code>top: 0;</code>:
												將側邊欄黏在頂部。如果頁面有固定的頂部導覽列
												(Navbar)，此值需調整為導覽列的高度 (例如{" "}
												<code>top: 56px;</code>)。
											</li>
											<li>
												<code>height: 100vh;</code>:
												設定側邊欄高度為視窗的完整高度。同樣，若有固定
												Navbar，需減去其高度 (例如{" "}
												<code>height: calc(100vh - 56px);</code>)。
											</li>
											<li>
												<code>overflow-y: auto;</code>:{" "}
												<strong className="text-lime-400">重要!</strong>{" "}
												當側邊欄本身的內容超出其高度時，允許在側邊欄內部產生獨立的垂直滾動條。
											</li>
										</ul>
									</li>
									<li>
										<strong className="text-yellow-400">容器高度:</strong> 確保{" "}
										<code>&lt;html&gt;</code> 和 <code>&lt;body&gt;</code>{" "}
										至少有 <code>height: 100%;</code>，這樣 <code>100vh</code>{" "}
										才能正確相對於視窗高度計算。
									</li>
								</ul>
							</div>
						</motion.div>

						{/* Right Column: CSS Example & Preview Button */}
						<motion.div
							initial={{ opacity: 0, x: 20 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.6, delay: 0.2 }}
							className="bg-[#1a1a1a] p-5 rounded-lg border border-gray-700 space-y-3 h-[60vh] flex flex-col"
						>
							<h3 className="text-xl font-bold text-gray-300 flex-shrink-0">
								關鍵 CSS 範例
							</h3>
							<div className="flex-grow overflow-hidden">
								<CodeBlock
									code={fixedSidebarCss
										.trim()
										.split("\n")
										.slice(1, 9)
										.join("\n")} // Show only relevant part
									language="css"
									className="text-xs h-full"
								/>
							</div>
							<p className="text-gray-400 text-xs text-center mt-2 flex-shrink-0">
								點擊預覽查看完整 HTML 結構與實際效果。
							</p>
							<button
								onClick={() => setIsDialogOpen(true)}
								className="mt-auto flex-shrink-0 inline-flex items-center justify-center gap-1 px-3 py-1.5 border border-transparent text-xs font-medium rounded shadow-sm text-white bg-tech-highlight/70 hover:bg-tech-highlight focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-tech-highlight transition-colors"
							>
								<EyeIcon className="h-4 w-4" /> 顯示效果預覽
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
										固定側邊欄效果預覽
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
											title="Fixed Sidebar Preview"
											className="w-full h-full border-0"
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
