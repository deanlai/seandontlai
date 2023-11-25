var canv = {
  w: window.innerWidth,
  h: window.innerHeight-52
};

var spot = {
  x: 0,
  y: 0,
};

var color = {
  r: 200,
  g: 100,
  b: 200,
  a: 50
};

function setup() {
  createCanvas(canv.w, canv.h);
  background(0);
}

function draw() {
  color.r = random(100, 250)
  color.b = random(100, 250)
  color.g = 75
  color.a = 125
  noStroke()
  fill(color.r, color.g, color.b, color.a);
  d = random(15,45)
  ellipse(spot.x, spot.y, d, d, color.a)

  spot.x = random(canv.w);
  spot.y = random(canv.h);
}
