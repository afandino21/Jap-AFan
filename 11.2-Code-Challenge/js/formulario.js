const formulario = document.getElementById('formulario');



formulario.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevenir el envío del formulario

    // Obtener los valores de los campos
    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const fechaNacimiento = document.getElementById('fecha_nacimiento').value;

    // Crear un objeto con los datos
    const datosPersonales = {
        Nombre: nombre,
        Apellido: apellido,
        fechaNacimiento: fechaNacimiento
    };

    // Mostrar el objeto en la consola
    console.log(datosPersonales);

    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(datosPersonales),
    };

});
