export const WEATHER_DATA = 'WEATHER_DATA';
import { getData } from './weathers.getaway.js'

export const weatherDataReceived = (weatherData) => {
    return {
        type: WEATHER_DATA,
        payload: {
            weatherData
        }
    }
}


export const getWeatherData = () => {
    return (dispatch) => {
        getData().then((weatherData) =>
            dispatch(weatherDataReceived(weatherData))
        );
    };
};