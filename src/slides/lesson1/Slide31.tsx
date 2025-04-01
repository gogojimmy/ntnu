import SlideLayout from "../../layouts/SlideLayout";
import { motion } from "motion/react";

export default function Slide31() {
	return (
		<SlideLayout
			prevSlide="/lesson1/slide30"
			currentSlide="31"
			totalSlides="31"
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
								GitHub Pages 介紹
							</h1>
							<h2 className="text-xl text-tech-highlight/80">
								Introduction to GitHub Pages
							</h2>
						</motion.div>

						<div className="grid grid-cols-2 gap-8">
							{/* Left Column */}
							<motion.div
								initial={{ opacity: 0, x: -20 }}
								animate={{ opacity: 1, x: 0 }}
								transition={{ duration: 0.6, delay: 0.2 }}
								className="space-y-4"
							>
								<div className="bg-[#1a1a1a] rounded-lg p-4">
									<h3 className="text-xl font-bold text-tech-highlight mb-3">
										什麼是 GitHub Pages？
									</h3>
									<div className="space-y-4 text-sm text-gray-300">
										<p>
											GitHub Pages 是 GitHub 提供的免費網站託管服務，讓你可以：
										</p>
										<ul className="list-disc pl-4 space-y-2">
											<li>直接從 GitHub 儲存庫發布網站</li>
											<li>展示個人或組織的作品集</li>
											<li>建立專案文件網站</li>
											<li>分享靜態網頁內容</li>
										</ul>
									</div>
								</div>

								<div className="bg-[#1a1a1a] rounded-lg p-4">
									<h3 className="text-xl font-bold text-tech-highlight mb-3">
										GitHub Pages 的特點
									</h3>
									<ul className="list-disc pl-4 space-y-2 text-sm text-gray-300">
										<li>完全免費的網站託管</li>
										<li>自動支援 HTTPS 安全連線</li>
										<li>可使用自訂網域名稱</li>
										<li>支援 Jekyll 靜態網站生成器</li>
										<li>直接從儲存庫自動部署</li>
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
										使用情境
									</h3>
									<div className="space-y-4 text-sm text-gray-300">
										<ul className="list-disc pl-4 space-y-2">
											<li>個人網站或部落格</li>
											<li>作品集展示</li>
											<li>專案說明文件</li>
											<li>課程作業繳交</li>
											<li>小型靜態網站</li>
										</ul>
									</div>
								</div>

								<div className="bg-[#1a1a1a] rounded-lg p-4">
									<h3 className="text-xl font-bold text-tech-highlight mb-3">
										學習資源
									</h3>
									<div className="space-y-4 text-sm text-gray-300">
										<p>我們準備了詳細的教學文件，包含：</p>
										<ul className="list-disc pl-4 space-y-2">
											<li>VS Code 安裝與設定</li>
											<li>GitHub 帳號註冊</li>
											<li>GitHub Pages 設定步驟</li>
											<li>網站部署流程</li>
										</ul>
										<div className="mt-4">
											<a
												href="https://gogojimmy.notion.site/VSCode-Github-1c87c33e7e5a80ccb174d24528be5506"
												target="_blank"
												rel="noopener noreferrer"
												className="inline-block bg-tech-highlight/20 hover:bg-tech-highlight/30 text-tech-highlight px-4 py-2 rounded-lg transition-colors duration-200"
											>
												👉 點此查看完整教學文件
											</a>
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
