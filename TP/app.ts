function activar(
        quien:string, 
        momento?:string,
        objeto:string = "batiseñal" 
        ) {
  let mensaje: string;
    //objeto = "La Baticuea'";
  if(momento){
    mensaje = `${quien} RIICCAAA : ${objeto} en la ${ momento }`;
  }else{
    mensaje = `${quien} RRIICCA : ${objeto}`;
  }
  

  console.log(mensaje);
}

activar("Gorda");

activar("Flaco","noche")
