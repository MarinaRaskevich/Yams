let firstThrow = () => {
  for (i = 1; i < 6; i++) {
    listDes.push(Math.floor(Math.random() * 6) + 1);
  }
  console.log(listDes);
};

//Ajouter des chifres identiques dans une sélection aléatoire de dés
const sumDuplicates = (value, array) => {
  let count = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] == value) {
      count++;
    }
  }
  return count * value;
};

// Vérification des valeurs pour yams
const yamsScore = (array) => {
  if (array.every((number, i, arr) => number == arr[0])) {
    return 50;
  } else {
    return 0;
  }
};

// Calcul de la valeur pour Chance
const chanceScore = (array) => {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
};

firstThrow();
console.log(chanceScore(listDes));

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
      break;
    case "square":
      break;
    case "full":
      break;
    case "smallSuite":
      break;
    case "bigSuite":
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
