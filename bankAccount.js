class BankAccount {
    constructor(intRate, balance, acctName) { // don't forget to add some default values for these parameters!
        // your code here! (remember, this is where we specify the attributes for our class)
        // don't worry about user info here; we'll involve the User class soon
        this.intRate=intRate
        this.balance=balance
        this.acctName=acctName
    }
    deposit(amount) {
        this.balance += amount;
        console.log(`${this.acctName} deposited $${amount}`)
        return this
    }
    withdraw(amount) {
        this.balance -= amount;
        console.log(`${this.acctName} withdrew $${amount}`)
        return this
    }
    displayAccountInfo() {
        console.log(`${this.acctName}'s balance is $${this.balance}`)
        return this
    }
    yieldInterest() {
        console.log(`${this.acctName}'s yield interest is $${this.balance*this.intRate+this.balance}`)
        return this
    }
}
const checking = new BankAccount(.02, 0, "checking");
const savings = new BankAccount(.05, 0, "savings");

checking.deposit(20).deposit(50).deposit(100).yieldInterest()
savings.deposit(2000).deposit(5000).withdraw(100).withdraw(500).withdraw(200).withdraw(100).yieldInterest()
// checking.yieldInterest()