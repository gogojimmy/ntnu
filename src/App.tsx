import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Slide1 from "./slides/lesson1/Slide1";
import Slide2 from "./slides/lesson1/Slide2";
import Slide3 from "./slides/lesson1/Slide3";
import Slide4 from "./slides/lesson1/Slide4";
import Slide5 from "./slides/lesson1/Slide5";
import Slide6 from "./slides/lesson1/Slide6";
import Slide7 from "./slides/lesson1/Slide7";
import Slide8 from "./slides/lesson1/Slide8";
import Slide9 from "./slides/lesson1/Slide9";
import Slide10 from "./slides/lesson1/Slide10";
import Slide11 from "./slides/lesson1/Slide11";
import Slide12 from "./slides/lesson1/Slide12";
import Slide13 from "./slides/lesson1/Slide13";
import Slide14 from "./slides/lesson1/Slide14";
import Slide15 from "./slides/lesson1/Slide15";
import Slide16 from "./slides/lesson1/Slide16";
import Slide17 from "./slides/lesson1/Slide17";
import Slide18 from "./slides/lesson1/Slide18";
import Slide19 from "./slides/lesson1/Slide19";
import Slide20 from "./slides/lesson1/Slide20";
import Slide21 from "./slides/lesson1/Slide21";
import Slide22 from "./slides/lesson1/Slide22";
import Slide23 from "./slides/lesson1/Slide23";
import Slide24 from "./slides/lesson1/Slide24";
import Slide25 from "./slides/lesson1/Slide25";
import Slide26 from "./slides/lesson1/Slide26";
import Slide27 from "./slides/lesson1/Slide27";
import Slide28 from "./slides/lesson1/Slide28";
import Slide29 from "./slides/lesson1/Slide29";
import Slide30 from "./slides/lesson1/Slide30";
import Slide31 from "./slides/lesson1/Slide31";
import Lesson2Slide1 from "./slides/lesson2/Slide1";
import Lesson2Slide2 from "./slides/lesson2/Slide2";
import Lesson2Slide3 from "./slides/lesson2/Slide3";
import { motion } from "motion/react";

const courses = [
	{
		id: 1,
		title: "HTML/CSS 基礎與 AI 輔助開發入門",
		description: "學習網頁開發基礎，並運用 AI 工具加速開發流程",
		totalSlides: "31",
		icon: (
			<svg
				className="w-6 h-6"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
			>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth={2}
					d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
				/>
			</svg>
		),
	},
	// Add more courses here...
];

function HomePage() {
	return (
		<div className="min-h-screen bg-tech-darker text-white">
			{/* Background Layers */}
			<div className="fixed inset-0 bg-tech-glow" />
			<div
				className="fixed inset-0 bg-tech-grid"
				style={{
					backgroundSize: "32px 32px",
					backgroundPosition: "center",
				}}
			/>

			{/* Content */}
			<div className="relative min-h-screen flex flex-col">
				{/* Header */}
				<header className="py-16">
					<div className="container mx-auto px-8">
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6 }}
							className="flex items-center gap-3 mb-8"
						>
							<div className="w-6 h-6 rotate-45 bg-tech-highlight" />
							<span className="font-mono text-tech-highlight tracking-wider text-lg">
								TECHSLIDES
							</span>
						</motion.div>
						<motion.h1
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, delay: 0.2 }}
							className="text-5xl font-bold mb-4"
						>
							課程目錄
						</motion.h1>
						<motion.p
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, delay: 0.3 }}
							className="text-tech-highlight/60 text-xl max-w-2xl"
						>
							探索最新的網頁開發技術，結合 AI 工具提升開發效率
						</motion.p>
					</div>
				</header>

				{/* Course Grid */}
				<main className="flex-1">
					<div className="container mx-auto px-8">
						<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
							{courses.map((course, index) => (
								<motion.div
									key={course.id}
									initial={{ opacity: 0, y: 20 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
								>
									<a
										href={`/lesson${course.id}/slide1`}
										className="block relative group"
									>
										<div
											className="absolute inset-0 bg-black/40 backdrop-blur-sm rounded-2xl border border-tech-grid-bright 
														transform transition-transform duration-300 group-hover:scale-[1.02]"
										/>
										<div className="relative p-8">
											<div className="flex items-center gap-4 mb-6">
												<div
													className="w-12 h-12 rounded-xl bg-tech-highlight/20 border border-tech-highlight/30 
																flex items-center justify-center text-tech-highlight"
												>
													{course.icon}
												</div>
												<div className="font-mono text-sm text-tech-highlight/60">
													{course.totalSlides} slides
												</div>
											</div>
											<h2 className="text-2xl font-bold mb-4 text-white group-hover:text-tech-highlight transition-colors">
												{course.title}
											</h2>
											<p className="text-tech-highlight/60">
												{course.description}
											</p>
											<div className="mt-6 flex items-center gap-2 text-tech-highlight group-hover:translate-x-2 transition-transform">
												<span className="text-sm">開始學習</span>
												<svg
													className="w-4 h-4"
													fill="none"
													viewBox="0 0 24 24"
													stroke="currentColor"
												>
													<path
														strokeLinecap="round"
														strokeLinejoin="round"
														strokeWidth={2}
														d="M9 5l7 7-7 7"
													/>
												</svg>
											</div>
										</div>
									</a>
								</motion.div>
							))}
						</div>
					</div>
				</main>
			</div>
		</div>
	);
}

export default function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/lesson1/slide1" element={<Slide1 />} />
				<Route path="/lesson1/slide2" element={<Slide2 />} />
				<Route path="/lesson1/slide3" element={<Slide3 />} />
				<Route path="/lesson1/slide4" element={<Slide4 />} />
				<Route path="/lesson1/slide5" element={<Slide5 />} />
				<Route path="/lesson1/slide6" element={<Slide6 />} />
				<Route path="/lesson1/slide7" element={<Slide7 />} />
				<Route path="/lesson1/slide8" element={<Slide8 />} />
				<Route path="/lesson1/slide9" element={<Slide9 />} />
				<Route path="/lesson1/slide10" element={<Slide10 />} />
				<Route path="/lesson1/slide11" element={<Slide11 />} />
				<Route path="/lesson1/slide12" element={<Slide12 />} />
				<Route path="/lesson1/slide13" element={<Slide13 />} />
				<Route path="/lesson1/slide14" element={<Slide14 />} />
				<Route path="/lesson1/slide15" element={<Slide15 />} />
				<Route path="/lesson1/slide16" element={<Slide16 />} />
				<Route path="/lesson1/slide17" element={<Slide17 />} />
				<Route path="/lesson1/slide18" element={<Slide18 />} />
				<Route path="/lesson1/slide19" element={<Slide19 />} />
				<Route path="/lesson1/slide20" element={<Slide20 />} />
				<Route path="/lesson1/slide21" element={<Slide21 />} />
				<Route path="/lesson1/slide22" element={<Slide22 />} />
				<Route path="/lesson1/slide23" element={<Slide23 />} />
				<Route path="/lesson1/slide24" element={<Slide24 />} />
				<Route path="/lesson1/slide25" element={<Slide25 />} />
				<Route path="/lesson1/slide26" element={<Slide26 />} />
				<Route path="/lesson1/slide27" element={<Slide27 />} />
				<Route path="/lesson1/slide28" element={<Slide28 />} />
				<Route path="/lesson1/slide29" element={<Slide29 />} />
				<Route path="/lesson1/slide30" element={<Slide30 />} />
				<Route path="/lesson1/slide31" element={<Slide31 />} />
				<Route path="/lesson2/slide1" element={<Lesson2Slide1 />} />
				<Route path="/lesson2/slide2" element={<Lesson2Slide2 />} />
				<Route path="/lesson2/slide3" element={<Lesson2Slide3 />} />
			</Routes>
		</Router>
	);
}
