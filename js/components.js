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
        this.image.src = "/docs/assets/space-ship-removebg-preview.png"
    }

    draw(){
        this.ctx.drawImage(this.image, this.x, this.y, this.w, this.h)
    }

    newPosition(){
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
}

class Debris {
    constructor(x, y, w, h, ctx) {
        this.x = x
        this.y = y
        this.w = w
        this.h = h
        this.ctx=ctx
        this.image = new Image()
        this.image.src = "/docs/assets/enemy1.png"
        this.speedX = 0;
        this.speedY = 0;
}
draw(){
    this.ctx.drawImage(this.image, this.x, this.y, this.w, this.h)
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