(() => {

    // Basic function
    const hero: string = 'Ironman';

    function returnName(): string {
        return hero;
    };

    const activateBatisignal = (): string => {
        return 'Batisignal activated!';
    };

    console.log( typeof returnName(), typeof activateBatisignal() );
    console.log( returnName() );
    console.log( activateBatisignal() );

    const heroName = returnName();

    // Required parameters
    const fullName = ( firstName: string, lastName: string ): string => {
        if ( !firstName || !lastName ) {
            throw new Error( 'Missing parameters' );
        }

        return `${ firstName } ${ lastName }`;
    };

    const name = fullName( 'Tony', 'Stark' );
    console.log( name );

    // Optional parameters
    const fullName2 = ( firstName: string, lastName?: string ): string => {

        return `${ firstName } ${ lastName || 'No last name' }`;
    };

    const name2 = fullName2( 'Tony' );
    console.log( name2 );

    // Default parameters
    const fullName3 = ( firstName: string, lastName?: string, upper:boolean = false ): string => {

        if ( upper ) {
            return `${ firstName } ${ lastName || 'No last name' }`.toUpperCase();
        } else {
            return `${ firstName } ${ lastName || 'No last name' }`;
        }
    };

    const name3 = fullName3( 'Tony', 'Stark', true );
    console.log( name3 );

    // Rest parameters
    const fullName4 = ( firstName: string, ...restOfName: string[] ): string => {
        return `${ firstName } ${ restOfName.join( ' ' ) }`;
    };

    const name4 = fullName4( 'Tony', 'Stark', 'Avenger', 'Ironman' );
    console.log( name4 );

    // Function type
    const addNumbers = ( a: number, b: number ): number => {
        return a + b;
    };

    const greet = ( name: string ): string => {
        return `Hello ${ name }`;
    };

    const saveTheWorld = ( hero: string = 'Ironman' ): void => {
        console.log( `Saving the world... ${ hero }` );
    };

    let myFunction: ( a: number, b: number ) => number;
    // myFunction = 10;
    // myFunction = greet;
    myFunction = addNumbers;
    console.log( myFunction( 5, 5 ) );

    let myFunction2: ( a: string ) => string;
    // myFunction2 = 10;
    myFunction2 = greet;
    console.log( myFunction2( 'Tony' ) );

    let myFunction3: ( a: string ) => void;
    // myFunction3 = 10;
    myFunction3 = saveTheWorld;
/*     console.log( myFunction3() ); */

}) ();