"use strict";
let index;
let newArr = [];
const Arr = [
    { nome: 'adsin',
        idade: 50 },
    { nome: 'jose',
        idade: 34 },
    { nome: 'patricia',
        idade: 29 },
    { nome: 'anne',
        idade: 34 },
    { nome: 'priscila',
        idade: 49 },
    { nome: 'bia',
        idade: 73 },
    { nome: 'rafaelle',
        idade: 98 },
    { nome: 'luis',
        idade: 25 }
];
Arr.splice(0, 3).map((evt) => {
    newArr.push(evt);
});
for (var n in newArr) {
    Arr.map((evt) => {
        if (evt.idade > newArr[n].idade) {
            newArr.splice(parseInt(n), 1, evt);
            index = Arr.indexOf(evt);
            console.log(index);
        }
    });
    Arr.splice(index, 1);
}
console.log(newArr);
