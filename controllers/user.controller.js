const Controller = require('./class_controller')
const {userRepo} = require('../repositories')

class UserController extends Controller{
	constructor(req,res){
		super(req,res)
	}


	createUser(req,res){
		let username = req.body.username

		if(username == "" || !username || typeof(username) != 'string'){
			res.status(405).send({message:"invalid body"})
			return
		}else{
			 userRepo.store(username)
			.catch(err=>{
				if(err){
					res.status(500).send({message:"create user failed"})
				}
			})

			res.status(201).send({message:"create user succesfully"})

		}

	}

	getUsers(req,res){
		let all = userRepo.getAll()
		all.then(data=>{
			res.status(200).send(data)
			})
	}

	getUserById(req,res){
		let id = req.params.userId
		let user = userRepo.findById(id)
		user.then(data=>{
			res.status(200).send(data[0])
		})
	}


	updateUser(req,res){
		res.status(200).send({message:"update user"})
	}

	deleteUser(req,res){
		res.status(200).send({message:"delete user"})
	}
}


module.exports = UserController