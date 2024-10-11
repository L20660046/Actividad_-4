// Obtiene el modal
const modal = document.getElementById("modal");
const modalImage = document.getElementById("modal-image");
const captionText = document.getElementById("caption");
const closeBtn = document.querySelector(".close");

// Obtiene todas las imágenes de la galería
const images = document.querySelectorAll(".gallery-image");

// Añade un evento de clic a cada imagen
images.forEach((img) => {
    img.addEventListener("click", function() {
        modal.style.display = "block";
        modalImage.src = this.src; // Establece la imagen del modal
        captionText.innerHTML = this.alt; // Establece el texto del caption
    });
});

// Añade un evento de clic al botón de cerrar
closeBtn.addEventListener("click", function() {
    modal.style.display = "none";
});

// Cierra el modal si el usuario hace clic fuera de la imagen
modal.addEventListener("click", function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});

