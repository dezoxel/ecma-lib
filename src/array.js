var EcmaLib = EcmaLib || {};

EcmaLib.array = (function(){
  var module = {};

  module.lengthsFor = function(strings) {
    var lengths = [],
        count = strings.length;

    for(var i = 0; i < count; i++) {
      lengths[i] = strings[i].length;
    }
    return lengths;
  }

  module.maxOrMinIndexFrom = function(numbers, type) {
    type = type || "max";
    var count = numbers.length,
        index = 0;

    if(count == 0) {
      return -1;
    }

    if(["max", "min"].indexOf(type) == -1) {
      return -1;
    }

    for(var i = index; i < count; i++) {
      if(type == "max" && numbers[index] < numbers[i] ||
         type == "min" && numbers[index] > numbers[i]) {
        index = i;
      }
    }
    return index;
  }

  return module;
})();

