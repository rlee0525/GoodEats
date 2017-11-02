import React from 'react';
import { connect } from 'react-redux';

import { receiveResults } from '../result/actions';
import { initMap, getRestaurants } from './util';

class Map extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    initMap(this.props.query.center);
    getRestaurants(this.props.query.center, this.props);
  }

  componentWillReceiveProps(newProps) {
    if (this.props.query.center !== newProps.query.center) {
      getRestaurants(newProps.query.center, this.props);
    }
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
  receiveResults: results => dispatch(receiveResults(results))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Map);
