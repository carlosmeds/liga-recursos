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
  company: {
    type: Sequelize.STRING,
  },
  email: {
    type: Sequelize.STRING,
  },
  new_job: {
    type: Sequelize.INTEGER,
  }
});

module.exports = Insumo