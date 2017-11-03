export const RECEIVE_RESULTS = "RECEIVE_RESULTS";
export const CLEAR_RESULTS = "CLEAR_RESULTS";

export const receiveResults = results => ({
  type: RECEIVE_RESULTS,
  results
});

export const clearResults = () => ({
  type: CLEAR_RESULTS
});