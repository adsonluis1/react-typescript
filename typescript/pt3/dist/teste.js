"use strict";
let index;
const newArr = [0, 0, 0];
const Arr = [
    { nome: 'adsin',
        idade: 50 },
    { nome: 'jose',
        idade: 34 },
    { nome: 'patricia',
        idade: 29 },
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
for (var n in Arr) {
    Arr.map((evt) => {
        if (evt.idade > newArr[n]) {
            newArr.splice(parseInt(n), 1, evt.idade);
            index = Arr.indexOf(evt);
        }
    });
    Arr.splice(index, 1);
}
console.log(Arr);
console.log(newArr);
