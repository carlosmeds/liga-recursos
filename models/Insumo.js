const Sequelize = require('sequelize');
const db = require('../db/connection');

const Insumo = db.define('insumo', {
  title: {
    type: Sequelize.STRING,
  },
  description: {
    type: Sequelize.STRING,
  },
  valor_un: {
    type: Sequelize.STRING,
  },
  fornecedor: {
    type: Sequelize.STRING,
  },
  email: {
    type: Sequelize.STRING,
  },
  doacao: {
    type: Sequelize.INTEGER,
  },
  estado: {
    type: Sequelize.STRING,
  },
  telefone: {
    type: Sequelize.STRING,
  }
});

module.exports = Insumo