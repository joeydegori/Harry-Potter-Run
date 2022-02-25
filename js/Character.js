class Character {
    constructor(context){
        this.context = context; 
        this.gameFrame = 0; 
        this.playerFrame = 0; 
        this.playerState = 'running'; 
        this.playerX = 0; 
        this.playerY = canvas.height - 900; 
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
        this.context.drawImage(this.playerRunRight, this.sx * this.sWidth, this.sy * this.sHeight, this.sWidth, this.sHeight, this.playerX, this.playerY, canvas.width/10, canvas.height/10 );
    }

    move = () => {
        document.addEventListener("keydown", (event) => {
            // console.log(event.code);
        
            switch(event.code){
         
                case "ArrowRight":
                case "KeyD":
                    this.playerX += 0.10;
                    break;
                case "ArrowLeft":
                case "KeyD":
                    this.playerX -= 0.10; 
                    break; 
                case "ArrowUp":
                case "KeyW":
                    this.playerY -= 0.11;
                    break;
                case "ArrowDown":
                case "KeyS":    
                    this.playerY += 0.11;
                    break;
                default:
                    console.log("You are not using arrow keys!");
            }
        })

    }
















    // animation = () => {
    //     // this.context.clearRect(0, 0, canvas.width, canvas.height); 
    //     this.drawSprite(); 

    //     if (this.gameFrame % 10 === 0){
    //         this.sx+= this.sWidth
    //     }

    // //     if (this.gameFrame % 10 === 0){
    // //         this.playerFrame++
    // //         this.sx = this.playerFrame % 6;
    // //         this.sy = Math.floor((this.playerFram / 6 ) % 6)
    // //     }
    //     this.gameFrame++ 
    //     requestAnimationFrame(this.animation); 
    // }


   
    
}

    
