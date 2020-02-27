"use strict";


function wordsInCommon(words1, words2) {
  const words1set = new Set(words1);
  const words2set = new Set(words2);

  const results = new Set();

  for (const item of words1set) {
    if (words2set.has(item)){
      results.add(item);
    }
  }

  return results;

}


function kidsGame(names) {
  

  let output = [names.shift()];

  let firstLetterToWords = {};

  for (const name of names){
    if (firstLetterToWords.hasOwnProperty(name[0])) {
      firstLetterToWords[name[0]].push(name);
    }

    else {
      firstLetterToWords[name[0]] = [name];
    }
  }
  console.log(firstLetterToWords);

  let start_letter = output[output.length -1];
  let end_letter = start_letter[start_letter.length - 1];
  console.log(start_letter);
  console.log(end_letter);
 

  if (firstLetterToWords.hasOwnProperty(end_letter)){
    output.push(firstLetterToWords[end_letter][0]);
  }

  console.log(output);

}



kidsGame(["bagon", "baltoy", "yamask", "starly", "nosepass", "kalob", "nicky", "booger"])
