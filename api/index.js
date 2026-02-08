const express = require('express')
const app = express()
const cors = require('cors')

const mysql = require('mysql')

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "user"
})


connection.connect()

app.use(express.json())
app.use(cors())







//-----------------------------------------------------------//
//-----------------------ENDPOINTS---------------------------//
//-----------------------------------------------------------//

app.get('/', (req, res) => {
    res.send('Olá Node')
})


//mandar pro banco um JSON
app.post('/registrar', (req, res) => {
    res.status(200).send("user registered")
})


//pegar do banco e devolver lista de objetos
app.get('/getUsers', (req, res) => {

    var usuarios = [{
        nome: "Ryan Vieira Assumpção",
        idade: "20",
        descrição: "Brasileiro, nascido no interior de SP"
    },

    {
        nome: "Ryan Vieira Assumpção",
        idade: "20",
        descrição: "Brasileiro, nascido no interior de SP"
    }
    ]

    res.json(usuarios)
})









//module.exports = app
app.listen(3000)
