var userSum = +prompt("Pulingizni kiriting")

var userTicket = document.querySelector(".heading")

if(userSum >= 9666000){
    // console.log("Oq yo’l, Alisher!");
    userTicket.textContent = "Oq yo’l, Alisher!"
}else{
    // console.log("Alisher, ozgina sabr qilish kerak bo’lar ekan.");
    userTicket.textContent = "Alisher, ozgina sabr qilish kerak bo’lar ekan."
}