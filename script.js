let bulb = document.querySelector('#bulb');
let button = document.querySelector('#button');
let h = document.querySelectorAll('h1');
let bulbStatus = false;

console.log(h);

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