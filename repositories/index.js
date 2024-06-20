const db = require('../models')
const {sequelize} = require('../config');
const UserRepo   = require('./users_repo')

const userRepo   = new UserRepo(db,db.User)


module.exports = {
	userRepo
}

