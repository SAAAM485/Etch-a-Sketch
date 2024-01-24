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

const normalBtn = document.createElement("button");
normalBtn.setAttribute("class", "btn")
normalBtn.textContent = "Normal Mode";
leftPanel.appendChild(normalBtn);

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
        cell.classList.remove("isHovered");
    });
}

function clearColored() {
    let colored = document.querySelectorAll(".colored")
    colored.forEach(cell => {
        cell.style.backgroundColor = "white";
        cell.classList.remove("colored")
    })
}

function addMouseover(){
    let cells = document.querySelectorAll(".cell");
    cells.forEach(cell => {
        cell.addEventListener("mouseover", () => {
            cell.classList.add("isHovered");
        })
    }); 
}

addMouseover();

function randomColor() {
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);
    let randomColor = `rgb(${r}, ${g}, ${b})`;
    return randomColor;
}

function raibowMode() {
    let cells = document.querySelectorAll(".cell");
    cells.forEach(cell => {
        cell.addEventListener("mouseover", () => {
            cell.classList.add("colored");
            cell.style.backgroundColor = randomColor();
        })
    });
}


btn.addEventListener("click", () => {
    clearGrid();
    value = prompt("? x ? do you want?", 16);
    createGrid(value);
    addMouseover();
});

normalBtn.addEventListener("click", () => {
    clearGrid();
    createGrid(value);
    addMouseover();
})

rainbowBtn.addEventListener("click", () => {  
    clearGrid();
    createGrid(value);
    raibowMode();
})

clearBtn.addEventListener("click", () => {
    clearHovered();
    clearColored();
});