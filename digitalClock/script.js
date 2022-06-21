let weekday = document.getElementById("weekday"),
    month = document.getElementById("month"),
    day = document.getElementById("day"),
    year = document.getElementById("year")


let hour = document.getElementsByClassName('hour'),
    min = document.getElementsByClassName('min'),
    sec = document.getElementsByClassName('sec'),
    amORpm = document.getElementsByClassName("ampm")

let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
    days = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "Saturday"]


let icon = document.querySelector("i")

function changeTheme(){
    
    if(icon.classList.contains("fa-toggle-off")){
        icon.classList.remove("fa-toggle-off")
        icon.classList.add("fa-toggle-on")
        document.querySelector("body").style.background = "#fff"
        icon.style.color = "#000"
        document.getElementById("date").style.textShadow = "red 2px 0, cyan -2px 0"
        document.getElementById("date").style.color = "#000"


    }
    else{
        icon.classList.remove("fa-toggle-on")
        icon.classList.add("fa-toggle-off")
        document.querySelector("body").style.background = "#000"
        document.querySelector("body").style.backgroundImage = "linear-gradient(62deg, #3a3d40 0%, #181719 100%)"
        icon.style.color = "#fff"
        document.getElementById("date").style.color = "#fff"




    }
}

function digitalclock(){
    const clock = new Date()

    weekday.textContent = days[clock.getDay()]
    month.textContent = months[clock.getMonth()]
    day.textContent = clock.getDate()
    year.textContent = clock.getFullYear()

    hour[0].textContent = clock.getHours()
    min[0].textContent = clock.getMinutes()
    sec[0].textContent = clock.getSeconds()

    hour > 12 ? amORpm.textContent = "PM" : amORpm.textContent = "AM";


    setTimeout(digitalclock, 200)
}
digitalclock()