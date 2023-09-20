(() => {

    //Basic Class
    class Avenger {

        private name: string;
        private team: string;
        public realName?: string;
        static avgAge: number = 35;

        constructor(name: string, team: string, realName?: string) {
            this.name = name;
            this.team = team;
            this.realName = realName;
        }

    }

    const antman:Avenger = new Avenger('Antman', 'Cap');
/*     console.log(antman); */

    //Short way to assign properties -- BETTER WAY
    class Avenger2 {
            
        static avgAge: number = 35;

        constructor( 
            private name: string,
            private team: string,
            public realName?: string,
        ) {}

    }

    const antman2:Avenger2 = new Avenger2('Antman', 'Cap', 'Scott Lang');
/*     console.log(antman2); */

    //Public, Private, Static Methods
    class Avenger3 {

        constructor( 
            private name: string,
            private team: string,
            public realName?: string,
            public avgAge?: number,
        ) {}

        public bio() {
            let message = `${this.name} (${this.team})`;
            if (this.realName) {
                message += ` ${this.realName}`;
            }
            if (this.avgAge) {
                message += ` ${this.avgAge}`;
            }
            return message;
        }

    }

    const antman3:Avenger3 = new Avenger3('Antman', 'Cap', 'Scott Lang' , 35);
/*     console.log(antman3.bio()); */

    // Heredity, super, extends
    class Avenger4 {
        constructor(
            public name: string,
            public realName: string,
        ){
            console.log('Constructor Avenger4');
        }

        protected getFullName() {
            return `${this.name} ${this.realName}`;
        }
    }

    class Xmen extends Avenger4 {
        constructor(
            name: string,
            realName: string,
            public isMutant: boolean,
        ){
            super(name, realName);
            console.log('Constructor Xmen');
            
        }

        //Getters and Setters
        get fullName() {
            return `${this.name} - ${this.realName}`;
        }

        set fullName( name: string ) {
            if (name.length < 3) {
                throw new Error('Name too short');
            } else {
                this.name = name;
            }
        }

        getFullNameDesdeXmen() {
            console.log(super.getFullName());
        }
    }

/*     const wolverine= new Xmen('Wolverine', 'Logan', true);

    console.log(wolverine);
    wolverine.getFullNameDesdeXmen();
    console.log(wolverine.fullName); */

    //Abstract Classes
    abstract class Mutant {
        constructor(
            public name: string,
            public realName: string,
        ){}
    }

    class Xmen2 extends Mutant {
        salvarMundo() {
            return 'Mundo a salvo!';
        }

        constructor(
            name: string,
            realName: string,
            public isMutant: boolean,
        ){
            super(name, realName);
        }
    }

    class Villain extends Mutant {
        conquistarMundo() {
            return 'Mundo conquistado!';
        }

        constructor(
            name: string,
            realName: string,
            public isMutant: boolean,
            public leader: boolean,
        ){
            super(name, realName);
        }
    }

/*     const wolverine2 = new Xmen2('Wolverine', 'Logan', true);
    const magneto = new Villain('Magneto', 'Magnus', true, true);
    console.log(wolverine2, wolverine2.salvarMundo());
    console.log(magneto, magneto.conquistarMundo()); */

    //Private Constructors
    class Apocalipsis {
        static instance: Apocalipsis;

        private constructor(
            public name: string,
        ){}

        static callApocalipsis(): Apocalipsis {
            if (!Apocalipsis.instance) {
                Apocalipsis.instance = new Apocalipsis('Soy Apocalipsis... el único!');
            }
            return Apocalipsis.instance;
        }

        changeName(newName: string): void {
            this.name = newName;
        }
    }

/*     const apocalipsis1 = Apocalipsis.callApocalipsis();
    const apocalipsis2 = Apocalipsis.callApocalipsis();
    const apocalipsis3 = Apocalipsis.callApocalipsis();

    apocalipsis1.changeName('Xavier');

    console.log(apocalipsis1, apocalipsis2, apocalipsis3); */


}) ();