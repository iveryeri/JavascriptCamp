import { users } from "../data/users.js"
import { ErrorsList } from "../models/errorsList.js"
import DataError from "../models/dataError.js"
import ValidationService from "./validationService.js"

//Service: Method pool
export default class UserService {
    constructor(loggerService) {
        this.employees = []
        this.errors = []
        this.loggerService = loggerService
        this.validation = new ValidationService
    }

    load() {
        for (const user of users) {
            switch (user.type) {
                case "employee":
                    if (!this.checkEmployeeValidity(user)) {
                        this.employees.push(user);
                    }
                    break;
            }
        }
    }

    checkEmployeeValidity(user) {
        let hasErrors = false;
        let requiredString = "id firstName lastName city age salary";
        let missingField = this.validation.checkFieldValidityError(user, requiredString);
        if (missingField) {
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

    add(user) {
        switch (user.type) {
            case "employee":
                if (!this.checkEmployeeValidity(user)) {
                    this.employees.push(user)
                }
                break;
            default:
                let errorText = ErrorsList("AddWrongUserType")
                this.errors.push(new DataError(errorText, user));
                break;
        }
        this.loggerService.log(user)
    }

    listEmployees() {
        return this.employees
    }

    getCustomerById(id) {
        return this.employees.find(u => u.id === id)
    }

    getEmployeeSorted() {
        return this.employees.sort((employee1, employee2) => this.validation.sortFunction(employee1, employee2))
    }
}