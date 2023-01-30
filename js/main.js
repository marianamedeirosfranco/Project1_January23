/** @type {HTMLCanvasElement} */

const canvas = document.getElementById("canvas")

const ctx = canvas.getContext("2d")

//Create player 
const player = new Spaceship(177, 550, 46, 50, ctx) 


// Grab the button & Start game
const startButton = document.getElementById("start-button")

startButton.onclick = function () {
    const game = new Game(ctx, canvas.width, canvas.height, player)
    game.start()
}

//Key Funcionalities 

document.addEventListener("keydown", (e) => {
    switch(e.code){ 
        case "ArrowUp":
            if(player.y > 0){
            player.speedY = -6
             }else{
                player.y = 0
                player.speedY = 0
             }
              break
        case "ArrowDown":
            if(player.y < 550){
            player.speedY = 6
            }else{
                player.y = 550
                player.speedY = 0
            }
            break
        case "ArrowLeft":
            if (player.x > 0){
            player.speedX = -6
            } else{
                player.x = 0
                player.speedX = 0
            }break
        case "ArrowRight":
            if (player.x  <  350){
                player.speedX = 6
                } else{
                    player.x = 350
                    player.speedX = 0
            break 
                }
    }
})

document.addEventListener("keyup", (e) => {
    switch(e.code){
        case "ArrowUp":
            player.speedY = 0
            break
        case "ArrowDown":
            player.speedY = 0
            break
        case "ArrowLeft":
            player.speedX = 0
            break
        case "ArrowRight":
            player.speedX = 0
            break 
    }
})
