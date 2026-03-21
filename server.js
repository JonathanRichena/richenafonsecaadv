const express = require('express');
const app = express();
const PORT = 3000;

// Servir arquivos estáticos (seu site)
app.use(express.static(__dirname));

// Rota principal
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
