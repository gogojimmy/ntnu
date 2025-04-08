import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App, { allSlidePaths } from "./App.tsx";
import { SlidesProvider } from "./context/SlidesContext";

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<SlidesProvider slidePaths={allSlidePaths}>
			<App />
		</SlidesProvider>
	</React.StrictMode>
);
