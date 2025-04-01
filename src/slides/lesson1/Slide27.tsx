import SlideLayout from "../../layouts/SlideLayout";
import { motion } from "motion/react";

export default function Slide27() {
	return (
		<SlideLayout
			prevSlide="/lesson1/slide26"
			nextSlide="/lesson1/slide28"
			currentSlide={27}
			totalSlides={27}
			courseName="lesson1"
		>
			<div className="relative h-full flex flex-col justify-center">
				{/* Background Elements */}
				<div className="absolute inset-0 rounded-2xl bg-black/40 backdrop-blur-sm border border-tech-grid-bright" />

				{/* Content */}
				<div className="relative px-12 py-6">
					<div className="space-y-4 max-w-[1280px] mx-auto">
						{/* Title */}
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6 }}
						>
							<h1 className="text-3xl font-bold text-white mb-2">
								下載與安裝 VS Code
							</h1>
							<h2 className="text-xl text-tech-highlight/80">
								Download and Install Visual Studio Code
							</h2>
						</motion.div>

						<div className="grid grid-cols-2 gap-8">
							{/* Left Column - Download and Install */}
							<motion.div
								initial={{ opacity: 0, x: -20 }}
								animate={{ opacity: 1, x: 0 }}
								transition={{ duration: 0.6, delay: 0.2 }}
								className="space-y-4"
							>
								<div className="bg-[#1a1a1a] rounded-lg p-4">
									<h3 className="text-xl font-bold text-tech-highlight mb-3">
										下載步驟
									</h3>
									<ol className="list-decimal list-inside space-y-4 text-sm text-gray-300">
										<li>
											前往 VS Code 官方網站：
											<a
												href="https://code.visualstudio.com"
												target="_blank"
												rel="noopener noreferrer"
												className="text-blue-400 hover:text-blue-300"
											>
												https://code.visualstudio.com
											</a>
										</li>
										<li>
											點擊「Download for
											macOS」按鈕（根據您的作業系統會自動選擇對應版本）
										</li>
										<li>等待下載完成</li>
									</ol>
								</div>

								<div className="bg-[#1a1a1a] rounded-lg p-4">
									<h3 className="text-xl font-bold text-tech-highlight mb-3">
										安裝步驟
									</h3>
									<ol className="list-decimal list-inside space-y-4 text-sm text-gray-300">
										<li>
											開啟下載的 .dmg 檔案（macOS）或 .exe 檔案（Windows）
										</li>
										<li>
											將 VS Code 拖曳到 Applications
											資料夾（macOS）或按照安裝精靈指示（Windows）
										</li>
										<li>完成安裝後，從應用程式選單或開始選單啟動 VS Code</li>
									</ol>
								</div>
							</motion.div>

							{/* Right Column - Extensions */}
							<motion.div
								initial={{ opacity: 0, x: 20 }}
								animate={{ opacity: 1, x: 0 }}
								transition={{ duration: 0.6, delay: 0.4 }}
								className="space-y-4"
							>
								<div className="bg-[#1a1a1a] rounded-lg p-4">
									<h3 className="text-xl font-bold text-tech-highlight mb-3">
										推薦擴充功能
									</h3>
									<div className="space-y-4 text-sm text-gray-300">
										<div>
											<h4 className="text-lg font-bold text-tech-purple mb-2">
												基礎必裝
											</h4>
											<ul className="list-disc pl-4 space-y-2">
												<li>
													Chinese (Traditional) Language Pack - 中文語言包
												</li>
												<li>HTML CSS Support - HTML 和 CSS 的智能提示</li>
												<li>Auto Rename Tag - 自動重命名配對的 HTML 標籤</li>
												<li>Color Highlight - 顏色代碼視覺化</li>
											</ul>
										</div>

										<div>
											<h4 className="text-lg font-bold text-tech-purple mb-2">
												實用工具
											</h4>
											<ul className="list-disc pl-4 space-y-2">
												<li>Live Server - 即時預覽網頁</li>
												<li>Image preview - 圖片預覽</li>
												<li>Code Spell Checker - 英文拼字檢查</li>
												<li>Error Lens - 更清晰的錯誤提示</li>
											</ul>
										</div>

										<div>
											<h4 className="text-lg font-bold text-tech-purple mb-2">
												安裝方式
											</h4>
											<ol className="list-decimal list-inside space-y-2">
												<li>
													點擊左側工具列的擴充功能圖示（或按 Cmd+Shift+X）
												</li>
												<li>在搜尋框中輸入想要安裝的擴充功能名稱</li>
												<li>點擊「Install」按鈕進行安裝</li>
												<li>某些擴充功能可能需要重新啟動 VS Code 才能生效</li>
											</ol>
										</div>
									</div>
								</div>
							</motion.div>
						</div>
					</div>
				</div>

				{/* Decorative Elements */}
				<motion.div
					className="absolute -left-4 top-1/4 w-32 h-32 bg-tech-purple/20 blur-[64px] rounded-full"
					initial={{ opacity: 0, scale: 0.8 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ duration: 1 }}
				/>
				<motion.div
					className="absolute -right-4 bottom-1/4 w-32 h-32 bg-tech-highlight/20 blur-[64px] rounded-full"
					initial={{ opacity: 0, scale: 0.8 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ duration: 1, delay: 0.2 }}
				/>
			</div>
		</SlideLayout>
	);
}
