const themeButton = document.getElementById('toggle-theme');
themeButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});



const menuToggle = document.getElementById('menu-toggle');
const menu = document.getElementById('menu');

menuToggle.addEventListener('click', () => {
    menu.classList.toggle('open');
});




let currentIndex = 0;
const items = document.querySelectorAll('.carousel-item');
const totalItems = items.length;

function updateCarousel() {
    items.forEach((item, index) => {
        const video = item.querySelector('video');
        if (index === currentIndex) {
            item.classList.add('active');
            video.play(); // Reproduce el video activo
        } else {
            item.classList.remove('active');
            video.pause(); // Pausa el video inactivo
            video.currentTime = 0; // Reinicia el video inactivo al inicio
        }
    });
}

document.getElementById('next').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % totalItems; // Ciclo al siguiente video
    updateCarousel();
});

document.getElementById('prev').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + totalItems) % totalItems; // Ciclo al anterior
    updateCarousel();
});

// Iniciar el primer video automáticamente
window.addEventListener('load', () => {
    updateCarousel();
});

const form = document.getElementById('contact-form');
const messageDiv = document.getElementById('form-message');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const mensaje = document.getElementById('mensaje').value;

    if (nombre === '' || email === '' || mensaje === '') {
        messageDiv.textContent = 'Por favor completa todos los campos.';
        messageDiv.style.color = 'red';
    } else {
        messageDiv.textContent = '¡Mensaje enviado con éxito!';
        messageDiv.style.color = 'green';
        form.reset();
    }
});


