
const input = document.querySelector("input")
let icon = document.querySelector("i")
let expression = "";

const tapped_btn = (val) =>{
    expression+=val;
    input.value = expression;
}

const equal_btn = () =>{
    document.getElementById("result").textContent = eval(expression)
    expression = ""
    input.value = ""
}
const erase_btn = () =>{
    expression = ""
    document.getElementById("result").textContent = ""
    input.value = expression
}




function changeTheme(){
    
    if(icon.classList.contains("fa-toggle-off")){
        icon.classList.remove("fa-toggle-off")
        icon.classList.add("fa-toggle-on")
        document.getElementById("calculator").style.background = "#f6f8f9";
        input.style.backgroundColor = "#f6f8f9";
        input.style.color = "#000";
        document.querySelectorAll(".btn").forEach(btn=>{btn.style.backgroundColor="#e9f0f4",btn.style.color="#000"});
        document.querySelectorAll(".op").forEach(op=>{op.style.backgroundColor="#ff9500"});
        document.querySelector(".equal").style.backgroundColor = "#2ec973";
        document.querySelector(".btn.c").style.backgroundColor = "#f8eced";
        document.querySelector(".btn.c").style.color = "#f65760";




    }
    else{
        icon.classList.remove("fa-toggle-on");
        icon.classList.add("fa-toggle-off");
        document.getElementById("calculator").style.background = "#17181a";
        input.style.backgroundColor = "#17181a";
        document.querySelectorAll(".btn").forEach(btn=>{btn.style.backgroundColor="#222427", btn.style.color="#fff"});
        document.querySelectorAll(".op").forEach(op=>{op.style.backgroundColor="#ff9500"});
        document.querySelector(".equal").style.backgroundColor = "#2ec973";
        document.querySelector(".btn.c").style.backgroundColor = "#2d191e";
        document.querySelector(".btn.c").style.color = "#f65760";

        // document.querySelector("body").style.backgroundImage = "linear-gradient(62deg, #3a3d40 0%, #181719 100%)"
    }
}
