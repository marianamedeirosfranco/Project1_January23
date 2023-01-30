/** @type {HTMLCanvasElement} */

class Game{
    constructor(ctx, width, height, player){
        this.ctx = ctx
        this.width = width
        this.height = height
        this.player = player
        
        this.intervalId = null
        this.frames = 0
        this.enemies = []
        this.score = 0
        this.backgroundImage = new Image()
    }

    start(){
        this.intervalId = setInterval(this.update, 1000 / 60)
    }

    update = () => {
        this.frames++
        this.clear()
        this.player.newPosition()
        this.player.draw()
        //this.updateEnemies()
       // this.checkGameOver()
       // this.drawScore()
        //this.updateScore()
    }

    stop(){
        clearInterval(this.intervalId)
    }

    clear(){
        this.backgroundImage.src = "/docs/assets/space-background.jpeg"
        this.ctx.drawImage(this.backgroundImage, 0, 0, this.width, this.height)
    }

    /* updateScore(){

    } */

    /* drawScore(){

    } */

   /*  updateEnemies(){

    } */

   /*  checkGameOver(){

    } */
}