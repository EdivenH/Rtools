import {
  SET_LOCATION,
  UPDATE_WEATHER_NOW,
  UPDATE_WEATHER_FORE,
} from './ActionType';

export function setLocation(location) {
  return {
    type: SET_LOCATION,
    location,
  };
}

export function updateWeatherNow(lives) {
  return {
    type: UPDATE_WEATHER_NOW,
    lives,
  };
}

export function updateWeatherFore(forecasts) {
  return {
    type: UPDATE_WEATHER_FORE,
    forecasts,
  };
}
