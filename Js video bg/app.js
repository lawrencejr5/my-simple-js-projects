const video = document.querySelector(".vid-container")
const btns = document.querySelectorAll(".btn")
const preloader = document.querySelector(".preloader-container")
btns.forEach(function(btn){
    btn.addEventListener("click", (e)=>{
        if(e.currentTarget.dataset.id == "pause"){
            video.pause()
            e.currentTarget.parentElement.classList.toggle("pp")
        }else if(e.currentTarget.dataset.id == "play"){
            let btn_container = e.currentTarget.parentElement.classList
            if(btn_container.contains("pp")){
                btn_container.remove("pp")
            }
            video.play()
        }else{
            video.load()
            let btn_container = e.currentTarget.parentElement.classList
            if(btn_container.contains("pp")){
                btn_container.remove("pp")
            }
        }
    })
})
window.addEventListener("load", function(){
    setTimeout(function(){
        preloader.style.display = "none"
    }, 1000)
    // console.log(this.prompt("Are u a fan of one peice"))
})
// window.addEventListener("dblclick", function(){
//     video.pause()
// })