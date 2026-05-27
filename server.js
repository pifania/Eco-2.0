const express = require('express');
const api = require('./api'); // Importa o arquivo api.js (onde está o roteador)

const app = express();

// Middleware para usar as rotas definidas no arquivo api.js
app.use('/api', api);

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});
