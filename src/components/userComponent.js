import { BaseLogger, ElasticLogger, MongoLogger } from "../crossCuttingConcerns/logging/logger.js"
import User from "../models/user.js"
import UserService from "../services/userService.js"

console.log("User component installed")

let logger1 = new BaseLogger()
let userService = new UserService(logger1)

let user1 = new User(1, "Ilgar", "Veryeri", "Istanbul")
let user2 = new User(2, "Umut", "Tuzer", "Istanbul")

userService.add(user1)
userService.add(user2)

console.log(user1)
console.log(userService.list())
console.log(userService.getById(2))

//userService.getById(1)
//userService.list()



/*
let customer = { id: 1, firstName: "Ilgar" }

//Prototyping (adding a new property to an existing prototype)
customer.lastName = "Veryeri"

console.log(customer.lastName)
console.log(customer)
*/

