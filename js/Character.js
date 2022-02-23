class Character {
    constructor(context){
        this.context = context; 
        this.gameFrame = 0; 
        this.playerFrame = 0; 
        this.playerDirection = 'right';
        this.playerState = 'idle'; 
        this.playerX = 0; 
        this.playerY = canvas.height - 900; 
        this.playerRunRight = new Image(); 
        this.playerIdle = new Image(); 
        this.allImages = new Image(); 
        this.allImages.src = './images/all.png'; 
        this.playerIdle.src = './images/idle.png'; 
        this.playerRunRight.src = './images/running.png'; 
        this.sx = 0; 
        this.sy = 0; 
        this.sWidth = 30; 
        this.sHeight = 63; 
        this.all = this.allImages; 
        this.idleImage = this.playerIdle; 
        this.running = this.playerRunRight; 
    }

    drawSprite = () => {
        // this.selectedImage = this.playerIdleRight; 
        // if (this.playerDirection === 'right' && this.playerState === 'idle') this.selectedImage = this.playerRunRight
        // const drawCharacter = () => {
        //     this.context.drawImage(this.playerRunRight, this.playerX, this.playerY, canvas.width, canvas.height)
        // }

        this.context.drawImage(this.idleImage, this.sx, this.sy, this.sWidth, this.sHeight, this.playerX, this.playerY, canvas.width/10, canvas.height/10 );
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

    
