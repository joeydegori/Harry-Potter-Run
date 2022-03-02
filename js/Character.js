class Character {
    constructor(context){
        this.context = context; 
        this.gameFrame = 0; 
        this.playerFrame = 0; 
        this.playerState = 'running'; 
        this.playerX = 20; 
        this.playerY = canvas.height - 200; 
        this.playerIdle = new Image();
        this.playerIdle.src = './images/idle.png'
        this.playerRunRight = new Image(); 
        this.playerRunRight.src = './images/running.png'; 
        this.sx = 0; 
        this.sy = 0; 
        this.sWidth = 31; 
        this.sHeight = 31; 
        this.idle = this.playerIdle; 
        this.running = this.playerRunRight; 
    }

    drawSprite = () => {
        // this.selectedImage = this.playerIdleRight; 
        //if (this.playerDirection === 'right' && this.playerState === 'running') this.running = this.playerRunRight
        // const drawCharacter = () => {
        //     this.context.drawImage(this.playerRunRight, this.playerX, this.playerY, canvas.width, canvas.height)
        // }
        // this.context.drawImage(this.playerRunRight, this.sx, this.sy, this.sWidth, this.sHeight); 
        this.context.drawImage(this.playerRunRight, this.sx * this.sWidth, this.sy * this.sHeight, this.sWidth, this.sHeight, this.playerX, this.playerY, canvas.width/10, canvas.height/10 );
    }


    move = () => {
        document.addEventListener("keydown", (event) => {
            event.preventDefault()

            switch(event.code){
                // case "ArrowRight":
                // case "KeyD":
                //     this.playerX += 0.10;
                //     break;
                // case "ArrowLeft":
                // case "KeyD":
                //     this.playerX -= 0.10; 
                //     break; 
                case "ArrowUp":
                case "KeyW":
                    this.playerY -= 0.10;
                    break;
                case "ArrowDown":
                case "KeyS":    
                    this.playerY += 0.10;
                    break;
                default:
                    console.log("You are not using arrow keys!");
            }
        })

    }








   
    
}

    
