import PasswordPrompt from 'inquirer/lib/prompts/password.js';
import { guardarDB, leerDB } from './helpers/guardarArchivo.js';
import {inquirerMenu, pausa , leerInput, listarTareasBorrar, confirmar} from'./helpers/inquirer.js'
import { Tarea } from './models/tarea.js';
import { Tareas } from './models/tareas.js';

console.clear()


const main = async () =>{

    let opt = '';
    const tareas = new Tareas();
    const tareasDB = leerDB();
    
    do {
        if(tareasDB){
            console.log(tareasDB)
            tareas.listarTareasFromArray(tareasDB)
        }
        opt = await inquirerMenu();
        
        switch (opt) {
            case '1':
                const desc = await leerInput('Descripción: ')
                tareas.crearTarea(desc)
                guardarDB(tareas.listadoArr)
                break;
            case '2':
                tareas.listadoCompleto(tareasDB)
                break;
            case '3':
                tareas.listarPendientesCompletadas(true)
                break;
            case '4':
                tareas.listarPendientesCompletadas(false)
                break;
            case '6':
                const idBorrar = await listarTareasBorrar(tareas.listadoArr);
                const ok = await confirmar('estas seguro?');
                if(ok){
                    tareas.borrarTarea(idBorrar)
                }
                break;
            default:
                break;
        }

        guardarDB(tareas.listadoArr)

        if(opt != '0') await pausa();
        
        // console.log(opt)
    } while (opt!= '0');
}

main();