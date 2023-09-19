"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
(() => {
    // Diffs between var, let and const
    // var: It is a global variable, it can be used anywhere in the code.
    // let: It is a local variable, it can only be used within the scope where it was declared.
    // const: It is a constant, it can only be used within the scope where it was declared and its value cannot be modified.
    const name = 'Alvaro';
    const getName = () => {
        /*         console.log('viejo name'); */
    };
    const avengers = {
        nick: 'Samuel L. Jackson',
        ironman: 'Robert Downey Jr.',
        vision: 'Paul Bettany',
        activos: true,
        poder: 1500.23524
    };
    const printAvengers = (avengers) => {
        /*         console.log(avengers.vision); */
    };
    printAvengers(avengers);
    const printAvengers2 = (_a) => {
        var { nick } = _a, resto = __rest(_a, ["nick"]);
        /*         console.log(nick, resto); */
    };
    printAvengers2(avengers);
    const { poder, nick, ironman, vision } = avengers;
    // In spite of not declaring data types, TS is capable of inferring the type and providing us with the functions inherent to the data type it is.
    /*     console.log(poder.toFixed(2), vision.toUpperCase()); */
    // Destructuring arrays
    const avengersArr = ['Capitán América', 'Ironman', 'Thor'];
    //normal way
    const ironman2 = avengersArr[1];
    /*     console.log(ironman2); */
    //destructuring way
    const [capitan3, ironman3,] = avengersArr;
    const ironman4 = {
        nombre: 'Tony Stark',
        arma: 'Armorsuit'
    };
    const capitan4 = {
        nombre: 'Steve Rogers',
        arma: 'Shield'
    };
    const thor4 = {
        nombre: 'Thor',
        arma: 'Mjolnir'
    };
    const avengersArr4 = [ironman4, capitan4, thor4];
    for (const avenger of avengersArr4) {
        /*         console.log(avenger.nombre, avenger.arma); */
    }
    // Classes in TS
    class AvengerClass {
        constructor(nombre = '', poder = 0, nombreReal = '') {
            this.nombre = nombre;
            this.poder = poder;
            this.nombreReal = nombreReal;
        }
    }
    class FlyinAvenger extends AvengerClass {
        constructor(nombre, poder, nombreReal) {
            super(nombre, poder, nombreReal);
            this.flying = true;
        }
    }
    const antman = new AvengerClass('Antman', 5000, 'Scott Lang');
    const falcon = new FlyinAvenger('Falcon', 500, 'Sam Wilson');
    console.log(antman);
    console.log(falcon);
})();
