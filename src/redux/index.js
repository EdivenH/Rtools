import { combineReducers } from 'redux';
import {
  SET_LOCATION,
  UPDATE_WEATHER_NOW,
  UPDATE_WEATHER_FORE,
} from './ActionType';
import { setLocation, updateWeather } from '../actions/action';

const initState = {
  location: {
    city: '',
    adcode: '000000',
  },
  lives: [],
  forecasts: [],
};

function location(state, action) {
  switch (action.type) {
    case SET_LOCATION:
      return {
        ...state,
        ...action.location,
      };
    default:
      return state;
  }
}

function lives(state, action) {
  switch (action.type) {
    case UPDATE_WEATHER_NOW:
      return [...action.lives];
    default:
      return state;
  }
}

function forecasts(state, action) {
  switch (action.type) {
    case UPDATE_WEATHER_FORE:
      return [...action.forecasts];
    default:
      return state;
  }
}

const reduces = combineReducers({
  lives,
  forecasts,
});

export default reduces;
