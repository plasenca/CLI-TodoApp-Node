import 'colors';
import inquirer from 'inquirer';

const menuOpts = [
    {
        type: 'list',
        name: 'option',
        message: '¿Qué desea hacer?\n\n'.bgYellow.black,
        choices: [
            {
                value: '1',
                name: `${'1.'.yellow} Crear Tarea`
            },
            {
                value: '2',
                name: `${'2.'.yellow} Listar Tareas`
            },
            {
                value: '3',
                name: `${'3.'.yellow} Listar Tareas Completadas`
            },
            {
                value: '4',
                name: `${'4.'.yellow} Listar Tareas Pendientes`
            },
            {
                value: '5',
                name: `${'5.'.yellow} Completar Tareas`
            },
            {
                value: '6',
                name: `${'6.'.yellow} Borrar Tarea`
            },
            {
                value: '0',
                name: `${'0.'.america} Salir`
            },
        ]
    }
]


const inquirerMenu = async () => {
    console.clear();
    console.log("=========================".magenta);
    console.log("  Seleccione una Opcion  ".bgMagenta.black);
    console.log("=========================".magenta);

    console.log();

    const {option} = await inquirer.prompt(menuOpts);
    return option;
}

const pausa = async () => {

    const pausaInput = [
        {
            type:    'input',
            name:    'pauseValue',
            message: `Presione ${'ENTER'.green} para continuar`
        }
    ]

    const {pauseValue} = await inquirer.prompt(pausaInput);
    return pauseValue;
}

const leerInput = async(message)=> {
    const question = [
        {
            type:'input',
            name: 'description',
            message,
            validate(value){
                if (value.length === 0){
                    return 'Por favor ingrese un valor';
                }
                return true;
            }
        }
    ];

    const {description} = await inquirer.prompt(question);
    return description;
}

const listadoTareasBorrar = async(tareas = []) =>{

    const choices = tareas.map( (tarea, i) => {
        
        const idx = `${i+1}.`.green;

        return {
            value: tarea.id,
            name : `${idx} ${tarea.description}`, 
        }
        
    });

    //* Añadir un valor 0 para salir del menú de borrado
    choices.unshift({
        value: '0',
        name : '0.'.green + ' Cancelar'
    });


    const opt2Delete = [
        {
            type: 'list',
            name: 'id',
            message: '¿Qué tarea desea borrar?\n\n'.bgYellow.black,
            choices
        }
    ]

    const {id} = await inquirer.prompt(opt2Delete);
    return id;
}

const confirmar = async(message) => {
    const question = [
        {
            type: 'confirm',
            name: 'ok',
            message
        }
    ]

    const {ok } = await inquirer.prompt(question);
    return ok;
}

const mostrarListadoChecklist = async(tareas = []) =>{

    const choices = tareas.map( (tarea, i) => {
        
        const idx = `${i+1}.`.green;

        return {
            value: tarea.id,
            name : `${idx} ${tarea.description}`, 
            checked: (tarea.completedAt) ? true : false
        }
        
    });


    const chechList = [
        {
            type: 'checkbox',
            name: 'ids',
            message: 'Selecciones'.bgYellow.black,
            choices
        }
    ]

    const {ids} = await inquirer.prompt(chechList);
    return ids;
}



export default {
    inquirerMenu,
    pausa,
    leerInput,
    listadoTareasBorrar,
    confirmar,
    mostrarListadoChecklist,
}