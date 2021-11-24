import { users } from "../data/users.js"
import { ErrorsList } from "./errorsList.js"
import DataError from "../models/dataError.js"
import ValidationService from "./validationService.js"

//Service: Method pool
export default class UserService {
    constructor(loggerService) {
        //this.users = getUsersFromDataBase()
        //this.users = []
        this.customers = []
        this.employees = []
        this.errors = []
        this.loggerService = loggerService
        this.validation = new ValidationService
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
                case "employee":
                    if (!this.checkEmployeeValidity(user)) {
                        this.employees.push(user);
                    }
                    break;
                default:
                    let errorText = ErrorsList("WrongUserType")
                    this.errors.push(new DataError(errorText, user));
                    break;
            }
        }
    }

    //formik and yup (react tarafinda bunlari cok guzel halleden bir kutuphane)
    checkCustomerValidity(user) {
        let hasErrors = false;
        let requiredString = "id firstName lastName city age";
        let missingField = this.validation.checkFieldValidity(user, requiredString);
        if (!missingField) {
            hasErrors = true
            let errorText = ErrorsList("MissingField", missingField)
            this.errors.push(new DataError(errorText, user))
        }

        if (!this.validation.checkIfNumber(user.age)) {
            hasErrors = true;
            let errorText = ErrorsList("AgeNaN", user.age)
            this.errors.push(new DataError(errorText, user))
        }
        return hasErrors;
    }

    checkEmployeeValidity(user) {
        let requiredFields = "id firstName lastName city age salary".split(" ")
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
            case "employee":
                if (!this.checkCustomerValidity(user)) {
                    this.employees.push(user)
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
        return this.customers.sort((customer1, customer2) => this.validation.sortFunction(customer1, customer2))
    }
}