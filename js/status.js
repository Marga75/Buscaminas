//Verificación de ganador/perdedor

// Verifica si el jugador ha ganado
function verifyWinner() {
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < columns; c++) {
            // Si hay una celda sin descubrir que no sea una mina, el juego no ha terminado
            if (gameBoard[c][r].condition != "uncovered" && gameBoard[c][r].value != -1) {
                return;
            }
        }
    }

    gameOver = true;
    stopTimer();

    // Marca la victoria cambiando el fondo del tablero a verde
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < columns; c++) {
            let boardCell = document.getElementById(`boardCell-${c}-${r}`);
            boardCell.style.backgroundImage = "none";
            boardCell.style.background = "green";
        }
    }

    showPopup('¡Felicidades!', 'Has ganado en ' + document.getElementById("time-counter").innerHTML + ' con ' + clicks + ' clics.');

    inGame = false;
    gameStarted = false;

}

// Verifica si el jugador ha perdido
function verifyLoser() {
    if (gameStarted) { // Solo verifica si el juego ya comenzó
        for (let r = 0; r < rows; r++) {
            for (let c = 0; c < columns; c++) {
                // Si una celda descubierta contiene una mina, el jugador pierde
                if (gameBoard[c][r].condition == "uncovered" && gameBoard[c][r].value == -1) {
                    inGame = false;
                    gameOver = true;
                    clearInterval(intervalId);
                }
            }
        }

        if (!inGame) { // Si el juego ha terminado, muestra la pantalla de derrota
            gameOver = true;
            stopTimer();
            showLoseScreen();
            showPopup('¡Lo siento!', 'Has perdido. El dinosaurio te ha encontrado.');
        }
    }
}

// Muestra el tablero con las minas reveladas tras perder
function showLoseScreen() {
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < columns; c++) {
            let boardCell = document.getElementById(`boardCell-${c}-${r}`);
            boardCell.style.backgroundImage = "none";
            boardCell.style.background = "red";

            if (gameBoard[c][r].value == -1) {
                // Muestra la imagen de la mina
                boardCell.innerHTML = `<img class="mine" src="imgs/velociraptor.webp" alt="velociraptor">`;
            }
        }
    }
}