console.log('hello world');

// FOR LOOP STUFF NEEDS TO BE MOVED
let currentTurn = 'X';
// get every image element with the class of imageBlank
let images = document.getElementsByClassName('imageSwitcher');
let xMoves = "";
let oMoves = "";

window.onload = function() {

  // this for loop attaches the same click handler to every game square (with the .imageSwitcher class)
  for (let i = 0; i < images.length; i++ ) {
    console.log(images[i]);

    images[i].addEventListener('click', function( event ){
      let eti = event.target.id;
      // detectedStrings += eti ;
      // console.log(detectedStrings);

      this.src = `images/TIC_TAC_TOE_${currentTurn}.png`;

      if (currentTurn === 'X') {
        // X just had its turn
        xMoves += eti;
        compareFunction( xMoves );
        currentTurn = 'O';
      } else {
        // O just had its turn
        oMoves += eti;
        compareFunction( oMoves );
        currentTurn = 'X';
      }


    }); // end of click handler function

  } // for

  // FUNCTION NEEDS TO GO TO START DUPLICATE ABOVE and BELOW
  // FUNCTION NEEDS TO GO TO START
  const compareFunction = function( moveHistory ) {

    // if (currentTurn) {
    //   this.src = "images/TIC_TAC_TOE_X.png";
    //   currentTurn = false;
    // } else {
    //   this.src = "images/TIC_TAC_TOE_O.png";
    //   currentTurn = true;
    // }
    // check for a win
    // checkForWin();
    // ______________________________________________________________________

    const winningStrings = ['abc', 'def', 'ghi', 'adg', 'beh', 'cfi', 'aei', 'ced'];

    for (let i = 0; i < winningStrings.length; i++) {
      const letters = winningStrings[i].split('');
      // how does this connect
      const first = letters[0];
      const second = letters[1];
      const third = letters[2];
      // console.log(letters[0]);
      // console.log(letters[1]);
      // console.log(letters[2]);
      // const compare = enteredStrings.includes(winningStrings[i]);

      if( moveHistory.includes(first)  &&
        moveHistory.includes(second) &&
        moveHistory.includes(third)
      ){
        console.log('WINNER!',  winningStrings[i]);
      }

    } // for

  }; // compareFunction()

};
