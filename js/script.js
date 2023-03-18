const grid = document.querySelector(".grid");
let square;
let difficulty = document.getElementById("difficulty");
const playBtn = document.querySelector(".btn");

//richiamo funzione al click
playBtn.addEventListener("click" , function(){
    createGrid(difficulty.value);
});

//funzione che crea la griglia in base alla difficoltà
function createGrid(difficulty) {
    grid.innerHTML = "";
    let numSquares;

    if(difficulty === "easy") {
        numSquares = 100;
        squareClass = "easy";
    } else if(difficulty === "medium") {
        numSquares = 81;
        squareClass = "medium";
    } else if(difficulty === "hard") {
        numSquares = 49;
        squareClass = "hard";
    }

    for(let i = 0; i < numSquares; i++) {
        square = document.createElement("div");
        square.classList.add("box", squareClass);
        square.innerHTML = `<span>${i + 1}</span>`;
        grid.appendChild(square);
    }
}