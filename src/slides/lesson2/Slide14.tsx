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

// HTML for the E-commerce Exercise Layout
const ecommerceExerciseHtml = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>課堂練習 - 電商頁面</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
    <style>
        body { padding-top: 56px; /* Adjust based on navbar height */ }
        .hero-section { background-color: #e9ecef; padding: 4rem 2rem; margin-bottom: 2rem; border-radius: 0.3rem; }
        .product-card img { aspect-ratio: 4 / 3; object-fit: cover; }
        .product-list { padding-bottom: 3rem; }
    </style>
</head>
<body>

    <!-- 1. Navbar -->
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">電商網站</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">首頁</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">商品</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">關於</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">購物車</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <!-- 2. Hero Section -->
    <div class="container">
        <div class="hero-section text-center">
            <h1 class="display-5 fw-bold">夏季特賣</h1>
            <p class="col-lg-8 mx-auto fs-5 text-muted">
                把握機會，探索我們最新的夏季系列商品，享受獨家優惠！
            </p>
            <a href="#" class="btn btn-primary btn-lg">立即選購</a>
        </div>
    </div>

    <!-- 3. Product List -->
    <div class="container product-list">
        <h2 class="mb-4">熱銷商品</h2>
        <div class="row row-cols-2 row-cols-md-4 row-cols-lg-6 g-4">
            ${(() => {
							let cards = "";
							for (let i = 1; i <= 24; i++) {
								cards += `
            <div class="col">
                <div class="card h-100 product-card shadow-sm">
                    <img src="https://picsum.photos/200/150?random=${i}" class="card-img-top" alt="商品 ${i}">
                    <div class="card-body d-flex flex-column">
                        <h5 class="card-title fs-6">商品 ${i}</h5>
                        <p class="card-text small flex-grow-1">這是商品 ${i} 的簡短描述。</p>
                        <p class="card-text fw-bold text-end">$${(
													Math.random() * 100 +
													10
												).toFixed(2)}</p>
                        <a href="#" class="btn btn-sm btn-outline-secondary mt-auto align-self-center">查看詳情</a>
                    </div>
                </div>
            </div>
            `;
							}
							return cards;
						})()}
        </div>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
</body>
</html>
`;

// Data URI function for preview
const createDataUriForEcommercePreview = (htmlContent: string) => {
	// Basic HTML structure is already in the htmlContent
	return `data:text/html;charset=utf-8,${encodeURIComponent(htmlContent)}`;
};

export default function Slide14() {
	const [isDialogOpen, setIsDialogOpen] = useState(false);
	const [previewWidth, setPreviewWidth] = useState("100%");
	const [showAnswerCode, setShowAnswerCode] = useState(false);

	// Reset width when dialog opens/closes
	useEffect(() => {
		if (!isDialogOpen) {
			const timer = setTimeout(() => setPreviewWidth("100%"), 300); // Delay reset to allow closing animation
			return () => clearTimeout(timer);
		} else {
			setPreviewWidth("100%"); // Reset to default when opening
		}
	}, [isDialogOpen]);

	const previewDataUri = createDataUriForEcommercePreview(
		ecommerceExerciseHtml
	);

	return (
		<SlideLayout currentSlide="14" courseName="lesson2">
			<div className="relative h-full flex flex-col justify-center">
				<div className="absolute inset-0 rounded-2xl bg-black/40 backdrop-blur-sm border border-tech-grid-bright" />
				<div className="relative px-12 py-8 max-w-7xl mx-auto w-full">
					{" "}
					{/* Increased max-width */}
					<div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
						{/* Left Column: Exercise Description */}
						<motion.div
							initial={{ opacity: 0, x: -20 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.6, delay: 0.1 }}
							className="space-y-6"
						>
							<div className="text-center md:text-left">
								<h1 className="text-4xl font-bold text-white mb-2">
									課堂練習：基礎電商頁面
								</h1>
								<h2 className="text-2xl text-tech-highlight/80">
									Exercise: Basic E-commerce Layout
								</h2>
							</div>

							<div className="bg-[#1a1a1a] p-5 rounded-lg border border-green-500/40 space-y-3">
								<h3 className="text-xl font-bold text-green-400">練習目標</h3>
								<p className="text-gray-300 text-sm">
									使用 Bootstrap
									提供的元件與格線系統，建構一個具有基本結構與響應式設計 (RWD)
									的電商網站頁面。
								</p>
								<h4 className="text-lg font-semibold text-gray-200 pt-2">
									頁面結構要求：
								</h4>
								<ul className="text-gray-300 text-sm list-decimal pl-5 space-y-1">
									<li>
										<strong className="text-yellow-400">Navbar:</strong>{" "}
										頂部固定導覽列 (<code>.navbar</code>,{" "}
										<code>.fixed-top</code>)。
									</li>
									<li>
										<strong className="text-yellow-400">Hero Section:</strong>{" "}
										導覽列下方的大型橫幅區塊。
									</li>
									<li>
										<strong className="text-yellow-400">Product List:</strong>{" "}
										使用卡片 (<code>.card</code>) 展示商品列表。
									</li>
								</ul>
								<h4 className="text-lg font-semibold text-gray-200 pt-2">
									響應式設計 (RWD) 要求：
								</h4>
								<p className="text-gray-300 text-sm">
									商品列表需滿足以下欄位數：
								</p>
								<ul className="text-gray-300 text-sm list-disc pl-5 space-y-1">
									<li>
										手機 (預設): 每行 2 個商品 (<code>.row-cols-2</code>)
									</li>
									<li>
										平板 (md): 每行 4 個商品 (<code>.row-cols-md-4</code>)
									</li>
									<li>
										桌機 (lg): 每行 6 個商品 (<code>.row-cols-lg-6</code>)
									</li>
								</ul>
								<p className="text-gray-300 text-sm pt-2">
									總共需顯示 24 個商品卡片。可使用{" "}
									<code>https://picsum.photos/</code> 作為圖片來源。
								</p>
							</div>
						</motion.div>

						{/* Right Column: Show Answer Button & Conditional Code Block */}
						<motion.div
							initial={{ opacity: 0, x: 20 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.6, delay: 0.2 }}
							className="bg-[#1a1a1a] p-5 rounded-lg border border-gray-700 space-y-4 h-[60vh] flex flex-col" // Adjusted spacing and height
						>
							<h3 className="text-xl font-bold text-gray-300 flex-shrink-0">
								HTML 參考解答
							</h3>

							{/* Toggle Answer Button */}
							<button
								onClick={() => setShowAnswerCode(!showAnswerCode)}
								className="flex-shrink-0 w-full text-center px-3 py-1.5 border border-transparent text-sm font-medium rounded shadow-sm text-white bg-yellow-600/80 hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-yellow-500 transition-colors"
							>
								{showAnswerCode ? "隱藏答案" : "看答案"}
							</button>

							{/* Conditional Code Block */}
							<div
								className={`flex-grow overflow-hidden transition-opacity duration-300 ${
									showAnswerCode ? "opacity-100" : "opacity-0"
								}`}
							>
								{showAnswerCode && (
									<CodeBlock
										code={ecommerceExerciseHtml}
										language="html"
										className="text-xs h-full"
									/>
								)}
							</div>

							{/* Preview Button - Moved to bottom */}
							<button
								onClick={() => setIsDialogOpen(true)}
								className="mt-auto flex-shrink-0 inline-flex items-center justify-center gap-1 px-3 py-1.5 border border-transparent text-xs font-medium rounded shadow-sm text-white bg-tech-highlight/70 hover:bg-tech-highlight focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-tech-highlight transition-colors"
							>
								<EyeIcon className="h-4 w-4" /> 顯示預期效果預覽
							</button>
						</motion.div>
					</div>
				</div>
			</div>

			{/* Preview Dialog - Modified to only show iframe */}
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
										電商頁面預覽 (E-commerce Preview)
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
											title="E-commerce Exercise Preview"
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
