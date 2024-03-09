const container = document.querySelector(".container")
const nav_container = document.querySelector(".nav-container")
const backToTop = document.querySelector(".backToTop")
const openNavBtn = document.querySelector(".open-nav-btn")
const navHeight = nav_container.getBoundingClientRect().height
const links = document.querySelectorAll(".link")
links.forEach(function(link){
    link.addEventListener("click", function(e){
        e.currentTarget.parentElement.parentElement.parentElement.classList.remove("mobile-nav")
    })
})
openNavBtn.addEventListener("click", function () {
    nav_container.classList.toggle("mobile-nav")
})
window.addEventListener("scroll", function () {
    const scrollHeight = window.pageYOffset
        if (scrollHeight > navHeight) {
            nav_container.classList.add("fixed")
        } else {
            nav_container.classList.remove("fixed")
        }
    if (scrollHeight > 500) {
        backToTop.classList.add("vBackToTop")
    } else {
        backToTop.classList.remove("vBackToTop")
    }
})