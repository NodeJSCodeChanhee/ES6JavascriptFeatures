// function greet (name = 'Andrew') {
// 	console.log('Hello ' + name + '!');
// 	console.log(`Hello ${name}`);
// }

// greet();
// greet('Kate');

// console.log(`1 + 6 = ${1 + 6}`);

// console.log(` Hey,
// This kindof looks like an email!
// -In Chan
// `);

var person = {
	name : 'Inchan',
	age : 25
};

// name : anonymous, age , 

function personModifier(person = {name : 'anonymous', age : 0}){
	console.log(`Hello ${person.name}! you are ${person.age}`);
	
}

personModifier();
personModifier(person);