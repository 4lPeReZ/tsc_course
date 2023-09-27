import { Pokemon } from "./decorators/pokemon-class";


const charmander = new Pokemon('Charmander');

/* (Pokemon.prototype as any).customName = 'Pepito el llamas' */
/* console.log(charmander.savePokemonToDB(5)); */
/* charmander.savePokemonToDB(5); */

charmander.publicApi = 'https://google.com';
console.log(charmander);