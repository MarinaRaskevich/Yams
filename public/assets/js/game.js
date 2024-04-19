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

//changer
let throwButton = document.querySelector("#throw");
throwButton.addEventListener("click", throwAct); // -> Suivre la logique des fonctions
