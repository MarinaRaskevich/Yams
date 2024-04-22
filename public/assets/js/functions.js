//Ajouter des chifres identiques dans une sélection aléatoire de dés (pour Total 1, 2 etc.)
const sumDuplicates = (value, array) => {
  let count = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] == value) {
      count++;
    }
  }
  return count * value;
};

// Vérification et calcul de la valeur pour "Yams"
const yamsScore = (array) => {
  if (array.every((number, i, arr) => number == arr[0])) {
    return 50;
  } else {
    return 0;
  }
};

// Vérification et calcul de la valeur pour "Chance"
const chanceScore = (array) => {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
};

//Vérifiez si la valeur peut être dans une sélection aléatoire de dés
const isInArray = (value, array) => {
  return array.indexOf(value) > -1;
};

//Vérification et calcul de la valeur pour "Grande Suite"
const bigSuiteScore = (array) => {
  if (
    isInArray(2, array) &&
    isInArray(3, array) &&
    isInArray(4, array) &&
    isInArray(5, array) &&
    isInArray(6, array)
  ) {
    return 40;
  } else {
    return 0;
  }
};

//Vérification et calcul de la valeur pour "Petite Suite"
const smallSuiteScore = (array) => {
  if (
    isInArray(1, array) &&
    isInArray(2, array) &&
    isInArray(3, array) &&
    isInArray(4, array) &&
    isInArray(5, array)
  ) {
    return 30;
  } else {
    return 0;
  }
};

// Affiche un tableau d'objets avec la fréquence des mêmes valeurs parmi les dés
const verifyFrequency = (array) => {
  let valuesFrequency = [];
  let count = 0;
  for (let n = 0; n < array.length; n++) {
    array.forEach((number) => {
      if (array[n] == number) {
        count++;
      }
    });
    let valueAndHisFrequency = {
      value: array[n],
      count: count,
    };
    valuesFrequency.push(valueAndHisFrequency);
    count = 0;
  }
  return valuesFrequency;
};

//Vérification et calcul de la valeur pour "Brelan"
const brelanScore = (array) => {
  const valuesFrequency = verifyFrequency(array);
  if (valuesFrequency.find((el) => el.count >= 3)) {
    let valueFrequency = valuesFrequency.find(
      (el) => el.count >= 3 && el.count <= 5
    );
    return valueFrequency.value * 3;
  } else {
    return 0;
  }
};

//Vérification et calcul de la valeur pour "Carré"
const squareScore = (array) => {
  const valuesFrequency = verifyFrequency(array);
  if (valuesFrequency.find((el) => el.count >= 4)) {
    let valueFrequency = valuesFrequency.find(
      (el) => el.count >= 4 && el.count <= 5
    );
    return valueFrequency.value * 4;
  } else {
    return 0;
  }
};

//Vérification et calcul de la valeur pour "Full"
const fullScore = (array) => {
  const valuesFrequency = verifyFrequency(array);
  const brelan = valuesFrequency.find((el) => el.count == 3) ? true : false;
  const pair = valuesFrequency.find((el) => el.count == 2) ? true : false;

  if (brelan && pair) {
    return 25;
  } else {
    return 0;
  }
};

// Fonction principale de calcul de chaque opération
const calculatePoints = (operation, distValues) => {
  let total;
  switch (operation) {
    case "total1":
      total = sumDuplicates(1, distValues);
      break;
    case "total2":
      total = sumDuplicates(2, distValues);
      break;
    case "total3":
      total = sumDuplicates(3, distValues);
      break;
    case "total4":
      total = sumDuplicates(4, distValues);
      break;
    case "total5":
      total = sumDuplicates(5, distValues);
      break;
    case "total6":
      total = sumDuplicates(6, distValues);
      break;
    case "brelan":
      total = brelanScore(distValues);
      break;
    case "square":
      total = squareScore(distValues);
      break;
    case "full":
      total = fullScore(distValues);
      break;
    case "smallSuite":
      total = smallSuiteScore(distValues);
      break;
    case "bigSuite":
      total = bigSuiteScore(distValues);
      break;
    case "yams":
      total = yamsScore(distValues);
      break;
    case "chance":
      total = chanceScore(distValues);
      break;
  }
  return total;
};

// Ajouter un bonus
const addBonus = (points) => {
  let totalOperationsSum =
    points.total1 +
    points.total2 +
    points.total3 +
    points.total4 +
    points.total5 +
    points.total6;

  if (totalOperationsSum > 63) {
    points.bonus = 35;
  } else {
    points.bonus = 0;
  }
};

// La somme finale de tous les points
const totalScore = (points) => {
  let sum = 0;
  for (let point of Object.values(points)) {
    sum += point;
  }
  return sum;
};

//Enregistrer le résultat sélectionné par l'utilisateur dans l'objet final
const saveResult = (e) => {
  removeListenerFromCelles();
  let cellOperation = e.target.classList[1];
  e.target.classList.remove(e.target.classList[0]);
  e.target.classList.add("savedResult");
  e.target.classList.add("text-danger");
  points[cellOperation] = parseInt(e.target.innerHTML);
  resultCells = document.querySelectorAll(".result");
  resultCells.forEach((resultCell) => {
    resultCell.innerText = "";
  });
  initialiseGame();
};

const initialiseGame = () => {
  stepsNumber--;
  console.log(stepsNumber);
  throwButton.classList.remove("disabled");
  numberThrow = 0;
  listDices = [];
  keptDices = [];
  counterDivSelected = 0;
  containerSelectDice.forEach((div) => {
    div.innerHTML = "";
  });
  if(stepsNumber === 12){

    // triggerNewGame();
    
    endGame();

  }else{
    throwButton.classList.remove("disabled");
    numberThrow = 0;
    listDices = [];
    keptDices = [];
    counterDivSelected = 0;
    containerSelectDice.forEach((div) => {
      div.innerHTML = "";
    });
  }
  containerThrow.innerHTML = "";
};

//Ajouter des écouteurs d'événements aux cellules du tableau des résultats
const addListenerToCells = () => {
  resultCells.forEach((resultCell) => {
    resultCell.addEventListener("click", saveResult);
  });
};

//Supprimer des écouteurs d'événements aux cellules du tableau des résultats
const removeListenerFromCelles = () => {
  resultCells.forEach((resultCell) => {
    resultCell.removeEventListener("click", saveResult);
  });
};

//Ajouter des points d'opérations calculés au tableau
const addValueInCell = () => {
  for (const property in pointsInGame) {
    const element = document.querySelector(`#${property}`);
    if (!element.classList.contains("savedResult")) {
      element.innerHTML = pointsInGame[property];
    }
  }
};

// Mettre à jour les données d'objet de points dynamiques
const updatePointsInGame = (array) => {
  for (const property in pointsInGame) {
    if (property != "bonus") {
      pointsInGame[property] = calculatePoints(`${property}`, array);
    } else {
      pointsInGame[property] = 0;
    }
  }
  addValueInCell(pointsInGame);
};

let firstThrow = () => {
  for (i = 1; i < 6; i++) {
    listDices.push(Math.floor(Math.random() * 6) + 1);
  }
  diceChoice();
  updatePointsInGame(listDices);
};

let secondThrow = () => {
  for (let i = 0; i <= numberOfDice.length - 1; ++i) {
    listDices.push(Math.floor(Math.random() * 6) + 1);
  }
  initialiseContainerSelected();
  diceChoice();
  updatePointsInGame([...listDices, ...keptDices]);
};

let thirdThrow = () => {
  for (let i = 0; i <= numberOfDice.length - 1; ++i) {
    listDices.push(Math.floor(Math.random() * 6) + 1);
  }
  diceChoice();
  updatePointsInGame([...listDices, ...keptDices]);
};

const initialiseContainerSelected = () => {
  counterDivSelected = 0;
  containerSelectDice.forEach((div, i) => {
    div.innerHTML = "";
    if (keptDices[i] != undefined) {
      let img = document.createElement("img");
      img.classList.add("dice");
      img.setAttribute("data-value", keptDices[i]);
      img.setAttribute("src", `public/assets/img/${keptDices[i]}.png`);
      img.addEventListener("click", backToContainerThrow);
      div.appendChild(img);
      counterDivSelected++;
    }
  });
};

const keepDices = (e) => {
  let value = parseInt(e.target.dataset.value);
  containerThrow.removeChild(e.target);

  //TABLEAU QUI PERMET DE GARDER LE FIL AU VU DE LA MANIPULATION DES VALEURS
  //DU DOM QUI S'EFFACE
  keptDices.push(value);

  let img = addDiceImage(value);
  img.addEventListener("click", backToContainerThrow);
  containerSelectDice[counterDivSelected].appendChild(img);
  counterDivSelected++;
};

const addDiceImage = (value) => {
  let img = document.createElement("img");
  img.classList.add("dice");
  img.setAttribute("data-value", value);
  img.setAttribute("src", `public/assets/img/${value}.png`);
  return img;
};

const backToContainerThrow = (e) => {
  if (numberThrow == 1) {
    let value = parseInt(e.target.dataset.value);
    let img = addDiceImage(value);
    img.addEventListener("click", keepDices);
    containerThrow.appendChild(img);
    e.target.parentElement.innerText = "";
    let index = keptDices.indexOf(parseInt(value));
    if (index !== -1) {
      keptDices.splice(index, 1);
    }
    initialiseContainerSelected();
  } else if (numberThrow == 2) {
    let value = parseInt(e.target.dataset.value);
    let index = keptDices.indexOf(value);
    if (index !== -1) {
      keptDices.splice(index, 1);
    }
    listDices.push(value);
    e.target.parentElement.innerText = "";
    let img = document.createElement("img");
    img.classList.add("dice");
    img.setAttribute("data-dice-value", value);
    img.setAttribute("src", `public/assets/img/${value}.png`);
    img.addEventListener("click", keepDices);
    containerThrow.appendChild(img);
  } else if (numberThrow == 3) {
  }
};

let diceChoice = () => {
  //PARSE LE TABLEAU DE DES
  listDices.forEach((dice) => {
    let img = document.createElement("img");
    img.classList.add("dice");
    img.setAttribute("data-value", dice);
    img.setAttribute("src", `public/assets/img/${dice}.png`);
    //AJOUT DU Dé DANS LE DOM
    containerThrow.appendChild(img);
    img.addEventListener("click", keepDices);
  });
};

const throwDices = () => {
  addListenerToCells();
  numberOfDice = containerThrow.querySelectorAll(".dice");
  console.log(numberOfDice);
  containerThrow.innerHTML = "";
  listDices = [];

  if (numberThrow == 0) {
    firstThrow();
  } else if (numberThrow == 1) {
    secondThrow();
  } else if (numberThrow == 2) {
    thirdThrow();
    throwButton.classList.add("disabled");
  }
  numberThrow++;
};

const triggerNewGame = () => {
  keptDices = [];
  listDices = [];
  numberThrow = 0;
  containerThrow.innerHTML = "";
  containerSelected.querySelectorAll(".dice-container").forEach((diceImage) => {
    diceImage.innerHTML = "";
  });
  resultCells.forEach((resultCell) => {
    resultCell.innerText = "";
  });
};

//LOCALSTORAGE

let partieNumber = 0;

const addScoreToLocalStorage = (score) => {
  const partResult = {
    partie: partieNumber,
    score: score,
  };
  if (localStorage.getItem("userData") !== null) {
    const partResults = JSON.parse(localStorage.getItem("userData"));
    partResults.push(partResult);
    localStorage.setItem("userData", JSON.stringify(partResults));
  } else {
    const partResults = [];
    partResults.push(partResult);
    localStorage.setItem("userData", JSON.stringify(partResults));
  }
};

const endGame = () => {
  stepsNumber = 13;
  addBonus(points);
  let total = totalScore(points);
  console.log(total);
  addScoreToLocalStorage(total);
  insertScoreInArray();
}

const insertScoreInArray = () => {
  let local = localStorage.getItem("userData");
  console.log(local)
}

