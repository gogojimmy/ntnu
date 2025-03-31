import { ReactNode, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/solid";

interface SlideLayoutProps {
	children: ReactNode;
	nextSlide?: string;
	prevSlide?: string;
	currentSlide?: string;
	totalSlides?: string;
	courseName?: string;
}

export default function SlideLayout({
	children,
	nextSlide,
	prevSlide,
	currentSlide = "01",
	totalSlides = "05",
	courseName = "NTNU Web Development Course",
}: SlideLayoutProps) {
	const navigate = useNavigate();

	const handleKeyDown = (e: KeyboardEvent) => {
		if (e.key === "ArrowRight" && nextSlide) {
			navigate(nextSlide);
		} else if (e.key === "ArrowLeft" && prevSlide) {
			navigate(prevSlide);
		}
	};

	useEffect(() => {
		window.addEventListener("keydown", handleKeyDown);
		return () => window.removeEventListener("keydown", handleKeyDown);
	}, [nextSlide, prevSlide]);

	return (
		<div className="min-h-screen w-full bg-tech-darker text-white grid-bg overflow-hidden">
			{/* Global Font Size Styles */}
			<style>{`
				.slide-content {
					font-size: 1.1rem;
				}
				.slide-content h1 {
					font-size: 3rem !important;
				}
				.slide-content h2 {
					font-size: 2rem !important;
				}
				.slide-content h3 {
					font-size: 1.75rem !important;
				}
				.slide-content h4 {
					font-size: 1.5rem !important;
				}
				.slide-content p, 
				.slide-content li {
					font-size: 1.5rem !important;
					line-height: 1.3;
				}
				.slide-content .text-sm {
					font-size: 1.1rem !important;
				}
				.slide-content pre,
				.slide-content code {
					font-size: 1rem !important;
				}
				.slide-content button {
					font-size: 1.1rem !important;
				}
				.slide-content input,
				.slide-content textarea {
					font-size: 1.1rem !important;
				}
				.preview-content h3 {
					font-size: 1.75rem !important;
				}
				.preview-content p {
					font-size: 1.1rem !important;
				}
			`}</style>

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
							{currentSlide}/{totalSlides}
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
						{prevSlide && (
							<button
								onClick={() => navigate(prevSlide)}
								className="flex items-center gap-2 px-4 py-2 text-lg
									 text-tech-purple hover:text-tech-purple/80
									 transition-colors duration-200"
							>
								<ArrowLeftIcon className="w-5 h-5" />
								Previous
							</button>
						)}
						{nextSlide && (
							<button
								onClick={() => navigate(nextSlide)}
								className="flex items-center gap-2 px-4 py-2 text-lg
									 text-tech-highlight hover:text-tech-highlight/80
									 transition-colors duration-200 ml-auto"
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
