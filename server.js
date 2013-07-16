
var http = require("http");
var url = require("url");

function start(route, handle){  //created a module to start the server
	function onRequest(request, response){
		var pathname = url.parse(request.url).pathname; //distinguishes request based on url path requested
		console.log("Request for " + pathname + " Received.");

		route(handle, pathname); //route callback

		response.writeHead(200, {"Content-Type": "text/plain"});
		response.write("Hello World");
		response.end();
	}

	http.createServer(onRequest).listen(process.env.PORT || 5000); //createServer returns(starts) a new web server object
	//onRequest is the call back triggered folling the createServer command
	console.log("Server has started.");
}
exports.start = start;