// Configuración del juego

let rows = 10; // Número de filas del tablero
let columns = 10; // Número de columnas del tablero
let side = 35; // Tamaño de cada celda en píxeles
let mark = 0; // Contador de marcas (banderas)
let mines = rows * columns * 0.1; // Número total de minas (10% del total de celdas)

let gameStarted = false; // Indica si el juego ya ha comenzado
let gameBoard = []; // Matriz que representa el tablero del juego