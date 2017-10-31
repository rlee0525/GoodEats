import React from 'react';
import { connect } from 'react-redux';

import { queryPlaces } from './actions';

class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      query: ""
    };
  }

  render() {
    return (
      <div className="search-container">
        Hello
      </div>
    );
  }
}

const mapStateToProps = ({ query }) => ({
  query,
});

const mapDispatchToProps = (dispatch) => ({
  queryPlaces: query => dispatch(queryPlaces(query)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);