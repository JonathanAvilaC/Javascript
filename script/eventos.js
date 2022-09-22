class Task {
    constructor(task, descTask) {
        this.task = task;
        this.descTask = descTask;
    }
}

let addTask = (taskName, taskDesc) => {
    todoList.push(new Task(taskName, taskDesc));
}

let deleteTask = (taskId) =>{
    if(todoList[taskId-1] == undefined){
        return -1
    }
    todoList.splice((taskId-1))
    loadTodoList()
    return 1
}

const hiddenFn = () =>{
    document.getElementById('msgAddTask').hidden = true
    document.getElementById('msgDeleteTask').hidden = true

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

const todoList = []
// todoList.push(new Task('Coder DOM 19/09', 'Interactuando con HTML'))
// todoList.push(new Task('Coder Eventos 21/09', 'Incorporar eventos al proyecto'))

const progressList = []
const doneList = []


const btnAddTask = document.getElementById('btnAddTask')
const btnDeleteTask = document.getElementById('btnDeleteTask')


btnAddTask.addEventListener("click", () =>{
    const taskName = document.getElementById("iName")
    const taskDesc = document.getElementById("iDesc")
    const msg = document.getElementById('msgAddTask')
    msg.removeChild
    msg.hidden = false;
    if(taskName.value == "")
    {
        msg.classList.remove("alert-success")
        msg.classList.add("alert-danger")
        msg.innerText ="Debes ingresar un nombre en la tarea."
        return
    }
    addTask(taskName.value, taskDesc.value)
    msg.classList.remove("alert-danger")
    msg.classList.add("alert-success")
    msg.innerText = "Tarea agregada correctamente."
    taskName.value = ''
    taskDesc.value = ''
    loadTodoList()
    setTimeout(hiddenFn, 3000)
})


btnDeleteTask.addEventListener("click", () =>{
    const taskId = document.getElementById("itTaskNumber")
    const msg = document.getElementById('msgDeleteTask')
    msg.removeChild
    msg.hidden = false;
    let idMsg = deleteTask(taskId.value);
    if(idMsg == -1){
        msg.classList.remove("alert-success")
        msg.classList.add("alert-danger")
        msg.innerText ="La tarea ingresada no existe."
        return
    }
    msg.classList.remove("alert-danger")
    msg.classList.add("alert-success")
    msg.innerText = "Tarea eliminada correctamente."
    taskId.value = ''
    setTimeout(hiddenFn, 3000)
})