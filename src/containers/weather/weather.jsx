import { useCallback } from "react"
import SearchBar from "../../components/search-bar/search-bar"
import WeatherForecast from "./weather-forecast"
import { useDispatch } from "react-redux"
import { weatherForecastActionFetch } from "../../store/actions/weather.action"

const Weather = () => {

    const dispatch = useDispatch()

    const handleCitySearch = useCallback((city) => {
        // console.log('weather.jsx - city : ', city);

        // TODO Lancer une requête AJAX via Redux !
        dispatch(weatherForecastActionFetch(city))

    })

    return (
        <div>
            {/* TODO Search-bar for city */}
            <SearchBar label='Entrer une ville : ' onSearch={handleCitySearch} />
            {/* TODO Display result */}
            <WeatherForecast />
        </div>
    )
}

export default Weather