"use strict";
(() => {
    // Tipos
    /*     const batman = 'Bruce';
        const superman = 'Clark';
        const existe = false; */
    const batman = 'Bruce';
    const superman = 'Clark';
    const existe = false;
    // Tuplas
    /*     const parejaHeroes = [batman,superman];
        const villano = ['Lex Lutor',5,true]; */
    const parejaHeroes = [batman, superman];
    const villano = ['Lex Lutor', 5, true];
    // Arreglos
    /*     const aliados = ['Mujer Maravilla','Acuaman','San', 'Flash']; */
    const aliados = ['Mujer Maravilla', 'Acuaman', 'San', 'Flash'];
    //Enumeraciones
    /*     const fuerzaFlash = 5;
        const fuerzaSuperman = 100;
        const fuerzaBatman = 1;
        const fuerzaAcuaman = 0; */
    let Fuerza;
    (function (Fuerza) {
        Fuerza[Fuerza["fuerzaFlash"] = 5] = "fuerzaFlash";
        Fuerza[Fuerza["fuerzaSuperman"] = 100] = "fuerzaSuperman";
        Fuerza[Fuerza["fuerzaBatman"] = 1] = "fuerzaBatman";
        Fuerza[Fuerza["fuerzaAcuaman"] = 0] = "fuerzaAcuaman";
    })(Fuerza || (Fuerza = {}));
    // Retorno de funciones
    /*     function activar_batiseñal(){
          return 'activada';
        } */
    function activar_batiseñal() {
        return 'activada';
    }
    /*     function pedir_ayuda(){
          console.log('Auxilio!!!');
        } */
    function pedir_ayuda() {
        console.log('Auxilio!!!');
    }
    // Aserciones de Tipo
    /*     const poder: any = '100';
        const largoDelPoder:number = poder.length;
        console.log( largoDelPoder ); */
    const poder = '100';
    const largoDelPoder = poder.length;
    console.log(largoDelPoder);
})();
