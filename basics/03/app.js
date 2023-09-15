"use strict";
(() => {
    var _a;
    //Boolean type
    let isSuperman = true;
    let isBatman = false;
    isSuperman = (isBatman) ? true : false;
    console.log({ isSuperman }, { isBatman });
    //Number type
    const a = 10;
    console.log(a);
    let avengers = 10;
    console.log({ avengers });
    const villians = 20;
    if (avengers < villians) {
        console.log('We are doomed');
    }
    else {
        console.log('We are safe');
    }
    //String type
    const batman = 'Batman';
    const greenLantern = "Green Lantern";
    console.log(batman.toUpperCase, { greenLantern });
    console.log(`I'm ${batman} and I'm ${greenLantern}`);
    console.log(((_a = batman[10]) === null || _a === void 0 ? void 0 : _a.toUpperCase()) || 'No value');
    //Any type - Avoid it
    //any type cannot provide intellisense
    let thing = 'Hello';
    let thing2 = 123.123;
    let thing3 = 555;
    thing3 = 'Hello';
    console.log(thing.charAt(0), thing2.toFixed(2), { thing3 }, thing3.charAt(0));
    thing3 = 9879.999;
    console.log(thing3.toFixed(2));
    //Arrays
    const numbers = [1, 2, 3, 4, 5, '6', 7, 8, 9, 10];
    numbers.push(11);
    console.log(numbers);
    const villians2 = ['Joker', 'Riddler', 'Penguin'];
    villians2.forEach(v => console.log(v.toUpperCase()));
    //Tuples
    const hero = ['Dr. Strange', 100, true];
    hero[0] = 'Ironman';
    hero[1] = 50;
    hero[2] = false;
    console.log(hero);
    //Enums
    //Enums are used to define a set of named constants
    let Volume;
    (function (Volume) {
        Volume[Volume["min"] = 1] = "min";
        Volume[Volume["medium"] = 5] = "medium";
        Volume[Volume["max"] = 10] = "max";
    })(Volume || (Volume = {}));
    let audio = Volume.medium;
    console.log(audio);
    console.log(Volume);
    //Void
    //Void is used to define a function that does not return anything
    function callBatman() {
        console.log('Show bat signal');
    }
    const callSuperman = () => {
        console.log('Show super signal');
    };
    callBatman();
    callSuperman();
})();
