const express = require('express')
const app = express()
const cors = require('cors')

app.use(express.json())
app.use(cors({
    origin: ["https://user-reg-to-cards.vercel.app/", "https://locahost:3000/npm"]
}))



//

app.get('/', (req, res) => {
    res.send('Olá Node')
})


//mandar pro banco um JSON
app.post('/registrar', (req, res) => {

})


//pegar do banco e devolver lista de objetos
app.get('/exibir', (req, res) => {

    usuarios = {
        nome: "Ryan",
        sobrenome: "Vieira Assumpção",
        idade: "20",
        descrição: "brasileiro, nascido no interior de SP"
    }

    res.json(usuarios)
})






module.exports = app


