var sqrX = 0;
var sqrY = 0;
var sqrW = 20;
var sqrH = 20;

let i;
let intrN = 15;


let intr = [];

function setup() {
  createCanvas(600, 600);
  frameRate(5); 
  
  for (i = 1; i <= intrN; i++) {
    intr[i] = new Interrupt();
  }
  
}

function draw() {
  background(200);
  
  // draw square
  fill(255);
  noStroke();
  rect(sqrX, sqrY, sqrW, sqrH);
  
  // create interrupt object
  fill(50);
  for (i = 1; i <= intrN; i++) {
    intr[i].move();
    intr[i].display();
  }
  
  if (sqrX <= 0) {
    sqrX = 0;
  }
  if (sqrY <= 0) {
    sqrY = 0;
  }
  if (sqrX >= 600) {
    sqrX = 580;
  }
  if (sqrY >= 600) {
    sqrY = 580;
  }
  
}

class Interrupt {
  constructor() {
    this.x = random(10,550);
    this.y = random(10,550);
    this.w = 50;
    this.h = 50;
    this.speed = 10;
  }

  move() {
    this.x += random(-this.speed, this.speed);
    this.y += random(-this.speed, this.speed);
  }

  display() {
    rect(this.x, this.y, this.w, this.h);
    
    if (this.x <= 0) {
      this.x = 0;
    }
    if (this.y <= 0) {
      this.y = 0;
    }
    if (this.x + this.w >= 600) {
      this.x = 550;
    }
    if (this.y + this.h >= 600) {
      this.y = 550;
    }
  }
}

function keyPressed() {
  if (keyCode === UP_ARROW) {
    sqrY -= 20;
  } else if (keyCode === DOWN_ARROW) {
    sqrY += 20;
  } else if (keyCode === RIGHT_ARROW) {
    sqrX += 20;
  } else if (keyCode === LEFT_ARROW) {
    sqrX -= 20;
  }
}