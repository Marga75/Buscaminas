// Generación y manipulación del tablero

// Genera la representación HTML del tablero de juego
function generateDashboardHTML(){
    let html = "";
    for (let r = 0; r < rows; r++) {
        html += "<tr>";
        for (let c = 0; c < columns; c++) {
            //Crea cada celda con un ID único basado en sus coordenadas
            html += `<td id="boardCell-${c}-${r}" style="width:${side}px;height:${side}px;">`;

            html += "</td>";
        }
        html += "</tr>";
    }

    // Inserta el HTML generado en el contenedor del tablero y ajusta su tamaño
    let gameBoardHTML = document.getElementById("gameBoard");
    gameBoardHTML.innerHTML = html;
    gameBoardHTML.style.width = columns * side + "px";
    gameBoardHTML.style.height = rows * side + "px";
}

// Actualiza la apariencia del tablero según su estado lógico
function refreshBoard(){
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < columns; c++) {
            let boardCell = document.getElementById(`boardCell-${c}-${r}`);

            boardCell.style.backgroundImage = `url(imgs/ground.webp)`;

            if (gameBoard[c][r].condition == "uncovered"){
                // Muestra una mina, un número o una celda vacía según su valor
                switch (gameBoard[c][r].value){
                    case -1:
                        boardCell.innerHTML = `<img class="mine" src="imgs/velociraptor.webp" alt="velociraptor">`;
                        break;
                    case 0:
                        break;
                    default:
                        boardCell.innerHTML = gameBoard[c][r].value;
                        break;
                }
            }

            if (gameBoard[c][r].condition == "marked"){
                // Marca la celda con una bandera
                boardCell.innerHTML = `<img class="marked" src="imgs/ingen.webp" alt="ingen">`;
            }

            if(gameBoard[c][r].condition == undefined) {
                // Restablece la celda si o tiene estado definido
                boardCell.innerHTML = "";
                boardCell.style.background = "";
            }
        }
    }

    //verifyWinner(); // Comprueba si el jugador ha ganado
    //verifyLoser(); // Comprueba si el jugador ha perdido
    updateMinePanel(); // Actualiza el panel de minas restantes

}

// Actualiza el contador de minas restantes en la interfaz
function updateMinePanel() {
    let panel = document.getElementById("mines");
    panel.innerHTML = mines - mark;
}

generateDashboardHTML();