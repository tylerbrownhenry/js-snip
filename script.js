// MEMORIZED

var expensiveFunction = (function() {
  'use strict';

  var funcMemoized = function() {
    var cacheKey = JSON.stringify(Array.prototype.slice.call(arguments));
    var result;

    if (!funcMemoized.cache[cacheKey]) {
        // your expensive computation goes here

        funcMemoized.cache[cacheKey] = result;
    }

    return funcMemoized.cache[cacheKey];
  }

  funcMemoized.cache = {};

  return funcMemoized;
}());