import data from './data.weather.json'
import style from './weather.module.css'
import clsx from 'clsx'


const WeatherForecastItem = ({temp, tempFeelsLike, weatherDescription, weatherUrlIcon, probaPrecipitation, isDay, time}) => {

    const styleItem = clsx(
        style['weather-item'], 
        isDay ? style['weather-day'] : style['weather-night']
    )

    return (
        <li className={styleItem}>
            <p>{time}</p>
            <img src={weatherUrlIcon} alt={weatherDescription} title={weatherDescription} />
            <p>Temp : {temp} <br /> Ressenti : {tempFeelsLike}</p>
            {(probaPrecipitation > 0.5 && (
                <p>Risque de pluie ! 🌧</p>
            ))}
        </li>
    )
}
    


const WeatherForecast = () => {

    // TODO : Use data in store Redux. Remove Data !!!
    const result = data

    // TODO : Gestion du loading !

    return (
        <div>
            <p className={style['weather-title']}>
                Météo de "{result.city}" ({result.country})
            </p>
            <ul className={style['weather-results']}>
                {result.data.map(weather => (
                    <WeatherForecastItem {...weather} key={weather.time} />
                ))}
            </ul>
        </div>
    )
}

export default WeatherForecast