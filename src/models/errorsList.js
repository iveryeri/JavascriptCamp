export function ErrorsList(type, value) {
    let prefix = "...Validation problem:";
    switch (type) {
        case "MissingField":
            return (`${prefix} ${value} field is required.`);
        case "WrongUserType":
            return (`${prefix} Wrong user type.`);
        case "AgeNaN":
            return (`${prefix} "${value}" is not a number.`);
        case "AddWrongUserType":
            return (`This user cannot be added. Wrong user type.`);
        default:
            break;
    }
}