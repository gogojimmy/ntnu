import SlideLayout from "../../layouts/SlideLayout";
import { motion } from "motion/react";
import githubImage from "../../assets/github.png";

export default function Slide28() {
	return (
		<SlideLayout
			prevSlide="/lesson1/slide27"
			nextSlide="/lesson1/slide29"
			currentSlide={28}
			totalSlides={30}
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
								GitHub 介紹
							</h1>
							<h2 className="text-xl text-tech-highlight/80">
								Introduction to GitHub
							</h2>
						</motion.div>

						{/* GitHub Homepage Image */}
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, delay: 0.2 }}
							className="relative w-full h-[200px] mb-4 rounded-lg overflow-hidden"
						>
							<img
								src={githubImage}
								alt="GitHub Homepage"
								className="w-full h-full object-cover rounded-lg"
							/>
							<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
						</motion.div>

						<div className="grid grid-cols-2 gap-8">
							{/* Left Column - What is GitHub */}
							<motion.div
								initial={{ opacity: 0, x: -20 }}
								animate={{ opacity: 1, x: 0 }}
								transition={{ duration: 0.6, delay: 0.4 }}
								className="space-y-4"
							>
								<div className="bg-[#1a1a1a] rounded-lg p-4">
									<h3 className="text-xl font-bold text-tech-highlight mb-3">
										什麼是 GitHub？
									</h3>
									<div className="space-y-4 text-sm text-gray-300">
										<p>
											GitHub 是一個基於 Git 的程式碼託管平台，提供以下功能：
										</p>
										<ul className="list-disc pl-4 space-y-2">
											<li>程式碼版本控制</li>
											<li>團隊協作開發</li>
											<li>程式碼審查</li>
											<li>專案管理</li>
											<li>自動化部署</li>
										</ul>
									</div>
								</div>

								<div className="bg-[#1a1a1a] rounded-lg p-4">
									<h3 className="text-xl font-bold text-tech-highlight mb-3">
										為什麼要使用 GitHub？
									</h3>
									<ul className="list-disc pl-4 space-y-2 text-sm text-gray-300">
										<li>保存程式碼的歷史版本</li>
										<li>方便與團隊成員協作</li>
										<li>學習他人的程式碼</li>
										<li>建立個人作品集</li>
										<li>參與開源專案</li>
									</ul>
								</div>
							</motion.div>

							{/* Right Column - Getting Started */}
							<motion.div
								initial={{ opacity: 0, x: 20 }}
								animate={{ opacity: 1, x: 0 }}
								transition={{ duration: 0.6, delay: 0.6 }}
								className="space-y-4"
							>
								<div className="bg-[#1a1a1a] rounded-lg p-4">
									<h3 className="text-xl font-bold text-tech-highlight mb-3">
										開始使用 GitHub
									</h3>
									<div className="space-y-4 text-sm text-gray-300">
										<div>
											<h4 className="text-lg font-bold text-tech-purple mb-2">
												註冊帳號
											</h4>
											<ol className="list-decimal list-inside space-y-2">
												<li>
													前往 GitHub 官方網站：
													<a
														href="https://github.com"
														target="_blank"
														rel="noopener noreferrer"
														className="text-blue-400 hover:text-blue-300"
													>
														https://github.com
													</a>
												</li>
												<li>點擊「Sign up」按鈕</li>
												<li>填寫註冊資訊（用戶名、電子郵件、密碼）</li>
												<li>驗證電子郵件</li>
											</ol>
										</div>

										<div>
											<h4 className="text-lg font-bold text-tech-purple mb-2">
												基本概念
											</h4>
											<ul className="list-disc pl-4 space-y-2">
												<li>Repository（倉庫）：存放程式碼的空間</li>
												<li>Commit（提交）：保存程式碼的變更</li>
												<li>Branch（分支）：開發新功能的獨立空間</li>
												<li>Pull Request（拉取請求）：請求合併程式碼</li>
												<li>Issue（議題）：追蹤問題和任務</li>
											</ul>
										</div>

										<div>
											<h4 className="text-lg font-bold text-tech-purple mb-2">
												學習資源
											</h4>
											<ul className="list-disc pl-4 space-y-2">
												<li>
													<a
														href="https://docs.github.com/zh"
														target="_blank"
														rel="noopener noreferrer"
														className="text-blue-400 hover:text-blue-300"
													>
														GitHub 官方文件
													</a>
												</li>
												<li>
													<a
														href="https://guides.github.com/activities/hello-world/"
														target="_blank"
														rel="noopener noreferrer"
														className="text-blue-400 hover:text-blue-300"
													>
														GitHub 入門指南
													</a>
												</li>
												<li>
													<a
														href="https://www.youtube.com/playlist?list=PLg7s6cbtAD15G8lNyoaYDuKZSKyJrgwB-"
														target="_blank"
														rel="noopener noreferrer"
														className="text-blue-400 hover:text-blue-300"
													>
														GitHub 教學影片
													</a>
												</li>
											</ul>
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
