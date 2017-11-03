import React from 'react';

let google = window.google;

class ResultListItem extends React.Component {
  constructor(props) {
    super(props);

    this.getDirections = this.getDirections.bind(this);
  }

  getDirections() {
    document.getElementById('result-list-direction-container').innerHTML = "";
    
    let { query, result } = this.props;
    let directionsService = new google.maps.DirectionsService();
    let directionsDisplay = new google.maps.DirectionsRenderer();

    let map = new google.maps.Map(document.getElementById('google-map'), {
      zoom: 14,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    });

    directionsDisplay.setMap(map);
    directionsDisplay.setPanel(document.getElementById('result-list-direction-container'));

    let request = {
      origin: query.address,
      destination: result.vicinity,
      travelMode: google.maps.DirectionsTravelMode.DRIVING
    };

    directionsService.route(request, function (response, status) {
      if (status === google.maps.DirectionsStatus.OK) {
        directionsDisplay.setDirections(response);
      }
    });
  }

  render() {
    let result = this.props.result;
    let openNow, openStatus;
    let price = "";
    let { rating, vicinity, price_level, opening_hours, id } = result;
    let url = "http://res.cloudinary.com/rlee0525/image/upload/v1509659284/no-image_mbwhht.png";

    if (result.photos[0] !== 'undefined') {
      url = result.photos[0].getUrl({
        maxWidth: 200,
        maxHeight: 200
      });
    }

    rating = rating * 20;
    
    if (price_level) {
      for (let i = 0; i < price_level; i++) {
        price += "$";
      }
    } else {
      price = "N/A";
    }

    if (opening_hours) {
      openNow = result.opening_hours.open_now;
      openStatus = openNow ? <span className="green">Open</span> : <span className="red">Closed</span>;
    } else {
      openStatus = <span>N/A</span>;
    }
    
    return (
      <div className="result-list-item-container" id={id} onClick={this.getDirections}>
        <img src={url} alt="res-img" className="result-item-img" />
        <div className="restaurant-info-container">
          <div className="restaurant-name">{result.name}</div>

          <div className="star-ratings-css">
            <div className="star-ratings-css-top" style={{"width": `${rating}%`}}>
              <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
            </div>
            <div className="star-ratings-css-bottom">
              <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
            </div>
          </div>

          <div className="restaurant-address">{vicinity}</div>
          <div className="restaurant-more-info">
            <div className="restaurant-price">{price}</div>
            <div className="restaurant-divider">||</div>
            <div className="restaurant-status">{openStatus}</div>
          </div>
        </div>
      </div>
    );
  }
}

export { ResultListItem };