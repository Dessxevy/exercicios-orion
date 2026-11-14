const express = require('express');
const { Pool } = require('pg');

const app = express();
const PORT = 3000;

app.use(express.json());

const db = new Pool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    port: 5432
});

app.get('/', (req, res) => {
    res.send(`Teste do ambiente ${process.env.APP_ENV}!`);
});

app.post('/mensagens', async (req, res) => {
    try {
        const { texto } = req.body;

        const resultado = await db.query(
            'INSERT INTO mensagens (texto) VALUES ($1) RETURNING *',
            [texto]
        );

        res.status(201).json(resultado.rows[0]);
    } catch (erro) {
        res.status(500).json({ erro: 'Erro ao gravar no banco.' });
    }
});

async function iniciar() {
    try {
        await db.query(`
            CREATE TABLE IF NOT EXISTS mensagens (
                id SERIAL PRIMARY KEY,
                texto TEXT NOT NULL
            )
        `);

        app.listen(PORT, '0.0.0.0', () => {
            console.log('API rodando na porta ' + PORT);
        });
    } catch (erro) {
        console.log('Aguardando o PostgreSQL...');
        setTimeout(iniciar, 3000);
    }
}

iniciar();