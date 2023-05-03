const colors = require('colors');

const mostrarMenu = () =>{

    return new Promise(resolve=>{
        // console.clear();
        console.log('=========================='.green);
        console.log('  Seleccione una opcion'.gray);
        console.log('=========================='.green);
    
        console.log(`${'1'.green}. Crear tareas `)
        console.log(`${'2'.green}. Listar tareas`)
        console.log(`${'3'.green}. Listar tareas completadas`)
        console.log(`${'4'.green}. Listar tareas pendientes`)
        console.log(`${'5'.green}. Completar tareas`)
        console.log(`${'6'.green}. Borrar tareas`)
        console.log(`${'0'.green}. Salir \n`)
    
        const redline = require('readline').createInterface({
            input:process.stdin,
            output:process.stdout
        })
        redline.question('seleccione una opcion: ',(opt)=>{
            redline.close();
            resolve(opt)
        })
    })

}
const pausa =()=>{

    return new Promise((resolve) => {
        const redline = require('readline').createInterface({
            input:process.stdin,
            output:process.stdout
        })
        redline.question('\nPresione ENTER para continuar\n',(opt)=>{
            redline.close();
            resolve();
        })
    })

}

module.exports={
    mostrarMenu,
    pausa
}