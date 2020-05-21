const express = require('express');
const router  = express.Router();
const Insumo     = require('../models/Insumo');

// rota de teste
router.get('/test', (req, res) => {
  res.send('deu certo');
});

//saiba mais
router.get('/view/:id', (req, res) => Insumo.findOne({
  where: {id: req.params.id}
}).then(job => {

  res.render('view', {
    job
  });

}).catch(err => console.log(err)));


// form da rota de envio
router.get('/add', (req, res) => {
  res.render('add');
})

// add insumo via post
router.post('/add', (req, res) => {

  let {title, valor_un, fornecedor, description, email, doacao} = req.body;

  // insert
  Insumo.create({
    title,
    description,
    valor_un,
    fornecedor,
    email,
    doacao
  })
  .then(() => res.redirect('/'))
  .catch(err => console.log(err));

});

module.exports = router