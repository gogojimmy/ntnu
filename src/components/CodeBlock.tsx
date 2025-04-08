import { Highlight, themes } from "prism-react-renderer";
import React from "react";

interface CodeBlockProps {
	code: string;
	language: string;
	className?: string; // Allow passing additional class names
}

const CodeBlock: React.FC<CodeBlockProps> = ({
	code,
	language,
	className = "",
}) => (
	<Highlight theme={themes.nightOwl} code={code.trim()} language={language}>
		{({ style, tokens, getLineProps, getTokenProps }) => (
			<pre
				className={`bg-black/30 p-4 rounded-lg overflow-x-auto text-sm font-mono ${className}`}
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

export default CodeBlock;
