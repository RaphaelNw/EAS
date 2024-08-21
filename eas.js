const sizeOfGrid = 16;

const container = document.querySelector("#container");

const createGrid = (numberOfGrids) => {
    for(let i = 0; i < numberOfGrids; i++) {
        const row = document.createElement('div');
        row.classList.add('grid-row');

        for(let j = 0; j < numberOfGrids; j++){
            const square = 1000 / sizeOfGrid;
            const gridBox = document.createElement('div');
            gridBox.classList.add('grid-box');
            gridBox.style.width = `${square}px`;
            gridBox.style.height = `${square}px`;
            row.appendChild(gridBox);
        }
        container.appendChild(row);
    }
}

createGrid(sizeOfGrid);
