//Funciones auxiliares

// Destapa celdas vacías adyacentes en cascada
function openArea(c, r) {
    for (let i = -1; i <= 1; i++) {
        for (let j = -1; j <= 1; j++) {
            if (i == 0 && j == 0) {
                continue; // Evita procesar la celda actual
            }

            try {

                if (gameBoard[c + i][r + j].condition != "uncovered") {
                    if (gameBoard[c + i][r + j].condition != "marked") {
                        if (gameBoard[c + i][r + j].value == -1) { // Verifica si es una mina
                            return; // Si es una mina, no abre el área
                        }

                        gameBoard[c + i][r + j].condition = "uncovered";

                        // Si la celda es vacía (0), continúa expandiendo el área
                        if (gameBoard[c + i][r + j].value == 0) {
                            openArea(c + i, r + j);
                        }

                    }
                }

            } catch (e) { } // Ignora errores por índices fuera de rango
        }
    }
}

function stopTimer() {
    if (intervalId) {
        clearInterval(intervalId); // Detiene el temporizador si hay uno en curso
        intervalId = null;
    }
}