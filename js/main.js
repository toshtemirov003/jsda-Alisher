var userTicket = document.querySelector(".heading")

var userSum = +prompt("Pulingizni kiriting")

if(userSum >= 9666000){
    userTicket.textContent = "Oq yo’l, Alisher!"
}else{
    userTicket.textContent = "Alisher, ozgina sabr qilish kerak bo’lar ekan."
}