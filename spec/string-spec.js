describe("String function", function(){

  describe("isAlpha", function(){

    it("accepts only latin symbols", function(){
      expect(isAlpha("k")).toBe(true);
    });

    it("doesn't support cyrillic symbols", function(){
      expect(isAlpha("ы")).toBe(false);
    });

    it("ignores case-sensitivity", function(){
      expect(isAlpha("J")).toBe(true);
      expect(isAlpha("j")).toBe(true);
    });

    it("rejects punctuation symbols", function(){
      expect(isAlpha(",")).toBe(false) ;
    });
  });

  describe("isAPartOfWord", function(){

    it("allows alphabetical symbols", function(){
      expect(isAPartOfWord("r", 2, "world")).toBe(true);
    });

    it("requires that symbol was surrounded by alphabetical symbols", function(){
      expect(isAPartOfWord("'", 1, "I'm")).toBe(true);
    });
  });
  
});