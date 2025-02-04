// Control general del juego

// Inicia una nueva partida
newGame();

function newGame(){
    gameStarted = false; // Reinicia el estado del juego

    generateDashboardGame(); // Genera la lógica del tablero
    generateDashboardHTML(); // Genera la estructura visual del tablero

    // Actualizamos la interfaz del tablero después de un breve retraso
    setTimeout(function (){
        refreshBoard();
    }, 100);
}