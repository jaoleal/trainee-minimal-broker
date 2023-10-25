import { MongoClient } from "mongodb"

class mongoclass {
    constructor() {
        const constr = this.connectionstring()

        MongoClient.connect(constr, function (err, db) {
            if (err) throw err;
            console.log("Conected to Mongo Database");
            db.close;
        })
    }
    connectionstring() {
        let ip = "localhost"
        let port = 27017
        let user = "module"
        let pass = "modulepass"
        let dbname = "MinimalBrokerDB"

        return "mongodb://" + user + ":" + pass + "@" + ip + ":" + port + "/" + dbname
    }
}
export default { mongoclass };