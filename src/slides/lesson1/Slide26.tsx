import SlideLayout from "../../layouts/SlideLayout";
import { motion } from "motion/react";
import { useEffect, useState } from "react";

export default function Slide26() {
	const [countdown, setCountdown] = useState({
		days: 0,
		hours: 0,
		minutes: 0,
		seconds: 0,
	});

	useEffect(() => {
		const deadline = new Date("2025-04-07T23:59:59");

		const updateCountdown = () => {
			const now = new Date();
			const diff = deadline.getTime() - now.getTime();

			if (diff > 0) {
				const days = Math.floor(diff / (1000 * 60 * 60 * 24));
				const hours = Math.floor(
					(diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
				);
				const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
				const seconds = Math.floor((diff % (1000 * 60)) / 1000);

				setCountdown({ days, hours, minutes, seconds });
			}
		};

		updateCountdown();
		const timer = setInterval(updateCountdown, 1000);

		return () => clearInterval(timer);
	}, []);

	return (
		<SlideLayout
			prevSlide="/lesson1/slide25"
			nextSlide="/lesson1/slide27"
			currentSlide="26"
			totalSlides="31"
			courseName="NTNU Web Development Course"
		>
			<div className="relative h-full flex flex-col justify-center">
				{/* Background Elements */}
				<div className="absolute inset-0 rounded-2xl bg-black/40 backdrop-blur-sm border border-tech-grid-bright" />

				{/* Deadline Notice */}
				<motion.div
					className="absolute top-6 right-8 bg-gradient-to-r from-red-500/80 to-orange-500/80 px-8 py-4 rounded-lg border-2 border-red-400 shadow-lg backdrop-blur-sm z-10"
					animate={{
						scale: [1, 1.02, 1],
						rotate: [-1, 1, -1],
						boxShadow: [
							"0 0 0 0 rgba(239, 68, 68, 0)",
							"0 0 30px 15px rgba(239, 68, 68, 0.3)",
							"0 0 0 0 rgba(239, 68, 68, 0)",
						],
					}}
					transition={{
						duration: 2,
						repeat: Infinity,
						ease: "easeInOut",
					}}
				>
					<div className="flex flex-col">
						<div>
							<div className="text-white font-bold text-lg mb-1">
								作業繳交期限
							</div>
							<div className="text-white text-3xl font-black">4/7 23:59</div>
						</div>
						<div className="mt-2">
							<div className="text-white/80 text-lg">
								倒數 {countdown.days}天{countdown.hours}時{countdown.minutes}分
								{countdown.seconds}秒
							</div>
						</div>
					</div>
				</motion.div>

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
								課程作業：註冊頁面實作
							</h1>
							<h2 className="text-xl text-tech-highlight/80">
								Course Assignment: Registration Page Implementation
							</h2>
						</motion.div>

						<div className="grid grid-cols-2 gap-8">
							{/* Left Column - Assignment Requirements */}
							<motion.div
								initial={{ opacity: 0, x: -20 }}
								animate={{ opacity: 1, x: 0 }}
								transition={{ duration: 0.6, delay: 0.2 }}
								className="space-y-4"
							>
								<div className="bg-[#1a1a1a] rounded-lg p-4">
									<h3 className="text-xl font-bold text-tech-highlight mb-3">
										作業要求
									</h3>
									<div className="space-y-4 text-sm text-gray-300">
										<div>
											<h4 className="text-lg font-bold text-tech-purple mb-2">
												HTML 結構要求
											</h4>
											<ul className="list-disc pl-4 space-y-2">
												<li>
													使用語意化標籤（nav、main、footer 等）建立頁面結構
												</li>
												<li>
													表單需包含以下欄位：
													<ul className="list-disc pl-4 mt-1">
														<li>使用者名稱（必填）</li>
														<li>電子郵件（必填，需驗證格式）</li>
														<li>密碼（必填，需確認密碼）</li>
														<li>生日（date input）</li>
														<li>性別（radio buttons）</li>
														<li>興趣（checkboxes）</li>
														<li>自我介紹（textarea）</li>
													</ul>
												</li>
												<li>需加入適當的 label 標籤</li>
											</ul>
										</div>

										<div>
											<h4 className="text-lg font-bold text-tech-purple mb-2">
												CSS 樣式要求
											</h4>
											<ul className="list-disc pl-4 space-y-2">
												<li>使用 Flexbox 進行頁面布局</li>
												<li>設計基本的輸入框樣式</li>
												<li>確保表單元素對齊整齊</li>
												<li>保持適當的間距和留白</li>
											</ul>
										</div>

										<div>
											<h4 className="text-lg font-bold text-tech-purple mb-2">
												進階要求
											</h4>
											<ul className="list-disc pl-4 space-y-2">
												<li>使用 fieldset 分組表單元素</li>
												<li>
													實現響應式設計：
													<ul className="list-disc pl-4 mt-1">
														<li>桌面版：兩欄式布局</li>
														<li>平板/手機版：單欄式布局</li>
													</ul>
												</li>
												<li>加入適當的 hover/focus 效果</li>
												<li>使用漸變色作為背景</li>
												<li>加入陰影效果增加層次感</li>
												<li>加入表單驗證提示效果</li>
												<li>實現密碼強度指示器</li>
												<li>加入動畫效果提升使用體驗</li>
												<li>確保頁面具有良好的可訪問性</li>
											</ul>
										</div>
									</div>
								</div>
							</motion.div>

							{/* Right Column - Visual Demo */}
							<motion.div
								initial={{ opacity: 0, x: 20 }}
								animate={{ opacity: 1, x: 0 }}
								transition={{ duration: 0.6, delay: 0.4 }}
								className="space-y-4"
							>
								<div className="bg-gradient-to-br from-tech-purple/20 to-tech-highlight/20 rounded-lg p-6 backdrop-blur-sm">
									<form className="space-y-6">
										<div className="text-2xl font-bold text-white mb-6">
											建立新帳號
										</div>

										{/* Basic Info */}
										<div className="grid grid-cols-2 gap-4">
											<div className="space-y-2">
												<label className="block text-sm font-medium text-gray-300">
													使用者名稱
												</label>
												<input
													type="text"
													className="w-full px-3 py-2 bg-black/30 border border-tech-purple/30 rounded-lg focus:ring-2 focus:ring-tech-purple/50 text-white"
													placeholder="請輸入使用者名稱"
												/>
											</div>
											<div className="space-y-2">
												<label className="block text-sm font-medium text-gray-300">
													電子郵件
												</label>
												<input
													type="email"
													className="w-full px-3 py-2 bg-black/30 border border-tech-purple/30 rounded-lg focus:ring-2 focus:ring-tech-purple/50 text-white"
													placeholder="your@email.com"
												/>
											</div>
										</div>

										{/* Password */}
										<div className="grid grid-cols-2 gap-4">
											<div className="space-y-2">
												<label className="block text-sm font-medium text-gray-300">
													密碼
												</label>
												<input
													type="password"
													className="w-full px-3 py-2 bg-black/30 border border-tech-purple/30 rounded-lg focus:ring-2 focus:ring-tech-purple/50 text-white"
													placeholder="••••••••"
												/>
												<div className="h-1 bg-black/30 rounded-full overflow-hidden">
													<div className="w-2/3 h-full bg-gradient-to-r from-red-500 via-yellow-500 to-green-500" />
												</div>
											</div>
											<div className="space-y-2">
												<label className="block text-sm font-medium text-gray-300">
													確認密碼
												</label>
												<input
													type="password"
													className="w-full px-3 py-2 bg-black/30 border border-tech-purple/30 rounded-lg focus:ring-2 focus:ring-tech-purple/50 text-white"
													placeholder="••••••••"
												/>
											</div>
										</div>

										{/* Personal Info */}
										<div className="space-y-4">
											<div className="space-y-2">
												<label className="block text-sm font-medium text-gray-300">
													生日
												</label>
												<input
													type="date"
													className="w-full px-3 py-2 bg-black/30 border border-tech-purple/30 rounded-lg focus:ring-2 focus:ring-tech-purple/50 text-white"
												/>
											</div>

											<fieldset className="space-y-2">
												<legend className="text-sm font-medium text-gray-300">
													性別
												</legend>
												<div className="flex gap-4">
													<label className="flex items-center">
														<input
															type="radio"
															name="gender"
															className="text-tech-purple focus:ring-tech-purple/50"
														/>
														<span className="ml-2 text-sm text-gray-300">
															男
														</span>
													</label>
													<label className="flex items-center">
														<input
															type="radio"
															name="gender"
															className="text-tech-purple focus:ring-tech-purple/50"
														/>
														<span className="ml-2 text-sm text-gray-300">
															女
														</span>
													</label>
													<label className="flex items-center">
														<input
															type="radio"
															name="gender"
															className="text-tech-purple focus:ring-tech-purple/50"
														/>
														<span className="ml-2 text-sm text-gray-300">
															其他
														</span>
													</label>
												</div>
											</fieldset>

											<fieldset className="space-y-2">
												<legend className="text-sm font-medium text-gray-300">
													興趣
												</legend>
												<div className="grid grid-cols-2 gap-2">
													<label className="flex items-center">
														<input
															type="checkbox"
															className="text-tech-purple focus:ring-tech-purple/50"
														/>
														<span className="ml-2 text-sm text-gray-300">
															程式設計
														</span>
													</label>
													<label className="flex items-center">
														<input
															type="checkbox"
															className="text-tech-purple focus:ring-tech-purple/50"
														/>
														<span className="ml-2 text-sm text-gray-300">
															網頁設計
														</span>
													</label>
													<label className="flex items-center">
														<input
															type="checkbox"
															className="text-tech-purple focus:ring-tech-purple/50"
														/>
														<span className="ml-2 text-sm text-gray-300">
															人工智慧
														</span>
													</label>
													<label className="flex items-center">
														<input
															type="checkbox"
															className="text-tech-purple focus:ring-tech-purple/50"
														/>
														<span className="ml-2 text-sm text-gray-300">
															資料科學
														</span>
													</label>
												</div>
											</fieldset>

											<div className="space-y-2">
												<label className="block text-sm font-medium text-gray-300">
													自我介紹
												</label>
												<textarea
													className="w-full px-3 py-2 bg-black/30 border border-tech-purple/30 rounded-lg focus:ring-2 focus:ring-tech-purple/50 text-white h-24"
													placeholder="請簡單介紹自己..."
												/>
											</div>
										</div>

										{/* Submit Button */}
										<button
											type="submit"
											className="w-full py-3 px-4 bg-tech-purple hover:bg-tech-purple/80 text-white font-medium rounded-lg transition-colors duration-200"
										>
											建立帳號
										</button>
									</form>
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
