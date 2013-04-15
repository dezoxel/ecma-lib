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
});