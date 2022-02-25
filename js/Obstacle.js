class Obstacle {
    constructor(context) {
      this.context = context; 
      this.dementor = new Image(); 
      this.dementor.src = './images/dementor.png';
      this.x = 1280;  
      this.y = Math.random() * canvas.height; 
      this.width = 140, 
      this.height = 140; 
       
    }
  
    drawObstacle() {
        this.context.drawImage(this.dementor,this.x,this.y,this.width,this.height)
    }

    moveObstacle(){
        this.x -= 10;
    }
  

  }