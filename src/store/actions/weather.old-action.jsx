import { createAction } from '@reduxjs/toolkit'
import { fetchWeatherForecast } from '../../api/wheather.api';


// Gestion de la requête "à l'ancienne" -> Sans le "createAsyncThunk"
export const weatherForecastActionPending = createAction('weather/fetch-forecast/pending');
export const weatherForecastActionFulfilled = createAction('weather/fetch-forecast/fulfilled');
export const weatherForecastActionRejected = createAction('weather/fetch-forecast/rejected');


export const weatherForecastActionFetch = (city) => {

    // Renvoyer une fonction asynchrone (géré par redux-thunk)
    return async (dispatch) => {

        // 1) Dispatch du "pending"  de la requête
        dispatch(weatherForecastActionPending())

        // 2) Envoi de larequête dansun bloc "try/catch"
        try {
            const response = await fetchWeatherForecast(city)

            // 3.1) Dispatch de "fulfilled" si la requête est réussie
            dispatch(weatherForecastActionFulfilled(response))
        }
        catch (error) {
            // 3.2) Dispatch de "fulfilled" si la requête est en erreur
            dispatch(weatherForecastActionRejected(error))
        }
    }

}