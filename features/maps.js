// var myMap = new Map();

// myMap.set('name', 'Andrew');
// myMap.set('age', 25);
// //

// console.log(myMap.get('name'));

// // has 

// console.log(myMap.has('age'));

// //Delete

// myMap.delete('name');
// myMap.clear();

// console.log(myMap.size);

// var user = {name : 'Inchan'};

// myMap.set(user, 'Philadelphia');
// console.log(myMap.get(user));

// var myMap = new Map();

// myMap.set(1, 'Andrew');
// myMap.set(2, 'Jen');
// myMap.set(3, 'Ben');

// console.log([...myMap]);

// console.log(myMap.keys());
// console.log(myMap.values());

//Challenge area

var location = {name : 'Philadelphia'}
var secLocation = {name : 'Oslo'}

var weather = new Map();



function setWeather(location, temp) {
	weather.set([location, temp]);
	
}

function printWeather(location){
	if(weather.has(location)){
		console.log(`It's ${weather.get(location)} in ${location.name}`);
	} else {
		console.log(`no weather recorded for ${location.name}`);
	}
}

setWeather(location, 22);
printWeather(location);
printWeather(secLocation);