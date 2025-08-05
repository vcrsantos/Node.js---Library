import express from 'express';
import conectaNaDatabase from './config/dbConnect.js';
import routes from './routes/index.js';
import path from 'path';

const conexao = await conectaNaDatabase();

conexao.on('error', (erro) => {
    console.error('Erro na conexão com o banco de dados:', erro);
});

conexao.once('open', () => {
    console.log('Conexão com o banco de dados estabelecida com sucesso!');
});

const app = express();
routes(app);
app.use(express.static(path.resolve('public')))

export default app;