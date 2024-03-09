const echo = text => console.log(text)
const btns = document.querySelectorAll(".btn")
let value = document.querySelector("#showItem")

btns.forEach((btn)=>{
    btn.addEventListener("click", (e)=>{
        const currentTarget = e.currentTarget
        if(currentTarget.dataset.filter === 'clear'){
            value.value = ''
        }
        else if(currentTarget.dataset.filter === 'delete'){
            value.value = value.value.toString().slice(0,-1)
        }
        else if(currentTarget.dataset.filter === 'equals'){
            value.value += ""
        }else{
            value.value += currentTarget.textContent
        }
    })
})
const calcForm = document.querySelector("#calc-form")
calcForm.addEventListener("submit", getAnswer)
function calculate(){
    const promise = new Promise((resolve, reject)=>{   
        if(value){
            const answer = eval(value.value)
            resolve(answer)
        }else{
            reject("Something went wrong")
        }
    })
    return promise
}
async function getAnswer(e){
    e.preventDefault()
    try{
        const answer = await calculate()
        value.value = answer
    }catch(err){
        value.value = err
    }
}