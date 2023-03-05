function generateDivs(gridLength) {
    const container = document.querySelector(".container");

    for (let i = 0; i < gridLength; i++) {
        let row = document.createElement("div");
        row.className = "row";
        for (let j = 0; j < gridLength; j++) {
            let cell = document.createElement("div");
            cell.className = "cell";
            row.appendChild(cell);
            // cell.textContent = "test";
        }
        container.appendChild(row);
    }
}

// generateDivs(4);