import data from './data.weather.json'
import style from './weather.module.css'
import clsx from 'clsx'
import { useSelector } from 'react-redux'


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
    // const result = data

    // Récupération des données du store
    // const result = useSelector(state => state.weather.result)
    // const loading = useSelector(state => state.weather.loading)
    // const error = useSelector(state => state.weather.error)
    // OU BIEN
    const { loading, result, error} = useSelector(state => state.weather)

    if (loading) {
        return (
            <div>
                <p className={style['weather-title']}>Chargement...</p>
            </div>
        )
    }

    if (error) {
        return (
            <div>
                 <p className={style['weather-title']}>Erreur !</p>
            </div>
        )
    }

    if (!result) {
        return (
            <div>
                 <p className={style['weather-title']}>Pas de résultat</p>
            </div>
        )
    }


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