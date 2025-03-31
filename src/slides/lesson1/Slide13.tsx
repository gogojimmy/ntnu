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
		.preview-section {
			background: rgba(0, 0, 0, 0.3);
			border-radius: 0.5rem;
			padding: 1.5rem;
			margin-bottom: 1rem;
		}

		.text-style-demo {
			margin-bottom: 1rem;
		}

		.text-style-demo .color-demo {
			color: #f5f524;
		}

		.text-style-demo .font-family-demo {
			font-family: 'Courier New', monospace;
		}

		.text-style-demo .font-size-demo {
			font-size: 1.5rem;
		}

		.text-style-demo .text-align-demo {
			text-align: center;
		}

		.box-style-demo {
			background: #1a1a1a;
			padding: 1rem;
			border-radius: 0.5rem;
		}

		.box-style-demo .margin-demo {
			background: #22d3ee;
			width: 100%;
			padding: 1rem;
			text-align: center;
			margin-bottom: 1rem;
			display: flex;
			align-items: center;
			justify-content: center;
		}

		.box-style-demo .padding-demo {
			background: #954ce9;
			width: 100%;
			padding: 1rem;
			text-align: center;
			margin-bottom: 1rem;
			display: flex;
			align-items: center;
			justify-content: center;
		}

		.box-style-demo .border-demo {
			border: 3px solid #f5f524;
			width: 100%;
			padding: 1rem;
			text-align: center;
			margin-bottom: 1rem;
			background: #1a1a1a;
			display: flex;
			align-items: center;
			justify-content: center;
		}

		.box-style-demo .size-demo {
			width: 200px;
			height: 100px;
			background: #f43f5e;
			display: flex;
			align-items: center;
			justify-content: center;
			margin: 0 auto;
			text-align: center;
		}

		.property-name {
			color: #22d3ee;
			font-weight: bold;
		}

		.property-value {
			color: #f5f524;
		}

		/* 新增巢狀盒模型示例 */
		.box-model-demo {
			width: 100%;
			padding: 2rem;
			position: relative;
			margin-bottom: 2rem;
		}

		.margin-box {
			background: #22d3ee;
			padding: 2rem;
			text-align: center;
		}

		.padding-box {
			background: #954ce9;
			padding: 2rem;
			margin: 1rem;
			text-align: center;
		}

		.border-box {
			border: 3px solid #f5f524;
			padding: 2rem;
			background: #1a1a1a;
			margin: 1rem;
			text-align: center;
		}

		.content-box {
			background: #f43f5e;
			padding: 1rem;
			text-align: center;
			color: white;
		}
	`}</style>
);

export default function Slide13() {
	const textStylesCode = `/* 文字樣式 */
.text {
  color: #f5f524;        /* 文字顏色 */
  font-family: 'Courier New', monospace;  /* 字體 */
  font-size: 24px;       /* 字體大小 */
  text-align: center;    /* 文字對齊 */
}`;

	const boxStylesCode = `/* 盒模型相關 */
.box {
  margin: 20px;         /* 外邊距 */
  padding: 20px;        /* 內邊距 */
  border: 3px solid yellow;  /* 邊框 */
  width: 200px;         /* 寬度 */
  height: 100px;        /* 高度 */
}`;

	return (
		<SlideLayout
			prevSlide="/lesson1/slide12"
			nextSlide="/lesson1/slide14"
			currentSlide="13"
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
							<h1 className="text-4xl font-bold text-white mb-2">
								CSS 常用屬性
							</h1>
							<h2 className="text-2xl text-tech-highlight/80">
								Common Properties
							</h2>
						</motion.div>

						<div className="grid grid-cols-2 gap-8">
							{/* Text Styles Section */}
							<motion.div
								initial={{ opacity: 0, x: -20 }}
								animate={{ opacity: 1, x: 0 }}
								transition={{ duration: 0.6, delay: 0.2 }}
								className="space-y-4"
							>
								<h2 className="text-2xl font-bold text-tech-highlight">
									文字樣式
								</h2>
								<div className="preview-section">
									<div className="text-style-demo">
										<div className="color-demo mb-4">
											<span className="property-name">color:</span> 文字顏色
										</div>
										<div className="font-family-demo mb-4">
											<span className="property-name">font-family:</span>{" "}
											程式碼字體
										</div>
										<div className="font-size-demo mb-4">
											<span className="property-name">font-size:</span> 較大文字
										</div>
										<div className="text-align-demo">
											<span className="property-name">text-align:</span>{" "}
											置中文字
										</div>
									</div>
									<CodeBlock code={textStylesCode} language="css" />
								</div>
							</motion.div>

							{/* Box Model Section */}
							<motion.div
								initial={{ opacity: 0, x: 20 }}
								animate={{ opacity: 1, x: 0 }}
								transition={{ duration: 0.6, delay: 0.4 }}
								className="space-y-4"
							>
								<h2 className="text-2xl font-bold text-tech-highlight">
									盒模型相關
								</h2>
								<div className="preview-section">
									<div className="box-style-demo">
										<div className="margin-demo">
											<span className="property-name">margin:</span> 外邊距示例
										</div>
										<div className="padding-demo">
											<span className="property-name">padding:</span> 內邊距示例
										</div>
										<div className="border-demo">
											<span className="property-name">border:</span> 邊框示例
										</div>
										<div className="size-demo">
											<span className="property-name">width/height</span>
										</div>
									</div>
									<CodeBlock code={boxStylesCode} language="css" />
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
