var http = require("http");

var PORT1 = 7000;
var PORT2 = 7500;

function compliment(request, response) {
    response.end("You are a beautiful soul.");
}

function insult(request,response) {
    response.end("You need to shower more often.");
}

var server1 = http.createServer(compliment);
var server2 = http.createServer(insult);

server1.listen(PORT1, function () {
    console.log("Server listening on: http://localhost:" + PORT1)
});

server2.listen(PORT2, function () {
    console.log("Server listening on: http://localhost:" + PORT2)
});