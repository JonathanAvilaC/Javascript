//classes
class Task {
    constructor(task, descTask) {
        this.task = task;
        this.descTask = descTask;
    }
}

//functions
let addTask = (taskName, taskDesc) => {
    todoList.push(new Task(taskName, taskDesc));
    localStorage.setItem("todoList", JSON.stringify(todoList))
}

let deleteTask = (taskId) =>{
    if(todoList[taskId-1] == undefined){
        return -1
    }
    todoList.splice((taskId-1), 1)
    localStorage.setItem("todoList", JSON.stringify(todoList))
    loadTodoList()
    return 1
}


const loadTodoList = () =>{
    const todoDiv = document.getElementById("todo")
    let cardTemplate = document.getElementById("cardTemp")
    let card = cardTemplate.content.querySelector(".card")
    todoDiv.innerHTML = "<h3>Por hacer</h3>"
    todoList.forEach((task, i)=> {
        let newCard = card.cloneNode(true)
        todoDiv.appendChild(newCard)
        newCard.children[0].children[0].innerHTML = `[ID: ${i+1}] ${task.task}`
        newCard.children[0].children[1].innerHTML = task.descTask
    }) 
}

const swalFn = (message, type) => {
    Swal.fire(
        message,
        'Presiona OK para continuar',
        type
      )
}

// variables
const todoList = JSON.parse(localStorage.getItem("todoList")) || [] //Get Data
const progressList = []
const doneList = []

//Cargar tareas
loadTodoList()

//components
const btnAddTask = document.getElementById('btnAddTask')
const btnDeleteTask = document.getElementById('btnDeleteTask')

btnAddTask.addEventListener("click", () =>{
    
    const taskName = document.getElementById("iName")
    const taskDesc = document.getElementById("iDesc")
    if(taskName.value == "")
    {
        swalFn('Debes ingresar un nombre en la tarea', 'error')
        return
    }
    swalFn('Tarea agregada correctamente', 'success')
    addTask(taskName.value, taskDesc.value)
    taskName.value = ''
    taskDesc.value = ''
    loadTodoList()
    setTimeout(hiddenFn, 3000)
})

btnDeleteTask.addEventListener("click", () =>{
    const taskId = document.getElementById("idTaskNumber")
    let idMsg = deleteTask(taskId.value) || 0;
    if(idMsg == -1){
        swalFn('La tarea ingresada no existe', 'error')
        return
    }
    swalFn('Tarea eliminada correctamente', 'success')
    msg.innerText = ""
    taskId.value = ''
    setTimeout(hiddenFn, 3000)
})