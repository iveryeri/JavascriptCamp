import { users } from "../data/users.js"
import { ErrorsList } from "./errorsList.js";

class ErrorService {
    constructor() {
        this.errors = []
    }

    load() {
        for (const user of users) {
            if (user.type !== "customer" && user.type !== "employee") {
                let errorText = ErrorsList("InvalidUserType")
                this.errors.push(new DataError(errorText, user));
            }
        }
    }

    addError(dataError) {
        this.errors.push(dataError)
    }

    listErrors() {
        return this.errors
    }

    resetErrors() {
        this.errors = []
    }
}

const errorService = new ErrorService();

export { errorService as default }