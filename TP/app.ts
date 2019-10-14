function getNombre() {
  return "Fernando";
}

let nombre: string = "Juan";
let apellido: string = "Perez";
let edad: number = 31;

//let texto = "Hola " +  nombre + " "+apellido + " "+edad;
let texto = `Hola,
 ${nombre} ${apellido} ${edad}`;

//let texto2:string = `${1+2}`;
let texto2: string = `${getNombre()}`;

console.log(texto2);
