var canv = {
  w: window.innerWidth,
  h: window.innerHeight-52
};

class Drop {
  constructor(x, y) {
    this.z = random(0, 20)
    this.w = map(this.z, 0, 20, 1, 4)
    this.h = map(this.z, 0, 20, 8, 27)
    this.x = x
    this.y = y
    this.s = map(this.z, 0, 20, 10, 25)


  }
  show() {
    strokeWeight(this.w)
    stroke(75, 75, 200, 150)
    line(this.x, this.y, this.x, this.y + this.h)
  }
  fall() {
    if (this.y >= 0) {
        this.s += map(this.z, 0, 20, 0.01, 0.1)
    }
    this.y += this.s
    if (this.y > canv.h) {
      this.y = random(-canv.h, 0)
      this.x = random(0, canv.w)
      this.s = map(this.z, 0, 20, 5, 15)
    }
  }
}

drops = [];

function setup() {
  createCanvas(canv.w, canv.h);
  for (i = 0; i < canv.w*.4; i++) {
    var w = random(2, 4);
    var d = new Drop(random(0, canv.w), random(-canv.h, 0));
    drops.push(d)
  }
}
puddle = 0
function draw() {
  background(150);
  for (i = 0; i < drops.length; i++) {
    drops[i].show()
    drops[i].fall()
  }
  puddle += 0.05
  rectMode(CORNERS)
  noStroke()
  fill(75, 75, 200)
  rect(0, canv.h-puddle, canv.w, canv.h)


}
