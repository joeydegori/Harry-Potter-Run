window.onload = () => {
    document.getElementById('start-button').onclick = () => {
      startGame();
    };
  
    function startGame() {
      const canvas = document.getElementById('canvas')
      const context = canvas.getContext('2d');
  
      const game = new Game(context)
      game.drawEverything(); 
    
      // document.getElementById('start-button').style.display = 'none'; 
      //display:none to start-button 
        // document.addEventListener('keydown', event => {
        //       game.character.controls(event.code)
        // })
    }
  }

  
  