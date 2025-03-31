import SlideLayout from "../../layouts/SlideLayout";
import { motion } from "motion/react";
import { Highlight, themes } from "prism-react-renderer";

const CodeBlock = ({ code, language }: { code: string; language: string }) => (
	<Highlight theme={themes.nightOwl} code={code.trim()} language={language}>
		{({ style, tokens, getLineProps, getTokenProps }) => (
			<pre
				className="bg-black/30 p-3 rounded-md overflow-x-auto text-xs"
				style={style}
			>
				{tokens.map((line, i) => (
					<div key={i} {...getLineProps({ line })}>
						{line.map((token, key) => (
							<span key={key} {...getTokenProps({ token })} />
						))}
					</div>
				))}
			</pre>
		)}
	</Highlight>
);

export default function Slide2() {
	return (
		<SlideLayout
			prevSlide="/lesson1/slide1"
			nextSlide="/lesson1/slide3"
			currentSlide="02"
			totalSlides="25"
			courseName="NTNU Web Development Course"
		>
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
								網頁開發簡介
							</h1>
						</motion.div>

						{/* Web Components Section */}
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, delay: 0.2 }}
							className="space-y-4"
						>
							<h2 className="text-2xl font-bold text-tech-highlight mb-4">
								網頁的組成部分
							</h2>
							<div className="grid grid-cols-3 gap-4">
								{[
									{
										title: "HTML",
										subtitle: "結構 (骨架)",
										color: "text-tech-purple",
										bgColor: "bg-tech-purple/10",
										borderColor: "border-tech-purple/30",
										code: `<button class="btn">
  點擊我
</button>`,
										language: "html",
									},
									{
										title: "CSS",
										subtitle: "外觀 (裝潢)",
										color: "text-tech-highlight",
										bgColor: "bg-tech-highlight/10",
										borderColor: "border-tech-highlight/30",
										code: `.btn {
  background: #4F46E5;
  color: white;
  padding: 8px 16px;
  border-radius: 4px;
}`,
										language: "css",
									},
									{
										title: "JavaScript",
										subtitle: "行為 (功能)",
										color: "text-tech-green",
										bgColor: "bg-tech-green/10",
										borderColor: "border-tech-green/30",
										code: `const btn = document.querySelector('.btn');
btn.addEventListener('click', () => {
  alert('按鈕被點擊了！');
});`,
										language: "javascript",
									},
								].map((item, index) => (
									<motion.div
										key={index}
										initial={{ opacity: 0, scale: 0.9 }}
										animate={{ opacity: 1, scale: 1 }}
										transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
										className={`p-4 rounded-lg ${item.bgColor} border ${item.borderColor} hover:scale-105 transition-transform duration-200`}
									>
										<h3 className={`text-xl font-bold ${item.color} mb-2`}>
											{item.title}
										</h3>
										<p className="text-white/80 text-sm mb-3">
											{item.subtitle}
										</p>
										<CodeBlock code={item.code} language={item.language} />
									</motion.div>
								))}
							</div>

							{/* Combined Result */}
							<motion.div
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.6, delay: 0.7 }}
								className="mt-6 p-6 rounded-lg bg-tech-darker/50 border border-tech-grid-bright"
							>
								<h3 className="text-xl font-bold text-tech-highlight mb-4">
									組合後的結果
								</h3>
								<div className="bg-white/5 p-6 rounded-lg">
									<button
										onClick={() => alert("按鈕被點擊了！")}
										className="bg-[#4F46E5] text-white px-4 py-2 rounded hover:bg-[#4338CA] transition-colors duration-200"
									>
										點擊我
									</button>
								</div>
							</motion.div>
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
