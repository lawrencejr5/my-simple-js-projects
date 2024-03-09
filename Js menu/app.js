const menu = [
    {
        id: 1,
        wallpaperImg: "img/1161252.jpg",
        wallpaperName: "Uchiha Madara",
        category: "naruto",
        wallpaperDesc: `Lorem ipsum dolor sit amet consectetur adipisicing elit.`
    },
    {
        id: 2,
        wallpaperImg: "img/wallpaperflare.com_wallpaper (11).jpg",
        wallpaperName: "Mugiwara no kaizoku da",
        category: "onePiece",
        wallpaperDesc: `Lorem ipsum dolor sit amet consectetur adipisicing elit.`
    },
    {
        id: 3,
        wallpaperImg: "img/4757790.jpg",
        wallpaperName: "Uzumaki Naruto",
        category: "naruto",
        wallpaperDesc: `Lorem ipsum dolor sit amet consectetur adipisicing elit.`
    },
    {
        id: 4,
        wallpaperImg: "img/robot-6753999.jpg",
        wallpaperName: "Mr Robot",
        category: "others",
        wallpaperDesc: `Lorem ipsum dolor sit amet consectetur adipisicing elit.`
    },
    {
        id: 5,
        wallpaperImg: "img/4757995.jpg",
        wallpaperName: "Juubito",
        category: "naruto",
        wallpaperDesc: `Lorem ipsum dolor sit amet consectetur adipisicing elit.`
    },
    {
        id: 6,
        wallpaperImg: "img/workplace-2303851.jpg",
        wallpaperName: "Workplace Desk",
        category: "others",
        wallpaperDesc: `Lorem ipsum dolor sit amet consectetur adipisicing elit.`
    },
    {
        id: 7,
        wallpaperImg: "img/wallpaperflare.com_wallpaper (8).jpg",
        wallpaperName: "Top Bounties in one piece",
        category: "onePiece",
        wallpaperDesc: `Lorem ipsum dolor sit amet consectetur adipisicing elit.`
    },
    {
        id: 8,
        wallpaperImg: "img/back-to-school-6305131.jpg",
        wallpaperName: "Back to school",
        category: "others",
        wallpaperDesc: `Lorem ipsum dolor sit amet consectetur adipisicing elit.`
    }
]
// displaying items from menu after page loads
document.addEventListener("DOMContentLoaded", function(){
    displayItems(menu)
})
const menuItems = document.querySelector(".menu-items")

// getting unique category buttons from menu arr
const uniqueCats = ['all', ... new Set (menu.map(function(uniqueCat){
    return uniqueCat.category
}))]
const uniqueCatBtns = uniqueCats.map(function(uniqueCatBtn){
    return `<button class="filter-btn" data-filter="${uniqueCatBtn}">${uniqueCatBtn}</button>`
}).join("")

// iterating through the buttons
const btnContainer = document.querySelector(".btn-container")
btnContainer.innerHTML = uniqueCatBtns
let filterBtns = document.querySelectorAll(".filter-btn")

// using buttons to filter menu items
filterBtns.forEach(function(btn){
    btn.addEventListener("click", function(e){
        let category = e.currentTarget.dataset.filter
        let menuCategory = menu.filter(function(item){
            let filterCategory = item.category
            if(filterCategory === category){
                return item
            }
        })
        if(category === "all"){
            displayItems(menu)
        }else{
            displayItems(menuCategory)
        }
    })
})


//  function for displaying menu items using a certain array
function displayItems(menuArr){
    let newMenuItem = menuArr.map(function(item){
        return `
            <div class="menu-item">
                <img src="${item.wallpaperImg}" width="250px" height="auto" alt="" class="wallpaper-img">
                <h4 class="wallpaper-name">${item.wallpaperName}</h4>
                <span class="wallpaper-description">${item.wallpaperDesc} </span>
            </div>
        `
    })
    newMenuItem = newMenuItem.join("")
    menuItems.innerHTML = newMenuItem
}