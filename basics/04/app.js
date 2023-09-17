"use strict";
(() => {
    // Basic function
    const hero = 'Ironman';
    function returnName() {
        return hero;
    }
    ;
    const activateBatisignal = () => {
        return 'Batisignal activated!';
    };
    console.log(typeof returnName(), typeof activateBatisignal());
    console.log(returnName());
    console.log(activateBatisignal());
    const heroName = returnName();
    // Required parameters
    const fullName = (firstName, lastName) => {
        if (!firstName || !lastName) {
            throw new Error('Missing parameters');
        }
        return `${firstName} ${lastName}`;
    };
    const name = fullName('Tony', 'Stark');
    console.log(name);
    // Optional parameters
    const fullName2 = (firstName, lastName) => {
        return `${firstName} ${lastName || 'No last name'}`;
    };
    const name2 = fullName2('Tony');
    console.log(name2);
    // Default parameters
    const fullName3 = (firstName, lastName, upper = false) => {
        if (upper) {
            return `${firstName} ${lastName || 'No last name'}`.toUpperCase();
        }
        else {
            return `${firstName} ${lastName || 'No last name'}`;
        }
    };
    const name3 = fullName3('Tony', 'Stark', true);
    console.log(name3);
    // Rest parameters
    const fullName4 = (firstName, ...restOfName) => {
        return `${firstName} ${restOfName.join(' ')}`;
    };
    const name4 = fullName4('Tony', 'Stark', 'Avenger', 'Ironman');
    console.log(name4);
    // Function type
    const addNumbers = (a, b) => {
        return a + b;
    };
    const greet = (name) => {
        return `Hello ${name}`;
    };
    const saveTheWorld = (hero = 'Ironman') => {
        console.log(`Saving the world... ${hero}`);
    };
    let myFunction;
    // myFunction = 10;
    // myFunction = greet;
    myFunction = addNumbers;
    console.log(myFunction(5, 5));
    let myFunction2;
    // myFunction2 = 10;
    myFunction2 = greet;
    console.log(myFunction2('Tony'));
    let myFunction3;
    // myFunction3 = 10;
    myFunction3 = saveTheWorld;
    /*     console.log( myFunction3() ); */
})();
