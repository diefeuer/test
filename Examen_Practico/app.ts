
// Uso de Let y Const
let nombre:string = "Ricardo Tapia";
let edad:number = 23;

const PERSONAJE:{nombre:string,edad:number} = {
  nombre: nombre,
  edad: edad
};


// Cree una interfaz que sirva para validar el siguiente objeto
interface SuperHeroe{
  nombre:string;
  artesMarciales: string[];//es un arreglo de string
}


let batman:SuperHeroe = {
  nombre: "Bruno Díaz",
  artesMarciales: ["Karate","Aikido","Wing Chun","Jiu-Jitsu"]
}

// Convertir esta funcion a una funcion de flecha
// function resultadoDoble( a:number, b:number ){
//   return (a + b) * 2
// };


let  resultadoDoble2 = (a:number,b:number) => (a+b)*2;


// Función con parametros obligatorios, opcionales y por defecto
// donde NOMBRE = obligatorio
//       PODER  = opcional
//       ARMA   = por defecto = "arco"
function getAvenger( nombre:string, poder?:string, arma:string = "poto" ){
  let  mensaje:string;
  if( poder != "" ){
     //mensaje = nombre + " tiene el poder de: " + poder + " y un arma: " + arma;
     mensaje = `${nombre} tiene el poder de:  ${poder} y usa el: ${arma}`;
     console.log(mensaje);
     
  }else{
     //mensaje = nombre + " tiene un " + poder;
     mensaje = `${nombre} no tiene poder y solo usa el: ${arma}`;
     console.log(mensaje);
     
  }
};


getAvenger("Georgi","");



// Cree una clase que permita manejar la siguiente estructura
// La clase se debe de llamar rectangulo,
// debe de tener dos propiedades:
//   * base
//   * altura
// También un método que calcule el área  =  base * altura,
// ese método debe de retornar un numero.
class Rectangulo {
  base: number;
  altura:number;

  calcularArea(): number {
      return this.base * this.altura;
    
  }
}