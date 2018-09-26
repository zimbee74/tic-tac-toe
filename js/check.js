console.log('Checking Page!');
//
//
// const winningStrings = ['abc', 'def', 'ghi', 'adg', 'beh', 'cfi', 'aei', 'ced'];

const compareFunction = function() {

  const winningStrings = ['abc', 'def', 'ghi', 'adg', 'beh', 'cfi', 'aei', 'ced'];

  var enteredStrings = "abcdgi";

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

    if( enteredStrings.includes(first)  &&
        enteredStrings.includes(second) &&
        enteredStrings.includes(third)
     ){
       console.log('WINNER!', letters);
     }


// console.log(winningStrings[i], compare);
// ______________________________________________________________________
    //   if (compare) {
    //
    //     console.log('player O you have won!!!! player X you have lost');
    //     return
    // } else {
    //   console.log('keep going');
    // }
// ______________________________________________________________________

    // console.log(winningStrings[i], compare);


  }

// if winningStrings[i] === true console.log('player X you have won!');


// for loopone(0 = i; )
};




//
// let compare = 'bcdef';
//
//
// let runCompare = function() {
// compare.includes(winningStrings[1]);
// console.log(compare.includes);
// }
//
//
//
// var str = "Hello world, welcome to the universe.";
// var n = str.includes("world");
//
// var str = "Hello world, welcome to the universe.";
// var n = str.includes("world", 12);
//
//
// string.includes(searchvalue, start)
//
// compare.includes("bcdef", 0)
