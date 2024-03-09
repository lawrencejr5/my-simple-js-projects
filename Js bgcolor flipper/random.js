let body = document.body
let btn_changer = document.getElementById("btn-changer")
let color_value = document.getElementById("color-value")
let nav = document.querySelector(".nav")
const hex_values = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F']

btn_changer.addEventListener("click", function(){
    hex = "#"
    for(i=0; i<6; i++){
        randomNumber = getRandomNumber(hex_values.length)
        hex += hex_values[randomNumber]
        body.style.backgroundColor = hex
        color_value.textContent = hex
    }
})
let getRandomNumber = function(length){
    let randomNum = Math.floor(Math.random() * length)
    return randomNum
}
