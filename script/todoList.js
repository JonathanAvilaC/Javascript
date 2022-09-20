class Task {
    constructor(task, descTask) {
        this.task = task;
        this.descTask = descTask;
    }
}

const imprMsg = () => {
    const initMsg = [
        "Ingresa una de las siguientes opciones:",
        "[1] Ingresar nueva tarea",
        "[2] Listar tareas",
        // "[3] Mover una tarea",
        // "[4] Modificar una tarea",
        "[3] Eliminar una tarea",
        "[4] Finalizar"
    ]
    return initMsg.join("\n");
}

let listTasks = (option) => {
    console.clear()
    let valid = 1;
    if (todoList.length > 0  && (option == 0 || option == 1)) {
        console.log(`Tareas por hacer: ${todoList.length}`)
        todoList.forEach((element, i) => {
            console.log(`|| id ${i + 1} ${element.task} - ${element.descTask == undefined ? 'Sin descripción' : element.descTask} ||`)
        })
    }
    if (progressList.length > 0 && (option == 0 || option == 2)) {
        console.log(`Tareas en progreso: ${progressList.length}`)
        progressList.forEach(element => {
            console.log(`|| id ${i + 1} ${element.task} - ${element.descTask == undefined ? 'Sin descripción' : element.descTask} ||`)
        })
    }
    if (doneList.length > 0 && (option == 0 || option == 3)) {
        console.log(`Tareas finalizadas: ${doneList.length}`)
        doneList.forEach(element => {
            console.log(`|| id ${i + 1} ${element.task} - ${element.descTask == undefined ? 'Sin descripción' : element.descTask} ||`)
        })
    }
    if (todoList.length == 0 && progressList.length == 0 && doneList.length == 0) {
        alert('No hay tareas para listar');
        valid = 0;
    }
    return valid
}

let TaskFn = () => {
    let tl = true
    while (tl) {
        let task = prompt("Ingrese nombre de la tarea");
        let descTask;

        const desc = window.confirm("Desea ingresar una descripción?");

        if (desc) {
            descTask = prompt("Ingrese la descripción");
        }

        todoList.push(new Task(task, descTask));
        let repeat = window.confirm("Deseas volver a agregar otra tarea?");

        if (!repeat) {
            tl = false;
        }
    }
}

let deleteTask = () =>{
    let valid = listTasks(0)
    if(valid == 1){
        let find = Number(prompt("Selecciona la categoria \n [1] Por hacer \n [2] En progreso \n [3] finalizada \n [4] Cancelar"))
        while (find < 0 || find > 3) {
            find = Number(prompt("Selecciona la categoria \n [1] Por hacer \n [2] En progreso \n [3] finalizada \n [4] Cancelar"))
        }
        listTasks(find);

        if(find == 1 && todoList.length > 0){
            find = Number(prompt("Seleccione el id a eliminar o [0]  para cancelar"))
            while (find < 0 || find > 3) {
                find = Number(prompt("Seleccione el id a eliminar o [0]  para cancelar"))
            }
            
            if(find == 0){
                return
            }

            todoList.splice(find -1)
            listTasks(0);
            return
        }

        if(find == 1 && todoList.length > 0){
            find = Number(prompt("Seleccione el id a eliminar o [0]  para cancelar"))
            while (find < 0 || find > 3) {
                find = Number(prompt("Seleccione el id a eliminar o [0]  para cancelar"))
            }
            
            if(find == 0){
                return
            }

            todoList.splice(find -1)
            return
        }
        
    }
}

let searchTask = () => {
    console.log(todoList)
    console.log(progressList)
    console.log(doneList)
}

let caseFunc = (option) => {
    if (option == 1) {
        TaskFn()
        return
    }
    if (option == 2) {
        listTasks(0)
        return
    }
    if (option == 3) {
        deleteTask()
        return
    }
    if (option == 4) {
        loop = false
        return
    }
}

const todoList = []
todoList.push(new Task('Coder DOM 19/09', 'Interactuando con HTML'))
todoList.push(new Task('Coder Eventos 21/09', 'Incorporar eventos al proyecto'))

const progressList = []
const doneList = []

const todoDiv = document.getElementById("todo")
let cardTemplate = document.getElementById("cardTemp")
let card = cardTemplate.content.querySelector(".card")

todoList.forEach((task)=> {
    let newCard = card.cloneNode(true)
    todoDiv.appendChild(newCard)
    newCard.children[0].children[0].innerHTML = task.task
    newCard.children[0].children[1].innerHTML = task.descTask
})