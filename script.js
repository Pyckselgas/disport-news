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

let staticTeaserLink2 = document.querySelector(".staticTeaserLink2")
let staticTeaserImg2 = document.querySelector(".staticTeaserImg2")
let staticTeaserTitle2 = document.querySelector(".staticTeaserTitle2")

let staticTeaserLink3 = document.querySelector(".staticTeaserLink3")
let staticTeaserImg3 = document.querySelector(".staticTeaserImg3")
let staticTeaserTitle3 = document.querySelector(".staticTeaserTitle3")

let staticTeaserLink4 = document.querySelector(".staticTeaserLink4")
let staticTeaserImg4 = document.querySelector(".staticTeaserImg4")
let staticTeaserTitle4 = document.querySelector(".staticTeaserTitle4")

let staticTeaserLink5 = document.querySelector(".staticTeaserLink5")
let staticTeaserImg5 = document.querySelector(".staticTeaserImg5")
let staticTeaserTitle5 = document.querySelector(".staticTeaserTitle5")

let staticTeaserLink6 = document.querySelector(".staticTeaserLink6")
let staticTeaserImg6 = document.querySelector(".staticTeaserImg6")
let staticTeaserTitle6 = document.querySelector(".staticTeaserTitle6")

let staticTeaserLink7 = document.querySelector(".staticTeaserLink7")
let staticTeaserImg7 = document.querySelector(".staticTeaserImg7")
let staticTeaserTitle7 = document.querySelector(".staticTeaserTitle7")

let staticTeaserLink8 = document.querySelector(".staticTeaserLink7")
let staticTeaserImg8 = document.querySelector(".staticTeaserImg7")
let staticTeaserTitle8 = document.querySelector(".staticTeaserTitle7")

let staticTeaserLink9 = document.querySelector(".staticTeaserLink8")
let staticTeaserImg9 = document.querySelector(".staticTeaserImg8")
let staticTeaserTitle9 = document.querySelector(".staticTeaserTitle8")

let staticTeaserLink10 = document.querySelector(".staticTeaserLink9")
let staticTeaserImg10 = document.querySelector(".staticTeaserImg9")
let staticTeaserTitle10 = document.querySelector(".staticTeaserTitle9")

let staticTeaserLink10 = document.querySelector(".staticTeaserLink10")
let staticTeaserImg10 = document.querySelector(".staticTeaserImg10")
let staticTeaserTitle10 = document.querySelector(".staticTeaserTitle10")

let staticTeaserLink11 = document.querySelector(".staticTeaserLink11")
let staticTeaserImg11 = document.querySelector(".staticTeaserImg11")
let staticTeaserTitle11 = document.querySelector(".staticTeaserTitle11")

let staticTeaserLink12 = document.querySelector(".staticTeaserLink12")
let staticTeaserImg12 = document.querySelector(".staticTeaserImg12")
let staticTeaserTitle12 = document.querySelector(".staticTeaserTitle12")

let staticTeaserLink13 = document.querySelector(".staticTeaserLink13")
let staticTeaserImg13 = document.querySelector(".staticTeaserImg13")
let staticTeaserTitle13 = document.querySelector(".staticTeaserTitle13")

var hardArray = [staticTeaserLink0, staticTeaserImg0, staticTeaserTitle0, staticTeaserLink1, staticTeaserImg1, staticTeaserTitle1,
    staticTeaserLink2, staticTeaserImg2, staticTeaserTitle2, staticTeaserLink3, staticTeaserImg3, staticTeaserTitle3,
    staticTeaserLink4, staticTeaserImg4, staticTeaserTitle4, staticTeaserLink5, staticTeaserImg5, staticTeaserTitle5,
    staticTeaserLink6, staticTeaserImg6, staticTeaserTitle6, staticTeaserLink7, staticTeaserImg7, staticTeaserTitle7,
    staticTeaserLink8, staticTeaserImg8, staticTeaserTitle8, staticTeaserLink9, staticTeaserImg9, staticTeaserTitle9,
    staticTeaserLink10, staticTeaserImg10, staticTeaserTitle10, staticTeaserLink11, staticTeaserImg11, staticTeaserTitle11,
    staticTeaserLink12, staticTeaserImg12, staticTeaserTitle12, staticTeaserLink13, staticTeaserImg13, staticTeaserTitle13]

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
