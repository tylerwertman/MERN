class User {
    constructor(name, email){
        this.name = name;
        this.email = email;
        this.accountBalance = 0;
    }
    makeDeposit(amount){
        this.accountBalance += amount;
        console.log(`${this.name} deposited ${amount} schmekels`)
    }
    makeWithdrawal(amount){
        this.accountBalance -= amount;
        console.log(`${this.name} withdrew ${amount} schmekels`)
    }
    displayBalance(){
        console.log(`${this.name}'s balance is ${this.accountBalance} schmekels`)
    }
    transferMoney(amount, user){
        this.accountBalance-=amount;
        user.accountBalance+=amount
        console.log(`${this.name} transfered ${amount} schmekels to ${user.name}. ${this.name}'s balance is now ${this.accountBalance} and ${user.name}'s balance is now ${user.accountBalance}`)
    }
}

const rick = new User("Rick Van Python", "rick@python.com");
const morty = new User("Morty Smith", "morty@python.com");
const summer = new User("Summer Smith", "summer@python.com");
rick.makeDeposit(100)
rick.makeDeposit(350)
rick.makeWithdrawal(5)
rick.displayBalance()

morty.makeDeposit(10)
morty.makeDeposit(35)
morty.makeWithdrawal(20)
morty.makeWithdrawal(15)
morty.displayBalance()

summer.makeDeposit(400)
summer.makeWithdrawal(200)
summer.makeWithdrawal(10)
summer.makeWithdrawal(20)
summer.displayBalance()
// console.log(rick);	// output: Rick Van Python
// console.log(morty);	// output: Morty Smith

summer.transferMoney(999, rick)