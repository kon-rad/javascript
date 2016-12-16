function anagrams(word, words) {
  let inputWord = word.split(''),
      outputArray = [],
      inputArray = words,
      notAnagram = false;

      for (let i = 0; i < inputArray.length; i++) {
        let checkWord = inputArray[i].split('');
        let inputWordCopy = inputWord.slice(0);
        console.log(inputWord);
        for (let j = 0; j < checkWord.length; j++) {
          if (inputWordCopy.indexOf(checkWord[j]) >= 0 ) {
            let k = inputWordCopy.indexOf(checkWord[j]);
             inputWordCopy.splice(k, 1);
            console.log(k + " and " + inputWordCopy);
          }
          if (inputWord.indexOf(checkWord[j]) < 0 ){
            notAnagram = true;
          }
          console.log(notAnagram);
          if ((j == checkWord.length - 1) && !notAnagram ) {
            outputArray.push(checkWord.join(''));
            console.log(checkWord);
          } else if ((j == checkWord.length - 1) && notAnagram ) {
            notAnagram = false;
          }
        }

      }

      return outputArray;

}
anagrams("mocha", ["mhhioa", "mchoa", "mokoa"]);
//, "mchoa"


// describe("Basic Tests", function(){

//   it("More basic tests", function(){

//       Test.assertEquals(anagrams("mocha", ["mchoa", "mokoa"]), "mchoa");
//       Test.assertEquals(anagrams("car", ["cat", "dog"]), []);
//       Test.assertEquals(anagrams("chai", ["iach", "chacha", "haiku", "haic"]), ["iach", "haic"]);

//   })
// });
