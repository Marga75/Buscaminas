// Configuración del juego

let rows = 10; // Número de filas del tablero
let columns = 10; // Número de columnas del tablero
let side = 35; // Tamaño de cada celda en píxeles
let mark = 0; // Contador de marcas (banderas)
let mines = rows * columns * 0.1; // Número total de minas (10% del total de celdas)

let gameStarted = false; // Indica si el juego ya ha comenzado
let gameBoard = []; // Matriz que representa el tablero del juego
let inGame = true; // Indica si el juego sigue en curso
let clicks = 0; // Contador de clics del jugador
let intervalId = null; // ID del intervalo del cronómetro
let gameOver = false; // Indica si el juego ha terminado
let isContrareloj = false; // Indica si el modo contrarreloj está activado
let gameStartTime = null; // Guarda el tiempo exacto de inicio del juego
let tiempo = 0; // Tiempo transcurrido en segundos