
// const todoItems = document.querySelectorAll(".todo-items"),
const todoContainers = document.querySelectorAll(".todo-container"),
      userInput = document.getElementById("todo-input"),
      remainingContainer = document.querySelector(".remaining");

let weekday = document.getElementById("day"),
    time = document.getElementById("time");

let newTodo;

createTodo = () =>{
    const item = `
    <div class="todo-items" id="todo-item" draggable="true">
    <p>${userInput.value}</p>
    <div class="progress"></div>
    </div>
`
let getNodes = str => new DOMParser().parseFromString(str, 'text/html').body.childNodes;

newTodo = getNodes(item)
newTodo.forEach(todo=>{
    remainingContainer.appendChild(todo)
})

let newItems = document.querySelectorAll(".todo-items")

    newItems.forEach(item =>{
        item.addEventListener("dragstart", () =>{
            item.classList.add("dragging")
            console.log("dragging..")
        })
    })
    newItems.forEach(item =>{
        item.addEventListener("dragend", () =>{
            item.classList.remove("dragging")
            console.log("dragging..")
        })
    })
    // console.log(newItems)


userInput.value  = ""

}

addTodo = () =>{
    if(userInput.value === ""){
        document.getElementById("message").classList.add("show")
        setTimeout(()=>{document.getElementById("message").classList.remove("show")}, 4500)
    }
    else{
        createTodo()
    }
}

userInput.addEventListener("keyup", (e) =>{
    if(e.key === "Enter" && userInput.value != ""){
        createTodo()
    }

})


todoContainers.forEach(container =>{
    container.addEventListener("dragover", (e)=>{
        e.preventDefault()
        let draggedItem = document.querySelector(".dragging")
        container.classList.add("drag-over")
        container.appendChild(draggedItem)
        // draggedItem.classList.remove("dragging")
        // console.log(`current conainer ${container.id}`)
    })
})

todoContainers.forEach(container =>{
    container.addEventListener("dragleave", ()=>{
        container.classList.remove("drag-over")
        // console.log(`current conainer ${container.id}`)
    })
})
todoContainers.forEach(container =>{
    container.addEventListener("dragend", ()=>{
        container.classList.remove("drag-over")
        // console.log(`current conainer ${container.id}`)
    })
})


const days = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "Saturday"];

const dateTime = new Date;

weekday.textContent = days[dateTime.getDay()]


dateTime.getMinutes < 10 ? time.textContent = `${dateTime.getHours()}:0${dateTime.getMinutes()}`: time.textContent = `${dateTime.getHours()}:${dateTime.getMinutes()}`

