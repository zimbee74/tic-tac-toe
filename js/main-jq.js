console.log('hello world');

// FOR LOOP STUFF NEEDS TO BE MOVED
let currentTurn = 'X';
// get every image element with the class of imageBlank
let images = [];
let xMoves = "";
let oMoves = "";
let playGame = true;

window.onload = function() {
  images = document.getElementsByClassName('imageSwitcher');
  // this for loop attaches the same click handler to every game square (with the .imageSwitcher class)
  for (let i = 0; i < images.length; i++ ) {
    console.log(images[i]);
    images[i].addEventListener('click', function( event ){
      if (playGame) { // nested if statements with local variable
        let eti = event.target.id;
        // should we accept this click and play the move, or is it an invalid click,
        // in which case we should ignore it
        if( !event.target.src.endsWith('BLANK.png') ){
          // ignore the click by RETURN early, if the square is NOT blank
          // blank state is default state set in HTML
          return;
        }
         event.target.src = `images/TIC_TAC_TOE_${currentTurn}.png`;
         // Tells program to flip image by changing SRC name on click
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
        } // if statement CHILD that checks if blank
      } // if statement PARENT that checks if blank
        // ensures non blank squares can be clicked
        // makes first use of currentTurn variable to track who's move

    }); // end of click handler function
  } // for loop
  const pickWinnerFunction = function( moveHistory ) { // has parameter move history
    const winningStrings = ['abc', 'def', 'ghi', 'adg', 'beh', 'cfi', 'aei', 'ceg'];

    for (let i = 0; i < winningStrings.length; i++) { // keeps count
      const letters = winningStrings[i].split('');
      const first = letters[0];
      const second = letters[1];
      const third = letters[2];
      let possibleWinner = moveHistory.includes(first)  &&
                    moveHistory.includes(second) &&
                    moveHistory.includes(third);
      if( possibleWinner ){
        document.getElementsByTagName("h1")[0].innerHTML = `${currentTurn} HAZ WON`;
        playGame = false;
      } // runs logic that announces winner and stops clicking of squares
    }   // splits winning strings into an array
  };    // pickWinnerFunction
        // - runs check against the 9 possible hard coded combinations

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
});

}; // Window on load function
