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
  buzzSound = loadSound("audio/buzz.mp3")
  tink = loadSound("audio/tink.mp3")
  userStartAudio()
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  light = new Light(mouseX, mouseY, height/20)
  fly = new Fly(random(width),random(height), light.radius/5);
  light.strength = lightStrength
  mouseVector = createVector(mouseX, mouseY);
  buzzSound.loop()
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function mouseMoved() {
  mouseIsMoving = 1;
}

function mouseReleased() {
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
  distance = fly.getDistanceToLight(mouseVector)
  buzzVolume = map(distance, 0, width, 0.3, 0)
  buzzVolume = pow(buzzVolume, 2)  // Square it for exponential falloff
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

