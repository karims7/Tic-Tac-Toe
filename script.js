/*
VARIABLES
*/
const winningCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
let playerX = [];
let playerO = [];
let currentPlayer = "X";
const board = document.querySelectorAll(".box");
const boardArr = Array.prototype.slice.call(board); //turns the boxes into an array
const resetButton = document.getElementById("reset");
const tryAgainButton = document.getElementById("try-again");
const alertBox = document.querySelector(".final-results");
const alertBoxText = document.querySelector(".final-results > h3");
const indicator = document.querySelector(".turn-indicator > h2");
indicator.textContent = "It is Player X's turn.";

/*
FUNCTIONS
*/
// CLICK BOX
for (let i = 0; i < board.length; i++) {
  board[i].addEventListener(
    "click",
    (tileClick = () => {
      if (currentPlayer === "X") {
        if (board[i].innerText.trim() != "") {
          return;
        }
        playerX.push(i);
        board[i].innerHTML = currentPlayer;
        checkWin(playerX, "X");
        indicator.textContent = "It is Player O's turn.";
        console.log(playerX);
      } else {
        if (board[i].innerText.trim() != "") {
          return;
        }
        playerO.push(i);
        board[i].innerHTML = currentPlayer;
        checkWin(playerO, "O");
        indicator.textContent = "It is Player X's turn.";
        console.log(playerO);
      }
      currentPlayer = currentPlayer === "X" ? "O" : "X"; //player change
    })
  );
}

// CHECK FOR WINNER
const checkWin = (playerArr, player) => {
  for (let i = 0; i < winningCombos.length; i++) {
    for (let j = 0; j < winningCombos[i].length; j++) {
      if (
        playerArr.includes(winningCombos[i][j]) &&
        playerArr.includes(winningCombos[i][j + 1]) &&
        playerArr.includes(winningCombos[i][j + 2])
      ) {
        return (
          (alertBox.style.display = "flex") &&
          (alertBoxText.textContent = "Player " + player + " wins!")
        );
        // TIE CONDITION
      } else if (
        playerArr.length === 5 &&
        playerArr.includes(winningCombos[i][j]) == false &&
        playerArr.includes(winningCombos[i][j + 1]) == false &&
        playerArr.includes(winningCombos[i][j + 2]) == false
      ) {
        return (
          (alertBox.style.display = "flex") &&
          (alertBoxText.textContent = "Game is a tie!")
        );
      }
    }
  }
};

/*
EVENT LISTENERS
*/
// RESET BUTTON
resetButton.addEventListener(
  "click",
  (resetBoard = () => {
    for (let i = 0; i < boardArr.length; i++) {
      boardArr[i].innerHTML = "";
    }
    playerX = [];
    playerO = [];
    alertBoxText.textContent = "";
    alertBox.style.display = "none";
    currentPlayer = "X";
  })
);

// TRY AGAIN BUTTON
tryAgainButton.addEventListener(
  "click",
  (resetBoard = () => {
    for (let i = 0; i < boardArr.length; i++) {
      boardArr[i].innerHTML = "";
    }
    playerX = [];
    playerO = [];
    currentPlayer = "X";
    alertBox.style.display = "none";
  })
);
