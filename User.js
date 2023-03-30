class BankAccount {
    constructor(intRate=0.08, balance=0) {
        this.intRate=intRate
        this.balance=balance
    }
    deposit(amount) {
        this.balance += amount;
        console.log(`Deposited $${amount}`)
        return this
    }
    withdraw(amount) {
        this.balance -= amount;
        console.log(`Withdrew $${amount}`)
        return this
    }
    displayAccountInfo() {
        console.log(`Current balance is $${this.balance}. Current interest rate is ${this.intRate}`)
        return this
    }
    yieldInterest() {
        console.log(`${this.acctName}'s yield interest is $${this.balance*this.intRate+this.balance}`)
        return this
    }
}

class User {
    constructor(name, email){
        this.name = name;
        this.email = email;
        this.account = new BankAccount();	// this is the NEW line
    }
    makeDeposit(amount){
        this.account.deposit(amount);
        console.log(`${this.name} deposited $${amount}`)
        return this
    }
    // makeWithdrawal(amount){
    //     this.account.withdraw -= amount;
    //     console.log(`${this.name} withdrew ${amount} schmekels`)
    //     return this
    // }
    // displayBalance(){
    //     console.log(`${this.name}'s balance is ${this.account.acctName.balance} schmekels`)
    //     return this
    // }
    transferMoney(amount, user){
        this.account.balance-=amount;
        user.account.balance+=amount
        console.log(`${this.name} transfered ${amount} schmekels to ${user.name}. ${this.name}'s balance is now ${this.acctName.balance} and ${user.name}'s balance is now ${user.acctName.balance}`)
        return this
    }
}



const rick = new User("Rick Van Python", "rick@python.com", "checking");
// const morty = new User("Morty Smith", "morty@python.com", "checking");
// const summer = new User("Summer Smith", "summer@python.com");

// rick.makeDeposit(100).makeDeposit(350).makeWithdrawal(5).displayBalance()

// morty.makeDeposit(10).makeDeposit(35).makeWithdrawal(20).makeWithdrawal(15).displayBalance()

// summer.makeDeposit(400).makeWithdrawal(200).makeWithdrawal(10).makeWithdrawal(20).displayBalance()

// morty.transferMoney(999, rick)

rick.displayAccountInfo()