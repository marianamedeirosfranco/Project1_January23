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
        this.bosschar = []
        this.bossbullets = []
        this.score = 0
        this.backgroundImage = new Image() 
        this.showHighScore =  localStorage.getItem("highScore") 
    }

    start(){
        this.intervalId = setInterval(this.update, 1000 / 60)
    }

    update = () => {
        this.frames++
        this.clearbg();
        this.drawBg()
        this.player.newPosition()
        this.player.draw()
        this.updateEnemies() 
        this.checkGameOver()
        this.drawScore()
        this.updateScore()
        this.bossShooting()
    }

    stop(){
        clearInterval(this.intervalId)
    }

    clearbg(){
        this.ctx.clearRect(0, 0, this.width, this.height)
    }

    drawBg(){
        this.backgroundImage.src = "docs/assets/space-background.jpeg"
        this.ctx.drawImage(this.backgroundImage, 0, 0, this.width, this.height)
        this.updateBoss();
    }

    updateScore(){
        if(this.frames % 60 === 0) this.score++
    }

    drawScore(){
        ctx.font = "16px 'Press Start 2P'"
        ctx.fillStyle = "white"
        ctx.fillText(`Score:${this.score}`, 10, 25)
    }

    updateEnemies(){
        for(let i = 0; i < this.enemies.length; i++){
            this.enemies[i].y += 3
            this.enemies[i].draw()
        }
        if(this.frames % 15 === 0){
            let randomX = Math.floor(Math.random() * (400 - 1) + 1)
            this.enemies.push(new Debris(randomX, 0, 4, 4, "white", this.ctx))
        }        
    }

    updateBoss(){
        if(this.bosschar.length){
            this.bosschar[0].draw()
        }
        if(this.frames % 500 === 0 && !this.bosschar.length){
            this.bosschar.push(new Boss(this.ctx))
            /* const evilLaugh = new Audio("../docs/assets/evil-laugh.mp3") */
            evilLaugh.play()
        }
        for(let i = 0; i < this.bosschar.length; i++){
            if(this.bosschar[i].y <= -5){
            this.bosschar[i].y ++
            }
        }
    }

   bossShooting(){
        if(this.bosschar.length){
            for(let i = 0; i < this.bossbullets.length; i++){
                    this.bossbullets[i].y += 11
                    this.bossbullets[i].draw()
            }
            if(this.frames % 120 === 0){
                    let shootPlayer = this.player.x + this.player.w / 2 - 2
                    this.bossbullets.push(new Debris(shootPlayer, 75, 4, 25, 'red', this.ctx))
                    laserSound.play()
            }   
        }     
    }

   checkGameOver(){
        const collision = this.enemies.some((enemy) => {
            return this.player.crashWith(enemy)
        })
        if(collision){
            ctx.font =  "30px 'Press Start 2P'"
            ctx.fillStyle = "yellow"
            ctx.fillText(`YOU'RE TRASH`, 20, 250)
            ctx.font = "15px  'Press Start 2P'"
            ctx.fillStyle = "yellow"
            ctx.fillText(`Your final score is ${this.score}`, 40, 340)
            ctx.font = "15px  'Press Start 2P'"
            ctx.fillStyle = "yellow"
            this.showHighScore === undefined ? this.showHighScore = this.score :  this.showHighScore = localStorage.getItem("highScore")
            if(this.score > this.showHighScore){
               this.showHighScore = localStorage.setItem("highScore", this.score)
            }
            ctx.fillText(`Highscore:${localStorage.getItem("highScore")}`, 110, 380)
            this.stop()
            themeMusic.pause()
            evilLaugh.pause()
            evilLaugh.currentTime = 0
            laserSound.pause()
            laserSound.currentTime = 0
            failSound.play()
        }

        const bulletCollision = this.bossbullets.some((bullet) => {
            return this.player.crashWith(bullet)
        })

        if(bulletCollision){
            ctx.font =  "30px 'Press Start 2P'"
            ctx.fillStyle = "yellow"
            ctx.fillText(`YOU'RE TRASH`, 20, 250)
            ctx.font = "15px  'Press Start 2P'"
            ctx.fillStyle = "yellow"
            ctx.fillText(`Your final score is ${this.score}`, 40, 340)
            ctx.font = "15px  'Press Start 2P'"
            ctx.fillStyle = "yellow"
            this.showHighScore === undefined ? this.showHighScore = this.score :  this.showHighScore = localStorage.getItem("highScore")
            if(this.score > this.showHighScore){
               this.showHighScore = localStorage.setItem("highScore", this.score)
            }
            ctx.fillText(`Highscore:${localStorage.getItem("highScore")}`, 110, 380)
            this.stop()
            themeMusic.pause()
            evilLaugh.pause()
            evilLaugh.currentTime = 0
            laserSound.pause()
            laserSound.currentTime = 0
            failSound.play()
        }

        const bossCollision = this.bosschar.some((boss) => {
            return this.player.crashWithBoss(boss)
        })

        if(bossCollision){
            ctx.font =  "30px 'Press Start 2P'"
            ctx.fillStyle = "yellow"
            ctx.fillText(`YOU'RE TRASH`, 20, 250)
            ctx.font = "15px  'Press Start 2P'"
            ctx.fillStyle = "yellow"
            ctx.fillText(`Your final score is ${this.score}`, 40, 340)
            ctx.font = "15px  'Press Start 2P'"
            ctx.fillStyle = "yellow"
            this.showHighScore === undefined ? this.showHighScore = this.score :  this.showHighScore = localStorage.getItem("highScore")
            if(this.score > this.showHighScore){
               this.showHighScore = localStorage.setItem("highScore", this.score)
            }
            ctx.fillText(`Highscore:${localStorage.getItem("highScore")}`, 110, 380)
            this.stop()
            themeMusic.pause()
            evilLaugh.pause()
            evilLaugh.currentTime = 0
            laserSound.pause()
            laserSound.currentTime = 0
            failSound.play()
        }
    }
}