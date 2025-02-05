// Control general del juego

// Inicia una nueva partida
newGame();

function newGame() {
  // Detiene cualquier temporizador activo antes de reiniciar el juego
  stopTimer();

  gameOver = false;
  gameStarted = false; // Reinicia el estado del juego

  generateDashboardGame(); // Genera la lógica del tablero
  generateDashboardHTML(); // Genera la estructura visual del tablero
  addEvents(); // Asigna eventos a las celdas

  // Actualizamos la interfaz del tablero después de un breve retraso
  setTimeout(function () {
    refreshBoard();
  }, 100);

  resetVariables(); // Restablece variables esenciales
  clicks = 0; // Reinicia el contador de clics
  updateClicksCounter(); // Actualiza la interfaz del contador de clics

  tiempo = 0; // Reinicio normal del tiempo
  document.getElementById("time-counter").innerHTML = "00:00";
}

// Restablece variables clave para iniciar un nuevo juego
function resetVariables() {
  mark = 0;
  inGame = true;
  gameStarted = false;
}

// Finaliza la partida, deteniendo el temporizador y desactivando la interacción
function stopGame() {
  stopTimer();
  inGame = false;
}
