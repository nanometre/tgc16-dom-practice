let radios = document.querySelectorAll('.local-tourist');
let localAddressDiv = document.querySelector('#for-locals');
let hotelAddressDiv = document.querySelector('#for-tourist');

let summary = document.querySelector('#result')
let localTourist = ''

for (let radio of radios) {
    radio.addEventListener('change', function(){
        if (radio.value == 'local') {
            summary.innerHTML = ""
            hotelAddressDiv.style.display = 'none';
            localAddressDiv.style.display = 'block';
            localTourist = 'local'
        } else if (radio.value == 'tourist') {
            summary.innerHTML = ""
            localAddressDiv.style.display = 'none';
            hotelAddressDiv.style.display = 'block';
            localTourist = 'tourist'
        }
    })
}

let submitBtn = document.querySelector('#submit-btn');

submitBtn.addEventListener('click', function(){
    let firstName = document.querySelector('#first-name').value;
    let lastName = document.querySelector('#last-name').value;
    let localAddress = document.querySelector('#postal-code').value;
    let hotelAddress = document.querySelector('#hotel-address').value;

    if (localTourist == 'local') {
        summary.innerHTML = `<h3>Your booking summary</h3>
                             <p>First Name: ${firstName}</p>
                             <p>Last Name: ${lastName}</p>
                             <p>Local address: ${localAddress}</p>`
    } else if (localTourist =='tourist') {
        summary.innerHTML = `<h3>Your booking summary</h3>
                             <p>First Name: ${firstName}</p>
                             <p>Last Name: ${lastName}</p>
                             <p>Hotel address: ${hotelAddress}</p>`
    }
})

