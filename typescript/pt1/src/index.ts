interface Vehicle {
    make:string,
    model:string,
    year:number
}

const veiculo:Vehicle = {
    make:'fiat',
    model:'uno',
    year:2013
}

function showVeiculo(veiculo:Vehicle){
    console.log(`marca: ${veiculo.make}`)
    console.log(`modelo: ${veiculo.model}`)
    console.log(`ano: ${veiculo.year}`)
}

showVeiculo(veiculo)