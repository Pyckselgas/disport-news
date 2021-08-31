let state = 0


window.addEventListener('scroll', function () {
    let maxHeight = document.querySelector("body").scrollHeight
    let currentYO = pageYOffset
    if (maxHeight - currentYO < 800) {
        let infinite = document.querySelector(".test").innerHTML;
        document.querySelector(".infinite-scroll").innerHTML += infinite;
    }
    if (state === 0) {
        setTimeout(Modal, 17000)
    }
    state = 1
})

function Modal() {
    let width = window.outerWidth
    if (width > 767) {
        document.getElementById("modal").classList.add('show')
        let close = document.getElementById("modal-close")
        close.addEventListener('click', function () {
            document.getElementById("modal").classList.remove('show')
        })
    }
}

let test = history.pushState("https://www.google.com/search?client=opera&q=jvh&sourceid=opera&ie=UTF-8&oe=UTF-8")
console.log(test)