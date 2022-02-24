class Game {
    constructor(context){
        this.context = context;
        this.forest = new Image(); 
        this.forest.src = './images/forest.png';
        this.i = 0; 
        this.j = canvas.width; 
        this.harry = new Character(this.context); 
        this.harry = new Character(this.context); 
        this.gameFrame = 0; 
        this.playerFrame = 0;
        this.playerDirection = 'right';  

    }

    drawBackground = () => {
    this.context.clearRect(0, 0, canvas.width, canvas.height);
        
        this.i--; 

        if (this.i <= -canvas.width){
            this.i = canvas.width; 
        }

        this.j--; 
        if (this.j <= -canvas.width){
            this.j = canvas.width; 
        }

    this.context.drawImage(this.forest, this.i, 0, canvas.width, canvas.height); 
    this.context.drawImage(this.forest, this.j, 0, canvas.width, canvas.height); 
    } 

    drawEverything = () => {
        //frame
        
        let animation = requestAnimationFrame(this.drawEverything);
        this.drawBackground();
        this.harry.drawSprite(); 
        this.harry.move(); 
        // this.harry.animation();

        if (this.gameFrame % 20 === 0){
            this.playerFrame++ 
            this.harry.sx = this.playerFrame % 6; 
            this.harry.sy = Math.floor((this.playerFrame / 6) % 1)
        }

        this.gameFrame++; 


        // document.addEventListener('keydown', (event) => {
        //     if (event.code === 'ArrowRight'){
        //           this.playerDirection === 'Right'; 
        //    }
        // })




    }

    
}

 

