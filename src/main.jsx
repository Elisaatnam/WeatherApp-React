import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Duesseldorf from "./pages/Duesseldorf.jsx";
import Berlin from "./pages/Berlin.jsx";
import Leipzig from "./pages/Leipzig.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<App />} />
				<Route path='/duesseldorf' element={<Duesseldorf />} />
				<Route path='/berlin' element={<Berlin />} />
				<Route path='/leipzig' element={<Leipzig />} />
			</Routes>
		</BrowserRouter>
	</React.StrictMode>,
);
