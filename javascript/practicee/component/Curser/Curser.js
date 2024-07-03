let main = document.querySelector(".main")
let crser = document.querySelector(".curser")

main.addEventListener("mousemove",function(dot){
    console.log(dot);
    crser.style.left = dot.x+"px"
    crser.style.top = dot.y+"px"
})