// var chatRooms = new Set();


// // add

// chatRooms.add('Runners');
// chatRooms.add('Runners');

// chatRooms.add('Bikers');
// //get the size

// console.log(chatRooms.size);

// console.log(`Does the set have runners: ${chatRooms.has('Runners')}`);

// // chatRooms.delete('Bikers');

// // console.log(chatRooms.size);

// chatRooms.add({name : 'Andrew'});

// console.log([...chatRooms]);

// chatRooms.forEach(function(chatRooms){
// 	console.log(`Found chat room : ${chatRooms} `);
// });

var movies = new Set();

function addMovie(movieTitle){
	if(movies.has(movieTitle)){
		console.log(`Error : ${movieTitle} has already been inserted.`);
	} else {
		movies.add(movieTitle);
		console.log(`Success! ${movieTitle} has been successfully added.`);
	}

}

addMovie('A new hoop');
addMovie('District 9');
addMovie('A new hoop');