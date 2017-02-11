var map;
function loadMap() {
	var mapOptions = {
		zoom: 10,
  		center: new google.maps.LatLng(60, 200)
	};
		var mapid = document.getElementById('map');
			map = new google.maps.Map(mapid, mapOptions);
};

google.maps.event.addDOMListener(window, 'load', loadMap());