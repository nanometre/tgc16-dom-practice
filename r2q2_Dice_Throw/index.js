// PLACE YOUR CODE HERE
function diceRoll() {
    min = 1
    max = 7 
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

btn = document.querySelector('#roll-btn');
btn.addEventListener('click', function(){
    let box1 = document.querySelector('#box1');
    let box2 = document.querySelector('#box2');
    value1 = diceRoll()
    value2 = diceRoll()
    box1.innerText = value1
    box2.innerText = value2
    let results = document.querySelector('span')
    results.innerText = value1 + value2
})