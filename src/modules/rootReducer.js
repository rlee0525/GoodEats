import { combineReducers } from 'redux';

import QueryReducer from './search/reducer';

const rootReducer = combineReducers({
  query: QueryReducer
});

export default rootReducer;