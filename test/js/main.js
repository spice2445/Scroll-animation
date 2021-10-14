let parallax = document.getElementById("parallax")
let block = document.querySelector("#block")
let colorCicle = document.getElementById("color")
let textParallax = document.getElementById("text")
let btn = document.getElementById("btn")

function startParallax(){
    block.addEventListener("mousemove", (oleg)=>{
        parallax.style.transform = `rotateX(${oleg.clientY/20}deg) rotateY(${-35+oleg.clientX/20}deg)`
        textParallax.style.transform = `rotateX(${oleg.clientY/50}deg) rotateY(${-35+oleg.clientX/50}deg)`
        colorCicle.style.opacity = 1;
        block.style.background = "#2d01f7"
        block.style.borderRadius = "30px"
        block.style.boxShadow = "0 0 100px #2d01f7"
        if(type == false){
            parallax.style.transform = `rotateX(0deg) rotateY(0deg)`
            textParallax.style.transform = `rotateX(0deg) rotateY(0deg)`
            colorCicle.style.opacity = 0;
            block.style.background = "#000"
            block.style.borderRadius = "0"
            block.style.boxShadow = "none"
            btn.innerHTML = "Launch toy"
        }
    })
}
function endParallax(){
    block.addEventListener("mouseleave", (oleg)=>{
        parallax.style.transform = 0
        colorCicle.style.opacity = 0;
        block.style.background = "#000"
        block.style.borderRadius = 0
        block.style.boxShadow = "none"
    })
}
let type = false
btn.addEventListener("click", (event)=>{
    event.preventDefault()
    type = !type
    if(type == true){
        startParallax()
        endParallax()
    }
})
