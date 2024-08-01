var net = require('net');
var colors = require('../client/colors');
var cities = require('./zipCodeModule_v2');

var server = net.createServer((socket) => {
	console.log("Client connection...".red);

	socket.on('end', () => {
		console.log("Client disconnected...".red);
	});

	// Write the following code to process data from client
	
	socket.on('data', data =>{
		let zipcode = data.toString().split(',')[1];	
		console.log('...Received', data.toString());

		//check if it is zip,citystate,pop:use if..else
		//return zipcode,citystat,pop
        // let result =undefined;
		//for(let entry of cities){
		// 	if(entry_id==data){
		//   result=entry;
		//  return result
		// 	}else if(entry.city==dara){
		// 		result=entry;
		// 		return result;
		// 	}else if(entry.pop==data){
		// 	  result=entry;
		// 	  return result;
		// 	}
	//	}
		socket.write(JSON.stringify(zipcode));
		
		
		


	

		
			
			//console.log('...Received', lookupByZipCode(data));

		// console.log('...Received\n', lookupByZipCode(zipcode));
		// console.log('...Received lookupByZipCode', cities.lookupByZipCode(zipcode));
		// console.log(data.toString());

		//console.log(JSON.stringify(data));
	
		
	
			
		
		// for(let entry of cities){
		// 	if(entry._id==data)
		// 	{
		// 	console.log('...Received lookupByZipCode', cities.lookupByZipCode());
		// }else if(cities.city==data && cities.state==data){
		// 	console.log('...Received lookupByCityState'.blue, data);
		// }else if(cities.state==data){
		// 	console.log('...Received getPopulationByState:'.blue, data);
		// 	}
			
		// }
		
		
		
	});
	
	//socket.write(JSON.stringify());

	
});

// listen for client connections
server.listen(3000, () => {
	console.log("Listening for connections on port 3000");
});
