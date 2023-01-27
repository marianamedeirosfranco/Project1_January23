/** @type {HTMLCanvasElement} */

class Spaceship { // Do we need Image here in the constructor?
    constructor (x, y, w, h, /* image */ ctx) {
        this.x = x
        this.y = y
        this.w = w
        this.h = h
        this.ctx = ctx

        this.speedX = 0
        this.speedY = 0
        this.image = new Image()
        this.image.src = ""
        

    }



}

class Debris {

}