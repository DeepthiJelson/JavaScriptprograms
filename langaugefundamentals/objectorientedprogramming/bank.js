class Bank {
    constructor(accno, name, type, amount) {
        this.accno = accno;
        this.name = name;
        this.type = type;
        this.amount = amount
    }
    display() {
        console.log("Account Number :" + this.accno);
        console.log("Name :" + this.name);
        console.log("Account type :" + this.type);
    }
    deposit(dep_amount) {
        this.amount = this.amount + dep_amount;
        console.log("Balance Amount after deposit " + this.amount);
    }
    withdraw(with_amount) {
        if (with_amount > this.amount) {
            console.log("Insufficinet amount to withdraw");
        }
        else {
            this.amount = this.amount - with_amount;
            console.log("Balance Amount after withdraw " + this.amount);
        }
    }

}
let obj1 = new Bank(121, "Jelson", "savings", 5000);
obj1.display();
obj1.deposit(2000);
obj1.withdraw(1000);