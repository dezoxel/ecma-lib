lengthsStringsFor = function(strings) {
  var lengths = [],
      count = strings.length;

  for(var i = 0; i < count; i++) {
    lengths[i] = strings[i].length;
  }
  return lengths;
};

maxValueIndex = function(numbers) {
  var count = numbers.length,
      maxIndex = 0;
  for(var i = maxIndex; i < count; i++) {
    if(numbers[maxIndex] < numbers[i]) {
      maxIndex = i;
    }
  }
  return maxIndex;
};

minValueIndex = function(numbers) {
  var count = numbers.length,
      minIndex = 0;
  for(var i = minIndex; i < count; i++) {
    if(numbers[minIndex] > numbers[i]) {
      minIndex = i;
    }
  }
  return minIndex;
};
