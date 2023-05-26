pesoPayaso = 112;
pesoMuñeca = 75;

payasoVendido =27;
muñecaVendida =14;

pesoVendidoPayaso = pesoPayaso * payasoVendido;
pesoVendidoMuñeca = pesoMuñeca * muñecaVendida;
totalDelPedido= (pesoVendidoPayaso + pesoVendidoMuñeca) /1000;

console.log("Peso total del Paquete:" + totalDelPedido+ "kg");

//Funcion

var payasoVendido = prompt("Introduce la cantidad de payasos a comprar:");

var muñecaVendida = prompt("Introduce la cantidad de muñecas a comprar:");

const pesoPayaso = 112;
const pesoMuñeca = 75;

function calculoPeso(){
    pesoVendidoPayaso = pesoPayaso * payasoVendido;
    pesoVendidoMuñeca = pesoMuñeca * muñecaVendida;
    totalDelPedido= (pesoVendidoPayaso + pesoVendidoMuñeca) /1000;
    

    
    return console.log("El peso total del pedido es de " + totalDelPedido + " Kg");    
}

calculoPeso();