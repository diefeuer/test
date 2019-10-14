let miFuncion = function(a){
    return a;
}
let miFuncionF = (a) => a;

console.log(miFuncion("Normal"));
console.log(miFuncionF("Flecha"));


let miFuncion2 = function (a:number, b:number){
    return a + b;
}
let miFuncion2F = (a:number,b:number) => a + b;

console.log(miFuncion2(2,3));
console.log(miFuncion2F(3,4));

let miFuncion3 = function (nombre:string){
    nombre = nombre.toUpperCase();
    return nombre;
}
let miFuncion3F = (nombre:string) => nombre = nombre.toUpperCase();;
let miFuncion3F2= (nombre:string) => {
    nombre = nombre.toUpperCase();
    return nombre;
}

console.log(miFuncion3("george"));
console.log(miFuncion3F("iphone"));
console.log(miFuncion3F2("murio"));

// let hulk = {
//     nombre: "hulk",
//     smash() {
//         console.log(this.nombre+ " smash !!");
        
//     }
// }

//funcion sin flecha el this. apunta afuera del objeto obj1 
let nombre2 = "bruce1";

let obj1 = {
        nombre2 : "hulk1",
    metodo(){
        setTimeout( function(){
            console.log(this.nombre2 + (" Smash2!!"));
        }, 1500);
        console.log(this.nombre2 + (" Smash1!!"));
        
    }
}

//funcion sin flecha el this. dentro afuera del objeto obj1 
let nombre3 = "bruce2";

let obj2 = {
        nombre3 : "hulk2",
    metodo(){
        setTimeout( () => {
            console.log(this.nombre3 + (" Smash3!!"));
        }, 1500);
        console.log(this.nombre3 + (" Smash4!!"));
        
    }
}



//setTimeout( ()=> console.log(this.nombre2 + " smash!!"), 1500);

obj1.metodo();

obj2.metodo();
