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

// Example demonstrating only Card
const cardOnlyExample = `
<div class="container mt-4">

  <!-- Card -->
  <h5 class="mb-3">卡片 (Card)</h5>
  <div class="card mb-4" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">卡片標題</h5>
      <p class="card-text">卡片內容，可用來顯示資訊或選項。</p>
      <a href="#" class="btn btn-sm btn-info">卡片按鈕</a>
    </div>
  </div>

   <div class="card text-bg-dark mb-3" style="max-width: 18rem;">
      <div class="card-header">Header</div>
      <div class="card-body">
        <h5 class="card-title">Dark card title</h5>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      </div>
    </div>

  <hr class="my-4">
  <h5 class="mb-3 mt-4">電商卡片範例 (E-commerce Card Examples)</h5>

  <div class="row row-cols-1 row-cols-md-2 g-4">
    <!-- E-commerce Card 1 -->
    <div class="col">
      <div class="card h-100">
        <img src="https://picsum.photos/300/200?random=1" class="card-img-top" alt="Product Image">
        <div class="card-body d-flex flex-column">
          <h5 class="card-title">精選商品 A</h5>
          <p class="card-text flex-grow-1">這是商品的簡短描述，吸引顧客點擊查看更多細節。</p>
          <p class="card-text"><strong class="text-primary fs-5">$49.99</strong></p>
          <a href="#" class="btn btn-success mt-auto align-self-start">加入購物車</a>
        </div>
      </div>
    </div>

    <!-- E-commerce Card 2 -->
    <div class="col">
      <div class="card h-100">
        <img src="https://picsum.photos/300/200?random=2" class="card-img-top" alt="Item Photo">
        <div class="card-body d-flex flex-column">
          <h5 class="card-title">熱銷商品 B</h5>
          <p class="card-text flex-grow-1">另一款熱門商品的介紹，強調其特色與優點。</p>
          <p class="card-text"><strong class="text-danger fs-5"><del class="text-muted me-1">$75.00</del>$65.00</strong></p>
          <div class="mt-auto">
             <a href="#" class="btn btn-outline-secondary btn-sm me-1">查看詳情</a>
             <a href="#" class="btn btn-warning btn-sm">立即購買</a>
          </div>
        </div>
      </div>
    </div>
  </div>

</div>
`;

// Data URI function for preview (NO JS needed for Cards)
const createDataUriForCardOnlyPreview = (htmlSnippet: string) => {
	const bootstrapCssLink = `<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">`;
	// NO JS Bundle included
	const fullHtml = `
    <!DOCTYPE html>
    <html> 
      <head> <meta charset="UTF-8"> <meta name="viewport" content="width=device-width, initial-scale=1.0"> ${bootstrapCssLink} 
             <style> body { padding: 1.5rem; background-color: #f8f9fa; } .card { box-shadow: 0 2px 4px rgba(0,0,0,0.1); } </style> </head>
      <body> ${htmlSnippet.replace(/<!--.*?-->/gs, "")} </body> 
    </html> 
  `;
	return `data:text/html;charset=utf-8,${encodeURIComponent(fullHtml)}`;
};

export default function Slide12() {
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

	const cardPreviewDataUri = createDataUriForCardOnlyPreview(cardOnlyExample);

	return (
		<SlideLayout currentSlide="12" courseName="lesson2">
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
									常用 Bootstrap 元件：卡片
								</h1>
								<h2 className="text-2xl text-tech-highlight/80">
									Card Component
								</h2>
							</div>

							{/* Card Explanation Only */}
							<div className="bg-[#1a1a1a] p-5 rounded-lg border border-blue-500/40 space-y-3">
								<h3 className="text-xl font-bold text-blue-400">卡片 (Card)</h3>
								<p className="text-gray-300 text-sm">
									一個彈性且可擴展的內容容器，用於呈現獨立的內容區塊，例如圖片、文字、列表、按鈕等。
								</p>
								<ul className="text-gray-300 text-sm list-disc pl-5 space-y-1">
									<li>
										基礎結構: 使用 <code>.card</code> 作為外層容器。
									</li>
									<li>
										內容區: <code>.card-body</code> 是最常用的內容區域。
									</li>
									<li>
										可選部分: <code>.card-header</code>,{" "}
										<code>.card-footer</code>, <code>.card-title</code>,{" "}
										<code>.card-subtitle</code>, <code>.card-text</code>,{" "}
										<code>.card-link</code>, <code>.card-img-top</code>{" "}
										等提供更多結構選項。
									</li>
									<li>
										Utility Classes: 可自由搭配工具類別 (間距、顏色、對齊等)
										進行客製化。
									</li>
								</ul>
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
								卡片應用範例
							</h3>
							<div className="flex-grow overflow-hidden">
								<CodeBlock
									code={cardOnlyExample}
									language="html"
									className="text-xs h-full"
								/>
							</div>
							<button
								onClick={() => setIsDialogOpen(true)}
								className="mt-auto flex-shrink-0 inline-flex items-center justify-center gap-1 px-3 py-1.5 border border-transparent text-xs font-medium rounded shadow-sm text-white bg-tech-highlight/70 hover:bg-tech-highlight focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-tech-highlight transition-colors"
							>
								<EyeIcon className="h-4 w-4" /> 顯示卡片效果預覽
							</button>
						</motion.div>
					</div>
				</div>
			</div>

			{/* Preview Dialog (No JS needed in iframe) */}
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
										卡片效果預覽 (Card Preview)
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
									{/* Conditional Layout: Iframe/Code based on previewWidth */}
									<div className="mt-2 flex-grow overflow-hidden">
										{previewWidth === "100%" ? (
											<div className="grid grid-cols-2 gap-4 h-full">
												{/* Left Column: Preview Iframe */}
												<div className="h-full overflow-auto bg-white rounded relative border border-gray-600">
													<iframe
														src={cardPreviewDataUri}
														title="Card Component Preview"
														className="w-full h-full border-0"
													></iframe>
												</div>
												{/* Right Column: Code Block */}
												<div className="h-full overflow-hidden bg-[#1a1a1a] rounded border border-gray-600">
													<CodeBlock
														code={cardOnlyExample}
														language="html"
														className="text-xs h-full"
													/>
												</div>
											</div>
										) : (
											// Single Column: Preview Iframe Only
											<div className="h-full overflow-auto bg-white rounded relative border border-gray-600">
												<iframe
													src={cardPreviewDataUri}
													title="Card Component Preview"
													className="w-full h-full border-0"
												></iframe>
											</div>
										)}
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
