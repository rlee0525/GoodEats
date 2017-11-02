import React from 'react';
import { connect } from 'react-redux';

import { queryPlaces } from './actions';

const google = window.google;

class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      query: "",
      center: null,
      address: ""
    };

    this.updateAddress = this.updateAddress.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    let input = document.getElementById('address');
    let autocomplete = new google.maps.places.Autocomplete(input);

    autocomplete.addListener('place_changed', () => {
      let place = autocomplete.getPlace();
      let address = place.formatted_address;
      let lat = place.geometry.location.lat();
      let lng = place.geometry.location.lng();
      let center = { lat, lng };

      this.setState({ address, center });
    });
  }

  updateAddress() {
    let address = document.getElementById('address').value;
    this.setState({ address });
  }

  handleSubmit(e) {
    e.preventDefault();
    let address = this.state.address;
    let center = this.state.center;
    let query = { address, center };

    this.props.queryPlaces(query);
    this.props.history.push('result');
  }

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

        <div className="search-container">
          <div className="search-bar">
            <form onSubmit={this.handleSubmit}>
              <input
                maxLength={50}
                value={this.state.address}
                onChange={this.updateAddress}
                type="text"
                id="address"
                placeholder="Where are you?"
                autoFocus={true}
              />
              
              <button className="address-search">
                <i className="material-icons" onClick={this.handleSubmit}>search</i>
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ query }) => ({
  query
});

const mapDispatchToProps = (dispatch) => ({
  queryPlaces: query => dispatch(queryPlaces(query)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);