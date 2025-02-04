//Lógica de generación de minas y contadores

//Genera el tablero de juego con minas y contadores númericos
function generateDashboardGame() {
  emptyBoard(); // Reinicia el tablero
  putMines(); // Coloca las minas aleatoriamente
  mineCounters(); // Calcula y asigna los contadores de minas
  gameStarted = true;
}

//Inicializa el tablero como una matriz vacía
function emptyBoard() {
  gameBoard = [];
  for (let c = 0; c < columns; c++) {
    gameBoard.push([]);
  }
}

// Inserta minas en posiciones aleatorias del tablero
function putMines() {
  for (let i = 0; i < mines; i++) {
    let c;
    let r;

    do {
      c = Math.floor(Math.random() * columns);
      r = Math.floor(Math.random() * rows);
    } while (gameBoard[c][r]); // Evita colocar dos minas en la misma celda

    gameBoard[c][r] = { value: -1 }; // Representa una mina con -1
  }
}

// Calcula y asigna los números que indican cuántas minas hay alrededor de cada celda
function mineCounters() {
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < columns; c++) {
      if (!gameBoard[c][r]) {
        // Si la celda no contiene una mina
        let counter = 0;

        // Recorre las celdas vecinas para contar minas
        for (let i = -1; i <= 1; i++) {
          for (let j = -1; j <= 1; j++) {
            if (i == 0 && j == 0) {
              continue; // Omite la celda actual
            }

            try {
              // Hay que evitar errores al consultar una celda que sea negativa
              if (gameBoard[c + i][r + j].value == -1) {
                counter++;
              }
            } catch (e) {} // Ignora errores por índices fuera de rango
          }
        }

        gameBoard[c][r] = { value: counter }; // Asigna el contador a la celda
      }
    }
  }
}
