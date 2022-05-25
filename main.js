let color = "black";
let click = true;

function populateBoard(size) {
    let board = document.querySelector(".board");
    let squares = board.querySelectorAll('div');
    squares.forEach((div) => div.remove());
    board.style.gridTemplateColumns = `repeat(${size} , 1fr)`;
    board.style.gridTemplateRows = `repeat(${size} , 1fr)`;

    /*attaches an event handler to an element
    mouseover is the event and colorSquare is my function*/
    let amount = size * size
    for (let i = 0; i < amount; i++) {
        let square = document.createElement("div");
        square.addEventListener("mouseover", colorSquare);
        square.style.backgroundColor = "white";
        board.insertAdjacentElement("beforeend", square);
    }
}

populateBoard(16);

//if the number size is less than 2 or greater than 100 it'll display an error
function changeSize(input) {
    if (input >= 2 && input <= 100) {
        document.querySelector(".error").style.display = "none";
        populateBoard(input);
    } else {
        document.querySelector(".error").style.display = "flex";
    }
}

/*hsl is hue(360), saturation(100%) and lightness(50%)
and Math.random returns a random number*/
function colorSquare() {
    if (click) {
    if(color === "random"){
        this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
    }else {
        this.style.backgroundColor = color;
        }
    }
}

function changeColor(choice)    {
    color = choice;
}

function resetBoard() {
    let board = document.querySelector(".board");
    let squares = board.querySelectorAll('div');
    squares.forEach((div) => div.style.backgroundColor = 'white');
}

//click on and off the board so the color doesn't follow
document.querySelector('body').addEventListener('click', () => {
    click = !click;
})