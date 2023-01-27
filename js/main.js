/** @type {HTMLCanvasElement} */

const canvas = document.getElementById("canvas")

const ctx = canvas.getContext("2d")

//Create player (INCOMPLETE)
const player = new Spaceship(/* 0, 0, 0, 0, "Image", ctx*/) // Spaceship Class not finished

// Grab the button & Start game (INCOMPLETE)
const startButton = document.getElementById("start-button")

startButton.onclick = function () {
    const game = new Game() // Class not defined
    game.start() // Function not made
}

//Key Funcionalities 

//Keys Down (INCOMPLETE)

document.addEventListener("keydown", (e) => {
// DO WE NEED TO LIMIT CANVAS MOVEMENT WITH IF STATEMENTS?
// How many if statements to limit movement
    switch(e.code){ 
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

