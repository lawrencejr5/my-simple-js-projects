const btn = document.querySelector(".open-modal")
const modal = document.querySelector(".modal")
const modal_container = document.querySelector(".modal-container")
const close_btn = document.querySelector(".close")

btn.addEventListener("click", function(){
    modal_container.style.translate = "0%"    
})
close_btn.addEventListener("click", function(){
    modal_container.style.translate = "250%"
})