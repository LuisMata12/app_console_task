import { Tarea } from './tarea.js'
import colors from 'colors'
class Tareas{
    _listado={}

    get listadoArr(){
        const listado =[];
        Object.keys(this._listado).forEach(key=>{
            const tarea = this._listado[key];
            listado.push(tarea);
        })
        return listado;
    }

    constructor(){
        this._listado={};
    }
    borrarTarea(id=''){
        if(this._listado[id]){
            delete this._listado[id]
        }
    }
    listarTareasFromArray(arr=[]){
        arr.forEach(key=>{
            this._listado[key.id]=key;
        })
    }
    listadoCompleto(tareas=[]){
         for(let i=1; i<tareas.length; i++){
            console.log(`${colors.green(i)}${tareas[i].desc} :: ${!tareas[i].completadoEnd?colors.red('pendiente'):colors.green('completado')}`)
         }
    }
    crearTarea(desc=''){
        const tarea = new Tarea(desc);
        this._listado[tarea.id]= tarea;
    }
    listarPendientesCompletadas(completadas=true){
        if(completadas){
            console.log( this.listadoArr.filter(tarea=>tarea.completadoEnd==true))
        }else{
            console.log( this.listadoArr.filter(tarea=>tarea.completadoEnd==false||tarea.completadoEnd==null))
        }   
    }

}

export{Tareas}