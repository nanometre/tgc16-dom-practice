count = 0

let plusBtn = document.querySelector('#increment')
let minusBtn = document.querySelector('#decrement')
let boxCount = document.querySelector('#box')

plusBtn.addEventListener('click', function(){
    if (count < 10 && count >= 0) {
        count += 1
        boxCount.innerHTML = count
        if (count % 2 == 0) {
            boxCount.style.backgroundColor = 'green'
        } else {
            boxCount.style.backgroundColor = 'red'
        }
    }
})

minusBtn.addEventListener('click', function(){
    if (count <= 10 && count > 0) {
        count -= 1
        boxCount.innerHTML = count
        if (count % 2 == 0) {
            boxCount.style.backgroundColor = 'green'
        } else {
            boxCount.style.backgroundColor = 'red'
        }
    }
})

