/** @type {HTMLCanvasElement} */

//Player:

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
        this.image.src = "../docs/assets/588-5885004_spaceship-8-bit-heart-png-transparent-png.png"
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

    crashWith(enemy){
        return !(
            this.top() > enemy.bottom() ||
            this.bottom() < enemy.top() ||
            this.left() > enemy.right() ||
            this.right() < enemy.left()
        )
    }
}

//Debris:

class Debris {
    constructor(x, y, w, h, color, ctx){
        this.x = x
        this.y = y
        this.w = w
        this.h = h
        this.color = color
        this.ctx = ctx
        this.speedX = speedX
        this.speedY = speedY
    }

    draw(){
        this.ctx.fillStyle = this.color
        this.ctx.fillRect(this.x, this.y, this.w, this.h)
    }

    newPosition(){
        this.x += this.speedX
        this.y += this.speedY
    }

    top(){
        return this.y
    }

    bottom(){
        return this.y + this.h
    }

    left(){
        return this.x
    }

    right(){
        return this.x + this.w
    }
}