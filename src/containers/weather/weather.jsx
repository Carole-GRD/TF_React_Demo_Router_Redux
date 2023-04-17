import { useCallback } from "react"
import SearchBar from "../../components/search-bar/search-bar"
import WeatherForecast from "./weather-forecast"


const Weather = () => {

    const handleCitySearch = useCallback((city) => {
        // TODO Lancer une requête AJAX via Redux !

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