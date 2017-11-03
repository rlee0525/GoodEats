import { RECEIVE_RESULTS, CLEAR_RESULTS } from './actions';

const ResultsReducer = (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_RESULTS:
      return action.results;
    case CLEAR_RESULTS:
      return null;
    default:
      return state;
  }
};

export default ResultsReducer;