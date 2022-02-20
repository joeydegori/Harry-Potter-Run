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
        this.playerRunRight.src = './images/harry.png'; 
    }


    drawSprite = () => {
        // const drawCharacter = () => {
        //     this.context.drawImage(this.playerRunRight, this.playerX, this.playerY, canvas.width, canvas.height)
        // }

        // const animation = () => {
        //     this.context.clearRect(0, 0, canvas.width, canvas.height)
        //     requestAnimationFrame(this.animation);
        //     drawCharacter();
        // }
    this.context.drawImage(this.playerRunRight, this.playerX, this.playerY, canvas.width, canvas.height)
    }
   
    
}

    
