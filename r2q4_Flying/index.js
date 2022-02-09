function extractFormInfo()
{  
  let firstName = document.querySelector('#first-name').value;
  
  let lastName = document.querySelector('#last-name').value;
  
  let ticketClass = document.querySelector('.ticket-class:checked').value;
  
  let options = []
  let optionsList = document.querySelectorAll('.options')
  for (let eachOption of optionsList) {
    if (eachOption.checked == true) {
      options.push(eachOption.value)
    }
  }

  return [firstName, lastName, ticketClass, options]
}

let btn = document.querySelector('#booking-btn')
let summary = document.querySelector('#summary')

btn.addEventListener('click', function(){
  let data = extractFormInfo()
  let totalCost = 0
  let optionsList = data[3]
  let optionsStr = ''
  
  for (let eachOption of optionsList){
    totalCost += 10
    optionsStr = optionsStr + eachOption + ', '
  }

  if (data[2] == "First Class"){
    totalCost += 1200
  } else if (data[2] == "Business Class"){
    totalCost += 750
  } else (
    totalCost += 250
  )

  summary.innerHTML = `<h3>Your booking summary</h3>
                       <p>First Name: ${data[0]}</p>
                       <p>Last Name: ${data[1]}</p>
                       <p>Ticket Class: ${data[2]}</p>
                       <p>Options: ${optionsStr}</p>
                       <p>Total Cost of Flight: $${totalCost}</p>`
})