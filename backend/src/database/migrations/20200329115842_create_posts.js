exports.up = function(knex) {//exports.up será a configuração da nossa tabela
    return knex.schema.createTable('posts', function(table){
        //chave primária que se auto incrementa a cada post
        table.increments('post_id').primary

        table.string('category').notNullable()
        table.string('title').notNullable()
        table.string('description').notNullable()

        //table.string('author_id').notNullable() -> quando a entidade autor for criada
        //table.foreign('author_id').references('id').inTable('authors')
    })
};

exports.down = function(knex) {//exports.down será quando precisarmos deletar a nossa tabela
    return knex.schema.dropTable('posts')
};
