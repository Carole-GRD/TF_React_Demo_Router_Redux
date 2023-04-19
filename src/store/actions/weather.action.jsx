import  { createAsyncThunk } from '@reduxjs/toolkit'
import { fetchWeatherForecast } from '../../api/weather.api'


// Action qui envoi une requête AJAX
export const weatherForecastActionFetch = createAsyncThunk(
    'weather/fetch-forecast',
    async (city) => {
        // Envoi de la requête et renvoi la réponse
        return await fetchWeatherForecast(city)
    }
)


// Action qui permet de recharger les données, 
// sans connaitre la city au niveau du composant qui lance la requête.
export const weatherActionRelaod = createAsyncThunk(
    'weather/reload',
    async (arg, thunkAPI) => {

        // Récupérer la ville depuis le state
        const city = thunkAPI.getState().weather?.result?.city;

        if (city) {
            // Déclenche une action du store
            thunkAPI.dispatch(weatherForecastActionFetch(city));
        }
    }
)