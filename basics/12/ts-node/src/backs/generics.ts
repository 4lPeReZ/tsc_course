import { genericFunction, printObject } from "../generics/generics";
import { Hero, Villain } from "../interfaces";

/* import { Hero } from './interfaces/hero';
import { Villain } from './interfaces/villain'; */

/* printObject (123);
printObject ("123");
printObject (true);
printObject ( new Date());
printObject ({a:1, b:2, c:3});

const name:string = 'Alvaro';

console.log(genericFunction(3.1416).toFixed(2));
console.log(genericFunction("Hola Mundo").toUpperCase());
console.log(genericFunction(new Date()).getDay());
console.log(name.toLowerCase()); */

const deadpool = {
    name: 'Deadpool',
    realName: 'Wade Winston Wilson',
    dangerLevel: 1000
}

console.log(genericFunction<Hero>(deadpool).realName);
console.log(genericFunction<Villain>(deadpool).dangerLevel);
// its a Hero type, so it has not dangerLevel property
/* console.log(genericFunction<Hero>(deadpool).dangerLevel); */