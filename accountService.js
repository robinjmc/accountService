class AccountService {

    constructor(balance) {
        this.balance = balance ? balance : 0;
    }

    deposit(amount){
        this.balance += amount;
    }
    
    withdrawal(amount){
        this.balance -= amount;
    }

    statement(){
        return 'Date || Amount || Balance';
    }
}



module.exports = {
    AccountService,
}