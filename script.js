let image = document.querySelector(".starbucks_cup")
let back = document.querySelector(".circle")

function changeImage(address){
    image.src = address
}

function changeBackground(color) {
    back.style.background = color
}