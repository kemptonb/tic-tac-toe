//Header
const head = document.createElement("h1");
head.textContent = "TIC TAC TOE";
document.body.appendChild(head);

//Container
const container = document.createElement("div");
container.classList.add("container");
document.body.appendChild(container);

//Create grid
createGrid();

//Create grid function
function createGrid() {
    for (let i = 0; i < 9; i++) {
        const row = document.createElement("div");
        row.classList.add("row-div");
        container.appendChild(row); 
    }
    markGrid();
}

//On Clock Play
function markGrid() {
    document.querySelectorAll(".row-div").forEach(item => {
        item.addEventListener("click", event => {
            //item.style.cssText = "background-color: black;"
            item.textContent = "X";
        })
    });
}

//Reset background header text to blank slate
const inst = document.createElement("h3");
inst.textContent = "PRESS CTRL + R TO RESET";
document.body.appendChild(inst);

const reset = document;

reset.addEventListener("keydown", (event) => {
    if (event.ctrlKey && event.key === 'r') {
        document.querySelectorAll(".write").forEach(item => {
            item.style.cssText = "background-color: white;"
        })
    }
});


let Gameboard = {
    gameboard: []
}

let playerOne = {

}

let playerTwo = {

}

let gameFlow = {

}

