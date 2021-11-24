import { BaseLogger, ElasticLogger, MongoLogger } from "../crossCuttingConcerns/logging/logger.js"
import Customer from "../models/customer.js";
import User from "../models/user.js"
import CustomerService from "../services/customerService.js";
import EmployeeService from "../services/employeeService.js";
import errorService from "../services/errorService.js";


import UserService from "../services/userService_OLD.js"

console.log("User component installed")

let logger1 = new BaseLogger()
let customerService = new CustomerService(logger1)
let employeeService = new EmployeeService(logger1)




/*
let customer = { id: 1, firstName: "Ilgar" }

//Prototyping (adding a new property to an existing prototype)
customer.lastName = "Veryeri"

console.log(customer.lastName)
console.log(customer)
*/


console.log("_______________________");
customerService.load()
employeeService.load()
errorService.load()



let customerToAdd = new Customer(1, "Deneme isim", "Deneme soyisim", "Ankara", "wrongType")
customerToAdd.type = "customer"
customerService.add(customerToAdd)

console.log("Customers:");
console.log(customerService.customers)
console.log("Employees:");
console.log(employeeService.employees)
console.log("Errors:");
console.log(errorService.errors)


console.log(customerService.getCustomersSorted())


