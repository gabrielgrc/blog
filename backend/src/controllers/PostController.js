const connection = require('../database/connection')

module.exports = {
    //método para criar um post
    async create(request, response){
    
    const {category, title, description} = request.body
    
    await connection('posts').insert({//escreverá no bds estes conteúdos na tabela posts
        category,
        title,
        description,
    })
    return response.json({category, title, description})

    },
    //método para listar todos os posts
    async index(request, response) {
        const postagens = await connection('posts').select('*')
        return response.json(postagens)
    }/*, 
    async delete (request, response){
        const postagem = await connection ('posts')
    }*/
}