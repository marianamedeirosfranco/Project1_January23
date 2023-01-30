/** @type {HTMLCanvasElement} */

const canvas = document.getElementById("canvas")

const ctx = canvas.getContext("2d")

//Creat soundtrack
const music = new Audio("../docs/assets/Y2Mate.is - STAR WARS THEME - shitty flute version-VeFzYPKbz1g-144p-1655124518911.mp4")

//Create player 
const player = new Spaceship(177, 550, 20, 40, ctx) 


// Grab the button & Start game
const startButton = document.getElementById("start-button")

startButton.onclick = function () {
    const game = new Game(ctx, canvas.width, canvas.height, player)
    game.start()
    music.play()
}

//Key Funcionalities 

document.addEventListener("keydown", (e) => {
    switch(e.code){ 
        case "ArrowUp":
            if(player.y > 10){
            player.speedY = -4
             }else{
                player.y = 10
                player.speedY = 0
             }
              break
        case "ArrowDown":
            if(player.y < 550){
            player.speedY = 4
            }else{
                player.y = 550
                player.speedY = 0
            }
            break
        case "ArrowLeft":
            if (player.x > 0){
            player.speedX = -4
            } else{
                player.x = 0
                player.speedX = 0
            }break
        case "ArrowRight":
            if (player.x  <  380){
                player.speedX = 4
                } else{
                    player.x = 380
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
