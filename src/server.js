const express = require('express')
const app = express()
const handlebars = require('express-handlebars')
const path = require('path'); 
/*Route*/
const db = require('./database/index')
const route = require('./routes/index')

const port = 3000
//--------Static file---------//
app.use(express.static(path.join(__dirname, '/views/static')));

//-------Template Engine------//
app.engine('.hbs', handlebars.engine({extname: '.hbs', defaultLayout: false}));
app.set('view engine', '.hbs');
app.set('views', 'src\\views');

db.connect()

route(app)

app.listen(port, () => console.log("SERVER STARTED"))