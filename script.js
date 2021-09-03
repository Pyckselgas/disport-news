let state = 0
let i = 0
let arrayStorage = document.querySelector(".arrayStorage")
let phpServerResultObj = JSON.parse(arrayStorage.innerHTML)

let staticTeaserLink0 = document.querySelector(".staticTeaserLink0")// add class to <a> 
let staticTeaserImg0 = document.querySelector(".staticTeaserImg0")
let staticTeaserTitle0 = document.querySelector(".staticTeaserTitle0")

let staticTeaserLink1 = document.querySelector(".staticTeaserLink1")
let staticTeaserImg1 = document.querySelector(".staticTeaserImg1")
let staticTeaserTitle1 = document.querySelector(".staticTeaserTitle1")


window.addEventListener('scroll',function(){
    let maxHeight = document.querySelector("body").scrollHeight
    let currentYO = pageYOffset
    if (maxHeight - currentYO < 1000) {
        teaserBuilder()
    }
})

//  function test(){
//      teaserImg.setAttribute("src", dataManagment("img"))
//      console.log("ok")
//  }
//  test()

function teaserBuilder(){
    let infinite = []
    let teaser = infinite.join(" ")
    document.querySelector(".infiniteContainer").innerHTML += teaser
}

function dataManagment(type){
    let result = phpServerResultObj[i]
    if(type=="title"){
        i++
    }
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
