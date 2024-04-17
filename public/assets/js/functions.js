let firstThrow = () => {
    for(i = 1; i < 6; i++){
        listDes.push(Math.floor(Math.random() * 6) + 1)
    }
    showValues();
}

let secondThrow = () => {
    listDes = [];
    let numberOfnone = 5 - containerThrow.querySelectorAll(".d-none").length;
    console.log(numberOfnone);
    for (let i = 0; i < numberOfnone; ++i) {
        listDes.push(Math.floor(Math.random() * 6) + 1);
    }
    containerThrow.innerHTML = "";
    showValues();
    console.log(domRelatedDes);
}

let showValues = () => {

    listDes.forEach((de,j) => {
        let p = document.createElement("p");
        p.setAttribute("data-value", de)
        p.innerText = de;
        //AJOUT DU Dé DANS LE DOM
        containerThrow.appendChild(p);

        p.addEventListener("click", (e) => {
            console.log(e.target.getAttribute("data-value"));
            e.target.classList.add("d-none");
            domRelatedDes.push(e.target.innerText);
        })

    });
}

let selectedDe = () => {

}

let full = () => {

}

let littleSuite = () => {

}

let suite = () => {

}

let chance = () => {

}

let square = () => {
    
}

let brelan = () => {

}

let yams = () => {

}

firstThrow();