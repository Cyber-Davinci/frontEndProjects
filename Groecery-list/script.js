let userInput = document.getElementById("groce-input")

userInput.addEventListener("keydown", (e)=>{
    if(e.key=="Enter"){
        addItem()
    }
})


const addItem = ()=>{
    const groceItem = document.createElement("h2");
        groceItem.textContent = `- ${userInput.value}`
    groceItem.addEventListener("click", ()=>{
        // if(groceItem.style.textDecoration!="line-through"){
        //     groceItem.style.textDecoration = "line-through";
        // }
        // else{
        //     groceItem.style.textDecoration = "none";
        // }

        groceItem.style.textDecoration!="line-through" ? groceItem.style.textDecoration="line-through" : groceItem.style.textDecoration = "none";
    })
    document.getElementById("groce-items").appendChild(groceItem)
    userInput.value = ""
    console.log(groceItem)
}

document.getElementById("clear-all").addEventListener("click", ()=>{
    document.getElementById("groce-items").textContent = ""
})