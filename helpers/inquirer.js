import inquirer from 'inquirer'
import 'colors'


const preguntas =[
    {
        type:'list',
        name:'opcion',
        message:'Que desea hacer?',
        choices:[
            {
                value:'1',
                name:'1.Crear tareas'
            },
            {
                value:'2',
                name:'2.Listar tareas'
            },
            {
                value:'3',
                name:'3.Listar tareas completadas'
            }
            ,            {
                value:'4',
                name:'4.Listar tareas pendientes'
            },
            {
                value:'5',
                name:'5.Completar tareas'
            },
            {
                value:'6',
                name:'6.Borrar tareas'
            },
            {
                value:'0',
                name:'0.Completar tareas'
            }
        ]
    }
];

const inquirerMenu  = async()=>{
    // console.clear();
    console.log('=========================='.green);
    console.log('  Seleccione una opcion'.gray);
    console.log('=========================='.green);

     const {opcion}=await inquirer.prompt(preguntas)
    return opcion;
}

const pausa = async()=>{

    await inquirer.prompt([{
        name:'pausa',
        type:'input',
        message:'Presiona ENTER para continuar'
    }])
}

const leerInput = async(message)=>{
    const question= [
        {
            name:'desc',
            type:'input',
            message,
            validate(value){
                if(value.length===0){
                    return'Por favor ingresa un valor'
                }
                return true;
            }
        }
    ];
    const {desc} = await inquirer.prompt(question);
    return desc;
}
const listarTareasBorrar = async(tareas=[])=>{

    const choices = tareas.map((tarea,i)=>{
        const idx=`${i+1}`.green;
        return{
            value:tarea.id,
            name:`${idx} ${ tarea.desc}`,
        }
    })


    const preguntas =[
        {
            type:'list',
            name:'id',
            message:'borrar',
            choices
        }
    ]
    const {id}= await inquirer.prompt(preguntas);
    return id;
}
const confirmar =async(message)=>{
    const question =[
        {
            type:'confirm',
            name:'ok',
            message
        }
    ];
    const {ok}= await inquirer.prompt(question);
    return ok;
}

export{
    inquirerMenu,
    pausa,
    leerInput,
    listarTareasBorrar,
    confirmar
}