var _ = {};

(function() {
  /**
   * Call iterator(value, key, collection) for each element of collection.
   * Accepts both arrays and objects.
   */
  _.each = function(collection, iterator) {
    // Your code here.
    if (Array.isArray(collection)) {  // if it's an array do this
      for (var i = 0; i < collection.length; i++) {
        iterator(collection[i], i, collection);
      }
    }
    else {                            // if object
      for (var key in collection) {
        iterator(collection[key], key, collection);
      }
    }
  };
  
  /**
   * Extend a given object with all the properties of the passed-in object(s).
   * Doesn't overwrite keys that already exist in `obj`.
   * Example:
   *
   *   var obj1 = { beads: 'bees?' };
   *
   *   _.extend(obj1, {
   *     beads: 'how hard can it bees?',
   *     cousins: 'dangereaux'
   *   }, {
   *     huge: 'mistake'
   *   }); // obj1 is { beads: 'bees?', cousins: 'dangereaux', huge: 'mistake' }
   */
  _.defaults = function(obj) {
    // Your code here.
    var target = arguments[0];
    for (var argindex = 1; argindex < arguments.length; argindex++) {  // loops thru the # of arguments
      for (var key in arguments[argindex]) {
        if (target[key] === undefined) {
          target[key] = arguments[argindex][key];
        }
      }
    }
    return target;
  };
/*

pass in 6 objects, first is original, 2-6 are objects containing key value pairs
for each one of these objects, assign keys and values if it doesn't exist in original

*/



  /**
   * Return a function that can be called at most one time. Subsequent calls
   * should return the previously returned value.
   */
  _.once = function(func) {
    // Your code here.
    var ran = false;
    var results;
    return function() {
      if (ran === false) {
        results = func.apply(this, arguments);
        ran = true;
      }
      return results;
    }
  };
  
  /**
   * Returns true if `value` exists in `list`. 
   */
  _.contains = function(list, value){
    // Your code here
    var match = false;
    for (var i = 0; i < list.length; i++) {
      if (list[i] === value) {
        match = true;
      }
    }
    return match;
  };

}).call(this);
