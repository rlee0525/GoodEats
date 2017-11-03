// Map style
const style = {
  pastel:
  [
    { "featureType": "administrative", "elementType": "labels.text.fill", "stylers": [{ "color": "#6195a0" }] },
    { "featureType": "administrative.province", "elementType": "geometry.stroke", "stylers": [{ "visibility": "off" }] },
    { "featureType": "landscape", "elementType": "geometry", "stylers": [{ "lightness": "0" }, { "saturation": "0" }, { "color": "#f5f5f2" }, { "gamma": "1" }] },
    { "featureType": "landscape.man_made", "elementType": "all", "stylers": [{ "lightness": "-3" }, { "gamma": "1.00" }] },
    { "featureType": "landscape.natural.terrain", "elementType": "all", "stylers": [{ "visibility": "off" }] },
    { "featureType": "poi", "elementType": "all", "stylers": [{ "visibility": "off" }] },
    { "featureType": "poi.park", "elementType": "geometry.fill", "stylers": [{ "color": "#bae5ce" }, { "visibility": "on" }] },
    { "featureType": "road", "elementType": "all", "stylers": [{ "saturation": -100 }, { "lightness": 45 }, { "visibility": "simplified" }] },
    { "featureType": "road.highway", "elementType": "all", "stylers": [{ "visibility": "simplified" }] },
    { "featureType": "road.highway", "elementType": "geometry.fill", "stylers": [{ "color": "#fac9a9" }, { "visibility": "simplified" }] },
    { "featureType": "road.highway", "elementType": "labels.text", "stylers": [{ "color": "#4e4e4e" }] },
    { "featureType": "road.arterial", "elementType": "labels.text.fill", "stylers": [{ "color": "#787878" }] },
    { "featureType": "road.arterial", "elementType": "labels.icon", "stylers": [{ "visibility": "off" }] },
    { "featureType": "transit", "elementType": "all", "stylers": [{ "visibility": "simplified" }] },
    { "featureType": "transit.station.airport", "elementType": "labels.icon", "stylers": [{ "hue": "#0a00ff" }, { "saturation": "-77" }, { "gamma": "0.57" }, { "lightness": "0" }] },
    { "featureType": "transit.station.rail", "elementType": "labels.text.fill", "stylers": [{ "color": "#43321e" }] },
    { "featureType": "transit.station.rail", "elementType": "labels.icon", "stylers": [{ "hue": "#ff6c00" }, { "lightness": "4" }, { "gamma": "0.75" }, { "saturation": "-68" }] },
    { "featureType": "water", "elementType": "all", "stylers": [{ "color": "#eaf6f8" }, { "visibility": "on" }] },
    { "featureType": "water", "elementType": "geometry.fill", "stylers": [{ "color": "#c7eced" }] },
    { "featureType": "water", "elementType": "labels.text.fill", "stylers": [{ "lightness": "-49" }, { "saturation": "-53" }, { "gamma": "0.79" }] }
  ]
};

const google = window.google;
let map, options, service, infowindow, location;

export const initMap = (center) => {
  map = document.getElementById('google-map');
  options = {
    center,
    zoom: 15,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
  };

  map = new google.maps.Map(map, options);
  service = new google.maps.places.PlacesService(map);
  infowindow = new google.maps.InfoWindow();
  map.setOptions({ styles: style['pastel'] });
};

export const createMarker = (place) => {
  let marker = new google.maps.Marker({
    map: map,
    position: place.geometry.location,
    animation: google.maps.Animation.DROP,
    icon: 'http://maps.google.com/mapfiles/ms/icons/red-dot.png'
  });

  let url = "http://res.cloudinary.com/rlee0525/image/upload/v1509659284/no-image_mbwhht.png";
  if (place.photos[0] !== 'undefined') {
    url = place.photos[0].getUrl({
      maxWidth: 100,
      maxHeight: 50
    });
  }

  let content = '<div id="iw-container">' +
    `<img src="${url}" alt="place-img" id="iw-img">` +
    `<ul id="iw-content-container">` +
    `<li id="iw-title">${place.name}</li>` +
    `<li id="iw-rating">${place.rating} <i class="material-icons" id="iw-star">grade</i></li>` +
    `</ul>` +
    '</div>';
    
  google.maps.event.addListener(marker, 'mouseover', function () {
    marker.setIcon('http://maps.google.com/mapfiles/ms/icons/green-dot.png');
    infowindow.setContent(content);
    infowindow.open(map, this);
  });

  google.maps.event.addListener(marker, 'mouseout', function () {
    marker.setIcon('http://maps.google.com/mapfiles/ms/icons/red-dot.png');
    infowindow.close();
  });
};

export const getRestaurants = (center, props) => {
  location = new google.maps.LatLng(center.lat, center.lng);

  let request = {
    location,
    radius: '1000',
    type: ['restaurant']
  };

  service = new google.maps.places.PlacesService(map);
  service.nearbySearch(request, function (results, status) {
    if (status === google.maps.places.PlacesServiceStatus.OK) {
      results = results.sort((a, b) => b.rating - a.rating);
      props.receiveResults(results);
      
      for (let i = 0; i < results.length; i++) {
        if (results[i].rating > 4.0) createMarker(results[i]);
      }
    }
  });
};
