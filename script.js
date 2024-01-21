const container = document.querySelector(".container");

const leftPanel = document.createElement("div");
const rightPanel = document.createElement("div");
leftPanel.setAttribute("class", "leftPanel");
rightPanel.setAttribute("class", "rightPanel");
container.appendChild(leftPanel);
container.appendChild(rightPanel);

const btn = document.createElement("button");
btn.setAttribute("class", "btn")
btn.textContent = "How many?";
leftPanel.appendChild(btn);

const rainbowBtn = document.createElement("button");
rainbowBtn.setAttribute("class", "btn")
rainbowBtn.textContent = "Rainbow Mode";
leftPanel.appendChild(rainbowBtn);

const clearBtn = document.createElement("button");
clearBtn.setAttribute("class", "btn")
clearBtn.textContent = "Clear";
leftPanel.appendChild(clearBtn);

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

function clearHovered() {
    let isHovered = document.querySelectorAll(".isHovered");
    isHovered.forEach(cell => {
        cell.setAttribute("class", "cell")
    });
}

function addMouseover(){
    let cells = document.querySelectorAll(".cell");
    cells.forEach(cell => {
        cell.addEventListener("mouseover", () => {
            cell.setAttribute("class", "isHovered");
        })
    }); 
}

addMouseover();


btn.addEventListener("click", () => {
    clearGrid();
    x = prompt("? x ? do you want?", 16);
    createGrid(x);
    addMouseover();
});

clearBtn.addEventListener("click", () => {
    console.log("clear");
    clearHovered()
});