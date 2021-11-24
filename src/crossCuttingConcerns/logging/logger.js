export class BaseLogger {
    log(data) {
        console.log("Default logger: " + data)
    }
}

export class ElasticLogger extends BaseLogger {
    //BaseLogger'in icinde yazilan log'u ezer
    log(data) {
        console.log("Logged to Elastic: " + data)
    }
}

export class MongoLogger extends BaseLogger {
    log(data) {
        console.log("Logged to Mongo: " + data)
    }
}