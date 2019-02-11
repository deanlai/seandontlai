var canv = {
  w: window.innerWidth,
  h: window.innerHeight
}

class Drop {
  constructor(x, y) {
    this.z = random(0, 20)
    this.w = map(this.z, 0, 20, 1, 4)
    this.h = map(this.z, 0, 20, 5, 20)
    this.x = x
    this.y = y
    this.s = map(this.z, 0, 20, 2, 5)


  }
  show() {
    strokeWeight(this.w)
    stroke(50, 50, 250)
    line(this.x, this.y, this.x, this.y + this.h)
  }
  fall() {
    this.s += map(this.z, 0, 20, 0.01, 0.1)
    this.y += this.s
    if (this.y > canv.h) {
      this.y = random(-canv.h * 2, 0)
      this.x = random(0, canv.w)
      this.s = map(this.z, 0, 20, 2, 5)
    }
  }
}

drops = []

function setup() {
  createCanvas(canv.w, canv.h);
  for (i = 0; i < canv.w; i++) {
    var w = random(2, 4);
    var d = new Drop(random(0, canv.w), random(-canv.h, 0));
    drops.push(d)
  }
}

function draw() {
  background(120);
  for (i = 0; i < drops.length; i++) {
    drops[i].show()
    drops[i].fall()
  }


}
