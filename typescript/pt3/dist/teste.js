"use strict";
const newArr = [0, 0, 0];
const Arr = [
    { nome: 'adsin',
        idade: 10 },
    { nome: 'jose',
        idade: 34 },
    { nome: 'patricia',
        idade: 19 },
    { nome: 'anne',
        idade: 14 },
    { nome: 'priscila',
        idade: 49 },
    { nome: 'bia',
        idade: 3 },
    { nome: 'rafaelle',
        idade: 14 },
    { nome: 'luis',
        idade: 25 }
];
Arr.map((evt) => {
    if (evt.idade > newArr[0]) {
        newArr.splice(0, 1, evt.idade);
    }
});
console.log(newArr);
