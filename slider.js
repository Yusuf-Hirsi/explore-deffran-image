let slider = document.querySelector("#slider")
let nextBtn =document.querySelector("#nextBtn")
let priviewBtn = document.querySelector("#prevBtn")
let end = document.querySelector("#End")
let images = [
"https://t3.ftcdn.net/jpg/06/93/22/06/240_F_693220603_no0jYJyV9nai4AKBtTV1uZB1HphZdTna.jpg",
"https://img.freepik.com/free-photo/futuristic-half-robot-tiger_23-2151558871.jpg?t=st=1721129497~exp=1721133097~hmac=7c841f8e57cbd96ea20bfd9f3e61500e77b1e098231cd4b7eedb698d29bb03e6&w=826",
"https://img.freepik.com/free-photo/vividly-colored-hummingbird-nature_23-2151495426.jpg?t=st=1721129923~exp=1721133523~hmac=8e18b08a41c4bf7da8080b8dcf5c4a2d553336f50f09b7c5ee31adc69b6d2446&w=996",
"https://img.freepik.com/free-photo/vividly-colored-hummingbird-natural-environment_23-2151495403.jpg?t=st=1721129985~exp=1721133585~hmac=b881b6848accc1ce605871d00034b966ff498fdb9888d99715cc70807812ae6e&w=996",
"https://img.freepik.com/premium-photo/zebra-kruger-park-south-africa_1028938-112459.jpg?w=740",
"https://img.freepik.com/premium-photo/red-bird-with-white-beak-stands-grass_666353-574.jpg?w=740"
]
let indexnumber =0
slider.src = images[indexnumber]
nextBtn.addEventListener("click",function(){
    if(indexnumber <images.length - 1){
    indexnumber++
    slider.src = images[indexnumber]
}
if(indexnumber == images.length -1){
  end.innerHTML = "END"
  end.style.backgroundColor = "white"
  end.style.color  = "black"
}
})
priviewBtn.addEventListener("click",function(){
    if(indexnumber> 0){
    indexnumber --
    slider.src =images[indexnumber]
}
})

