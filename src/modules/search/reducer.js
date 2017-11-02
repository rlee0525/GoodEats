import merge from 'lodash/merge';
import { QUERY_PLACES } from './actions';

const _defaultState = {
  center: { lat: 37.783052, lng: -122.39103 }, 
  address: "250 Brannan St"
};

const QueryReducer = (state = _defaultState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case QUERY_PLACES:
      return merge({}, { query: action.query });
    default:
      return state;
  }
};

export default QueryReducer;