const sizeOfGrid = 16;

const container = document.querySelector("#container");

const createGrid = (numberOfGrids) => {
    for(let i = 0; i < numberOfGrids; i++) {
        const row = document.createElement('div');
        row.classList.add('grid-row');

        for(let j = 0; j < numberOfGrids; j++){
            const gridBox = document.createElement('div');
            gridBox.classList.add('grid-box');
            row.appendChild(gridBox);
        }
        container.appendChild(row);
    }
}

createGrid(sizeOfGrid);
