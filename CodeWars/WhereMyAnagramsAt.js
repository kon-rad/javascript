function anagrams(word, words) {
  let inputWord = word.split(''),
      outputArray = [],
      inputArray = words;

      return inputWord;




}

describe("Basic Tests", function(){

  it("More basic tests", function(){

      Test.assertEquals(anagrams("mocha", ["mchoa", "mokoa"]), "mchoa");
      Test.assertEquals(anagrams("car", ["cat", "dog"]), []);
      Test.assertEquals(anagrams("chai", ["iach", "chacha", "haiku", "haic"]), ["iach", "haic"]);

  })
});
