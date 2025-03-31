import SlideLayout from "../../layouts/SlideLayout";
import { motion } from "motion/react";
import { Highlight, themes } from "prism-react-renderer";

const CodeBlock = ({ code, language }: { code: string; language: string }) => (
	<Highlight theme={themes.nightOwl} code={code.trim()} language={language}>
		{({ style, tokens, getLineProps, getTokenProps }) => (
			<pre
				className="bg-black/30 p-3 rounded-md overflow-x-auto text-sm"
				style={{ ...style }}
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

const PreviewStyles = () => (
	<style>{`
		.box-model-demo {
			position: relative;
			width: 100%;
			height: 400px;
			display: flex;
			align-items: center;
			justify-content: center;
		}

		.box-layer {
			position: absolute;
			display: flex;
			align-items: center;
			justify-content: center;
			transition: all 0.3s ease;
			cursor: pointer;
		}

		.margin-layer {
			background: #f5f524;
			width: calc(300px + 2 * (20px + 10px + 30px));
			height: calc(100px + 2 * (20px + 10px + 30px));
			border: none;
		}
		.margin-layer:hover {
			background: #f5f524;
			box-shadow: 0 0 20px #f5f524;
			transform: scale(1.02);
		}

		.border-layer {
			background: #954ce9;
			width: calc(300px + 2 * (20px + 10px));
			height: calc(100px + 2 * (20px + 10px));
			border: none;
		}
		.border-layer:hover {
			background: #954ce9;
			box-shadow: 0 0 20px #954ce9;
			transform: scale(1.05);
		}

		.padding-layer {
			background: #22d3ee;
			width: calc(300px + 2 * 20px);
			height: calc(100px + 2 * 20px);
			border: none;
		}
		.padding-layer:hover {
			background: #22d3ee;
			box-shadow: 0 0 20px #22d3ee;
			transform: scale(1.08);
		}

		.content-layer {
			background: #f43f5e;
			width: 300px;
			height: 100px;
			display: flex;
			align-items: center;
			justify-content: center;
			font-weight: bold;
			color: white;
			border: none;
		}
		.content-layer:hover {
			background: #f43f5e;
			box-shadow: 0 0 20px #f43f5e;
			transform: scale(1.1);
		}

		.layer-label {
			position: absolute;
			font-size: 0.9rem;
			font-weight: bold;
			text-transform: uppercase;
			pointer-events: none;
			padding: 0.25rem 0.5rem;
			border-radius: 0.25rem;
			background: rgba(0, 0, 0, 0.7);
			transition: all 0.3s ease;
		}

		.margin-label { 
			color: #f5f524;
			left: -2rem; 
			top: 50%;
			transform: translateY(-50%);
		}
		.border-label { 
			color: #954ce9;
			top: -2rem;
			left: 50%;
			transform: translateX(-50%);
		}
		.padding-label { 
			color: #22d3ee;
			right: -3.5rem;
			top: 50%;
			transform: translateY(-50%);
		}
		.content-label { 
			color: #f43f5e;
			bottom: -2rem;
			left: 50%;
			transform: translateX(-50%);
		}

		/* 當父層 hover 時，對應的 label 也會有變化 */
		.margin-layer:hover .margin-label {
			transform: translateY(-50%) translateX(-5px);
			text-shadow: 0 0 10px #f5f524;
		}
		.border-layer:hover .border-label {
			transform: translateX(-50%) translateY(-5px);
			text-shadow: 0 0 10px #954ce9;
		}
		.padding-layer:hover .padding-label {
			transform: translateY(-50%) translateX(5px);
			text-shadow: 0 0 10px #22d3ee;
		}
		.content-layer:hover .content-label {
			transform: translateX(-50%) translateY(5px);
			text-shadow: 0 0 10px #f43f5e;
		}

		/* Remove size labels styles */
		.size-label {
			display: none;
		}

		.box-model-code {
			background: rgba(0, 0, 0, 0.3);
			border-radius: 0.5rem;
			padding: 1rem;
			margin-top: 1rem;
		}

		.box-model-example {
			margin: 2rem;
			padding: 1.5rem;
			border: 4px solid #f5f524;
			background: rgba(245, 245, 36, 0.1);
			border-radius: 0.5rem;
		}
	`}</style>
);

export default function Slide12() {
	const boxModelCode = `/* CSS 盒模型示例 */
.box {
  /* Content - 內容區域 */
  width: 300px;
  height: 100px;
  
  /* Padding - 內邊距 */
  padding: 20px;
  
  /* Border - 邊框 */
  border: 10px solid yellow;
  
  /* Margin - 外邊距 */
  margin: 30px;
}`;

	return (
		<SlideLayout
			prevSlide="/lesson1/slide11"
			nextSlide="/lesson1/slide13"
			currentSlide="12"
			totalSlides="25"
			courseName="NTNU Web Development Course"
		>
			<PreviewStyles />
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
							<h1 className="text-4xl font-bold text-white mb-2">CSS 盒模型</h1>
							<h2 className="text-2xl text-tech-highlight/80">Box Model</h2>
						</motion.div>

						<div className="grid grid-cols-2 gap-8">
							{/* Visual Box Model */}
							<motion.div
								initial={{ opacity: 0, scale: 0.9 }}
								animate={{ opacity: 1, scale: 1 }}
								transition={{ duration: 0.6, delay: 0.2 }}
								className="space-y-4"
							>
								<h2 className="text-2xl font-bold text-tech-highlight">
									盒模型視覺化
								</h2>
								<div className="box-model-demo">
									<div className="box-layer margin-layer">
										<span className="layer-label margin-label">Margin</span>
										<div className="box-layer border-layer">
											<span className="layer-label border-label">Border</span>
											<div className="box-layer padding-layer">
												<span className="layer-label padding-label">
													Padding
												</span>
												<div className="box-layer content-layer">
													<span className="layer-label content-label">
														Content
													</span>
													實際內容區域
												</div>
											</div>
										</div>
									</div>
								</div>
							</motion.div>

							{/* Code Example */}
							<motion.div
								initial={{ opacity: 0, x: 20 }}
								animate={{ opacity: 1, x: 0 }}
								transition={{ duration: 0.6, delay: 0.4 }}
								className="space-y-4"
							>
								<h2 className="text-2xl font-bold text-tech-highlight">
									程式碼示例
								</h2>
								<div className="bg-black/20 rounded-lg border border-tech-grid-bright/30 p-4">
									<CodeBlock code={boxModelCode} language="css" />
								</div>
								<div className="mt-4 text-tech-highlight/80">
									<ul className="space-y-2">
										<li>• Content: 實際內容區域，可設置寬高</li>
										<li>• Padding: 內容與邊框之間的空間</li>
										<li>• Border: 內容區域的邊界線條</li>
										<li>• Margin: 元素與其他元素之間的間距</li>
									</ul>
								</div>
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
