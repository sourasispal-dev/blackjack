// let player={
//     Name:"Pal",
//     chips:200
// }
let sum=0
let card=[]
let messege=""
let messegeEl=document.getElementById("messege-el")
let sumEl=document.getElementById("sum-el")
let cardEl= document.getElementById("card-el")
// let playerEl=document.getElementById("player-el")
// playerEl.textContent=player.Name+":"+"  "+"Rs-"+player.chips

let win=false
let isAlive=false


function getRandomNumber(){
    return Math.floor(Math.random()*13)+1
}

// function getRandomNumber(){
//     let randomNumber=Math.floor(Math.random()*13)+1

//     if(randomNumber>10){
//         return 10
//     }
//     else if(randomNumber===1){
//         return 11
//     }
//     else{
//         return randomNumber
//     }
// }


function startGame(){
    isAlive=true
    let firstCard= getRandomNumber()
    let secondCard=getRandomNumber()
    sum=firstCard + secondCard
    card=[firstCard,secondCard]
    renderGame()
}

function renderGame() {

    cardEl.textContent="Cards: "

    for(let i=0;i<card.length;i++){
        cardEl.textContent+=card[i]+" "
    }
    
    sumEl.textContent="Sum: "+ sum
    
if(sum<21){
    messege="Do you want another card?"
}
else if(sum===21){
    messege="You won the match"
    win=true
}
else{
    messege="You lost the match"
    isAlive=false
}

messegeEl.textContent=messege

}

function newCard(){

    if(isAlive===true && win===false){
        let newCard=getRandomNumber()
        sum+=newCard
        card.push(newCard)
        console.log(card)
        renderGame()
    }   
}

