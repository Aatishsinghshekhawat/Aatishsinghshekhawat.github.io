
document.addEventListener("DOMContentLoaded", function () {

    
    document.getElementById("grid-container").addEventListener("click", startGame);
  
    const wincombination = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [3, 5, 8],
      [0, 4, 8],
      [6, 4, 2],
    ];
   
    blockvaluecombination = ['', '', '', '', '', '', '', '', ''];
    var currentPlayer = "X";
    var winnerIs = "";
  
    
    function startGame(event) {
      reversePlayer();
  
      function reversePlayer() {
        if (event.target.innerHTML != '') {
          return;
        }
        currentPlayer = currentPlayer === "X" ? "O" : "X";
        event.target.innerHTML = currentPlayer;
  
      }
  
  
  
      let blockvalue = event.target.innerHTML;
      let blockposition = event.target.getAttribute("id");
   
      
      blockvaluecombination[blockposition] = blockvalue;
      win()
    }
  
    
  
    function win() {
      let howManyblockclicked = blockclicked();
      if (howManyblockclicked > 4) {
        winner();
      }
    }
    function blockclicked() {
      let blockFilled = blockvaluecombination.filter((element) => {
        return element != '';
      });
      console.log("blockFilled " +  blockFilled);
      return blockFilled.length;
    }
  
    function winner() {
  
      for (i = 0; i < wincombination.length - 1; i++) {
        let element = wincombination[i];
        let a = blockvaluecombination[element[0]];
        let b = blockvaluecombination[element[1]];
        let c = blockvaluecombination[element[2]];
  
        if (a === '' || b === '' || c === '') {
          continue;
        }
        if (a === b && b === c) {
          winnerIs = b;
          document.getElementById("over").innerHTML = winnerIs + " has won the game";      
           break;
          }
        }
      }
        
  });
  