// Muestra u oculta el menú de selección de modo de juego
function toggleGameModeMenu() {
    const gameModeMenu = document.getElementById('game-mode-menu');
    gameModeMenu.style.display = gameModeMenu.style.display === 'block' ? 'none' : 'block';
}

// Configura el juego según el modo de dificultad seleccionado
function selectGameMode(mode) {
    stopTimer();

    // Ajusta las dimensiones del tablero y la cantidad de minas según la dificultad
    switch (mode) {
        case 'facil':
            rows = 10;
            columns = 10;
            side = 35;
            mines = Math.floor(rows * columns * 0.1);
            isContrareloj = false;
            break;
        case 'intermedio':
            rows = 15;
            columns = 15;
            side = 30;
            mines = Math.floor(rows * columns * 0.1);
            isContrareloj = false;
            break;
        case 'dificil':
            rows = 20;
            columns = 20;
            side = 25;
            mines = Math.floor(rows * columns * 0.1);
            isContrareloj = false;
            break;
        case 'contrareloj':
            rows = 10;
            columns = 10;
            side = 35;
            mines = Math.floor(rows * columns * 0.1);
            isContrareloj = true;
            gameOver = false;
            break;
        default:
            isContrareloj = false;
            break;
    }

    gameStartTime = null; // Reinicia el tiempo de inicio del juego
    newGame(); // Inicia una nueva partida con la configuración seleccionada
    toggleGameModeMenu(); // Oculta el menú después de seleccionar un modo
}