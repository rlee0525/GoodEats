import React from 'react';
import { connect } from 'react-redux';

import { queryPlaces } from './actions';
import Map from '../map';

const google = window.google;

class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      query: "",
      center: { lat: 37.783052, lng: -122.39103 },
      zoom: 14,
      address: ""
    };

    this.updateAddress = this.updateAddress.bind(this);
  }

  componentDidMount() {
    let input = document.getElementById('address');
    let autocomplete = new google.maps.places.Autocomplete(input);

    autocomplete.addListener('place_changed', () => {
      let place = autocomplete.getPlace();
      let address = place.formatted_address;
      let lat = place.geometry.location.lat();
      let lng = place.geometry.location.lng();

      this.setState({
        address,
        lat,
        lng
      });
    });
  }

  updateAddress() {
    let address = document.getElementById('address').value;
    this.setState({ address });
  }

  render() {
    return (
      <div className="search-container">
        <div className="search-bar">
          <input
            maxLength={50}
            value={this.state.address}
            onChange={this.updateAddress}
            type="text"
            id="address"
            placeholder="Where are you?"
            autoFocus={true}
          />
        </div>

        {/* <Map center={this.state.center} address={this.state.address} /> */}
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