const dbconfig = require('../config/db')
const Sequelize =  require('sequelize')
const sequelize = new Sequelize(
    dbconfig.DB,
    dbconfig.USER,
    dbconfig.PASSWORD,{
        host: dbconfig.Host,
        dialect:dbconfig.dialect,
        operatorAlias: false,
        pool:{
            max: dbconfig.pool.max,
            min: dbconfig.pool.min,
            acquire: dbconfig.pool.acquire,
            idle: dbconfig.pool.idle
        },
    });
    const db = {};
    db.Sequelize = Sequelize
    db.sequelize = sequelize


    db.quizzes = require('./quiz')(sequelize,Sequelize);
    module.exports = db;