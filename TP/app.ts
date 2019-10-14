function activar(
        quien:string, 
        momento?:string,
        objeto:string = "batiseñal" 
        ) {
  let mensaje: string;
    //objeto = "La Baticuea'";
  if(momento){
    mensaje = `${quien} activo : ${objeto} en la ${ momento }`;
  }else{
    mensaje = `${quien} activo : ${objeto}`;
  }
  

  console.log(mensaje);
}

activar("Gordo");

activar("Flaco","noche")
