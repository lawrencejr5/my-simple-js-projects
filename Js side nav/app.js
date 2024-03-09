let side_nav = document.querySelector(".side-nav")
let bars = document.querySelector(".bars")
let close_img = "img/Close.png"
let bars_img = "img/bars.png"

bars.addEventListener("click", function(){
    side_nav.classList.toggle("open-side-nav")
    // bars.src = close_img
    if(bars.src == bars_img){
        console.log("bars")
    }
    else if(bars.src == close_img){
        bars.src = bars_img
        console.log("bars")
    }
})