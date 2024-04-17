const express = require('express');
const app = express();
const port = 3001;

app.use(express.json());

function validarEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

app.post('/validar-email', (req, res) => {
  const { email } = req.body;
  if (validarEmail(email)) {
    res.status(200).send({ message: 'Email válido' });
  } else {
    res.status(400).send({ message: 'Email no válido' });
  }
});

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});

module.exports = { app, validarEmail };
