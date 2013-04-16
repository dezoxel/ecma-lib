describe("Array function", function(){

  describe("maxOrMinIndexFrom()", function(){

    it("finds index of element with maximum value from the array", function(){
      expect(maxOrMinIndexFrom([1,9,2,8,3,7,4,6,5])).toEqual(1);
    });

    it("finds index of element with minimum value from the array", function(){
      expect(maxOrMinIndexFrom([1,9,2,8,3,7,4,6,5], "min")).toEqual(0);
    });

    it("works with stringified numbers in array", function(){
      expect(maxOrMinIndexFrom(["-3", 4, 52, "3.2", "8"])).toEqual(2);
    });

    it("returns zero index if all elements are equal", function(){
      expect(maxOrMinIndexFrom([1,1,1])).toEqual(0);
    });

    it("returns -1 if array is empty", function(){
      expect(maxOrMinIndexFrom([])).toEqual(-1);
    });

    it("returns -1 if specified type of calculation not valid", function(){
      expect(maxOrMinIndexFrom([1,2,3], "hello")).toEqual(-1);
    });

  });

});