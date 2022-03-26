const cellElements = document.querySelectorAll("[data-cell]");
const winningMessageElement = document.getElementById("winningMessage");
const restartButton = document.getElementById("restartButton");
const winningMessageTextElement = document.querySelector(
  "[data-winning-message-text]"
);
const X_CLASS = "x";
const CIRCLE_CLASS = "circle";
const WINNING_COMBOS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
let circleTurn;

startGame();

function startGame() {
  circleTurn = false;
  cellElements.forEach((cell) => {
    cell.addEventListener("click", handleClick, { once: true });
  });
}

// function endGame(draw) {
//   if (draw) {
//    winningMessageElement.innerText = 'Draw'
//   } else {
//    winningMessageTextElement.innerText = '${circle ? "O" : "X"} Won'
//   }
// }
function isDraw() {
return [...cellElements].every(cell => {
 return cell.classList.contains(X_CLASS) || 
 cell.classList.contains(CIRCLE_CLASS)
})
}
function handleClick(e) {
  const cell = e.target;
  const currentClass = circleTurn ? CIRCLE_CLASS : X_CLASS;
  cellMark(cell, currentClass);
  if (checkWin(currentClass)) {
    endGame(false);
  } else if (isDraw()) {
   endGame(true)
  } else{
     takeTurns();
  }

}

function cellMark(cell, currentClass) {
  cell.classList.add(currentClass);
}

function takeTurns() {
  circleTurn = !circleTurn;
}

function checkWin(currentClass) {
  return WINNING_COMBOS.some((combination) => {
    return combination.every((index) => {
      return cellElements[index].classList.contains(currentClass);
    });
  });
}
