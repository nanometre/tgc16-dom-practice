// let box = document.querySelector('.box');

// box.addEventListener('mouseover', function() {
//     box.style.backgroundColor = 'red';
// })

// box.addEventListener('mouseout', function() {
//     box.style.backgroundColor = 'white';
// })

let boxes = document.querySelectorAll('.box');
for (let box of boxes) {
    box.addEventListener('mouseover', function() {
        box.style.backgroundColor = 'red';
    })

    box.addEventListener('mouseout', function() {
        box.style.backgroundColor = 'white';
    })
}