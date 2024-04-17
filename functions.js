let throwDes = () => {
    for(i = 1; i < 6; i++){
        listDes.push(Math.floor(Math.random() * 6) + 1)
    }
    listDes.forEach((de,j) => {
        // TEST
        console.log(document.getElementById(`de-${++j}`));

        //AJOUT DU Dé DANS LE DOM
        document.getElementById(`de-${j}`).innerText = de

        //AJOUT DE DUN EVENT SUR CHAQUE ELEMENT
        document.getElementById(`de-${j}`).addEventListener("click", (e) => {
            domRelatedDes.push(e.target.innerText);
            document.getElementById(`de-${j}`).remove(e.target);
            document.getElementById(`de-${j}-selected`).innerText = e.target.innerText;    

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

throwDes();