let listDices = [];

let keptDices = [];

let domRelatedDices = [];

let containerThrow = document.getElementsByClassName("container-throw")[0];

let containerSelected = document.getElementsByClassName("container-selected")[0];

let containerSelectDice = containerSelected.querySelectorAll("div");

console.log(containerSelectDice);

let numberThrow = 0;

document.getElementById("throw").addEventListener('click', (e) => {
    listDices = [];
    if(numberThrow > 0){
        thirdThrow();
        containerThrow.querySelectorAll("img").forEach(element => {
            keptDices.push(element.dataset.diceValue);
        });
        document.querySelector(".container-throw").classList.add("d-none")
        // alert("Stop the GAME")
    }else{
        secondThrow();
        numberThrow++;
    }
    containerThrow.innerHTML = "";
    diceChoice();
    console.log(keptDices);
})

// document.getElementById("valid").addEventListener("click", () => {
//     containerThrow.querySelectorAll(".d-none").forEach(element => {
//         element.remove();
//     });
//     if(!keptDices.length){
//         containerThrow.querySelectorAll("p").forEach(element => {
//             keptDices += element.dataset.diceValue;
//         });
//     }else{
//         containerThrow.querySelectorAll("p ").forEach(element => {
//             keptDices.push(element.dataset.diceValue)
//         });
//     }
//     console.log(keptDices);
// })

