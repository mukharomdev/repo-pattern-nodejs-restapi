class Repository {
	constructor(database,model){
		this._database = database;
		this._model    = model   ;
	}
	async store(username){
		if(typeof(username) != 'string'){
			throw Error("Harus string")
		}

	}
}


module.exports = Repository ;