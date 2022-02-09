// PLACE YOUR CODE HERE
let criminalBox = document.querySelectorAll('.a:not(.undercover)')
for (let eachCriminal of criminalBox) {
    eachCriminal.style.backgroundColor = 'red'
    eachCriminal.innerText += '\n(jailed)'
}

let criminalUndercoverBox = document.querySelectorAll('.a.undercover')
for (let eachUndercover of criminalUndercoverBox) {
    eachUndercover.style.backgroundColor = 'yellow'
}