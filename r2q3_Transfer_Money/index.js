// PLACE YOUR CODE HERE
let topUpBtn = document.querySelector('#topUp10');
let transferToWalletBtn = document.querySelector('#transfer10ToWallet');
let transferToAccountBtn = document.querySelector('#transfer10ToAccount')
let accountBox = document.querySelector('#account');
let walletBox = document.querySelector('#other-wallet');
let spendBtn = document.querySelector('#spendBtn');
let error = document.querySelector('#error')

let accountValue = parseInt(accountBox.innerText);
let walletValue = parseInt(walletBox.innerText)

topUpBtn.addEventListener('click', function(){
    accountValue += 10;
    accountBox.innerText = accountValue;
})

transferToWalletBtn.addEventListener('click', function(){
    error.innerText = ""
    if (!accountValue <= 0){
        accountValue -= 10;
        accountBox.innerText = accountValue;
        walletValue += 10;
        walletBox.innerText = walletValue;
    } else {
        error.innerText = 'Insufficient funds'
    }
})

transferToAccountBtn.addEventListener('click', function(){
    error.innerText = ""
    if (!walletValue <= 0) {
        accountValue += 10;
        accountBox.innerText = accountValue;
        walletValue -= 10;
        walletBox.innerText = walletValue;
    } else {
        error.innerText = 'Insufficient funds'
    }
})

spendBtn.addEventListener('click', function(){
    error.innerText = ""
    let spendValue = document.querySelector('#spend').value
    if (spendValue < walletValue) {
        walletValue -= spendValue;
        walletBox.innerText = walletValue;
    } else {
        error.innerText = 'Insufficient funds'
    }
})