var EcmaLib = EcmaLib || {};

EcmaLib.string = (function(){
  var module = {};

  //--------------------------------------------------------------------------------------------------------------------//
  /**
   * Searches words in the string and stores result into the list
   *
   * Usage:
   * var wordsList = toWordsList("I'm super sentence with many words");
   * // ["I'm", "super", "sentence", "with", "many", "words"]
   * 
   * Algorithm:
   * 1. Searches first punctuation mark.
   * 2. Test it for a word-punctuation-mark (wpm) - punctuation mark that can be included into the word.
   * 3. If match found, test it for as part of word symbol.
   * 4. If match found - skip this sign and consider as a part of word.
   * 5. If match not found - it is word delimiter. Save the word and update start position of next word.
   * 6. If it is not wpm - it is word delimiter. Save the word and update start position of next word.
   * 7. If we reached the end of string - save last word.
   */
  module.toWordsList = function(inputString) {
    var words = [],
        size = inputString.length,
        symbol,
        lastStartWordPos = 0;

    for(var i = 0; i < size; i++) {
      symbol = inputString.charAt(i);
      if(this.isAlpha(symbol)) continue;

      if(this.isWordPunctuationMark(symbol)) {
        if(!this.isAPartOfWord(symbol, inputString, i)) {
          cutAndSaveWordTo(words, inputString, lastStartWordPos, i);
          lastStartWordPos = i + 1;
        } else {
          continue;
        }
      } else {
        cutAndSaveWordTo(words, inputString, lastStartWordPos, i);
        lastStartWordPos = i + 1;
      }
    } 
    cutAndSaveWordTo(words, inputString, lastStartWordPos, i);

    return words;
  };

  module.isAlpha = function(symbol) {
    symbol = symbol.toLowerCase();
    return symbol >= 'a' && symbol <= 'z';
  }

  module.isWordPunctuationMark = function(symbol) {
    return symbol == '-' || symbol == '\'';
  }

  module.isAPartOfWord = function(symbol, word, symbolPos) {
    if(symbolPos === undefined) {
      symbolPos = word.indexOf(symbol); 
    }
    return this.isAlpha(word.charAt(symbolPos+1)) && this.isAlpha(word.charAt(symbolPos-1));
  }

  //--------------------------------------------------------------------------------------------------------------------//
  module.maxLengthStringFrom = function(words, lengths) {
    lengths = lengths || [];
    var size = words.length,
        lengths = lengths || lengthsStringsFor(words);

    return words[maxValueIndex(lengths)];
  }

  module.minLengthStringFrom = function(words, lengths) {
    lengths = lengths || [];
    var size = words.length,
        lengths = lengths || lengthsStringsFor(words);

    return words[minValueIndex(lengths)];
  }

  // PRIVATE
  function cutAndSaveWordTo(words, inputString, from, to) {
    var lastWord = inputString.slice(from, to);
    if(lastWord != "") {
      words.push(lastWord);
    }
  }

  return module;
})();
