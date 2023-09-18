(() => {

   // Basic object with strict types
   let flash: { name:string, age?:number, powers:string[], getName?: () => string } = {
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

    console.log(flash.getName?.() ?? 'No name');

    // One line object declaration and personality object
    type Hero = {
        name:string,
        age?:number,
        powers:string[],
        getName?: () => string
    };

    let superman: Hero = {
        name: "Clark Kent",
        age: 500,
        powers: ["Super velocidad", "Poder volar"],
        getName() {
            return this.name;
        }
    };

    let batman: Hero = {
        name: "Bruce Wayne",
        age: 30,
        powers: ["Super inteligencia", "Dinero"],
        getName() {
            return this.name;
        }
    };

    // Multiples types in objects
    type Hero2 = {
        name:string,
        age?:number,
        powers:string[],
        getName?: () => string
    } | string;

    let customVariable: (string | number | Hero2) = "Alvaro";
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



}) ();