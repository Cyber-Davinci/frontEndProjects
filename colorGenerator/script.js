let colors = ["Orangered","Blue","Yellow","Green","Orange", "Cyan","DodgerBlue", "Violet", "Navy", "Purple", "YellowGreen", "OrangeRed", "SlateBlue", "Salmon", "Crimson", "HotPink", "Magenta"];
let colorIndex = 0;

let colorName = document.querySelector("h2");

document.querySelector("button").addEventListener("click", () =>{
    // using tanary operators

    colorIndex > colors.length -1 ? colorIndex = 0: document.body.style.backgroundColor = colors[colorIndex++];
    colorName.textContent = colors[colorIndex-1]

    // using if statements

    if(colorIndex > colors.length -1){
        colorIndex = 0
    }
    document.body.style.backgroundColor = colors[colorIndex++];
    colorName.textContent = colors[colorIndex-1]  
})

