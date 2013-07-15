
var http = require("http");
function onRequest(request, response){
	response.writeHead(200, {"Content-Type": "text/plain"});
	response.send("Hello World");
	response.end();
}

http.createServer(onRequest).listen(5000);
console.log("Server has started.");