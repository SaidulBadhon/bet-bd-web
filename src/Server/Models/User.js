const Sequelize = require('sequelize')
const db = require('../database/db.js')

module.exports = db.sequelize.define(
  'user',
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    firstName: {
      type: Sequelize.TEXT
    },
    lastName: {
      type: Sequelize.TEXT
    },

    userName: {
      type: Sequelize.TEXT
    },
    number: {
      type: Sequelize.TEXT
    },
    email: {
      type: Sequelize.TEXT
    },
    password: {
      type: Sequelize.TEXT
    },
    created: {
      type: Sequelize.DATE,
      defaultValue: Sequelize.NOW
    },
    curBalance: {
      type: Sequelize.FLOAT
    }
  },
  {
    timestamps: false
  }
)
