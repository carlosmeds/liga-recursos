const express    = require('express');
const exphbs     = require('express-handlebars');
const app        = express();
const path       = require('path');
const db         = require('./db/connection');
const bodyParser = require('body-parser');
const Insumo        = require('./models/Insumo');
const Sequelize  = require('sequelize');
const process = require('process');
const Op         = Sequelize.Op;

const PORT = process.env.PORT || 3000;

app.listen(PORT, function() {
  console.log(`O Express está rodando na porta ${PORT}`);
});

// body parser
app.use(bodyParser.urlencoded({ extended: false }));

// handle bars
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

// static folder
app.use(express.static(path.join(__dirname, 'public')));

// db connection
db
  .authenticate()
  .then(() => {
    console.log("Conectou ao banco com sucesso");
  })
  .catch(err => {
    console.log("Ocorreu um erro ao conectar", err);
  });

// routes
app.get('/', (req, res) => {

  let search = req.query.insumo;
  let query  = '%'+search+'%'; 

  if(!search) {
    Insumo.findAll({order: [
      ['createdAt', 'DESC']
    ]})
    .then(insumos => {
  
      res.render('index', {
        insumos
      });
  
    })
    .catch(err => console.log(err));
  } else {
    Insumo.findAll({
      where: {title: {[Op.like]: query}},
      order: [
        ['createdAt', 'DESC']
    ]})
    .then(insumos => {
      console.log(search);
      console.log(search);
  
      res.render('index', {
        insumos, search
      });
  
    })
    .catch(err => console.log(err));
  }

  
});

// insumos routes
app.use('/insumos', require('./routes/insumos'));