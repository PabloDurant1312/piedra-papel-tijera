document.getElementById("piedra").addEventListener("click", function () {
    playGame("piedra");
});

document.getElementById("papel").addEventListener("click", function () {
    playGame("papel");
});

document.getElementById("tijera").addEventListener("click", function () {
    playGame("tijera");
});

function playGame(userChoice) {
    const choices = ["piedra", "papel", "tijera"];
    const computerChoice = choices[Math.floor(Math.random() * 3)];

    const result = getResult(userChoice, computerChoice);
    displayResult(result, computerChoice);
}

function getResult(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return "Empate";
    } else if (
        (userChoice === "piedra" && computerChoice === "tijera") ||
        (userChoice === "papel" && computerChoice === "piedra") ||
        (userChoice === "tijera" && computerChoice === "papel")
    ) {
        return "Ganaste";
    } else {
        return "Perdiste";
    }
}

function displayResult(result, computerChoice) {
    const resultElement = document.querySelector(".result");
    resultElement.innerHTML = `${result.toUpperCase()}. La computadora eligió ${computerChoice}.`;
}
