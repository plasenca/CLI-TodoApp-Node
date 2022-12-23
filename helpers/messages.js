require('colors');

const mostrarMenu = () => {

    return new Promise(resolve => {
        console.clear();
        console.log("=========================".magenta);
        console.log("  Seleccione una Opcion  ".bgMagenta.black);
        console.log("=========================".magenta);
        
        console.log();

        console.log(`${'1.'.america} Crear Tarea`);
        console.log(`${'2.'.america} Listar Tareas`);
        console.log(`${'3.'.america} Listar Tareas Completadas`);
        console.log(`${'4.'.america} Listar Tareas Pendientes`);
        console.log(`${'5.'.america} Completar Tarea(s)`);
        console.log(`${'6.'.america} Borrar Tarea`);
        console.log(`${'0.'.america} Salir\n`);

        //* Get input value
        const readLine = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        });

        readLine.question('Selecione una Opción: ', (opt) => {
            readLine.close();
            resolve(opt);
        })
    })

}

const pausa = () => {

    return new Promise(resolve => {
        const readLine = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        });
    
        readLine.question(`\nPresione ${'ENTER'.green} para continuar\n`, (opt) => {
            readLine.close();
            resolve();
        })
    })
}


module.exports = {
    mostrarMenu,
    pausa
}