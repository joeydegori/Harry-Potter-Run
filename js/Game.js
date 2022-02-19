class Game {
    constructor(context){
        this.context = context;
        this.forest = new Image(); 
        this.forest.src = './images/forest.png';
        this.i = 0; 
        this.j = canvas.width; 
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


    }

    //comment
}

 

