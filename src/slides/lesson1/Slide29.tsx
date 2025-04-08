import SlideLayout from "../../layouts/SlideLayout";
import { motion } from "motion/react";

export default function Slide29() {
	return (
		<SlideLayout currentSlide="29">
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
								部署網站到 GitHub Pages
							</h1>
							<h2 className="text-xl text-tech-highlight/80">
								Deploy Your Website to GitHub Pages
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
										步驟一：建立 GitHub 帳號
									</h3>
									<ol className="list-decimal list-inside space-y-4 text-sm text-gray-300">
										<li className="space-y-2">
											<p className="font-semibold">前往 GitHub 官網</p>
											<ul className="list-disc pl-4 text-sm">
												<li>開啟瀏覽器訪問 github.com</li>
												<li>點擊右上角的「Sign up」按鈕</li>
											</ul>
										</li>
										<li className="space-y-2">
											<p className="font-semibold">填寫註冊資訊</p>
											<ul className="list-disc pl-4 text-sm">
												<li>輸入電子郵件</li>
												<li>設定密碼</li>
												<li>選擇使用者名稱</li>
											</ul>
										</li>
									</ol>
								</div>

								<div className="bg-[#1a1a1a] rounded-lg p-4">
									<h3 className="text-xl font-bold text-tech-highlight mb-3">
										步驟二：建立新的儲存庫
									</h3>
									<ul className="list-disc pl-4 space-y-2 text-sm text-gray-300">
										<li>登入後點擊右上角的 + 號</li>
										<li>選擇「New repository」</li>
										<li>儲存庫名稱格式：username.github.io</li>
										<li>選擇「Public」公開儲存庫</li>
										<li>點擊「Create repository」</li>
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
										重要提醒
									</h3>
									<div className="space-y-4 text-sm text-gray-300">
										<ul className="list-disc pl-4 space-y-2">
											<li>儲存庫名稱必須是 username.github.io</li>
											<li>username 要和你的 GitHub 帳號名稱完全相同</li>
											<li>
												例如：如果你的帳號是 john，儲存庫名稱就是 john.github.io
											</li>
										</ul>
									</div>
								</div>

								<div className="bg-[#1a1a1a] rounded-lg p-4">
									<h3 className="text-xl font-bold text-tech-highlight mb-3">
										GitHub Pages 的優點
									</h3>
									<div className="space-y-2 text-sm text-gray-300">
										<ul className="list-disc pl-4 space-y-2">
											<li>完全免費的網站託管服務</li>
											<li>自動配置 HTTPS 安全連線</li>
											<li>簡單易用，無需複雜設定</li>
											<li>可以使用自訂網域名稱</li>
											<li>適合展示個人作品集和專案</li>
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
