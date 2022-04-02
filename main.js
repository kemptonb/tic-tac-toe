//Create Grid IFFE
(function createGrid() {
    //Header
    const head = document.createElement("h1");
    head.textContent = "TIC - TAC - TOE";
    document.body.appendChild(head);


    //Gameboard
    let Gameboard = {
        gameboard: ["", "", "", "", "", "", "", "", ""],
        checker: [true, true, true, true, true, true, true, true, true]
    };

    let playerOne = {
        sign: "X",
        turn: true,
    };

    let playerTwo = {
        sign: "O",
        turn: false,
    };

    let gameFlow = {

        restart: () => {
            Gameboard.gameboard = ["", "", "", "", "", "", "", "", ""]
            Gameboard.checker = [true, true, true, true, true, true, true, true, true]
            gameFlow.start();
            gameFlow.startStatus = false;
        },

        scoreGame: () => {
            
            if(Gameboard.checker.filter(Boolean)){
                
            }
        },

        startStatus: true,

        start: () => {
            footer.textContent = `N E W - G A M E :  P L A Y E R - O N E`;
            gameFlow.turnTracker();

            //DOM Marker Placement
            document.querySelectorAll(".box-0").forEach(item => {
                item.addEventListener("click", event => {
                    if(Gameboard.checker[0] === true){
                    Gameboard.gameboard[0] = gameFlow.playerSignProp;
                    item.textContent = Gameboard.gameboard[0];
                    gameFlow.switchPlayer();
                    gameFlow.turnTracker();
                    Gameboard.checker[0] = false;
                    gameFlow.scoreGame();
                    }
                })
            });
            document.querySelectorAll(".box-1").forEach(item => {
                item.addEventListener("click", event => {
                    if(Gameboard.checker[1] === true){
                    Gameboard.gameboard[1] = gameFlow.playerSignProp;
                    item.textContent = Gameboard.gameboard[1];
                    gameFlow.switchPlayer();
                    gameFlow.turnTracker();
                    Gameboard.checker[1] = false;
                    gameFlow.scoreGame();
                    }
                })
            });
            document.querySelectorAll(".box-2").forEach(item => {
                item.addEventListener("click", event => {
                    if(Gameboard.checker[2] === true){
                    Gameboard.gameboard[2] = gameFlow.playerSignProp;
                    item.textContent = Gameboard.gameboard[2];
                    gameFlow.switchPlayer();
                    gameFlow.turnTracker();
                    Gameboard.checker[2] = false;
                    gameFlow.scoreGame();
                    }
                })
            });
            document.querySelectorAll(".box-3").forEach(item => {
                item.addEventListener("click", event => {
                    if(Gameboard.checker[3] === true){
                    Gameboard.gameboard[3] = gameFlow.playerSignProp;
                    item.textContent = Gameboard.gameboard[3];
                    gameFlow.switchPlayer();
                    gameFlow.turnTracker();
                    Gameboard.checker[3] = false;
                    gameFlow.scoreGame();
                    }
                })
            });
            document.querySelectorAll(".box-4").forEach(item => {
                item.addEventListener("click", event => {
                    if(Gameboard.checker[4] === true){
                    Gameboard.gameboard[4] = gameFlow.playerSignProp;
                    item.textContent = Gameboard.gameboard[4];
                    gameFlow.switchPlayer();
                    gameFlow.turnTracker();
                    Gameboard.checker[4] = false;
                    gameFlow.scoreGame();
                    }
                })
            });
            document.querySelectorAll(".box-5").forEach(item => {
                item.addEventListener("click", event => {
                    if(Gameboard.checker[5] === true){
                    Gameboard.gameboard[5] = gameFlow.playerSignProp;
                    item.textContent = Gameboard.gameboard[5];
                    gameFlow.switchPlayer();
                    gameFlow.turnTracker();
                    Gameboard.checker[5] = false;
                    gameFlow.scoreGame();
                    }
                })
            });
            document.querySelectorAll(".box-6").forEach(item => {
                item.addEventListener("click", event => {
                    if(Gameboard.checker[6] === true){
                    Gameboard.gameboard[6] = gameFlow.playerSignProp;
                    item.textContent = Gameboard.gameboard[6];
                    gameFlow.switchPlayer();
                    gameFlow.turnTracker();
                    Gameboard.checker[6] = false;
                    gameFlow.scoreGame();
                    }
                })
            });
            document.querySelectorAll(".box-7").forEach(item => {
                item.addEventListener("click", event => {
                    if(Gameboard.checker[7] === true){
                    Gameboard.gameboard[7] = gameFlow.playerSignProp;
                    item.textContent = Gameboard.gameboard[7];
                    gameFlow.switchPlayer();
                    gameFlow.turnTracker();
                    Gameboard.checker[7] = false;
                    gameFlow.scoreGame();
                    }
                })
            });
            document.querySelectorAll(".box-8").forEach(item => {
                item.addEventListener("click", event => {
                    if(Gameboard.checker[8] === true){
                    Gameboard.gameboard[8] = gameFlow.playerSignProp;
                    item.textContent = Gameboard.gameboard[8];
                    gameFlow.switchPlayer();
                    gameFlow.turnTracker();
                    Gameboard.checker[8] = false;
                    gameFlow.scoreGame();
                    }
                })
            });
            document.querySelectorAll(".box-9").forEach(item => {
                item.addEventListener("click", event => {
                    if(Gameboard.checker[9] === true){
                    Gameboard.gameboard[9] = gameFlow.playerSignProp;
                    item.textContent = Gameboard.gameboard[9];
                    gameFlow.switchPlayer();
                    gameFlow.turnTracker();
                    Gameboard.checker[9] = false;
                    gameFlow.scoreGame();
                    }
                })
            });
        }, // End gameFLow.start property

        turnTracker: () => {
            if (playerOne.turn === true) {
                gameFlow.playerSignProp = playerOne.sign;
            } else if (playerTwo.turn === true) {
                gameFlow.playerSignProp = playerTwo.sign;
            }

        },  //end gameFlow.turnTracker

        playerSignProp: "",

        switchPlayer: () => {
            if (playerOne.turn === true) {
                playerOne.turn = false;
                playerTwo.turn = true;
                footer.textContent = "P L A Y E R - T W O";
            } else if (playerTwo.turn === true) {
                playerTwo.turn = false;
                playerOne.turn = true;
                footer.textContent = "P L A Y E R - O N E";
            }
        }
    };//End gameFlow object

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

    //Click container to Start Game
    document.querySelectorAll(".container").forEach(item => {
        item.addEventListener("click", event => {
            //Start Game on Container Click
            if (gameFlow.startStatus === true) {
                gameFlow.start();
                gameFlow.startStatus = false;
            }
        })
    });

    //Footer
    const footer = document.createElement("h3");
    footer.textContent = "CLICK - TO - START - GAME";
    document.body.appendChild(footer);

    //Reset background header text to blank slate
    const inst = document.createElement("h4");
    inst.textContent = "R E S E T - (CTRL + R)";
    document.body.appendChild(inst);
    const reset = document;

    reset.addEventListener("keydown", (event) => {
        if (event.ctrlKey && event.key === 'r') {
            document.querySelectorAll(".write").forEach(item => {
                gameFlow.restart();
            })
        }
    });

})();


