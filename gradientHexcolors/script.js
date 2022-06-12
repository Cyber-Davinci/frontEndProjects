let hexidecimal = "123456789ABCDEF".split("");
// console.log(hexidecimal)
document.querySelector("button").addEventListener("click", ()=>{
    let randomIndex;
    let hexCode1 = "",
        hexCode2 = "";

    for(let i = 0; i<6;i++){
        randomIndex = Math.floor(Math.random()*hexidecimal.length);
        hexCode1+=hexidecimal[randomIndex];
        randomIndex = Math.floor(Math.random()*hexidecimal.length);
        hexCode2+=hexidecimal[randomIndex];
    }

    // console.log(hexCode)
    document.querySelector(".hexcode1").textContent = `#${hexCode1}`;
    document.querySelector(".hexcode2").textContent = `#${hexCode2}`;
    document.getElementsByTagName("body")[0].style.background = `linear-gradient(to left, #${hexCode1}, #${hexCode2})`;
})