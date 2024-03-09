const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
const weekdays = ["Sunday", "Monday", "Tuesday", "Wednessday", "Thursday", "Friday", "Saturday", "Sunday"]

const dDay = document.querySelector(".d-day")
const container = document.querySelector(".container")
const daysContainer = document.querySelector(".days")
const hrsContainer = document.querySelector(".hrs")
const minsContainer = document.querySelector(".mins")
const secsContainer = document.querySelector(".secs")
let futureDate = new Date(2023, 10, 23, 7, 0, 0, 0)
    // let futureDate = new Date(2023, 9, 10, 3, 35 , 10, 10)

let day = weekdays[futureDate.getDay()]
let date = futureDate.getDate()
let month = months[futureDate.getMonth()]
let year = futureDate.getFullYear()
let hour = futureDate.getHours()
hour = addZero(hour)
let minute = futureDate.getMinutes()
minute = addZero(minute)
let seconds = futureDate.getSeconds()


function getRemainingTime(){
    let currentTime = new Date().getTime()
    let futureTime = futureDate.getTime()

    let t = futureTime - currentTime

    let oneday = 24 * 3600 * 1000
    let onehr = 3600 * 1000
    let onemin = 60 * 1000
    let onesec = 1000
    
    let daysRemaining = t/oneday
    let hrsRemaining = (t%oneday)/onehr
    let minsRemaining = (t%onehr)/onemin
    let secsRemaining = (t%onemin)/onesec

    daysRemaining = addZero(Math.floor(daysRemaining))
    hrsRemaining = addZero(Math.floor(hrsRemaining))
    minsRemaining = addZero(Math.floor(minsRemaining))
    secsRemaining = addZero(Math.floor(secsRemaining))

    daysContainer.textContent = daysRemaining
    hrsContainer.textContent = hrsRemaining
    minsContainer.textContent = minsRemaining
    secsContainer.textContent = secsRemaining

    if(t < 0){
        clearInterval(getRemainingTime)
        container.innerHTML = `<a target="_blank" href="../../bankai/index.html"><button class="activate">Activate Bankai</button></a>`
    }
}

setInterval(getRemainingTime, 1000)
getRemainingTime()
window.addEventListener("load", function(){
    let ap;
    if(hour >= 12){
        ap = "pm"
    }else{
        ap = "am"
    }
    dDay.innerHTML = `Release date is on ${day}, ${date} ${month} ${year} ${hour}:${minute}${ap}`
})
function addZero(n){
    if(n < 10){
        n = `0${n}`
    }
    return n
}