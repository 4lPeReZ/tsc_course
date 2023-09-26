

//Control the type of the argument
export const printObject = (argument: any) => {
    console.log(argument);
}

//Transform the function into a generic function
/* export function genericFunction<T>(argument: T): T {
    return argument;
}
 */

// T meaning Type, can be any letter
export const genericFunction = <T>(argument: T) => {
    return argument;
}
