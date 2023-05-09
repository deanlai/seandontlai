canv = {
	  w: window.innerWidth,
    h: window.innerHeight-52
}

let mouseIsMoving = 0
let mouseUnclicked = 0
let fly
let flysize
let buzzSound;
let tink
let buzzVolume;
let buzzStrength = 5;
let lightStrength = 0.005;

function preload(){
  buzzSound = loadSound("/static/audio/buzz.mp3")
  tink = loadSound("/static/audio/tink.mp3")
  userStartAudio()
}

function setup() {
  createCanvas(canv.w, canv.h);
  light = new Light(mouseX, mouseY, height/20)
  fly = new Fly(random(width),random(height), light.radius/5);
  light.strength = lightStrength
  mouseVector = createVector(mouseX, mouseY);
  buzzSound.loop()
}

function mouseMoved() {
  mouseIsMoving = 1;
}

function mousePressed() {
  light.toggle()
}

function draw() {
  background(15)

  light.update()
  light.show()

  mouseVector.set(mouseX, mouseY)
  
  if (mouseIsMoving == 1){
    if (fly.landed) {
      fly.moveAwayFromLight(mouseVector)
      fly.stopped = 0
      fly.takeoff()
      fly.update()
      buzzSound.loop()
    }
  }

  distance = fly.getDistanceToLight(mouseVector)
  if (distance < light.lit_radius*5)
    buzzVolume = map(distance, 0, light.lit_radius*5, 0.4, 0.1)
  else
    buzzVolume = map(distance, 0, width, 0.1, 0)
  buzzSound.setVolume(buzzVolume)

  fly.update(mouseVector, light.strength, light.on);
  if (fly.getDistanceToLight(mouseVector) < 
      light.radius + fly.size/2){
    fly.stop();
    if (fly.landed == 0){
      tink.play()
      if(random(3) < 1) {
        fly.land()
        buzzSound.stop()
        mouseIsMoving = 0
      }
    }
    else {
      if (random(500) < 1) {
        fly.moveAwayFromLight(mouseVector)
        fly.stopped = 0
        fly.takeoff()
        fly.update()
        buzzSound.loop()
      }
    }
  }
  else fly.stopped = 0
  
  fly.show(mouseVector, light.lit_pos, light.lit_radius);
}

