document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.getElementById("searchInput");
    const searchButton = document.getElementById("searchButton");

    searchButton.addEventListener("click", function () {
        const characterName = searchInput.value.trim();
        if (characterName) {
            // Construye la URL de la API con el nombre del personaje
            const apiUrl = `https://www.breakingbadapi.com/api/characters?name=${characterName}`; // no funciona la API

            // Realiza la solicitud fetch
            fetch(apiUrl)
                .then(response => response.json())
                .then(data => {
                    if (data.length > 0) {
                        // Redirige a character.html con los detalles del primer personaje
                        const characterDetails = data[0];
                        window.location.href = `character.html?id=${characterDetails.char_id}`;
                    } else {
                        alert("Personaje no encontrado.");
                    }
                })
                .catch(error => {
                    console.error("Error al buscar el personaje:", error);
                });
        }
    });
});
