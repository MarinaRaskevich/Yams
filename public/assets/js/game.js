let listDices = [];

let keptDices = [];

let domRelatedDices = [];

let containerThrow = document.getElementsByClassName("container-throw")[0];

let containerSelected =
  document.getElementsByClassName("container-selected")[0];

let containerSelectDice = containerSelected.querySelectorAll("div");

console.log(containerSelectDice);

let numberThrow = 0;

let throwButton = document.getElementById("throw");

throwButton.addEventListener("click", (e) => {
  listDices = [];
  if (numberThrow > 0) {
    thirdThrow();
    containerThrow.querySelectorAll("img").forEach((element) => {
      keptDices.push(element.dataset.diceValue);
    });
    document.querySelector(".container-throw").classList.add("d-none");
    // alert("Stop the GAME")
  } else {
    secondThrow();
    numberThrow++;
  }
  containerThrow.innerHTML = "";
  diceChoice();
  console.log(keptDices);
});

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

let listDes = [];

let arrayInGame;

let resultCells = document.querySelectorAll(".result");

//Objet de points finals
let points = {
  total1: 0,
  total2: 0,
  total3: 0,
  total4: 0,
  total5: 0,
  total6: 0,
  brelan: 0,
  square: 0,
  full: 0,
  smallSuite: 0,
  bigSuite: 0,
  yams: 0,
  chance: 0,
};

//Objet de points dynamiques
let pointsInGame = {
  total1: 0,
  total2: 0,
  total3: 0,
  total4: 0,
  total5: 0,
  total6: 0,
  bonus: 0,
  brelan: 0,
  square: 0,
  full: 0,
  smallSuite: 0,
  bigSuite: 0,
  yams: 0,
  chance: 0,
};
