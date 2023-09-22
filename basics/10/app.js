"use strict";
//Namespaces
//Namespace are used to organize code in a better way
var Validations;
(function (Validations) {
    Validations.validateText = (text) => {
        return text.length > 3 ? true : false;
    };
    Validations.validateDate = (date) => {
        return (isNaN(date.valueOf()) ? false : true);
    };
})(Validations || (Validations = {}));
console.log(Validations.validateText('Hello'), Validations.validateDate(new Date()));
