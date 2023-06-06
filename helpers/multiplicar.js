const fs = require('fs');
const tablaMultiplicar = (numero, salidaOut, hasta, typeOutPut) =>{
    if(typeOutPut == 1){
        for(x = 1; x <= hasta; x++){
            salidaOut += `${numero} ${'x'.blue} ${x} = ${numero*x}\n`;
        }
    }else{
        for(x = 1; x <= hasta; x++){
            salidaOut += `${numero} ${'x'} ${x} = ${numero*x}\n`;
        }
    }
    
    return salidaOut;
} 
const crearArchivoTabla = async (base = 5, listar, hasta) => {
    try{
        if(listar === true){
            console.log("================".rainbow);
            console.log(`Tabla del`, `${base}`.green);
            console.log("================".rainbow);
            console.log(await tablaMultiplicar(base, "", hasta,1))
        }
        
        let salida = await tablaMultiplicar(base, "", hasta,2)
        let consola = '';
        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida, (err) => {
            if (err) throw err;
    
            return `tabla-${base}.txt`; 
        })
        return `tabla-${base}.txt`
    }catch(err){
        return err;
    }
    
}

module.exports = {
    crearArchivoTabla: crearArchivoTabla,
    funcion2: tablaMultiplicar
}