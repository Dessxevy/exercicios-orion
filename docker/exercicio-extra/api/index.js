const express = require('express');
const { Pool } = require('pg');

const app = express();
const PORT = 3000;

const db = new Pool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    port: 5432
});

app.get('/', (req, res) => {
    res.send('API do desafio extra Docker!');
});

app.get('/health', async (req, res) => {
    try {
        await db.query('SELECT 1');

        res.status(200).json({
            status: 'healthy',
            database: 'connected'
        });
    } catch (erro) {
        res.status(503).json({
            status: 'unhealthy',
            database: 'disconnected'
        });
    }
});

app.listen(PORT, '0.0.0.0', () => {
    console.log('API rodando na porta ' + PORT);
});