const gravity = 9.8;
const pipes_dist = 200;

var bird;
var pipes = [];

var gameOver = false;

var noiseX = 0;

function setup() {
  createCanvas(480, 600);
  bird = new Bird();
  pipes.push(new Pipe());

  textSize(width / 8);
  textAlign(CENTER, CENTER);
}

function draw() {
  background(0);

  bird.update();
  bird.show();

  if (frameCount % pipes_dist == 0 && !gameOver) {
    pipes.push(new Pipe());
  }

  for (let i = pipes.length - 1; i >= 0; i--) {
    if (!gameOver) {
      pipes[i].update();
    }
    pipes[i].show();

    if (bird.collidesWith(pipes[i]) && !gameOver) {
      gameOver = true;
      bird.kill();
    }

    if (pipes[i].offscreen()) {
      pipes.splice(i, 1);
    }
  }

  if (gameOver) {
    push();
    stroke(255);
    strokeWeight(5);

    colorMode(HSB);

    fill(noise(noiseX) * 100, 250);
    noiseX += 0.02;

    text("Game Over", width / 2, height / 2);
    pop();
  }
}

function keyPressed() {
  if (key == ' ') {
    bird.up();
  }
}

function touchStarted() {
  bird.up();
}
