const express = require('express');
const mariadb = require('mariadb');
const app = express();
const port = 3000;

// Configuración de la conexión a la base de datos
const pool = mariadb.createPool({
  host: 'localhost',
  user: 'root',
  password: '2014',
  database: 'taller20_db',
  connectionLimit: 5,
});

// Middleware para analizar datos del formulario
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Ruta para manejar la solicitud de guardar datos en la base de datos
app.post('/guardar-datos', async (req, res) => {
  const { imagen, fecha, nombre, telefono } = req.body;

  try {
    const connection = await pool.getConnection();
    const result = await connection.query(
      'INSERT INTO agenda (agenda, fecha, nombre, telefono) VALUES (?, ?, ?, ?)',
      [imagen, fecha, nombre, telefono]
    );
    connection.release();

    console.log(result);
    res.send('Datos guardados correctamente.');
  } catch (error) {
    console.error(error);
    res.status(500).send('Error al guardar los datos.');
  }
});

// Inicia el servidor
app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
