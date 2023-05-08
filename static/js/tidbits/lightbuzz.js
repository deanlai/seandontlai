canv = {
	  w: window.innerWidth,
    h: window.innerHeight-52
}

let mouseIsMoving = 0
let fly
let flysize
let buzzSound;
let tink
let buzzVolume;
let buzzStrength = 5;
let lightStrength = 0.005;
let lightRadius = 20;
let illumRadius = lightRadius*5

function preload(){
  buzzSound = loadSound("/static/audio/buzz.mp3")
  tink = loadSound("/static/audio/tink.mp3")
  userStartAudio()
}

function setup() {
  createCanvas(canv.w, canv.h);
  lightRadius = width/30;
  illumRadius = lightRadius*5
  fly = new Fly(random(width),random(height), lightRadius/7);
  mouseVector = createVector(mouseX, mouseY);
  buzzSound.loop()
}

function mouseMoved() {
  mouseIsMoving = 1;
}

function draw() {
  background(10)
  fromCenter = createVector(mouseX-width/2, mouseY-height/2)
  let light_color = color(255, 230, 120)
  light_color.setAlpha(35)
  fill(light_color)
  noStroke()
  illum = createVector(mouseX - 0.15*fromCenter.x,
                      mouseY - 0.15*fromCenter.y)
  ellipse(illum.x, illum.y, illumRadius*2, illumRadius*2)
  
  let bulb_color = color(255, 230, 120);
  fill(bulb_color)
  noStroke();
  ellipse(mouseX,mouseY, lightRadius*2, lightRadius*2)
  
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
  buzzVolume = map(distance, 0, width, 0.2, 0)
  buzzSound.setVolume(buzzVolume)
  fly.update(mouseVector);
  if (fly.getDistanceToLight(mouseVector) < 
      lightRadius + fly.size/2){
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
  
  fly.show(mouseVector, illum, illumRadius);
}

