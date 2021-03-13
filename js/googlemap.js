var map, marker, myLatlng, myOptions;

function loadMap() {
	myLatlng = new google.maps.LatLng(30.3753,69.3451);
	myOptions = {
    zoom: 6,
    center: myLatlng,
  }
  
	map = new google.maps.Map(document.getElementById("map"), myOptions);

  	marker = new google.maps.Marker({
		position: myLatlng, 
		map: map,
		draggable: true
	});

  google.maps.event.addListener(marker, 'dragend', function (event) {
	document.getElementById("lat").value = marker.getPosition().lat();
	document.getElementById("lng").value = marker.getPosition().lng();
	map.setCenter(marker.getPosition());
  });
}

function getLocation() {
	if (navigator.geolocation) {
	  navigator.geolocation.getCurrentPosition(showPosition);
	} else {
	  console.log("Geolocation is not supported by this browser.");
	}
  }
  
function showPosition(position) {
	document.getElementById("lat").value = position.coords.latitude;
	document.getElementById("lng").value = position.coords.longitude;
	marker.setPosition({
		lat: position.coords.latitude,
		lng: position.coords.longitude
	});
	map.setCenter(marker.getPosition());
	map.setZoom(12);
}

window.onload = getLocation();