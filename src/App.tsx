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
import Lesson2Slide4 from "./slides/lesson2/Slide4";
import Lesson2Slide5 from "./slides/lesson2/Slide5";
import Lesson2Slide6 from "./slides/lesson2/Slide6";
import Lesson2Slide7 from "./slides/lesson2/Slide7";
import Lesson2Slide8 from "./slides/lesson2/Slide8";
import Lesson2Slide9 from "./slides/lesson2/Slide9";
import Lesson2Slide10 from "./slides/lesson2/Slide10";
import Lesson2Slide11 from "./slides/lesson2/Slide11";
import Lesson2Slide12 from "./slides/lesson2/Slide12";
import Lesson2Slide13 from "./slides/lesson2/Slide13";
import Lesson2Slide14 from "./slides/lesson2/Slide14";
import Lesson2Slide15 from "./slides/lesson2/Slide15";
import Lesson2Slide16 from "./slides/lesson2/Slide16";
import Lesson2Slide17 from "./slides/lesson2/Slide17";
import Lesson3Slide1 from "./slides/lesson3/Slide1";
import Lesson3Slide2 from "./slides/lesson3/Slide2";
import Lesson3Slide3 from "./slides/lesson3/Slide3";
import Lesson3Slide4 from "./slides/lesson3/Slide4";
import Lesson3Slide5 from "./slides/lesson3/Slide5";
import Lesson3Slide6 from "./slides/lesson3/Slide6";
import Lesson3Slide7 from "./slides/lesson3/Slide7";
import Lesson3Slide8 from "./slides/lesson3/Slide8";
import Lesson3Slide9 from "./slides/lesson3/Slide9";
import Lesson3Slide10 from "./slides/lesson3/Slide10";
import Lesson3Slide11 from "./slides/lesson3/Slide11";
import Lesson3Slide12 from "./slides/lesson3/Slide12";
import Lesson3Slide13 from "./slides/lesson3/Slide13";
import Lesson3Slide14 from "./slides/lesson3/Slide14";
import Lesson3Slide15 from "./slides/lesson3/Slide15";
import Lesson3Slide16 from "./slides/lesson3/Slide16";
import { Lesson3Slide17 } from "./slides/lesson3/Slide17";
import { Lesson3Slide18 } from "./slides/lesson3/Slide18";
import { Lesson3Slide19 } from "./slides/lesson3/Slide19";
import { Lesson3Slide20 } from "./slides/lesson3/Slide20";
import { Lesson3Slide21 } from "./slides/lesson3/Slide21";
import { Lesson3Slide22 } from "./slides/lesson3/Slide22";
import { Lesson3Slide23 } from "./slides/lesson3/Slide23";
import { Lesson3Slide24 } from "./slides/lesson3/Slide24";
import { Lesson3Slide25 } from "./slides/lesson3/Slide25";
import { Lesson3Slide26 } from "./slides/lesson3/Slide26";
import { Lesson3Slide27 } from "./slides/lesson3/Slide27";
import { Lesson3Slide28 } from "./slides/lesson3/Slide28";
import { Lesson3Slide29 } from "./slides/lesson3/Slide29";
import { Lesson3Slide30 } from "./slides/lesson3/Slide30";
import { Lesson3Slide31 } from "./slides/lesson3/Slide31";
import { Lesson3Slide32 } from "./slides/lesson3/Slide32";
import { Lesson3Slide33 } from "./slides/lesson3/Slide33";

import { motion } from "motion/react";
import { SlidesProvider } from "./context/SlidesContext";

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
	{
		id: 2,
		title: "Design System / CSS Framework",
		description: "學習現代化的 CSS 框架與設計系統",
		totalSlides: "17",
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
					d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
				/>
			</svg>
		),
	},
	{
		id: 3,
		title: "AI概論與工具介紹",
		description: "了解人工智能基本概念，探索AI工具在開發中的應用",
		totalSlides: "33",
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
					d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
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

// Define the routes structure
const routes = [
	// Lesson 1 Routes
	{ path: "/lesson1/slide1", element: Slide1 },
	{ path: "/lesson1/slide2", element: Slide2 },
	{ path: "/lesson1/slide3", element: Slide3 },
	{ path: "/lesson1/slide4", element: Slide4 },
	{ path: "/lesson1/slide5", element: Slide5 },
	{ path: "/lesson1/slide6", element: Slide6 },
	{ path: "/lesson1/slide7", element: Slide7 },
	{ path: "/lesson1/slide8", element: Slide8 },
	{ path: "/lesson1/slide9", element: Slide9 },
	{ path: "/lesson1/slide10", element: Slide10 },
	{ path: "/lesson1/slide11", element: Slide11 },
	{ path: "/lesson1/slide12", element: Slide12 },
	{ path: "/lesson1/slide13", element: Slide13 },
	{ path: "/lesson1/slide14", element: Slide14 },
	{ path: "/lesson1/slide15", element: Slide15 },
	{ path: "/lesson1/slide16", element: Slide16 },
	{ path: "/lesson1/slide17", element: Slide17 },
	{ path: "/lesson1/slide18", element: Slide18 },
	{ path: "/lesson1/slide19", element: Slide19 },
	{ path: "/lesson1/slide20", element: Slide20 },
	{ path: "/lesson1/slide21", element: Slide21 },
	{ path: "/lesson1/slide22", element: Slide22 },
	{ path: "/lesson1/slide23", element: Slide23 },
	{ path: "/lesson1/slide24", element: Slide24 },
	{ path: "/lesson1/slide25", element: Slide25 },
	{ path: "/lesson1/slide26", element: Slide26 },
	{ path: "/lesson1/slide27", element: Slide27 },
	{ path: "/lesson1/slide28", element: Slide28 },
	{ path: "/lesson1/slide29", element: Slide29 },
	{ path: "/lesson1/slide30", element: Slide30 },
	{ path: "/lesson1/slide31", element: Slide31 },

	// Lesson 2 Routes
	{ path: "/lesson2/slide1", element: Lesson2Slide1 },
	{ path: "/lesson2/slide2", element: Lesson2Slide2 },
	{ path: "/lesson2/slide3", element: Lesson2Slide3 },
	{ path: "/lesson2/slide4", element: Lesson2Slide4 },
	{ path: "/lesson2/slide5", element: Lesson2Slide5 },
	{ path: "/lesson2/slide6", element: Lesson2Slide6 },
	{ path: "/lesson2/slide7", element: Lesson2Slide7 },
	{ path: "/lesson2/slide8", element: Lesson2Slide8 },
	{ path: "/lesson2/slide9", element: Lesson2Slide9 },
	{ path: "/lesson2/slide10", element: Lesson2Slide10 },
	{ path: "/lesson2/slide11", element: Lesson2Slide11 },
	{ path: "/lesson2/slide12", element: Lesson2Slide12 },
	{ path: "/lesson2/slide13", element: Lesson2Slide13 },
	{ path: "/lesson2/slide14", element: Lesson2Slide14 },
	{ path: "/lesson2/slide15", element: Lesson2Slide15 },
	{ path: "/lesson2/slide16", element: Lesson2Slide16 },
	{ path: "/lesson2/slide17", element: Lesson2Slide17 },

	// Lesson 3 Routes
	{ path: "/lesson3/slide1", element: Lesson3Slide1 },
	{ path: "/lesson3/slide2", element: Lesson3Slide2 },
	{ path: "/lesson3/slide3", element: Lesson3Slide3 },
	{ path: "/lesson3/slide4", element: Lesson3Slide4 },
	{ path: "/lesson3/slide5", element: Lesson3Slide5 },
	{ path: "/lesson3/slide6", element: Lesson3Slide6 },
	{ path: "/lesson3/slide7", element: Lesson3Slide7 },
	{ path: "/lesson3/slide8", element: Lesson3Slide8 },
	{ path: "/lesson3/slide9", element: Lesson3Slide9 },
	{ path: "/lesson3/slide10", element: Lesson3Slide10 },
	{ path: "/lesson3/slide11", element: Lesson3Slide11 },
	{ path: "/lesson3/slide12", element: Lesson3Slide12 },
	{ path: "/lesson3/slide13", element: Lesson3Slide13 },
	{ path: "/lesson3/slide14", element: Lesson3Slide14 },
	{ path: "/lesson3/slide15", element: Lesson3Slide15 },
	{ path: "/lesson3/slide16", element: Lesson3Slide16 },
	{ path: "/lesson3/slide17", element: Lesson3Slide17 },
	{ path: "/lesson3/slide18", element: Lesson3Slide18 },
	{ path: "/lesson3/slide19", element: Lesson3Slide19 },
	{ path: "/lesson3/slide20", element: Lesson3Slide20 },
	{ path: "/lesson3/slide21", element: Lesson3Slide21 },
	{ path: "/lesson3/slide22", element: Lesson3Slide22 },
	{ path: "/lesson3/slide23", element: Lesson3Slide23 },
	{ path: "/lesson3/slide24", element: Lesson3Slide24 },
	{ path: "/lesson3/slide25", element: Lesson3Slide25 },
	{ path: "/lesson3/slide26", element: Lesson3Slide26 },
	{ path: "/lesson3/slide27", element: Lesson3Slide27 },
	{ path: "/lesson3/slide28", element: Lesson3Slide28 },
	{ path: "/lesson3/slide29", element: Lesson3Slide29 },
	{ path: "/lesson3/slide30", element: Lesson3Slide30 },
	{ path: "/lesson3/slide31", element: Lesson3Slide31 },
	{ path: "/lesson3/slide32", element: Lesson3Slide32 },
	{ path: "/lesson3/slide33", element: Lesson3Slide33 },
];

// Calculate slide paths and counts per lesson
const allSlidePaths = routes.map((r) => r.path);
const lesson1Routes = routes.filter((r) => r.path.startsWith("/lesson1/"));
const lesson2Routes = routes.filter((r) => r.path.startsWith("/lesson2/"));
const lesson3Routes = routes.filter((r) => r.path.startsWith("/lesson3/"));
// Add more lessons here if needed

// Define type for slideCounts keys
type LessonKey = `lesson${number}`;

const slideCounts: { [key in LessonKey]?: number } & {
	lesson1: number;
	lesson2: number;
	lesson3: number;
} = {
	lesson1: lesson1Routes.length,
	lesson2: lesson2Routes.length,
	lesson3: lesson3Routes.length,
	// Add more lessons here if needed
};

export default function App() {
	return (
		// Wrap everything in SlidesProvider
		<SlidesProvider slidePaths={allSlidePaths}>
			<Router>
				<Routes>
					<Route path="/" element={<HomePage />} />
					{/* Map routes and pass counts */}
					{routes.map((route) => {
						const lessonMatch = route.path.match(/\/lesson(\d+)\//);
						const lessonNumber = lessonMatch
							? parseInt(lessonMatch[1], 10)
							: null;
						// Use a type-safe key
						const lessonKey = lessonNumber
							? (`lesson${lessonNumber}` as LessonKey)
							: undefined;
						const totalSlidesInLesson =
							lessonKey && slideCounts[lessonKey] ? slideCounts[lessonKey] : 0;

						// Get the component type from the route definition
						const SlideComponent = route.element;

						return (
							<Route
								key={route.path}
								path={route.path}
								// Render the component, passing the prop
								element={
									<SlideComponent totalSlidesInLesson={totalSlidesInLesson} />
								}
							/>
						);
					})}
				</Routes>
			</Router>
		</SlidesProvider>
	);
}
