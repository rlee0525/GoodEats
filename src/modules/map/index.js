import React from 'react';
import { connect } from 'react-redux';

import { initMap, getRestaurants } from './util';

class Map extends React.Component {
  componentDidMount() {
    initMap();
    getRestaurants(this.props.query.center);
  }

  render() {
    return (
      <div className="map-container">
        <div ref="map" id="google-map" />
      </div>
    );
  }
}

const mapStateToProps = ({ query }) => ({
  query
});

const mapDispatchToProps = (dispatch) => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Map);
