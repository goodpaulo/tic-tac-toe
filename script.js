const square = document.querySelectorAll('.square');
const displayContainer = document.querySelector("#display-container");
const reset = document.querySelector('#reset');

const gameBoard = (() => {
    
    // const addX = (count) => square.forEach(square => square.addEventListener('click', () => {
    //     if(count == 1 || count == 3){
    //         square.textContent = "X";
    //         console.log(count);
    //         count++;
    //         console.log(count);
    //     }
    // }))

    // const addO = (count) => square.forEach(square => square.addEventListener('click', () => {
    //     if(count == 2 || count == 4){
    //         square.textContent = "O";
    //         console.log(count);
    //         count++
    //     }
    // }))

    // return {addX, addO};
    const square0 = document.querySelector('#zero');
    const square1 = document.querySelector('#one');
    const square2 = document.querySelector('#two');
    const square3 = document.querySelector('#three');
    const square4 = document.querySelector('#four');
    const square5 = document.querySelector('#five');
    const square6 = document.querySelector('#six');
    const square7 = document.querySelector('#seven');
    const square8 = document.querySelector('#eight');
    
    let gameArray = ["", "", "", "", "", "", "", "", ""];

    const fillBoard = () => {
        square0.textContent = gameArray[0];
        square1.textContent = gameArray[1];
        square2.textContent = gameArray[2];

        square3.textContent = gameArray[3];
        square4.textContent = gameArray[4];
        square5.textContent = gameArray[5];

        square6.textContent = gameArray[6];
        square7.textContent = gameArray[7];
        square8.textContent = gameArray[8];
    }

    const addX = () => {
        square0.addEventListener("click", () =>{

            if(gameArray[0] == 'X' || gameArray[0] == 'O'){
                console.log('no');
                return;
            }

            else{gameArray[0] = "X";
            fillBoard();
            addO();
            }
        })

        square1.addEventListener("click", () =>{
            gameArray[1] = "X";
            fillBoard();
            addO();
        })

        square2.addEventListener("click", () =>{
            gameArray[2] = "X";
            fillBoard();
            addO();
        })

        square3.addEventListener("click", () =>{
            gameArray[3] = "X";
            fillBoard();
            addO();
        })

        square4.addEventListener("click", () =>{
            gameArray[4] = "X";
            fillBoard();
            addO();
        })

        square5.addEventListener("click", () =>{
            gameArray[5] = "X";
            fillBoard();
            addO();
        })

        square6.addEventListener("click", () =>{
            gameArray[6] = "X";
            fillBoard();
            addO();
        })

        square7.addEventListener("click", () =>{
            gameArray[7] = "X";
            fillBoard();
            addO();
        })

        square8.addEventListener("click", () =>{
            gameArray[8] = "X";
            fillBoard();
            addO();
        })
    }

    const addO = () => {
        square0.addEventListener("click", () =>{
            gameArray[0] = "O";
            fillBoard();
            addX();
        })

        square1.addEventListener("click", () =>{
            gameArray[1] = "O";
            fillBoard();
            addX();
        })

        square2.addEventListener("click", () =>{
            gameArray[2] = "O";
            fillBoard();
            addX();
        })

        square3.addEventListener("click", () =>{
            gameArray[3] = "O";
            fillBoard();
            addX();
        })

        square4.addEventListener("click", () =>{
            gameArray[4] = "O";
            fillBoard();
            addX();
        })

        square5.addEventListener("click", () =>{
            gameArray[5] = "O";
            fillBoard();
            addX();
        })

        square6.addEventListener("click", () =>{
            gameArray[6] = "O";
            fillBoard();
            addX();
        })

        square7.addEventListener("click", () =>{
            gameArray[7] = "O";
            fillBoard();
            addX();
        })

        square8.addEventListener("click", () =>{
            gameArray[8] = "O";
            fillBoard();
            addX();
        })
    }

    
    const gameCondition = document.createElement("p");

    let isX = true;

    let counter = 0;

    const square0GetXY = () =>{
            if(isX == true){
                gameArray[0] = "X";
                fillBoard();
                isX = false;
                counter += 1;
                console.log(counter);
                tieGame();
                winGame();
            }
            else if(isX == false){
                gameArray[0] = "O";
                fillBoard();
                isX = true;
                counter += 1;
                console.log(counter);
                console.log(gameArray);
                tieGame();
                winGame();
            }
        }

        const square1GetXY = () =>{
            if(isX == true){
                gameArray[1] = "X";
                fillBoard();
                isX = false;
                counter += 1;
                console.log(counter);
                tieGame();
                winGame();
            }
            else if(isX == false){
                gameArray[1] = "O";
                fillBoard();
                isX = true;
                counter += 1;
                console.log(counter);
                console.log(gameArray);
                tieGame();
                winGame();
            }
        }

        const square2GetXY = () =>{
            if(isX == true){
                gameArray[2] = "X";
                fillBoard();
                isX = false;
                counter += 1;
                console.log(counter);
                tieGame();
                winGame();
            }
            else if(isX == false){
                gameArray[2] = "O";
                fillBoard();
                isX = true;
                counter += 1;
                console.log(counter);
                console.log(gameArray);
                tieGame();
                winGame();
            }
        }

        const square3GetXY = () =>{
            if(isX == true){
                gameArray[3] = "X";
                fillBoard();
                isX = false;
                counter += 1;
                console.log(counter);
                tieGame();
                winGame();
            }
            else if(isX == false){
                gameArray[3] = "O";
                fillBoard();
                isX = true;
                counter += 1;
                console.log(counter);
                console.log(gameArray);
                tieGame();
                winGame();
            }
        }

        const square4GetXY = () =>{
            if(isX == true){
                gameArray[4] = "X";
                fillBoard();
                isX = false;
                counter += 1;
                console.log(counter);
                tieGame();
                winGame();
            }
            else if(isX == false){
                gameArray[4] = "O";
                fillBoard();
                isX = true;
                counter += 1;
                console.log(counter);
                console.log(gameArray);
                tieGame();
                winGame();
            }
        }

        const square5GetXY = () =>{
            if(isX == true){
                gameArray[5] = "X";
                fillBoard();
                isX = false;
                counter += 1;
                console.log(counter);
                tieGame();
                winGame();
            }
            else if(isX == false){
                gameArray[5] = "O";
                fillBoard();
                isX = true;
                counter += 1;
                console.log(counter);
                console.log(gameArray);
                tieGame();
                winGame();
            }
        }

        const square6GetXY = () =>{
            if(isX == true){
                gameArray[6] = "X";
                fillBoard();
                isX = false;
                counter += 1;
                console.log(counter);
                tieGame();
                winGame();
            }
            else if(isX == false){
                gameArray[6] = "O";
                fillBoard();
                isX = true;
                counter += 1;
                console.log(counter);
                console.log(gameArray);
                tieGame();
                winGame();
            }
        }

        const square7GetXY = () =>{
            if(isX == true){
                gameArray[7] = "X";
                fillBoard();
                isX = false;
                counter += 1;
                console.log(counter);
                tieGame();
                winGame();
            }
            else if(isX == false){
                gameArray[7] = "O";
                fillBoard();
                isX = true;
                counter += 1;
                console.log(counter);
                console.log(gameArray);
                tieGame();
                winGame();
            }
        }

        const square8GetXY = () =>{
            if(isX == true){
                gameArray[8] = "X";
                fillBoard();
                isX = false;
                counter += 1;
                console.log(counter);
                tieGame();
                winGame();
            }
            else if(isX == false){
                gameArray[8] = "O";
                fillBoard();
                isX = true;
                counter += 1;
                console.log(counter);
                console.log(gameArray);
                tieGame();
                winGame();
            }
        }
        
    const add = () => {
        
          /*  square.forEach(square => square.addEventListener('click', () => {
                if(isX == true){
                    square.textContent = "X";
                    isX = false;
                }

                else if(isX == false){
                    square.textContent = "O";
                    isX = true;
                }
        }, {once : true}));
        */

       /* if(isX == true){
            square0.addEventListener("click", () =>{
                gameArray[0] = "X";
                fillBoard();
            })
        }
        */

        

        square0.addEventListener("click", square0GetXY, {once : true})

        square1.addEventListener("click", square1GetXY, {once : true})

        square2.addEventListener("click", square2GetXY, {once : true})

        square3.addEventListener("click", square3GetXY, {once : true})

        square4.addEventListener("click", square4GetXY, {once : true})

        square5.addEventListener("click", square5GetXY, {once : true})

        square6.addEventListener("click", square6GetXY, {once : true})

        square7.addEventListener("click", square7GetXY, {once : true})

        square8.addEventListener("click", square8GetXY, {once : true})
    }

    const tieGame = () => {
        if(counter == 9){
            console.log("tie game");
            gameCondition.textContent = "Tie game";
            displayContainer.appendChild(gameCondition);
        }

        else{
            console.log("keep playing");
            console.log(counter);
        }
    }

    const winGame = () => {
        if((gameArray[0] == 'X' && gameArray[1] == 'X' && gameArray[2] == 'X')||
           (gameArray[3] == 'X' && gameArray[4] == 'X' && gameArray[5] == 'X')||
           (gameArray[6] == 'X' && gameArray[7] == 'X' && gameArray[8] == 'X')||
           (gameArray[0] == 'X' && gameArray[3] == 'X' && gameArray[6] == 'X')||
           (gameArray[1] == 'X' && gameArray[4] == 'X' && gameArray[7] == 'X')||
           (gameArray[2] == 'X' && gameArray[5] == 'X' && gameArray[8] == 'X')||
           (gameArray[0] == 'X' && gameArray[4] == 'X' && gameArray[8] == 'X')||
           (gameArray[2] == 'X' && gameArray[4] == 'X' && gameArray[6] == 'X')){
            gameCondition.textContent = "X WINS";
            displayContainer.appendChild(gameCondition);
            console.log("X wins");
            square0.removeEventListener("click", square0GetXY);
            square1.removeEventListener("click", square1GetXY);
            square2.removeEventListener("click", square2GetXY);
            square3.removeEventListener("click", square3GetXY);
            square4.removeEventListener("click", square4GetXY);
            square5.removeEventListener("click", square5GetXY);
            square6.removeEventListener("click", square6GetXY);
            square7.removeEventListener("click", square7GetXY);
            square8.removeEventListener("click", square8GetXY);
        }

        else if((gameArray[0] == 'O' && gameArray[1] == 'O' && gameArray[2] == 'O')||
           (gameArray[3] == 'O' && gameArray[4] == 'O' && gameArray[5] == 'O')||
           (gameArray[6] == 'O' && gameArray[7] == 'O' && gameArray[8] == 'O')||
           (gameArray[0] == 'O' && gameArray[3] == 'O' && gameArray[6] == 'O')||
           (gameArray[1] == 'O' && gameArray[4] == 'O' && gameArray[7] == 'O')||
           (gameArray[2] == 'O' && gameArray[5] == 'O' && gameArray[8] == 'O')||
           (gameArray[0] == 'O' && gameArray[4] == 'O' && gameArray[8] == 'O')||
           (gameArray[2] == 'O' && gameArray[4] == 'O' && gameArray[6] == 'O')){
            gameCondition.textContent = "O WINS";
            displayContainer.appendChild(gameCondition);
            console.log("O wins");
            square0.removeEventListener("click", square0GetXY);
            square1.removeEventListener("click", square1GetXY);
            square2.removeEventListener("click", square2GetXY);
            square3.removeEventListener("click", square3GetXY);
            square4.removeEventListener("click", square4GetXY);
            square5.removeEventListener("click", square5GetXY);
            square6.removeEventListener("click", square6GetXY);
            square7.removeEventListener("click", square7GetXY);
            square8.removeEventListener("click", square8GetXY);
        }

        else{
            console.log("no winner");
        }
    }

    reset.addEventListener('click', () => {
        gameArray = ["", "", "", "", "", "", "", "", ""]
        gameBoard.fillBoard();
        add();
        counter = 0;
        gameCondition.textContent = "";
        isX = true;
    })

    return{
        fillBoard,
        addX,
        addO,
        isX,
        add,
        tieGame,
        winGame
    };
})();

const Player = () => {
    const addX = gameBoard.addX;
    const addO = gameBoard.addO;

    return{
        addX,
        addO
    };
}

const PlayerX = Player();
const PlayerO = Player();

const playGame = (() => {
    gameBoard.fillBoard();
    /*const round = () => {
        if(counter == 1){
            PlayerX.addX();
            counter ++;
            console.log(counter);
        }

        if(counter == 2){
            PlayerO.addO();
            counter++;
            console.log(counter);
        }
    }

    return{
        counter,
        round
    }
    */

    

    const round = () => {
        gameBoard.add();

    }

    return{
        round,
    }
    
})();

gameBoard.fillBoard();
playGame.round();
//playGame.round();
