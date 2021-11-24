export function ErrorsList(type, value) {
    let prefix = "..Validation problem:";
    switch (type) {
        case "MissingField":
            return (`${prefix} ${value} field is required.`);
        case "InvalidUserType":
            return (`${prefix} Invalid user type.`);
        case "AgeNaN":
            return (`${prefix} "${value}" is not a number.`);
        case "AddingWrongUserType":
            return (`This user cannot be added to this list. Wrong user type.`);
        default:
            break;
    }
}