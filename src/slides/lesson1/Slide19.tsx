import SlideLayout from "../../layouts/SlideLayout";
import { motion } from "motion/react";

export default function Slide19() {
	return (
		<SlideLayout
			prevSlide="/lesson1/slide18"
			nextSlide="/lesson1/slide20"
			currentSlide="19"
			totalSlides="29"
			courseName="NTNU Web Development Course"
		>
			<div className="relative h-full flex flex-col justify-center">
				{/* Background Elements */}
				<div className="absolute inset-0 rounded-2xl bg-black/40 backdrop-blur-sm border border-tech-grid-bright" />

				{/* Content */}
				<div className="relative px-16 py-8">
					<div className="space-y-8 max-w-[1280px] mx-auto">
						{/* Title */}
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6 }}
						>
							<h1 className="text-4xl font-bold text-white mb-2">
								知名的 Design System 範例
							</h1>
							<h2 className="text-2xl text-tech-highlight/80">
								各大設計系統的設計哲學
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
									<div className="flex items-center gap-4 mb-4">
										<div className="w-12 h-12 bg-[#1DA1F2] rounded-lg flex items-center justify-center">
											<svg
												viewBox="0 0 24 24"
												className="w-8 h-8 text-white fill-current"
											>
												<path d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z" />
											</svg>
										</div>
										<div>
											<a
												href="https://react.twitter.com/"
												target="_blank"
												rel="noopener noreferrer"
												className="text-2xl font-bold text-tech-highlight hover:text-tech-highlight/80 transition-colors"
											>
												Twitter Blueprint
											</a>
											<p className="text-gray-400">簡潔與即時性的設計系統</p>
										</div>
									</div>
									<ul className="list-disc list-inside space-y-2 text-gray-300">
										<li>強調輕量化與快速互動的體驗</li>
										<li>以簡潔的視覺層次傳達資訊</li>
										<li>注重資訊密度與閱讀效率</li>
									</ul>
								</div>

								<div className="bg-[#1a1a1a] rounded-lg p-8">
									<div className="flex items-center gap-4 mb-4">
										<div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center">
											<svg viewBox="0 0 24 24" className="w-8 h-8">
												<path
													d="M12 0C5.372 0 0 5.373 0 12s5.372 12 12 12c6.627 0 12-5.373 12-12S18.627 0 12 0zm7.753 18.305c-.261-.586-.789-.977-1.416-977-2.154 0-4.119-.321-5.85-.977-1.73-.656-3.22-1.567-4.486-2.812-1.266-1.245-2.276-2.738-2.932-4.469C4.321 7.768 4 5.801 4 3.647c0-.627-.391-1.155-.977-1.416L3.022 2.23c-.537-.537-.346-1.434.379-1.779 2.226-1.067 4.75-1.667 7.403-1.667 9.339 0 16.906 7.567 16.906 16.906 0 2.653-.599 5.177-1.667 7.403-.346.725-1.243.916-1.779.379l-.001-.001zM12 20c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"
													fill="#757575"
												/>
											</svg>
										</div>
										<div>
											<a
												href="https://m3.material.io/"
												target="_blank"
												rel="noopener noreferrer"
												className="text-2xl font-bold text-tech-highlight hover:text-tech-highlight/80 transition-colors"
											>
												Material Design
											</a>
											<p className="text-gray-400">以物理世界為靈感的設計</p>
										</div>
									</div>
									<ul className="list-disc list-inside space-y-2 text-gray-300">
										<li>模擬真實世界的光影與深度</li>
										<li>強調動態效果與自然過渡</li>
										<li>以紙張隱喻為基礎的層次設計</li>
									</ul>
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
									<div className="flex items-center gap-4 mb-4">
										<div className="w-12 h-12 bg-[#0052CC] rounded-lg flex items-center justify-center">
											<svg viewBox="0 0 32 32" className="w-8 h-8">
												<path
													d="M15.3 23.531c0-1.108.896-2.005 2.004-2.005.271 0 .527.054.761.151l4.29-4.291a2 2 0 01-.15-.761c0-1.108.896-2.004 2.004-2.004s2.005.896 2.005 2.004c0 .271-.054.527-.151.761l4.291 4.29c.234-.097.49-.151.761-.151 1.108 0 2.004.897 2.004 2.005s-.896 2.004-2.004 2.004c-.271 0-.527-.054-.761-.151l-4.29 4.291c.097.234.151.49.151.761 0 1.108-.897 2.004-2.005 2.004s-2.004-.896-2.004-2.004c0-.271.054-.527.151-.761l-4.291-4.29a2 2 0 01-.761.151c-1.108 0-2.004-.896-2.004-2.004z"
													fill="#0052CC"
												/>
											</svg>
										</div>
										<div>
											<a
												href="https://atlassian.design/"
												target="_blank"
												rel="noopener noreferrer"
												className="text-2xl font-bold text-tech-highlight hover:text-tech-highlight/80 transition-colors"
											>
												Atlassian Design System
											</a>
											<p className="text-gray-400">以團隊協作為核心的設計</p>
										</div>
									</div>
									<ul className="list-disc list-inside space-y-2 text-gray-300">
										<li>強調清晰的資訊架構</li>
										<li>注重工作流程的順暢性</li>
										<li>以效率與可用性為設計重點</li>
									</ul>
								</div>

								<div className="bg-[#1a1a1a] rounded-lg p-8">
									<div className="flex items-center gap-4 mb-4">
										<div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center">
											<svg
												viewBox="0 0 14 17"
												className="w-6 h-6 text-white fill-current"
											>
												<path d="M13.017 12.317c-.905 1.436-1.343 2.07-2.508 2.07-1.096 0-1.446-.703-2.697-.703-1.281 0-1.674.683-2.72.683-1.136 0-2.003-.987-2.908-2.423-1.584-2.394-1.754-6.937.504-8.924.847-.749 2.204-1.2 3.098-1.2 1.281 0 2.086.723 3.147.723.992 0 1.599-.724 3.034-.724 1.083 0 2.228.588 3.045 1.605-2.67 1.47-2.237 5.293.005 8.893zm-3.086-12.12C9.64-.512 8.39.057 7.607.057c-.189-1.226.503-2.374 1.117-2.913C9.396-3.544 10.664-3.053 11.4-2c.165 1.206-.459 2.374-1.47 3.197z" />
											</svg>
										</div>
										<div>
											<a
												href="https://developer.apple.com/design/"
												target="_blank"
												rel="noopener noreferrer"
												className="text-2xl font-bold text-tech-highlight hover:text-tech-highlight/80 transition-colors"
											>
												Apple Design System
											</a>
											<p className="text-gray-400">極簡主義與優雅的設計</p>
										</div>
									</div>
									<ul className="list-disc list-inside space-y-2 text-gray-300">
										<li>追求極致的簡約與優雅</li>
										<li>強調直覺性與易用性</li>
										<li>注重細節與視覺一致性</li>
									</ul>
								</div>
							</motion.div>
						</div>

						{/* Visual Example */}
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, delay: 0.6 }}
							className="bg-[#1a1a1a] rounded-lg p-8"
						>
							<div className="grid grid-cols-4 gap-4">
								{/* Material Design */}
								<div className="bg-black/30 rounded-lg p-4">
									<button className="bg-[#4267B2] text-white px-4 py-2 rounded-full w-full mb-2 shadow-lg">
										Material Button
									</button>
									<div className="text-sm text-gray-400">Material Design</div>
								</div>
								{/* Twitter */}
								<div className="bg-black/30 rounded-lg p-4">
									<button className="bg-[#1DA1F2] text-white px-4 py-2 rounded-lg w-full mb-2">
										Twitter Button
									</button>
									<div className="text-sm text-gray-400">Twitter Blueprint</div>
								</div>
								{/* Atlassian */}
								<div className="bg-black/30 rounded-lg p-4">
									<button className="bg-[#0052CC] text-white px-4 py-2 rounded w-full mb-2">
										Atlassian Button
									</button>
									<div className="text-sm text-gray-400">Atlassian Design</div>
								</div>
								{/* Apple */}
								<div className="bg-black/30 rounded-lg p-4">
									<button className="bg-black text-white px-4 py-2 rounded-full w-full mb-2">
										Apple Button
									</button>
									<div className="text-sm text-gray-400">Apple Design</div>
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
