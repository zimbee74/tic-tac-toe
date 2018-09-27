console.log('hello world');

// FOR LOOP STUFF NEEDS TO BE MOVED
let currentTurn = 'X';
// get every image element with the class of imageBlank
let images = [];
let xMoves = "";
let oMoves = "";
// let hasBeenWonSoStop ="";
let playGame = true;

window.onload = function() {

  images = document.getElementsByClassName('imageSwitcher');

  // this for loop attaches the same click handler to every game square (with the .imageSwitcher class)
  for (let i = 0; i < images.length; i++ ) {
    console.log(images[i]);


//_____________________________________________________________________________
    images[i].addEventListener('click', function( event ){
      if (playGame) {
        let eti = event.target.id;

        // should we accept this click and play the move, or is it an invalid click,
        // in which case we should ignore it
        if( !event.target.src.endsWith('BLANK.png') ){
          // ignore the click by returning early, if the square is NOT blank
          return;
        }

         event.target.src = `images/TIC_TAC_TOE_${currentTurn}.png`;


        if (currentTurn === 'X') {
          // X just had its turn
          xMoves += eti;
          pickWinnerFunction( xMoves );
          currentTurn = 'O';
        } else {
          // O just had its turn
          oMoves += eti;
          pickWinnerFunction( oMoves );
          currentTurn = 'X';
        }
      }
//

    }); // end of click handler function
    // }
//___________________________________________________________________________
  } // for

  // FUNCTION NEEDS TO GO TO START DUPLICATE ABOVE and BELOW
  // FUNCTION NEEDS TO GO TO START
  const pickWinnerFunction = function( moveHistory ) {

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

    const winningStrings = ['abc', 'def', 'ghi', 'adg', 'beh', 'cfi', 'aei', 'ceg'];

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
      let possibleWinner = moveHistory.includes(first)  &&
                    moveHistory.includes(second) &&
                    moveHistory.includes(third);


      if( possibleWinner ){
        document.getElementsByTagName("h1")[0].innerHTML = `${currentTurn} HAZ WON`;
        playGame = false;
        // console.log('WINNER!',  winningStrings[i]);
        // document.getElementsByClassName("row").style.pointerEvents='none';
        // document.getElementsByClassName("row").removeEventListener("mousemove", window);

        //console.log((xMoves + oMoves).length);
        // document.getElementById(id).style.property = new style
      }

    }

  }; // pickWinnerFunction



// const identifyDrawFunction = function() {
  //  {
  // if (true) {
  //   else if (xMoves.length + oMoves.length >= 9 && winningStrings[i] === false)
  // }

         // document.getElementsByTagName("h1")[0].innerHTML = `IT'S A TIE`;
  // }

// this is where you put the on click reset the program
// i.e. set the squares to BLANK


const h2 = document.querySelector('h2');
h2.addEventListener('click', function( event ){
  console.log('clicked reset!');

  xMoves = "";
  oMoves = "";
  playGame = true;
  document.getElementsByTagName("h1")[0].innerHTML = `TIC-TAC-TOE`;

  for (let i = 0; i < images.length; i++ ) {
    console.log(images[i].src);
    images[i].src = 'images/TIC_TAC_TOE_BLANK.png';
  }
  //
  // if (playGame) {
  //   let reset = event.target.h2;
  //
  //           // should we accept this click and play the move, or is it an invalid click,
  //           // in which case we should ignore it
  //   // if( !event.target.src.endsWith('BLANK.png') ){
  //   //         // ignore the click by returning early, if the square is NOT blank
  //   //         //return;
  //   // }
  //
  //    event.target.src = `images/TIC_TAC_TOE_BLANK.png`;
  // }
});



}; // Window on load function
