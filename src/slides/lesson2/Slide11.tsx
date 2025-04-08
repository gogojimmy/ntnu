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

// Example demonstrating Buttons and Navs with utilities
const componentExample = `
<div class="container mt-4">
  <h5 class="mb-3">按鈕 (Buttons)</h5>

  <!-- Basic Buttons -->
  <button type="button" class="btn btn-primary me-1">主要按鈕</button>
  <button type="button" class="btn btn-secondary me-1">次要按鈕</button>
  <button type="button" class="btn btn-success btn-sm me-1">成功 (小)</button>
  <button type="button" class="btn btn-danger btn-lg me-1">危險 (大)</button>
  <button type="button" class="btn btn-outline-info">資訊 (外框)</button>

  <!-- Buttons with Utilities -->
  <div class="mt-3">
    <button type="button" class="btn btn-dark p-3 me-2">按鈕 + Padding (p-3)</button>
    <button type="button" class="btn btn-link mt-2 d-block">連結按鈕 + Margin Top (mt-2) + Block</button>
  </div>

  <hr class="my-4">

  <h5 class="mb-3">導覽 (Navs)</h5>

  <!-- Basic Nav -->
  <ul class="nav border p-2 rounded mb-3">
    <li class="nav-item">
      <a class="nav-link active" aria-current="page" href="#">啟用連結 (Active)</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#">一般連結</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#">另一個連結</a>
    </li>
    <li class="nav-item">
      <a class="nav-link disabled" aria-disabled="true" href="#">停用連結 (Disabled)</a>
    </li>
  </ul>

  <!-- Nav with Utilities -->
  <ul class="nav justify-content-center border p-2 rounded bg-light">
    <li class="nav-item">
      <a class="nav-link fw-bold text-success" href="#">置中項目 1 (粗體+顏色)</a>
    </li>
    <li class="nav-item">
      <a class="nav-link text-muted" href="#">置中項目 2 (灰色)</a>
    </li>
  </ul>

</div>
`;

// Data URI function for preview (with added styles for active nav link)
const createDataUriForComponentPreview = (htmlSnippet: string) => {
	const bootstrapLink = `<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">`;
	const fullHtml = `
    <!DOCTYPE html>
    <html> <head> <meta charset="UTF-8"> <meta name="viewport" content="width=device-width, initial-scale=1.0"> ${bootstrapLink} 
    <style> 
      body { padding: 1rem; background-color: #f8f9fa; } 
      /* --- Custom style for active nav link in preview --- */
      .nav .nav-link.active {
         font-weight: bold;
         background-color: rgba(var(--bs-primary-rgb), 0.1); /* Light primary background */
         border-bottom: 2px solid var(--bs-primary); 
         color: var(--bs-primary);
      }
    </style> </head>
    <body> ${htmlSnippet.replace(/<!--.*?-->/gs, "")} </body> </html> 
  `;
	return `data:text/html;charset=utf-8,${encodeURIComponent(fullHtml)}`;
};

export default function Slide11() {
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

	const componentPreviewDataUri =
		createDataUriForComponentPreview(componentExample);

	return (
		<SlideLayout currentSlide="11" courseName="lesson2">
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
									常用 Bootstrap 元件 (1)
								</h1>
								<h2 className="text-2xl text-tech-highlight/80">
									按鈕 (Button) 與導覽 (Nav)
								</h2>
							</div>

							{/* Button Explanation */}
							<div className="bg-[#1a1a1a] p-5 rounded-lg border border-tech-blue/40 space-y-3">
								<h3 className="text-xl font-bold text-tech-blue">
									按鈕 (Button)
								</h3>
								<p className="text-gray-300 text-sm">
									使用 <code>.btn</code> 基礎類別，搭配{" "}
									<code>
										.btn-{"{"}color{"}"}
									</code>{" "}
									(如 <code>.btn-primary</code>, <code>.btn-outline-dark</code>)
									來定義按鈕樣式。 可結合
									<strong class="text-tech-blue/80">尺寸類別</strong> (
									<code>.btn-sm</code>, <code>.btn-lg</code>) 和
									<strong class="text-tech-blue/80">工具類別</strong> (如{" "}
									<code>p-*</code>, <code>mt-*</code>) 進行微調。
								</p>
							</div>

							{/* Nav Explanation */}
							<div className="bg-[#1a1a1a] p-5 rounded-lg border border-tech-green/40 space-y-3">
								<h3 className="text-xl font-bold text-tech-green">
									導覽 (Nav)
								</h3>
								<p className="text-gray-300 text-sm">
									建立導覽選單的基礎。使用 <code>.nav</code> 於{" "}
									<code>&lt;ul&gt;</code>, <code>.nav-item</code> 於{" "}
									<code>&lt;li&gt;</code>, <code>.nav-link</code> 於{" "}
									<code>&lt;a&gt;</code>。 可透過 <code>.active</code> 和{" "}
									<code>.disabled</code> 標示連結狀態，並利用
									<strong class="text-tech-green/80">Flexbox 工具類別</strong> (
									<code>.justify-content-*</code>) 控制對齊，以及其他
									<strong class="text-tech-green/80">工具類別</strong>
									客製化外觀。
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
								元件應用範例
							</h3>
							<div className="flex-grow overflow-hidden">
								<CodeBlock
									code={componentExample}
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
										元件效果預覽 (Button & Nav)
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
											src={componentPreviewDataUri}
											title="Component Preview (Button & Nav)"
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
