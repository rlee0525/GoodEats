import React from 'react';
import { connect } from 'react-redux';

import { receiveResults, clearResults } from '../result/actions';
import { initMap, getRestaurants } from './util';

class Map extends React.Component {
  componentDidMount() {
    initMap(this.props.query.center);
    getRestaurants(this.props.query.center, this.props);
  }

  componentWillReceiveProps(newProps) {
    if (this.props.query.center !== newProps.query.center) {
      initMap(newProps.query.center);
      getRestaurants(newProps.query.center, this.props);
    }
  }

  componentWillUnmount() {
    this.props.clearResults();
  }

  render() {
    return (
      <div className="map-container">
        <div ref="map" id="google-map" />
      </div>
    );
  }
}

const mapStateToProps = ({ query, results }) => ({
  query,
  results
});

const mapDispatchToProps = (dispatch) => ({
  receiveResults: results => dispatch(receiveResults(results)),
  clearResults: () => dispatch(clearResults())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Map);
