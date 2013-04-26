describe("String function", function(){
  var punctuationMarks = function(){ return ["!", "\"", "@", ":", ";", "*", "(", ")", "?", ".", "-", "'"]; },
      withoutWordPunctuation = function(){ return punctuationMarks().slice(0, punctuationMarks().length - 2) },
      latinSymbols = function(){ return ["a", "k", "z"]; },
      latinUppercasedSymbols = function(){ return ["A", "K", "Z"]; },
      cyrillicSymbols = function(){ return ["а", "в", "п", "о", "я"]; };


  describe("isAlpha()", function(){

    it("accepts only latin symbols", function(){
      latinSymbols().forEach(function(s){
        expect(EcmaLib.string.isAlpha(s)).toBe(true);
      });
    });

    it("ignores case-sensitivity", function(){
      latinUppercasedSymbols().forEach(function(s){
        expect(EcmaLib.string.isAlpha(s)).toBe(true);
      });
    });

    it("doesn't support cyrillic symbols", function(){
      cyrillicSymbols().forEach(function(s){
        expect(EcmaLib.string.isAlpha(s)).toBe(false);
      });
    });

    it("rejects punctuation marks", function(){
      punctuationMarks().forEach(function(s){
        expect(EcmaLib.string.isAlpha(s)).toBe(false);
      });
    });

  });

  describe("isAPartOfWord()", function(){

    it("requires that symbol was surrounded by alphabetical symbols", function(){
      expect(EcmaLib.string.isAPartOfWord("'", "I'm", 1)).toBe(true);
    });

    it("allows alphabetical symbols", function(){
      latinSymbols().forEach(function(s){
        expect(EcmaLib.string.isAPartOfWord(s, "some"+s+"word", 4)).toBe(true);
      });
    });

    it("accepts any punctuation mark", function(){
      punctuationMarks().forEach(function(s){
        expect(EcmaLib.string.isAPartOfWord(s, "abc"+s+"def", 3)).toBe(true);
      });
    });

    it("finds first position of symbol if 'symbolPos' parameter not specified", function(){
      expect(EcmaLib.string.isAPartOfWord("'", "I'm")).toBe(true);
    });

    describe("returns false", function(){

      it("if left symbol is not alphabetical", function(){
        expect(EcmaLib.string.isAPartOfWord("'", " 'em")).toBe(false);
      });

      it("if right symbol is not alphabetical", function(){
        expect(EcmaLib.string.isAPartOfWord("+", "Max+ Company")).toBe(false);
      });

      it("if it is begin of string", function(){
        expect(EcmaLib.string.isAPartOfWord("+", "'em")).toBe(false);
      });

      it("if it is end of string", function(){
        expect(EcmaLib.string.isAPartOfWord("+", "Max+")).toBe(false);
      });

    });

  });

  describe("isWordPunctuationMark()", function(){

    it("allows to use '-' inside of word", function(){
      expect(EcmaLib.string.isWordPunctuationMark("-")).toBe(true);
    });

    it("allows to use ' inside of word", function(){
      expect(EcmaLib.string.isWordPunctuationMark("'")).toBe(true);
    });

    it("rejects all alphabetical symbols", function(){
      latinSymbols().forEach(function(s){
        expect(EcmaLib.string.isWordPunctuationMark(s)).toBe(false);
      });
    });

    it("rejects all other punctuation marks", function(){
      withoutWordPunctuation().forEach(function(s){
        expect(EcmaLib.string.isWordPunctuationMark(s)).toBe(false);
      });
    });

  });

  describe("toWordsList()", function(){

    describe("when whitespace", function() {

      it("slices by space", function(){
        expect(EcmaLib.string.toWordsList("hello world")).toEqual(["hello", "world"]);
      });

      it("slices by new line character", function(){
        expect(EcmaLib.string.toWordsList("hello\nworld")).toEqual(["hello", "world"]);
      });

      it("slices by tabulation", function(){
        expect(EcmaLib.string.toWordsList("hello\tworld")).toEqual(["hello", "world"]);
      });

      it("ignores many whitespace characters between words", function(){
        expect(EcmaLib.string.toWordsList("hello  \n \t\t\t world")).toEqual(["hello", "world"]);
      });

    });

    it("accepts one-symbol words", function(){
      expect(EcmaLib.string.toWordsList("a u")).toEqual(["a", "u"]);
    });

    it("doesn't slices by '-' character inside the word", function(){
      expect(EcmaLib.string.toWordsList("red-green-blue color")).toEqual(["red-green-blue", "color"]);
    });

    it("doesn't slices by ' character inside the word", function(){
      expect(EcmaLib.string.toWordsList("I'm super man")).toEqual(["I'm", "super", "man"]);
    });

    it("slices by any punctuation mark except ' and -", function(){
      withoutWordPunctuation().forEach(function(s){
        expect(EcmaLib.string.toWordsList("hello" + s + "world")).toEqual(["hello", "world"]);
      });
    });

    it("ignores punctuation marks at the begining", function(){
      expect(EcmaLib.string.toWordsList(",?&hello world")).toEqual(["hello", "world"]);
    });

    it("ignores punctuation marks at the end", function(){
      expect(EcmaLib.string.toWordsList("hello world&*$(#")).toEqual(["hello", "world"]);
    });

    it("ignores many punctuation marks between words", function(){
      expect(EcmaLib.string.toWordsList("hello&*($#@world")).toEqual(["hello", "world"]);
    });

    it("hasn't words if string is empty", function(){
      expect(EcmaLib.string.toWordsList("")).toEqual([]);
    });

    it("hasn't words if string hasn't alphabetical symbols", function(){
      expect(EcmaLib.string.toWordsList("&$*@(%")).toEqual([]);
    });

  });

  });
