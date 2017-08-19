var SteamApi = require('steam-api');
var key = 'CB5D3B8C8990F4082E3CD42A2BCFF822';
var app = new SteamApi.App(key);
app.GetAppList().done(function(result){
  console.log(result);
});
app.GetAppList().done(function(result){
	for (var i=0; i<result.length; i++) {
	    console.log(result[i]);
	}
});
   