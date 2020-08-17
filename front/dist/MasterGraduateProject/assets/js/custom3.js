function newPoint(time) {
	var radius = 0.01;
	var x = Math.random() * radius;
	var y = Math.random() * radius;
	return {lat:window.lat + y, lng:window.lng + x};
	  }
	setInterval(function() {
	pubnub.publish({channel:pnChannel, message:newPoint()});
	}, 500);

	
	
$('.button_class').click(function(){
  var cmd=require('node-cmd');
// var cmd=require('../cmd.js');

	cmd.get(
	 'javac',
	 function(err, data, stderr){
		 console.log('the current dir contains these files :\n\n',data)
	 }
 );
});
