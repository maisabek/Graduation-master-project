// window.lat = 30.5605;
// window.lng = 31.0079;

// window.lat = 30.637468;
// window.lng = 30.914927;
window.lat = 30.530244;
window.lng = 30.9236365;

var map;
var mark;
var lineCoords = [];
  
var initialize = function() {
  map  = new google.maps.Map(document.getElementById('map-canvas'), {center:{lat:lat,lng:lng},zoom:12});
  mark = new google.maps.Marker({position:{lat:lat, lng:lng}, map:map});
};

window.initialize = initialize;

var redraw = function(payload) {
  if(payload.message.lat){
  lat = payload.message.lat;
  lng = payload.message.lng;

  map.setCenter({lat:lat, lng:lng, alt:0});
  mark.setPosition({lat:lat, lng:lng, alt:0});
  
  lineCoords.push(new google.maps.LatLng(lat, lng));

  var lineCoordinatesPath = new google.maps.Polyline({
	path: lineCoords,
	geodesic: true,
	strokeColor: '#2E10FF'
  });
  
  lineCoordinatesPath.setMap(map);}
};

var pnChannel = "raspi-tracker";

var pubnub = new PubNub({
  publishKey:   'pub-c-70b23baa-eb0f-4f80-8c38-8b76bb13bdca',
  subscribeKey: 'sub-c-a6c87a66-ad02-11ea-8210-c6b11d1b7ea4'
});
	
document.querySelector('#action').addEventListener('click', function(){
	var text = document.getElementById("action").textContent;
	if(text == "Start Tracking"){
		pubnub.subscribe({channels: [pnChannel]});
		pubnub.addListener({message:redraw});
		document.getElementById("action").classList.add('btn-danger');
		document.getElementById("action").classList.remove('btn-success');
		document.getElementById("action").textContent = 'Stop Tracking';
	}
	else{
		pubnub.unsubscribe( {channels: [pnChannel] });
		document.getElementById("action").classList.remove('btn-danger');
		document.getElementById("action").classList.add('btn-success');
		document.getElementById("action").textContent = 'Start Tracking';
	}
	});