import  { createAsyncThunk } from '@reduxjs/toolkit'
import { fetchWeatherForecast } from '../../api/weather.api'

export const weatherForecastActionFetch = createAsyncThunk(
    'weather/fetch-forecast',
    async (city) => {
        // Envoi de la requête et renvoi la réponse
        return await fetchWeatherForecast(city)
    }
)