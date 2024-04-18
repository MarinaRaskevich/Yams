let firstThrow = () => {
  for (i = 1; i < 6; i++) {
    listDes.push(Math.floor(Math.random() * 6) + 1);
  }
  console.log(listDes);
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

firstThrow();
console.log(fullScore([3, 3, 3, 4, 2]));

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
