import { autor } from '../models/Autor.js';
import livro from '../models/Livro.js';

class LivroController {
    static async listarLivros(req, res) {
        try {
            const listaLivros = await livro.find({});
            res.status(200).json(listaLivros);
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - Erro ao listar livros` });
        }
    };

    static async listarLivroPorId (req, res) {
        try {
            const id = req.params.id;
            const livroEncontrado = await livro.findById(id);
            res.status(200).json(livroEncontrado);
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - Erro ao listar livro por ID` });
        }
    };

    static async cadastrarLivro(req, res) {
        const novoLivro = req.body;
        try{
            const autorEncontrado = await autor.findById(novoLivro.autor);
            const livroCompleto = { ...novoLivro, autor: { ...autorEncontrado._doc} };
            const livroCriado = await livro.create(livroCompleto);
            res.status(201).json({ message: 'Livro cadastrado com sucesso!', livro: livroCriado });
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - Erro ao cadastrar livro` });
        }
    };

    static async atualizarLivro (req, res) {
        try {
            const id = req.params.id;
            await livro.findByIdAndUpdate(id, req.body);
            res.status(200).json({ message: 'Livro atualizado com sucesso!' });
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - Erro ao atualizar livro` });
        }
    };

    static async deletarLivro (req, res) {
        try {
            const id = req.params.id;
            await livro.findByIdAndDelete(id);
            res.status(200).json({ message: 'Livro deletado com sucesso!' });
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - Erro ao deletar livro` });
        }
    };

    static async listaLivrosPorEditora(req, res) {
        const editora = req.query.editora;
        try {
            const livrosPorEditora = await livro.find({ editora: editora });
            res.status(200).json(livrosPorEditora);
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - Erro ao listar livros por editora` });
        }
    }
};

export default LivroController;
