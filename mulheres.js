const express = require("express")
const router = express.Router()


const app = express()
const porta =  3333
const mulheres = [
    {
        nome: 'Simara Conceição',
        imagem: 'https://github.com/simaraconceicao.png',
        mimibio: 'Desenvolvedora e instrutora'
    },
    {
        nome: 'Jéssica Lira',
        imagem: 'https://github.com/jessicalira1001.png',
        mimibio: 'Desenvolvedora e instrutora'
    },
    {
        nome: 'Fulano de tal',
        imagem: 'https://github.com/simaraconceicao.png',
        mimibio: 'Desenvolvedora e instrutora'
    },

]


function mostraMulheres(request, response){
    response.json(mulheres)
}


function mostraPorta() {
    console.log("Servidor criado e rodando na porta ", porta)
}

app.use(router.get('/mulheres', mostraMulheres))
app.listen(porta, mostraPorta)