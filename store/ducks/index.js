import { combineReducers } from 'redux';

import meals from './meals';

const reducers = combineReducers({
  meals: meals
});

export default reducers;