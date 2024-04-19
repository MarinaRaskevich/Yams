let listDices = [];
let counterDivSelected = 0;

// liste finale
let keptDices = [];

let domRelatedDices = [];

let containerThrow = document.getElementsByClassName("container-throw")[0];

let containerSelected =
  document.getElementsByClassName("container-selected")[0];

let containerSelectDice = containerSelected.querySelectorAll("div");

let numberThrow = 0;
let stepsNumber = 13;
let numberOfnone;

let throwButton = document.getElementById("throw");

throwButton.addEventListener("click", throwDices);

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
