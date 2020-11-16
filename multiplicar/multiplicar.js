//Requires
const fileSys = require('fs');
const colors = require('colors');

// limite = 10 10 siempre sera el valor por defecto es una funcion nueva de EMS6
let listarTabla = (base, limite = 10) => {

    console.log('==================='.green)
    console.log(`Tabla del ${base}`.green)
    console.log('==================='.green)

    for( let i = 1; i <= limite; i++ ) {
      console.log (`${ base } * ${i} = ${base * i}`)
    }
}

let crearArchivo = async ( base, limite = 10 ) => {
  return new Promise((resolve, reject)=> {
    
    if ( !Number(base) ) {
      reject (`El valor ${ base } no es un numero`)
      return;
    }

    let data = '';

    for( let i = 1; i <= limite; i++) {
       data += `${ base } * ${i} = ${base * i}\n`
    }
    
    fileSys.writeFile(`tablas/tabla-${ base }-al-${ limite }.txt`, data, (err) => {
      if (err) 
        reject(err);
      else
        resolve (`tabla-${ base }.txt`);
      console.log(`El archivo ${ base }-al-${ limite }.txt ha sido creado`);
    })
  });
};

module.exports = {
  crearArchivo,
  listarTabla
}

