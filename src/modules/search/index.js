import React from 'react';
import { connect } from 'react-redux';

import { queryPlaces } from './actions';
import { SearchBar } from './subcomponents';

class Search extends React.Component {
  render() {
    return (
      <div className="home-container">
        <img
          id="logo" alt="logo"
          src="http://res.cloudinary.com/rlee0525/image/upload/v1509507417/logo_iv3h6z.png"
        />

        <div className="instructions">
          Only the best restaurants near you.
        </div>

        <SearchBar {...this.props} />
      </div>
    );
  }
}

const mapStateToProps = ({ query, results }) => ({
  query,
  results
});

const mapDispatchToProps = (dispatch) => ({
  queryPlaces: query => dispatch(queryPlaces(query))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);