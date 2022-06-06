import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

/*==== PAGES ==== */
import Home from "./pages/Home";
import About from "./pages/About";

/*==== PAGE DATA ==== */
import { HomeData } from "./data/HomeData";
import { AboutData } from "./data/AboutData";
import Login from "./pages/Login";
import LoginCallback from "./pages/LoginCallback";


function App() {
	const { nav, footer, cards, features, hero } = HomeData
	return (
		<BrowserRouter>
			<Routes>
				<Route
					path="/"
					element={
						<Home
							nav={nav}
							footer={footer}
							cards={cards}
							features={features}
							hero={hero}
						/>
					}
				/>
				<Route
					path="/about"
					element={
						<About
							nav={AboutData.nav}
							hero={AboutData.hero}
							team={AboutData.team}
							footer={AboutData.footer}
						/>
					}
				/>
				<Route
					path="/login"
					element={
						<Login/>
					}
				/>
				<Route
					path="/login/callback"
					element={
						<LoginCallback/>
					}
				/>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
