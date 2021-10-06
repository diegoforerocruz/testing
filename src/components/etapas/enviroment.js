import React, { useState } from "react";
import EnvfakeData from "./enviromentmock";

/*

gloables

RCIU -> si un individuo presenta RCIU 
RCEU -> si un individuo presenta RCEU 
Oxigeno -> si entra al programa canguro con oxigeno 
UCI -> si el individuo estuvo en UCI 
DiasHospitalizacion -> el número de días de hospitalización 
Sexo
***Cesarea (estatico) 
***Estadovital (estatico) 
*** Muerteprimerano (estatico) 
***Anocat (estatico) 

enviroment

Nivelmama  -> { Enviroment Stage } 
Nivelpapa -> { Enviroment Stage } 
Embarazodeseado -> { Enviroment Stage } 
Edadmama 
Primipara -> { Enviroment Stage } 
Pesomama  -> { Enviroment Stage } 
Percapitasalariominimo -> { Enviroment Stage } 
Tallamama -> { Enviroment Stage } 
Pesopapa -> { Enviroment Stage } 
Tallapapa -> { Enviroment Stage } 

*/
const Enviroment = () => {
  let rciu = 0;
  let norciu = 0;
  let rceu = 0;
  let norceu = 0;
  let oxigeno = 0;
  let uci = 0;
  let diasHospitalizacion;
  let sexo;
  let cesaria;
  let estadivital;
  let muerteprimerano;
  let anocat;

  return (
    <div>
      <p>ambiente</p>
    </div>
  );
};

export default Enviroment;
