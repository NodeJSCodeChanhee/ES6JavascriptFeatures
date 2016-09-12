// function add (a, b){
// 	return a + b;
// }

// var numbers = [4,22];

// console.log(add(1,4));
// console.log(add(...numbers));

// var groupA = [33,99];

// var groupB = [11];

// var unified = [0, ...groupA, ...groupB, 100];

// console.log(unified);

// unified.push(...[55,33]);

// console.log(unified);



// function greetUser(group, ...names){
// 	names.forEach(function(name){
// 		console.log(`Hello ${name}. you're part of ${group}` );
// 	});
// }

// greetUser('Developers','Andrew', 'Mike', 'Jen');

//adder(3, 5, 7, 1)

function adder(num, ...numArray){
	 numArray.forEach(function(aNum){
		console.log(`${num + aNum}`);
	});
}

adder(3,5,7,1);