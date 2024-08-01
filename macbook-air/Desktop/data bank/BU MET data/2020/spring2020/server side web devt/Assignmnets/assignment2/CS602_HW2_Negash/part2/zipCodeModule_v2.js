let data = require('./zips.json');

module.exports.lookupByZipCode =  zip => {
    let result = data.find((entry =>( entry._id==zip)))
    return result;   
		
};

module.exports.lookupByCityState = (city, state) => {
	let result = data.filter(entry=>((entry.city==city) && (entry.state==state)))
                .map(entry=>({'zip': entry._id, 'pop': entry.pop}));
                return ({'city': city, 'state': state, 'data': result});
  
};

module.exports.getPopulationByState = (state) => {
    let total = data.reduce((sum, elem) =>
    sum + ((elem.state==state)? elem.pop:0) 
    , 0)

    return  ({'state': state, 'pop': total});
};

