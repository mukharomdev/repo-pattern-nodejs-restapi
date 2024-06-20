"use strict";

const {express} = require('./lib');
const {UserRouters} = require('./routes');
const {	initConnection} = require('./config');
const app = express();
const PORT = 3000;

async function Server(){
	await initConnection();
	/*
	 * untuk menangkap request body data json
	 * (set header = content-type = application/json)
	*/
	app.use(express.json())

	//
	app.use((err, req, res, next) => {
    // This check makes sure this is a JSON parsing issue, but it might be
    // coming from any middleware, not just body-parser:

    if (err instanceof SyntaxError && err.status === 400 && 'body' in err) {
        console.error(err);
        return res.sendStatus(400); // Bad request
    }

    next();
});

	// routing
	app.use(UserRouters);

	app.listen(PORT,()=>{
		console.log(`listening on ${PORT}`)
	});
}

module.exports = Server ;