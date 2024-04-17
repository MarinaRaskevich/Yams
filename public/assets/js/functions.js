let throwDes = () => {
    for(i = 1; i < 6; i++){
        listDes.push(Math.floor(Math.random() * 6) + 1)
    }
    listDes.forEach((de,j) => {
        console.log(document.getElementById(`de-${++j}`));
        document.getElementById(`de-${j}`).innerText = de
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