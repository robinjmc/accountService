const assert = require('chai').assert;
const {AccountService} = require('../accountService');


describe('Balance returns the amount', function(){
    it('Balance returns 0 if account is made with no money in it', function(){
        const acc = new AccountService();
        assert.equal(acc.balance, 0);
    });
    it('Balance return amount account is made with', function(){
        const acc = new AccountService(10);
        assert.equal(acc.balance, 10);
    });

    //TODO Write tests to stop account being created with negative value
});

describe('Deposit adds money to the account', function(){
    const acc = new AccountService();
    it('deposit should increase the amount', function(){
        acc.deposit(1000);
        assert.equal(acc.balance, 1000);
    });
    //TODO Write tests to stop deposit being called with negative value
});


describe('Withdrawal takes money out of the account', function(){
    const acc = new AccountService(1000);
    it('deposit should decrease the amount', function(){
        acc.withdrawal(999);
        assert.equal(acc.balance, 1);
    });
    //TODO Write tests to stop withdrawal being called with negative value
});

describe('Statement returns withdrawals and deposits, the dates they were made and the resulting balance', function(){
    const acc = new AccountService();
    it('new account with no transactions should return the headings Date', function(){
        assert.include(acc.statement(), 'Date');
    });
    it('new account with no transactions should return the headings Amount', function(){
        assert.include(acc.statement(), 'Amount');
    });
    it('new account with no transactions should return the headings Balance', function(){
        assert.include(acc.statement(), 'Balance');
    });
});