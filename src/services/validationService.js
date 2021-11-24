import { ErrorsList } from "./errorsList.js"
import DataError from "../models/dataError.js"
import errorService from "./errorService.js";

export default class ValidationService {

    checkIfNumberField(user, number) {
        let hasErrors = false
        if (Number.isNaN(Number.parseInt(+number))) {
            hasErrors = true
            let errorText = ErrorsList("AgeNaN", number)
            errorService.addError(new DataError(errorText, user))
        }
        return !hasErrors //returns true if parameter is a number
    }

    checkFieldValidity(user, requiredString) {
        let hasErrors = false
        let requiredFields = requiredString.split(" ");
        for (const field of requiredFields) {
            if (!user[field]) {
                hasErrors = true
                let errorText = ErrorsList("MissingField", field)
                errorService.addError(new DataError(errorText, user))
            }
        }
        return !hasErrors; //returns true (valid fields) if no errors found
    }

    sortFunction(value1, value2) {
        if (value1.firstName > value2.firstName) {
            return 1;
        } else if (value1.firstName === value2.firstName) {
            return 0;
        } else {
            return -1;
        }
    }
}










