let mobile_nav = document.querySelector(".mobile-nav")
let bar = document.querySelector(".bars")

bar.addEventListener("click", function(){
    mobile_nav.classList.toggle("open-nav")
})