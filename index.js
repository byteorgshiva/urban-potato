var urbanpotato = function(value) {
  var Nothing = {
    bind: function(fn) {
      return this; 
    },
    isNothing: function() {
      return true; 
    },
    val: function() {
      throw new Error("cannot call val() nothing"); 
    },
    maybe: function(def, fn) {
      return def;
    }
  };

  var Something = function(value) {
    return {
      bind: function(fn) {
        return Maybe(fn.call(this, value));
      },
      isNothing: function() { 
        return false; 
      },
      val: function() { 
        return value;
      },
      maybe: function(def, fn) {
        return fn.call(this, value);
      }
    };
  };
  
  if (typeof value === 'undefined' || 
      value === null || 
      (typeof value.isNothing !== 'undefined' && value.isNothing()))
  {
    return Nothing;
  }

  return Something(value);
};

var isNothing = function() {
  var self = this;
  return self.length == 0;
};

//@todo check if this method is added in Node Array Property
if (!Array.prototype.isNothing)
   Object.defineProperty(Array.prototype, 'isNothing', { value: isNothing });

module.exports = urbanpotato;
