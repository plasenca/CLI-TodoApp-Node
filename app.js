import 'colors';
import inquirer from './helpers/inquirer.js';
import tasks from './models/tasks.js';
import task from './models/task.js';
import { saveDB, readDB } from './helpers/saveFile.js';

console.clear();

const main = async() => {

    let opt = '';

    const tareas = new tasks.Tasks();
    const tareasDB = readDB();

    if (tareasDB){
        tareas.loadTaksFromArray(tareasDB)
    }

    do {

        opt = await inquirer.inquirerMenu();

        switch (opt) {
            //* Crear Tarea
            case '1':
                const description = await inquirer.leerInput('Descripción:');
                tareas.createTask(description);
                break;
            
            //* Listar Tareas
            case '2':
                tareas.getListTask();
                break;
            //* Listar Tareas Completadas
            case '3':
                tareas.getListCompletedTask(true);
                break;
            
            //* Listar Tareas Pendientes
            case '4':
                tareas.getListCompletedTask(false);
                break;

            //* Completar Tareas
            case '5':
                const ids = await inquirer.mostrarListadoChecklist(tareas.listArrTotal);
                tareas.toggleCompleted(ids);
                break;
            
            //* Borrar Tareas
            case '6':
                const id = await inquirer.listadoTareasBorrar(tareas.listArrTotal);

                if (id === '0'){
                    const confirmar = await inquirer.confirmar('¿Estás seguro?');
                    if (confirmar) tareas.eraseTask(id);
                }

                break;
            
            default:
                break;
        }

        saveDB(tareas.listArrTotal);

        await inquirer.pausa();

    } while (opt !== '0');


}


main();