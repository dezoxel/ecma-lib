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
toWordsList = function(inputString) {
  var words = [],
      size = inputString.length,
      symbol,
      lastStartWordPos = 0;

  for(var i = 0; i < size; i++) {
    symbol = inputString.charAt(i);
    if(isAlpha(symbol)) continue;

    if(isWordPunctuationMark(symbol)) {
      if(!isAPartOfWord(symbol, i, inputString)) {
        saveWordTo(words, inputString, lastStartWordPos, i);
        lastStartWordPos = i + 1;
      } else {
        continue;
      }
    } else {
      saveWordTo(words, inputString, lastStartWordPos, i);
      lastStartWordPos = i + 1;
    }
  } 
  saveWordTo(words, inputString, lastStartWordPos, i);

  return words;
};

saveWordTo = function(words, inputString, from, to) {
  var lastWord = inputString.slice(from, to);
  if(lastWord != "") {
    words.push(lastWord);
  }
};

isAlpha = function(symbol) {
  return symbol >= 'A' && symbol <= 'Z' || symbol >= 'a' && symbol <= 'z';
};

isWordPunctuationMark = function(symbol) {
  return symbol == '-' || symbol == '\'';
};

isAPartOfWord = function(symbol, symbolPos, inputString) {
  return isAlpha(inputString.charAt(symbolPos+1)) && isAlpha(inputString.charAt(symbolPos-1));
};

//--------------------------------------------------------------------------------------------------------------------//
maxLengthStringFrom = function(words, lengths = []) {
  var size = words.length,
      lengths = lengths || lengthsStringsFor(words);

  return words[maxValueIndex(lengths)];
};

minLengthStringFrom = function(words, lengths = []) {
  var size = words.length,
      lengths = lengths || lengthsStringsFor(words);

  return words[minValueIndex(lengths)];
};
