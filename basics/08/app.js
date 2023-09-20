"use strict";
(() => {
    //Basic Class
    class Avenger {
        constructor(name, team, realName) {
            this.name = name;
            this.team = team;
            this.realName = realName;
        }
    }
    Avenger.avgAge = 35;
    const antman = new Avenger('Antman', 'Cap');
    /*     console.log(antman); */
    //Short way to assign properties -- BETTER WAY
    class Avenger2 {
        constructor(name, team, realName) {
            this.name = name;
            this.team = team;
            this.realName = realName;
        }
    }
    Avenger2.avgAge = 35;
    const antman2 = new Avenger2('Antman', 'Cap', 'Scott Lang');
    /*     console.log(antman2); */
    //Public, Private, Static Methods
    class Avenger3 {
        constructor(name, team, realName, avgAge) {
            this.name = name;
            this.team = team;
            this.realName = realName;
            this.avgAge = avgAge;
        }
        bio() {
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
    const antman3 = new Avenger3('Antman', 'Cap', 'Scott Lang', 35);
    /*     console.log(antman3.bio()); */
    // Heredity, super, extends
    class Avenger4 {
        constructor(name, realName) {
            this.name = name;
            this.realName = realName;
            console.log('Constructor Avenger4');
        }
        getFullName() {
            return `${this.name} ${this.realName}`;
        }
    }
    class Xmen extends Avenger4 {
        constructor(name, realName, isMutant) {
            super(name, realName);
            this.isMutant = isMutant;
            console.log('Constructor Xmen');
        }
        //Getters and Setters
        get fullName() {
            return `${this.name} - ${this.realName}`;
        }
        set fullName(name) {
            if (name.length < 3) {
                throw new Error('Name too short');
            }
            else {
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
    class Mutant {
        constructor(name, realName) {
            this.name = name;
            this.realName = realName;
        }
    }
    class Xmen2 extends Mutant {
        salvarMundo() {
            return 'Mundo a salvo!';
        }
        constructor(name, realName, isMutant) {
            super(name, realName);
            this.isMutant = isMutant;
        }
    }
    class Villain extends Mutant {
        conquistarMundo() {
            return 'Mundo conquistado!';
        }
        constructor(name, realName, isMutant, leader) {
            super(name, realName);
            this.isMutant = isMutant;
            this.leader = leader;
        }
    }
    /*     const wolverine2 = new Xmen2('Wolverine', 'Logan', true);
        const magneto = new Villain('Magneto', 'Magnus', true, true);
        console.log(wolverine2, wolverine2.salvarMundo());
        console.log(magneto, magneto.conquistarMundo()); */
    //Private Constructors
    class Apocalipsis {
        constructor(name) {
            this.name = name;
        }
        static callApocalipsis() {
            if (!Apocalipsis.instance) {
                Apocalipsis.instance = new Apocalipsis('Soy Apocalipsis... el único!');
            }
            return Apocalipsis.instance;
        }
        changeName(newName) {
            this.name = newName;
        }
    }
    /*     const apocalipsis1 = Apocalipsis.callApocalipsis();
        const apocalipsis2 = Apocalipsis.callApocalipsis();
        const apocalipsis3 = Apocalipsis.callApocalipsis();
    
        apocalipsis1.changeName('Xavier');
    
        console.log(apocalipsis1, apocalipsis2, apocalipsis3); */
})();
