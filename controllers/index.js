const UserController = require('./user.controller')
const {express}      = require('../lib')

const userController = new UserController(express.req,express.res);


module.exports ={
	userController
}