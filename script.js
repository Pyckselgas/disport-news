let state = 0
let i = 0
let arrayStorage = document.querySelector(".arrayStorage")
let phpServerResultObj = JSON.parse(arrayStorage.innerHTML)
let test2 = document.querySelector(".test2")
let test3 = document.querySelector(".test3")
let teaserImg = document.querySelector(".teaser-img")



 function test(){
     teaserImg.setAttribute("src", dataManagment("img"))
     console.log("ok")
 }
 test()
function dataManagment(type){
    let result = phpServerResultObj[i]
    i++
    return result[type]
}



// window.addEventListener('scroll', function () {
//     let maxHeight = document.querySelector("body").scrollHeight
//     let currentYO = pageYOffset
//     console.log(maxHeight - currentYO)
//     if (maxHeight - currentYO < 1000) {
//         console.log(infinite)
//         let infinite = '<?php $infinite?>'
//         document.querySelector(".infinite-scroll").innerHTML += infinite;
//     }
//     if (state === 0) {
//         setTimeout(Modal, 17000)
//     }
//     state = 1
// })

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
