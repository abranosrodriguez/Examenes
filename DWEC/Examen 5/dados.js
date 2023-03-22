/* Crear un programa que simule un juego en el que se lanzan dos dados. Ganara el numero mas pequenho.*/

let dices = new Promise((resolve, reject) => {
    let diceOne = 0
    let diceTwo = 0
    let resultado = ""
    let throwOne = new Promise(function (resolve, reject) {
        diceOne = Math.floor(Math.random() * 6) + 1;
        setTimeout(() => resolve(diceOne), 100);
    });
    let throwTwo = new Promise(function (resolve, reject) {
        diceTwo = Math.floor(Math.random() * 6) + 1;
        setTimeout(() => resolve(diceTwo), 200);
    });
    throwOne.then(
        function (result) { console.log("Tirada del jugador 1: " + result); },
    );
    throwTwo.then(
        function (result) { console.log("Tirada del jugador 2: " + result); },
    );
    if (diceOne < diceTwo) { resultado = "Victory - 1 Player" }
    else if (diceOne == diceTwo) { resultado = "Draw" }
    else if (diceOne > diceTwo) { resultado = "Victory - 2 Player" }

    setTimeout(() => resolve(resultado), 250);
});

dices.then(
    function (result) { console.log(result) },
);