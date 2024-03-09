const naruto = [
    {
        id: 1,
        name: "Uchiha Madara",
        jutsu: "Katon, Goukamekaku",
        img: "images/1161252.jpg",
        quote: "Wake up to reality, nothing ever goes as planned in this accursed world. The longer you live, the more u will realize that the only things that throughly exist in this reality are merely pain sufferingg and futility"
    },
    {
        id: 2,
        name: "Uchiha Itachi",
        jutsu: "Katon, Goukakyu no jutsu",
        img: "images/4757785.jpg",
        quote: "Hate me, loathe me, despise me, for that is the only way you can kill me"
    },
    {
        id: 3,
        name: "Pain",
        jutsu: "Shinra tensei",
        img: "images/wallpaperflare.com_wallpaper.jpg",
        quote: "Feel pain, accept pain, contemplate pain and know pain. Those of u who do not know pain will never understand true peace. I would never forget the pain Yahiko felt. And now, let the world know pain!"
    }
]

let img = document.getElementById("image")
let character_name = document.getElementById("name")
let jutsu = document.getElementById("jutsu")
let quote = document.getElementById("quote")
let currentItem = 0
let btns = document.querySelectorAll(".btn")

window.addEventListener("DOMContentLoaded", function(){
    btns.forEach(function(btn){
        btn.addEventListener("click", function(e){
            currentTarget = e.currentTarget.classList
            let naruto_items_length = naruto.length - 1
            if(currentTarget.contains("next-btn")){
                currentItem++
                if(currentItem > naruto_items_length){
                    currentItem = 0
                }
                getItem(currentItem)
            }
            else if(currentTarget.contains("previous-btn")){
                currentItem--
                if(currentItem < 0){
                    currentItem = naruto_items_length
                }
                getItem(currentItem)
            }
            else if(currentTarget.contains("random")){
                currentItem = randomNumber(naruto)
                getItem(currentItem)
            }
        })
    })

})
const getItem = function(c){
    let naruto_items = naruto[c]
    img.src = naruto_items.img
    character_name.textContent = naruto_items.name
    jutsu.textContent = naruto_items.jutsu
    quote.textContent = naruto_items.quote
}
const randomNumber = function(arr){
    let num = Math.floor(Math.random() * arr.length)
    return num
}