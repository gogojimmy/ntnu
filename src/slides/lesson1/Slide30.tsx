import SlideLayout from "../../layouts/SlideLayout";
import { motion } from "motion/react";

export default function Slide30() {
	return (
		<SlideLayout
			prevSlide="/lesson1/slide29"
			nextSlide="/lesson1/slide31"
			currentSlide={30}
			totalSlides={31}
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
								上傳網站到 GitHub
							</h1>
							<h2 className="text-xl text-tech-highlight/80">
								Upload Your Website to GitHub
							</h2>
						</motion.div>

						<div className="grid grid-cols-2 gap-8">
							{/* Left Column - Steps */}
							<motion.div
								initial={{ opacity: 0, x: -20 }}
								animate={{ opacity: 1, x: 0 }}
								transition={{ duration: 0.6, delay: 0.2 }}
								className="space-y-4"
							>
								<div className="bg-[#1a1a1a] rounded-lg p-4">
									<h3 className="text-xl font-bold text-tech-highlight mb-3">
										步驟一：上傳檔案
									</h3>
									<ol className="list-decimal list-inside space-y-4 text-sm text-gray-300">
										<li className="space-y-2">
											<p className="font-semibold">進入儲存庫頁面</p>
											<ul className="list-disc pl-4 text-sm">
												<li>點擊「Add file」按鈕</li>
												<li>選擇「Upload files」</li>
											</ul>
										</li>
										<li className="space-y-2">
											<p className="font-semibold">選擇檔案</p>
											<ul className="list-disc pl-4 text-sm">
												<li>將你的 HTML、CSS 檔案拖曳到上傳區域</li>
												<li>或點擊「choose your files」選擇檔案</li>
												<li>主頁面必須命名為 index.html</li>
											</ul>
										</li>
										<li className="space-y-2">
											<p className="font-semibold">確認上傳</p>
											<ul className="list-disc pl-4 text-sm">
												<li>新增上傳說明（選填）</li>
												<li>點擊「Commit changes」確認上傳</li>
											</ul>
										</li>
									</ol>
								</div>

								<div className="bg-[#1a1a1a] rounded-lg p-4">
									<h3 className="text-xl font-bold text-tech-highlight mb-3">
										步驟二：啟用 GitHub Pages
									</h3>
									<ul className="list-disc pl-4 space-y-2 text-sm text-gray-300">
										<li>點擊儲存庫頁面上方的「Settings」</li>
										<li>左側選單找到「Pages」</li>
										<li>在「Branch」下拉選單選擇「main」</li>
										<li>點擊「Save」儲存設定</li>
										<li>等待幾分鐘後即可訪問你的網站</li>
									</ul>
								</div>
							</motion.div>

							{/* Right Column */}
							<motion.div
								initial={{ opacity: 0, x: 20 }}
								animate={{ opacity: 1, x: 0 }}
								transition={{ duration: 0.6, delay: 0.4 }}
								className="space-y-4"
							>
								<div className="bg-[#1a1a1a] rounded-lg p-4">
									<h3 className="text-xl font-bold text-tech-highlight mb-3">
										訪問你的網站
									</h3>
									<div className="space-y-4 text-sm text-gray-300">
										<p>你的網站網址格式為：</p>
										<div className="bg-black/30 p-3 rounded-md">
											<code>https://username.github.io</code>
										</div>
										<ul className="list-disc pl-4 space-y-2">
											<li>將 username 替換為你的 GitHub 帳號名稱</li>
											<li>首次部署可能需要等待 5-10 分鐘</li>
											<li>之後的更新通常在 1-2 分鐘內生效</li>
										</ul>
									</div>
								</div>

								<div className="bg-[#1a1a1a] rounded-lg p-4">
									<h3 className="text-xl font-bold text-tech-highlight mb-3">
										更新網站內容
									</h3>
									<div className="space-y-2 text-sm text-gray-300">
										<ul className="list-disc pl-4 space-y-2">
											<li>可以直接在 GitHub 網頁上編輯檔案</li>
											<li>或重複上傳步驟更新檔案</li>
											<li>每次更新後會自動重新部署</li>
											<li>記得定期備份你的原始檔案</li>
										</ul>
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
