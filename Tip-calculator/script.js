
const amount = document.getElementById("amount"),
      guests = document.getElementById("guest"),
      quality = document.getElementById("quality"),
      tipAmount = document.getElementById("message-tip");

    
compute = () =>{
    const tip = ((amount.value * quality.value) / (guests.value)).toFixed(2)
    amount.value = guests.value = "";
    quality.value = quality[0].value;

    if(tip === "NaN"){
        tipAmount.textContent = "Fields are empty"
        showMessage()
    }
    else{
        tipAmount.textContent = `$${tip} tip each!`
        showMessage()
    }
}

showMessage = () =>{
    let msg = tipAmount;
    msg.classList.add("show");

    setTimeout(()=>{msg.classList.remove("show")}, 4500)


}