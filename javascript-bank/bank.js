/* exported Bank */
function Bank(){
  this.nextAccountNumber = 1;
  this.accounts = [];
}

Bank.prototype.openAccount = function(holder, balance) {
  if (balance > 0 && balance % 1 === 0) {
    var newAccount = new Account(this.nextAccountNumber, holder);
    newAccount.deposit(balance);
    this.accounts.push(newAccount);
    this.nextAccountNumber++;
    return this.nextAccountNumber - 1;
  } else {
    return null;
  }
};

Bank.prototype.getAccount = function(number) {
  for (var i = 0; i < this.accounts.length; i++) {
    if (this.accounts[i].number === number) {
      return this.accounts[i];
    }
  }
  return null;
};

Bank.prototype.getTotalAssets = function() {
  if (this.accounts.length === 0) {
    return 0;
  } else {
    var total = 0;
    for (var i = 0; i < this.accounts.length; i++) {
      total += this.accounts[i].getBalance();
    }
    return total;
  }
};
