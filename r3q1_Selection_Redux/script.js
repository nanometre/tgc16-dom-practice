// PLACE YOUR CODE HERE
// Q1
let h2 = document.querySelector('h2');

h2.style.fontFamily = 'Verdana';
h2.style.fontSize = '32px';

// Q2
let img = document.querySelector('img');
img.style.border = '1px solid black';
img.style.padding = '32px 0px 15px 0px';

// Q3
let firstList = document.querySelector('ul>#first');
let lastList = document.querySelector('ul>#last');
firstList.style.backgroundColor = 'yellow';
lastList.style.backgroundColor = 'yellow';

// Q4
let recipeHeading = document.querySelector('#recipe-heading');
recipeHeading.innerText = 'Pancake Recipe';

// Q5
let orderListItems = document.querySelectorAll('ol');
for (let eachItems of orderListItems){
    eachItems.style.color = 'orange';
}