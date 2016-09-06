// function sayHello(name = 'world'){
// 	console.log('Hello ' + name + '!');
// }
// sayHello('kate');

function greetUser(user = {name : 'Anom'}){
	console.log('Hello ' + user.name + '!');

}

greetUser();
greetUser({name : 'inchan'});