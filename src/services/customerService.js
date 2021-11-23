import { users } from "../data/users.js"
import DataError from "../models/dataError.js"

//Service: Method pool
export default class UserService {
    constructor(loggerService) {
        //this.users = getUsersFromDataBase()
        //this.users = []
        this.customers = []
        this.errors = []
        this.loggerService = loggerService
    }

    load() {
        for (const user of users) {
            //console.log(user)
            switch (user.type) {
                case "customer":
                    if (!this.checkCustomerValidity(user)) {
                        this.customers.push(user);
                    }
                    break;
                default:
                    this.errors.push(new DataError("Wrong user type", user));
                    break;
            }
        }
    }

    checkCustomerValidity(user) {
        let requiredFields = "id firstName lastName city age".split(" ")
        let hasErrors = false;
        for (const field of requiredFields) {
            if (!user[field]) {
                hasErrors = true;
                this.errors.push(new DataError(`Validation problem: ${field} field is required`, user))
            }
        }

        if (Number.isNaN(Number.parseInt(+user.age))) {
            hasErrors = true;
            this.errors.push(new DataError(`Validation problem: "${user.age}" field is not a number`, user))
        }
        return hasErrors;
    }

    add(user) {
        //console.log("the user has been added: " + user)
        //this.users.push(user)
        switch (user.type) {
            case "customer":
                if (!this.checkCustomerValidity(user)) {
                    this.customers.push(user)
                }
                break;
            default:
                this.errors.push(new DataError("This user cannot be added. Wrong user type.", user));
                break;
        }
        this.loggerService.log(user)
    }

    listCustomers() {
        //console.log("the users have been listed")
        //return this.users
    }

    getCustomerById(id) {
        //console.log("the user is found by its ID")
        //return this.users.find(u => u.id === id)
    }

    getCustomersSorted() {
        return this.customers.sort((customer1, customer2) => {
            if (customer1.firstName > customer2.firstName) {
                return 1;
            } else if (customer1.firstName === customer2.firstName) {
                return 0;
            } else {
                return -1;
            }
        })
    }
}