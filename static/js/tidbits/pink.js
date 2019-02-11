var canvas = {
  width: window.innerWidth,
  height: window.innerHeight
};

var spot = {
  x: 0,
  y: 0,
  diameter: 25
};

var color = {
  r: 200,
  g: 100,
  b: 200,
  a: 50
};

function setup() {
  createCanvas(canvas.width, canvas.height);
  background(luminance);
}

function draw() {
  color.r = random(100, 250)
  color.b = random(100, 250)
  color.g = 75
  color.a = 125
  noStroke()
  fill(color.r, color.g, color.b, color.a);
  ellipse(spot.x, spot.y, spot.diameter, spot.diameter, color.a)

  spot.x = random(canvas.width);
  spot.y = random(canvas.height);
}
