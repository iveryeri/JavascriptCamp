export function ErrorsList(type, value) {
    let prefix = "Validation problem:";
    switch (type) {
        case "MissingField":
            return (`Field ${prefix} ${value} field is required.`);
        case "InvalidUserType":
            return (`User Type ${prefix} Invalid user type.`);
        case "AgeNaN":
            return (`Type ${prefix} "${value}" is not a number.`);
        default:
            break;
    }
}