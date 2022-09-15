class addTask {
    constructor(task, descTask){
        this.task = task;
        this.descTask = descTask;
    }
}
const imprMsg = () =>{
    const initMsg = [
        "Ingresa una de las siguientes opciones:","[1] Ingresar nueva tarea", "[2] Buscar una tarea", "[3] Mover una tarea", "[4] Modificar una tarea", "[5] Eliminar una tarea", "[6] Finalizar"
    ]
    return initMsg.join("\n");
}

const todoList = []
const progressList = []
const doneList = []
let loop = true

let listTasks = () => {
    todoList.length > 0 ? array.forEach(element => { element.todoList}) : console.log('No hay tareas por hacer')
}

let addTaskFn = () =>{
    let tl = true
        while(tl){
            let task = prompt("Ingrese nombre de la tarea");
            let descTask;
            
            const desc = window.confirm("Desea ingresar una descripción?");
            
            if(desc){
                descTask = prompt("Ingrese la descripción");
            }
            
            todoList.push(new addTask(task, descTask));
            let repeat = window.confirm("Deseas volver a agregar otra tarea?");
        
            if(!repeat){
                tl = false;
            }
        }
}

let searchTask = () =>{
    console.log(todoList)
    console.log(progressList)
    console.log(doneList)
}

let caseFunc = (option) => {
    if(option == 1){
            addTaskFn()
        return
    }
    if(option == 2){
            listTasks()
        return
    }
    if(option == 6){
        loop = false
        return
    }
}

while(loop){
    const msg = imprMsg()
    let option = Number(prompt(msg))
    while(option < 0 || option > 6){
        option = Number(prompt(msg))
    }
    caseFunc(option)
}





