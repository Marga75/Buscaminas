// Elementos del popup en el DOM
const popup = document.getElementById('popup');
const popupTitle = document.getElementById('popup-title');
const popupMessage = document.getElementById('popup-message');
const closePopup = document.getElementById('close-popup');

// Muestra el popup con un título y mensaje personalizados
function showPopup(title, message) {
    popupTitle.textContent = title;
    popupMessage.textContent = message;
    popup.style.display = 'block';
}

// Oculta el popup
function hidePopup() {
    popup.style.display = 'none';
}

// Agrega evento para cerrar el popup al hacer clic en el botón de cierre
closePopup.addEventListener('click', hidePopup);