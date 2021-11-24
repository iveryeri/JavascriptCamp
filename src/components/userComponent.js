import { BaseLogger, ElasticLogger, MongoLogger } from "../crossCuttingConcerns/logging/logger.js"
import Customer from "../models/customer.js";
import User from "../models/user.js"
import errorService from "../services/errorService.js";
import UserService from "../services/userService_OLD.js"

console.log("User component installed")

let logger1 = new BaseLogger()
let userService = new UserService(logger1)

/*
let user1 = new User(1, "Ilgar", "Veryeri", "Istanbul")
let user2 = new User(2, "Umut", "Tuzer", "Istanbul")

userService.add(user1)
userService.add(user2)

console.log(user1)
console.log(userService.list())
console.log(userService.getById(2))

//userService.getById(1)
//userService.list()
*/


/*
let customer = { id: 1, firstName: "Ilgar" }

//Prototyping (adding a new property to an existing prototype)
customer.lastName = "Veryeri"

console.log(customer.lastName)
console.log(customer)
*/


console.log("_______________________");
userService.load()
errorService.load()
errorService.test()


let customerToAdd = new Customer(1, "Seda", "Yilmaz", "Ankara", "wrongType")
customerToAdd.type = "customer"
userService.add(customerToAdd)

console.log("Customers:");
console.log(userService.customers)
console.log("Employees:");
console.log(userService.employees)
console.log("userService - Errors:");
console.log(userService.errors)
console.log("errorService - Errors:");
console.log(errorService.errors)


console.log(userService.getCustomersSorted())


