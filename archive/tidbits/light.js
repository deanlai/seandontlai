class Light {
    constructor(x, y, radius) {
      this.pos = createVector(x, y)
      this.radius = radius
      this.lastpos
      this.on = 1
      this.light_color = color(255, 230, 120)
      this.bulb_color = color(255, 230, 120)
      this.lit_radius = radius*8
      this.strength
      let fromCenter = createVector(mouseX-width/2, mouseY-height/2)
      this.lit_pos = createVector(this.pos.x - 0.15*fromCenter.x,
        this.pos.y - 0.15*fromCenter.y)
      
    }
    update(){
        this.pos.x = mouseX
        this.pos.y = mouseY
    }
    
    toggle(){
      if (this.on == 1) {
          this.on = 0
      }
      else {
          this.on = 1
      }
    }
    
    show() {
        ellipse(this.pos.x, this.pos.y, this.radius*2, this.raidus*2)
      if (this.on == 1){
        let fromCenter = createVector(mouseX-width/2, mouseY-height/2)
        let lit_area_color = this.light_color
        lit_area_color.setAlpha(35)
        fill(lit_area_color)
        noStroke()
        this.lit_pos.set(this.pos.x - 0.15*fromCenter.x,
                            this.pos.y - 0.15*fromCenter.y)
        ellipse(this.lit_pos.x, this.lit_pos.y, this.lit_radius*2, this.lit_radius*2)
        
        fill(this.bulb_color)
        noStroke();
        ellipse(this.pos.x, this.pos.y, this.radius*2, this.radius*2)
      } 
  }
}