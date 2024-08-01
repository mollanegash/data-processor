var net = require('net');
var colors = require('colors');
var readline = require('readline');

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

var readMessage = function(client) {
	rl.question("Enter Command: ", function (line){
			client.write(line);
			if (line == "bye")
				client.end();
			else {
				setTimeout(function() {
					readMessage(client);
				}, 2000);
			};
	});
};

var client = net.connect({port:3000},
	function(){
		console.log("Connected to server");
		readMessage(client);
	});

client.on('end', function(){
	console.log("Client disconnected...");
	return;
});


// Write code for data event listener
//code so


client.on('data', data=> {
	console.log('...Recievd\n',data.toString(data));
	client.end();
});






















	