const express = require('express')
const exphbs = require('express-handlebars')
const User = require('./models/user')
const app = express()
const port = process.env.PORT || 3000
if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
}

require('./config/mongoose')

app.engine('hbs', exphbs.engine({ defaultLayout: "main", extname: ".hbs" }))
app.set("view engine", ".hbs")

app.use(express.urlencoded({ extended: true }))



app.get('/', (req, res) => {
    res.render('index')
})

app.get('/create', (req, res) => {
    res.render('create')
})

app.post('/create', (req, res) => {
    console.log(req.body)
    const { email, password } = req.body
    // return res.render('index', { email, password })
    return User.create({ email, password })
        .then(() => res.render('index', { email, password }))
        .catch(error => console.log(error))
})



app.listen(port, () => {
    console.log(`http://localhost:${port}`)
})