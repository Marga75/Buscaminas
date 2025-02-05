//Manejo de eventos (clics y doble clics)

// Agrega eventos de clic y doble clic a cada celda del tablero
function addEvents() {
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < columns; c++) {
      let boardCell = document.getElementById(`boardCell-${c}-${r}`);
      boardCell.addEventListener("dblclick", (me) => {
        doubleClick(boardCell, c, r, me); // Doble clic
      });
      boardCell.addEventListener("mouseup", (me) => {
        simpleClick(boardCell, c, r, me); // Clic normal
      });
    }
  }
}

// Destapa las celdas adyacentes a ña seleccionada
function doubleClick(boardCell, c, r, me) {
  if (!inGame) {
    return;
  }

  openArea(c, r);
  refreshBoard();
}

function simpleClick(boardCell, c, r, me) {
  if (!inGame) {
    return; // No se permite interacción si el juego terminó
  }
  if (gameBoard[c][r].condition == "uncovered") {
    return; // No se puede redescubrir una celda ya abierta
  }

  // Inicia el juego con el primer clic y activa el temporizador
  if (!gameStarted) {
    gameStarted = true;
    gameStartTime = new Date().getTime();

    if (intervalId === null) {
      intervalId = setInterval(updateTimeCounter, 1000);
    }
  }

  switch (me.button) {
    case 0: // Clic izquierdo: descubre la celda
      if (gameBoard[c][r].condition == "marked") {
        break;
      }

      // Asegura que la primera jugada no sea una mina
      while (!gameStarted && gameBoard[c][r].value == -1) {
        generateDashboardGame();
      }

      gameBoard[c][r].condition = "uncovered";
      gameStarted = true;

      // Si la celda es vacía (0), abre su área adyacente
      if (gameBoard[c][r].value == 0) {
        openArea(c, r);
      }

      break;
    case 1: // Clic medio (scroll): no tiene función asignada, pero se deja por compatibilidad
      break;
    case 2: // Clic derecho: marca o desmarca una celda con una bandera
      if (gameBoard[c][r].condition == "marked") {
        gameBoard[c][r].condition = undefined;
        mark--;
      } else if (mark < mines) {
        gameBoard[c][r].condition = "marked";
        mark++;
      }
      break;

    default:
      break;
  }

  clicks++;
  updateClicksCounter();

  refreshBoard();
}
