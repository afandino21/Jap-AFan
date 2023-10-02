document.addEventListener("DOMContentLoaded", function () {
    // Obtener el nombre del personaje de la URL (parámetro name)
    const characterName = getCharacterNameFromURL();

    if (characterName) {
        // Realizar un fetch para obtener los detalles del personaje
        fetchCharacterDetails(characterName);
    }
});

function getCharacterNameFromURL() {
    const searchParams = new URLSearchParams(window.location.search);
    return searchParams.get("name");
}

function fetchCharacterDetails(characterName) {
    // Realizar el fetch de los detalles del personaje utilizando la URL base y el nombre
    // Luego, mostrar los detalles en la página character.html
    // Ejemplo:
    // const characterDetailsDiv = document.getElementById("characterDetails");
    // characterDetailsDiv.innerHTML = `Detalles del personaje: ${characterName}`;
}
