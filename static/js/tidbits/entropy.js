var canv = {
	w: window.innerWidth,
    h: window.innerHeight-52
}

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

particles = []

function setup() {
  createCanvas(canv.w, canv.h);
  background(50);
  for (i = 0; i < canv.h*3; i++) {
    angle = random(0, 360)
    radius = random(0, 20)
    part = new Particle(canv.w/2 + radius * Math.sin(angle), canv.h/2 + radius * Math.cos(angle))
    particles.push(part)
  }
}

function draw() {
  background(50);
  for (i=0; i<particles.length; i++) {
		particles[i].show()
    particles[i].move()
  }
}
