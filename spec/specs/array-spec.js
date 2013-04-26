describe("Array function", function(){

  describe("maxOrMinIndexFrom()", function(){

    it("finds index of element with maximum value from the array", function(){
      expect(EcmaLib.array.maxOrMinIndexFrom([1,9,2,8,3,7,4,6,5])).toEqual(1);
    });

    it("finds index of element with minimum value from the array", function(){
      expect(EcmaLib.array.maxOrMinIndexFrom([1,9,2,8,3,7,4,6,5], "min")).toEqual(0);
    });

    it("works with stringified numbers in array", function(){
      expect(EcmaLib.array.maxOrMinIndexFrom(["-3", 4, 52, "3.2", "8"])).toEqual(2);
    });

    it("returns zero index if all elements are equal", function(){
      expect(EcmaLib.array.maxOrMinIndexFrom([1,1,1])).toEqual(0);
    });

    it("returns -1 if array is empty", function(){
      expect(EcmaLib.array.maxOrMinIndexFrom([])).toEqual(-1);
    });

    it("returns -1 if specified type of calculation not valid", function(){
      expect(EcmaLib.array.maxOrMinIndexFrom([1,2,3], "hello")).toEqual(-1);
    });

  });

  describe("lengthsFor()", function(){
    var longString = function(){
      var str = "1234567890",
          iterations = 10;

      for(var i = 0; i < iterations; i++) {
        str += str.concat(str);
      }
      return str;
    }

    it("returns an array of lengths of specified elements", function(){
      expect(EcmaLib.array.lengthsFor(["aaa", "bbbb", "ccccc"])).toEqual([3,4,5]);
    });

    it("returns empty array if input array is empty", function(){
      expect(EcmaLib.array.lengthsFor([])).toEqual([]);
    });

    it("accepts strings with zero length", function(){
      expect(EcmaLib.array.lengthsFor([""])).toEqual([0])
    });

    it("works with long strings", function(){
      expect(EcmaLib.array.lengthsFor([longString()])).toEqual([longString().length]);
    });
  });

});