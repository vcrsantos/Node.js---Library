import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import livros from './livroRoutes.js';
import autores from './autoresRoutes.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const routes = (app) => {
    app.route('/').get((req, res) => res.status(200).send('Bem-vindo ao servidor!'));

    app.use(express.json(), livros, autores);
};

export default routes;