class Particle {
  constructor(x, y) {
    this.x = x
    this.y = y
    this.d = 4
  }
  move() {
    this.x += random(-5, 5)
    this.y += random(-5, 5)
  }
  show() {
    noStroke()
    fill(255)
    ellipse(this.x, this.y, this.d)
  }
}

let particles = []

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(10);
  initParticles();
}

function initParticles() {
  particles = []; // Clear existing
  for (let i = 0; i < windowHeight * 3; i++) {
    let angle = random(0, 360)
    let radius = random(0, windowHeight / 10)
    let part = new Particle(
      windowWidth / 2 + radius * Math.sin(angle), 
      windowHeight / 2 + radius * Math.cos(angle)
    )
    particles.push(part)
  }
}

function draw() {
  background(10);
  for (let i = 0; i < particles.length; i++) {
    particles[i].show()
    particles[i].move()
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  initParticles(); // Reinitialize particles for new size
}