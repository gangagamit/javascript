let main = document.querySelector(".conatiner")

let icon = document.querySelector("i")

main.addEventListener("dblclick",function(){
    icon.style.transform = 'translate(-50%,-50%) scale(1)'
     icon.style.opacity = 0.8
    console.log(" Like")
    setTimeout(function(){
        icon.style.transform = 'translate(-50%,-50%) scale(0)' 
    },2000)
})