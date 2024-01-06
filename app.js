// Importamos las libreria:
const express = require('express');
const app = express();
app.use(express.json());

// Importamos el router de libros:
const librosRouter = require("./router/libros");

// Importamos el middleware error handler:
const errorHandler = require('./middleware/errorHandler');

app.use('/libros', librosRouter);
app.use(errorHandler);

app.listen(3000, () => {
  console.log("Servidor iniciado en el puerto 3000");
});