document.addEventListener("DOMContentLoaded", function () {

    document.getElementById("registro-form").addEventListener("submit", function (event) {
        event.preventDefault();

        const nombre = document.getElementById("nombre").value;
        const apellido = document.getElementById("apellido").value;
        const fechaNacimiento = document.getElementById("fecha-nacimiento").value;

        const datosUsuario = {
            nombre,
            apellido,
            fechaNacimiento
        };

        fetch("https://jsonplaceholder.typicode.com/users", {
            method: "POST",
            body: JSON.stringify(datosUsuario),
            headers: {
                'Content-Type': 'application/json'
            },
        })
            .then(response => response.json())
            .then(data => {
                console.log("Respuesta del servidor:", data);
            })
            .catch(error => {
                console.error('Error:', error);
                alert("Error. No se pudo registrar.");
            });
    });
});