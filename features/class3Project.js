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
//Saving account class that extends BankAccount
//Override withdrawal to print message that you can't
//Override deposit to print message call partent deposit method

class SavingsAccount extends bankAccount{
	constructor(money){
		super(money);
	}

	deposit(money){
		if(super.deposit(money)){
			console.log(`Consgrats! you saved $${money}`);
		} 
	}

	withdrawal(money){
		console.log('Saving`s account !! No money is withdrawn.');
	}

	printbalance(){
		super.printbalance();
	}


}

var savingsAccount = new SavingsAccount(500);
savingsAccount.deposit(100);
savingsAccount.printbalance();
savingsAccount.withdrawal(25);
savingsAccount.printbalance();