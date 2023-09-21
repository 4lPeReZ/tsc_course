"use strict";
(() => {
    let wolverine = {
        name: 'Logan',
        age: 60,
        power: ['Regeneration'],
    };
    let storm = {
        name: 'Storm',
        age: 30,
        power: ['Wind', 'Rain'],
        getName() {
            return this.name;
        }
    };
    let flash = {
        name: 'Barry Allen',
        /* age: 24, */
        power: ['Speed'],
        address: {
            street: 'Second Street',
            country: 'USA'
        },
    };
    let client = {
        name: 'Bruce Wayne',
        age: 45,
        address: {
            street: 'First Street',
            country: 'USA'
        },
        getFullAddress(id) {
            return `${this.name}, ${this.address.street}, ${this.address.country}`;
        }
    };
    class Mutant {
        constructor(name, age, power) {
            this.name = name;
            this.age = age;
            this.power = power;
        }
        mutantPower(id) {
            return this.power[id];
        }
    }
    let add;
    add = function (a, b) {
        return a + b;
    };
    console.log(add(1, 2));
})();
