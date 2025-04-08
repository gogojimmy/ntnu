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

// --- Minimal CSS for IG Story Simulation (Leveraging Bootstrap Utilities) ---
const igStoryCss = `
/* Scrollbar is now visible by default */

/* Fixed width for consistent item size */
.story-item {
  width: 80px; 
}

/* Gradient border effect (Requires custom CSS) */
.story-avatar-wrapper {
  width: 66px;
  height: 66px;
  padding: 3px; /* Space for the gradient */
  background: linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%);
}

/* Inner white border for avatar (Requires custom CSS) */
.story-avatar {
  border: 2px solid #fff; 
}
`;

// --- HTML for IG Story Simulation (Using More Bootstrap Utilities) ---
const igStoryExerciseHtml = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>IG Story List Simulation</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" 
          rel="stylesheet" 
          integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" 
          crossorigin="anonymous">
    <style>
      body { margin: 0; background-color: #fafafa; } /* Basic body styling */
      ${igStoryCss} /* Minimal custom CSS */
    </style>
</head>
<body>

<!-- Outer container (Bootstrap) -->
<div class="container bg-white border-bottom py-3">
  <!-- Scrollable container (Bootstrap utilities) -->
  <div class="stories-container overflow-x-auto text-nowrap ps-1 pe-1">
      ${(() => {
				let items = "";
				const usernames = [
					"coding_pro",
					"dev_master",
					"react_fan",
					"css_wizard",
					"js_ninja",
					"ui_designer",
					"ux_guru",
					"server_side",
					"cloud_expert",
					"ai_lover",
					"bootstrap_5",
					"tailwind_css",
					"frontend_dev",
					"backend_eng",
					"full_stack",
					"data_sci",
					"ml_engineer",
					"game_dev",
					"mobile_app",
					"web_world",
				];
				for (let i = 0; i < 20; i++) {
					const userId = Math.floor(Math.random() * 1000);
					items += `
      <!-- Story Item (Bootstrap layout + custom width class) -->
      <div class="story-item d-inline-block text-center mx-1 align-top">
        <!-- Gradient wrapper (Custom CSS class) -->
        <div class="story-avatar-wrapper rounded-circle mx-auto mb-1">
          <!-- Avatar img (Bootstrap utils + custom border class) -->
          <img src="https://picsum.photos/id/${userId}/60/60" 
               alt="User ${i + 1} avatar" 
               class="story-avatar rounded-circle w-100 h-100 object-fit-cover">
        </div>
        <!-- Username (Bootstrap text utils) -->
        <p class="story-username small text-truncate">${
					usernames[i % usernames.length]
				}</p>
      </div>
      `;
				}
				return items;
			})()}
  </div>
</div>

<!-- Optional: Some content below -->
<div class="container mt-4">
  <p>Page content below the story list...</p>
</div>

<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
</body>
</html>
`;

// Data URI function for preview
const createDataUriForIgStoryPreview = (htmlContent: string) => {
	return `data:text/html;charset=utf-8,${encodeURIComponent(htmlContent)}`;
};

export default function Lesson2Slide17() {
	const [isDialogOpen, setIsDialogOpen] = useState(false);
	const [previewWidth, setPreviewWidth] = useState("100%");
	const [showAnswerCode, setShowAnswerCode] = useState(false);

	// Reset width when dialog opens/closes
	useEffect(() => {
		if (!isDialogOpen) {
			const timer = setTimeout(() => setPreviewWidth("100%"), 300);
			return () => clearTimeout(timer);
		} else {
			setPreviewWidth("100%");
		}
	}, [isDialogOpen]);

	const previewDataUri = createDataUriForIgStoryPreview(igStoryExerciseHtml);

	return (
		<SlideLayout currentSlide="17" courseName="lesson2">
			<div className="relative h-full flex flex-col justify-center">
				<div className="absolute inset-0 rounded-2xl bg-black/40 backdrop-blur-sm border border-tech-grid-bright" />
				<div className="relative px-12 py-8 max-w-7xl mx-auto w-full">
					<div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
						{/* Left Column: Exercise Description - UPDATED HINTS */}
						<motion.div
							initial={{ opacity: 0, x: -20 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.6, delay: 0.1 }}
							className="space-y-5"
						>
							<div className="text-center md:text-left">
								<h1 className="text-4xl font-bold text-white mb-2">
									課堂練習：模擬 IG 限動列表
								</h1>
								<h2 className="text-2xl text-tech-highlight/80">
									Exercise: Simulate Instagram Story List
								</h2>
							</div>

							<div className="bg-[#1a1a1a] p-5 rounded-lg border border-pink-500/40 space-y-3">
								<h3 className="text-xl font-bold text-pink-400">練習目標</h3>
								<p className="text-gray-300 text-sm">
									使用 Bootstrap 的基本樣式搭配少量自訂 CSS，模擬 Instagram (IG)
									限時動態列表的水平滾動外觀。
								</p>
								<h4 className="text-lg font-semibold text-gray-200 pt-2">
									製作提示 (優先使用 Bootstrap)：
								</h4>
								<ul className="text-gray-300 text-sm list-disc pl-5 space-y-2">
									<li>
										<strong className="text-yellow-400">外層容器:</strong> 使用{" "}
										<code>.container</code> 限制最大寬度，並加上{" "}
										<code>.bg-white</code>, <code>.border-bottom</code>,{" "}
										<code>.py-3</code>。
									</li>
									<li>
										<strong className="text-yellow-400">滾動容器:</strong>{" "}
										在外層容器內，使用{" "}
										<code>&lt;div class="overflow-x-auto text-nowrap"&gt;</code>{" "}
										啟用水平滾動並防止換行。
									</li>
									<li>
										<strong className="text-yellow-400">項目排列:</strong>{" "}
										每個限動項目使用 <code>.d-inline-block</code>,{" "}
										<code>.text-center</code>, <code>.mx-1</code> (或{" "}
										<code>.mx-2</code>), <code>.align-top</code>。
									</li>
									<li>
										<strong className="text-yellow-400">頭像圖片:</strong> 使用{" "}
										<code>&lt;img&gt;</code> 加上 <code>.rounded-circle</code>,{" "}
										<code>.w-100</code>, <code>.h-100</code>,{" "}
										<code>.object-fit-cover</code>。
									</li>
									<li>
										<strong className="text-yellow-400">使用者名稱:</strong>{" "}
										使用 <code>&lt;p&gt;</code> 加上 <code>.small</code> 和{" "}
										<code>.text-truncate</code>。
									</li>
									<li>
										<strong className="text-yellow-400">必要自訂 CSS:</strong>
										<ul className="list-inside list-['-_'] pl-4 text-gray-400 text-xs mt-1 space-y-1">
											<li>
												為項目設定固定寬度 (例如{" "}
												<code>
													.story-item {"{"} width: 80px; {"}"}
												</code>
												)。
											</li>
											<li>
												建立漸層邊框效果：需要一個 wrapper{" "}
												<code>&lt;div&gt;</code> (套用{" "}
												<code>.rounded-circle .mx-auto .mb-1</code>
												)，並為其添加自訂 CSS class (如{" "}
												<code>.story-avatar-wrapper</code>) 以設定固定大小、
												<code>padding</code> 與 <code>background</code> 漸層。
											</li>
											<li>
												頭像內層白邊：為 <code>&lt;img&gt;</code> 添加自訂 class
												(如 <code>.story-avatar</code>) 並設定{" "}
												<code>border: 2px solid white;</code>。
											</li>
											<li>(可選) 隱藏滾動條的 CSS。</li>
										</ul>
									</li>
									<li>
										<strong className="text-yellow-400">圖片來源:</strong>{" "}
										可繼續使用 <code>https://picsum.photos/</code>。
									</li>
								</ul>
							</div>
						</motion.div>

						{/* Right Column: Answer Button & Conditional Code Block - UPDATED */}
						<motion.div
							initial={{ opacity: 0, x: 20 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.6, delay: 0.2 }}
							className="bg-[#1a1a1a] p-5 rounded-lg border border-gray-700 space-y-4 h-[60vh] flex flex-col"
						>
							<h3 className="text-xl font-bold text-gray-300 flex-shrink-0">
								HTML / CSS 參考解答
							</h3>

							{/* Toggle Answer Button */}
							<button
								onClick={() => setShowAnswerCode(!showAnswerCode)}
								className="flex-shrink-0 w-full text-center px-3 py-1.5 border border-transparent text-sm font-medium rounded shadow-sm text-white bg-yellow-600/80 hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-yellow-500 transition-colors"
							>
								{showAnswerCode ? "隱藏答案" : "看答案"}
							</button>

							{/* Conditional Code Blocks - Adjusted */}
							<div
								className={`flex-grow overflow-auto transition-opacity duration-300 ${
									showAnswerCode ? "opacity-100" : "opacity-0"
								}`}
							>
								{showAnswerCode && (
									<CodeBlock
										code={igStoryExerciseHtml} // Updated HTML with more utilities
										language="html"
										className="text-xs h-auto mb-2"
									/>
								)}
								{showAnswerCode && (
									<p className="text-xs text-gray-400 mt-2">必要自訂 CSS:</p>
								)}
								{showAnswerCode && (
									<CodeBlock
										code={igStoryCss} // Updated minimal CSS
										language="css"
										className="text-xs h-auto"
									/>
								)}
							</div>

							{/* Preview Button */}
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
										IG 限動列表模擬預覽
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
											title="IG Story Simulation Preview"
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
