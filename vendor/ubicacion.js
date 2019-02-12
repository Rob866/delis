//27.071416, -109.451178
function initMap() {
  var location = { lat: 27.071416, lng: -109.451178 };
  var map = new google.maps.Map(document.getElementById("map"), {
    center: location,
    zoom: 15
  });

  var marker = new google.maps.Marker({
    position: location,
    map: map
  });

  console.log(map, marker);
}
