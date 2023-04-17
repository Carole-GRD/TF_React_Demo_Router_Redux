import { createReducer } from '@reduxjs/toolkit'
import { weatherForecastActionFetch } from '../actions/weather.action'


// L'état inital pour "Weather"
const initialState = {
    loading : false,
    result : null,
    error : null
}


// Définition du Reducer pour "Weather"
const weatherReducer = createReducer(initialState, builder => {
    builder
        .addCase(weatherForecastActionFetch.pending, (state) => {
            state.loading = true;
            state.result = null;
            state.error = null;
        })
        .addCase(weatherForecastActionFetch.fulfilled, (state, action) => {
            state.loading = false;
            state.result = action.payload;
        })
        .addCase(weatherForecastActionFetch.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error;
        })
})


export default weatherReducer;