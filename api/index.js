const express = require('express')
const app = express()
const cors = require('cors')

const mysql = require('mysql')

const connection = mysql.createConnection({
    host: "",
    user: "",
    password: "",
    database: ""
})


connection.connect()

app.use(express.json())
app.use(cors())

const port = process.env.PORT || 3000





//-----------------------------------------------------------//
//-----------------------ENDPOINTS---------------------------//
//-----------------------------------------------------------//

app.get('/', (req, res) => {
    res.send('Olá Node')
})


//mandar pro banco um JSON
app.post('/registrar', (req, res) => {

})


//pegar do banco e devolver lista de objetos
app.get('/getUsers', (req, res) => {

    usuarios = [{
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









module.exports = app
//app.listen(3000)
