// let count_value = document.getElementById("count-value")
// let btn_decrease = document.querySelector(".btn-decrease")
// let btn_reset = document.querySelector(".btn-reset")
// let btn_increase = document.querySelector(".btn-increase")

// let count = 0

// btn_decrease.addEventListener("click", function(){
//     count --
//     count_value.textContent  = count
//     count_value.style.color = getColor()
// })
// btn_increase.addEventListener("click", function(){
//     count ++
//     count_value.textContent  = count
//     count_value.style.color = getColor()
// })
// btn_reset.addEventListener("click", function(){
//     count = 0
//     count_value.textContent  = count
//     count_value.style.color = getColor()
// })

let btns = document.querySelectorAll(".btn")
let count_value = document.getElementById("count-value")
let count = 0

btns.forEach(function(btn){
    btn.addEventListener("click", function(e){
        let currentBtn = e.currentTarget.classList
        // console.log(currentBtn)
        if(currentBtn.contains("btn-increase")){
            count++
            count_value.textContent = count
            count_value.style.color = getColor()
        }
        else if(currentBtn.contains("btn-decrease")){
            count--
            count_value.textContent = count
            count_value.style.color = getColor()
        }else{
            count = 0
            count_value.textContent = count
            count_value.style.color = getColor()
        }
    })
})

function getColor(){
    if(count_value.textContent < 0){
        color = "red"
    }else if(count_value.textContent > 0){
        color = "green"
    }else{
        color = "white"
    }
    return color;
}
console.log('bankai');
