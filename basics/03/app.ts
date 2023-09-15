(() => {

    //Boolean type
    let isSuperman:boolean = true;
    let isBatman:boolean = false;

    isSuperman = (isBatman) ? true : false;

    console.log({isSuperman}, {isBatman});

    //Number type
    const a:number = 10;
    console.log(a);

    let avengers:number = 10;
    console.log({avengers});

    const villians:number = 20;

    if(avengers < villians) {
        console.log('We are doomed');
    } else {
        console.log('We are safe');
    }

    //String type
    const batman:string = 'Batman';
    const greenLantern:string = "Green Lantern";

    console.log(batman.toUpperCase, {greenLantern});
    console.log(`I'm ${batman} and I'm ${greenLantern}`);
    console.log(batman[10]?.toUpperCase() || 'No value');

    //Any type - Avoid it
    //any type cannot provide intellisense
    let thing:string = 'Hello';
    let thing2:number = 123.123;
    let thing3:any = 555;
    thing3 = 'Hello';
    console.log(thing.charAt(0), thing2.toFixed(2), {thing3}, (thing3 as string).charAt(0));

    thing3 = 9879.999;
    console.log(<number>thing3.toFixed(2));

    //Arrays
    const numbers:(string|number|boolean)[] = [1,2,3,4,5,'6',7,8,9,10];
    numbers.push(11);
    console.log(numbers);

    const villians2 = ['Joker', 'Riddler', 'Penguin'];
    villians2.forEach(v => console.log(v.toUpperCase()));

    //Tuples
    const hero:[string, number, boolean] = ['Dr. Strange', 100, true];
    hero[0] = 'Ironman';
    hero[1] = 50;
    hero[2] = false;
    console.log(hero);

    //Enums
    //Enums are used to define a set of named constants
    enum Volume {
        min = 1,
        medium = 5,
        max = 10
    }

    let audio:Volume = Volume.medium;
    console.log(audio);
    console.log(Volume);

    //Void
    //Void is used to define a function that does not return anything
    function callBatman():void {
        console.log('Show bat signal');
    }

    const callSuperman = ():void => {
        console.log('Show super signal');
    }
    
    callBatman();
    callSuperman();
    

}) ();