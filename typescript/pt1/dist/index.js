"use strict";
const veiculo = {
    make: 'fiat',
    model: 'uno',
    year: 2013
};
function showVeiculo(veiculo) {
    console.log(`marca: ${veiculo.make}`);
    console.log(`modelo: ${veiculo.model}`);
    console.log(`ano: ${veiculo.year}`);
}
showVeiculo(veiculo);
