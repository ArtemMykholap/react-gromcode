  import { WEATHER_DATA } from './weather.actions.js';

  const initialData = []

  export const weatherReducer = (state = initialData, action) => {
      switch (action.type) {
          case WEATHER_DATA:

              return action.payload.weatherData;
          default:
              return state
      }
  }