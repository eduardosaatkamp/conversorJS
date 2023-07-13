import prompt from 'prompt-sync';
let teclado = prompt();

import bordas from './bordas.js';
import validarNumero from './validarNumero.js';
import numeroNegativo from './numeroNegativo.js';

let opcaoInterna = 0;
let valor = 0;

//Display do menu de distâncias 
function menuConvDistDisplay() {
    bordas(0);
    console.log("|     Menu conversão de distâncias      |");
    bordas(2);
    console.log("|Escolha uma das seguintes opções:      |");
    console.log("|1 - Quilômetro(km) para milha(mi)      |");
    console.log("|2 - Milha(mi) para quilômetro(km)      |");
    console.log("|3 - Voltar a tela inicial              |");
    console.log("|4 - Fechar o programa                  |")
    bordas(1);
}

//Menu de conversão de distâncias
export default function convDistancia() {
    const number = 1.609344;
    do {
        menuConvDistDisplay();
        opcaoInterna = Number(teclado());
        switch (opcaoInterna) {
            case 1:
                //km para mi
                bordas(0);
                console.log("|Informe o valor a ser convertido:      |");
                bordas(1);
                valor = Number(teclado());
                if (numeroNegativo(validarNumero(valor))) {
                    const kilometersToMiles = ((valor / number).toFixed(2));
                    bordas(0);
                    console.log(`|O valor a ser convertido é: `.padEnd(40, " ") + `|`);
                    console.log(`|${valor}km que é igual a ${kilometersToMiles}mi`.padEnd(40, " ") + `|`);
                    bordas(1);
                }
                break;

            case 2:
                //mi para km
                bordas(0);
                console.log("|Informe o valor a ser convertido:      |");
                bordas(1);
                valor = Number(teclado());
                if (numeroNegativo(validarNumero(valor))) {
                    const milesToKilometers = (valor * number).toFixed(2);
                    bordas(0);
                    console.log(`${valor}mi é igual a ${milesToKilometers}km`.padEnd(40, " ") + `|`);
                    bordas(1);
                }
                break;

            case 3:
                bordas(0);
                console.log("|        Voltando a tela inicial        |");
                bordas(1);
                break;

            case 4:
                bordas(0);
                console.log("|          Saindo do programa           |");
                bordas(1);
                process.exit();

            default:
                bordas(0);
                console.log("|            Opção inválida             |");
                bordas(1);
        }
    } while (opcaoInterna != 3);
}