const fs = require('fs');
const colors = require('colors');

let listarArchivo = (base, limite = 10) => {

    if(!Number(base)){
        console.log(`El valor ${base} no es un número`);
        return;
    }else if(!Number(limite)){
        console.log(`El valor ${limite} no es un número`);
        return;
    }

    console.log('==============================='.red);
    console.log(`========= Tabla de ${base} =========`.rainbow);
    console.log('==============================='.red);

    for(let i=1; i <= limite; i++){
        console.log(`${base} * ${i} = ${base*i}\n`);
    }
}

let crearArchivo = (base, limite = 10) => {

    return new Promise((resolve, reject) => {

        if(!Number(base)){
            reject(`El valor ${base} no es un número!`);
            return;
        }

        if(!Number(limite)){
            reject(`El valor ${limite} no es un número!`);
            return;
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {

            data += `${base} * ${i} = ${base * i}\n`;

        }

        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err) {
                reject(err);
            }else{
                resolve(`tabla-${base}.txt`);
            }

            console.log('El archivo '+ colors.rainbow(`tabla-${base}.txt`) + ' ha sido creado');
        });

    });
}

module.exports = {
    crearArchivo,
    listarArchivo
}

