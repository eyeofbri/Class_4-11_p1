// IN CLASS WORK ONE:

// Instructions
// Using the previous example as a guide, create an app that has two web servers.
// One that listens on port 7000 and one that listens on port 7500.

// Make sure you create a Github repo and commit this code!


//pulling in the http package
var http = require("http"); //the http package is built in




//specify the port
//this is where the server will be listening
var PORT_1 = 7000;
var PORT_2 = 7500;


// The one listening on port 7000 will always tell the user something good about themselves.
//function to handle request and responses
function handleRequest_1(request, response) {
	response.end("You're looking good today. "+ request.url );
}


// The one listening on 7500 will always tell the user something bad about themselves.
//function to handle request and responses
function handleRequest_2(request, response) {
	response.end("You Suck! "+ request.url );
}


//create our server
var server_1 = http.createServer( handleRequest_1 );
//start up the server
server_1.listen(PORT_1, function(){
	console.log("Server is listening on port: "+ PORT_1);
});


//create our server
var server_2 = http.createServer(handleRequest_2);
//start up the server
server_2.listen(PORT_2, function(){
	console.log("Server is listening on port: "+ PORT_2);
});
