/** @type {HTMLCanvasElement} */

class Spaceship{ 
    constructor(x, y, w, h, ctx){
        this.x = x
        this.y = y
        this.w = w
        this.h = h
        this.ctx = ctx
        this.speedX = 0
        this.speedY = 0
        this.image = new Image()
        this.image.src = "/docs/assets/alien-tight.png"
    }

    draw(){
        this.ctx.drawImage(this.image, this.x, this.y, this.w, this.h)
    }

    newPosition(){

      //If statments impead canvass crossing glitch
      this.x += this.speedX
      this.y += this.speedY
    }

    top(){
        return this.y
    }

    bottom (){
        return this.y + this.h
    }

    left (){
        return this.x
    }
    
    right (){
        return this.x + this.w
    }

    crashWith(Debris) {
      return !(
        this.bottom() < Debris.top() ||
        this.top() > Debris.bottom() ||
        this.right() < Debris.left() ||
        this.left() > Debris.right()
      )
    }

    crashWithBoss(Boss) {
      return !(
        this.top() > Boss.bottom() ||
        this.right() < Boss.left() ||
        this.left() > Boss.right()
      )
    }
}

class Debris {
    constructor(x, y, w, h, color, ctx) {
      this.x = x
      this.y = y
      this.w = w
      this.h = h
      this.color = color
      this.ctx=ctx
      this.speedX = 0;
      this.speedY = 0;
}

draw(){
  this.ctx.fillStyle = this.color
    this.ctx.fillRect(this.x, this.y, this.w, this.h, this.color, this.ctx)
}

newPosition() {
    this.x += this.speedX;
    this.y += this.speedY;
  }

  top() {
    return this.y;
  }
  
  bottom() {
    return this.y + this.h;
  }

  left() {
    return this.x;
  }

  right() {
    return this.x + this.w;
  }
}

class Boss{
  constructor(ctx){
    this.x = 140
    this.y = 3
    this.w = 120
    this.h = 80
    this.ctx = ctx
    const img2 = new Image()
    img2.addEventListener("load", () => {})
    img2.src = "/docs/assets/white-cow-head-removebg.png"
    this.img2 = img2;
}

draw(){
    ctx.drawImage(this.img2, this.x, this.y, this.w, this.h)
}

bottom() {
  return this.y + this.h;
}

left() {
  return this.x;
}

right() {
  return this.x + this.w;
}
}