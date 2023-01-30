/** @type {HTMLCanvasElement} */

const canvas = document.getElementById("canvas")

const ctx = canvas.getContext("2d")

//Create player (INCOMPLETE)
const player = new Spaceship(150, 550, 90, 40, ctx) 


// Grab the button & Start game (INCOMPLETE)
const startButton = document.getElementById("start-button")

startButton.onclick = function () {
    const game = new Game(ctx, canvas.width, canvas.height, player)
    game.start()
}

//Key Funcionalities 

//Keys Down (INCOMPLETE)

document.addEventListener("keydown", (e) => {
// DO WE NEED TO LIMIT CANVAS MOVEMENT WITH IF STATEMENTS?
// How many if statements to limit movement
    switch(e.code){ 
        case "ArrowUp":
            if(player.y > 1){
            player.speedY = -3
       }
            break
        case "ArrowDown":
           // if(player.y<canvas.height){
            player.speedY = 3
        //}
            break
        case "ArrowLeft":
          if(player.x>0){
            player.speedX = -4
        } else {
            player.speedX = 0
        }
            break
        case "ArrowRight":
           if(!player.x === canvas.width){
            player.speedX = 3
        }
            break 
    }
})

//Keys Up(ICOMPLETE)

document.addEventListener("keyup", (e) => {
    // DO ALL KEY CASES ALLOW FOR PLAYER TO KEEP MOVING?
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

