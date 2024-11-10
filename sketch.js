let colors = ['#F44336', '#2196F3', '#673AB7', '#4CAF50', '#607D8B', '#33FFF7', '#795548', '#F898F1F7', '#E8FF12'];

let lines = []; // Array for laser lines
let textX; // Text position
const textSpeed = 2; // Text speed
let balloons = []; // Array for balloon positions
let smileyFaces = []; // Array for smiley face positions
let bgColor; // Background color
let cakePositions = []; // Array for cake positions

function setup() {
let canvas = createCanvas(400, 400);
canvas.parent('sketch-holder');
frameRate(10); 
  
//background color 
textX = width;
bgColor = color(144, 238, 144);

//buttons
createButton('confetti shower').parent('button-holder').mousePressed(placeRectangles);
createButton('erase').parent('button-holder2').mousePressed(eraseShapes);
createButton('laser lights').parent('button-holder').mousePressed(drawRandomLines);
createButton('happy birthday').parent('button-holder').mousePressed(startMovingText);
createButton('invite').parent('button-holder').mousePressed(placeSmiley);
createButton('cake').parent('button-holder').mousePressed(drawCake);
}

function draw() {
  background(bgColor); 
  
// Draw confetti
for (let color of colors) {
fill(color);
noStroke();
rect(random(width), random(height), 50, 50);
}

// Draw lasers
for (let lineData of lines) {
stroke(lineData.color);
line(lineData.x1, lineData.y1, lineData.x2, lineData.y2);
  }

//HBD text
fill(0);
textSize(32);
text("Happy Birthday", textX, height - 30);
  

textX -= textSpeed;
if (textX < -textWidth("Happy Birthday")) {
textX = width;
  }


for (let balloon of balloons) {
drawBalloon(balloon.x, balloon.y);
  }


for (let smiley of smileyFaces) {
drawSmiley(smiley.x, smiley.y);
  }

for (let cake of cakePositions) {
drawCakeAt(cake.x, cake.y);
  }
}

function placeRectangles() {
colors = []; 
for (let i = 0; i < 10; i++) {
colors.push(color(random(255), random(255), random(255)));
}
}

function eraseShapes() {
colors = [];
lines = [];
balloons = [];
smileyFaces = [];
bgColor = color(random(255), random(255), random(255));
cakePositions = [];
}

function drawRandomLines() {
for (let i = 0; i < 5; i++) {
let lineData = {
x1: random(width),
y1: random(height),
x2: random(width),
y2: random(height),
color: color(random(255), random(255), random(255))
};
lines.push(lineData);
}
}

function startMovingText() {
textX = width;
}

function drawBalloon(x, y) {
fill(0, 0, 255);
noStroke();
ellipse(x, y, 40, 60);
fill(0);
stroke(0);
line(x, y + 30, x, y + 70);
}

function drawSmiley(x, y) {
fill(255, 204, 0);
noStroke();
ellipse(x, y, 80, 80);
fill(0);
ellipse(x - 20, y - 10, 10, 10); // Left eye
ellipse(x + 20, y - 10, 10, 10); // Right eye
fill(0);
noStroke();
arc(x, y + 10, 50, 30, 0, PI); // Smile
}

function placeSmiley() {
let smileyX = random(width);
let smileyY = random(height);
smileyFaces.push({ x: smileyX, y: smileyY });
}

function drawCake() {
let cakeX = width / 2 - 50; 
let cakeY = height / 2 + 25; 
cakePositions.push({ x: cakeX, y: cakeY }); 
}

function drawCakeAt(x, y) {
fill(255, 204, 0); 
rect(x, y, 100, 50); 
fill(255);
rect(x, y - 10, 100, 10); // Icing
fill(255, 0, 0);
for (let i = 0; i < 3; i++) {
rect(x + 20 + i * 25, y - 20, 5, 15);
  }
}

function mousePressed() {
balloons.push({ x: mouseX, y: mouseY });
}
