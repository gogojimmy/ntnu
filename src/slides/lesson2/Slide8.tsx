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

// Grid example using container-fluid for better isolated column demo inside iframe
const gridExample = `
<!-- Example 1: Two Columns -->
<div class="container-fluid border-0 p-3 mb-4 bg-white rounded shadow-sm">
  <p class="text-muted small text-center mb-2">第一組範例 (兩欄)</p>
  <div class="row">
    <div class="col-md-6 p-3" style="background-color: #e7f1ff; border: 1px dashed #b8d6ff;">
      左欄 (.col-md-6)
    </div>
    <div class="col-md-6 p-3" style="background-color: #d1e7dd; border: 1px dashed #a3cfbb;">
      右欄 (.col-md-6)
    </div>
  </div>
</div>

<!-- Example 2: Three Columns with different responsive points -->
<div class="container-fluid border-0 p-3 bg-white rounded shadow-sm">
   <p class="text-muted small text-center mb-2">第二組範例 (三欄)</p>
  <div class="row">
    <div class="col-lg-4 col-md-6 p-3" style="background-color: #f8d7da; border: 1px dashed #f1ae B5;">
       欄位 1 (.col-lg-4 .col-md-6)
    </div>
    <div class="col-lg-4 col-md-6 p-3" style="background-color: #fff3cd; border: 1px dashed #ffe69c;">
       欄位 2 (.col-lg-4 .col-md-6)
    </div>
     <div class="col-lg-4 col-md-12 p-3" style="background-color: #cff4fc; border: 1px dashed #9eeaf9;">
       欄位 3 (.col-lg-4 .col-md-12)
    </div>
  </div>
</div>
`;

// Data URI function (Adjusted styles for fluid container preview, removed body padding)
const createDataUriForGridPreview = (htmlSnippet: string) => {
	const bootstrapLink = `<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">`;
	const fullHtml = `
    <!DOCTYPE html>
    <html> <head> <meta charset="UTF-8"> <meta name="viewport" content="width=device-width, initial-scale=1.0"> ${bootstrapLink} 
    <style> 
      /* Set body background, remove padding */
      body { background-color: #e9ecef; padding: 0 !important; } 
      /* Container-fluid adds its own padding, ensure it's visible */
      .container-fluid { background-color: #fff; box-shadow: 0 1px 3px rgba(0,0,0,0.1); }
      .row { margin-left: 0; margin-right: 0; } /* Remove default negative row margins if needed */
      .row > div { 
        min-height: 60px; 
        display: flex; 
        align-items: center; 
        justify-content: center; 
        flex-direction: column; 
        font-size: 0.85rem; 
        /* Remove margin, rely on column padding */
        margin-top: 0; 
        margin-bottom: 0;
        /* Padding already added via Bootstrap classes or inline */
        text-align: center; 
      }
      p.small { font-size: 0.75rem; margin-bottom: 0.5rem !important; }
      /* Style inline styles for columns */
      [style*="background-color"][style*="border"] {
         border-radius: 0.25rem; /* Add slight rounding */
         margin-top: 0.5rem !important; /* Re-add vertical spacing */
         margin-bottom: 0.5rem !important;
      }
    </style> </head>
    <body> ${htmlSnippet.replace(/\/\/.*/g, "")} </body> </html>
  `;
	return `data:text/html;charset=utf-8,${encodeURIComponent(fullHtml)}`;
};

export default function Slide8() {
	const [isDialogOpen, setIsDialogOpen] = useState(false);
	const [previewWidth, setPreviewWidth] = useState("100%");

	useEffect(() => {
		if (!isDialogOpen) {
			const timer = setTimeout(() => setPreviewWidth("100%"), 300);
			return () => clearTimeout(timer);
		} else {
			setPreviewWidth("100%");
		}
	}, [isDialogOpen]);

	const gridPreviewDataUri = createDataUriForGridPreview(gridExample);

	return (
		<SlideLayout
			// Navigation handled by context
			currentSlide="8"
			courseName="lesson2"
		>
			<div className="relative h-full flex flex-col justify-center">
				{/* Background */}
				<div className="absolute inset-0 rounded-2xl bg-black/40 backdrop-blur-sm border border-tech-grid-bright" />

				{/* Content */}
				<div className="relative px-12 py-8 max-w-6xl mx-auto w-full">
					<div className="space-y-5">
						{/* Title */}
						<motion.div
							initial={{ opacity: 0, y: -20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6 }}
							className="text-center mb-6"
						>
							<h1 className="text-4xl font-bold text-white mb-2">
								Bootstrap Grid System
							</h1>
							<h2 className="text-2xl text-tech-highlight/80">
								網格系統：佈局的核心
							</h2>
						</motion.div>

						{/* Introduction to Grid */}
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, delay: 0.1 }}
							className="bg-black/20 p-4 rounded-lg border border-tech-grid-bright/30"
						>
							<p className="text-lg text-white/90">
								Bootstrap 的 Grid System 是強大且靈活的
								<strong className="text-tech-highlight">響應式佈局工具</strong>
								。 核心概念是使用{" "}
								<code className="text-tech-purple">.container</code> (或{" "}
								<code>.container-fluid</code>) 包裹內容， 內容放置於{" "}
								<code className="text-tech-green">.row</code> (列) 中，
								再將列分割成多個 <code className="text-yellow-500">.col</code>{" "}
								(欄)。
							</p>
						</motion.div>

						{/* Grid Explanation & Example Area */}
						<div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
							{/* Explanations */}
							<motion.div
								initial={{ opacity: 0, x: -20 }}
								animate={{ opacity: 1, x: 0 }}
								transition={{ duration: 0.6, delay: 0.2 }}
								className="bg-[#1a1a1a] p-5 rounded-lg border border-tech-purple/40 space-y-4 h-full"
							>
								<h3 className="text-xl font-bold text-tech-purple">核心概念</h3>
								<ul className="text-gray-300 text-sm list-disc pl-5 space-y-2">
									<li>
										<strong className="text-tech-purple/80">12 欄系統：</strong>{" "}
										每一個 <code>.row</code> 內部被想像成有 12
										個等寬的欄位可供分配。
									</li>
									<li>
										<strong className="text-tech-purple/80">
											響應式欄位：
										</strong>{" "}
										使用{" "}
										<code>
											.col-{"{"}breakpoint{"}"}-{"{"}number{"}"}
										</code>{" "}
										來指定欄位在某個 breakpoint 或以上時佔據多少欄。 例如：
										<code>.col-md-6</code> 在中型螢幕 (md: ≥768px) 或以上佔據
										6/12 (50%) 寬度，在更小螢幕則佔滿 100%。
									</li>
									<li>
										<strong className="text-tech-purple/80">自動換行：</strong>{" "}
										如果單一 <code>.row</code> 內的 <code>.col</code> 總欄數超過
										12，多出的欄位會自動換到下一行。
									</li>
									<li>
										<strong className="text-tech-purple/80">巢狀結構：</strong>{" "}
										<code>.row</code> 和 <code>.col</code>{" "}
										可以互相嵌套以實現更複雜的佈局。
									</li>
								</ul>
							</motion.div>

							{/* Example */}
							<motion.div
								initial={{ opacity: 0, x: 20 }}
								animate={{ opacity: 1, x: 0 }}
								transition={{ duration: 0.6, delay: 0.3 }}
								className="bg-[#1a1a1a] p-5 rounded-lg border border-tech-highlight/40 space-y-3 h-full flex flex-col"
							>
								<h3 className="text-xl font-bold text-tech-highlight flex-shrink-0">
									範例程式碼
								</h3>
								<div className="flex-grow overflow-hidden">
									<CodeBlock
										code={gridExample}
										language="html"
										className="text-xs h-full"
									/>
								</div>
								<button
									onClick={() => setIsDialogOpen(true)}
									className="mt-auto flex-shrink-0 inline-flex items-center justify-center gap-1 px-3 py-1.5 border border-transparent text-xs font-medium rounded shadow-sm text-white bg-tech-highlight/70 hover:bg-tech-highlight focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-tech-highlight transition-colors"
								>
									<EyeIcon className="h-4 w-4" /> 顯示格線預覽
								</button>
							</motion.div>
						</div>
					</div>
				</div>
			</div>

			{/* Preview Dialog with Width Controls */}
			<Transition appear show={isDialogOpen} as={Fragment}>
				<Dialog
					as="div"
					className="relative z-50"
					onClose={() => setIsDialogOpen(false)}
				>
					{/* Backdrop */}
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
									className="w-full h-[75vh] transform overflow-hidden rounded-lg bg-[#1e1e1e] border border-tech-grid-bright/50 p-6 text-left align-middle shadow-xl transition-all flex flex-col"
									style={{
										width: previewWidth,
										transition: "width 0.3s ease-in-out",
									}}
								>
									{/* Title & Close */}
									<Dialog.Title
										as="h3"
										className="text-lg font-medium leading-6 text-tech-highlight mb-2 flex justify-between items-center flex-shrink-0"
									>
										格線系統預覽 (Grid System Preview)
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
											onClick={() => setPreviewWidth("868px")}
											className={`p-1 rounded ${
												previewWidth === "868px"
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

									{/* Iframe */}
									<div className="mt-2 flex-grow overflow-auto bg-white rounded relative">
										<iframe
											src={gridPreviewDataUri}
											title="Grid System Preview"
											className="w-full h-full border-0"
											sandbox="allow-scripts"
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
