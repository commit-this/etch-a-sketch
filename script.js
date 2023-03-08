function generateGrid(gridLength) {
    const container = document.querySelector(".container");

    for (let i = 0; i < gridLength; i++) {
        const row = document.createElement("div");
        row.className = "row";
        for (let j = 0; j < gridLength; j++) {
            const cell = document.createElement("div");
            cell.className = "cell";
            row.appendChild(cell);
            // cell.textContent = "test";
        }
        container.appendChild(row);
    }
    const cells = document.querySelectorAll(".cell");
    cells.forEach(cell => cell.addEventListener("mouseenter", changeCellColor));
}

function changeCellColor(event) {
    const el = event.target;
    el.setAttribute("style", "background-color: red");
}

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

function clearGrid() {
    const container = document.querySelector(".container");
    const rows = document.querySelectorAll(".rows");
    // rows.forEach(row => removeAllChildNodes(row));
    removeAllChildNodes(container);
}

// page will load with 16x16 grid
generateGrid(16);

const btn = document.querySelector("button");
btn.addEventListener("click", () => {
    clearGrid();
    const newSize = parseInt(prompt("Please input the desired grid size:"));
    // No valid user input will generate new default size 16x16 grid
    if (newSize === null || newSize === NaN) {
        generateGrid(16);
    } else {
        generateGrid(newSize);
    }
});
