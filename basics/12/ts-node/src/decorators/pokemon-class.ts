function printToConsole(constructor: Function) {
    console.log(constructor);
}

const printToConsoleConditional = (print: boolean = false):Function => {
    if (print) {
        return printToConsole;
    }
    return () => {};
}

const bloquearPrototipo = function (constructor: Function) {
    //Block prototype modification (add new properties)
/*     Object.seal(constructor);
    Object.seal(constructor.prototype); */
}

// Decorator factory
function CheckValidPokemonId() {
    // Decorator method (function)
    return function ( target: any, propertyKey: string, descriptor: PropertyDescriptor) {

        const originalMethod = descriptor.value;

        descriptor.value = (id:number) => {
            if (id < 1 || id > 800) {
                return console.error('Invalid pokemon id');
            } else {
                return originalMethod(id);
            }
        }
    }
}

// Decorator properties (getters and setters)
function readOnly(isWritable: boolean = true):Function {
    return function(target: any, propertyKey: string) {
        const descriptor: PropertyDescriptor = {
            get() {
                console.log(this, 'getter')
                return 'Alvaro';
            },
            set(this, value) {
                /* console.log(this, value) */
                Object.defineProperty(this, propertyKey, {
                    value: value,
                    writable: !isWritable,
                })
            }

        }
        return descriptor;
    }
}


// Block prototype
@bloquearPrototipo
// Decorator for classes
/* @printToConsole */
// Default decorator
@printToConsoleConditional( false )

export class Pokemon {
    // Decorator for properties
    @readOnly(false)

    public publicApi: string = 'https://pokeapi.co';

    constructor(
        public name: string,
    ) {}

    @CheckValidPokemonId()
    savePokemonToDB( id:number ) {
        console.log(`Saving pokemon with id ${id} to DB`);
    }
}