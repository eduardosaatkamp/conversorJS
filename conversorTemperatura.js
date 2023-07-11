let teclado = require('prompt-sync')();

const bordas = require('./bordas');
const validarNumero = require('./validarNumero');

let opcaoInterna = 0;
let valor = 0;

//Display do menu de temperaturas 
function menuConvTempDisplay() {
    bordas(0);
    console.log("|     Menu conversão de temperatura     |");
    bordas(2);
    console.log("|Escolha uma das seguintes opções:      |");
    console.log("|1 - Celsius(C) para fahrenheit(F)      |");
    console.log("|2 - Fahrenheit(F) para celsius(C)      |");
    console.log("|3 - Voltar a tela inicial              |");
    bordas(1);
}

//Menu de conversão de temperaturas
function convTemperaturas() {
    do {
        menuConvTempDisplay();
        opcaoInterna = Number(teclado());
        switch (opcaoInterna) {
            case 1:
                //C para F
                bordas(0);
                console.log("|Informe o valor a ser convertido:      |");
                bordas(1);
                valor = Number(teclado());
                if (validarNumero(valor)) {
                    const celsiusToFahrenheit = ((valor * 9 / 5) + 32).toFixed(2);
                    bordas(0);
                    console.log(`|${valor}C é igual a ${celsiusToFahrenheit}F`.padEnd(40, " ") + `|`);
                    bordas(1);
                };
                break;

            case 2:
                //F para C
                bordas(0);
                console.log("|Informe o valor a ser convertido:      |");
                bordas(1);
                valor = Number(teclado());
                if (validarNumero(valor)) {
                    const fahrenheitToCelsius = ((valor - 32) * 5 / 9).toFixed(2);
                    bordas(0);
                    console.log(`|${valor}F é igual a ${fahrenheitToCelsius}C`.padEnd(40, " ") + `|`);
                    bordas(1);
                }

                break;

            case 3:
                bordas(0);
                console.log("|        Voltando a tela inicial        |");
                bordas(1);
                break;

            default:
                bordas(0);
                console.log("|            Opção inválida             |");
                bordas(1);
        }
    } while (opcaoInterna != 3);
}

module.exports = convTemperaturas;