import "./App.css";
import Nav from "./components/Nav";
import React, { useState, useEffect } from "react";
import Bremen from "./pages/Bremen";

const API_KEY = import.meta.env.VITE_API_KEY;

function App() {
	const [weatherData, setWeatherData] = useState();

	useEffect(() => {
		fetch(
			`https://api.openweathermap.org/data/2.5/weather?q=Bremen&lang=de&units=metric&appid=${API_KEY}`,
		)
			.then(res => res.json())
			.then(data => setWeatherData(data))
			.catch(err => console.log("Fehler:", err));
	}, []);

	console.log(weatherData);

	return (
		<div className='container'>
			<Nav />
			<div>
				{weatherData ? (
					<Bremen
						temp={Math.round(weatherData.main.temp)}
						weather={weatherData.weather[0].description}
						icon={weatherData.weather[0].icon}
						wind={Math.round(weatherData.wind.speed * 3.701)}
						name={weatherData.name}
					/>
				) : (
					<p>Loading weather data...</p>
				)}
			</div>
		</div>
	);
}

export default App;
