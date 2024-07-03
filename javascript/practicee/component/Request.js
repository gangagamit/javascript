let btn = document.querySelector("button")

let stranger = document.querySelector("h5")

let flag = 0

btn.addEventListener("click",function(){
    if(flag == 0){

        stranger.innerHTML = " friend"
        stranger.style.color= "green"
        btn.innerHTML = " Remove Friend"
        flag = 1
    }
    else{
         stranger.innerHTML = " stranger"
        stranger.style.color= "red"
        btn.innerHTML = " add Friend"
        flag = 0
    }
})