import SlideLayout from "../../layouts/SlideLayout";
import { motion } from "motion/react";

export default function Slide25() {
	return (
		<SlideLayout
			prevSlide="/lesson1/slide24"
			nextSlide="/lesson1/slide26"
			currentSlide="25"
			totalSlides="25"
			courseName="NTNU Web Development Course"
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
								Flexbox 基礎 - 重點整理
							</h1>
							<h2 className="text-xl text-tech-highlight/80">
								Summary of Flexbox Concepts
							</h2>
						</motion.div>

						<div className="grid grid-cols-2 gap-4">
							{/* Left Column */}
							<motion.div
								initial={{ opacity: 0, x: -20 }}
								animate={{ opacity: 1, x: 0 }}
								transition={{ duration: 0.6, delay: 0.2 }}
								className="space-y-4"
							>
								{/* Container Properties */}
								<div className="bg-[#1a1a1a] rounded-lg p-4">
									<h3 className="text-xl font-bold text-tech-highlight mb-3">
										容器屬性 (Container Properties)
									</h3>
									<div className="space-y-3">
										<div>
											<h4 className="text-lg font-bold text-tech-purple mb-2">
												display: flex
											</h4>
											<p className="text-sm text-gray-300">
												• 啟用 Flexbox 布局
												<br />• 將容器變為彈性容器
											</p>
										</div>
										<div>
											<h4 className="text-lg font-bold text-tech-purple mb-2">
												flex-direction
											</h4>
											<p className="text-sm text-gray-300">
												• row（預設）：水平排列
												<br />
												• column：垂直排列
												<br />• row-reverse/column-reverse：反向排列
											</p>
										</div>
										<div>
											<h4 className="text-lg font-bold text-tech-purple mb-2">
												flex-wrap
											</h4>
											<p className="text-sm text-gray-300">
												• nowrap（預設）：單行/列顯示
												<br />
												• wrap：多行/列顯示
												<br />• wrap-reverse：反向換行/列
											</p>
										</div>
									</div>
								</div>

								{/* Alignment Properties */}
								<div className="bg-[#1a1a1a] rounded-lg p-4">
									<h3 className="text-xl font-bold text-tech-highlight mb-3">
										對齊屬性 (Alignment)
									</h3>
									<div className="space-y-3">
										<div>
											<h4 className="text-lg font-bold text-tech-purple mb-2">
												justify-content
											</h4>
											<p className="text-sm text-gray-300">
												• flex-start（預設）：起點對齊
												<br />
												• center：置中對齊
												<br />
												• space-between：兩端對齊
												<br />• space-around：環繞空間
											</p>
										</div>
										<div>
											<h4 className="text-lg font-bold text-tech-purple mb-2">
												align-items
											</h4>
											<p className="text-sm text-gray-300">
												• stretch（預設）：拉伸填滿
												<br />
												• center：交錯軸置中
												<br />• flex-start/flex-end：交錯軸起點/終點
											</p>
										</div>
									</div>
								</div>
							</motion.div>

							{/* Right Column */}
							<motion.div
								initial={{ opacity: 0, x: 20 }}
								animate={{ opacity: 1, x: 0 }}
								transition={{ duration: 0.6, delay: 0.4 }}
								className="space-y-4"
							>
								{/* Item Properties */}
								<div className="bg-[#1a1a1a] rounded-lg p-4">
									<h3 className="text-xl font-bold text-tech-highlight mb-3">
										項目屬性 (Item Properties)
									</h3>
									<div className="space-y-3">
										<div>
											<h4 className="text-lg font-bold text-tech-purple mb-2">
												flex-grow
											</h4>
											<p className="text-sm text-gray-300">
												• 預設值：0（不分配剩餘空間）
												<br />
												• 正整數：按比例分配剩餘空間
												<br />• 常用於自適應布局
											</p>
										</div>
										<div>
											<h4 className="text-lg font-bold text-tech-purple mb-2">
												flex-shrink
											</h4>
											<p className="text-sm text-gray-300">
												• 預設值：1（等比例縮小）
												<br />
												• 0：禁止縮小
												<br />• 數值越大縮小比例越大
											</p>
										</div>
										<div>
											<h4 className="text-lg font-bold text-tech-purple mb-2">
												flex-basis
											</h4>
											<p className="text-sm text-gray-300">
												• 預設值：auto
												<br />
												• 設定項目的基準尺寸
												<br />• 可使用具體數值或百分比
											</p>
										</div>
									</div>
								</div>

								{/* Best Practices */}
								<div className="bg-[#1a1a1a] rounded-lg p-4">
									<h3 className="text-xl font-bold text-tech-highlight mb-3">
										最佳實踐 (Best Practices)
									</h3>
									<div className="space-y-3">
										<div>
											<h4 className="text-lg font-bold text-tech-purple mb-2">
												常見應用場景
											</h4>
											<p className="text-sm text-gray-300">
												• 導航欄布局
												<br />
												• 卡片列表
												<br />
												• 居中對齊
												<br />• 自適應布局
											</p>
										</div>
										<div>
											<h4 className="text-lg font-bold text-tech-purple mb-2">
												注意事項
											</h4>
											<p className="text-sm text-gray-300">
												• 考慮內容的最小寬度
												<br />
												• 使用整數值設定比例
												<br />
												• 注意瀏覽器兼容性
												<br />• 適當使用 flex-wrap
											</p>
										</div>
									</div>
								</div>
							</motion.div>
						</div>

						{/* Additional Tips */}
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, delay: 0.6 }}
							className="bg-[#1a1a1a] rounded-lg p-4"
						>
							<h3 className="text-xl font-bold text-tech-highlight mb-3">
								進階技巧 (Advanced Tips)
							</h3>
							<div className="grid grid-cols-3 gap-4">
								<div>
									<h4 className="text-lg font-bold text-tech-purple mb-2">
										組合應用
									</h4>
									<p className="text-sm text-gray-300">
										• flex-grow 與 flex-basis 配合
										<br />
										• justify-content 與 align-items 配合
										<br />• 巢狀 Flexbox 布局
									</p>
								</div>
								<div>
									<h4 className="text-lg font-bold text-tech-purple mb-2">
										響應式設計
									</h4>
									<p className="text-sm text-gray-300">
										• 使用 flex-wrap 處理換行
										<br />
										• 配合 media queries 調整布局
										<br />• 動態調整 flex-basis
									</p>
								</div>
								<div>
									<h4 className="text-lg font-bold text-tech-purple mb-2">
										效能優化
									</h4>
									<p className="text-sm text-gray-300">
										• 避免過度巢狀
										<br />
										• 合理使用 flex-shrink
										<br />• 設定適當的 min-width/height
									</p>
								</div>
							</div>
						</motion.div>
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
