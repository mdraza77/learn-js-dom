let bulb = document.querySelector('#bulb');
let button = document.querySelector('#button');
let bulbStatus = false;

button.addEventListener('click', function () {
    if (bulbStatus === false) {
        bulb.style.backgroundColor = 'yellow';
        button.innerText = 'Off';
        bulbStatus = true;
    } else {
        bulb.style.backgroundColor = 'gray';
        button.innerText = 'On';
        bulbStatus = false;
    }
});