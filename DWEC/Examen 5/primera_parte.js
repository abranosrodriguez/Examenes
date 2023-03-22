//Ej1 funcion normal
function sum(x, y) {
    return x + y;
};
sum(5, 6);

//Ej2 funcion anonima
var suma = function (x, y) {
    return function () {
        console.log(x + y)
    };
};

var f1 = suma(3, 4);
f1()
var f2 = suma(8, 7);
f2()

////modo 2/
function suma(x, y) {
    return function () {
        console.log(x + y)
    }
};
suma(5, 6)();

//Ej3 funcion calculadora

function calculadora(operando, x, y) {
    function suma(x, y) {
        return x + y;
    };

    function resta(x, y) {
        return x - y;
    };

    function multi(x, y) {
        return x * y;
    };

    function divi(x, y) {
        return x / y;
    };
    switch (operando) {
        case "+":
            {
                return suma(x, y)
            };
        case "-":
            {
                return resta(x, y)
            };
        case "*":
            {
                return multi(x, y)
            };
        case "/":
            {
                return divi(x, y)
            };
    }
}
console.log("suma:" + calculadora("+", 4, 5))
console.log("resta:" + calculadora("-", 4, 5))
console.log("multiplicación:" + calculadora("*", 4, 5))
console.log("división:" + calculadora("/", 4, 5))


//Ej 4 arrow function

let flcalculadora = (operando, x, y) => {
    let suma = (x, y) => {
        return x + y;
    };

    let resta = (x, y) => {
        return x - y;
    };

    let multi = (x, y) => {
        return x * y;
    };

    let divi = (x, y) => {
        return x / y;
    };
    switch (operando) {
        case "+":
            {
                return suma(x, y)
            };
        case "-":
            {
                return resta(x, y)
            };
        case "*":
            {
                return multi(x, y)
            };
        case "/":
            {
                return divi(x, y)
            };
    }
}
console.log("suma:" + flcalculadora("+", 4, 5))
console.log("resta:" + flcalculadora("-", 4, 5))
console.log("multiplicación:" + flcalculadora("*", 4, 5))
console.log("división:" + flcalculadora("/", 4, 5))

console.log("-------------------------------------------");