import SlideLayout from "../../layouts/SlideLayout";
import { motion } from "motion/react";
import { useState } from "react";
import {
	ComputerDesktopIcon,
	DeviceTabletIcon,
	DevicePhoneMobileIcon,
	TvIcon,
} from "@heroicons/react/24/outline";

// Define the target HTML structure for the preview
const cardLayoutExample = `
<div class="container mt-4">
  <div class="row">
    <!-- Card 1 -->
    <div class="col-md-4 mb-4">
      <div class="card h-100">
        <div class="card-body">
          <h5 class="card-title">卡片標題 1</h5>
          <p class="card-text">這是一些卡片內容的範例文字，用來填充空間。</p>
          <a href="#" class="btn btn-primary btn-sm">按鈕</a>
        </div>
      </div>
    </div>
    <!-- Card 2 -->
    <div class="col-md-4 mb-4">
      <div class="card h-100">
         <div class="card-body">
          <h5 class="card-title">卡片標題 2</h5>
          <p class="card-text">更多範例內容。</p>
          <a href="#" class="btn btn-primary btn-sm">按鈕</a>
        </div>
      </div>
    </div>
    <!-- Card 3 -->
    <div class="col-md-4 mb-4">
      <div class="card h-100">
        <div class="card-body">
          <h5 class="card-title">卡片標題 3</h5>
          <p class="card-text">這是第三張卡片的內容。</p>
           <a href="#" class="btn btn-primary btn-sm">按鈕</a>
        </div>
      </div>
    </div>
  </div>
</div>
`;

// Data URI function
const createDataUriForCardPreview = (htmlSnippet: string) => {
	const bootstrapLink = `<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">`;
	const fullHtml = `
    <!DOCTYPE html>
    <html> <head> <meta charset="UTF-8"> <meta name="viewport" content="width=device-width, initial-scale=1.0"> ${bootstrapLink} 
    <style> body { padding: 1rem; background-color: #f8f9fa; } .card { box-shadow: 0 2px 4px rgba(0,0,0,0.1); } </style> </head>
    <body> ${htmlSnippet.replace(/<!--.*?-->/gs, "")} </body> </html> 
  `; // Remove HTML comments for cleaner preview
	return `data:text/html;charset=utf-8,${encodeURIComponent(fullHtml)}`;
};

export default function Slide9() {
	// State for controlling preview width
	const [previewWidth, setPreviewWidth] = useState("100%");

	const cardPreviewDataUri = createDataUriForCardPreview(cardLayoutExample);

	return (
		<SlideLayout currentSlide="9" courseName="lesson2">
			<div className="relative h-full flex flex-col justify-center items-center px-4 md:px-12 py-8">
				{/* Background */}
				<div className="absolute inset-0 rounded-2xl bg-black/40 backdrop-blur-sm border border-tech-grid-bright" />

				{/* Content */}
				<div className="relative w-full max-w-5xl mx-auto text-center">
					{/* Title & Instructions */}
					<motion.div
						initial={{ opacity: 0, y: -20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6 }}
						className="mb-6"
					>
						<h1 className="text-4xl font-bold text-white mb-2">
							練習時間：三欄卡片佈局
						</h1>
						<p className="text-xl text-tech-highlight/80">
							使用 Bootstrap Grid System (<code>.container</code>,{" "}
							<code>.row</code>, <code>.col-md-4</code>) 實作以下效果：
						</p>
						<ul className="text-base text-white/80 list-disc list-inside inline-block text-left mt-2">
							<li>包含三張卡片 (Card)。</li>
							<li>
								在
								<strong className="text-tech-highlight">
									中型螢幕 (md) 或以上
								</strong>
								，卡片呈現為
								<strong className="text-tech-highlight">水平三欄</strong>。
							</li>
							<li>
								在
								<strong className="text-tech-highlight">
									手機尺寸 (小於 md)
								</strong>
								，卡片自動
								<strong className="text-tech-highlight">堆疊成垂直單欄</strong>
								。
							</li>
						</ul>
					</motion.div>

					{/* Preview Area */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.2 }}
						className="bg-[#1e1e1e] rounded-lg border border-tech-grid-bright/50 p-4 md:p-6 shadow-xl flex flex-col items-center"
					>
						<h3 className="text-lg font-medium leading-6 text-tech-highlight mb-3">
							預期結果預覽：
						</h3>
						{/* Width Controls */}
						<div className="mb-4 flex items-center justify-center gap-3 flex-wrap border-b border-gray-700 pb-3 w-full max-w-md">
							<span className="text-xs text-gray-400 mr-2">調整預覽寬度:</span>
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

						{/* Iframe Container with dynamic width */}
						<div
							className="w-full h-[55vh] md:h-[60vh] bg-white rounded mt-2 overflow-hidden border border-gray-700 transition-all duration-300 ease-in-out flex justify-center items-start"
							style={{ width: previewWidth }} // Apply width here
						>
							<iframe
								src={cardPreviewDataUri}
								title="Card Layout Preview"
								className="w-full h-full border-0 scale-[0.98] origin-top" // Scale down slightly to prevent scrollbars with padding
								sandbox="allow-scripts"
							></iframe>
						</div>
					</motion.div>
				</div>
			</div>
		</SlideLayout>
	);
}
