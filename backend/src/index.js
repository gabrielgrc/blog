const express = require('express')
const routes = require('./routes')
const app = express()

app.use(express.json())//permite que a aplicação retorne conteúdo em JSON
app.use(routes)
app.listen(3333)