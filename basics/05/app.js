"use strict";
(() => {
    var _a, _b;
    // Basic object with strict types
    let flash = {
        name: "Barry Allen",
        age: 24,
        powers: ["Super velocidad", "Viajar en el tiempo"]
    };
    //Methods in objects
    flash = {
        name: "Clark Kent",
        /*         age: 500, */
        powers: ["Super velocidad", "Poder volar"],
        getName() {
            return this.name;
        }
    };
    console.log((_b = (_a = flash.getName) === null || _a === void 0 ? void 0 : _a.call(flash)) !== null && _b !== void 0 ? _b : 'No name');
    let superman = {
        name: "Clark Kent",
        age: 500,
        powers: ["Super velocidad", "Poder volar"],
        getName() {
            return this.name;
        }
    };
    let batman = {
        name: "Bruce Wayne",
        age: 30,
        powers: ["Super inteligencia", "Dinero"],
        getName() {
            return this.name;
        }
    };
    let customVariable = "Alvaro";
    console.log(typeof customVariable);
    customVariable = 10;
    console.log(typeof customVariable);
    customVariable = {
        name: "Bruce Wayne",
        age: 30,
        powers: ["Super inteligencia", "Dinero"],
    };
    console.log(typeof customVariable);
    console.log(customVariable);
})();
