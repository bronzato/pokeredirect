const express = require('express');
const app = express();

// Configura a porta para a aplicação (por padrão, 3000)
const PORT = process.env.PORT || 3000;

// Rota principal para redirecionar o usuário
app.get('/', (req, res) => {
    res.redirect('https://pokechess.com.br');
});

// Inicia o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}.`);
});
