function katon() {
    const btns = document.querySelectorAll(".question-btn")
    btns.forEach(function (btn) {
        btn.addEventListener("click", function (e) {
            const target = e.currentTarget.parentElement.parentElement
            target.classList.toggle("question-contain")
        })
    })
}

function bankai() {
    const question_container = document.querySelectorAll(".question-container")
    question_container.forEach(function (question) {
        let btns = question.querySelectorAll(".question-btn")
        btns.forEach(function (btn) {
            btn.addEventListener("click", function () {
                question.classList.toggle("question-contain")
                question_container.forEach(function (item) {
                    if (item != question) {
                        item.classList.remove("question-contain")
                    }
                })
            })
        })
    })
}
bankai()
// katon()