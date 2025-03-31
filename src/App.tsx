import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Slide1 from "./slides/lesson1/Slide1";
import "./App.css";

function App() {
	return (
		<Router>
			<Routes>
				<Route
					path="/"
					element={
						<div className="min-h-screen bg-gray-900 text-white p-8">
							<div className="max-w-4xl mx-auto">
								<h1 className="text-4xl font-bold mb-8">Course Navigation</h1>
								<div className="grid grid-cols-2 gap-6">
									{[1, 2, 3, 4].map((lesson) => (
										<div key={lesson} className="bg-gray-800 p-6 rounded-lg">
											<h2 className="text-2xl font-bold mb-4">
												Lesson {lesson}
											</h2>
											<Link
												to={`/lesson${lesson}/slide1`}
												className="inline-block px-4 py-2 bg-blue-600 rounded-lg hover:bg-blue-700"
											>
												Start Lesson
											</Link>
										</div>
									))}
								</div>
							</div>
						</div>
					}
				/>
				<Route path="/lesson1/slide1" element={<Slide1 />} />
			</Routes>
		</Router>
	);
}

export default App;
