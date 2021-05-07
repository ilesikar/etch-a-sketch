let gridSize = 1600;

function hoverEffect(e) {
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    e.target.style.backgroundColor = `#${randomColor}`;
}

function applyMouseoverListener() {
    const grids = document.querySelectorAll('.grid-item');
    grids.forEach(grid => {
        grid.addEventListener('mouseenter', e => hoverEffect(e));
    });
}

function applyButtonClickedListener() {
    const button = document.querySelector('.erase-btn');
    button.addEventListener('click', e => resetGame());
}

function validateNum(num) {
    return (Math.sqrt(num) % 1 === 0);
}

function resetGame() {
    let input = window.prompt('Enter a square number (16, 64, 100, etc)');
    if (! validateNum(input)) {
        resetGame();
    } else {
      gridSize = input;
    }
    createGrid(gridSize);
}

function createGrid(size) {
    const gridContainer = document.querySelector('.grid-container');
    gridContainer.innerHTML = "";
    console.log(gridContainer);
    for (let i = 0; i < size; i++) {
        const gridItem = document.createElement('div');
        gridItem.classList.add('grid-item');
        gridContainer.appendChild(gridItem);
    }
    columnGenerator();
    applyMouseoverListener();

}

function columnGenerator() {
    const grid = document.querySelector('.grid-container');
    grid.style.setProperty('--cols', Math.ceil(Math.sqrt(grid.children.length)));
    
}


if( document.readyState !== 'loading' ) {
    initialize();
} else {
    document.addEventListener('DOMContentLoaded', function () {
        initialze();
    });
}

function initialize() {
    columnGenerator();
    createGrid(gridSize);
    applyMouseoverListener();
    applyButtonClickedListener();
}