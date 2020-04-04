const connection = require('../database/connection')

module.exports = {
    //método para criar um post
    async create(request, response){
    
    const {category, title, description} = request.body
    
    const [post_id] = await connection('posts').insert({//escreverá no bds estes conteúdos na tabela posts
        category,
        title,
        description,
    })
    return response.json({post_id})

    },
    //método para listar todos os posts
    async index(request, response) {
        const postagens = await connection('posts').select('*')
        return response.json(postagens)
    },
    async delete (request, response){
       
        const{post_id} = request.params
        
        const postagem = await connection('posts')

        
            .where('post_id', post_id)//significa procurar um título que seja igual ao const{title} = request.params definido acima
            .select('post_id')//selecionando apenas a coluna title da tabela
            .first()//como terá apenas um resultado, o first deletará o primeiro resultado do título que vier


            if(postagem.post_id != post_id){//se o título da postagem que colocamos for diferente da do título dentro do bd ...
                return response.status(401).json({error : 'Operation not permitted'})//não autorizado, ou seja, erro
            }
            
            await connection('posts').where('post_id', post_id).delete()
            
            return response.status(200).json({message : 'Ok'})
        }//a fazer posteriormente : retornar uma mensagem de sucesso não em formato JSON e conseguir fazer o delete sem ser mandando o post_id mecanicamente na rota
}