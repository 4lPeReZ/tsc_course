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
})();
