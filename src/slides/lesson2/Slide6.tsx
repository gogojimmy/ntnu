import SlideLayout from "../../layouts/SlideLayout";
import { motion } from "motion/react";
import CodeBlock from "../../components/CodeBlock";
import { useState, Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";

const bootstrapCdnExample = `
<!DOCTYPE html>
<html lang="zh-Hant">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Bootstrap 範例</title>

    <!-- 1. 引入 Bootstrap CSS CDN -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" 
          integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">

    <style>
        body { padding: 2rem; background-color: #fff; }
    </style>
</head>
<body>
    <div class="container">
        <h1 class="mb-4">歡迎使用 Bootstrap!</h1>
        <div class="row mb-3">
            <div class="col-md-6">
                <p>這是一個使用 Bootstrap 網格系統 (Grid System) 的欄位。</p>
            </div>
            <div class="col-md-6">
                <p>這是另一個欄位...</p>
            </div>
        </div>
        <button type="button" class="btn btn-primary">主要按鈕</button>
        <button type="button" class="btn btn-secondary ms-2">次要按鈕</button>
    </div>
</body>
</html>
`;

// Function to generate a data URI for the iframe src (for DIALOG preview)
const createDataUriForDialog = (
	bodyContent: string,
	headContent: string = ""
) => {
	const fullHtml = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      ${headContent}
      <style> body { padding: 1.5rem; background-color: #ffffff; font-family: sans-serif; } </style>
    </head>
    <body>
      ${bodyContent}
    </body>
    </html>
  `;
	return `data:text/html;charset=utf-8,${encodeURIComponent(fullHtml)}`;
};

export default function Slide6() {
	// State for dialog visibility
	const [isDialogOpen, setIsDialogOpen] = useState(false);

	// Extract body content for preview
	const bodyContentForPreview = (() => {
		const bodyMatch = bootstrapCdnExample.match(
			/<body[^>]*>([\s\S]*?)<\/body>/i
		);
		return bodyMatch && bodyMatch[1]
			? bodyMatch[1].trim()
			: "<div>範例載入錯誤</div>";
	})();

	// Create the data URI for the iframe preview inside the dialog
	const exampleDataUriForDialog = createDataUriForDialog(
		bodyContentForPreview,
		`<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">`
	);

	return (
		<SlideLayout currentSlide="6">
			<div className="flex flex-col h-full justify-center items-center px-16 py-8">
				<motion.div
					initial={{ opacity: 0, y: -20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					className="w-full max-w-4xl mb-6"
				>
					<h1 className="text-3xl font-bold text-white mb-2 text-center">
						Bootstrap CDN 使用範例
					</h1>
					<h2 className="text-xl text-tech-highlight/80 text-center">
						透過 CDN 引入框架
					</h2>
				</motion.div>

				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, delay: 0.2 }}
					className="bg-[#1a1a1a] rounded-lg border border-tech-purple/30 w-full max-w-4xl p-6 flex-grow flex flex-col mb-6"
				>
					<h3 className="text-xl font-bold text-tech-purple mb-3 flex-shrink-0">
						完整 HTML 範例
					</h3>
					<div className="flex-grow overflow-hidden">
						<CodeBlock
							code={bootstrapCdnExample}
							language="html"
							className="text-xs h-full"
						/>
					</div>
				</motion.div>

				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, delay: 0.4 }}
					className="text-center flex-shrink-0"
				>
					<button
						onClick={() => setIsDialogOpen(true)}
						className="inline-flex items-center px-6 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-tech-highlight hover:bg-tech-highlight/80 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-tech-darker focus:ring-tech-highlight transition-colors"
					>
						顯示預覽效果 (Dialog)
					</button>
				</motion.div>
			</div>

			<Transition appear show={isDialogOpen} as={Fragment}>
				<Dialog
					as="div"
					className="relative z-50"
					onClose={() => setIsDialogOpen(false)}
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
								<Dialog.Panel className="w-full max-w-4xl h-[70vh] transform overflow-hidden rounded-lg bg-[#1e1e1e] border border-tech-grid-bright/50 p-6 text-left align-middle shadow-xl transition-all flex flex-col">
									<Dialog.Title
										as="h3"
										className="text-lg font-medium leading-6 text-tech-highlight mb-4 flex justify-between items-center flex-shrink-0"
									>
										預覽效果 (Bootstrap CDN)
										<button
											onClick={() => setIsDialogOpen(false)}
											className="text-gray-400 hover:text-white focus:outline-none"
										>
											<XMarkIcon className="h-6 w-6" />
										</button>
									</Dialog.Title>
									<div className="mt-2 flex-grow overflow-hidden">
										<iframe
											src={exampleDataUriForDialog}
											title="Bootstrap CDN Example Preview (Dialog)"
											className="w-full h-full rounded border border-tech-grid-bright bg-white"
											sandbox="allow-scripts"
										></iframe>
									</div>
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
