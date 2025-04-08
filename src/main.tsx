import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { SlidesProvider } from "./context/SlidesContext";

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<SlidesProvider initialTotalSlides={31}>
			<App />
		</SlidesProvider>
	</React.StrictMode>
);
