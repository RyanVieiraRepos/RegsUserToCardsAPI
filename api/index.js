const express = require('express')
const app = express()

app.use(express.json())


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

    res.send(usuarios)


})


module.exports = app