(() => {


    //Interfaces
    //Basic interface
    interface Xmen {
        name: string;
        age: number;
        power: string[];
        getName?: () => string;
    }

    let wolverine: Xmen = {
        name: 'Logan',
        age: 60,
        power: ['Regeneration'],
    }

    let storm: Xmen = {
        name: 'Storm',
        age: 30,
        power: ['Wind', 'Rain'],
        getName() {
            return this.name;
        }
    }

    //Complex interface
    interface Hero {
        name: string;
        age?: number;
        power: string[];
        address: Address;
        getName?: () => string;
    }

    interface Address {
        street: string;
        country: string;
    }

    let flash: Hero = {
        name: 'Barry Allen',
        /* age: 24, */
        power: ['Speed'],
        address: {
            street: 'Second Street',
            country: 'USA'
        },
        
    }

    //Methods in interfaces
    interface Client {
        name: string;
        age?: number;
        address: Address;
        getFullAddress: (id: string) => string;
    }

    let client: Client = {
        name: 'Bruce Wayne',
        age: 45,
        address: {
            street: 'First Street',
            country: 'USA'
        },
        getFullAddress(id: string) {
            return `${this.name}, ${this.address.street}, ${this.address.country}`;
        }
    }

    //Interfaces in classes
    interface Xmen2 {
        name: string;
        age: number;
        power: string[];
        mutantPower(id:number): string;
    }

    class Mutant implements Xmen2 {
        name: string;
        age: number;
        power: string[];

        constructor(name: string, age: number, power: string[]) {
            this.name = name;
            this.age = age;
            this.power = power;
        }

        mutantPower(id: number) {
            return this.power[id];
        }
    }

    //Interfaces in functions
    interface addTwoNumbers {
        (a: number, b: number): number;
    }

    let add: addTwoNumbers;

    add = function(a: number, b: number) {
        return a + b;
    }

    console.log(add(1, 2));



}) ();