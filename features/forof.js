// var locations = [];

// locations.push({
// 	name : 'Philadelphia',
// 	weather : 22
// });


// locations.push({
// 	name : 'Mexico City',
// 	weather : 52
// });


// for(let location of locations){
// 	console.log(`It's ${location.weather} in ${location.name}`);
// }

// Challenge

function averageGrade(...integers){
	var number = 0;
	for(let integer of integers){
		number += integer;
	}
	return number/integers.length;
}

var total = averageGrade(1, 11, 44,99);

console.log(total);