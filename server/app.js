const express = require('express')
const app = express()

//middlewares
const helmet = require('helmet')
const cors = require('cors')

app.use(helmet())
app.use(cors())

app.use(express.json());

app.get('/', (req, res) => { 
    res.send('<h1> home page<h1/>')
})

app.use('/api', require('./routes'))

app.listen(process.env.PORT || 3000, () => { 
    console.log(`express on port 3000`)
 })