// Desafio classificador de nível de herói

let nomePersonagem = "Baballo"
let xpPersonagem = 8000

switch (true){
    case (xpPersonagem <= 1000):
    console.log("O herói de nome " + nomePersonagem + " está no nível de Ferro!")
    break

    case (xpPersonagem >= 1001 && xpPersonagem <= 2000):
    console.log("O herói de nome " + nomePersonagem + " está no nível de Bronze!")
    break

    case (xpPersonagem >= 2001 && xpPersonagem <= 5000):
    console.log("O herói de nome " + nomePersonagem + " está no nível de Prata!")
    break

    case (xpPersonagem >= 5001 && xpPersonagem <= 7000):
    console.log("O herói de nome " + nomePersonagem + " está no nível de Ouro!")
    break

    case (xpPersonagem >= 7001 && xpPersonagem <= 8000):
    console.log("O herói de nome " + nomePersonagem + " está no nível de Platina!")
    break

    case (xpPersonagem >= 8001 && xpPersonagem <= 9000):
    console.log("O herói de nome " + nomePersonagem + " está no nível de Ascendente!")
    break

    case (xpPersonagem >= 9001 && xpPersonagem <= 10000):
    console.log("O herói de nome " + nomePersonagem + " está no nível de Imortal!")
    break

    case (xpPersonagem >= 10001):
    console.log("O herói de nome " + nomePersonagem + " está no nível de Ratiante!")
    break

    default:
    console.log("O nível do herói " + nomePersonagem + " é desconhecido neste reino!")

}