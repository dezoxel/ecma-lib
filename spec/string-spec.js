describe("String function", function(){
  var punctuationMarks = function(){ return ["!", "\"", "'", "@", ":", ";", "*", "(", ")", "?", ".", "-"]; },
      latinSymbols = function(){ return ["a", "k", "z"]; },
      latinUppercasedSymbols = function(){ return ["A", "K", "Z"]; },
      cyrillicSymbols = function(){ return ["а", "в", "п", "о", "я"]; };


  describe("isAlpha", function(){

    it("accepts only latin symbols", function(){
      latinSymbols().forEach(function(s){
        expect(isAlpha(s)).toBe(true);
      });
    });

    it("ignores case-sensitivity", function(){
      latinUppercasedSymbols().forEach(function(s){
        expect(isAlpha(s)).toBe(true);
      });
    });

    it("doesn't support cyrillic symbols", function(){
      cyrillicSymbols().forEach(function(s){
        expect(isAlpha(s)).toBe(false);
      });
    });

    it("rejects punctuation marks", function(){
      punctuationMarks().forEach(function(s){
        expect(isAlpha(s)).toBe(false);
      });
    });

  });

  describe("isAPartOfWord", function(){

    it("requires that symbol was surrounded by alphabetical symbols", function(){
      expect(isAPartOfWord("'", "I'm", 1)).toBe(true);
    });

    it("allows alphabetical symbols", function(){
      latinSymbols().forEach(function(s){
        expect(isAPartOfWord(s, "some"+s+"word", 4)).toBe(true);
      });
    });

    it("accepts any punctuation mark", function(){
      punctuationMarks().forEach(function(s){
        expect(isAPartOfWord(s, "abc"+s+"def", 3)).toBe(true);
      });
    });

    it("finds first position of symbol if 'symbolPos' parameter not specified", function(){
      expect(isAPartOfWord("'", "I'm")).toBe(true);
    });

    describe("returns false", function(){
      
      it("if left symbol is not alphabetical", function(){
        expect(isAPartOfWord("'", " 'em")).toBe(false);
      });

      it("if right symbol is not alphabetical", function(){
        expect(isAPartOfWord("+", "Max+ Company")).toBe(false);
      });

      it("if it is begin of string", function(){
        expect(isAPartOfWord("+", "'em")).toBe(false);
      });

      it("if it is end of string", function(){
        expect(isAPartOfWord("+", "Max+")).toBe(false);
      });

    });

  });

  describe("isWordPunctuationMark", function(){
    var punctuationMarksCutted = function(){ return ["!", "\"", "@", ":", ";", "*", "(", ")", "?", "."]; };

    it("allows to use '-' inside of word", function(){
      expect(isWordPunctuationMark("-")).toBe(true);
    });

    it("allows to use ' inside of word", function(){
      expect(isWordPunctuationMark("'")).toBe(true);
    });

    it("rejects all alphabetical symbols", function(){
      latinSymbols().forEach(function(s){
        expect(isWordPunctuationMark(s)).toBe(false);
      });
    });

    it("rejects all other punctuation marks", function(){
      punctuationMarksCutted().forEach(function(s){
        expect(isWordPunctuationMark(s)).toBe(false);
      });
    });

  });
});