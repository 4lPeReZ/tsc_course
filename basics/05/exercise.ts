(() => {

  // Objetos

  // Solución
  type Vehiculo = {
    carroceria:string, 
    modelo:string, 
    antibalas:boolean, 
    pasajeros:number, 
    disparar?: () => void
  };
    
  const batimovil: Vehiculo = {
    carroceria: "Negra",
    modelo: "6x6",
    antibalas: true,
    pasajeros:4
  };

  const bumblebee: Vehiculo  = {
    carroceria: "Amarillo con negro",
    modelo: "4x2",
    antibalas: true,
    pasajeros:4,
    disparar(){ // El metodo disparar es opcional
      console.log("Disparando");
    }
  };

  // Villanos debe de ser un arreglo de objetos personalizados

  // Solución
  type Villano = {
    nombre: string,
    edad?: number,
    mutante: boolean,
  };
  
  const villanos: Villano[] = [{
    nombre:"Lex Luthor",
    edad: 54,
    mutante:false
  },{
    nombre: "Erik Magnus Lehnsherr",
    edad: 49,
    mutante: true
  },{
    nombre: "James Logan",
    edad: undefined,
    mutante: true
  }];

  // Multiples tipos
  // cree dos tipos, uno para charles y otro para apocalipsis

  //Solución
  type Charles = {
    poder: string,
    estatura: number,
  }

  const charles: Charles = {
    poder:"psiquico",
    estatura: 1.78
  };

  //Solución
  type Apocalipsis = {
    lider: boolean,
    miembros: string[],
  }

  const apocalipsis: Apocalipsis = {
    lider:true,
    miembros: ["Magneto","Tormenta","Psylocke","Angel"]
  }

  // Mystique, debe poder ser cualquiera de esos dos mutantes (charles o apocalipsis)

  //Solución
  let mystique: Charles | Apocalipsis;

  mystique = charles;
  mystique = apocalipsis;

}) ();