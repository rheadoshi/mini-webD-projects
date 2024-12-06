const container = document.querySelector('#container');
let rainbows = false;
container.style.display = 'flex';
container.style.flexDirection = 'column';
container.style.width = '80vh';
container.style.height = '80vh';
container.style.border = '1px solid black';
container.style.boxSizing = 'border-box';

function createGrid(size) {
    container.innerHTML = ''; // Clear the container

    for (let i = 0; i < size; i++) {
        const row = document.createElement('div');
        row.style.display = 'flex';
        row.style.flex = '1'; 

        for (let j = 0; j < size; j++) {
            const square = document.createElement('div');
            square.style.flex = '1'; 
            square.style.border = '1px solid grey';
            square.style.boxSizing = 'border-box';

            square.addEventListener('mouseover', () => {
                if (!rainbows) {
                    square.style.backgroundColor = 'black';
                } else {
                    square.style.backgroundColor = randomCol();
                }
            });

            row.appendChild(square);
        }
        container.appendChild(row);
    }
}

const randomCol = function () {
    let col = '#';
    const allowed = '0123456789ABCDEF';
    for (let i = 0; i < 6; i++) {
        col += allowed[Math.floor(Math.random() * 16)];
    }
    return col;
};

// Initialize a default 16x16 grid
createGrid(16);

const gridButton = document.querySelector('#gridSize');
gridButton.addEventListener('click', function () {
    const size = Number(prompt('Enter size of grid "n x n": ', 16));
    if (size && size > 0) {
        createGrid(size);
    } else {
        alert('Please enter a valid positive number!');
    }
});

const rainbowButton = document.querySelector('#rainbow');
rainbowButton.addEventListener('click', function () {
    rainbows = true;
});

const blackButton = document.querySelector('#black');
blackButton.addEventListener('click', function () {
    rainbows = false;
});
