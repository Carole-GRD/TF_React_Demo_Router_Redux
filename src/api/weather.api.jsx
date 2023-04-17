import axios from 'axios'

const URL__WEATHER__FORECAST = import.meta.env.VITE__URL__WEATHER__FORECAST;
const WEATHER__API__KEY = import.meta.env.VITE__WEATHER__API__KEY;

export const fetchWeatherForecast = (city) => {

    // console.log('wheather.api.jsx - URL__WEATHER__FORECAST : ', URL__WEATHER__FORECAST);
    // console.log('wheather.api.jsx - import.meta.env : ', import.meta.env);

    return axios
        .get(URL__WEATHER__FORECAST, {
            params: {
                appid: WEATHER__API__KEY,
                q: city,
                units: 'metric',
                lang: 'fr',
                cnt: 5
            }      
        })
        .then(({data}) => {
            return {
                city: data.city.name,
                country: data.city.country,
                count: data.cnt,
                data: data.list.map(item => ({
                    temp: item.main.temp,
                    tempFeelsLike: item.main.feels_like,
                    weatherDescription: item.weather[0].description,
                    weatherUrlIcon: `https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`,
                    probaPrecipitation: item.pop,
                    isDay: item.sys.pod === 'd',
                    time: item.dt_txt
                }))

            }
        })
}
