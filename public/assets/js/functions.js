let firstThrow = () => {
    for(i = 1; i < 6; i++){
        listDices.push(Math.floor(Math.random() * 6) + 1)
    }
    diceChoice();
}

let secondThrow = () => {
    let numberOfnone = 5 - document.querySelectorAll(".d-none").length;
    for (let i = 0; i < numberOfnone; ++i) {
        listDices.push(Math.floor(Math.random() * 6) + 1);
    }
}

let thirdThrow = () => {
    let numberOfnone = 5 - document.querySelectorAll(".container-selected img").length;
    for (let i = 0; i < numberOfnone; ++i) {
        listDices.push(Math.floor(Math.random() * 6) + 1);
    }
}

let counterDivSelected = 0;

let diceChoice = () => {

    //PARSE LE TABLEAU DE DES
    listDices.forEach((dice,j) => {
        let img = document.createElement("img");
        img.classList.add("dice");
        img.setAttribute("data-dice-value", dice);
        img.setAttribute("src", `public/assets/img/${dice}.png`)
        //AJOUT DU Dé DANS LE DOM
        containerThrow.appendChild(img);

        img.addEventListener("click", (e) => {
            console.log(e.target.getAttribute("data-dice-value"));
            e.target.classList.add("d-none");

            domRelatedDices.push(e.target.dataset.diceValue);

            //TABLEAU QUI PERMET DE GARDER LE FIL AU VU DE LA MANIPULATION DES VALEURS
            //DU DOM QUI S'EFFACE
            keptDices.push(e.target.dataset.diceValue);

            domRelatedDices.forEach((dice) => {
                let img = document.createElement("img");
                img.classList.add("dice");
                img.setAttribute("data-value", dice);
                img.setAttribute("src", `public/assets/img/${dice}.png`);
                containerSelectDice[counterDivSelected].appendChild(img);
                domRelatedDices = [];
            })
            counterDivSelected++
        })

    });

}

firstThrow();