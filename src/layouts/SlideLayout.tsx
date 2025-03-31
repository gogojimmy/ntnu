import { ReactNode, useEffect, useState, useRef } from "react";
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
	const [scale, setScale] = useState(1);
	const contentRef = useRef<HTMLDivElement>(null);

	const updateScale = () => {
		if (!contentRef.current) return;

		const contentHeight = contentRef.current.scrollHeight;
		// 固定寬度為螢幕寬度的 85%
		const targetWidth = window.innerWidth * 0.85;

		setScale(
			Math.min(targetWidth / 1280, (window.innerHeight * 0.8) / contentHeight)
		);
	};

	useEffect(() => {
		updateScale();
		window.addEventListener("resize", updateScale);
		return () => window.removeEventListener("resize", updateScale);
	}, []);

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
							<span className="font-mono text-tech-highlight/80 tracking-wide text-sm">
								{courseName}
							</span>
						</div>
						<div className="font-mono text-sm text-tech-highlight/60">
							{currentSlide}/{totalSlides}
						</div>
					</div>
				</header>

				{/* Main Content */}
				<main className="flex-1 flex items-center justify-center">
					<div
						ref={contentRef}
						className="w-[1280px] origin-center p-12"
						style={{ transform: `scale(${scale})` }}
					>
						{children}
					</div>
				</main>

				{/* Navigation */}
				<nav className="absolute bottom-0 left-0 right-0 z-10">
					<div className="container mx-auto px-4 sm:px-8 h-16 flex items-center justify-between">
						{prevSlide && (
							<button
								onClick={() => navigate(prevSlide)}
								className="flex items-center gap-2 px-4 py-2 text-sm
									 text-tech-purple hover:text-tech-purple/80
									 transition-colors duration-200"
							>
								<ArrowLeftIcon className="w-4 h-4" />
								Previous
							</button>
						)}
						{nextSlide && (
							<button
								onClick={() => navigate(nextSlide)}
								className="flex items-center gap-2 px-4 py-2 text-sm
									 text-tech-highlight hover:text-tech-highlight/80
									 transition-colors duration-200 ml-auto"
							>
								Next
								<ArrowRightIcon className="w-4 h-4" />
							</button>
						)}
					</div>
				</nav>
			</div>
		</div>
	);
}
