const Bremen = props => {
	return (
		<>
			<article>
				<div className='icon-div'>
					{props.weather} in {props.name}{" "}
					<img
						src={`http://openweathermap.org/img/w/${props.icon}.png`}
						alt=''
					/>
				</div>
				<div className='temp-div'>Temparatur: {props.temp} °C</div>
				<div className='wind-div'>Wind: {props.wind}km/h</div>
			</article>
		</>
	);
};

export default Bremen;
