import SlideLayout from "../../layouts/SlideLayout";

export default function Slide1() {
	return (
		<SlideLayout nextSlide="/lesson1/slide2" currentSlide="01" totalSlides="05">
			<div className="relative h-full flex flex-col justify-center">
				{/* Background Elements */}
				<div className="absolute inset-0 rounded-2xl bg-black/40 backdrop-blur-sm border border-tech-grid-bright" />

				{/* Content */}
				<div className="relative px-16 py-12">
					<div className="space-y-8">
						{/* Title */}
						<h1 className="text-7xl font-bold leading-tight">
							<span className="text-white">The Future of </span>
							<span className="text-tech-highlight">Technology</span>
							<span className="text-white"> in </span>
							<span className="text-tech-purple">2025</span>
						</h1>

						{/* Subtitle */}
						<p className="text-xl text-tech-highlight/60 max-w-3xl">
							Exploring the intersection of artificial intelligence, sustainable
							energy, and quantum computing in the next generation of
							technological innovation.
						</p>
					</div>

					{/* Date */}
					<div className="absolute left-16 bottom-12 flex items-center gap-3">
						<div className="w-8 h-[1px] bg-tech-highlight/30" />
						<span className="font-mono text-sm text-tech-highlight/60">
							March 31, 2025
						</span>
					</div>
				</div>

				{/* Decorative Elements */}
				<div className="absolute -left-4 top-1/4 w-32 h-32 bg-tech-purple/20 blur-[64px] rounded-full" />
				<div className="absolute -right-4 bottom-1/4 w-32 h-32 bg-tech-highlight/20 blur-[64px] rounded-full" />
			</div>
		</SlideLayout>
	);
}
