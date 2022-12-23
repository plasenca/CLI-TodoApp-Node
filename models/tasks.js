import 'colors';
import task from "./task.js";


class Tasks {

    _listTasks = {};

    get listArrTotal(){

        const listArr = [];

        Object.keys(this._listTasks).forEach( key =>{
            listArr.push(this._listTasks[key]);
        } );

        return listArr;
    }

    constructor(){
        this._listTasks = {};
    }

    eraseTask(id=''){
        if(this._listTasks[id]){
            delete this._listTasks[id];
        }
    }

    /**
     * 
     * @param {Array<Tasks>} tasks 
     */
    loadTaksFromArray(tasks = []){
        for (const task of tasks) {
            this._listTasks[task.id] = task;
        }
    }

    /**
     * 
     * @param {String} description 
     */
    createTask(description = ''){
        const _task = new task.Task(description)

        this._listTasks[_task.id] = _task;
    }

    getListTask(){
        let count = 0;

        for (const task of this.listArrTotal) {
            count++;
            const {description, completedAt} = task;

            const completedString = completedAt === null 
                                    ? 'Pendiente'.red 
                                    : 'Completado'.green;

            const taskString = `${count}. ${description} :: ${completedString}`
            console.log(taskString);
        }
    }

    getListCompletedTask(completed = true){
        let count = 0;

        for (const task of this.listArrTotal) {
            const {description, completedAt} = task;

            const completedString = completedAt === null 
                                    ? 'Pendiente'.red 
                                    : `${completedAt}`.green;

            if(completed){
                if ( completedAt ){
                    count++;
                    console.log(`${count}. ${description} :: ${completedString}`);
                }
            }else{
                if ( !completedAt ){
                    count++;
                    console.log(`${count}. ${description} :: ${completedString}`);
                }
            }
        }
    }

    toggleCompleted(ids = []){

        for (const id of ids) {
            const task = this._listTasks[id];

            if(!task.completedAt){
                task.completedAt = new Date().toISOString();
            }

        }


        for (const task of this.listArrTotal) {
            if (!ids.includes(task.id)){
                this._listTasks[task.id].completedAt = null;
            }
        }

    }

}


export default {
    Tasks
}
