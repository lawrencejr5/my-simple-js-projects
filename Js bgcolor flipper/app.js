let body = document.body
let color_value = document.getElementById("color-value")
let btn_changer = document.getElementById("btn-changer")
let colors = ['#000', 'green', 'rgb(24, 119, 242)', 'red', 'teal', 'tomato']

btn_changer.addEventListener("click", function(){
    let randomNumber = Math.floor(Math.random() * colors.length)
    body.style.backgroundColor = colors[randomNumber]
    color_value.innerHTML = colors[randomNumber]
})