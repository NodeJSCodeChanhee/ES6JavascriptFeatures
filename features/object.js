var age = 25;

function printHello(){
	console.log("Hello");
}

var person = {
	name : 'Andrew',
	age,
	printHello,
	['Hello' + (age + 2 )] : 'I am here',
	printAge: function() {
		console.log(this.age);
	}

};

//console.log(person.age);
person.printAge();
person.printHello();



