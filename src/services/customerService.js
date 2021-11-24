import { users } from "../data/users.js"
import { ErrorsList } from "./errorsList.js"
import DataError from "../models/dataError.js"
import errorService from "../services/errorService.js";
import ValidationService from "./validationService.js"

export default class CustomerService {
    constructor(loggerService) {
        this.customers = []
        this.loggerService = loggerService
        this.validation = new ValidationService
    }

    load() {
        for (const user of users) {
            switch (user.type) {
                case "customer":
                    if (!this.checkCustomerValidity(user)) {
                        this.customers.push(user);
                    }
                    break;
            }
        }
    }

    checkCustomerValidity(user) {
        let hasErrors = false;
        let requiredString = "id firstName lastName city age";
        if (!this.validation.checkFieldValidity(user, requiredString) || !this.validation.checkIfNumberField(user, user.age)) {
            hasErrors = true
        }
        return !hasErrors
    }

    add(user) {
        switch (user.type) {
            case "customer":
                if (!this.checkCustomerValidity(user)) {
                    this.customers.push(user)
                }
                break;
            default:
                let errorText = ErrorsList("AddingWrongUserType")
                errorService.addError(new DataError(errorText, user))
                break;
        }
        this.loggerService.log(user)
    }

    listCustomers() {
        return this.customers
    }

    getCustomerById(id) {
        return this.customers.find(u => u.id === id)
    }

    getCustomersSorted() {
        return this.customers.sort((customer1, customer2) => this.validation.sortFunction(customer1, customer2))
    }
}