// 02 building blocks of a program; 01 arrays, objects and functions

var colors = ['red', 'blue', 'orange'];

var listArrayItems = (array) => {
  for (var i = 0; i < array.length; i++) {
    if (array[i] == 'red') {
      console.log(i*100, 'tomato!');
    } else {
      console.log(i*100, array[i]);
    };
  };
};

listArrayItems(colors);

// letter finder in an array

function letterFinder(word, match) {
  for(var i = 0; i < word.length; i++) {
    if(word[i] == match) {
      console.log('we are currently in ', word[i]);
      console.log('Found the', match, 'at', i);
    } else {
      console.log('we are currently in ', word[i]);
      console.log('---No match found at', i);
    };
  };
};

letterFinder("test", "t");