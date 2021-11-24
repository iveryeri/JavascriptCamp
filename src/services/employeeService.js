import { users } from "../data/users.js"
import { ErrorsList } from "./errorsList.js"
import DataError from "../models/dataError.js"
import errorService from "../services/errorService.js";
import ValidationService from "./validationService.js"

export default class EmployeeService {
    constructor(loggerService) {
        this.employees = []
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
        if (!this.validation.checkFieldValidity(user, requiredString) || !this.validation.checkIfNumberField(user, user.age)) {
            hasErrors = true
        }
        return !hasErrors
    }

    add(user) {
        switch (user.type) {
            case "employee":
                if (!this.checkEmployeeValidity(user)) {
                    this.employees.push(user)
                }
                break;
            default:
                let errorText = ErrorsList("AddingWrongUserType")
                errorService.addError(new DataError(errorText, user))
                break;
        }
        this.loggerService.log(user)
    }

    listEmployees() {
        return this.employees
    }

    getEmployeeById(id) {
        return this.employees.find(u => u.id === id)
    }

    getEmployeesSorted() {
        return this.employees.sort((employee1, employee2) => this.validation.sortFunction(employee1, employee2))
    }
}