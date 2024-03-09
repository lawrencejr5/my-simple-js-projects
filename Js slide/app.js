const btns = document.querySelectorAll(".btn")
const slides = document.querySelectorAll(".slide")
let count = 0
window.addEventListener("DOMContentLoaded", function(){
    slides.forEach(function(slide, index){
        slide.style.left = `${index * 100}%`
    })
})
btns.forEach(function(btn){
    btn.addEventListener("click", function(e){
        dataAttr = e.currentTarget.dataset.attr
        if(dataAttr == "next"){
            count++
            slides.forEach(function(slide){
                if(count > slides.length - 1){
                    count = 0
                }else{
                    count = count
                }
                slide.style.transform = `translateX(-${count * 100}%)`
            })
        
        }
        else if(dataAttr == "prev"){
            count--
            slides.forEach(function(slide){
                if(count < 0){
                    count = slides.length - 1
                }else{
                    slide.style.transform = `translate(-${count * 100}%)`
                }
            })
        }
    })
})