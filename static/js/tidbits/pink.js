var canvas = {
  width: 600,
  height: 300
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

var circle = {
  x: 0,
  y: (canvas.height) / 2,
  diameter: 50
};

var luminance = 0;

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  background(luminance);
}

function draw() {
  //background(map(mouseX, 0, canvas.width, 0, 255));
  color.r = random(100, 220)
  color.b = random(100, 220)
  color.g = 50
  color.a = 100
  //.console.log(color.r, color.g, color.b)

  noStroke()
  fill(color.r, color.g, color.b, color.a);
  ellipse(spot.x, spot.y, spot.diameter, spot.diameter, color.a)

  //fill(250, 250, 150)
  //noStroke()
  //ellipse(mouseX, circle.y, circle.diameter, circle.diameter)

  spot.x = random(canvas.width);
  spot.y = random(canvas.height);
}
