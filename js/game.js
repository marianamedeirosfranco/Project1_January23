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
        this.updateEnemies()
        this.checkGameOver()
        this.drawScore()
        this.updateScore()
    }

    stop(){
        clearInterval(this.intervalId)
    }

    clear(){
        this.backgroundImage.src = "/docs/assets/space-background.jpeg"
        this.ctx.drawImage(this.backgroundImage, 0, 0, this.width, this.height)
    }

    updateScore(){
        if(this.frames % 60 === 0) this.score++
    }

    drawScore(){
        ctx.font = "12px 'Press Start 2P'"
        ctx.fillStyle = "white"
        ctx.fillText(`Score:${this.score}`, 10, 25)
    }

    updateEnemies(){
        for (let i = 0; i < this.enemies.length; i++) {
            this.enemies[i].y += 3
            this.enemies[i].draw()
          }
          if (this.frames % 7 === 0) {
      
            let randomX = Math.floor(Math.random() * (400 - 1) + 1)
      
            this.enemies.push(new Debris(randomX, 0, 4, 4, "red", this.ctx))
          }        
    }

   checkGameOver(){
        const collision = this.enemies.some((enemy) => {
            return this.player.crashWith(enemy)
        })
        if (collision) {
            ctx.font =  "30px 'Press Start 2P'"
            ctx.fillStyle = "yellow"
            ctx.fillText(`YOU'RE TRASH`, 20, 250)
            ctx.font = "15px  'Press Start 2P'"
            ctx.fillStyle = "yellow"
            ctx.fillText(`Your final score is ${this.score}`, 47, 340)
            this.stop()
            themeMusic.pause()
            const failSound = new Audio("../docs/assets/Y2Mate.is - Sad Trombone Wah Wah Wah Fail Sound Effect-LukyMYp2noo-144p-1654480449831.mp4")
            failSound.play()
        }
     }
}