// let bulb = document.querySelector('#bulb');
// let button = document.querySelector('#button');
// let h = document.querySelectorAll('h1');
// let bulbStatus = false;

// console.log(h);

// button.addEventListener('click', function () {
//     if (bulbStatus === false) {
//         bulb.style.backgroundColor = 'yellow';
//         button.innerText = 'Off';
//         bulbStatus = true;
//     } else {
//         bulb.style.backgroundColor = 'gray';
//         button.innerText = 'On';
//         bulbStatus = false;
//     }
// });

// let a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
// let b = a.toString();
// let c = a.join(' and ');
// console.log(c);
// console.log(typeof b);
// a.pop();
// a.push(5);
// a.unshift(0);
// a.shift();
// a.splice(1, 5);
// a[-1] = 100;
// console.log(a);

// function updateScore(score = 0) {
//     return score += 10;
// }

// console.log(updateScore(60));
// console.log(a);
// let a = 5;

// hello();

// function hello() {
//     console.log('Hello World!');
// }

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let newArr = [...arr, 11, 12, 13];
newArr.pop();
const doubled = newArr.map(n => n * 2);
console.log(doubled);
console.log(newArr);