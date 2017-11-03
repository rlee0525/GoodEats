import React from 'react';

class ResultListItem extends React.Component {
  render() {
    let result = this.props.result;

    let url = "http://res.cloudinary.com/rlee0525/image/upload/v1509659284/no-image_mbwhht.png";
    if (result.photos[0] !== 'undefined') {
      url = result.photos[0].getUrl({
        maxWidth: 200,
        maxHeight: 200
      });
    }

    let rating = result.rating;
    rating = rating * 20;
    
    let vicinity = result.vicinity;
    let openNow = result.opening_hours.open_now;
    let priceLevel = result.price_level;
    let price = "";
    
    for (let i = 0; i < priceLevel; i++) {
      price += "$";
    }

    if (!priceLevel) price = "N/A";

    let status = openNow ? <span className="green">Open</span> : <span className="red">Closed</span>;

    return (
      <div className="result-list-item-container">
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
            <div className="restaurant-status">{status}</div>
          </div>
        </div>
      </div>
    );
  }
}

export { ResultListItem };