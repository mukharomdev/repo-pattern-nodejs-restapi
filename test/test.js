const {userRepo} = require('../repositories')



let userid = userRepo.findById(1)

userid.then(data=>console.log(JSON.stringify(data)))













