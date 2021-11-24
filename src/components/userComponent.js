import { BaseLogger, ElasticLogger, MongoLogger } from "../crossCuttingConcerns/logging/logger.js"
import Customer from "../models/customer.js";
import CustomerService from "../services/customerService.js";
import EmployeeService from "../services/employeeService.js";
import errorService from "../services/errorService.js";

let logger1 = new BaseLogger()
let customerService = new CustomerService(logger1)
let employeeService = new EmployeeService(logger1)

customerService.load()
employeeService.load()
errorService.load()

let customerToAdd1 = new Customer(9, "Deneme isim 1", "Deneme soyisim 1", "Ankara", 25)
customerToAdd1.type = "customer"
customerService.add(customerToAdd1)

let customerToAdd2 = new Customer(10, "Deneme isim 2", "Deneme soyisim 2", "Ankara", "wrongType")
customerToAdd2.type = "customer"
customerService.add(customerToAdd2)

let customerToAdd3 = new Customer(11, "Deneme isim 3", "Deneme soyisim 3", "Ankara", 30)
customerToAdd3.type = "custom"
customerService.add(customerToAdd3)

console.log("-----")
console.log("Customers:")
console.log(customerService.customers)
//console.log("Sorted Customers:");
//console.log(customerService.getCustomersSorted())
console.log("Employees:")
console.log(employeeService.employees)
console.log("Errors:")
console.log(errorService.errors)

errorService.resetErrors()
console.log("Reset Errors:")
console.log(errorService.errors)

console.log("-----")

let customerFound1 = customerService.getCustomerById(7)
console.log("Customer search result:")
console.log(customerFound1)

let customerFound2 = customerService.getCustomerById(8)
console.log("Customer search result:")
console.log(customerFound2)

let employeeFound1 = employeeService.getEmployeeById(6)
console.log("Employee search result:")
console.log(employeeFound1)