'use strict';

// 1. Написать функцию проверки четности числа. если честное, выводить true, если не четное false.

function isEven (a) {
    // return (a%2 === 0) ? true : false;
    return (a%2 === 0);
}

let userNumber = +prompt('Введите число');
document.getElementById('f1').innerHTML = isEven(userNumber) ? 'четное число' : 'нечетное число';

// 2. Запросить минимальное и максимальное число диапазона и вывести все четные числа

let number1 = 3;
let number2 = 49;

function printEven (a1, a2) {
    let str = '';
    for(let i= a1; i<=a2; i++) {
        if (isEven(i)) str += i + ' ';
    }
    return str;
}
document.getElementById('f2').innerHTML = printEven(number1, number2);

// 3.  для диапазона чисел вывести все не четные числа

function printOdd (a1, a2) {
    let str = '';
    for(let i= a1; i<=a2; i++) {
        if (!isEven(i)) str += i + ' ';
    }
    return str;
}

document.getElementById('f3').innerHTML = printOdd(number1, number2);

// 4. Проверить все числа диапазона и вывести сколько делятся без остатка на 3, на 5, на 11.

// function isDevider (num, d) {
//     return (num%d===0);
// }

// function checkRange (minNumbber, maxNumber) {
//     let sum1 = 0;
//     let sum2 = 0;
//     let sum3 = 0;
//     for (let i= minNumbber; i<=maxNumber; i++) {
//         if (isDevider(i, 3)) sum1++;
//         if (isDevider(i, 5)) sum2++;
//         if (isDevider(i, 11)) sum3++;
//     }
//     return `В диапазоне [${minNumbber}, ${maxNumber}] 
//     ${sum1} чисел делятся нацело на 3.
//     ${sum2} чисел делятся нацело на 5.
//     ${sum3} чисел делятся нацело на 11.`
// }

// document.getElementById('f4').innerHTML = checkRange(number1, number2);


let namericRow = document.querySelector('#f3');

namericRow.addEventListener('click', event => {console.dir(event);});
// console.dir(namericRow);