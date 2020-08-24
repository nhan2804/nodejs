const express = require('express')
const path = require('path')
const morgan = require('morgan')
const handlebars  = require('express-handlebars');
const app = express()
app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'resources/views'));

const port = 3000
app.use(morgan('combined'))
app.use(express.static(path.join(__dirname, 'public')))
app.get('/', (req, res) => {
  res.render('home')
})

app.listen(port, () => {
  console.log(`Đã chạy server tại http://localhost:${port}`)
})