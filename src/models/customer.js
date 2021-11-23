import User from "./user.js"

export default class Customer extends User {
    constructor(id, firstName, lastName, city, age, creditCardNumber) {
        super(id, firstName, lastName, city, age) //super dedigi User, ordan kopyaliyo
        this.creditCardNumber = creditCardNumber
    }
}