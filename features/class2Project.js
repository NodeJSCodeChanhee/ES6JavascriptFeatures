//create bank account class
//allow constructor function to take balance.
// default to zero if not num
// Deposit
// Withdrawal
// Printbalance

//
var moment = require('moment');

class bankAccount{
	constructor(balance){
		
		this.balance = typeof balance === 'number' ? balance : 0;
		
	}

	set balance(val){
		this._balance = val;
		this.balanceUpdated = new Date();
	}
	get balance(){
		return this._balance;
	}

	deposit(num){

		if(typeof num === 'number'){
			this.balance += num;
			
			return true;
		} else {
			console.log(`deposit ${num} is not a number`);
			return false;
		}
	}

	withdrawal(num){
		if(typeof num === 'number'){

			this.balance -= num;
			
			console.log(`Your total balance is ${this.balance}`);
			return true;
		} else {
			console.log(`Withdrawal ${num} is not a number!`);
			return false;
		}
	}

	printbalance(){
		console.log(`Your account balance is $${this.balance}! Last update at ${this.balanceUpdated}`);
	}
}


var account = new bankAccount(100);
account.deposit(100);
account.withdrawal(10);
account.printbalance();


var account2 = new bankAccount('asfdas');
account2.deposit('inchan');
account2.withdrawal(true);
account2.printbalance();