class Obstacle {
    constructor(context) {
      this.context = context; 
      this.obstacle = new Image(); 
      this.obstacle.src = './images/dementor.png';
      this.x = 1280;  
      this.y = Math.random() * canvas.height; 
      this.width = 100, 
      this.height = 100; 
    }

    drawObstacle = () => {
        this.context.drawImage(this.obstacle,this.x,this.y,this.width,this.height)
    }

    moveObstacle = () => {
        this.x -= 7;
    }
  

  }