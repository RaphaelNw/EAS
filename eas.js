let sizeOfGrid = 16;
const container = document.querySelector("#container");
const promptButton = document.querySelector('button');

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

            gridBox.addEventListener('mouseenter', () => {
                gridBox.style.backgroundColor = 'black';
            }); 
            row.appendChild(gridBox);
        }
        container.appendChild(row);
    }
}
createGrid(sizeOfGrid);

promptButton.addEventListener('click', () => { 
    let userInput = parseInt(prompt('What size grid do you want?'), 10);
    // Display the prompt when the button is clicked 
    while (userInput > 100) {
    userInput = parseInt(prompt('What size grid do you want? (hint: 100 or less)'), 10); 
    console. log(userInput); 
    } 
    });


//let sizeOfGrid = userInput;

//createGrid(userInput);

//another way
//has to be created after createGrid function called so boxes can be drawn to DOM first

/* const allDivs = document.querySelectorAll('.grid-box');
        allDivs.forEach(div => {
            div.addEventListener('mouseenter', () => {
                div.style.backgroundColor = 'black';
            })
        }); */
    // gives nodelist of all the elements
    //even if there is only 1 element still a node list and would need allDivs[0]