import SlideLayout from "../../layouts/SlideLayout";
import { motion } from "motion/react";

export default function Lesson3Slide4() {
	return (
		<SlideLayout currentSlide="04" courseName="AI概論與工具介紹">
			<div className="relative h-full flex flex-col justify-center">
				{/* Background Elements */}
				<div className="absolute inset-0 rounded-2xl bg-black/40 backdrop-blur-sm border border-tech-grid-bright" />

				{/* Content */}
				<div className="relative px-16 py-8">
					<div className="space-y-8">
						{/* Title */}
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6 }}
						>
							<h1 className="text-4xl font-bold text-white mb-2">
								生成式AI的原理與規模
							</h1>
							<h2 className="text-2xl text-tech-highlight/80">
								從無窮可能中尋找合適組合
							</h2>
						</motion.div>

						<div className="grid grid-cols-2 gap-8">
							{/* Left Column */}
							<motion.div
								initial={{ opacity: 0, x: -20 }}
								animate={{ opacity: 1, x: 0 }}
								transition={{ duration: 0.6, delay: 0.2 }}
								className="space-y-6"
							>
								<div className="bg-[#1a1a1a] rounded-lg p-8">
									<h3 className="text-2xl font-bold text-tech-highlight mb-4">
										生成文章的請求範例
									</h3>

									<div className="flex items-start gap-4 mb-6">
										<div className="w-10 h-10 rounded-full bg-[#FFA066]/20 flex items-center justify-center mt-1">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												className="h-6 w-6 text-[#FFA066]"
												fill="none"
												viewBox="0 0 24 24"
												stroke="currentColor"
											>
												<path
													strokeLinecap="round"
													strokeLinejoin="round"
													strokeWidth={2}
													d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
												/>
											</svg>
										</div>
										<div className="bg-blue-100/10 rounded-xl p-4 flex-1">
											<p className="text-gray-100">
												一篇 100 字的中文文章，標題為《52赫茲鯨魚》
											</p>
										</div>
									</div>

									<div className="flex items-start gap-4">
										<div className="w-10 h-10 rounded-full bg-tech-highlight/20 flex items-center justify-center mt-1">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												className="h-6 w-6 text-tech-highlight"
												fill="none"
												viewBox="0 0 24 24"
												stroke="currentColor"
											>
												<path
													strokeLinecap="round"
													strokeLinejoin="round"
													strokeWidth={2}
													d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
												/>
											</svg>
										</div>
										<div className="bg-blue-100/10 rounded-xl p-4 flex-1">
											<h4 className="text-xl text-tech-highlight mb-2">
												52赫茲鯨魚
											</h4>
											<p className="text-sm text-gray-300">
												52赫茲鯨魚，被稱為世界上最孤獨的鯨魚。牠的叫聲頻率高於其他鯨魚，無法與同類交流。科學家們透過水下麥克風，記錄到這個獨特的聲音，但從未目睹牠的身影。牠獨自在海洋中游蕩，發出無人能回應的呼喚。這孤獨的旅程，讓牠成為海洋中的傳奇，也喚起人們對海洋生物保護的關注。或許在浩瀚海洋的某處，牠依然在尋找能理解自己聲音的伙伴。
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
								className="space-y-6"
							>
								<div className="bg-[#1a1a1a] rounded-lg p-8">
									<h3 className="text-2xl font-bold text-tech-highlight mb-4">
										生成文字的機率學原理
									</h3>
									<p className="text-gray-300 mb-6">
										大型語言模型（LLM）生成文章的原理是從幾乎無窮的可能組合中找出最合適的：
									</p>

									<div className="space-y-6">
										<motion.div
											initial={{ opacity: 0, y: 10 }}
											animate={{ opacity: 1, y: 0 }}
											transition={{ duration: 0.5, delay: 0.5 }}
										>
											<div className="bg-black/30 rounded-lg p-4">
												<h4 className="text-lg font-bold text-tech-purple mb-2">
													組合爆炸性增長
												</h4>
												<p className="text-gray-300">
													用中文字組成 100 字的文章有多少的可能性？
												</p>
												<p className="text-gray-300 mt-2">
													假設中文常用字為 1000
												</p>
												<p className="font-mono text-tech-highlight mt-2">
													1000 × 1000 × 1000 × ... = 1000<sup>100</sup> = 10
													<sup>300</sup>
												</p>
												<p className="text-xs text-gray-400 mt-2">
													宇宙中的原子總數估計 10<sup>80</sup>
												</p>
											</div>
										</motion.div>

										<motion.div
											initial={{ opacity: 0, y: 10 }}
											animate={{ opacity: 1, y: 0 }}
											transition={{ duration: 0.5, delay: 0.7 }}
										>
											<div className="bg-black/30 rounded-lg p-4">
												<h4 className="text-lg font-bold text-tech-purple mb-2">
													LLM 的核心挑戰
												</h4>
												<p className="text-gray-300">
													從近乎無窮的可能中找出適當的組合
												</p>
												<ul className="list-disc list-inside text-gray-300 mt-2 space-y-2">
													<li>理解標題「52赫茲鯨魚」的上下文與意義</li>
													<li>基於數據訓練產生符合語法與意義的連貫文字</li>
													<li>控制生成的字數接近 100 字要求</li>
												</ul>
											</div>
										</motion.div>
									</div>
								</div>

								<motion.div
									className="bg-[#1a1a1a] rounded-lg p-8"
									initial={{ opacity: 0, y: 20 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ duration: 0.6, delay: 0.8 }}
								>
									<div className="flex items-center gap-4 mb-4">
										<div className="w-10 h-10 rounded-full bg-tech-cyan/20 flex items-center justify-center">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												className="h-6 w-6 text-tech-cyan"
												fill="none"
												viewBox="0 0 24 24"
												stroke="currentColor"
											>
												<path
													strokeLinecap="round"
													strokeLinejoin="round"
													strokeWidth={2}
													d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
												/>
											</svg>
										</div>
										<h3 className="text-xl font-bold text-white">
											大型語言模型的神奇之處
										</h3>
									</div>
									<p className="text-gray-300">
										大型語言模型透過分析海量文本學會文字間的關係，能夠理解「52赫茲鯨魚」是指發出52赫茲聲音的特殊鯨魚，從而生成有意義、連貫且符合事實的文章，這一能力讓機器看起來具有了「理解」能力。
									</p>
								</motion.div>
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
