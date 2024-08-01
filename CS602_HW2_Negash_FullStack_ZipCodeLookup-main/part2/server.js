const express = require('express');
const app = express();

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// setup handlebars view engine
const handlebars = require('express-handlebars');

app.engine('handlebars', 
	handlebars({defaultLayout: 'main'}));

app.set('view engine', 'handlebars');

// static resources
app.use(express.static(__dirname + '/public'));

// Use the zipCode module
const cities = require('./zipCodeModule_v2');

// GET request to the homepage

app.get('/',  (req, res) => {
	res.render('homeView');
	
	
	
});

app.get('/zip', (req, res) => {
	
	let isZipPresent=true;
	if(req.zip==isZipPresent){
		for(req of cities){
		}
        res.render('lookupByZipView');
		}else{
		 res.render('lookupByZipForm');
			}		
});

//Lookup the corresponding data for the request body id parameter
//and render the lookupByZipView.

app.post('/zip', (req, res) => {
	
	for(req.param of cities){
		 
	}
    res.render('lookupByZipForm');
	
});


app.get('/zip/:id', (req, res) => {

	res.format({

		'application/json': () => {
			res.json(zip.lookupByZipView(id));
		},

		'application/xml': () => {
			let zipxml = 
				'<?xml version="1.0"?>\n<zip>\n' +
					zip.lookupByZipView(id).map(function(c){
						return ' <zip id="' + c.id + '">';
					}).join('\n') + '\n</zip>\n';
			
			res.type('application/xml');
			res.send(zipxml);
		},


		'text/html': () => {
			let ziphtml = zip.lookupByZipView(id);
			res.type('text/html');
			res.send(ziphtml);
		},
				
	});

	
	

});

//If the request query city parameter and state parameter are
// present, lookup the corresponding data and render the
// lookupByCityStateView.Otherwise, render the lookupByCityStateForm.

app.get('/city', (req, res) => {

		
				let citystatepres=true;
				if(req.city && req.state==citystatepres){
					for(req of cities){
						
					}
					res.render('lookupByCityStateView');
					
				}else{
					res.render('lookupByCityStateForm');
				}
			

		
	
	
});

app.post('/city', (req, res) => {
	for(req of cities){
		res.render('lookupByCityStateForm');

	}

	
	
	

});

app.get('/city/:city/state/:state', (req, res) => {
		// Use the named routing city and state parameters and lookup the
		// corresponding data.For html request, render the lookupByCityStateView.
		res.format({

			'text/html': () => {
				let cityhtml = '<ul>\n' +
					cities.lookupByCityState(city, state).map(function(c){
						return ' <li>' + c.city+ ' - ' +  c.state + '</li>';
					}).join('\n') + '\n</ul>\n';
	
				res.type('text/html');
				res.send(cityhtml);
			},
					
		});



		

});



app.get('/pop', (req, res) => {
// If the request query state parameter is present, lookup the
// corresponding data and render the populationView.
// Otherwise, render the PopulationForm.

let isPopPresent=true;
	if(req.pop==isPopPresent){
		for(req of cities){
		}
		res.render('populationView');
		}else{
			res.render('populationForm');
			}	
	
	

	
	
});

app.get('/pop/:state', (req, res) => {
	// Use the named routing state parameter and lookup the corresponding data.
	// For html request, render the populationView.
	res.format({

		'text/html': () => {
			let pophtml = req.populationView(state);
			res.type('text/html');
			res.send(pophtml);
		},
				
	});

});


app.use((req, res) => {
	res.status(404);
	res.render('404');
});

app.listen(3000, () => {
  console.log('http://localhost:3000');
});



