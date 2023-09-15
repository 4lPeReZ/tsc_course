(() => {

    // Tipos
/*     const batman = 'Bruce';
    const superman = 'Clark';
    const existe = false; */
    const batman:string = 'Bruce';
    const superman:string = 'Clark';
    const existe:boolean = false;
  
    // Tuplas
/*     const parejaHeroes = [batman,superman];
    const villano = ['Lex Lutor',5,true]; */
    const parejaHeroes:[string,string] = [batman,superman];
    const villano:[string,number,boolean] = ['Lex Lutor',5,true];
  
    // Arreglos
/*     const aliados = ['Mujer Maravilla','Acuaman','San', 'Flash']; */
    const aliados:string[] = ['Mujer Maravilla','Acuaman','San', 'Flash'];
  
    //Enumeraciones
/*     const fuerzaFlash = 5;
    const fuerzaSuperman = 100;
    const fuerzaBatman = 1;
    const fuerzaAcuaman = 0; */
    enum Fuerza {
      fuerzaFlash = 5,
      fuerzaSuperman = 100,
      fuerzaBatman = 1,
      fuerzaAcuaman = 0
    }
  
    // Retorno de funciones
/*     function activar_batiseñal(){
      return 'activada';
    } */
    function activar_batiseñal():string{
      return 'activada';
    }
  
/*     function pedir_ayuda(){
      console.log('Auxilio!!!');
    } */
    function pedir_ayuda():void{
      console.log('Auxilio!!!');
    }
  
    // Aserciones de Tipo
/*     const poder: any = '100';
    const largoDelPoder:number = poder.length;
    console.log( largoDelPoder ); */
    const poder:string = '100';
    const largoDelPoder:number = poder.length;
    console.log( largoDelPoder );
  
  
  })()
  
  