const express = require('express');
const router  = express.Router();
const Insumo     = require('../models/Insumo');

//saiba mais
router.get('/view/:id', (req, res) => Insumo.findOne({
  where: {id: req.params.id}
}).then(insumo => {

  res.render('view', {
    insumo
  });

}).catch(err => console.log(err)));


// form da rota de envio
router.get('/add', (req, res) => {
  res.render('add');
})

// add insumo via post
router.post('/add', (req, res) => {

  let {title, valor_un, fornecedor, description, email, doacao, estado, telefone} = req.body;

  // insert
  Insumo.create({
    title,
    description,
    valor_un,
    fornecedor,
    email,
    doacao,
    estado,
    telefone
  })
  .then(() => res.redirect('/'))
  .catch(err => console.log(err));

});

module.exports = router