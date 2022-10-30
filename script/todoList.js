//classes
class Task {
    constructor(task, descTask) {
        this.task = task;
        this.descTask = descTask;
    }
}

//functions
const dragDropFN = (list) => {
    const component = document.querySelector(list)
   
    component.addEventListener('dragleave', e => {
        component.style.border = ""
    })
    component.addEventListener('dragover', e => {
        e.preventDefault()
        component.style.border = "1px solid #2595B3"
    })
    component.addEventListener('drop', e => {
        e.preventDefault()
        component.style.border = ""
        moveTask(tempList, originBoxId, component.id)
    })
}

const existTask = (taskName) => {
    let indexT = todoList.map(item => item.task).indexOf(taskName)
    let indexP = progressList.map(i => i.task).indexOf(taskName)
    let indexD = doneList.map(item => item.task).indexOf(taskName)
    if (indexT >= 0) {
        return indexT
    }
    if (indexP >= 0) {
        return indexP
    }
    if (indexD >= 0) {
        return indexD
    }
    return -1
}

const addTask = (taskName, taskDesc) => {
    todoList.push(new Task(taskName, taskDesc));
    localStorage.setItem("todoList", JSON.stringify(todoList))
    return
}

const deleteTask = (taskName) => {
    let indexT = todoList.map(item => item.task).indexOf(taskName)
    let indexP = progressList.map(i => i.task).indexOf(taskName)
    let indexD = doneList.map(item => item.task).indexOf(taskName)
    if (indexT >= 0) {
        let index = todoList.map(item => item.task).indexOf(taskName)
        todoList.splice(index, 1)
        localStorage.setItem("todoList", JSON.stringify(todoList))
        todoList.length >= 0 ? loadTodoList() : null
        swalFn('Tarea eliminada correctamente', 'success')
        deleteFunction()
        return
    }
    if (indexP >= 0) {
        let index = todoList.map(item => item.task).indexOf(taskName)
        progressList.splice(index, 1)
        localStorage.setItem("progressList", JSON.stringify(progressList))
        progressList.length >= 0 ? loadProgressList() : null
        swalFn('Tarea eliminada correctamente', 'success')
        deleteFunction()
        return
    }
    if (indexD >= 0) {
        let index = todoList.map(item => item.task).indexOf(taskName)
        doneList.splice(index, 1)
        localStorage.setItem("doneList", JSON.stringify(doneList))
        doneList.length >= 0 ? loadDoneList() : null
        swalFn('Tarea eliminada correctamente', 'success')
        deleteFunction()
        return
    }
    swalFn('No se ha podido eliminar la tarea', 'error')
    return
}

const deleteFunction = () =>{
    const btnDeleteTask = document.getElementsByName('btnDeleteTask')
    if (btnDeleteTask.length > 0) {
        for (let i = 0; i < btnDeleteTask.length; i++) {
            btnDeleteTask[i].addEventListener("click", () => {
                try{
                    let taskName = btnDeleteTask[i].parentElement.children[0].innerHTML
                    deleteTask(taskName)
                }catch{
                    console.log('No quedan elementos a eliminar')
                }
                
            })
        }
    }
}

const moveTask = (originList, originBoxId, newList) => {
    if (originList == newList) {
        console.log('Sin cambios')
        return false
    }
    const taskName = document.getElementById(originBoxId).children[0].children[0].innerHTML
    const index = existTask(taskName)
    const fromList = eval(originList)
    const toList = eval(newList)

    if(index >= 0){
        toList.push(fromList[index])
        fromList.splice(index, 1)
        localStorage.setItem(originList, JSON.stringify(fromList))
        localStorage.setItem(newList, JSON.stringify(toList))
        loadTodoList()
        loadProgressList()
        loadDoneList()
    }
    deleteFunction()
}

const loadTodoList = () => {
    const todoDiv = document.getElementById("todoList")
    let cardTemplate = document.getElementById("cardTemp")
    let card = cardTemplate.content.querySelector(".card")
    todoDiv.innerHTML = "<h3>Por hacer</h3>"
    todoList.forEach((task, i) => {
        let newCard = card.cloneNode(true)
        todoDiv.appendChild(newCard)
        newCard.setAttribute("id", `t${i}`)
        newCard.children[0].children[0].innerHTML = `${task.task}`
        newCard.children[0].children[1].innerHTML = task.descTask
        newCard.addEventListener('dragstart', e=>{
            tempList = newCard.parentNode.id
            originBoxId = newCard.id
        })
    })
}

const loadProgressList = () => {
    const progressDiv = document.getElementById("progressList")
    let cardTemplate = document.getElementById("cardTemp")
    let card = cardTemplate.content.querySelector(".card")
    progressDiv.innerHTML = "<h3>En progreso</h3>"
    progressList.forEach((task, i) => {
        let newCard = card.cloneNode(true)
        progressDiv.appendChild(newCard)
        newCard.setAttribute("id", `t${i}`)
        newCard.children[0].children[0].innerHTML = task.task
        newCard.children[0].children[1].innerHTML = task.descTask
        newCard.addEventListener('dragstart', e=>{
            tempList = newCard.parentNode.id
            originBoxId = newCard.id
        })
    })
}

const loadDoneList = () => {
    const doneDiv = document.getElementById("doneList")
    let cardTemplate = document.getElementById("cardTemp")
    let card = cardTemplate.content.querySelector(".card")
    doneDiv.innerHTML = "<h3>Hecho</h3>"
    doneList.forEach((task, i) => {
        let newCard = card.cloneNode(true)
        doneDiv.appendChild(newCard)
        newCard.setAttribute("id", `t${i}`)
        newCard.children[0].children[0].innerHTML = `${task.task}`
        newCard.children[0].children[1].innerHTML = task.descTask
        newCard.addEventListener('dragstart', e=>{
            tempList = newCard.parentNode.id
            originBoxId = newCard.id
        })
    })
}

const swalFn = (message, type) => {
    Swal.fire(
        message,
        'Presiona OK para continuar',
        type
    )
}

// Global variables
const todoList = JSON.parse(localStorage.getItem("todoList")) || []
const progressList = JSON.parse(localStorage.getItem("progressList")) || []
const doneList = JSON.parse(localStorage.getItem("doneList")) || []

let originBoxId = 0
let tempBoxId = 0
let tempList = ''

//Components
const btnAddTask = document.getElementById('btnAddTask')

//Calling initial functions
loadTodoList()
loadProgressList()
loadDoneList()

dragDropFN('#todoList')
dragDropFN('#progressList')
dragDropFN('#doneList')
deleteFunction()

btnAddTask.addEventListener("click", () => {
    const taskName = document.getElementById("iName")
    const taskDesc = document.getElementById("iDesc")
    const index = existTask(taskName.value)
    if (index >= 0) {
        swalFn('La tarea ya existe', 'error')
        return
    }
    if (taskName.value == "") {
        swalFn('Debes ingresar un nombre en la tarea', 'error')
        return
    }
    swalFn('Tarea agregada correctamente', 'success')
    addTask(taskName.value, taskDesc.value)
    taskName.value = ''
    taskDesc.value = ''
    loadTodoList()
    deleteFunction()
})

//Fetch
fetch("content/notes.json")
    .then(resp => resp.json())
    .then(data => {
        const mess = document.getElementById('messages')
        for (let i in data) {
            mess.innerHTML += `<div class="alert alert-${data[i].Class}" role="alert">${data[i].Message}</div>`
        }
    })
    .catch(error => {
        console.log(error)
    })