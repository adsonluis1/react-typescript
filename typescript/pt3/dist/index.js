"use strict";
const produto = {
    nome: 'sorvete',
    marca: 'nestle',
    price: 13.99
};
function freezeProduct(product) {
    console.log(product);
}
function updateProductPrice(product, price) {
    console.log(product);
    product.price = price;
    console.log('preço mudado');
    console.log(product);
}
updateProductPrice(produto, 19.00);
