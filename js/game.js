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
        //this.clear()
        this.player.draw()
        this.player.newPosition()
        /* this.updateScore()
        this.drawScore()
        this.updateEnemies()
        this.checkGameOver()*/
    }

    stop(){
        clearInterval(this.intervalId)
    }

    clear(){
        this.backgroundImage.src = "../docs/assets/space.jpeg"
        this.ctx.drawImage(this.backgroundImage, 0, 0, )
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