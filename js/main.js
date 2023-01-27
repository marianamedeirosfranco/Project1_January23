/** @type {HTMLCanvasElement} */

const canvas = document.getElementById("canvas")

const ctx = canvas.getContext("2d")

// Grab the button
const startButton = document.getElementById("start-button")

//Create player (INCOMPLETE)
const player = new Spaceship()

//Start game (INCOMPLETE)
startButton.onclick = function (){
    const game = new Game()
    game.start()
}

//Key Funcionalities 

//Keys Down (INCOMPLETE)

document.addEventListener("keydown", (e) => {

    switch (e.code){
        case "ArrowUp":
            player.speedY -= 1
            break
        case "ArrowDown":
            player.speedY += 1
            break
        case "ArrowLeft":
            player.speedX -= 1
            break
        case "ArrowRight":
            player.speedX += 1
            break 
    }
})

document.addEventListener ("keyup", (e) => {
    
    switch (e.code){
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

