import React from "react";

interface Props {
	children: React.ReactNode;
}

interface State {
	hasError: boolean;
	error: Error | null;
}

class ErrorBoundary extends React.Component<Props, State> {
	constructor(props: Props) {
		super(props);
		this.state = {
			hasError: false,
			error: null,
		};
	}

	static getDerivedStateFromError(error: Error): State {
		return {
			hasError: true,
			error,
		};
	}

	componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
		console.error("Error caught by boundary:", error, errorInfo);
	}

	render() {
		if (this.state.hasError) {
			return (
				<div className="p-4 bg-red-500/10 rounded-lg border border-red-500/30">
					<h2 className="text-xl font-bold text-red-500 mb-2">
						Something went wrong
					</h2>
					<p className="text-gray-300">{this.state.error?.message}</p>
					<button
						className="mt-4 px-4 py-2 bg-red-500/20 text-red-500 rounded hover:bg-red-500/30 transition-colors"
						onClick={() => this.setState({ hasError: false, error: null })}
					>
						Try again
					</button>
				</div>
			);
		}

		return this.props.children;
	}
}

export default ErrorBoundary;
