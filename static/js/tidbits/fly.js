class Fly {
    constructor(x, y, s) {
      this.pos = createVector(x, y)
      this.vel = createVector()
      this.accel = createVector()
      this.size = s;
      this.lastpos;
      this.buzzStrength = 5;
      this.stopped = 0;
      this.landed = 0;
      this.lit = 0;
      
    }
    update(mouseVector){
      this.lastpos = this.pos.copy()
      this.buzz()
      if (this.stopped == 1 && this.landed == 0){
        this.moveAwayFromLight(mouseVector)
      }
      else {
        this.moveTowardLight(mouseVector)
      }
      if (this.landed == 0){
        if (this.accel.mag() > 5){
          this.accel.setMag(5);
        }
        this.vel.add(this.accel)
        if (this.vel.mag() > 5){
          this.vel.setMag(5);
        }
      }
      this.pos.add(this.vel);
    }
    
    setBuzzStrength(strength){
      this.buzzStrength = strength
    }
    
    checkIfLit(lightVector, lightRadius) {
      let flypos = this.pos.copy();
      if (flypos.sub(lightVector).mag() < lightRadius)
        this.lit = 1
      else
        this.lit = 0
    }
    
    getDistanceToLight(mouseVector){
      let distanceToLight = this.pos.copy()
      distanceToLight.sub(mouseVector)
      return distanceToLight.mag();
    }
    
    getmouse2posVector(mouseVector){
      let mouse2posVector = this.pos.copy()
      mouse2posVector.sub(mouseVector)
      return mouse2posVector
    }
    
    applyForce(forceVector){
      this.accel.add(forceVector)
    }
    
    buzz(){
      let buzzForce = p5.Vector.random2D()
      buzzForce.mult((random(1)))
      buzzForce.mult(this.buzzStrength)
      this.applyForce(buzzForce)
    }
    
    moveTowardLight(mouseVector){
      let lightForce = this.pos.copy()
      lightForce.sub(mouseVector)
      lightForce.mult(-1)
      lightForce.mult(lightStrength);
      this.applyForce(lightForce);
    }
    
    moveAwayFromLight(mouseVector){
      let lightForce = fly.pos.copy()
      lightForce.sub(mouseVector)
      lightForce.setMag(10);
      this.applyForce(lightForce);
    }
    
    stop(){
      this.stopped = 1;
      this.vel.setMag(0);
      this.accel.mult(-1);
    }
    
    land(){
      this.vel.setMag(0);
      this.accel.setMag(0);
      this.landed = 1;
    }
    
    takeoff(){
      this.landed = 0;
    }
    
    show(mouseVector, lightVector, radius) {
      this.checkIfLit(lightVector, radius)
      if (this.lit == 1){
        let mouse2posVector =     
          this.getmouse2posVector(mouseVector)
        
        let shadowVector = this.pos.copy()
        shadowVector.add(mouse2posVector.mult(0.12))
        fill(10,10,10, 100);
        noStroke()
        ellipse(shadowVector.x, shadowVector.y,
                this.size*2, this.size*2)
        
        fill(200,180,50)
        noStroke()
        ellipse(this.pos.x, this.pos.y, this.size, this.size);
        
        let highlightVector = mouse2posVector.copy()
        highlightVector.setMag(1)
        fill(200,180,50)
        noStroke()
        ellipse(this.pos.x - highlightVector.x,
                this.pos.y - highlightVector.y,
                this.size, this.size);
        
        fill(10)
        noStroke()
        ellipse(this.pos.x, this.pos.y, this.size, this.size);
        
      }
      else 
        fill(5)
        noStroke()
        ellipse(this.pos.x, this.pos.y, this.size, this.size);
    }
  }