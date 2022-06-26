let userInput = document.getElementById("groce-input")

userInput.addEventListener("keydown", (e)=>{
    if(e.key=="Enter"){
        addItem()
    }
})


const addItem = ()=>{
    if(userInput.value != ""){
        const groceItem = document.createElement("h2");
        groceItem.textContent = `- ${userInput.value}`
    }
    else{
        document.getElementById("message").classList.add("show")
    }
    setTimeout(()=>{document.getElementById("message").classList.remove("show")}, 4000)


    groceItem.addEventListener("click", ()=>{
        groceItem.style.textDecoration!="line-through" ? groceItem.style.textDecoration="line-through" : groceItem.style.textDecoration = "none";
    })
    document.getElementById("groce-items").appendChild(groceItem)
    userInput.value = ""
}

document.getElementById("clear-all").addEventListener("click", ()=>{
    document.getElementById("groce-items").textContent = ""
})