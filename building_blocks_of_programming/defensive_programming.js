/* 

defensive programming consist of assuming the following three elements:

-  Defensive programming is all about assuming that all the arguments a function will receive are of the wrong type
- the wrong value 
- or both

In other words, you are assuming that things will go wrong and you are proactive in thinking about such scenarios before they happen, so as to make your function less likely to cause errors because of faulty inputs. 

*/

var letterFinder = (word, match) => {
  // before we do anything, we compare the values passed to the function to verify their content. If the content is right, we continue the evaluation
    var condition1 = typeof(word) == 'string' && word.length >= 2;
    var condition2 = typeof(match) == 'string' && match.length == 1;
    if(condition1 && condition2) {
        for(i = 0; i < word.length; i++) {
            if(word[i] == match) {
                console.log('Found the', match, 'at', i)
            } else {
                console.log('---No match found at', i)
            }
        }
    } else {
        console.log("Please pass correct arguments to the function");
    }
}
letterFinder([],[]);
letterFinder("cat","c");