import { combineReducers } from 'redux';

import QueryReducer from './search/reducer';
import ResultsReducer from './result/reducer';

const rootReducer = combineReducers({
  query: QueryReducer,
  results: ResultsReducer
});

export default rootReducer;