const Repository = require('./class_repo')
const {Op} 		 = require('../lib')

class UserRepo extends Repository{

    constructor(database,model){
    	super(database,model);
    }


    async store(username){
    	super.store(username)
    	if(username == ''){
    		throw  Error("tidak boleh kosong")
    	}
    	let user = {username}
    	if(this._database.User == this._model){
	    	await this._model.create(user)
	    	.then(data=>data)
	    	.catch(err=>console.log(err))
    	}
	}

	async getAll(){
		let users = []
	    await this._model.findAll()
		.then(data=>data.forEach(d=>users.push(d)))
		.catch(err=>console.log(err))

		return users
	}

	async findById(id){
		let user = {};
		await this._model.findAll({
				  where: {
				    id: {
				      [Op.eq]: id,
				    },
				  },
				})
		.then(data=> Object.assign(user,data))


	return user

	}

}


module.exports = UserRepo