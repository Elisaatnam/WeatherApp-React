import { useEffect, useState } from "react";
import Nav from "../components/Nav";
const API_KEY = import.meta.env.VITE_API_KEY;
const Leipzig = props => {
	const [weatherData, setWeatherData] = useState();

	useEffect(() => {
		fetch(
			`https://api.openweathermap.org/data/2.5/weather?q=Leipzig&lang=de&units=metric&appid=${API_KEY}`,
		)
			.then(res => res.json())
			.then(data => setWeatherData(data))
			.catch(err => console.log("Fehler:", err));
	}, []);

	console.log(weatherData);
	return (
		<div className='container'>
			<Nav />
			{weatherData ? (
				<article>
					<div className='icon-div'>
						{weatherData.weather[0].description} in {weatherData.name}{" "}
						<img
							src={`http://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`}
							alt=''
						/>
					</div>
					<div className='temp-div'>
						Temparatur: {Math.round(weatherData.main.temp)}°C
					</div>
					<div className='wind-div'>
						Wind: {Math.round(weatherData.wind.speed * 3.701)}km/h
					</div>
				</article>
			) : (
				<p>Loading weather data...</p>
			)}
		</div>
	);
};

export default Leipzig;
