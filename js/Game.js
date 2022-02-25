class Game {
    constructor(context){
        this.context = context;
        this.forest = new Image(); 
        this.forest.src = './images/forest.png';
        this.i = 0; 
        this.j = canvas.width; 
        this.harry = new Character(this.context); 
        this.gameFrame = 0; 
        this.frame = 0;
        this.playerFrame = 0;
        this.playerDirection = 'right';  
        this.obstacles = []; 

    }

    createObstacle = () => {
        this.obstacles.push(new Obstacle(this.context));
      };

    //   checkCollision = (obstacle, idx, gameId) => {
    //     if (
    //       this.car.x + this.car.carWidth > obstacle.x &&
    //       obstacle.x + obstacle.obsWidth > this.car.x &&
    //       this.car.y + this.car.carHeight > obstacle.y &&
    //       obstacle.y + obstacle.obsHeight > this.car.y
    //     ) {
    //       this.obstacles.splice(idx, 1);
    //       cancelAnimationFrame(gameId);
    //       this.ctx.fillStyle = 'rgba(0, 0, 0, 0.5)';
    //       this.ctx.fillRect(0, canvas.height / 4, canvas.width, canvas.height / 2);
    //       this.ctx.fillStyle = 'red';
    //       this.ctx.fillText(`Game Over!!!`, 30, canvas.height / 2);
    //     }
    //   };


    checkCollision = (obstacle, index, animation) => {
        if (
            this.harry.sx + this.harry.sWidth > obstacle.x && 
            obstacle.x + obstacle.width > this.harry.sx &&
            this.harry.sy + this.harry.sHeight > obstacle.y && 
            obstacle.y + obstacle.height > this.harry.sy
        ) 
        {
            this.obstacles.splice(index, 1); 
            cancelAnimationFrame(animation); 
            this.context.fillStyle = 'black'; 
            this.context.fillRect(0, canvas.height/4, canvas.width, canvas.height/2); 
            this.context.fillStyle = 'red'; 
            this.context.fillText(`Game Over!!`, 30, canvas.height /2); 
        }
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

        this.obstacles.forEach((obstacle, index)  => {
            obstacle.drawObstacle(); 
            obstacle.moveObstacle();
            this.checkCollision(obstacle, index, animation); 
            // this.handleScore(obstacle, index); 
         })   
        this.gameFrame++; 
        if (this.gameFrame % 50 === 0) this.createObstacle();

        // this.harry.animation();

        if (this.gameFrame % 20 === 0) {
            this.playerFrame++ 
            this.harry.sx = this.playerFrame % 6; 
            this.harry.sy = Math.floor((this.playerFrame / 6) % 1)
        }


    }

    
}

 

