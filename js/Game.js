class Game {
  constructor(context) {
    this.context = context;
    this.forest = new Image();
    this.forest.src = "./images/forest.png";
    this.i = 0;
    this.j = canvas.width;
    this.harry = new Character(this.context);
    this.gameFrame = 0;
    this.frame = 0;
    this.playerFrame = 0;
    this.playerDirection = "right";
    this.obstacles = [];
    this.score = 0; 
  }

  createObstacle = () => {
    this.obstacles.push(new Obstacle(this.context));
  };

  createsPoints = () => {
      this.snitches.push(new Points(this.context)); 
  }

  checkCollision = (obstacle, index, animation) => {
    if (
        this.harry.playerX + this.harry.sWidth > obstacle.x &&
        obstacle.x + obstacle.width > this.harry.playerX &&
        this.harry.playerY + this.harry.sHeight > obstacle.y &&
        obstacle.y + obstacle.height > this.harry.playerY
    ) {
          this.obstacles.splice(index, 1);
          cancelAnimationFrame(animation);
          this.context.fillStyle = 'black';
          this.context.fillRect(0, canvas.height/4 , canvas.width, canvas.height/2);
          this.context.font = '70px Harry Potter', 'sans serif';
          this.context.fillStyle = 'white';
          this.context.fillText(`Game Over!`, 160, canvas.height /2);
      }
      console.log("collision");
    }
  
handleScore = (obstacle, index) => {
        if (obstacle.x < 0) {
          this.score++;
          this.obstacles.splice(index, 1);
        }
    };

  drawBackground = () => {
    this.context.clearRect(0, 0, canvas.width, canvas.height);

    this.i--;

    if (this.i <= -canvas.width) {
      this.i = canvas.width;
    }

    this.j--;
    if (this.j <= -canvas.width) {
      this.j = canvas.width;
    }

    this.context.drawImage(this.forest, this.i, 0, canvas.width, canvas.height);
    this.context.drawImage(this.forest, this.j, 0, canvas.width, canvas.height);
  };

  drawEverything = () => {
    let animation = requestAnimationFrame(this.drawEverything);
    
    this.drawBackground();
    this.harry.drawSprite();
    this.harry.move();

    this.obstacles.forEach((obstacle, index) => {
      obstacle.drawObstacle();
      obstacle.moveObstacle();
      this.checkCollision(obstacle, index, animation);
      this.handleScore(obstacle, index);
    });

    this.gameFrame++;
    if (this.gameFrame % 50 === 0) this.createObstacle();
    this.context.fillStyle = 'White';
    this.context.font = '30px Harry Potter', 'sans serif';
    this.context.fillText(`Score: ${this.score}`, 260, 50);

    if (this.gameFrame % 20 === 0) {
      this.playerFrame++;
      this.harry.sx = this.playerFrame % 6;
      this.harry.sy = Math.floor((this.playerFrame / 6) % 1);
    }
  };
}
