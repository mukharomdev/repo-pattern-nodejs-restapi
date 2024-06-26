const {Sequelize} = require("../lib")
require('dotenv').config()

const Database = process.env.DATABASE
const Username = process.env.USERNAME
const Password = process.env.PASSWORD
const DialectPG= process.env.DIALECTPG
const Host 	   = process.env.HOST
const Pool     = {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }

// Option 3: Passing parameters separately (other dialects)
const sequelize = new Sequelize(Database, Username, Password, {
	  host: Host,
	  dialect: DialectPG,
	  /* one of 'mysql' | 'postgres' | 'sqlite' | 'mariadb' | 'mssql' | 'db2' | 'snowflake' | 'oracle' */
      pool: {
	    max: Pool.max,
	    min: Pool.min,
	    acquire: Pool.acquire,
	    idle: Pool.idle
	  }

	});


async function initConnection(){

	try {
	  await sequelize.authenticate();
	  console.log('Connection has been established successfully.');
	} catch (error) {
	  console.error('Unable to connect to the database:', error);
	}
}

module.exports = {
	sequelize,
	initConnection
} ;