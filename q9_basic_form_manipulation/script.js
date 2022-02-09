
function getFormValues() {

    let email = document.querySelector('#email-address').value;

    let model = document.querySelector('.phone-type:checked').value;

    let services = [];
    let servicesRB = document.querySelectorAll('.services');
    for (let eachService of servicesRB) {
        if (eachService.checked == true) {
            services.push(eachService.value);
        }
    }

    let pickup = document.querySelector('#pick-up>option:checked').value;

    // leave this line alone!
    return [email, model, services, pickup];

}

// LEAVE THE BELOW ALONE! DON'T TOUCH
try {
   module.exports = getFormValues;
} catch (e) {}
