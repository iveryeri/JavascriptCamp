import { ErrorsList } from "../models/errorsList.js"
import DataError from "../models/dataError.js"

export default class ValidationService {
    checkIfNumber(number) {
        if (Number.isNaN(Number.parseInt(+number))) {
            return false;
        } else {
            return true;
        }
    }

    checkFieldValidityError(user, requiredString) {
        let requiredFields = requiredString.split(" ");
        for (const field of requiredFields) {
            if (!user[field]) {
                return field;
            }
        }
        return false;
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










