function generateGrid(gridLength) {
    const container = document.querySelector(".container");

    for (let i = 0; i < gridLength; i++) {
        const row = document.createElement("div");
        row.className = "row";
        for (let j = 0; j < gridLength; j++) {
            const cell = document.createElement("div");
            cell.className = "cell";
            row.appendChild(cell);
        }
        container.appendChild(row);
    }
    const cells = document.querySelectorAll(".cell");
    cells.forEach(cell => cell.addEventListener("mouseenter", changeCellColor));
}

function changeCellColor(event) {
    // Imitate etch-a-sketch behavior by making grid squares a little more black each time event triggers
    const el = event.target;
    if (!el.style.backgroundColor) {
        el.style.backgroundColor = "rgb(192,192,192)";
    } else {
        // Get individual rgb values. We only need one since they are all the same
        values = el.style.backgroundColor.split(",")
        // Remove non-numeric characters
        color = parseInt(values[0].replace(/\D/g,""));
        // Set new rgb to be 10% more black
        moreBlack = Math.floor(color * 0.9);
        el.style.backgroundColor = `rgb(${moreBlack},${moreBlack},${moreBlack})`;
    }

    /* Previous code that changed background color to random RGB */
    // const randomBetween = (min, max) => min + Math.floor(Math.random() * (max - min + 1));
    // const r = randomBetween(0,255);
    // const g = randomBetween(0,255);
    // const b = randomBetween(0,255);
    // el.setAttribute("style", `background-color: rgb(${r},${g},${b})`);
}

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

function clearGrid() {
    const container = document.querySelector(".container");
    removeAllChildNodes(container);
}

// Page will load with an initial 16x16 grid
generateGrid(16);

const btn = document.querySelector("button");
btn.addEventListener("click", () => {
    clearGrid();
    const newSize = parseInt(prompt("Please input the desired grid size:"));
    // No valid user input will generate new default size 16x16 grid
    if (newSize === null || newSize === NaN) {
        generateGrid(16);
    } else if (newSize > 100) {
        alert("Cannot accept a grid length greater than 100");
        generateGrid(16);
    } else {
        generateGrid(newSize);
    }
});
