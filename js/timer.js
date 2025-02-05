//Control del temporizador y conteo de clics

// Actualiza el contador de clics en la interfaz
function updateClicksCounter() {
    document.getElementById("clicks-number").innerHTML = clicks;
}

//Controla el temporizador del juego
function updateTimeCounter(){
    if(gameOver){
        stopTimer();
        return;
    }

    if (isContrareloj) {
        if (tiempo > 0) {
            tiempo--; // Disminuye el tiempo en modo contrarreloj
        } else {
            stopTimer();
            alert("¡Tiempo agotado!");
            stopGame();
        }
    } else {
        tiempo++; // Aumenta el tiempo en otros modos
    }

    // Formatea el tiempo en minutos y segundos
    let minutos = Math.floor(tiempo / 60);
    let segundos = tiempo % 60;
    document.getElementById("time-counter").innerHTML =
        `${minutos.toString().padStart(2, '0')}:${segundos.toString().padStart(2, '0')}`;
}