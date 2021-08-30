let state = 0
let img = document.querySelector('.phpimg').innerHTML
let title = document.querySelector(".phptitle").innerHTML
let link = document.querySelector(".phplink").innerHTML
console.log("a")



window.addEventListener('scroll', function () {
    let maxHeight = document.querySelector("body").scrollHeight
    let currentYO = pageYOffset
    
    if (maxHeight - currentYO < 800) {
    let infinite = document.querySelector(".test").innerHTML;
    document.querySelector("infinite-scroll").innerHTML += infinite;
    
}
    if(state===0){
        setTimeout(Modal, 999999000)
    }
    state = 1
})
function Modal(){
    document.getElementById("modal").classList.add('show')
    let close = document.getElementById("modal-close")
    close.addEventListener('click', function(){
        console.log("clicked")
        document.getElementById("modal").classList.remove('show')
    })
}