console.log('hello world');

// FOR LOOP STUFF NEEDS TO BE MOVED
let currentTurn = 'X';
// get every image element with the class of imageBlank
let images = [];
let xMoves = "";
let oMoves = "";
let playGame = true;
let imageX = "images/TIC_TAC_TOE_X.png"

let evenClickCounter = ""
let oddClickCounter = ""
// window.onload = function() {
//   images = document.getElementsByClassName('imageSwitcher');
// $(".imageSwitcher").click(function(){
// $(imageX).attr('src',$(this).attr('href'));

// $('.imageSwitcher').click(function() {
//     $(this).toggleClass('imageSwitcher');
// });




//  if .imageSwitcher src ends in blank.png execute the following

// click is odd click first place X
// click is even click place O
// until nine clicks have taken place
if (true) {
$('.imageSwitcher').click(function(){
    $(this).attr('src', 'images/TIC_TAC_TOE_X.png');
    });
}

else {
  $('.imageSwitcher').click(function(){
      $(this).attr('src', 'images/TIC_TAC_TOE_O.png');
      });
}


//
// $('.product_gallery a').click();
// return false;
// });



//
//   this for loop attaches the same click handler to every game square (with the .imageSwitcher class)
//   for (let i = 0; i < images.length; i++ ) {
//     console.log(images[i]);
//     images[i].addEventListener('click', function( event ){
//       if (playGame) { // nested if statements with local variable
//         // tells program if play game true run code till LINE 45
//         // program then runs till LINE 58 for winner check
//         let eti = event.target.id;
//         // should we accept this click and play the move, or is it an invalid click,
//         // in which case we should ignore it
//         if( !event.target.src.endsWith('BLANK.png') ){
//           // ignore the click by RETURN early, if the square is NOT blank
//           // blank state is default state set in HTML
//           return;
//         }
//          event.target.src = `images/TIC_TAC_TOE_${currentTurn}.png`;
//          // Tells program to flip image by changing SRC name on click
//         if (currentTurn === 'X') {
//           // X just had its turn
//           xMoves += eti;
//           pickWinnerFunction( xMoves );
//           currentTurn = 'O';
//         } else {
//           // O just had its turn
//           oMoves += eti;
//           pickWinnerFunction( oMoves );
//           currentTurn = 'X';
//         } // if statement CHILD that checks if blank
//       } // if statement PARENT that checks if blank
//         // ensures non blank squares can be clicked
//         // makes first use of currentTurn variable to track who's move
//
//     }); // end of click handler function
//   } // big old for loop
//   const pickWinnerFunction = function( moveHistory ) { // has parameter move history
//     const winningStrings = ['abc', 'def', 'ghi', 'adg', 'beh', 'cfi', 'aei', 'ceg'];
//     // above is hard coded winning string combinations
//     for (let i = 0; i < winningStrings.length; i++) { //for loop keeps count
//       const letters = winningStrings[i].split(''); //captures enetered items in array
//       const first = letters[0];  // creates variable for easy handling
//       const second = letters[1]; // creates variable for easy handling
//       const third = letters[2]; //  creates variable for easy handling
//       let possibleWinner =  moveHistory.includes(first)  && // check
//                             moveHistory.includes(second) && // check
//                             moveHistory.includes(third); // check
//       if( possibleWinner ){
//         document.getElementsByTagName("h1")[0].innerHTML = `${currentTurn} HAZ WON`;
//         playGame = false; // stops game by disabling listner on blank squares
//       } else if( xMoves.length + oMoves.length === 9 ){
//         // possibleWinner is false
//         document.getElementsByTagName("h1")[0].innerHTML = `IZ A TIE`;
//         playGame = false;
//       }
//
//       // runs logic that announces winner and stops clicking of squares
//     }   // splits winning strings into an array
//   };    // pickWinnerFunction
//         // - runs check against the 9 possible hard coded combinations
//         // if check is false executes the below code
//
// const h2 = document.querySelector('h2'); // select H2 tag
// h2.addEventListener('click', function( event ){ // add event lister for click
//   xMoves = ""; // empties
//   oMoves = ""; // empties
//   playGame = true; // resets ability to play game to true - enables new game
//   currentTurn = 'X'; // ensures X always starts remove to alternate
//   document.getElementsByTagName("h1")[0].innerHTML = `TIC-TAC-TOE`;
//
//   for (let i = 0; i < images.length; i++ ) {
//     console.log(images[i].src);
//     images[i].src = 'images/TIC_TAC_TOE_BLANK.png';
//   }
// });

// }; // Window on load function
