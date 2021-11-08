//Service: Method pool
export default class UserService {
    constructor(loggerService) {
        //this.users = getUsersFromDataBase()
        this.users = []
        this.loggerService = loggerService
    }

    add(user) {
        //console.log("the user has been added: " + user)
        this.users.push(user)
        this.loggerService.log(user)
    }

    list() {
        //console.log("the users have been listed")
        return this.users
    }

    getById(id) {
        //console.log("the user is found by its ID")
        return this.users.find(u => u.id === id)
    }
}