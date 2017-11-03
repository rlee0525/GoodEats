# GoodEats

[website]: http://www.raymondlee.io/GoodEats

GoodEats is a search engine for restaurants with 4+ stars (based on Google Reviews) near you built using React and Redux. It utilizes Google Places API to search for location, display restaurant details, and directions to the restaurant from your current location.

- [Live][website]

## Highlighted Features

- Search restaurants with 4+ stars near queried area
- Google Maps pins for restaurants
- Detailed information of the restaurants
- Direction to the restaurants from your current location

Searches nearby Restaurants / Rank them based on ratings
```javaScript
export const getRestaurants = (center, props) => {
  location = new google.maps.LatLng(center.lat, center.lng);

  let request = {
    location,
    radius: '1500',
    type: ['restaurant']
  };

  service = new google.maps.places.PlacesService(map);
  service.nearbySearch(request, function (results, status) {
    if (status === google.maps.places.PlacesServiceStatus.OK) {
      results = results.sort((a, b) => b.rating - a.rating);
      props.receiveResults(results);
      
      for (let i = 0; i < results.length; i++) {
        if (results[i].rating > 4.0) {
          if (results[i].opening_hours && results[i].opening_hours.open_now) {
            createMarker(results[i], true);
          } else {
            createMarker(results[i], false);
          }
        }
      }
    }
  });
};
```

Get directions to the restaurant
```javaScript
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
```

## Future Implementations

- [ ] Customize search parameters
- [ ] Yelp Review Integration