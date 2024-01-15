type Product = {
    nome:string,
    marca?:string,
    price:number
}

const produto:Product = {
    nome:'sorvete',
    marca:'nestle',
    price:13.99
}

function freezeProduct (product: Readonly<Product>){
    console.log(product)
}

function updateProductPrice (product: Partial<Product>, price:number){
    console.log(product)
    product.price= price
    console.log('preço mudado')
    console.log(product)
}

updateProductPrice(produto,19.00)