const express = require ('express')
const routes = express.Router()

//importação do controller
const PostController = require('./controllers/PostController')

routes.post('/postagens', PostController.create)

//Rota para listar todas as postagens
routes.get('/postagens', PostController.index)

//rota para deletar uma postagem
routes.delete('/postagens/:post_id', PostController.delete)

module.exports = routes