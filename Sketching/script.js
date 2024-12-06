const container = document.querySelector('#container');
let rainbows = false;

// Set up the container dynamically
container.style.display = 'flex';
container.style.flexDirection = 'column';
container.style.width = '80vh';
container.style.height = '80vh';
container.style.border = '1px solid black';
container.style.boxSizing = 'border-box';

// Function to create a dynamic grid
function createGrid(size) {
    container.innerHTML = ''; // Clear the container

    for (let i = 0; i < size; i++) {
        const row = document.createElement('div');
        row.style.display = 'flex';
        row.style.flex = '1'; // Rows equally spaced

        for (let j = 0; j < size; j++) {
            const square = document.createElement('div');
            square.style.flex = '1'; // Squares equally spaced in row
            square.style.border = '1px solid grey';
            square.style.boxSizing = 'border-box';

            // Add hover effect
            square.addEventListener('mouseover', () => {
                if (!rainbows) {
                    square.style.backgroundColor = 'black';
                } else {
                    square.style.backgroundColor = randomCol();
                }
            });

            // Append each square to the row
            row.appendChild(square);
        }
        container.appendChild(row); // Append each row to the container
    }
}

// Function to generate a random hex color
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

// Event listener for changing grid size
const gridButton = document.querySelector('#gridSize');
gridButton.addEventListener('click', function () {
    const size = Number(prompt('Enter size of grid "n x n": ', 16));
    if (size && size > 0) {
        createGrid(size);
    } else {
        alert('Please enter a valid positive number!');
    }
});

// Event listener for rainbow mode
const rainbowButton = document.querySelector('#rainbow');
rainbowButton.addEventListener('click', function () {
    rainbows = true;
});

// Event listener for black mode
const blackButton = document.querySelector('#black');
blackButton.addEventListener('click', function () {
    rainbows = false;
});
