// PLACE YOUR CODE HERE
let allEmphasis = document.querySelectorAll('.emphasis')
for (let eachEm of allEmphasis) {
    eachEm.style.fontFamily = 'Verdana'
}

let allFinished = document.querySelectorAll('li.finished')
for (let eachFin of allFinished) {
    eachFin.style.textDecoration = 'line-through'
}

let allTodo = document.querySelectorAll('ul#low-priority li.todo ')
for (let eachTodo of allTodo) {
    eachTodo.style.backgroundColor = 'blue'
}

let allAlert = document.querySelectorAll('.alert')
for (let eachAlert of allAlert) {
    eachAlert.style.color = 'red'
}