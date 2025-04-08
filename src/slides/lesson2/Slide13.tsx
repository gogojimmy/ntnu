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
	ExclamationTriangleIcon,
	LinkIcon,
} from "@heroicons/react/24/outline";

// Example demonstrating Modal and Collapse
const modalCollapseExample = `
<div class="container mt-4">

  <!-- Modal Trigger & Markup -->
  <h5 class="mb-3">彈窗 (Modal)</h5>
  <button type="button" class="btn btn-primary mb-3" data-bs-toggle="modal" data-bs-target="#liveDemoModal">
    開啟互動彈窗
  </button>

  <div class="modal fade" id="liveDemoModal" tabindex="-1">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Modal 標題</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
        </div>
        <div class="modal-body">
          <p>這是從頁面觸發的互動式彈窗。</p>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">關閉</button>
          <button type="button" class="btn btn-success">確定</button>
        </div>
      </div>
    </div>
  </div>

  <hr class="my-4">

  <!-- Collapse Trigger & Content -->
  <h5 class="mb-3">收合 (Collapse)</h5>
  <p>
    <a class="btn btn-info me-2" data-bs-toggle="collapse" href="#multiCollapseExample1" role="button" aria-expanded="false" aria-controls="multiCollapseExample1">切換第一個區塊</a>
    <button class="btn btn-warning" type="button" data-bs-toggle="collapse" data-bs-target="#multiCollapseExample2" aria-expanded="false" aria-controls="multiCollapseExample2">切換第二個區塊</button>
  </p>
  <div class="row">
    <div class="col">
      <div class="collapse multi-collapse" id="multiCollapseExample1">
        <div class="card card-body">
          這是第一個可收合區塊的內容。
        </div>
      </div>
    </div>
    <div class="col">
      <div class="collapse multi-collapse" id="multiCollapseExample2">
        <div class="card card-body">
          這是第二個可收合區塊的內容。
        </div>
      </div>
    </div>
  </div>

</div>
`;

// Example showing how to include JS
const jsIncludeExample = `
<!DOCTYPE html>
<html>
<head>
  <title>Bootstrap JS Example</title>
  <!-- 1. Include Bootstrap CSS -->
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" ... >
</head>
<body>
  <h1>My Page Content</h1>
  <!-- Your Modals, Collapse triggers, etc. -->
  ...

  <!-- 2. Include Bootstrap JS Bundle (before closing </body>) -->
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" ... ></script>
</body>
</html>
`;

// Data URI function for preview (Includes JS Bundle)
const createDataUriForModalCollapsePreview = (htmlSnippet: string) => {
	const bootstrapCssLink = `<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">`;
	const bootstrapJsBundle = `<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>`;
	const fullHtml = `
    <!DOCTYPE html>
    <html> <head> <meta charset="UTF-8"> <meta name="viewport" content="width=device-width, initial-scale=1.0"> ${bootstrapCssLink} 
             <style> body { padding: 1.5rem; background-color: #f8f9fa; } </style> </head>
      <body> ${htmlSnippet.replace(
				/<!--.*?-->/gs,
				""
			)} ${bootstrapJsBundle} </body> </html> 
  `;
	return `data:text/html;charset=utf-8,${encodeURIComponent(fullHtml)}`;
};

export default function Slide13() {
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

	const modalCollapsePreviewDataUri =
		createDataUriForModalCollapsePreview(modalCollapseExample);

	return (
		<SlideLayout currentSlide="13" courseName="lesson2">
			<div className="relative h-full flex flex-col justify-center">
				<div className="absolute inset-0 rounded-2xl bg-black/40 backdrop-blur-sm border border-tech-grid-bright" />
				<div className="relative px-12 py-8 max-w-6xl mx-auto w-full">
					<div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
						{/* Left Column: Explanations & JS Info */}
						<motion.div
							initial={{ opacity: 0, x: -20 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.6, delay: 0.1 }}
							className="space-y-6"
						>
							<div className="text-center md:text-left">
								<h1 className="text-4xl font-bold text-white mb-2">
									JS 互動元件
								</h1>
								<h2 className="text-2xl text-tech-highlight/80">
									彈窗 (Modal) & 收合 (Collapse)
								</h2>
							</div>

							{/* Modal Explanation */}
							<div className="bg-[#1a1a1a] p-5 rounded-lg border border-purple-500/40 space-y-3">
								<h3 className="text-xl font-bold text-purple-400 flex items-center gap-2">
									<ExclamationTriangleIcon className="h-5 w-5 text-yellow-400" />
									彈窗 (Modal)
								</h3>
								<p className="text-gray-300 text-sm">
									用於建立互動式對話框。 需使用{" "}
									<code>data-bs-toggle="modal"</code> 和{" "}
									<code>data-bs-target="#ID"</code> 觸發。
								</p>
							</div>

							{/* Collapse Explanation */}
							<div className="bg-[#1a1a1a] p-5 rounded-lg border border-teal-500/40 space-y-3">
								<h3 className="text-xl font-bold text-teal-400 flex items-center gap-2">
									<ExclamationTriangleIcon className="h-5 w-5 text-yellow-400" />
									收合 (Collapse)
								</h3>
								<p className="text-gray-300 text-sm">
									切換內容的顯示/隱藏。 需使用{" "}
									<code>data-bs-toggle="collapse"</code> 和{" "}
									<code>data-bs-target="#ID"</code> (或 <code>href="#ID"</code>)
									觸發。
								</p>
							</div>

							{/* JS Requirement Info */}
							<div className="bg-yellow-900/30 border border-yellow-400/40 p-5 rounded-lg space-y-3">
								<h3 className="text-xl font-bold text-yellow-300 flex items-center gap-2">
									<LinkIcon className="h-5 w-5" />
									引入 Bootstrap JavaScript
								</h3>
								<p className="text-yellow-200/90 text-sm">
									Modal 和 Collapse 等互動元件需要 Bootstrap 的 JavaScript
									函式庫才能運作。 最簡單的方式是引入
									<strong class="text-yellow-200">
										包含 Popper.js 的 Bundle 檔案
									</strong>
									。 通常建議放在 <code>&lt;/body&gt;</code> 標籤之前載入。
								</p>
								<CodeBlock
									code={jsIncludeExample}
									language="html"
									className="text-xs"
								/>
							</div>
						</motion.div>

						{/* Right Column: Example Code & Preview Button */}
						<motion.div
							initial={{ opacity: 0, x: 20 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.6, delay: 0.2 }}
							className="bg-[#1a1a1a] p-5 rounded-lg border border-gray-700 space-y-3 h-full flex flex-col"
						>
							<h3 className="text-xl font-bold text-gray-300 flex-shrink-0">
								Modal & Collapse 範例
							</h3>
							<div className="flex-grow overflow-hidden">
								<CodeBlock
									code={modalCollapseExample}
									language="html"
									className="text-xs h-full"
								/>
							</div>
							<button
								onClick={() => setIsDialogOpen(true)}
								className="mt-auto flex-shrink-0 inline-flex items-center justify-center gap-1 px-3 py-1.5 border border-transparent text-xs font-medium rounded shadow-sm text-white bg-tech-highlight/70 hover:bg-tech-highlight focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-tech-highlight transition-colors"
							>
								<EyeIcon className="h-4 w-4" /> 顯示互動效果預覽
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
					<Transition.Child
						as={Fragment}
						{
							...{
								/* transition props */
							}
						}
					>
						<div className="fixed inset-0 bg-black/60 backdrop-blur-sm" />
					</Transition.Child>
					<div className="fixed inset-0 overflow-y-auto">
						<div className="flex min-h-full items-center justify-center p-4 text-center">
							<Transition.Child
								as={Fragment}
								{
									...{
										/* transition props */
									}
								}
							>
								<Dialog.Panel
									className="w-full h-[75vh] transform overflow-hidden rounded-lg bg-[#1e1e1e] border border-tech-grid-bright/50 p-6 text-left align-middle shadow-xl transition-all flex flex-col"
									style={{
										width: previewWidth,
										transition: "width 0.3s ease-in-out",
									}}
								>
									<Dialog.Title
										as="h3"
										className="text-lg font-medium leading-6 text-tech-highlight mb-2 flex justify-between items-center flex-shrink-0"
									>
										Modal & Collapse 效果預覽
										<button
											onClick={() => setIsDialogOpen(false)}
											className="text-gray-400 hover:text-white"
										>
											<XMarkIcon className="h-6 w-6" />
										</button>
									</Dialog.Title>
									{/* Width Controls */}
									{/* ... width controls ... */}
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
									{/* Iframe */}
									<div className="mt-2 flex-grow overflow-auto bg-white rounded relative">
										<iframe
											src={modalCollapsePreviewDataUri}
											title="Modal & Collapse Preview"
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
