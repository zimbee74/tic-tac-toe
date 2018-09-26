console.log('hello world');
// select if you wanna be 'X' or 'O'
// input 'X' or 'O'
// KEEP RECORD OF INPUTED 'X' or 'O'
// Have possible wins to be compared against kept in an string
// Use if / else if / else statements  and variables
// Have alphabetical ID for tic-tac-toe cells.
//
// 8 STRINGS begin attempting match after
// 'abc'
// 'def'
// 'ghi'
// 'adg'
// 'beh'
// 'cfi'
// 'aei'
// 'ced'
// let cellA = ""
// let cellB = ""
// let cellC = ""
// let cellD = ""
// let cellE = ""
// let cellF = ""
// let cellG = ""
// let cellH = ""
// let cellI = ""
//
// const winningStrings = 'abc'||'def'||'ghi'||'adg'||'beh'||'cfi'||'aei'||'ced';
// const playerOneCross = "X";
// const playerTwoNaught = "Y";
// <a href="#" id="myHref">Click me</a>
// <img id = "imageX" src = "images/TIC_TAC_TOE_X.png" onclick = "changeToBlank()"/>
// <img id = "imageO" src = "images/TIC_TAC_TOE_O.png" onclick = "changeToBlank()"/>
// <img id = "imageO" src = "images/TIC_TAC_TOE_BLANK.png" onclick = "changeToBlank()"/>
// var image =  document.getElementById("imageOne");
// function changeToBlank() {
// if (image.src = "images/TIC_TAC_TOE_X.png") {
//     image.src = "images/TIC_TAC_TOE_O.png";
// } else {
//     image.src = "images/TIC_TAC_TOE_O.png";
// }
// }
// ______________________________________________________________________
// ______________________________________________________________________
let detectedStrings;

window.onload = function() {
// FOR LOOP STUFF NEEDS TO BE MOVED
let currentTurn = true;
  // get every image element with the class of imageBlank
  let images = document.getElementsByClassName('imageSwitcher');
  //console.log( images );
  detectedStrings = "";
  var i;
  for (i = 0; i < images.length; i++ ) {
    console.log(images[i]);
    images[i].addEventListener('click', function( event ){
      let eti = event.target.id;
      detectedStrings += eti ;
      console.log(detectedStrings);
      // compareFunction();
      // alert(eti);
//detectedStrings += eti
// let collectedStrings = detectedStrings += event.target.id;
// alert(collectedStrings);
// for (var i = 0; i < detectedStrings.length; i++) {
//   detectedStrings[i]
// }
//   alert(detectedStrings);
// ____________________________________________________
      //_______________________________________________________________________
      // Store last image placed by a click in a variable.
      // if variable lastImage = TIC_TAC_TOE_X
      // then use = TIC_TAC_TOE_O
// if variable lastImage = TIC_TAC_TOE_O
      // then use = TIC_TAC_TOE_X
      // if variable lastImage === TIC_TAC_TOE_O || TIC_TAC_TOE_X (( no change / disable click))
      // call variable lastImage store last image in lastImage
      if (currentTurn) {
        this.src = "images/TIC_TAC_TOE_X.png";
        currentTurn = false;
      } else {
        this.src = "images/TIC_TAC_TOE_O.png";
        currentTurn = true;
      };
      // check for a win
      // checkForWin();
      // ______________________________________________________________________
    //if (document.getElementsByClassName("imageSwitcher").src === "images/TIC_TAC_TOE_BLANK.png"){
    //}
  }); // end of click handler function

  }

// FUNCTION START
  const compareFunction = function() {




    // let currentTurn = true;
    //   // get every image element with the class of imageBlank
    //   let images = document.getElementsByClassName('imageSwitcher');
    //   //console.log( images );
    //   let detectedStrings = "";
    //   var i;
    //
    //
    //   for (i = 0; i < images.length; i++ ) {
    //     console.log(images[i]);
    //     images[i].addEventListener('click', function( event ){
    //       let eti = event.target.id;
    //       detectedStrings += eti ;
    //       console.log(detectedStrings);




          // alert(eti);
    //detectedStrings += eti
    // let collectedStrings = detectedStrings += event.target.id;
    // alert(collectedStrings);
    // for (var i = 0; i < detectedStrings.length; i++) {
    //   detectedStrings[i]
    // }
    //   alert(detectedStrings);
    // ____________________________________________________
          //_______________________________________________________________________
          // Store last image placed by a click in a variable.
          // if variable lastImage = TIC_TAC_TOE_X
          // then use = TIC_TAC_TOE_O
          // if variable lastImage = TIC_TAC_TOE_O
          // then use = TIC_TAC_TOE_X
          // if variable lastImage === TIC_TAC_TOE_O || TIC_TAC_TOE_X (( no change / disable click))
          // call variable lastImage store last image in lastImage
          if (currentTurn) {
            this.src = "images/TIC_TAC_TOE_X.png";
            currentTurn = false;
          } else {
            this.src = "images/TIC_TAC_TOE_O.png";
            currentTurn = true;
          };
          // check for a win
          // checkForWin();
          // ______________________________________________________________________
        //if (document.getElementsByClassName("imageSwitcher").src === //"images/TIC_TAC_TOE_BLANK.png"){
        //}
      }); // end of click handler function

      }

    const winningStrings = ['abc', 'def', 'ghi', 'adg', 'beh', 'cfi', 'aei', 'ced'];

  //var enteredStrings = capturedStrings;
console.log(winningStrings.length);
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

      if( detectedStrings.includes(first)  &&
        detectedStrings.includes(second) &&
        detectedStrings.includes(third)
      ){
      console.log('WINNER!',  winningStrings[i]);
      return winningStrings[i];
      console.log(detectedStrings);
  }

}

};

};
//}
// function captureClickedCell() {
//     var cellIdentity = document.getElementsByClassName("row")[0].id;
//     document.getElementById("cellA").innerHTML = cellIdentity;
//
//
// alert(cellIdentity);


// ______________________________________________________________________
// images = 'images/TIC_TAC_TOE_BLANK.png'){
//       images.src='images/TIC_TAC_TOE_X.png';
    // images = 'images/TIC_TAC_TOE_X.png';
// )//add Y
// };
// ________________________________________________________________________________________________
// ________________________________________________________________________________________________
// <p>
//         <img alt="" src="http://www.userinterfaceicons.com/80x80/minimize.png"
//             style="height: 85px; width: 198px" id="imgClickAndChange" onclick="changeImage()"  />
// </p>
// ________________________________________________________________________________________________
// ________________________________________________________________________________________________
// function changeImage() {
//
//         if (document.getElementById("imgClickAndChange").src == "http://www.userinterfaceicons.com/80x80/minimize.png")
//         {
//             document.getElementById("imgClickAndChange").src = "http://www.userinterfaceicons.com/80x80/maximize.png";
//         }
//         else
//         {
//             document.getElementById("imgClickAndChange").src = "http://www.userinterfaceicons.com/80x80/minimize.png";
//         }
//     }

    // ________________________________________________________________________________________________
    // ________________________________________________________________________________________________




// var i;
// for (i = 0; i < cars.length; i++) {
//     text += cars[i] + "<br>";
// }


//
// $('.imageBlank').on('click', function (){
//   console.log('clicked!');
// });



// var image =  document.getElementById("imageBlank");
//
//       function changeToBlank()
//       {
//           if (image.getAttribute('src') == "images/TIC_TAC_TOE_BLANK.png")
//           {
//               image.src = "images/TIC_TAC_TOE_X.png";
//           }
//           else
//           {
//               image.src = "images/TIC_TAC_TOE_O.png";
//           }
//
//       }






//     document.getElementById(".myDiv").style.flexGrow = "5";
//      window.location = "http://www.google.com";

//
// 'X choose a square to click on'
// // system must remember square that was clicked on
// 'Y choose a square to click on'
// // system must rememeber square that was clicked on
// // need a counter of goes maximum 9
// // after fifth go
// const winningStrings = 'abc'||'def'||'ghi'||'adg'||'beh'||'cfi'||'aei'||'ced';
//
// if xSelectedBoxes ==== winningStrings[i]
// then {'congrats X, O loses'}
//
// if oSelectedBoxes ==== winningStrings[i]
// then {'congrats O, X loses'}
//
// else 'The game has ended and noone has one'
