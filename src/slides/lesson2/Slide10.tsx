import SlideLayout from "../../layouts/SlideLayout";
import { motion } from "motion/react";
import CodeBlock from "../../components/CodeBlock"; // Assuming CodeBlock is needed for examples
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

// Example demonstrating various utility classes
const utilityExample = `
<div class="container mt-4">

  <!-- Spacing Example -->
  <div class="p-3 mb-2 bg-light border rounded">
    Padding (p-3) & Margin Bottom (mb-2)
  </div>
  <div class="m-4 p-2 bg-light border rounded">
    Margin (m-4) & Padding (p-2)
  </div>

  <!-- Color Example -->
  <p class="text-primary mt-3">Primary color text (.text-primary)</p>
  <div class="p-3 mb-2 bg-success text-white rounded">Success background (.bg-success)</div>
  <div class="p-3 mb-2 bg-warning text-dark border border-dark rounded">Warning background & dark text</div>

  <!-- Alignment Example -->
  <div class="text-center mt-3 border p-2">
    Center aligned text (.text-center)
  </div>
  <div class="d-flex justify-content-between mt-3 border p-2 bg-light rounded">
    <span>Flex Item 1</span>
    <span>(.d-flex .justify-content-between)</span>
    <span>Flex Item 2</span>
  </div>
  <div class="d-flex justify-content-center mt-1 border p-2 bg-light rounded">
    <span>Centered Flex Item</span>
  </div>

  <!-- Typography Example -->
  <p class="fs-4 mt-3">Font size 4 (.fs-4)</p>
  <p class="fw-bold">Bold text (.fw-bold)</p>
  <p class="lh-sm text-muted">Small line height text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. (.lh-sm)</p>
  <p class="lh-lg text-muted">Large line height text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. (.lh-lg)</p>

</div>
`;

// Data URI function for preview
const createDataUriForUtilityPreview = (htmlSnippet: string) => {
	const bootstrapLink = `<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">`;
	const fullHtml = `
    <!DOCTYPE html>
    <html> <head> <meta charset="UTF-8"> <meta name="viewport" content="width=device-width, initial-scale=1.0"> ${bootstrapLink} 
    <style> body { padding: 1rem; background-color: #f8f9fa; } </style> </head>
    <body> ${htmlSnippet.replace(/<!--.*?-->/gs, "")} </body> </html> 
  `;
	return `data:text/html;charset=utf-8,${encodeURIComponent(fullHtml)}`;
};

export default function Slide10() {
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

	const utilityPreviewDataUri = createDataUriForUtilityPreview(utilityExample);

	return (
		<SlideLayout currentSlide="10" courseName="lesson2">
			<div className="relative h-full flex flex-col justify-center">
				<div className="absolute inset-0 rounded-2xl bg-black/40 backdrop-blur-sm border border-tech-grid-bright" />
				<div className="relative px-12 py-8 max-w-6xl mx-auto w-full">
					<div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
						{/* Left Column: Explanations */}
						<motion.div
							initial={{ opacity: 0, x: -20 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.6, delay: 0.1 }}
							className="space-y-6"
						>
							<div className="text-center md:text-left">
								<h1 className="text-4xl font-bold text-white mb-2">
									常用 Bootstrap 工具類別
								</h1>
								<h2 className="text-2xl text-tech-highlight/80">
									Utility Classes
								</h2>
							</div>

							<div className="bg-[#1a1a1a] p-5 rounded-lg border border-tech-purple/40 space-y-3">
								<h3 className="text-xl font-bold text-tech-purple">
									📌 教學重點
								</h3>
								<ul className="text-gray-300 text-sm list-disc pl-5 space-y-1">
									<li>
										<strong className="text-purple-400">間距 (Spacing):</strong>{" "}
										<code>m-*</code> (margin), <code>p-*</code> (padding),{" "}
										<code>mt-*</code>, <code>pb-*</code>, <code>mx-*</code>,
										etc. (數字 0-5, auto)
									</li>
									<li>
										<strong className="text-blue-400">顏色 (Color):</strong>{" "}
										<code>text-*</code> (text color), <code>bg-*</code>{" "}
										(background), <code>border-*</code> (e.g., text-primary,
										bg-danger)
									</li>
									<li>
										<strong className="text-green-400">
											對齊 (Alignment):
										</strong>{" "}
										<code>text-center</code>, <code>text-start</code>,{" "}
										<code>d-flex</code>, <code>align-items-*</code>,{" "}
										<code>justify-content-*</code>
									</li>
									<li>
										<strong className="text-yellow-400">
											排版 (Typography):
										</strong>{" "}
										<code>fs-*</code> (font size 1-6), <code>fw-*</code> (font
										weight), <code>lh-*</code> (line height),{" "}
										<code>text-muted</code>
									</li>
								</ul>
							</div>

							<div className="bg-[#1a1a1a] p-5 rounded-lg border border-tech-highlight/40 space-y-3">
								<h3 className="text-xl font-bold text-tech-highlight">
									📚 核心概念
								</h3>
								<p className="text-gray-300 text-sm">
									Bootstrap 大量使用「
									<strong class="text-tech-highlight">Utility-First</strong>
									」或稱「類別即設計」的概念。 這代表你可以直接在 HTML
									元素上套用這些
									<strong class="text-tech-highlight">原子化、單一用途</strong>
									的 CSS 類別來快速建構樣式和佈局，而不需要撰寫大量的自訂 CSS。
									雖然 Bootstrap 也提供預設元件，但活用 Utility Classes
									可以帶來更高的
									<strong class="text-tech-highlight">客製化彈性</strong>與
									<strong class="text-tech-highlight">開發效率</strong>。
								</p>
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
								綜合應用範例
							</h3>
							<div className="flex-grow overflow-hidden">
								<CodeBlock
									code={utilityExample}
									language="html"
									className="text-xs h-full"
								/>
							</div>
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
					{/* Backdrop */}
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

					{/* Dialog Content */}
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
									{/* Title & Close */}
									<Dialog.Title
										as="h3"
										className="text-lg font-medium leading-6 text-tech-highlight mb-2 flex justify-between items-center flex-shrink-0"
									>
										Utility Classes 效果預覽
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
											src={utilityPreviewDataUri}
											title="Utility Classes Preview"
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
