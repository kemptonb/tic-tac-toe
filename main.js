//Gameboard
let Gameboard = {
    gameboard: [0, 0, 0, 0, 0, 0, 0, 0, 0]
}

let playerOne = {

}

let playerTwo = {

}

let gameFlow = {

}

//Header
const head = document.createElement("h1");
head.textContent = "TIC TAC TOE";
document.body.appendChild(head);



//Create Grid IFFE
(function createGrid() {

    //Container
    const container = document.createElement("div");
    container.classList.add("container");
    document.body.appendChild(container);

    //Div Squares
    for (let i = 0; i <= 9; i++) {
        const row = document.createElement("div");
        row.classList.add("row-div");
        row.classList.add(`box-${i}`);
        row.textContent = Gameboard.gameboard[i];
        container.appendChild(row);
    }

    document.querySelectorAll(".box-0").forEach(item => {
        item.addEventListener("click", event => {
            Gameboard.gameboard[0] = "X";
            item.textContent = Gameboard.gameboard[0];
        })
    });
    document.querySelectorAll(".box-1").forEach(item => {
        item.addEventListener("click", event => {
            Gameboard.gameboard[1] = "X";
            item.textContent = Gameboard.gameboard[1];
        })
    });
    document.querySelectorAll(".box-2").forEach(item => {
        item.addEventListener("click", event => {
            Gameboard.gameboard[2] = "X";
            item.textContent = Gameboard.gameboard[2];
        })
    });
    document.querySelectorAll(".box-3").forEach(item => {
        item.addEventListener("click", event => {
            Gameboard.gameboard[3] = "X";
            item.textContent = Gameboard.gameboard[3];
        })
    });
    document.querySelectorAll(".box-4").forEach(item => {
        item.addEventListener("click", event => {
            Gameboard.gameboard[4] = "X";
            item.textContent = Gameboard.gameboard[4];
        })
    });
    document.querySelectorAll(".box-5").forEach(item => {
        item.addEventListener("click", event => {
            Gameboard.gameboard[5] = "X";
            item.textContent = Gameboard.gameboard[5];
        })
    });
    document.querySelectorAll(".box-6").forEach(item => {
        item.addEventListener("click", event => {
            Gameboard.gameboard[6] = "X";
            item.textContent = Gameboard.gameboard[6];
        })
    });
    document.querySelectorAll(".box-7").forEach(item => {
        item.addEventListener("click", event => {
            Gameboard.gameboard[7] = "X";
            item.textContent = Gameboard.gameboard[7];
        })
    });
    document.querySelectorAll(".box-8").forEach(item => {
        item.addEventListener("click", event => {
            Gameboard.gameboard[8] = "X";
            item.textContent = Gameboard.gameboard[8];
        })
    });
    document.querySelectorAll(".box-9").forEach(item => {
        item.addEventListener("click", event => {
            Gameboard.gameboard[9] = "X";
            item.textContent = Gameboard.gameboard[9];
        })
    });
})();

// //On Clock Play
// function markGrid() {
//     document.querySelectorAll(".row-div").forEach(item => {
//         item.addEventListener("click", event => {
//             //item.style.cssText = "background-color: black;"
//             item.textContent = "X";
//         })
//     });
// }

// //Reset background header text to blank slate
// const inst = document.createElement("h3");
// inst.textContent = "PRESS CTRL + R TO RESET";
// document.body.appendChild(inst);

// const reset = document;

// reset.addEventListener("keydown", (event) => {
//     if (event.ctrlKey && event.key === 'r') {
//         document.querySelectorAll(".write").forEach(item => {
//             item.style.cssText = "background-color: white;"
//         })
//     }
// });





