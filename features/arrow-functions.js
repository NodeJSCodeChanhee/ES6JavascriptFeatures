var people = ['Andrew', 'Vikram', 'John', 'Audra'];

// people.forEach(function(name){
// 	console.log(name);
// });

// people.forEach((name) => console.log(name));

// people.forEach((name) => {
// 	console.log('Welcome');
// 	console.log(name);
// });

// var add = (a, b) => a+b;

// var add = (a, b) => {return a+b;}

// console.log(add(3, 9));

var person = {
	name : 'Andrew',
	likes : ['Movies', 'Programming', 'Runner'],
	generateGreeter : function(){
		// var that = this;
		return () => {
			console.log(this.name);
		}
	},
	printLikes : function(){
		this.likes.forEach((like) => {
			console.log(`${this.name} likes ${like}`);
		});
	}
}

person.generateGreeter()();
person.printLikes();