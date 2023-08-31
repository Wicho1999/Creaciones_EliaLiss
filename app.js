document.addEventListener("DOMContentLoaded", function () {
    const librosDestacados = [
        {
            titulo: "Título del Libro 1",
            autor: "Autor del Libro 1",
            imagen: "imagen-libro1.jpg"
        },
        {
            titulo: "Título del Libro 2",
            autor: "Autor del Libro 2",
            imagen: "imagen-libro2.jpg"
        },
        // Agrega más libros destacados aquí
    ];

    const destacadosSection = document.querySelector(".destacados");

    librosDestacados.forEach(libro => {
        const libroDiv = document.createElement("div");
        libroDiv.className = "libro";
        libroDiv.innerHTML = `
            <img src="${libro.imagen}" alt="${libro.titulo}">
            <h3>${libro.titulo}</h3>
            <p>${libro.autor}</p>
        `;
        destacadosSection.appendChild(libroDiv);
    });
});
