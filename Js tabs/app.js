let tabs = [
    {
        id: 1,
        category: "History",
        img: "learning-3245793.jpg",
        context: `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Explicabo modi ad quibusdam magni deserunt? Itaque hic quam 
                    laudantium dicta rerum? Voluptates fuga consequatur nemo culpa non magni ab iste eius!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt quibusdam ea doloribus nam officia maxime? Corrupti, 
                    veritatis rerum culpa beatae eveniet quaerat? Inventore fugit ducimus, 
                    asperiores consectetur odit commodi perspiciatis?`
    },
    {
        id: 2,
        category: "Vision",
        img: "robot-6753999.jpg",
        context: `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Dicta doloribus hic ipsam molestias mollitia, omnis in doloremque ipsum 
                    esse obcaecati voluptatibus aperiam consequuntur inventore sit consequatur 
                    ad quia molestiae veniam! Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                    Quidem earum saepe nihil quae dolor cumque laudantium, amet corporis officiis incidunt 
                    velit sed cum animi reprehenderit itaque expedita, fugiat dolorum deserunt.`
    },
    {
        id: 3,
        category: "Goals",
        img: "light-bulb-4514505.jpg",
        context: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat, 
                    amet architecto est illum hic voluptates veniam rem ea voluptatum autem similique 
                    quia sit minima nam sapiente deleniti mollitia qui sequi. Lorem ipsum dolor sit amet 
                    consectetur adipisicing elit.
                    Et eveniet atque dolorem enim temporibus sunt eligendi obcaecati non quasi quam quis, aliquid harum 
                    deserunt saepe vero similique sit laborum iusto?`
    }
]

const header = document.querySelector(".category")
const container = document.querySelector(".context")
const text = document.querySelector(".text")
const btns = document.querySelectorAll(".btn")
const image = document.querySelector(".img")
btns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        let categori = e.currentTarget.dataset.filter
        let filterArr = tabs.filter(function (item) {
            let filterCat = item.category
            if (filterCat === categori) {
                btns.forEach(function(btn2){
                    if(btn2 == e.currentTarget){
                        e.currentTarget.classList.add("active")
                    }else{
                        btn2.classList.remove("active")
                    }
                })
                image.src = item.img
                return item
            }
        })
        displayItems(filterArr)
    })
})
window.addEventListener("DOMContentLoaded", () => {
    header.textContent = tabs[0].category
    text.textContent = tabs[0].context
    image.src = tabs[0].img
})
function displayItems(arr) {
    let tabsArr = arr.map(function (item) {
        return `<h5 class="category">${item.category}</h5>
                <p class="text">${item.context}</p>`
    })
    container.innerHTML = tabsArr
}