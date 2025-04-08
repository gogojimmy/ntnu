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
} from "@heroicons/react/24/outline";

const containerExample = `
// Regular container: Fixed width, responsive at breakpoints
<div class="container border border-primary p-3 mb-3">
  .container (固定寬度, breakpoints 響應)
</div>
`;

const containerFluidExample = `
// Fluid container: Full width always
<div class="container-fluid border border-success p-3 mb-3">
  .container-fluid (永遠 100% 寬度)
</div>
`;

const containerResponsiveExample = `
// Responsive container: Full width until 'lg' breakpoint
<div class="container-lg border border-warning p-3">
  .container-lg (直到 'lg' breakpoint 才變固定寬度)
</div>
`;

const createDataUriForContainerPreview = (htmlSnippet: string) => {
	const bootstrapLink = `<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">`;
	const fullHtml = `
    <!DOCTYPE html>
    <html> <head> <meta charset="UTF-8"> <meta name="viewport" content="width=device-width, initial-scale=1.0"> ${bootstrapLink} <style> body { padding: 1rem; background-color: #f8f9fa; } .border { margin-bottom: 1rem !important; min-height: 50px; /* Ensure containers have height */ display: flex; align-items: center; justify-content: center; font-size: 0.9rem;} </style> </head>
    <body> ${htmlSnippet.replace(/\/\/.*/g, "")} </body> </html>
  `;
	return `data:text/html;charset=utf-8,${encodeURIComponent(fullHtml)}`;
};

export default function Slide7() {
	const [openDialog, setOpenDialog] = useState<string | null>(null);
	const [previewWidth, setPreviewWidth] = useState<string>("100%");

	useEffect(() => {
		if (!openDialog) {
			const timer = setTimeout(() => setPreviewWidth("100%"), 300);
			return () => clearTimeout(timer);
		} else {
			setPreviewWidth("100%");
		}
	}, [openDialog]);

	const previewData: {
		[key: string]: { title: string; code: string; dataUri: string };
	} = {
		container: {
			title: ".container 預覽",
			code: containerExample,
			dataUri: createDataUriForContainerPreview(containerExample),
		},
		fluid: {
			title: ".container-fluid 預覽",
			code: containerFluidExample,
			dataUri: createDataUriForContainerPreview(containerFluidExample),
		},
		responsive: {
			title: ".container-lg 預覽",
			code: containerResponsiveExample,
			dataUri: createDataUriForContainerPreview(containerResponsiveExample),
		},
	};
	const currentPreview = openDialog ? previewData[openDialog] : null;

	return (
		<SlideLayout currentSlide="7">
			<div className="relative h-full flex flex-col justify-center">
				<div className="absolute inset-0 rounded-2xl bg-black/40 backdrop-blur-sm border border-tech-grid-bright" />

				<div className="relative px-12 py-8 max-w-6xl mx-auto w-full">
					<div className="space-y-6">
						<motion.div
							initial={{ opacity: 0, y: -20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6 }}
							className="text-center mb-8"
						>
							<h1 className="text-4xl font-bold text-white mb-2">
								Bootstrap 容器 (Container)
							</h1>
							<h2 className="text-2xl text-tech-highlight/80">
								佈局基礎與響應式設計 (RWD)
							</h2>
						</motion.div>

						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, delay: 0.1 }}
							className="bg-black/20 p-4 rounded-lg border border-tech-grid-bright/30 text-center"
						>
							<p className="text-lg text-white/90">
								Containers 是 Bootstrap 佈局的基石，用於
								<strong className="text-tech-highlight">
									包裹、置中、內縮
								</strong>
								網站內容。 它們也是實現響應式設計的核心。
							</p>
						</motion.div>

						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ duration: 0.5, delay: 0.2 }}
							className="grid grid-cols-1 md:grid-cols-3 gap-6"
						>
							<div className="bg-[#1a1a1a] p-5 rounded-lg border border-tech-purple/40 space-y-3 flex flex-col">
								<h3 className="text-xl font-bold text-tech-purple flex-shrink-0">
									.container
								</h3>
								<p className="text-gray-300 text-sm flex-grow">
									提供一個
									<strong className="text-tech-purple/80">
										響應式、固定寬度
									</strong>
									的容器。 它的 <code>max-width</code> 會在每個
									<a
										href="https://getbootstrap.com/docs/5.3/layout/breakpoints/"
										target="_blank"
										rel="noopener noreferrer"
										className="text-tech-highlight hover:underline"
									>
										預設 breakpoint
									</a>{" "}
									改變。
								</p>
								<CodeBlock
									code={containerExample}
									language="html"
									className="text-xs flex-shrink-0"
								/>
								<button
									onClick={() => setOpenDialog("container")}
									className="mt-auto flex-shrink-0 inline-flex items-center justify-center gap-1 px-3 py-1.5 border border-transparent text-xs font-medium rounded shadow-sm text-white bg-tech-highlight/70 hover:bg-tech-highlight focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-tech-highlight transition-colors"
								>
									<EyeIcon className="h-4 w-4" /> 顯示預覽
								</button>
							</div>

							<div className="bg-[#1a1a1a] p-5 rounded-lg border border-tech-green/40 space-y-3 flex flex-col">
								<h3 className="text-xl font-bold text-tech-green flex-shrink-0">
									.container-fluid
								</h3>
								<p className="text-gray-300 text-sm flex-grow">
									用於創建<strong className="text-tech-green/80">全寬度</strong>
									容器，橫跨整個 viewport 的寬度。 寬度始終是 <code>100%</code>
									。
								</p>
								<CodeBlock
									code={containerFluidExample}
									language="html"
									className="text-xs flex-shrink-0"
								/>
								<button
									onClick={() => setOpenDialog("fluid")}
									className="mt-auto flex-shrink-0 inline-flex items-center justify-center gap-1 px-3 py-1.5 border border-transparent text-xs font-medium rounded shadow-sm text-white bg-tech-highlight/70 hover:bg-tech-highlight focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-tech-highlight transition-colors"
								>
									<EyeIcon className="h-4 w-4" /> 顯示預覽
								</button>
							</div>

							<div className="bg-[#1a1a1a] p-5 rounded-lg border border-yellow-500/40 space-y-3 flex flex-col">
								<h3 className="text-xl font-bold text-yellow-500 flex-shrink-0">
									.container-{"{"}breakpoint{"}"}
								</h3>
								<p className="text-gray-300 text-sm flex-grow">
									例如 <code>.container-lg</code>。寬度是 <code>100%</code>
									<strong className="text-yellow-500/80">
										直到指定的 breakpoint
									</strong>{" "}
									(lg: 992px)，之後行為類似 <code>.container</code>。
								</p>
								<CodeBlock
									code={containerResponsiveExample}
									language="html"
									className="text-xs flex-shrink-0"
								/>
								<button
									onClick={() => setOpenDialog("responsive")}
									className="mt-auto flex-shrink-0 inline-flex items-center justify-center gap-1 px-3 py-1.5 border border-transparent text-xs font-medium rounded shadow-sm text-white bg-tech-highlight/70 hover:bg-tech-highlight focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-tech-highlight transition-colors"
								>
									<EyeIcon className="h-4 w-4" /> 顯示預覽
								</button>
							</div>
						</motion.div>

						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, delay: 0.3 }}
							className="bg-black/20 p-4 rounded-lg border border-tech-grid-bright/30 mt-6"
						>
							<h3 className="text-xl font-bold text-tech-highlight mb-2">
								響應式設計 (RWD) 關鍵
							</h3>
							<p className="text-white/90">
								Bootstrap 的 RWD 主要透過
								<strong className="text-tech-highlight">
									媒體查詢 (Media Queries)
								</strong>{" "}
								來實現。
								<code>.container</code> 的 <code>max-width</code>
								會根據螢幕寬度（對應到 sm, md, lg, xl, xxl
								breakpoints）自動調整，確保內容在不同裝置上都有最佳的可視範圍。
								使用 <code>.container-fluid</code> 則內容總是填滿螢幕寬度。
								響應式容器 <code>.container-xxl</code>{" "}
								等提供了更細緻的控制，允許內容在特定尺寸以下保持全寬。
							</p>
						</motion.div>
					</div>
				</div>
			</div>

			<Transition appear show={!!openDialog} as={Fragment}>
				<Dialog
					as="div"
					className="relative z-50"
					onClose={() => setOpenDialog(null)}
				>
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
									className="w-full max-w-6xl h-[75vh] transform overflow-hidden rounded-lg bg-[#1e1e1e] border border-tech-grid-bright/50 p-6 text-left align-middle shadow-xl transition-all flex flex-col"
									style={{
										width: previewWidth,
										transition: "width 0.3s ease-in-out",
									}}
								>
									<Dialog.Title
										as="h3"
										className="text-lg font-medium leading-6 text-tech-highlight mb-2 flex justify-between items-center flex-shrink-0"
									>
										{currentPreview?.title ?? "預覽"}
										<button
											onClick={() => setOpenDialog(null)}
											className="text-gray-400 hover:text-white"
										>
											<XMarkIcon className="h-6 w-6" />
										</button>
									</Dialog.Title>

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

									<div className="mt-2 flex-grow overflow-auto bg-white rounded relative">
										{currentPreview && (
											<iframe
												src={currentPreview.dataUri}
												title={currentPreview.title}
												className="w-full h-full border-0"
												sandbox="allow-scripts"
											></iframe>
										)}
									</div>

									<div className="mt-4 text-right flex-shrink-0">
										<button
											type="button"
											className="inline-flex justify-center rounded-md border border-transparent bg-tech-purple/80 px-4 py-2 text-sm font-medium text-white hover:bg-tech-purple focus:outline-none focus-visible:ring-2 focus-visible:ring-tech-purple focus-visible:ring-offset-2 focus-visible:ring-offset-tech-darker"
											onClick={() => setOpenDialog(null)}
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
