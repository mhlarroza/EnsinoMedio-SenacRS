let cellSize = 10;
let cols, rows;
let playerX = 1;
let playerY = 1;
let playerImg;
let trail = [];

let maze = [
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [1,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1],
    [1,0,1,0,1,0,1,1,1,1,0,1,0,1,1,1,1,1,0,1],
    [1,0,1,0,0,0,0,0,0,1,0,1,0,0,0,0,0,1,0,1],
    [1,0,1,1,1,1,1,1,0,1,0,1,1,1,1,1,0,1,0,1],
    [1,0,0,0,0,0,0,1,0,1,0,0,0,0,0,1,0,1,0,1],
    [1,1,1,1,1,1,0,1,0,1,1,1,1,1,0,1,0,1,0,1],
    [1,0,0,0,0,1,0,1,0,0,0,0,0,1,0,1,0,1,0,1],
    [1,0,1,1,0,1,0,0,0,1,1,1,0,1,0,1,0,1,0,2],
    [1,0,1,0,0,1,1,1,0,0,0,1,0,1,0,0,0,1,1,1],
    [1,0,1,0,1,1,0,0,0,1,0,1,0,1,1,1,0,0,0,1],
    [1,0,0,0,1,0,0,1,1,1,0,1,0,0,0,1,1,1,0,1],
    [1,1,1,0,1,1,0,1,0,0,0,1,1,1,0,1,0,1,0,1],
    [1,0,0,0,0,1,0,0,0,1,0,0,0,1,0,1,0,1,0,1],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
];

function preload() {
    playerImg = loadImage("rostorapun.webp"); // imagem enviada corretamente
}

function setup() {
    cols = maze[0].length;
    rows = maze.length;
    createCanvas(cols * cellSize, rows * cellSize);
    frameRate(60);

    for (let y = 0; y < rows; y++) {
        trail[y] = [];
        for (let x = 0; x < cols; x++) {
            trail[y][x] = false;
        }
    }
}

function draw() {
    background(255); // limpa fundo
    drawMaze();
    drawPlayer();
    trail[playerY][playerX] = true;

    if (maze[playerY][playerX] === 2) {
        fill(0);
        textSize(28);
        textAlign(CENTER, CENTER);
        text('Você venceu!', width / 2, height / 2);
        document.body.style.backgroundColor = 'white';
        document.body.style.backgroundImage = 'none';
        noLoop();
    }
}

function drawMaze() {
    for (let y = 0; y < rows; y++) {
        for (let x = 0; x < cols; x++) {
            if (maze[y][x] === 1) {
                fill(0);
            } else if (maze[y][x] === 2) {
                fill(255);
            } else if (trail[y][x]) {
                fill(255, 105, 180, 150);
            } else {
                fill(255, 255, 255, 10);
            }
            noStroke();
            rect(x * cellSize, y * cellSize, cellSize, cellSize);
        }
    }
}

function drawPlayer() {
    imageMode(CENTER);
    image(playerImg, playerX * cellSize + cellSize / 2, playerY * cellSize + cellSize / 2, cellSize * 0.9, cellSize * 0.9);
}

function keyPressed() {
    let nextX = playerX;
    let nextY = playerY;

    if (keyCode === LEFT_ARROW) nextX--;
    else if (keyCode === RIGHT_ARROW) nextX++;
    else if (keyCode === UP_ARROW) nextY--;
    else if (keyCode === DOWN_ARROW) nextY++;

    if (
        nextX >= 0 &&
        nextX < cols &&
        nextY >= 0 &&
        nextY < rows &&
        maze[nextY][nextX] !== 1
    ) {
        playerX = nextX;
        playerY = nextY;
    }
}
