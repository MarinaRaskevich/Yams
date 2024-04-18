let firstThrow = () => {
  for (i = 1; i < 6; i++) {
    listDes.push(Math.floor(Math.random() * 6) + 1);
  }
  return listDes;
};

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
  e.targer.classList.remove(e.target.classList[1]);
  e.targer.classList.add("savedResult");
  points[cellOperation] = 3; //changer 3
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

const array = [4, 6, 3, 5, 2];
console.log(array);
console.log("Total 1", calculatePoints("total1", array));
console.log("Total 2", calculatePoints("total2", array));
console.log("Total 3", calculatePoints("total3", array));
console.log("Total 4", calculatePoints("total4", array));
console.log("Total 5", calculatePoints("total5", array));
console.log("Total 6", calculatePoints("total6", array));
console.log("brelan", calculatePoints("brelan", array));
console.log("square", calculatePoints("square", array));
console.log("full", calculatePoints("full", array));
console.log("smallSuite", calculatePoints("smallSuite", array));
console.log("bigSuite", calculatePoints("bigSuite", array));
console.log("yams", calculatePoints("yams", array));
console.log("chance", calculatePoints("chance", array));
