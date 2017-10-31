import merge from 'lodash/merge';
import { QUERY_PLACES } from './actions';

const QueryReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case QUERY_PLACES:
      return merge({}, { query: action.query });
    default:
      return state;
  }
};

export default QueryReducer;