import { ReactNode, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/solid";
import { useSlides } from "../context/SlidesContext";

interface SlideLayoutProps {
	children: ReactNode;
	currentSlide?: string;
	courseName?: string;
	totalSlidesInLesson: number;
}

export default function SlideLayout({
	children,
	currentSlide,
	courseName = "NTNU Web Development Course",
	totalSlidesInLesson,
}: SlideLayoutProps) {
	const navigate = useNavigate();
	const location = useLocation();
	const { getPrevSlidePath, getNextSlidePath } = useSlides();

	const currentPath = location.pathname;
	const prevPath = getPrevSlidePath(currentPath);
	const nextPath = getNextSlidePath(currentPath);

	const derivedCurrentSlide =
		currentSlide ??
		(() => {
			const match = currentPath.match(/slide(\d+)$/i);
			return match ? match[1].padStart(2, "0") : "?";
		})();

	const handleKeyDown = (e: KeyboardEvent) => {
		if (e.key === "ArrowRight" && nextPath) {
			navigate(nextPath);
		} else if (e.key === "ArrowLeft" && prevPath) {
			navigate(prevPath);
		}
	};

	useEffect(() => {
		window.addEventListener("keydown", handleKeyDown);
		return () => window.removeEventListener("keydown", handleKeyDown);
	}, [prevPath, nextPath, navigate]);

	return (
		<div className="min-h-screen w-full bg-tech-darker text-white grid-bg overflow-hidden">
			{/* Global Font Size Styles */}

			{/* Background Layers */}
			<div className="fixed inset-0 bg-tech-glow" />
			<div
				className="fixed inset-0 bg-tech-grid"
				style={{
					backgroundSize: "32px 32px",
					backgroundPosition: "center",
				}}
			/>

			{/* Content Container */}
			<div className="relative min-h-screen flex flex-col">
				{/* Header */}
				<header className="absolute top-0 left-0 right-0 z-10">
					<div className="container mx-auto px-4 sm:px-8 h-16 flex items-center justify-between">
						<div className="flex items-center gap-3">
							<div className="w-4 h-4 rotate-45 bg-tech-highlight" />
							<span className="font-mono text-tech-highlight/80 tracking-wide text-lg">
								{courseName}
							</span>
						</div>
						<div className="font-mono text-lg text-tech-highlight/60">
							{derivedCurrentSlide}/{totalSlidesInLesson}
						</div>
					</div>
				</header>

				{/* Main Content */}
				<main className="flex-1 flex items-center justify-center p-8">
					<div className="w-[80%] h-[90vh] slide-content">{children}</div>
				</main>

				{/* Navigation */}
				<nav className="absolute bottom-0 left-0 right-0 z-10">
					<div className="container mx-auto px-4 sm:px-8 h-16 flex items-center justify-between">
						{prevPath && (
							<button
								onClick={() => navigate(prevPath)}
								className="flex items-center gap-2 px-4 py-2 text-lg
									 text-tech-purple hover:text-tech-purple/80
									 transition-colors duration-200"
							>
								<ArrowLeftIcon className="w-5 h-5" />
								Previous
							</button>
						)}
						<div className="flex-grow"></div>
						{nextPath && (
							<button
								onClick={() => navigate(nextPath)}
								className="flex items-center gap-2 px-4 py-2 text-lg
									 text-tech-highlight hover:text-tech-highlight/80
									 transition-colors duration-200"
							>
								Next
								<ArrowRightIcon className="w-5 h-5" />
							</button>
						)}
					</div>
				</nav>
			</div>
		</div>
	);
}
