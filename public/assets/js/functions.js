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
    let numberOfnone = 5 - document.querySelectorAll(".container-selected p").length;
    for (let i = 0; i < numberOfnone; ++i) {
        listDices.push(Math.floor(Math.random() * 6) + 1);
    }
}

let diceChoice = () => {

    //PARSE LE TABLEAU DE DES
    listDices.forEach((dice,j) => {
        let p = document.createElement("p");
        p.setAttribute("data-dice-value", dice);
        p.innerText = dice;
        //AJOUT DU Dé DANS LE DOM
        containerThrow.appendChild(p);

        p.addEventListener("click", (e) => {
            console.log(e.target.getAttribute("data-dice-value"));
            e.target.classList.add("d-none");

            domRelatedDices.push(e.target.innerText);

            //TABLEAU QUI PERMET DE GARDER LE FIL AU VU DE LA MANIPULATION DES VALEURS
            //DU DOM QUI S'EFFACE
            keptDices.push(e.target.innerText)

            console.log(keptDices);

            console.log(domRelatedDices);
            domRelatedDices.forEach((dice) => {
                let p = document.createElement("p");
                p.setAttribute("data-value", dice);
                p.innerText = dice;
                containerSelected.appendChild(p);
                domRelatedDices = [];
            })
        })

    });

}

firstThrow();