
var http = require("http");
function onRequest(request, response){
	console.log("Request Received.");
	response.writeHead(200, {"Content-Type": "text/plain"});
	response.write("Hello World");
	response.end();
}

http.createServer(onRequest).listen(process.env.PORT || 5000);
console.log("Server has started.");