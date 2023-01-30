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
        this.image.src = "/docs/assets/alien-ship-removebg-corp.png"
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
      );
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

