/*  É um requisito ter node instalado
    Utilize Node no terminal para iniciar aplicação.
    módulo ('prompt-sync') para receber entradas e ler pelo terminal
 */

import prompt from 'prompt-sync';
const teclado = prompt();

import bordas from './bordas.js';

import conVelocidade from './conversorVelocidade.js';
import convTemperatura from './conversorTemperatura.js';

let opcao = 0;

//Display do menu principal
function menuPrincipalDisplay() {
    bordas(0);
    console.log("|            Menu principal             |");
    bordas(2);
    console.log("|Escolha uma das seguintes opções:      |");
    console.log("|1 - Conversão de velocidade            |");
    console.log("|2 - Conversão de temperaturas          |");
    console.log("|3 - Fechar o programa                  |");
    bordas(1);
}

//Menu principal
function menuPrincipal() {
    do {
        menuPrincipalDisplay();
        opcao = parseInt(teclado());
        switch (opcao) {
            case 1:
                conVelocidade();
                break;

            case 2:
                convTemperatura();
                break;

            case 3:
                bordas(0);
                console.log("|          Saindo do programa           |");
                bordas(1);
                break;

            default:
                bordas(0);
                console.log("|            Opção inválida             |");
                bordas(1);
        }
    } while (opcao != 3);
}

menuPrincipal();