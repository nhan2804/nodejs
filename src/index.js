const express = require('express')
const path = require('path')
const morgan = require('morgan')
const handlebars  = require('express-handlebars');
const app = express()
const router = require('./router')
const db = require('./config/db');
db.connect();
app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'resources','views'));
app.use(express.urlencoded({
  extended:true
}));
app.use(express.json());
var cors = require('cors');
app.use(cors({origin: 'http://localhost:3000'}));
const port = 7001
app.use(morgan('combined'))
app.use(express.static(path.join(__dirname, 'public')))

router(app);
app.listen(port, () => {
  console.log(`Đã chạy server tại http://localhost:${port}`)
})