/*Segunda Parte (segunda_parte.js). Son 35 puntos*/


/// EJ 1 Devuelve un array con los mismos elementos de a pero multiplicados por 2
var serie = [9, 17, 29, 13, 25, 52];
var result = serie.map(function (element, index) { return element * 2 })
console.log(result)

//// 2 Devuelve un array con los mismos elementos de a pero aplicandole la función f1. La función f1 le suma 4 al argumento de entrada
var serie = [9, 17, 29, 13, 25, 52];

function f1(entrada) {
    return entrada + 4
}
var resultado = serie.map(f1)
console.log(resultado)

//ej 3
var serie = [9, 17, 29, 13, 25, 52];

function f2(entrada) {
    return entrada < 20
}
var isLower = serie.filter(f2)
console.log(isLower)

//  ej 4
var serie = [9, 17, 29, 13, 25, 52];
// 0 + 1 + 2 + 3 + 4
var valorInicial = 100;
var sumarConInicial = serie.reduce(
    (acum, valorActual) => acum + valorActual,
    valorInicial
);

console.log(sumarConInicial);

console.log("-------------------------------------------");
