class User {
    constructor(name, email){
        this.name = name;
        this.email = email;
        this.accountBalance = 0;
    }
    makeDeposit(amount){
        this.accountBalance += amount;
        console.log(`${this.name} deposited ${amount} schmekels`)
        return this
    }
    makeWithdrawal(amount){
        this.accountBalance -= amount;
        console.log(`${this.name} withdrew ${amount} schmekels`)
        return this
    }
    displayBalance(){
        console.log(`${this.name}'s balance is ${this.accountBalance} schmekels`)
        return this
    }
    transferMoney(amount, user){
        this.accountBalance-=amount;
        user.accountBalance+=amount
        console.log(`${this.name} transfered ${amount} schmekels to ${user.name}. ${this.name}'s balance is now ${this.accountBalance} and ${user.name}'s balance is now ${user.accountBalance}`)
        return this
    }
}

const rick = new User("Rick Van Python", "rick@python.com");
const morty = new User("Morty Smith", "morty@python.com");
const summer = new User("Summer Smith", "summer@python.com");

rick.makeDeposit(100).makeDeposit(350).makeWithdrawal(5).displayBalance()

morty.makeDeposit(10).makeDeposit(35).makeWithdrawal(20).makeWithdrawal(15).displayBalance()

summer.makeDeposit(400).makeWithdrawal(200).makeWithdrawal(10).makeWithdrawal(20).displayBalance()
// console.log(rick);	// output: Rick Van Python
// console.log(morty);	// output: Morty Smith

summer.transferMoney(999, rick)