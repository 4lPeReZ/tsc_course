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
}) ();