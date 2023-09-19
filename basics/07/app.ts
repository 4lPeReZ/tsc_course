(() => {

    // Diffs between var, let and const
    // var: It is a global variable, it can be used anywhere in the code.
    // let: It is a local variable, it can only be used within the scope where it was declared.
    // const: It is a constant, it can only be used within the scope where it was declared and its value cannot be modified.

    const name:string = 'Alvaro';

    const getName = ():void => {
/*         console.log('viejo name'); */
    }

/*     getName = () => {
        console.log('nuevo name');
    }

    getName(); */

    // Destructuring objects
    type Avengers = {
        nick: string,
        ironman: string,
        vision: string,
        activos: boolean,
        poder: number
    }

    const avengers:Avengers = {
        nick: 'Samuel L. Jackson',
        ironman: 'Robert Downey Jr.',
        vision: 'Paul Bettany',
        activos: true,
        poder: 1500.23524
    } 
    
    const printAvengers = (avengers:Avengers) => {
/*         console.log(avengers.vision); */
    }

    printAvengers(avengers);

    const printAvengers2 = ({nick, ...resto}:Avengers) => {
/*         console.log(nick, resto); */
    }

    printAvengers2(avengers);

    const { poder, nick, ironman, vision } = avengers;

    // In spite of not declaring data types, TS is capable of inferring the type and providing us with the functions inherent to the data type it is.
/*     console.log(poder.toFixed(2), vision.toUpperCase()); */
    
    // Destructuring arrays
    const avengersArr:string[] = ['Capitán América', 'Ironman', 'Thor'];

    //normal way
    const ironman2:string = avengersArr[1];
/*     console.log(ironman2); */

    //destructuring way
    const [ capitan3, ironman3, ] = avengersArr;
/*     console.log({ironman3, capitan3}); */

    //Loop For of

    type Avenger = {
        nombre: string,
        arma: string
    }

    const ironman4:Avenger = {
        nombre: 'Tony Stark',
        arma: 'Armorsuit'
    }

    const capitan4:Avenger = {
        nombre: 'Steve Rogers',
        arma: 'Shield'
    }

    const thor4:Avenger = {
        nombre: 'Thor',
        arma: 'Mjolnir'
    }

    const avengersArr4:Avenger[] = [ironman4, capitan4, thor4];

    for (const avenger of avengersArr4) {
/*         console.log(avenger.nombre, avenger.arma); */
    }

    // Classes in TS
    class AvengerClass {
        nombre:string;
        poder:number;
        nombreReal:string;

        constructor(nombre:string = '', poder:number = 0, nombreReal:string = '') {
            this.nombre = nombre;
            this.poder = poder;
            this.nombreReal = nombreReal;
        }
    }

    class FlyinAvenger extends AvengerClass {
        flying:boolean;
        constructor(nombre:string, poder:number, nombreReal:string) {
            super(nombre, poder, nombreReal);
            this.flying = true;
        }
    }

    const antman:AvengerClass = new AvengerClass('Antman', 5000, 'Scott Lang');
    const falcon:FlyinAvenger = new FlyinAvenger('Falcon', 500, 'Sam Wilson');

    console.log(antman);
    console.log(falcon);


}) ();