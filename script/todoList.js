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
    return
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
        newCard.setAttribute("id", `t${i}`)
        newCard.children[0].children[0].innerHTML = `[ID: ${i+1}] ${task.task}`
        newCard.children[0].children[1].innerHTML = task.descTask
    })
}

const loadProgressList = () =>{
    const todoDiv = document.getElementById("inProgress")
    let cardTemplate = document.getElementById("cardTemp")
    let card = cardTemplate.content.querySelector(".card")
    todoDiv.innerHTML = "<h3>En progreso</h3>"
    todoList.forEach((task, i)=> {
        let newCard = card.cloneNode(true)
        todoDiv.appendChild(newCard)
        newCard.setAttribute("id", `t${i}`)
        newCard.children[0].children[0].innerHTML = `[ID: ${i+1}] ${task.task}`
        newCard.children[0].children[1].innerHTML = task.descTask
    })
}

const loadDoneList = () =>{
    const todoDiv = document.getElementById("inProgress")
    let cardTemplate = document.getElementById("cardTemp")
    let card = cardTemplate.content.querySelector(".card")
    todoDiv.innerHTML = "<h3>Hecho</h3>"
    todoList.forEach((task, i)=> {
        let newCard = card.cloneNode(true)
        todoDiv.appendChild(newCard)
        newCard.setAttribute("id", `t${i}`)
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

const moveTask = (taskId, list) => {
    if(list == 'todo'){
        
    }
}

// variables
const todoList = JSON.parse(localStorage.getItem("todoList")) || [] //Get Data
const progressList = JSON.parse(localStorage.getItem("progressList")) || [] 
const doneList = JSON.parse(localStorage.getItem("doneList")) || [] 
let originBoxId = 0
let tempBoxId = 0

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
})

btnDeleteTask.addEventListener("click", () =>{
    const taskId = document.getElementById("idTaskNumber")
    let idMsg = deleteTask(taskId.value) || 0;
    if(idMsg == -1){
        swalFn('La tarea ingresada no existe', 'error')
        return
    }
    swalFn('Tarea eliminada correctamente', 'success')
    taskId.value = ''
})


//Drag and drop
const boxes = document.querySelectorAll('div.card')

for(let i = 0; i< boxes.length; i++){
    boxes[i].addEventListener('dragstart', e =>{
        console.log(originBoxId)
    })

    boxes[i].addEventListener('dragend', e =>{
        // console.log('Drag End')
        console.log(boxes[i].id)
    })

    boxes[i].addEventListener('drag', e =>{
        // console.log('Dragging')
    })
}

const dragDropFN = (list) =>{
    const component = document.querySelector(list)
    component.addEventListener('dragenter', e=>{
        
    })
    
    component.addEventListener('dragleave', e=>{
        component.style.border = ""
        // console.log('leaving from TodoList')
    })
    
    component.addEventListener('dragover', e=>{
        e.preventDefault()
        originBoxId = component.id
        component.style.border = "1px solid #2595B3"
        // console.log('Drag over')
    })
    
    component.addEventListener('drop', e=>{
        component.style.border = ""
        tempBoxId = component.id
        console.log(tempBoxId)
        // console.log('Drop')
    })
}

dragDropFN('#todo')
dragDropFN('#inProgress')
dragDropFN('#done')

//Fetch
fetch("content/notes.json")
.then(resp => resp.json())
.then(data =>{
    const mess = document.getElementById('messages')
    for(let i in data){
        mess.innerHTML += `<div class="alert alert-${data[i].Class}" role="alert">${data[i].Message}</div>`
    }

})
.catch( error =>{
    console.log(error)
})