function nivel() {
    let vitorias = 10;
    let derrotas = 0;
    return vitorias - derrotas;
}

let nivelatual = nivel();  

console.log("O total de vitórias é de " + nivelatual + "!");

let nomeNivel = "";  // Variável para armazenar o nome do nível

if (nivelatual <= 10) {
    nomeNivel = "Ferro";
    console.log("Parabéns! Você está no nível " + nomeNivel + ".");
} else if (nivelatual <= 20) {
    nomeNivel = "Bronzer";
    console.log("Parabéns! Você está no nível " + nomeNivel + ".");
} else if (nivelatual <= 50) {
    nomeNivel = "Prata";
    console.log("Parabéns! Você está no nível " + nomeNivel + ".");
} else if (nivelatual <= 80) {
    nomeNivel = "Ouro";
    console.log("Parabéns! Você está no nível " + nomeNivel + ".");
} else if (nivelatual <= 90) {
    nomeNivel = "Diamante";
    console.log("Parabéns! Você está no nível " + nomeNivel + ".");
} else if (nivelatual <= 100) {
    nomeNivel = "Lendário";
    console.log("Parabéns! Você está no nível " + nomeNivel + ".");
} else if (nivelatual >= 101) {
    nomeNivel = "Imortal";
    console.log("Parabéns! Você está no nível " + nomeNivel + ".");
} else {
    console.log("Este nível não existe.");
}

console.log("O Herói tem um saldo de " + nivelatual + " e está no nível de " + nomeNivel + ".");
