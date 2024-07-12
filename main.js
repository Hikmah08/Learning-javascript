///document.getElementById("count-el").innerText = 5
/*
let myAge = 16
let humanDogRatio = 7
let myDogAge = myAge * humanDogRatio
console.log(myDogAge)

let bonusPoints = 50
bonusPoints = bonusPoints + 50
console.log(bonusPoints)
bonusPoints = bonusPoints - 75
console.log(bonusPoints)
bonusPoints = bonusPoints + 45
console.log(bonusPoints)
*/
let count= document.getElementById("count-el")
let incrementBtn = 0
function increment() {
    incrementBtn = incrementBtn + 1
    count.innerText = incrementBtn
    console.log(incrementBtn)
}
increment()

let Multiples = document.getElementById("count-el")
let fourIncrement = 0
function fourMultiples(){
    fourIncrement = fourIncrement + 4
    Multiples.innerText = fourIncrement
    console.log(fourIncrement)
}
fourMultiples()


