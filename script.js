const container = document.querySelector(".container");

const leftPanel = document.createElement("div");
const rightPanel = document.createElement("div");
leftPanel.setAttribute("class", "leftPanel");
rightPanel.setAttribute("class", "rightPanel");
container.appendChild(leftPanel);
container.appendChild(rightPanel);

const btn = document.createElement("button");
btn.textContent = "How many?";
leftPanel.appendChild(btn);

let value = 16;

function createGrid(value) {
    for (let i = 0; i < value; i++) {
        let row = document.createElement("div");
        row.setAttribute("class", "row");

        for (let j = 0; j < value; j++) {
            let cell = document.createElement("div");
            cell.setAttribute("class", "cell");
            row.appendChild(cell);
        }  
        rightPanel.appendChild(row);      
    }
}

createGrid(value);

function clearGrid() {
    let rows = document.querySelectorAll(".row");
    let cells = document.querySelectorAll(".cell");

    cells.forEach(cell => {
        cell.remove();
    });
    rows.forEach(row => {
        row.remove();
    });
}


btn.addEventListener("click", () => {
    clearGrid();
    x = prompt("? x ? do you want?", 16);
    createGrid(x);
})