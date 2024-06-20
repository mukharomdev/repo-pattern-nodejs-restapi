const {express} = require('../lib');
const {userRepo} = require('../repositories')
const {userController} = require('../controllers')


const UserRouters = express.Router()


UserRouters.get("/users",userController.getUsers)

UserRouters.get("/users/:userId",userController.getUserById)

UserRouters.post("/users",userController.createUser)

UserRouters.put("/users",userController.updateUser)

UserRouters.delete("/users",userController.deleteUser)

module.exports = UserRouters