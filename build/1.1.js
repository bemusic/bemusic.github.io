webpackJsonp([1],{

/***/ 10:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	__webpack_require__(21);

/***/ },

/***/ 21:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	__webpack_require__(32);
	
	__webpack_require__(43);

/***/ },

/***/ 32:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(51);


/***/ },

/***/ 43:
/***/ function(module, exports, __webpack_require__) {

	// chain over to `prfun/wrap`, which allows users to specify a non-default
	// Promise implementation if they prefer.
	__webpack_require__(53)();


/***/ },

/***/ 51:
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(84);
	__webpack_require__(85);


/***/ },

/***/ 53:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(64);


/***/ },

/***/ 64:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {// Utility functions for ES6 Promises.
	
	module.exports = function(Promise) {
	  "use strict";
	
	  if (!Promise) { Promise = global.Promise; }
	  // Use Promise implementation from es6-shim if there isn't already one
	  // installed.
	  if (!Promise) { __webpack_require__(91); Promise = global.Promise; }
	
	  // ---------- collections --------------
	
	  // Allow Promise.all to accept a promise for an array (or iterable).
	  Promise.prototype.all = function() {
	    var P = this.constructor || Promise;
	    return this.then(function(value) {
	      return P.all(value);
	    });
	  };
	
	  // Like `Promise.all` but generate array from varargs
	  Promise.join = function() {
	    var P = this || Promise;
	    return P.all(arguments);
	  };
	
	  // Applies the `callback` to the promised value of each element of the
	  // promised array.  Returns a promise for an array of values; that is,
	  // it implicitly applies `Promise.all` to resolve all promises returned
	  // by the mapping function.
	  Promise.prototype.map = function(callback, thisArg) {
	    var P = this.constructor || Promise;
	    return P.map(this, callback, thisArg);
	  };
	
	  var arrayMap = Array.prototype.map;
	  Promise.map = function(pArray, callback, thisArg) {
	    var P = this || Promise;
	    return P.resolve(pArray).then(function(arr) {
	      return P.all(arrayMap.call(arr, function(pElem, index, arr_) {
	        return P.resolve(pElem).then(function(elem) {
	          var t = (thisArg === undefined) ? this : thisArg;
	          return callback.call(t, elem, index, arr_);
	        });
	      }));
	    });
	  };
	
	  // Applies the `callback` to the promised value of each element of
	  // the promised array, and constructs a new array of all the values
	  // for which callback returns a (promise of a) true value.
	  Promise.prototype.filter = function(callback, thisArg) {
	    var P = this.constructor || Promise;
	    return P.filter(this, callback, thisArg);
	  };
	
	  var arrayFilter = Array.prototype.filter;
	  Promise.filter = function(pArray, callback, thisArg) {
	    var P = this || Promise;
	    return P.resolve(pArray).then(function(arr) {
	      var f = new Array(arr.length);
	      return P.all(arrayMap.call(arr, function(pElem, index, arr_) {
	        return P.resolve(pElem).then(function(elem) {
	          var t = (thisArg === undefined) ? this : thisArg;
	          var pBool = callback.call(t, elem, index, arr_);
	          return P.resolve(pBool).then(function(bool) {
	            f[index] = bool;
	            return elem;
	          });
	        });
	      })).then(function(resArr) {
	        return resArr.filter(function(elem, index) { return f[index]; });
	      });
	    });
	  };
	
	  // Like `Promise.all` but for object properties instead of array items.
	  Promise.prototype.props = function() {
	    var P = this.constructor || Promise;
	    return P.props(this);
	  };
	
	  Promise.props = function(pObj) {
	    var P = this || Promise;
	    return P.resolve(pObj).then(function(obj) {
	      var result = {};
	      var keys = Object.keys(obj);
	      if (Object(obj) !== obj) {
	        // Object.keys accepts strings, numbers, etc in ES6.
	        throw new TypeError('not an object');
	      }
	      return P.all(keys.map(function(k) { return obj[k]; })).
	        then(function(values) {
	          keys.forEach(function(k, i) {
	            result[k] = values[i];
	          });
	          return result;
	        });
	    });
	  };
	
	  // Allow Promise.race to accept a promise for an array (or iterable).
	  Promise.prototype.race = function() {
	    var P = this.constructor || Promise;
	    return this.then(function(value) {
	      return P.race(value);
	    });
	  };
	
	  // helper for reduce/reduceAll
	  var reducer = function(P, callback) {
	    return function(pPrev, pCurrent, index, arr) {
	      return P.resolve(pPrev).then(function(prev) {
	        return P.resolve(pCurrent).then(function(current) {
	          return callback.call(this, prev, current, index, arr);
	        });
	      });
	    };
	  };
	
	  // Reduce left-to-right an array which contains promises.
	  Promise.prototype.reduce = function(callback) {
	    var P = this.constructor || Promise;
	    if (arguments.length <= 1) {
	      return P.reduce(this, callback);
	    } else {
	      return P.reduce(this, callback, arguments[1]);
	    }
	  };
	
	  var arrayReduce = Array.prototype.reduce;
	  Promise.reduce = function(pArray, callback) {
	    var P = this || Promise;
	    if (arguments.length <= 2) {
	      return P.resolve(pArray).then(function(arr) {
	        return arrayReduce.call(arr, reducer(P, callback));
	      });
	    } else {
	      var initialValue = P.resolve(arguments[2]);
	      return P.resolve(pArray).then(function(arr) {
	        return arrayReduce.call(arr, reducer(P, callback), initialValue);
	      });
	    }
	  };
	
	  // Reduce right-to-left an array which contains promises.
	  Promise.prototype.reduceRight = function(callback) {
	    var P = this.constructor || Promise;
	    if (arguments.length <= 1) {
	      return P.reduceRight(this, callback);
	    } else {
	      return P.reduceRight(this, callback, arguments[1]);
	    }
	  };
	
	  var arrayReduceRight = Array.prototype.reduceRight;
	  Promise.reduceRight = function(pArray, callback) {
	    var P = this || Promise;
	    if (arguments.length <= 2) {
	      return P.resolve(pArray).then(function(arr) {
	        return arrayReduceRight.call(arr, reducer(P, callback));
	      });
	    } else {
	      var initialValue = P.resolve(arguments[2]);
	      return P.resolve(pArray).then(function(arr) {
	        return arrayReduceRight.call(arr, reducer(P, callback), initialValue);
	      });
	    }
	  };
	
	  Promise.prototype.spread = function(onFulfilled, onRejected) {
	    var P = this.constructor || Promise;
	    var f = onFulfilled ? function(pArgs) {
	      return P.all(pArgs).then(function(args) {
	        return onFulfilled.apply(this, args);
	      });
	    } : undefined;
	    var r = onRejected ? function(pArgs) {
	      return P.all(pArgs).then(function(args) {
	        return onRejected.apply(this, args);
	      });
	    } : undefined;
	    return this.then(f, r);
	  };
	
	  // ---------- Miscellaneous utility functions --------------
	
	  // compatibility with q/when/jquery/etc.
	  // use of this interface is discouraged.
	  var Deferred = function Deferred() { };
	  Object.defineProperties(Deferred.prototype, {
	    resolver: {
	      enumerable: true,
	      get: function() {
	        return { resolve: this.resolve, reject: this.reject };
	      }
	    },
	    callback: {
	      enumerable: true,
	      get: function() {
	        var resolve = this.resolve, reject = this.reject;
	        return function(err, value) {
	          if (err) { return reject(err); }
	          return resolve(value);
	        };
	      }
	    }
	  });
	  Promise.defer = function() {
	    var P = this || Promise;
	    var deferred = new Deferred();
	    deferred.promise = new P(function(resolve, reject) {
	      deferred.resolve = resolve;
	      deferred.reject = reject;
	    });
	    return deferred;
	  };
	
	  Promise.prototype.call = function(propertyName) {
	    var P = this.constructor || Promise;
	    var pArgs = Array.prototype.slice.call(arguments, 1);
	    return this.then(function(obj) {
	      return P.all(pArgs).then(function(args) {
	        return obj[propertyName].apply(obj, args);
	      });
	    });
	  };
	
	  Promise.prototype.get = function(propertyName) {
	    return this.then(function(obj) {
	      return obj[propertyName];
	    });
	  };
	
	  Promise.prototype['return'] = function(v) {
	    return this.then(function() { return v; });
	  };
	
	  Promise.prototype.tap = function(handler) {
	    var P = this.constructor || Promise;
	    return this.then(function(v) {
	      return P.resolve(handler(v))['return'](v);
	    });
	  };
	
	  Promise.prototype['throw'] = function(e) {
	    // ensure that e is resolved, if it is a promise.
	    return this['return'](e).then(function(ee) { throw ee; });
	  };
	
	  Promise.prototype.done = function() {
	    if (arguments.length > 0) {
	      // compatibility
	      return this.then.apply(this, arguments).done();
	    }
	    this['catch'](function(e) {
	      // throw from new scope to ensure the exception will be unhandled
	      setTimeout(function() { throw e; }, 0);
	    });
	    // not chainable!
	  };
	
	  // ---------- Timeouts and delays --------------
	
	  Promise.prototype.delay = function(ms) {
	    var P = this.constructor || Promise;
	    return P.delay(this, ms);
	  };
	
	  Promise.delay = function(pValue, ms) {
	    var P = this || Promise;
	    if (arguments.length===1) {
	      ms = pValue;
	      pValue = undefined;
	    }
	    return P.resolve(pValue).then(function(value) {
	      return new P(function(resolve, reject) {
	        setTimeout(function() { resolve(value); }, ms);
	      });
	    });
	  };
	
	  var TimeoutError = Promise.TimeoutError = function(message) {
	    this.message = (typeof message === 'string') ? message : 'timeout';
	    this.name = 'TimeoutError';
	    if (Error.captureStackTrace) {
	      Error.captureStackTrace(this, this.constructor);
	    }
	  };
	  TimeoutError.prototype = Object.create(Error.prototype);
	
	  var makeRejector = function(reject, message, ms) {
	    // create this function in an outer scope so that we don't inadvertently
	    // keep a reference to the promise here.  Perhaps this is overkill.
	    var id = setTimeout(function() { reject(new TimeoutError(message)); }, ms);
	    return function() { clearTimeout(id); };
	  };
	  Promise.prototype.timeout = function(ms, message) {
	    var P = this.constructor || Promise;
	    var promise = this;
	    return new P(function(resolve, reject) {
	      promise.then(resolve, reject);
	      var cleanup = makeRejector(reject, message, ms);
	      promise.then(cleanup, cleanup);
	    });
	  };
	
	  // ---------- try/caught/finally --------------
	
	  Promise['try'] = function(fn, ctx /* ..args */) {
	    var P = this || Promise;
	    return P.all(arguments).then(function(args) {
	      var fn = args[0], ctx = args[1], rest = args.slice(2);
	      return new P(function(resolve, reject) {
	        try {
	          resolve(fn.apply(ctx, rest));
	        } catch (e) {
	          reject(e);
	        }
	      });
	    });
	  };
	
	  Promise.prototype.caught = function(predicate, handler) {
	    var promise = this;
	    if (arguments.length<=1) { return promise['catch'](predicate); }
	    var predicates = Array.prototype.slice.call(arguments);
	    handler = predicates.pop();
	    predicates = predicates.map(function(v) {
	      /* jshint eqnull: true */
	      var isErrorType = (v === Error) ||
	        (v != null && v.prototype instanceof Error);
	      if (isErrorType) {
	        return function(e) { return (e instanceof v); };
	      } else if (typeof v === 'function') {
	        return function(e) { return !!v(e); };
	      } else {
	        return function(e) {
	          throw new TypeError('caught filter must inherit from Error '+
	                              'or be a simple predicate function');
	        };
	      }
	    });
	    return promise['catch'](function(e) {
	      for (var i=0; i<predicates.length; i++) {
	        if (predicates[i](e)) {
	          return handler.call(this, e);
	        }
	      }
	      // re-throw
	      throw e;
	    });
	  };
	
	  // XXX The return semantics are a bit funny.
	  // eg:
	  // > f = function(g, h) { try { return g(); } finally { return h(); } };
	  // > f(function(){return 1;}, function(){return 2;})
	  // 2
	  // > f(function(){return 1;}, function(){throw new Error('b');})
	  // Error: b
	  // This method would return '1' in the first case (but 'b' in the second).
	  Promise.prototype['finally'] = function(handler) {
	    var promise = this;
	    var P = this.constructor || Promise;
	    return new P(function(resolve, reject) {
	      promise.then(function(value) {
	        var cb = function() { resolve(value); };
	        P.resolve().then(handler).then(cb, reject);
	      }, function(reason) {
	        var cb = function() { reject(reason); };
	        P.resolve().then(handler).then(cb, reject);
	      });
	    });
	  };
	
	  // ---------- wrappers and function-writing helpers --------------
	
	  // Transparently handle synchronous exceptions and early returns.
	  // This is like `Q.promised`.
	  Promise.method = function(fn) {
	    var P = this || Promise;
	    if (typeof fn !== 'function') {
	      throw new TypeError('must wrap a function'); // fail fast
	    }
	    return function() {
	      var self = this;
	      var args = [ fn, this ];
	      Array.prototype.push.apply(args, arguments);
	      return P['try'].apply(P, args);
	    };
	  };
	
	  // Register a node-style callback on this promise.
	  Promise.prototype.nodify = function(callback) {
	    var promise = this;
	    if (callback) {
	      var queueThrow = function(e) {
	        // don't let this exception get swallowed by the Promise handlers
	        setTimeout(function() { throw e; }, 0);
	      };
	      promise.then(function(v) {
	        try {
	          callback.call(this, null, v);
	        } catch (e) {
	          queueThrow(e);
	        }
	      }, function(r) {
	        try {
	          callback.call(this, r);
	        } catch (e) {
	          queueThrow(e);
	        }
	      });
	    }
	    return promise;
	  };
	
	  // Returns a function that wraps a given nodeFunction
	  Promise.promisify = function(nodeFunction, names, optThis) {
	    var P = this || Promise;
	    var hasThis = (arguments.length > 2);
	    return function() {
	      var self = hasThis ? optThis : this;
	      var args = Array.prototype.slice.call(arguments);
	      return new P(function(resolve, reject) {
	        args.push(function(e, v) {
	          if (e) {
	            reject(e);
	          } else if (names === true) {
	            resolve(Array.prototype.slice.call(arguments, 1));
	          } else if (names) {
	            var value = {};
	            for (var index in names) {
	              value[names[index]] = arguments[(+index) + 1];
	            }
	            resolve(value);
	          } else {
	            resolve(v);
	          }
	        });
	        try {
	          nodeFunction.apply(self, args);
	        } catch(e) {
	          reject(e);
	        }
	      });
	    };
	  };
	
	  // Guards: limit the amount of parallelism.
	
	  // Implementation borrowed from:
	  // https://github.com/cujojs/when/blob/master/guard.js
	  // Authors: Brian Cavalier, John Hann, Sakari Jokinen
	  // docs at: https://github.com/cujojs/when/blob/master/docs/api.md#whenguard
	
	  /**
	   * Creates a guarded version of f that can only be entered when the supplied
	   * condition allows.
	   * @param {function} condition represents a critical section that may only
	   *  be entered when allowed by the condition
	   * @param {function} f function to guard
	   * @returns {function} guarded version of f
	   */
	  Promise.guard = function(condition, fn) {
	    var P = this || Promise;
	    if (typeof condition === 'number') {
	      condition = P.guard.n(condition);
	    }
	    return function() {
	      var self, args;
	
	      self = this;
	      args = arguments;
	
	      return P.resolve(condition()).then(function(exit) {
	        return P.resolve(fn.apply(self, args)).finally(exit);
	      });
	    };
	  };
	
	  /**
	   * Creates a condition that allows only n simultaneous executions
	   * of a guarded function
	   * @param {number} allowed number of allowed simultaneous executions
	   * @returns {function} condition function which returns a promise that
	   *  fulfills when the critical section may be entered.  The fulfillment
	   *  value is a function ("notifyExit") that must be called when the critical
	   *  section has been exited.
	   */
	  Promise.guard.n = function (allowed) {
	    var count, waiting;
	
	    count = 0;
	    waiting = [];
	
	    var exit = function() {
	      if (count > 0) {
	        count--;
	      }
	      if(waiting.length) {
	        waiting.shift()(exit);
	      }
	    };
	
	    return function enter() {
	      return new Promise(function(resolve) {
	        if(count < allowed) {
	          resolve(exit);
	        } else {
	          waiting.push(resolve);
	        }
	        count += 1;
	      });
	    };
	  };
	
	  // Promise#bind()
	  // Idea borrowed from bluebird.
	  Promise.bind = function(newThis) {
	    return this.resolve().bind(newThis);
	  };
	
	  Promise.prototype.bind = function(newThis) {
	    var SuperPromise = this._bindSuper || this.constructor || Promise;
	    // create a new Promise subclass (this is less cumbersome in es6, sigh)
	    var BoundPromise = function(exec) {
	      return SuperPromise.call(this, exec);
	    };
	    Object.setPrototypeOf(BoundPromise, SuperPromise);
	    BoundPromise.prototype = Object.create(SuperPromise.prototype);
	    BoundPromise.prototype.constructor = BoundPromise;
	    BoundPromise.prototype._bindSuper = SuperPromise;
	
	    BoundPromise.prototype.then = (function(superThen) {
	      return function(f, r) {
	        var ff = f && f.bind(newThis);
	        var rr = r && r.bind(newThis);
	        return superThen.call(this, ff, rr);
	      };
	    })(BoundPromise.prototype.then);
	    return newThis ? BoundPromise.resolve(this) : SuperPromise.resolve(this);
	  };
	
	  // Generators.
	  // Implementation borrowed from Q.async()
	  Promise.async = function(makeGenerator) {
	    var P = this || Promise;
	    return function() {
	      var generator, callback, errback;
	      // when verb is "send", arg is a value
	      // when verb is "throw", arg is an exception
	      function continuer(verb, arg) {
	        var result;
	        try {
	          result = generator[verb](arg);
	        } catch (exception) {
	          return P.reject(exception);
	        }
	        // xxx: possibly check for array-like (or iterable) value and
	        // use Promise.all() before returning/invoking callback?
	        if (result.done) {
	          return result.value;
	        } else {
	          return P.resolve(result.value).then(callback, errback);
	        }
	      }
	      generator = makeGenerator.apply(this, arguments);
	      callback = continuer.bind(continuer, "next");
	      errback = continuer.bind(continuer, "throw");
	      return callback();
	    };
	  };
	
	  return Promise;
	};
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },

/***/ 84:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Core.js 0.4.1
	 * https://github.com/zloirock/core-js
	 * License: http://rock.mit-license.org
	 * © 2015 Denis Pushkarev
	 */
	!function(returnThis, framework, undefined){
	'use strict';
	
	/******************************************************************************
	 * Module : common                                                            *
	 ******************************************************************************/
	
	var global          = returnThis()
	  // Shortcuts for [[Class]] & property names
	  , OBJECT          = 'Object'
	  , FUNCTION        = 'Function'
	  , ARRAY           = 'Array'
	  , STRING          = 'String'
	  , NUMBER          = 'Number'
	  , REGEXP          = 'RegExp'
	  , DATE            = 'Date'
	  , MAP             = 'Map'
	  , SET             = 'Set'
	  , WEAKMAP         = 'WeakMap'
	  , WEAKSET         = 'WeakSet'
	  , SYMBOL          = 'Symbol'
	  , PROMISE         = 'Promise'
	  , MATH            = 'Math'
	  , ARGUMENTS       = 'Arguments'
	  , PROTOTYPE       = 'prototype'
	  , CONSTRUCTOR     = 'constructor'
	  , TO_STRING       = 'toString'
	  , TO_STRING_TAG   = TO_STRING + 'Tag'
	  , TO_LOCALE       = 'toLocaleString'
	  , HAS_OWN         = 'hasOwnProperty'
	  , FOR_EACH        = 'forEach'
	  , ITERATOR        = 'iterator'
	  , FF_ITERATOR     = '@@' + ITERATOR
	  , PROCESS         = 'process'
	  , CREATE_ELEMENT  = 'createElement'
	  // Aliases global objects and prototypes
	  , Function        = global[FUNCTION]
	  , Object          = global[OBJECT]
	  , Array           = global[ARRAY]
	  , String          = global[STRING]
	  , Number          = global[NUMBER]
	  , RegExp          = global[REGEXP]
	  , Date            = global[DATE]
	  , Map             = global[MAP]
	  , Set             = global[SET]
	  , WeakMap         = global[WEAKMAP]
	  , WeakSet         = global[WEAKSET]
	  , Symbol          = global[SYMBOL]
	  , Math            = global[MATH]
	  , TypeError       = global.TypeError
	  , setTimeout      = global.setTimeout
	  , setImmediate    = global.setImmediate
	  , clearImmediate  = global.clearImmediate
	  , process         = global[PROCESS]
	  , nextTick        = process && process.nextTick
	  , document        = global.document
	  , html            = document && document.documentElement
	  , navigator       = global.navigator
	  , define          = global.define
	  , ArrayProto      = Array[PROTOTYPE]
	  , ObjectProto     = Object[PROTOTYPE]
	  , FunctionProto   = Function[PROTOTYPE]
	  , Infinity        = 1 / 0
	  , DOT             = '.';
	
	// http://jsperf.com/core-js-isobject
	function isObject(it){
	  return it != null && (typeof it == 'object' || typeof it == 'function');
	}
	function isFunction(it){
	  return typeof it == 'function';
	}
	// Native function?
	var isNative = ctx(/./.test, /\[native code\]\s*\}\s*$/, 1);
	
	// Object internal [[Class]] or toStringTag
	// http://people.mozilla.org/~jorendorff/es6-draft.html#sec-object.prototype.tostring
	var buildIn = {
	  Undefined: 1, Null: 1, Array: 1, String: 1, Arguments: 1,
	  Function: 1, Error: 1, Boolean: 1, Number: 1, Date: 1, RegExp:1 
	} , toString = ObjectProto[TO_STRING];
	function setToStringTag(it, tag, stat){
	  if(it && !has(it = stat ? it : it[PROTOTYPE], SYMBOL_TAG))hidden(it, SYMBOL_TAG, tag);
	}
	function cof(it){
	  return it == undefined ? it === undefined
	    ? 'Undefined' : 'Null' : toString.call(it).slice(8, -1);
	}
	function classof(it){
	  var klass = cof(it), tag;
	  return klass == OBJECT && (tag = it[SYMBOL_TAG]) ? has(buildIn, tag) ? '~' + tag : tag : klass;
	}
	
	// Function
	var call  = FunctionProto.call
	  , apply = FunctionProto.apply
	  , REFERENCE_GET;
	// Partial apply
	function part(/* ...args */){
	  var length = arguments.length
	    , args   = Array(length)
	    , i      = 0
	    , _      = path._
	    , holder = false;
	  while(length > i)if((args[i] = arguments[i++]) === _)holder = true;
	  return partial(this, args, length, holder, _, false);
	}
	// Internal partial application & context binding
	function partial(fn, argsPart, lengthPart, holder, _, bind, context){
	  assertFunction(fn);
	  return function(/* ...args */){
	    var that   = bind ? context : this
	      , length = arguments.length
	      , i = 0, j = 0, args;
	    if(!holder && !length)return invoke(fn, argsPart, that);
	    args = argsPart.slice();
	    if(holder)for(;lengthPart > i; i++)if(args[i] === _)args[i] = arguments[j++];
	    while(length > j)args.push(arguments[j++]);
	    return invoke(fn, args, that);
	  }
	}
	// Optional / simple context binding
	function ctx(fn, that, length){
	  assertFunction(fn);
	  if(~length && that === undefined)return fn;
	  switch(length){
	    case 1: return function(a){
	      return fn.call(that, a);
	    }
	    case 2: return function(a, b){
	      return fn.call(that, a, b);
	    }
	    case 3: return function(a, b, c){
	      return fn.call(that, a, b, c);
	    }
	  } return function(/* ...args */){
	      return fn.apply(that, arguments);
	  }
	}
	// Fast apply
	// http://jsperf.lnkit.com/fast-apply/5
	function invoke(fn, args, that){
	  var un = that === undefined;
	  switch(args.length | 0){
	    case 0: return un ? fn()
	                      : fn.call(that);
	    case 1: return un ? fn(args[0])
	                      : fn.call(that, args[0]);
	    case 2: return un ? fn(args[0], args[1])
	                      : fn.call(that, args[0], args[1]);
	    case 3: return un ? fn(args[0], args[1], args[2])
	                      : fn.call(that, args[0], args[1], args[2]);
	    case 4: return un ? fn(args[0], args[1], args[2], args[3])
	                      : fn.call(that, args[0], args[1], args[2], args[3]);
	    case 5: return un ? fn(args[0], args[1], args[2], args[3], args[4])
	                      : fn.call(that, args[0], args[1], args[2], args[3], args[4]);
	  } return              fn.apply(that, args);
	}
	function construct(target, argumentsList){
	  var instance = create(target[PROTOTYPE])
	    , result   = apply.call(target, instance, argumentsList);
	  return isObject(result) ? result : instance;
	}
	
	// Object:
	var create           = Object.create
	  , getPrototypeOf   = Object.getPrototypeOf
	  , setPrototypeOf   = Object.setPrototypeOf
	  , defineProperty   = Object.defineProperty
	  , defineProperties = Object.defineProperties
	  , getOwnDescriptor = Object.getOwnPropertyDescriptor
	  , getKeys          = Object.keys
	  , getNames         = Object.getOwnPropertyNames
	  , getSymbols       = Object.getOwnPropertySymbols
	  , has              = ctx(call, ObjectProto[HAS_OWN], 2)
	  // Dummy, fix for not array-like ES3 string in es5 module
	  , ES5Object        = Object;
	function returnIt(it){
	  return it;
	}
	function get(object, key){
	  if(has(object, key))return object[key];
	}
	function ownKeys(it){
	  return getSymbols ? getNames(it).concat(getSymbols(it)) : getNames(it);
	}
	// 19.1.2.1 Object.assign(target, source, ...)
	var assign = Object.assign || function(target, source){
	  var T = Object(assertDefined(target))
	    , l = arguments.length
	    , i = 1;
	  while(l > i){
	    var S      = ES5Object(arguments[i++])
	      , keys   = getKeys(S)
	      , length = keys.length
	      , j      = 0
	      , key;
	    while(length > j)T[key = keys[j++]] = S[key];
	  }
	  return T;
	}
	function keyOf(object, el){
	  var O      = ES5Object(object)
	    , keys   = getKeys(O)
	    , length = keys.length
	    , index  = 0
	    , key;
	  while(length > index)if(O[key = keys[index++]] === el)return key;
	}
	
	// Array
	// array('str1,str2,str3') => ['str1', 'str2', 'str3']
	function array(it){
	  return String(it).split(',');
	}
	var push    = ArrayProto.push
	  , unshift = ArrayProto.unshift
	  , slice   = ArrayProto.slice
	  , splice  = ArrayProto.splice
	  , indexOf = ArrayProto.indexOf
	  , forEach = ArrayProto[FOR_EACH];
	/*
	 * 0 -> forEach
	 * 1 -> map
	 * 2 -> filter
	 * 3 -> some
	 * 4 -> every
	 * 5 -> find
	 * 6 -> findIndex
	 */
	function createArrayMethod(type){
	  var isMap       = type == 1
	    , isFilter    = type == 2
	    , isSome      = type == 3
	    , isEvery     = type == 4
	    , isFindIndex = type == 6
	    , noholes     = type == 5 || isFindIndex;
	  return function(callbackfn/*, that = undefined */){
	    var O      = Object(assertDefined(this))
	      , that   = arguments[1]
	      , self   = ES5Object(O)
	      , f      = ctx(callbackfn, that, 3)
	      , length = toLength(self.length)
	      , index  = 0
	      , result = isMap ? Array(length) : isFilter ? [] : undefined
	      , val, res;
	    for(;length > index; index++)if(noholes || index in self){
	      val = self[index];
	      res = f(val, index, O);
	      if(type){
	        if(isMap)result[index] = res;             // map
	        else if(res)switch(type){
	          case 3: return true;                    // some
	          case 5: return val;                     // find
	          case 6: return index;                   // findIndex
	          case 2: result.push(val);               // filter
	        } else if(isEvery)return false;           // every
	      }
	    }
	    return isFindIndex ? -1 : isSome || isEvery ? isEvery : result;
	  }
	}
	function createArrayContains(isContains){
	  return function(el /*, fromIndex = 0 */){
	    var O      = ES5Object(assertDefined(this))
	      , length = toLength(O.length)
	      , index  = toIndex(arguments[1], length);
	    if(isContains && el != el){
	      for(;length > index; index++)if(sameNaN(O[index]))return isContains || index;
	    } else for(;length > index; index++)if(isContains || index in O){
	      if(O[index] === el)return isContains || index;
	    } return !isContains && -1;
	  }
	}
	function generic(A, B){
	  // strange IE quirks mode bug -> use typeof vs isFunction
	  return typeof A == 'function' ? A : B;
	}
	
	// Math
	var MAX_SAFE_INTEGER = 0x1fffffffffffff // pow(2, 53) - 1 == 9007199254740991
	  , ceil   = Math.ceil
	  , floor  = Math.floor
	  , max    = Math.max
	  , min    = Math.min
	  , random = Math.random
	  , trunc  = Math.trunc || function(it){
	      return (it > 0 ? floor : ceil)(it);
	    }
	// 20.1.2.4 Number.isNaN(number)
	function sameNaN(number){
	  return number != number;
	}
	// 7.1.4 ToInteger
	function toInteger(it){
	  return isNaN(it) ? 0 : trunc(it);
	}
	// 7.1.15 ToLength
	function toLength(it){
	  return it > 0 ? min(toInteger(it), MAX_SAFE_INTEGER) : 0;
	}
	function toIndex(index, length){
	  var index = toInteger(index);
	  return index < 0 ? max(index + length, 0) : min(index, length);
	}
	
	function createReplacer(regExp, replace, isStatic){
	  var replacer = isObject(replace) ? function(part){
	    return replace[part];
	  } : replace;
	  return function(it){
	    return String(isStatic ? it : this).replace(regExp, replacer);
	  }
	}
	function createPointAt(toString){
	  return function(pos){
	    var s = String(assertDefined(this))
	      , i = toInteger(pos)
	      , l = s.length
	      , a, b;
	    if(i < 0 || i >= l)return toString ? '' : undefined;
	    a = s.charCodeAt(i);
	    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
	      ? toString ? s.charAt(i) : a
	      : toString ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
	  }
	}
	
	// Assertion & errors
	var REDUCE_ERROR = 'Reduce of empty object with no initial value';
	function assert(condition, msg1, msg2){
	  if(!condition)throw TypeError(msg2 ? msg1 + msg2 : msg1);
	}
	function assertDefined(it){
	  if(it == undefined)throw TypeError('Function called on null or undefined');
	  return it;
	}
	function assertFunction(it){
	  assert(isFunction(it), it, ' is not a function!');
	  return it;
	}
	function assertObject(it){
	  assert(isObject(it), it, ' is not an object!');
	  return it;
	}
	function assertInstance(it, Constructor, name){
	  assert(it instanceof Constructor, name, ": use the 'new' operator!");
	}
	
	// Property descriptors & Symbol
	function descriptor(bitmap, value){
	  return {
	    enumerable  : !(bitmap & 1),
	    configurable: !(bitmap & 2),
	    writable    : !(bitmap & 4),
	    value       : value
	  }
	}
	function simpleSet(object, key, value){
	  object[key] = value;
	  return object;
	}
	function createDefiner(bitmap){
	  return DESC ? function(object, key, value){
	    return defineProperty(object, key, descriptor(bitmap, value));
	  } : simpleSet;
	}
	function uid(key){
	  return SYMBOL + '(' + key + ')_' + (++sid + random())[TO_STRING](36);
	}
	function getWellKnownSymbol(name, setter){
	  return (Symbol && Symbol[name]) || (setter ? Symbol : safeSymbol)(SYMBOL + DOT + name);
	}
	// The engine works fine with descriptors? Thank's IE8 for his funny defineProperty.
	var DESC   = !!function(){try{return defineProperty({}, DOT, ObjectProto)}catch(e){}}()
	  , sid    = 0
	  , hidden = createDefiner(1)
	  , set    = Symbol ? simpleSet : hidden
	  , safeSymbol = Symbol || uid;
	function assignHidden(target, src){
	  for(var key in src)hidden(target, key, src[key]);
	  return target;
	}
	
	// Iterators
	var SYMBOL_ITERATOR = getWellKnownSymbol(ITERATOR)
	  , SYMBOL_TAG      = getWellKnownSymbol(TO_STRING_TAG)
	  , SUPPORT_FF_ITER = FF_ITERATOR in ArrayProto
	  , ITER  = safeSymbol('iter')
	  , KEY   = 1
	  , VALUE = 2
	  , Iterators = {}
	  , IteratorPrototype = {}
	  , NATIVE_ITERATORS = SYMBOL_ITERATOR in ArrayProto
	    // Safari define byggy iterators w/o `next`
	  , BUGGY_ITERATORS = 'keys' in ArrayProto && !('next' in [].keys());
	// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
	setIterator(IteratorPrototype, returnThis);
	function setIterator(O, value){
	  hidden(O, SYMBOL_ITERATOR, value);
	  // Add iterator for FF iterator protocol
	  SUPPORT_FF_ITER && hidden(O, FF_ITERATOR, value);
	}
	function createIterator(Constructor, NAME, next, proto){
	  Constructor[PROTOTYPE] = create(proto || IteratorPrototype, {next: descriptor(1, next)});
	  setToStringTag(Constructor, NAME + ' Iterator');
	}
	function defineIterator(Constructor, NAME, value, DEFAULT){
	  var proto = Constructor[PROTOTYPE]
	    , iter  = get(proto, SYMBOL_ITERATOR) || get(proto, FF_ITERATOR) || (DEFAULT && get(proto, DEFAULT)) || value;
	  if(framework){
	    // Define iterator
	    setIterator(proto, iter);
	    if(iter !== value){
	      var iterProto = getPrototypeOf(iter.call(new Constructor));
	      // Set @@toStringTag to native iterators
	      setToStringTag(iterProto, NAME + ' Iterator', true);
	      // FF fix
	      has(proto, FF_ITERATOR) && setIterator(iterProto, returnThis);
	    }
	  }
	  // Plug for library
	  Iterators[NAME] = iter;
	  // FF & v8 fix
	  Iterators[NAME + ' Iterator'] = returnThis;
	  return iter;
	}
	function defineStdIterators(Base, NAME, Constructor, next, DEFAULT, IS_SET){
	  function createIter(kind){
	    return function(){
	      return new Constructor(this, kind);
	    }
	  }
	  createIterator(Constructor, NAME, next);
	  var entries = createIter(KEY+VALUE)
	    , values  = createIter(VALUE);
	  if(DEFAULT == VALUE)values = defineIterator(Base, NAME, values, 'values');
	  else entries = defineIterator(Base, NAME, entries, 'entries');
	  if(DEFAULT){
	    $define(PROTO + FORCED * BUGGY_ITERATORS, NAME, {
	      entries: entries,
	      keys: IS_SET ? values : createIter(KEY),
	      values: values
	    });
	  }
	}
	function iterResult(done, value){
	  return {value: value, done: !!done};
	}
	function isIterable(it){
	  var O      = Object(it)
	    , Symbol = global[SYMBOL]
	    , hasExt = !!(Symbol && Symbol[ITERATOR] && Symbol[ITERATOR] in O);
	  return hasExt || SYMBOL_ITERATOR in O || has(Iterators, classof(O));
	}
	function getIterator(it){
	  var Symbol  = global[SYMBOL]
	    , ext     = Symbol && Symbol[ITERATOR] && it[Symbol[ITERATOR]]
	    , getIter = ext || it[SYMBOL_ITERATOR] || Iterators[classof(it)];
	  return assertObject(getIter.call(it));
	}
	function stepCall(fn, value, entries){
	  return entries ? invoke(fn, value) : fn(value);
	}
	function forOf(iterable, entries, fn, that){
	  var iterator = getIterator(iterable)
	    , f        = ctx(fn, that, entries ? 2 : 1)
	    , step;
	  while(!(step = iterator.next()).done)if(stepCall(f, step.value, entries) === false)return;
	}
	
	// core
	var NODE = cof(process) == PROCESS
	  , core = {}
	  , path = framework ? global : core
	  , old  = global.core
	  // type bitmap
	  , FORCED = 1
	  , GLOBAL = 2
	  , STATIC = 4
	  , PROTO  = 8
	  , BIND   = 16
	  , WRAP   = 32;
	function $define(type, name, source){
	  var key, own, out, exp
	    , isGlobal = type & GLOBAL
	    , target   = isGlobal ? global : (type & STATIC)
	        ? global[name] : (global[name] || ObjectProto)[PROTOTYPE]
	    , exports  = isGlobal ? core : core[name] || (core[name] = {});
	  if(isGlobal)source = name;
	  for(key in source){
	    // there is a similar native
	    own = !(type & FORCED) && target && key in target
	      && (!isFunction(target[key]) || isNative(target[key]));
	    // export native or passed
	    out = (own ? target : source)[key];
	    // bind timers to global for call from export context
	    if(type & BIND && own)exp = ctx(out, global);
	    // wrap global constructors for prevent change them in library
	    else if(type & WRAP && !framework && target[key] == out){
	      exp = function(param){
	        return this instanceof out ? new out(param) : out(param);
	      }
	      exp[PROTOTYPE] = out[PROTOTYPE];
	    } else exp = type & PROTO && isFunction(out) ? ctx(call, out) : out;
	    // export
	    if(exports[key] != out)hidden(exports, key, exp);
	    // extend global
	    if(framework && target && !own){
	      if(isGlobal)target[key] = out;
	      else delete target[key] && hidden(target, key, out);
	    }
	  }
	}
	// CommonJS export
	if(typeof module != 'undefined' && module.exports)module.exports = core;
	// RequireJS export
	if(isFunction(define) && define.amd)define(function(){return core});
	// Export to global object
	if(!NODE || framework){
	  core.noConflict = function(){
	    global.core = old;
	    return core;
	  }
	  global.core = core;
	}
	
	/******************************************************************************
	 * Module : global                                                            *
	 ******************************************************************************/
	
	$define(GLOBAL + FORCED, {global: global});
	
	/******************************************************************************
	 * Module : es6_symbol                                                        *
	 ******************************************************************************/
	
	// ECMAScript 6 symbols shim
	!function(TAG, SymbolRegistry, setter){
	  // 19.4.1.1 Symbol([description])
	  if(!isNative(Symbol)){
	    Symbol = function(description){
	      assert(!(this instanceof Symbol), SYMBOL + ' is not a ' + CONSTRUCTOR);
	      var tag = uid(description);
	      DESC && setter && defineProperty(ObjectProto, tag, {
	        configurable: true,
	        set: function(value){
	          hidden(this, tag, value);
	        }
	      });
	      return set(create(Symbol[PROTOTYPE]), TAG, tag);
	    }
	    hidden(Symbol[PROTOTYPE], TO_STRING, function(){
	      return this[TAG];
	    });
	  }
	  $define(GLOBAL + WRAP, {Symbol: Symbol});
	  
	  var symbolStatics = {
	    // 19.4.2.1 Symbol.for(key)
	    'for': function(key){
	      return has(SymbolRegistry, key += '')
	        ? SymbolRegistry[key]
	        : SymbolRegistry[key] = Symbol(key);
	    },
	    // 19.4.2.4 Symbol.iterator
	    iterator: SYMBOL_ITERATOR,
	    // 19.4.2.5 Symbol.keyFor(sym)
	    keyFor: part.call(keyOf, SymbolRegistry),
	    // 19.4.2.13 Symbol.toStringTag
	    toStringTag: SYMBOL_TAG = getWellKnownSymbol(TO_STRING_TAG, true),
	    pure: safeSymbol,
	    set: set,
	    useSetter: function(){setter = true},
	    useSimple: function(){setter = false}
	  };
	  // 19.4.2.2 Symbol.hasInstance
	  // 19.4.2.3 Symbol.isConcatSpreadable
	  // 19.4.2.6 Symbol.match
	  // 19.4.2.8 Symbol.replace
	  // 19.4.2.9 Symbol.search
	  // 19.4.2.10 Symbol.species
	  // 19.4.2.11 Symbol.split
	  // 19.4.2.12 Symbol.toPrimitive
	  // 19.4.2.14 Symbol.unscopables
	  forEach.call(array('hasInstance,isConcatSpreadable,match,replace,search,' +
	    'species,split,toPrimitive,unscopables'), function(it){
	      symbolStatics[it] = getWellKnownSymbol(it);
	    }
	  );
	  $define(STATIC, SYMBOL, symbolStatics);
	  
	  setToStringTag(Symbol, SYMBOL);
	  
	  // 26.1.11 Reflect.ownKeys(target)
	  $define(GLOBAL, {Reflect: {ownKeys: ownKeys}});
	}(safeSymbol('tag'), {}, true);
	
	/******************************************************************************
	 * Module : es6                                                               *
	 ******************************************************************************/
	
	// ECMAScript 6 shim
	!function(isFinite, tmp){
	  var RangeError = global.RangeError
	      // 20.1.2.3 Number.isInteger(number)
	    , isInteger = Number.isInteger || function(it){
	        return !isObject(it) && isFinite(it) && floor(it) === it;
	      }
	      // 20.2.2.28 Math.sign(x)
	    , sign = Math.sign || function sign(it){
	        return (it = +it) == 0 || it != it ? it : it < 0 ? -1 : 1;
	      }
	    , pow  = Math.pow
	    , abs  = Math.abs
	    , exp  = Math.exp
	    , log  = Math.log
	    , sqrt = Math.sqrt
	    , fcc  = String.fromCharCode
	    , at   = createPointAt(true);
	  
	  var objectStatic = {
	    // 19.1.3.1 Object.assign(target, source)
	    assign: assign,
	    // 19.1.3.10 Object.is(value1, value2)
	    is: function(x, y){
	      return x === y ? x !== 0 || 1 / x === 1 / y : x != x && y != y;
	    }
	  };
	  // 19.1.3.19 Object.setPrototypeOf(O, proto)
	  // Works with __proto__ only. Old v8 can't works with null proto objects.
	  '__proto__' in ObjectProto && function(buggy, set){
	    try {
	      set = ctx(call, getOwnDescriptor(ObjectProto, '__proto__').set, 2);
	      set({}, ArrayProto);
	    } catch(e){ buggy = true }
	    objectStatic.setPrototypeOf = setPrototypeOf = setPrototypeOf || function(O, proto){
	      assertObject(O);
	      assert(proto === null || isObject(proto), proto, ": can't set as prototype!");
	      if(buggy)O.__proto__ = proto;
	      else set(O, proto);
	      return O;
	    }
	  }();
	  $define(STATIC, OBJECT, objectStatic);
	  
	  // 20.2.2.5 Math.asinh(x)
	  function asinh(x){
	    return !isFinite(x = +x) || x == 0 ? x : x < 0 ? -asinh(-x) : log(x + sqrt(x * x + 1));
	  }
	  
	  $define(STATIC, NUMBER, {
	    // 20.1.2.1 Number.EPSILON
	    EPSILON: pow(2, -52),
	    // 20.1.2.2 Number.isFinite(number)
	    isFinite: function(it){
	      return typeof it == 'number' && isFinite(it);
	    },
	    // 20.1.2.3 Number.isInteger(number)
	    isInteger: isInteger,
	    // 20.1.2.4 Number.isNaN(number)
	    isNaN: sameNaN,
	    // 20.1.2.5 Number.isSafeInteger(number)
	    isSafeInteger: function(number){
	      return isInteger(number) && abs(number) <= MAX_SAFE_INTEGER;
	    },
	    // 20.1.2.6 Number.MAX_SAFE_INTEGER
	    MAX_SAFE_INTEGER: MAX_SAFE_INTEGER,
	    // 20.1.2.10 Number.MIN_SAFE_INTEGER
	    MIN_SAFE_INTEGER: -MAX_SAFE_INTEGER,
	    // 20.1.2.12 Number.parseFloat(string)
	    parseFloat: parseFloat,
	    // 20.1.2.13 Number.parseInt(string, radix)
	    parseInt: parseInt
	  });
	  
	  $define(STATIC, MATH, {
	    // 20.2.2.3 Math.acosh(x)
	    acosh: function(x){
	      return x < 1 ? NaN : log(x + sqrt(x * x - 1));
	    },
	    // 20.2.2.5 Math.asinh(x)
	    asinh: asinh,
	    // 20.2.2.7 Math.atanh(x)
	    atanh: function(x){
	      return x == 0 ? +x : log((1 + +x) / (1 - x)) / 2;
	    },
	    // 20.2.2.9 Math.cbrt(x)
	    cbrt: function(x){
	      return sign(x) * pow(abs(x), 1 / 3);
	    },
	    // 20.2.2.11 Math.clz32(x)
	    clz32: function(x){
	      return (x >>>= 0) ? 32 - x[TO_STRING](2).length : 32;
	    },
	    // 20.2.2.12 Math.cosh(x)
	    cosh: function(x){
	      return (exp(x) + exp(-x)) / 2;
	    },
	    // 20.2.2.14 Math.expm1(x)
	    expm1: function(x){
	      return x == 0 ? +x : x > -1e-6 && x < 1e-6 ? +x + x * x / 2 : exp(x) - 1;
	    },
	    // 20.2.2.16 Math.fround(x)
	    // TODO: fallback for IE9-
	    fround: function(x){
	      return new Float32Array([x])[0];
	    },
	    // 20.2.2.17 Math.hypot([value1[, value2[, … ]]])
	    // TODO: work with very large & small numbers
	    hypot: function(value1, value2){
	      var sum    = 0
	        , length = arguments.length
	        , value;
	      while(length--){
	        value = +arguments[length];
	        if(value == Infinity || value == -Infinity)return Infinity;
	        sum += value * value;
	      }
	      return sqrt(sum);
	    },
	    // 20.2.2.18 Math.imul(x, y)
	    imul: function(x, y){
	      var UInt16 = 0xffff
	        , xl = UInt16 & x
	        , yl = UInt16 & y;
	      return 0 | xl * yl + ((UInt16 & x >>> 16) * yl + xl * (UInt16 & y >>> 16) << 16 >>> 0);
	    },
	    // 20.2.2.20 Math.log1p(x)
	    log1p: function(x){
	      return x > -1e-8 && x < 1e-8 ? x - x * x / 2 : log(1 + +x);
	    },
	    // 20.2.2.21 Math.log10(x)
	    log10: function(x){
	      return log(x) / Math.LN10;
	    },
	    // 20.2.2.22 Math.log2(x)
	    log2: function(x){
	      return log(x) / Math.LN2;
	    },
	    // 20.2.2.28 Math.sign(x)
	    sign: sign,
	    // 20.2.2.30 Math.sinh(x)
	    sinh: function(x){
	      return x == 0 ? +x : (exp(x) - exp(-x)) / 2;
	    },
	    // 20.2.2.33 Math.tanh(x)
	    tanh: function(x){
	      return isFinite(x) ? x == 0 ? +x : (exp(x) - exp(-x)) / (exp(x) + exp(-x)) : sign(x);
	    },
	    // 20.2.2.34 Math.trunc(x)
	    trunc: trunc
	  });
	  // 20.2.1.9 Math[@@toStringTag]
	  setToStringTag(Math, MATH, true);
	  
	  function assertNotRegExp(it){
	    if(isObject(it) && it instanceof RegExp)throw TypeError();
	  }
	  $define(STATIC, STRING, {
	    // 21.1.2.2 String.fromCodePoint(...codePoints)
	    fromCodePoint: function(x){
	      var res = []
	        , len = arguments.length
	        , i   = 0
	        , code
	      while(len > i){
	        code = +arguments[i++];
	        if(toIndex(code, 0x10ffff) !== code)throw RangeError(code + ' is not a valid code point');
	        res.push(code < 0x10000
	          ? fcc(code)
	          : fcc(((code -= 0x10000) >> 10) + 0xd800, code % 0x400 + 0xdc00)
	        );
	      } return res.join('');
	    },
	    // 21.1.2.4 String.raw(callSite, ...substitutions)
	    raw: function(callSite){
	      var raw = ES5Object(assertDefined(callSite.raw))
	        , len = toLength(raw.length)
	        , sln = arguments.length
	        , res = []
	        , i   = 0;
	      while(len > i){
	        res.push(String(raw[i++]));
	        if(i < sln)res.push(String(arguments[i]));
	      } return res.join('');
	    }
	  });
	  $define(PROTO, STRING, {
	    // 21.1.3.3 String.prototype.codePointAt(pos)
	    codePointAt: createPointAt(false),
	    // 21.1.3.6 String.prototype.endsWith(searchString [, endPosition])
	    endsWith: function(searchString /*, endPosition = @length */){
	      assertNotRegExp(searchString);
	      var that = String(assertDefined(this))
	        , endPosition = arguments[1]
	        , len = toLength(that.length)
	        , end = endPosition === undefined ? len : min(toLength(endPosition), len);
	      searchString += '';
	      return that.slice(end - searchString.length, end) === searchString;
	    },
	    // 21.1.3.7 String.prototype.includes(searchString, position = 0)
	    includes: function(searchString /*, position = 0 */){
	      assertNotRegExp(searchString);
	      return !!~String(assertDefined(this)).indexOf(searchString, arguments[1]);
	    },
	    // 21.1.3.13 String.prototype.repeat(count)
	    repeat: function(count){
	      var str = String(assertDefined(this))
	        , res = ''
	        , n   = toInteger(count);
	      if(0 > n || n == Infinity)throw RangeError("Count can't be negative");
	      for(;n > 0; (n >>>= 1) && (str += str))if(n & 1)res += str;
	      return res;
	    },
	    // 21.1.3.18 String.prototype.startsWith(searchString [, position ])
	    startsWith: function(searchString /*, position = 0 */){
	      assertNotRegExp(searchString);
	      var that  = String(assertDefined(this))
	        , index = toLength(min(arguments[1], that.length));
	      searchString += '';
	      return that.slice(index, index + searchString.length) === searchString;
	    }
	  });
	  // 21.1.3.27 String.prototype[@@iterator]()
	  defineStdIterators(String, STRING, function(iterated){
	    set(this, ITER, {o: String(iterated), i: 0});
	  // 21.1.5.2.1 %StringIteratorPrototype%.next()
	  }, function(){
	    var iter  = this[ITER]
	      , O     = iter.o
	      , index = iter.i
	      , point;
	    if(index >= O.length)return iterResult(1);
	    point = at.call(O, index);
	    iter.i += point.length;
	    return iterResult(0, point);
	  });
	  
	  $define(STATIC, ARRAY, {
	    // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
	    from: function(arrayLike/*, mapfn = undefined, thisArg = undefined*/){
	      var O       = Object(assertDefined(arrayLike))
	        , result  = new (generic(this, Array))
	        , mapfn   = arguments[1]
	        , that    = arguments[2]
	        , mapping = mapfn !== undefined
	        , f       = mapping ? ctx(mapfn, that, 2) : undefined
	        , index   = 0
	        , length;
	      if(isIterable(O))for(var iter = getIterator(O), step; !(step = iter.next()).done; index++){
	        result[index] = mapping ? f(step.value, index) : step.value;
	      } else for(length = toLength(O.length); length > index; index++){
	        result[index] = mapping ? f(O[index], index) : O[index];
	      }
	      result.length = index;
	      return result;
	    },
	    // 22.1.2.3 Array.of( ...items)
	    of: function(/* ...args */){
	      var index  = 0
	        , length = arguments.length
	        , result = new (generic(this, Array))(length);
	      while(length > index)result[index] = arguments[index++];
	      result.length = length;
	      return result;
	    }
	  });
	  $define(PROTO, ARRAY, {
	    // 22.1.3.3 Array.prototype.copyWithin(target, start, end = this.length)
	    copyWithin: function(target /* = 0 */, start /* = 0, end = @length */){
	      var O     = Object(assertDefined(this))
	        , len   = toLength(O.length)
	        , to    = toIndex(target, len)
	        , from  = toIndex(start, len)
	        , end   = arguments[2]
	        , fin   = end === undefined ? len : toIndex(end, len)
	        , count = min(fin - from, len - to)
	        , inc   = 1;
	      if(from < to && to < from + count){
	        inc  = -1;
	        from = from + count - 1;
	        to   = to + count - 1;
	      }
	      while(count-- > 0){
	        if(from in O)O[to] = O[from];
	        else delete O[to];
	        to += inc;
	        from += inc;
	      } return O;
	    },
	    // 22.1.3.6 Array.prototype.fill(value, start = 0, end = this.length)
	    fill: function(value /*, start = 0, end = @length */){
	      var O      = Object(assertDefined(this))
	        , length = toLength(O.length)
	        , index  = toIndex(arguments[1], length)
	        , end    = arguments[2]
	        , endPos = end === undefined ? length : toIndex(end, length);
	      while(endPos > index)O[index++] = value;
	      return O;
	    },
	    // 22.1.3.8 Array.prototype.find(predicate, thisArg = undefined)
	    find: createArrayMethod(5),
	    // 22.1.3.9 Array.prototype.findIndex(predicate, thisArg = undefined)
	    findIndex: createArrayMethod(6)
	  });
	  // 22.1.3.4 Array.prototype.entries()
	  // 22.1.3.13 Array.prototype.keys()
	  // 22.1.3.29 Array.prototype.values()
	  // 22.1.3.30 Array.prototype[@@iterator]()
	  defineStdIterators(Array, ARRAY, function(iterated, kind){
	    set(this, ITER, {o: ES5Object(iterated), i: 0, k: kind});
	  // 22.1.5.2.1 %ArrayIteratorPrototype%.next()
	  }, function(){
	    var iter  = this[ITER]
	      , O     = iter.o
	      , kind  = iter.k
	      , index = iter.i++;
	    if(!O || index >= O.length)return iter.o = undefined, iterResult(1);
	    if(kind == KEY)  return iterResult(0, index);
	    if(kind == VALUE)return iterResult(0, O[index]);
	                     return iterResult(0, [index, O[index]]);
	  }, VALUE);
	  
	  // argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
	  Iterators[ARGUMENTS] = Iterators[ARRAY];
	  
	  // 24.3.3 JSON[@@toStringTag]
	  setToStringTag(global.JSON, 'JSON', true);
	  
	  if(framework){
	    // 19.1.3.6 Object.prototype.toString()
	    tmp[SYMBOL_TAG] = DOT;
	    if(cof(tmp) != DOT)hidden(ObjectProto, TO_STRING, function(){
	      return '[object ' + classof(this) + ']';
	    });
	    
	    // 21.2.5.3 get RegExp.prototype.flags()
	    if(/./g.flags != 'g')defineProperty(RegExp[PROTOTYPE], 'flags', {
	      configurable: true,
	      get: createReplacer(/^.*\/(\w*)$/, '$1')
	    });
	  }
	}(isFinite, {});
	
	/******************************************************************************
	 * Module : immediate                                                         *
	 ******************************************************************************/
	
	// setImmediate shim
	// Node.js 0.9+ & IE10+ has setImmediate, else:
	isFunction(setImmediate) && isFunction(clearImmediate) || function(ONREADYSTATECHANGE){
	  var postMessage      = global.postMessage
	    , addEventListener = global.addEventListener
	    , MessageChannel   = global.MessageChannel
	    , counter          = 0
	    , queue            = {}
	    , defer, channel, port;
	  setImmediate = function(fn){
	    var args = [], i = 1;
	    while(arguments.length > i)args.push(arguments[i++]);
	    queue[++counter] = function(){
	      invoke(isFunction(fn) ? fn : Function(fn), args);
	    }
	    defer(counter);
	    return counter;
	  }
	  clearImmediate = function(id){
	    delete queue[id];
	  }
	  function run(id){
	    if(has(queue, id)){
	      var fn = queue[id];
	      delete queue[id];
	      fn();
	    }
	  }
	  function listner(event){
	    run(event.data);
	  }
	  // Node.js 0.8-
	  if(NODE){
	    defer = function(id){
	      nextTick(part.call(run, id));
	    }
	  // Modern browsers, skip implementation for WebWorkers
	  // IE8 has postMessage, but it's sync & typeof its postMessage is object
	  } else if(addEventListener && isFunction(postMessage) && !global.importScripts){
	    defer = function(id){
	      postMessage(id, '*');
	    }
	    addEventListener('message', listner, false);
	  // WebWorkers
	  } else if(isFunction(MessageChannel)){
	    channel = new MessageChannel;
	    port    = channel.port2;
	    channel.port1.onmessage = listner;
	    defer = ctx(port.postMessage, port, 1);
	  // IE8-
	  } else if(document && ONREADYSTATECHANGE in document[CREATE_ELEMENT]('script')){
	    defer = function(id){
	      html.appendChild(document[CREATE_ELEMENT]('script'))[ONREADYSTATECHANGE] = function(){
	        html.removeChild(this);
	        run(id);
	      }
	    }
	  // Rest old browsers
	  } else {
	    defer = function(id){
	      setTimeout(part.call(run, id), 0);
	    }
	  }
	}('onreadystatechange');
	$define(GLOBAL + BIND, {
	  setImmediate:   setImmediate,
	  clearImmediate: clearImmediate
	});
	
	/******************************************************************************
	 * Module : es6_promise                                                       *
	 ******************************************************************************/
	
	// ES6 promises shim
	// Based on https://github.com/getify/native-promise-only/
	!function(Promise, test){
	  isFunction(Promise) && isFunction(Promise.resolve)
	  && Promise.resolve(test = new Promise(Function())) == test
	  || function(asap, DEF){
	    function isThenable(o){
	      var then;
	      if(isObject(o))then = o.then;
	      return isFunction(then) ? then : false;
	    }
	    function notify(def){
	      var chain = def.chain;
	      chain.length && asap(function(){
	        var msg = def.msg
	          , ok  = def.state == 1
	          , i   = 0;
	        while(chain.length > i)!function(react){
	          var cb = ok ? react.ok : react.fail
	            , ret, then;
	          try {
	            if(cb){
	              ret = cb === true ? msg : cb(msg);
	              if(ret === react.P){
	                react.rej(TypeError(PROMISE + '-chain cycle'));
	              } else if(then = isThenable(ret)){
	                then.call(ret, react.res, react.rej);
	              } else react.res(ret);
	            } else react.rej(msg);
	          } catch(err){
	            react.rej(err);
	          }
	        }(chain[i++]);
	        chain.length = 0;
	      });
	    }
	    function resolve(msg){
	      var def = this
	        , then, wrapper;
	      if(def.done)return;
	      def.done = true;
	      def = def.def || def; // unwrap
	      try {
	        if(then = isThenable(msg)){
	          wrapper = {def: def, done: false}; // wrap
	          then.call(msg, ctx(resolve, wrapper, 1), ctx(reject, wrapper, 1));
	        } else {
	          def.msg = msg;
	          def.state = 1;
	          notify(def);
	        }
	      } catch(err){
	        reject.call(wrapper || {def: def, done: false}, err); // wrap
	      }
	    }
	    function reject(msg){
	      var def = this;
	      if(def.done)return;
	      def.done = true;
	      def = def.def || def; // unwrap
	      def.msg = msg;
	      def.state = 2;
	      notify(def);
	    }
	    // 25.4.3.1 Promise(executor)
	    Promise = function(executor){
	      assertFunction(executor);
	      assertInstance(this, Promise, PROMISE);
	      var def = {chain: [], state: 0, done: false, msg: undefined};
	      hidden(this, DEF, def);
	      try {
	        executor(ctx(resolve, def, 1), ctx(reject, def, 1));
	      } catch(err){
	        reject.call(def, err);
	      }
	    }
	    assignHidden(Promise[PROTOTYPE], {
	      // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
	      then: function(onFulfilled, onRejected){
	        var react = {
	          ok:   isFunction(onFulfilled) ? onFulfilled : true,
	          fail: isFunction(onRejected)  ? onRejected  : false
	        } , P = react.P = new this[CONSTRUCTOR](function(resolve, reject){
	          react.res = assertFunction(resolve);
	          react.rej = assertFunction(reject);
	        }), def = this[DEF];
	        def.chain.push(react);
	        def.state && notify(def);
	        return P;
	      },
	      // 25.4.5.1 Promise.prototype.catch(onRejected)
	      'catch': function(onRejected){
	        return this.then(undefined, onRejected);
	      }
	    });
	    assignHidden(Promise, {
	      // 25.4.4.1 Promise.all(iterable)
	      all: function(iterable){
	        var Promise = this
	          , values  = [];
	        return new Promise(function(resolve, reject){
	          forOf(iterable, false, push, values);
	          var remaining = values.length
	            , results   = Array(remaining);
	          if(remaining)forEach.call(values, function(promise, index){
	            Promise.resolve(promise).then(function(value){
	              results[index] = value;
	              --remaining || resolve(results);
	            }, reject);
	          });
	          else resolve(results);
	        });
	      },
	      // 25.4.4.4 Promise.race(iterable)
	      race: function(iterable){
	        var Promise = this;
	        return new Promise(function(resolve, reject){
	          forOf(iterable, false, function(promise){
	            Promise.resolve(promise).then(resolve, reject);
	          });
	        });
	      },
	      // 25.4.4.5 Promise.reject(r)
	      reject: function(r){
	        return new this(function(resolve, reject){
	          reject(r);
	        });
	      },
	      // 25.4.4.6 Promise.resolve(x)
	      resolve: function(x){
	        return isObject(x) && getPrototypeOf(x) === this[PROTOTYPE]
	          ? x : new this(function(resolve, reject){
	            resolve(x);
	          });
	      }
	    });
	  }(nextTick || setImmediate, safeSymbol('def'));
	  setToStringTag(Promise, PROMISE);
	  $define(GLOBAL + FORCED * !isNative(Promise), {Promise: Promise});
	}(global[PROMISE]);
	
	/******************************************************************************
	 * Module : es6_collections                                                   *
	 ******************************************************************************/
	
	// ECMAScript 6 collections shim
	!function(){
	  var UID   = safeSymbol('uid')
	    , DATA  = safeSymbol('data')
	    , WEAK  = safeSymbol('weak')
	    , LAST  = safeSymbol('last')
	    , FIRST = safeSymbol('first')
	    , SIZE  = DESC ? safeSymbol('size') : 'size'
	    , uid   = 0;
	  
	  function getCollection(C, NAME, methods, commonMethods, isMap, isWeak){
	    var ADDER = isMap ? 'set' : 'add'
	      , proto = C && C[PROTOTYPE]
	      , O     = {};
	    function initFromIterable(that, iterable){
	      if(iterable != undefined)forOf(iterable, isMap, that[ADDER], that);
	      return that;
	    }
	    function fixSVZ(key, chain){
	      var method = proto[key];
	      framework && hidden(proto, key, function(a, b){
	        var result = method.call(this, a === 0 ? 0 : a, b);
	        return chain ? this : result;
	      });
	    }
	    if(!isNative(C) || !(isWeak || (!BUGGY_ITERATORS && has(proto, 'entries')))){
	      // create collection constructor
	      C = isWeak
	        ? function(iterable){
	            assertInstance(this, C, NAME);
	            set(this, UID, uid++);
	            initFromIterable(this, iterable);
	          }
	        : function(iterable){
	            var that = this;
	            assertInstance(that, C, NAME);
	            set(that, DATA, create(null));
	            set(that, SIZE, 0);
	            set(that, LAST, undefined);
	            set(that, FIRST, undefined);
	            initFromIterable(that, iterable);
	          };
	      assignHidden(assignHidden(C[PROTOTYPE], methods), commonMethods);
	      isWeak || defineProperty(C[PROTOTYPE], 'size', {get: function(){
	        return assertDefined(this[SIZE]);
	      }});
	    } else {
	      var Native = C
	        , inst   = new C
	        , chain  = inst[ADDER](isWeak ? {} : -0, 1)
	        , buggyZero;
	      // wrap to init collections from iterable
	      if(!NATIVE_ITERATORS || !C.length){
	        C = function(iterable){
	          assertInstance(this, C, NAME);
	          return initFromIterable(new Native, iterable);
	        }
	        C[PROTOTYPE] = proto;
	      }
	      isWeak || inst[FOR_EACH](function(val, key){
	        buggyZero = 1 / key === -Infinity;
	      });
	      // fix converting -0 key to +0
	      if(buggyZero){
	        fixSVZ('delete');
	        fixSVZ('has');
	        isMap && fixSVZ('get');
	      }
	      // + fix .add & .set for chaining
	      if(buggyZero || chain !== inst)fixSVZ(ADDER, true);
	    }
	    setToStringTag(C, NAME);
	    
	    O[NAME] = C;
	    $define(GLOBAL + WRAP + FORCED * !isNative(C), O);
	    
	    // add .keys, .values, .entries, [@@iterator]
	    // 23.1.3.4, 23.1.3.8, 23.1.3.11, 23.1.3.12, 23.2.3.5, 23.2.3.8, 23.2.3.10, 23.2.3.11
	    isWeak || defineStdIterators(C, NAME, function(iterated, kind){
	      set(this, ITER, {o: iterated, k: kind});
	    }, function(){
	      var iter  = this[ITER]
	        , O     = iter.o
	        , kind  = iter.k
	        , entry = iter.l;
	      while(entry && entry.r)entry = entry.p;
	      if(!O || !(iter.l = entry = entry ? entry.n : O[FIRST]))return iter.o = undefined, iterResult(1);
	      if(kind == KEY)  return iterResult(0, entry.k);
	      if(kind == VALUE)return iterResult(0, entry.v);
	                       return iterResult(0, [entry.k, entry.v]);   
	    }, isMap ? KEY+VALUE : VALUE, !isMap);
	    
	    return C;
	  }
	  
	  function fastKey(it, create){
	    // return it with 'S' prefix if it's string or with 'P' prefix for over primitives
	    if(!isObject(it))return (typeof it == 'string' ? 'S' : 'P') + it;
	    // if it hasn't object id - add next
	    if(!has(it, UID)){
	      if(create)hidden(it, UID, ++uid);
	      else return '';
	    }
	    // return object id with 'O' prefix
	    return 'O' + it[UID];
	  }
	  
	  function def(that, key, value){
	    var index = fastKey(key, true)
	      , data  = that[DATA]
	      , last  = that[LAST]
	      , entry;
	    if(index in data)data[index].v = value;
	    else {
	      entry = data[index] = {k: key, v: value, p: last};
	      if(!that[FIRST])that[FIRST] = entry;
	      if(last)last.n = entry;
	      that[LAST] = entry;
	      that[SIZE]++;
	    } return that;
	  }
	  function del(that, index){
	    var data  = that[DATA]
	      , entry = data[index]
	      , next  = entry.n
	      , prev  = entry.p;
	    delete data[index];
	    entry.r = true;
	    if(prev)prev.n = next;
	    if(next)next.p = prev;
	    if(that[FIRST] == entry)that[FIRST] = next;
	    if(that[LAST] == entry)that[LAST] = prev;
	    that[SIZE]--;
	  }
	
	  var collectionMethods = {
	    // 23.1.3.1 Map.prototype.clear()
	    // 23.2.3.2 Set.prototype.clear()
	    clear: function(){
	      for(var index in this[DATA])del(this, index);
	    },
	    // 23.1.3.3 Map.prototype.delete(key)
	    // 23.2.3.4 Set.prototype.delete(value)
	    'delete': function(key){
	      var index    = fastKey(key)
	        , contains = index in this[DATA];
	      if(contains)del(this, index);
	      return contains;
	    },
	    // 23.2.3.6 Set.prototype.forEach(callbackfn, thisArg = undefined)
	    // 23.1.3.5 Map.prototype.forEach(callbackfn, thisArg = undefined)
	    forEach: function(callbackfn /*, that = undefined */){
	      var f = ctx(callbackfn, arguments[1], 3)
	        , entry;
	      while(entry = entry ? entry.n : this[FIRST]){
	        f(entry.v, entry.k, this);
	        while(entry && entry.r)entry = entry.p;
	      }
	    },
	    // 23.1.3.7 Map.prototype.has(key)
	    // 23.2.3.7 Set.prototype.has(value)
	    has: function(key){
	      return fastKey(key) in this[DATA];
	    }
	  }
	  
	  // 23.1 Map Objects
	  Map = getCollection(Map, MAP, {
	    // 23.1.3.6 Map.prototype.get(key)
	    get: function(key){
	      var entry = this[DATA][fastKey(key)];
	      return entry && entry.v;
	    },
	    // 23.1.3.9 Map.prototype.set(key, value)
	    set: function(key, value){
	      return def(this, key === 0 ? 0 : key, value);
	    }
	  }, collectionMethods, true);
	  
	  // 23.2 Set Objects
	  Set = getCollection(Set, SET, {
	    // 23.2.3.1 Set.prototype.add(value)
	    add: function(value){
	      return def(this, value = value === 0 ? 0 : value, value);
	    }
	  }, collectionMethods);
	  
	  function setWeak(that, key, value){
	    has(assertObject(key), WEAK) || hidden(key, WEAK, {});
	    key[WEAK][that[UID]] = value;
	    return that;
	  }
	  function hasWeak(key){
	    return isObject(key) && has(key, WEAK) && has(key[WEAK], this[UID]);
	  }
	  var weakMethods = {
	    // 23.3.3.2 WeakMap.prototype.delete(key)
	    // 23.4.3.3 WeakSet.prototype.delete(value)
	    'delete': function(key){
	      return hasWeak.call(this, key) && delete key[WEAK][this[UID]];
	    },
	    // 23.3.3.4 WeakMap.prototype.has(key)
	    // 23.4.3.4 WeakSet.prototype.has(value)
	    has: hasWeak
	  };
	  
	  // 23.3 WeakMap Objects
	  WeakMap = getCollection(WeakMap, WEAKMAP, {
	    // 23.3.3.3 WeakMap.prototype.get(key)
	    get: function(key){
	      if(isObject(key) && has(key, WEAK))return key[WEAK][this[UID]];
	    },
	    // 23.3.3.5 WeakMap.prototype.set(key, value)
	    set: function(key, value){
	      return setWeak(this, key, value);
	    }
	  }, weakMethods, true, true);
	  
	  // 23.4 WeakSet Objects
	  WeakSet = getCollection(WeakSet, WEAKSET, {
	    // 23.4.3.1 WeakSet.prototype.add(value)
	    add: function(value){
	      return setWeak(this, value, true);
	    }
	  }, weakMethods, false, true);
	}();
	
	/******************************************************************************
	 * Module : es6_reflect                                                       *
	 ******************************************************************************/
	
	!function(){
	  function Enumerate(iterated){
	    var keys = [], key;
	    for(key in iterated)keys.push(key);
	    set(this, ITER, {o: iterated, a: keys, i: 0});
	  }
	  createIterator(Enumerate, OBJECT, function(){
	    var iter = this[ITER]
	      , keys = iter.a
	      , key;
	    do {
	      if(iter.i >= keys.length)return iterResult(1);
	    } while(!((key = keys[iter.i++]) in iter.o));
	    return iterResult(0, key);
	  });
	  
	  function wrap(fn){
	    return function(it){
	      assertObject(it);
	      try {
	        return fn.apply(undefined, arguments), true;
	      } catch(e){
	        return false;
	      }
	    }
	  }
	  
	  function reflectGet(target, propertyKey, receiver){
	    if(receiver === undefined)receiver = target;
	    var desc = getOwnDescriptor(assertObject(target), propertyKey), proto;
	    if(desc)return desc.get ? desc.get.call(receiver) : desc.value;
	    return isObject(proto = getPrototypeOf(target)) ? reflectGet(proto, propertyKey, receiver) : undefined;
	  }
	  function reflectSet(target, propertyKey, V, receiver){
	    if(receiver === undefined)receiver = target;
	    var desc = getOwnDescriptor(assertObject(target), propertyKey), proto;
	    if(desc){
	      if(desc.writable === false)return false;
	      if(desc.set)return desc.set.call(receiver, V), true;
	    }
	    if(isObject(proto = getPrototypeOf(target)))return reflectSet(proto, propertyKey, V, receiver);
	    desc = getOwnDescriptor(receiver, propertyKey) || descriptor(0);
	    desc.value = V;
	    return defineProperty(receiver, propertyKey, desc), true;
	  }
	  
	  var reflect = {
	    // 26.1.1 Reflect.apply(target, thisArgument, argumentsList)
	    apply: ctx(call, apply, 3),
	    // 26.1.2 Reflect.construct(target, argumentsList)
	    construct: construct,
	    // 26.1.3 Reflect.defineProperty(target, propertyKey, attributes)
	    defineProperty: wrap(defineProperty),
	    // 26.1.4 Reflect.deleteProperty(target, propertyKey)
	    deleteProperty: function(target, propertyKey){
	      var desc = getOwnDescriptor(assertObject(target), propertyKey);
	      return desc && !desc.configurable ? false : delete target[propertyKey];
	    },
	    // 26.1.5 Reflect.enumerate(target)
	    enumerate: function(target){
	      return new Enumerate(assertObject(target));
	    },
	    // 26.1.6 Reflect.get(target, propertyKey [, receiver])
	    get: reflectGet,
	    // 26.1.7 Reflect.getOwnPropertyDescriptor(target, propertyKey)
	    getOwnPropertyDescriptor: getOwnDescriptor,
	    // 26.1.8 Reflect.getPrototypeOf(target)
	    getPrototypeOf: getPrototypeOf,
	    // 26.1.9 Reflect.has(target, propertyKey)
	    has: function(target, propertyKey){
	      return propertyKey in target;
	    },
	    // 26.1.10 Reflect.isExtensible(target)
	    isExtensible: Object.isExtensible || function(target){
	      return !!assertObject(target);
	    },
	    // 26.1.11 Reflect.ownKeys(target)
	    ownKeys: ownKeys,
	    // 26.1.12 Reflect.preventExtensions(target)
	    preventExtensions: wrap(Object.preventExtensions || returnIt),
	    // 26.1.13 Reflect.set(target, propertyKey, V [, receiver])
	    set: reflectSet
	  }
	  // 26.1.14 Reflect.setPrototypeOf(target, proto)
	  if(setPrototypeOf)reflect.setPrototypeOf = function(target, proto){
	    return setPrototypeOf(assertObject(target), proto), true;
	  };
	  
	  $define(GLOBAL, {Reflect: {}});
	  $define(STATIC, 'Reflect', reflect);
	}();
	
	/******************************************************************************
	 * Module : es7                                                               *
	 ******************************************************************************/
	
	!function(){
	  $define(PROTO, ARRAY, {
	    // https://github.com/domenic/Array.prototype.includes
	    includes: createArrayContains(true)
	  });
	  $define(PROTO, STRING, {
	    // https://github.com/mathiasbynens/String.prototype.at
	    at: createPointAt(true)
	  });
	  
	  function createObjectToArray(isEntries){
	    return function(object){
	      var O      = ES5Object(object)
	        , keys   = getKeys(object)
	        , length = keys.length
	        , i      = 0
	        , result = Array(length)
	        , key;
	      if(isEntries)while(length > i)result[i] = [key = keys[i++], O[key]];
	      else while(length > i)result[i] = O[keys[i++]];
	      return result;
	    }
	  }
	  $define(STATIC, OBJECT, {
	    // https://github.com/rwaldron/tc39-notes/blob/master/es6/2014-04/apr-9.md#51-objectentries-objectvalues
	    values: createObjectToArray(false),
	    entries: createObjectToArray(true)
	  });
	  $define(STATIC, REGEXP, {
	    // https://gist.github.com/kangax/9698100
	    escape: createReplacer(/([\\\-[\]{}()*+?.,^$|])/g, '\\$1', true)
	  });
	}();
	
	/******************************************************************************
	 * Module : es7_refs                                                          *
	 ******************************************************************************/
	
	// https://github.com/zenparsing/es-abstract-refs
	!function(REFERENCE){
	  REFERENCE_GET = getWellKnownSymbol(REFERENCE+'Get', true);
	  var REFERENCE_SET = getWellKnownSymbol(REFERENCE+SET, true)
	    , REFERENCE_DELETE = getWellKnownSymbol(REFERENCE+'Delete', true);
	  
	  $define(STATIC, SYMBOL, {
	    referenceGet: REFERENCE_GET,
	    referenceSet: REFERENCE_SET,
	    referenceDelete: REFERENCE_DELETE
	  });
	  
	  hidden(FunctionProto, REFERENCE_GET, returnThis);
	  
	  function setMapMethods(Constructor){
	    if(Constructor){
	      var MapProto = Constructor[PROTOTYPE];
	      hidden(MapProto, REFERENCE_GET, MapProto.get);
	      hidden(MapProto, REFERENCE_SET, MapProto.set);
	      hidden(MapProto, REFERENCE_DELETE, MapProto['delete']);
	    }
	  }
	  setMapMethods(Map);
	  setMapMethods(WeakMap);
	}('reference');
	
	/******************************************************************************
	 * Module : array_statics                                                     *
	 ******************************************************************************/
	
	// JavaScript 1.6 / Strawman array statics shim
	!function(arrayStatics){
	  function setArrayStatics(keys, length){
	    forEach.call(array(keys), function(key){
	      if(key in ArrayProto)arrayStatics[key] = ctx(call, ArrayProto[key], length);
	    });
	  }
	  setArrayStatics('pop,reverse,shift,keys,values,entries', 1);
	  setArrayStatics('indexOf,every,some,forEach,map,filter,find,findIndex,includes', 3);
	  setArrayStatics('join,slice,concat,push,splice,unshift,sort,lastIndexOf,' +
	                  'reduce,reduceRight,copyWithin,fill,turn');
	  $define(STATIC, ARRAY, arrayStatics);
	}({});
	}(Function('return this'), true);

/***/ },

/***/ 85:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2014, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * https://raw.github.com/facebook/regenerator/master/LICENSE file. An
	 * additional grant of patent rights can be found in the PATENTS file in
	 * the same directory.
	 */
	
	!(function() {
	  var hasOwn = Object.prototype.hasOwnProperty;
	  var undefined; // More compressible than void 0.
	  var iteratorSymbol =
	    typeof Symbol === "function" && Symbol.iterator || "@@iterator";
	
	  if (typeof regeneratorRuntime === "object") {
	    return;
	  }
	
	  var runtime = regeneratorRuntime =
	    false ? {} : exports;
	
	  function wrap(innerFn, outerFn, self, tryList) {
	    return new Generator(innerFn, outerFn, self || null, tryList || []);
	  }
	  runtime.wrap = wrap;
	
	  var GenStateSuspendedStart = "suspendedStart";
	  var GenStateSuspendedYield = "suspendedYield";
	  var GenStateExecuting = "executing";
	  var GenStateCompleted = "completed";
	
	  // Returning this object from the innerFn has the same effect as
	  // breaking out of the dispatch switch statement.
	  var ContinueSentinel = {};
	
	  // Dummy constructor functions that we use as the .constructor and
	  // .constructor.prototype properties for functions that return Generator
	  // objects. For full spec compliance, you may wish to configure your
	  // minifier not to mangle the names of these two functions.
	  function GeneratorFunction() {}
	  function GeneratorFunctionPrototype() {}
	
	  var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype;
	  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
	  GeneratorFunctionPrototype.constructor = GeneratorFunction;
	  GeneratorFunction.displayName = "GeneratorFunction";
	
	  runtime.isGeneratorFunction = function(genFun) {
	    var ctor = typeof genFun === "function" && genFun.constructor;
	    return ctor
	      ? ctor === GeneratorFunction ||
	        // For the native GeneratorFunction constructor, the best we can
	        // do is to check its .name property.
	        (ctor.displayName || ctor.name) === "GeneratorFunction"
	      : false;
	  };
	
	  runtime.mark = function(genFun) {
	    genFun.__proto__ = GeneratorFunctionPrototype;
	    genFun.prototype = Object.create(Gp);
	    return genFun;
	  };
	
	  runtime.async = function(innerFn, outerFn, self, tryList) {
	    return new Promise(function(resolve, reject) {
	      var generator = wrap(innerFn, outerFn, self, tryList);
	      var callNext = step.bind(generator.next);
	      var callThrow = step.bind(generator["throw"]);
	
	      function step(arg) {
	        try {
	          var info = this(arg);
	          var value = info.value;
	        } catch (error) {
	          return reject(error);
	        }
	
	        if (info.done) {
	          resolve(value);
	        } else {
	          Promise.resolve(value).then(callNext, callThrow);
	        }
	      }
	
	      callNext();
	    });
	  };
	
	  function Generator(innerFn, outerFn, self, tryList) {
	    var generator = outerFn ? Object.create(outerFn.prototype) : this;
	    var context = new Context(tryList);
	    var state = GenStateSuspendedStart;
	
	    function invoke(method, arg) {
	      if (state === GenStateExecuting) {
	        throw new Error("Generator is already running");
	      }
	
	      if (state === GenStateCompleted) {
	        // Be forgiving, per 25.3.3.3.3 of the spec:
	        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
	        return doneResult();
	      }
	
	      while (true) {
	        var delegate = context.delegate;
	        if (delegate) {
	          try {
	            var info = delegate.iterator[method](arg);
	
	            // Delegate generator ran and handled its own exceptions so
	            // regardless of what the method was, we continue as if it is
	            // "next" with an undefined arg.
	            method = "next";
	            arg = undefined;
	
	          } catch (uncaught) {
	            context.delegate = null;
	
	            // Like returning generator.throw(uncaught), but without the
	            // overhead of an extra function call.
	            method = "throw";
	            arg = uncaught;
	
	            continue;
	          }
	
	          if (info.done) {
	            context[delegate.resultName] = info.value;
	            context.next = delegate.nextLoc;
	          } else {
	            state = GenStateSuspendedYield;
	            return info;
	          }
	
	          context.delegate = null;
	        }
	
	        if (method === "next") {
	          if (state === GenStateSuspendedStart &&
	              typeof arg !== "undefined") {
	            // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
	            throw new TypeError(
	              "attempt to send " + JSON.stringify(arg) + " to newborn generator"
	            );
	          }
	
	          if (state === GenStateSuspendedYield) {
	            context.sent = arg;
	          } else {
	            delete context.sent;
	          }
	
	        } else if (method === "throw") {
	          if (state === GenStateSuspendedStart) {
	            state = GenStateCompleted;
	            throw arg;
	          }
	
	          if (context.dispatchException(arg)) {
	            // If the dispatched exception was caught by a catch block,
	            // then let that catch block handle the exception normally.
	            method = "next";
	            arg = undefined;
	          }
	
	        } else if (method === "return") {
	          context.abrupt("return", arg);
	        }
	
	        state = GenStateExecuting;
	
	        try {
	          var value = innerFn.call(self, context);
	
	          // If an exception is thrown from innerFn, we leave state ===
	          // GenStateExecuting and loop back for another invocation.
	          state = context.done
	            ? GenStateCompleted
	            : GenStateSuspendedYield;
	
	          var info = {
	            value: value,
	            done: context.done
	          };
	
	          if (value === ContinueSentinel) {
	            if (context.delegate && method === "next") {
	              // Deliberately forget the last sent value so that we don't
	              // accidentally pass it on to the delegate.
	              arg = undefined;
	            }
	          } else {
	            return info;
	          }
	
	        } catch (thrown) {
	          state = GenStateCompleted;
	
	          if (method === "next") {
	            context.dispatchException(thrown);
	          } else {
	            arg = thrown;
	          }
	        }
	      }
	    }
	
	    generator.next = invoke.bind(generator, "next");
	    generator["throw"] = invoke.bind(generator, "throw");
	    generator["return"] = invoke.bind(generator, "return");
	
	    return generator;
	  }
	
	  Gp[iteratorSymbol] = function() {
	    return this;
	  };
	
	  Gp.toString = function() {
	    return "[object Generator]";
	  };
	
	  function pushTryEntry(triple) {
	    var entry = { tryLoc: triple[0] };
	
	    if (1 in triple) {
	      entry.catchLoc = triple[1];
	    }
	
	    if (2 in triple) {
	      entry.finallyLoc = triple[2];
	    }
	
	    this.tryEntries.push(entry);
	  }
	
	  function resetTryEntry(entry, i) {
	    var record = entry.completion || {};
	    record.type = i === 0 ? "normal" : "return";
	    delete record.arg;
	    entry.completion = record;
	  }
	
	  function Context(tryList) {
	    // The root entry object (effectively a try statement without a catch
	    // or a finally block) gives us a place to store values thrown from
	    // locations where there is no enclosing try statement.
	    this.tryEntries = [{ tryLoc: "root" }];
	    tryList.forEach(pushTryEntry, this);
	    this.reset();
	  }
	
	  runtime.keys = function(object) {
	    var keys = [];
	    for (var key in object) {
	      keys.push(key);
	    }
	    keys.reverse();
	
	    // Rather than returning an object with a next method, we keep
	    // things simple and return the next function itself.
	    return function next() {
	      while (keys.length) {
	        var key = keys.pop();
	        if (key in object) {
	          next.value = key;
	          next.done = false;
	          return next;
	        }
	      }
	
	      // To avoid creating an additional object, we just hang the .value
	      // and .done properties off the next function object itself. This
	      // also ensures that the minifier will not anonymize the function.
	      next.done = true;
	      return next;
	    };
	  };
	
	  function values(iterable) {
	    if (iterable) {
	      var iteratorMethod = iterable[iteratorSymbol];
	      if (iteratorMethod) {
	        return iteratorMethod.call(iterable);
	      }
	
	      if (typeof iterable.next === "function") {
	        return iterable;
	      }
	
	      if (!isNaN(iterable.length)) {
	        var i = -1;
	
	        function next() {
	          while (++i < iterable.length) {
	            if (hasOwn.call(iterable, i)) {
	              next.value = iterable[i];
	              next.done = false;
	              return next;
	            }
	          }
	
	          next.value = undefined;
	          next.done = true;
	
	          return next;
	        }
	
	        return next.next = next;
	      }
	    }
	
	    // Return an iterator with no values.
	    return { next: doneResult };
	  }
	  runtime.values = values;
	
	  function doneResult() {
	    return { value: undefined, done: true };
	  }
	
	  Context.prototype = {
	    constructor: Context,
	
	    reset: function() {
	      this.prev = 0;
	      this.next = 0;
	      this.sent = undefined;
	      this.done = false;
	      this.delegate = null;
	
	      this.tryEntries.forEach(resetTryEntry);
	
	      // Pre-initialize at least 20 temporary variables to enable hidden
	      // class optimizations for simple generators.
	      for (var tempIndex = 0, tempName;
	           hasOwn.call(this, tempName = "t" + tempIndex) || tempIndex < 20;
	           ++tempIndex) {
	        this[tempName] = null;
	      }
	    },
	
	    stop: function() {
	      this.done = true;
	
	      var rootEntry = this.tryEntries[0];
	      var rootRecord = rootEntry.completion;
	      if (rootRecord.type === "throw") {
	        throw rootRecord.arg;
	      }
	
	      return this.rval;
	    },
	
	    dispatchException: function(exception) {
	      if (this.done) {
	        throw exception;
	      }
	
	      var context = this;
	      function handle(loc, caught) {
	        record.type = "throw";
	        record.arg = exception;
	        context.next = loc;
	        return !!caught;
	      }
	
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        var record = entry.completion;
	
	        if (entry.tryLoc === "root") {
	          // Exception thrown outside of any try block that could handle
	          // it, so set the completion value of the entire function to
	          // throw the exception.
	          return handle("end");
	        }
	
	        if (entry.tryLoc <= this.prev) {
	          var hasCatch = hasOwn.call(entry, "catchLoc");
	          var hasFinally = hasOwn.call(entry, "finallyLoc");
	
	          if (hasCatch && hasFinally) {
	            if (this.prev < entry.catchLoc) {
	              return handle(entry.catchLoc, true);
	            } else if (this.prev < entry.finallyLoc) {
	              return handle(entry.finallyLoc);
	            }
	
	          } else if (hasCatch) {
	            if (this.prev < entry.catchLoc) {
	              return handle(entry.catchLoc, true);
	            }
	
	          } else if (hasFinally) {
	            if (this.prev < entry.finallyLoc) {
	              return handle(entry.finallyLoc);
	            }
	
	          } else {
	            throw new Error("try statement without catch or finally");
	          }
	        }
	      }
	    },
	
	    _findFinallyEntry: function(finallyLoc) {
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        if (entry.tryLoc <= this.prev &&
	            hasOwn.call(entry, "finallyLoc") && (
	              entry.finallyLoc === finallyLoc ||
	              this.prev < entry.finallyLoc)) {
	          return entry;
	        }
	      }
	    },
	
	    abrupt: function(type, arg) {
	      var entry = this._findFinallyEntry();
	      var record = entry ? entry.completion : {};
	
	      record.type = type;
	      record.arg = arg;
	
	      if (entry) {
	        this.next = entry.finallyLoc;
	      } else {
	        this.complete(record);
	      }
	
	      return ContinueSentinel;
	    },
	
	    complete: function(record) {
	      if (record.type === "throw") {
	        throw record.arg;
	      }
	
	      if (record.type === "break" ||
	          record.type === "continue") {
	        this.next = record.arg;
	      } else if (record.type === "return") {
	        this.rval = record.arg;
	        this.next = "end";
	      }
	
	      return ContinueSentinel;
	    },
	
	    finish: function(finallyLoc) {
	      var entry = this._findFinallyEntry(finallyLoc);
	      return this.complete(entry.completion);
	    },
	
	    "catch": function(tryLoc) {
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        if (entry.tryLoc === tryLoc) {
	          var record = entry.completion;
	          if (record.type === "throw") {
	            var thrown = record.arg;
	            resetTryEntry(entry, i);
	          }
	          return thrown;
	        }
	      }
	
	      // The context.catch method must only be called with a location
	      // argument that corresponds to a known catch block.
	      throw new Error("illegal catch attempt");
	    },
	
	    delegateYield: function(iterable, resultName, nextLoc) {
	      this.delegate = {
	        iterator: values(iterable),
	        resultName: resultName,
	        nextLoc: nextLoc
	      };
	
	      return ContinueSentinel;
	    }
	  };
	})();


/***/ },

/***/ 91:
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(process) { /*!
	  * https://github.com/paulmillr/es6-shim
	  * @license es6-shim Copyright 2013-2014 by Paul Miller (http://paulmillr.com)
	  *   and contributors,  MIT License
	  * es6-shim: v0.22.2
	  * see https://github.com/paulmillr/es6-shim/blob/0.22.2/LICENSE
	  * Details and documentation:
	  * https://github.com/paulmillr/es6-shim/
	  */
	
	// UMD (Universal Module Definition)
	// see https://github.com/umdjs/umd/blob/master/returnExports.js
	(function (root, factory) {
	  /*global define, module, exports */
	  if (true) {
	    // AMD. Register as an anonymous module.
	    !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  } else if (typeof exports === 'object') {
	    // Node. Does not work with strict CommonJS, but
	    // only CommonJS-like enviroments that support module.exports,
	    // like Node.
	    module.exports = factory();
	  } else {
	    // Browser globals (root is window)
	    root.returnExports = factory();
	  }
	}(this, function () {
	  'use strict';
	
	  var isCallableWithoutNew = function (func) {
	    try {
	      func();
	    } catch (e) {
	      return false;
	    }
	    return true;
	  };
	
	  var supportsSubclassing = function (C, f) {
	    /* jshint proto:true */
	    try {
	      var Sub = function () { C.apply(this, arguments); };
	      if (!Sub.__proto__) { return false; /* skip test on IE < 11 */ }
	      Object.setPrototypeOf(Sub, C);
	      Sub.prototype = Object.create(C.prototype, {
	        constructor: { value: C }
	      });
	      return f(Sub);
	    } catch (e) {
	      return false;
	    }
	  };
	
	  var arePropertyDescriptorsSupported = function () {
	    try {
	      Object.defineProperty({}, 'x', {});
	      return true;
	    } catch (e) { /* this is IE 8. */
	      return false;
	    }
	  };
	
	  var startsWithRejectsRegex = function () {
	    var rejectsRegex = false;
	    if (String.prototype.startsWith) {
	      try {
	        '/a/'.startsWith(/a/);
	      } catch (e) { /* this is spec compliant */
	        rejectsRegex = true;
	      }
	    }
	    return rejectsRegex;
	  };
	
	  /*jshint evil: true */
	  var getGlobal = new Function('return this;');
	  /*jshint evil: false */
	
	  var globals = getGlobal();
	  var global_isFinite = globals.isFinite;
	  var supportsDescriptors = !!Object.defineProperty && arePropertyDescriptorsSupported();
	  var startsWithIsCompliant = startsWithRejectsRegex();
	  var _indexOf = Function.call.bind(String.prototype.indexOf);
	  var _toString = Function.call.bind(Object.prototype.toString);
	  var _hasOwnProperty = Function.call.bind(Object.prototype.hasOwnProperty);
	  var ArrayIterator; // make our implementation private
	  var noop = function () {};
	
	  var Symbol = globals.Symbol || {};
	  var Type = {
	    string: function (x) { return _toString(x) === '[object String]'; },
	    regex: function (x) { return _toString(x) === '[object RegExp]'; },
	    symbol: function (x) {
	      /*jshint notypeof: true */
	      return typeof globals.Symbol === 'function' && typeof x === 'symbol';
	      /*jshint notypeof: false */
	    }
	  };
	
	  var defineProperty = function (object, name, value, force) {
	    if (!force && name in object) { return; }
	    if (supportsDescriptors) {
	      Object.defineProperty(object, name, {
	        configurable: true,
	        enumerable: false,
	        writable: true,
	        value: value
	      });
	    } else {
	      object[name] = value;
	    }
	  };
	
	  var Value = {
	    getter: function (object, name, getter) {
	      if (!supportsDescriptors) {
	        throw new TypeError('getters require true ES5 support');
	      }
	      Object.defineProperty(object, name, {
	        configurable: true,
	        enumerable: false,
	        get: getter
	      });
	    },
	    proxy: function (originalObject, key, targetObject) {
	      if (!supportsDescriptors) {
	        throw new TypeError('getters require true ES5 support');
	      }
	      var originalDescriptor = Object.getOwnPropertyDescriptor(originalObject, key);
	      Object.defineProperty(targetObject, key, {
	        configurable: originalDescriptor.configurable,
	        enumerable: originalDescriptor.enumerable,
	        get: function getKey() { return originalObject[key]; },
	        set: function setKey(value) { originalObject[key] = value; }
	      });
	    },
	    redefine: function (object, property, newValue) {
	      if (supportsDescriptors) {
	        var descriptor = Object.getOwnPropertyDescriptor(object, property);
	        descriptor.value = newValue;
	        Object.defineProperty(object, property, descriptor);
	      } else {
	        object[property] = newValue;
	      }
	    }
	  };
	
	  // Define configurable, writable and non-enumerable props
	  // if they don’t exist.
	  var defineProperties = function (object, map) {
	    Object.keys(map).forEach(function (name) {
	      var method = map[name];
	      defineProperty(object, name, method, false);
	    });
	  };
	
	  // Simple shim for Object.create on ES3 browsers
	  // (unlike real shim, no attempt to support `prototype === null`)
	  var create = Object.create || function (prototype, properties) {
	    function Prototype() {}
	    Prototype.prototype = prototype;
	    var object = new Prototype();
	    if (typeof properties !== 'undefined') {
	      defineProperties(object, properties);
	    }
	    return object;
	  };
	
	  // This is a private name in the es6 spec, equal to '[Symbol.iterator]'
	  // we're going to use an arbitrary _-prefixed name to make our shims
	  // work properly with each other, even though we don't have full Iterator
	  // support.  That is, `Array.from(map.keys())` will work, but we don't
	  // pretend to export a "real" Iterator interface.
	  var $iterator$ = Type.symbol(Symbol.iterator) ? Symbol.iterator : '_es6-shim iterator_';
	  // Firefox ships a partial implementation using the name @@iterator.
	  // https://bugzilla.mozilla.org/show_bug.cgi?id=907077#c14
	  // So use that name if we detect it.
	  if (globals.Set && typeof new globals.Set()['@@iterator'] === 'function') {
	    $iterator$ = '@@iterator';
	  }
	  var addIterator = function (prototype, impl) {
	    if (!impl) { impl = function iterator() { return this; }; }
	    var o = {};
	    o[$iterator$] = impl;
	    defineProperties(prototype, o);
	    if (!prototype[$iterator$] && Type.symbol($iterator$)) {
	      // implementations are buggy when $iterator$ is a Symbol
	      prototype[$iterator$] = impl;
	    }
	  };
	
	  // taken directly from https://github.com/ljharb/is-arguments/blob/master/index.js
	  // can be replaced with require('is-arguments') if we ever use a build process instead
	  var isArguments = function isArguments(value) {
	    var str = _toString(value);
	    var result = str === '[object Arguments]';
	    if (!result) {
	      result = str !== '[object Array]' &&
	        value !== null &&
	        typeof value === 'object' &&
	        typeof value.length === 'number' &&
	        value.length >= 0 &&
	        _toString(value.callee) === '[object Function]';
	    }
	    return result;
	  };
	
	  var ES = {
	    CheckObjectCoercible: function (x, optMessage) {
	      /* jshint eqnull:true */
	      if (x == null) {
	        throw new TypeError(optMessage || 'Cannot call method on ' + x);
	      }
	      return x;
	    },
	
	    TypeIsObject: function (x) {
	      /* jshint eqnull:true */
	      // this is expensive when it returns false; use this function
	      // when you expect it to return true in the common case.
	      return x != null && Object(x) === x;
	    },
	
	    ToObject: function (o, optMessage) {
	      return Object(ES.CheckObjectCoercible(o, optMessage));
	    },
	
	    IsCallable: function (x) {
	      // some versions of IE say that typeof /abc/ === 'function'
	      return typeof x === 'function' && _toString(x) === '[object Function]';
	    },
	
	    ToInt32: function (x) {
	      return ES.ToNumber(x) >> 0;
	    },
	
	    ToUint32: function (x) {
	      return ES.ToNumber(x) >>> 0;
	    },
	
	    ToNumber: function (value) {
	      if (_toString(value) === '[object Symbol]') {
	        throw new TypeError('Cannot convert a Symbol value to a number');
	      }
	      return +value;
	    },
	
	    ToInteger: function (value) {
	      var number = ES.ToNumber(value);
	      if (Number.isNaN(number)) { return 0; }
	      if (number === 0 || !Number.isFinite(number)) { return number; }
	      return (number > 0 ? 1 : -1) * Math.floor(Math.abs(number));
	    },
	
	    ToLength: function (value) {
	      var len = ES.ToInteger(value);
	      if (len <= 0) { return 0; } // includes converting -0 to +0
	      if (len > Number.MAX_SAFE_INTEGER) { return Number.MAX_SAFE_INTEGER; }
	      return len;
	    },
	
	    SameValue: function (a, b) {
	      if (a === b) {
	        // 0 === -0, but they are not identical.
	        if (a === 0) { return 1 / a === 1 / b; }
	        return true;
	      }
	      return Number.isNaN(a) && Number.isNaN(b);
	    },
	
	    SameValueZero: function (a, b) {
	      // same as SameValue except for SameValueZero(+0, -0) == true
	      return (a === b) || (Number.isNaN(a) && Number.isNaN(b));
	    },
	
	    IsIterable: function (o) {
	      return ES.TypeIsObject(o) && (typeof o[$iterator$] !== 'undefined' || isArguments(o));
	    },
	
	    GetIterator: function (o) {
	      if (isArguments(o)) {
	        // special case support for `arguments`
	        return new ArrayIterator(o, 'value');
	      }
	      var itFn = o[$iterator$];
	      if (!ES.IsCallable(itFn)) {
	        throw new TypeError('value is not an iterable');
	      }
	      var it = itFn.call(o);
	      if (!ES.TypeIsObject(it)) {
	        throw new TypeError('bad iterator');
	      }
	      return it;
	    },
	
	    IteratorNext: function (it) {
	      var result = arguments.length > 1 ? it.next(arguments[1]) : it.next();
	      if (!ES.TypeIsObject(result)) {
	        throw new TypeError('bad iterator');
	      }
	      return result;
	    },
	
	    Construct: function (C, args) {
	      // CreateFromConstructor
	      var obj;
	      if (ES.IsCallable(C['@@create'])) {
	        obj = C['@@create']();
	      } else {
	        // OrdinaryCreateFromConstructor
	        obj = create(C.prototype || null);
	      }
	      // Mark that we've used the es6 construct path
	      // (see emulateES6construct)
	      defineProperties(obj, { _es6construct: true });
	      // Call the constructor.
	      var result = C.apply(obj, args);
	      return ES.TypeIsObject(result) ? result : obj;
	    }
	  };
	
	  var emulateES6construct = function (o) {
	    if (!ES.TypeIsObject(o)) { throw new TypeError('bad object'); }
	    // es5 approximation to es6 subclass semantics: in es6, 'new Foo'
	    // would invoke Foo.@@create to allocation/initialize the new object.
	    // In es5 we just get the plain object.  So if we detect an
	    // uninitialized object, invoke o.constructor.@@create
	    if (!o._es6construct) {
	      if (o.constructor && ES.IsCallable(o.constructor['@@create'])) {
	        o = o.constructor['@@create'](o);
	      }
	      defineProperties(o, { _es6construct: true });
	    }
	    return o;
	  };
	
	
	  var numberConversion = (function () {
	    // from https://github.com/inexorabletash/polyfill/blob/master/typedarray.js#L176-L266
	    // with permission and license, per https://twitter.com/inexorabletash/status/372206509540659200
	
	    function roundToEven(n) {
	      var w = Math.floor(n), f = n - w;
	      if (f < 0.5) {
	        return w;
	      }
	      if (f > 0.5) {
	        return w + 1;
	      }
	      return w % 2 ? w + 1 : w;
	    }
	
	    function packIEEE754(v, ebits, fbits) {
	      var bias = (1 << (ebits - 1)) - 1,
	        s, e, f,
	        i, bits, str, bytes;
	
	      // Compute sign, exponent, fraction
	      if (v !== v) {
	        // NaN
	        // http://dev.w3.org/2006/webapi/WebIDL/#es-type-mapping
	        e = (1 << ebits) - 1;
	        f = Math.pow(2, fbits - 1);
	        s = 0;
	      } else if (v === Infinity || v === -Infinity) {
	        e = (1 << ebits) - 1;
	        f = 0;
	        s = (v < 0) ? 1 : 0;
	      } else if (v === 0) {
	        e = 0;
	        f = 0;
	        s = (1 / v === -Infinity) ? 1 : 0;
	      } else {
	        s = v < 0;
	        v = Math.abs(v);
	
	        if (v >= Math.pow(2, 1 - bias)) {
	          e = Math.min(Math.floor(Math.log(v) / Math.LN2), 1023);
	          f = roundToEven(v / Math.pow(2, e) * Math.pow(2, fbits));
	          if (f / Math.pow(2, fbits) >= 2) {
	            e = e + 1;
	            f = 1;
	          }
	          if (e > bias) {
	            // Overflow
	            e = (1 << ebits) - 1;
	            f = 0;
	          } else {
	            // Normal
	            e = e + bias;
	            f = f - Math.pow(2, fbits);
	          }
	        } else {
	          // Subnormal
	          e = 0;
	          f = roundToEven(v / Math.pow(2, 1 - bias - fbits));
	        }
	      }
	
	      // Pack sign, exponent, fraction
	      bits = [];
	      for (i = fbits; i; i -= 1) {
	        bits.push(f % 2 ? 1 : 0);
	        f = Math.floor(f / 2);
	      }
	      for (i = ebits; i; i -= 1) {
	        bits.push(e % 2 ? 1 : 0);
	        e = Math.floor(e / 2);
	      }
	      bits.push(s ? 1 : 0);
	      bits.reverse();
	      str = bits.join('');
	
	      // Bits to bytes
	      bytes = [];
	      while (str.length) {
	        bytes.push(parseInt(str.slice(0, 8), 2));
	        str = str.slice(8);
	      }
	      return bytes;
	    }
	
	    function unpackIEEE754(bytes, ebits, fbits) {
	      // Bytes to bits
	      var bits = [], i, j, b, str,
	          bias, s, e, f;
	
	      for (i = bytes.length; i; i -= 1) {
	        b = bytes[i - 1];
	        for (j = 8; j; j -= 1) {
	          bits.push(b % 2 ? 1 : 0);
	          b = b >> 1;
	        }
	      }
	      bits.reverse();
	      str = bits.join('');
	
	      // Unpack sign, exponent, fraction
	      bias = (1 << (ebits - 1)) - 1;
	      s = parseInt(str.slice(0, 1), 2) ? -1 : 1;
	      e = parseInt(str.slice(1, 1 + ebits), 2);
	      f = parseInt(str.slice(1 + ebits), 2);
	
	      // Produce number
	      if (e === (1 << ebits) - 1) {
	        return f !== 0 ? NaN : s * Infinity;
	      } else if (e > 0) {
	        // Normalized
	        return s * Math.pow(2, e - bias) * (1 + f / Math.pow(2, fbits));
	      } else if (f !== 0) {
	        // Denormalized
	        return s * Math.pow(2, -(bias - 1)) * (f / Math.pow(2, fbits));
	      } else {
	        return s < 0 ? -0 : 0;
	      }
	    }
	
	    function unpackFloat64(b) { return unpackIEEE754(b, 11, 52); }
	    function packFloat64(v) { return packIEEE754(v, 11, 52); }
	    function unpackFloat32(b) { return unpackIEEE754(b, 8, 23); }
	    function packFloat32(v) { return packIEEE754(v, 8, 23); }
	
	    var conversions = {
	      toFloat32: function (num) { return unpackFloat32(packFloat32(num)); }
	    };
	    if (typeof Float32Array !== 'undefined') {
	      var float32array = new Float32Array(1);
	      conversions.toFloat32 = function (num) {
	        float32array[0] = num;
	        return float32array[0];
	      };
	    }
	    return conversions;
	  }());
	
	  defineProperties(String, {
	    fromCodePoint: function fromCodePoint(codePoints) {
	      var result = [];
	      var next;
	      for (var i = 0, length = arguments.length; i < length; i++) {
	        next = Number(arguments[i]);
	        if (!ES.SameValue(next, ES.ToInteger(next)) || next < 0 || next > 0x10FFFF) {
	          throw new RangeError('Invalid code point ' + next);
	        }
	
	        if (next < 0x10000) {
	          result.push(String.fromCharCode(next));
	        } else {
	          next -= 0x10000;
	          result.push(String.fromCharCode((next >> 10) + 0xD800));
	          result.push(String.fromCharCode((next % 0x400) + 0xDC00));
	        }
	      }
	      return result.join('');
	    },
	
	    raw: function raw(callSite) {
	      var cooked = ES.ToObject(callSite, 'bad callSite');
	      var rawValue = cooked.raw;
	      var rawString = ES.ToObject(rawValue, 'bad raw value');
	      var len = rawString.length;
	      var literalsegments = ES.ToLength(len);
	      if (literalsegments <= 0) {
	        return '';
	      }
	
	      var stringElements = [];
	      var nextIndex = 0;
	      var nextKey, next, nextSeg, nextSub;
	      while (nextIndex < literalsegments) {
	        nextKey = String(nextIndex);
	        next = rawString[nextKey];
	        nextSeg = String(next);
	        stringElements.push(nextSeg);
	        if (nextIndex + 1 >= literalsegments) {
	          break;
	        }
	        next = nextIndex + 1 < arguments.length ? arguments[nextIndex + 1] : '';
	        nextSub = String(next);
	        stringElements.push(nextSub);
	        nextIndex++;
	      }
	      return stringElements.join('');
	    }
	  });
	
	  // Firefox 31 reports this function's length as 0
	  // https://bugzilla.mozilla.org/show_bug.cgi?id=1062484
	  if (String.fromCodePoint.length !== 1) {
	    var originalFromCodePoint = Function.apply.bind(String.fromCodePoint);
	    defineProperty(String, 'fromCodePoint', function fromCodePoint(codePoints) { return originalFromCodePoint(this, arguments); }, true);
	  }
	
	  var StringShims = {
	    // Fast repeat, uses the `Exponentiation by squaring` algorithm.
	    // Perf: http://jsperf.com/string-repeat2/2
	    repeat: (function () {
	      var repeat = function (s, times) {
	        if (times < 1) { return ''; }
	        if (times % 2) { return repeat(s, times - 1) + s; }
	        var half = repeat(s, times / 2);
	        return half + half;
	      };
	
	      return function (times) {
	        var thisStr = String(ES.CheckObjectCoercible(this));
	        times = ES.ToInteger(times);
	        if (times < 0 || times === Infinity) {
	          throw new RangeError('Invalid String#repeat value');
	        }
	        return repeat(thisStr, times);
	      };
	    }()),
	
	    startsWith: function (searchStr) {
	      var thisStr = String(ES.CheckObjectCoercible(this));
	      if (Type.regex(searchStr)) {
	        throw new TypeError('Cannot call method "startsWith" with a regex');
	      }
	      searchStr = String(searchStr);
	      var startArg = arguments.length > 1 ? arguments[1] : void 0;
	      var start = Math.max(ES.ToInteger(startArg), 0);
	      return thisStr.slice(start, start + searchStr.length) === searchStr;
	    },
	
	    endsWith: function (searchStr) {
	      var thisStr = String(ES.CheckObjectCoercible(this));
	      if (Type.regex(searchStr)) {
	        throw new TypeError('Cannot call method "endsWith" with a regex');
	      }
	      searchStr = String(searchStr);
	      var thisLen = thisStr.length;
	      var posArg = arguments.length > 1 ? arguments[1] : void 0;
	      var pos = typeof posArg === 'undefined' ? thisLen : ES.ToInteger(posArg);
	      var end = Math.min(Math.max(pos, 0), thisLen);
	      return thisStr.slice(end - searchStr.length, end) === searchStr;
	    },
	
	    includes: function includes(searchString) {
	      var position = arguments.length > 1 ? arguments[1] : void 0;
	      // Somehow this trick makes method 100% compat with the spec.
	      return _indexOf(this, searchString, position) !== -1;
	    },
	
	    codePointAt: function (pos) {
	      var thisStr = String(ES.CheckObjectCoercible(this));
	      var position = ES.ToInteger(pos);
	      var length = thisStr.length;
	      if (position >= 0 && position < length) {
	        var first = thisStr.charCodeAt(position);
	        var isEnd = (position + 1 === length);
	        if (first < 0xD800 || first > 0xDBFF || isEnd) { return first; }
	        var second = thisStr.charCodeAt(position + 1);
	        if (second < 0xDC00 || second > 0xDFFF) { return first; }
	        return ((first - 0xD800) * 1024) + (second - 0xDC00) + 0x10000;
	      }
	    }
	  };
	  defineProperties(String.prototype, StringShims);
	
	  var hasStringTrimBug = '\u0085'.trim().length !== 1;
	  if (hasStringTrimBug) {
	    delete String.prototype.trim;
	    // whitespace from: http://es5.github.io/#x15.5.4.20
	    // implementation from https://github.com/es-shims/es5-shim/blob/v3.4.0/es5-shim.js#L1304-L1324
	    var ws = [
	      '\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003',
	      '\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028',
	      '\u2029\uFEFF'
	    ].join('');
	    var trimRegexp = new RegExp('(^[' + ws + ']+)|([' + ws + ']+$)', 'g');
	    defineProperties(String.prototype, {
	      trim: function () {
	        if (typeof this === 'undefined' || this === null) {
	          throw new TypeError("can't convert " + this + ' to object');
	        }
	        return String(this).replace(trimRegexp, '');
	      }
	    });
	  }
	
	  // see https://people.mozilla.org/~jorendorff/es6-draft.html#sec-string.prototype-@@iterator
	  var StringIterator = function (s) {
	    this._s = String(ES.CheckObjectCoercible(s));
	    this._i = 0;
	  };
	  StringIterator.prototype.next = function () {
	    var s = this._s, i = this._i;
	    if (typeof s === 'undefined' || i >= s.length) {
	      this._s = void 0;
	      return { value: void 0, done: true };
	    }
	    var first = s.charCodeAt(i), second, len;
	    if (first < 0xD800 || first > 0xDBFF || (i + 1) === s.length) {
	      len = 1;
	    } else {
	      second = s.charCodeAt(i + 1);
	      len = (second < 0xDC00 || second > 0xDFFF) ? 1 : 2;
	    }
	    this._i = i + len;
	    return { value: s.substr(i, len), done: false };
	  };
	  addIterator(StringIterator.prototype);
	  addIterator(String.prototype, function () {
	    return new StringIterator(this);
	  });
	
	  if (!startsWithIsCompliant) {
	    // Firefox has a noncompliant startsWith implementation
	    defineProperties(String.prototype, {
	      startsWith: StringShims.startsWith,
	      endsWith: StringShims.endsWith
	    });
	  }
	
	  var ArrayShims = {
	    from: function (iterable) {
	      var mapFn = arguments.length > 1 ? arguments[1] : void 0;
	
	      var list = ES.ToObject(iterable, 'bad iterable');
	      if (typeof mapFn !== 'undefined' && !ES.IsCallable(mapFn)) {
	        throw new TypeError('Array.from: when provided, the second argument must be a function');
	      }
	
	      var hasThisArg = arguments.length > 2;
	      var thisArg = hasThisArg ? arguments[2] : void 0;
	
	      var usingIterator = ES.IsIterable(list);
	      // does the spec really mean that Arrays should use ArrayIterator?
	      // https://bugs.ecmascript.org/show_bug.cgi?id=2416
	      //if (Array.isArray(list)) { usingIterator=false; }
	
	      var length;
	      var result, i, value;
	      if (usingIterator) {
	        i = 0;
	        result = ES.IsCallable(this) ? Object(new this()) : [];
	        var it = usingIterator ? ES.GetIterator(list) : null;
	        var iterationValue;
	
	        do {
	          iterationValue = ES.IteratorNext(it);
	          if (!iterationValue.done) {
	            value = iterationValue.value;
	            if (mapFn) {
	              result[i] = hasThisArg ? mapFn.call(thisArg, value, i) : mapFn(value, i);
	            } else {
	              result[i] = value;
	            }
	            i += 1;
	          }
	        } while (!iterationValue.done);
	        length = i;
	      } else {
	        length = ES.ToLength(list.length);
	        result = ES.IsCallable(this) ? Object(new this(length)) : new Array(length);
	        for (i = 0; i < length; ++i) {
	          value = list[i];
	          if (mapFn) {
	            result[i] = hasThisArg ? mapFn.call(thisArg, value, i) : mapFn(value, i);
	          } else {
	            result[i] = value;
	          }
	        }
	      }
	
	      result.length = length;
	      return result;
	    },
	
	    of: function () {
	      return Array.from(arguments);
	    }
	  };
	  defineProperties(Array, ArrayShims);
	
	  var arrayFromSwallowsNegativeLengths = function () {
	    try {
	      return Array.from({ length: -1 }).length === 0;
	    } catch (e) {
	      return false;
	    }
	  };
	  // Fixes a Firefox bug in v32
	  // https://bugzilla.mozilla.org/show_bug.cgi?id=1063993
	  if (!arrayFromSwallowsNegativeLengths()) {
	    defineProperty(Array, 'from', ArrayShims.from, true);
	  }
	
	  // Our ArrayIterator is private; see
	  // https://github.com/paulmillr/es6-shim/issues/252
	  ArrayIterator = function (array, kind) {
	      this.i = 0;
	      this.array = array;
	      this.kind = kind;
	  };
	
	  defineProperties(ArrayIterator.prototype, {
	    next: function () {
	      var i = this.i, array = this.array;
	      if (!(this instanceof ArrayIterator)) {
	        throw new TypeError('Not an ArrayIterator');
	      }
	      if (typeof array !== 'undefined') {
	        var len = ES.ToLength(array.length);
	        for (; i < len; i++) {
	          var kind = this.kind;
	          var retval;
	          if (kind === 'key') {
	            retval = i;
	          } else if (kind === 'value') {
	            retval = array[i];
	          } else if (kind === 'entry') {
	            retval = [i, array[i]];
	          }
	          this.i = i + 1;
	          return { value: retval, done: false };
	        }
	      }
	      this.array = void 0;
	      return { value: void 0, done: true };
	    }
	  });
	  addIterator(ArrayIterator.prototype);
	
	  var ArrayPrototypeShims = {
	    copyWithin: function (target, start) {
	      var end = arguments[2]; // copyWithin.length must be 2
	      var o = ES.ToObject(this);
	      var len = ES.ToLength(o.length);
	      target = ES.ToInteger(target);
	      start = ES.ToInteger(start);
	      var to = target < 0 ? Math.max(len + target, 0) : Math.min(target, len);
	      var from = start < 0 ? Math.max(len + start, 0) : Math.min(start, len);
	      end = typeof end === 'undefined' ? len : ES.ToInteger(end);
	      var fin = end < 0 ? Math.max(len + end, 0) : Math.min(end, len);
	      var count = Math.min(fin - from, len - to);
	      var direction = 1;
	      if (from < to && to < (from + count)) {
	        direction = -1;
	        from += count - 1;
	        to += count - 1;
	      }
	      while (count > 0) {
	        if (_hasOwnProperty(o, from)) {
	          o[to] = o[from];
	        } else {
	          delete o[from];
	        }
	        from += direction;
	        to += direction;
	        count -= 1;
	      }
	      return o;
	    },
	
	    fill: function (value) {
	      var start = arguments.length > 1 ? arguments[1] : void 0;
	      var end = arguments.length > 2 ? arguments[2] : void 0;
	      var O = ES.ToObject(this);
	      var len = ES.ToLength(O.length);
	      start = ES.ToInteger(typeof start === 'undefined' ? 0 : start);
	      end = ES.ToInteger(typeof end === 'undefined' ? len : end);
	
	      var relativeStart = start < 0 ? Math.max(len + start, 0) : Math.min(start, len);
	      var relativeEnd = end < 0 ? len + end : end;
	
	      for (var i = relativeStart; i < len && i < relativeEnd; ++i) {
	        O[i] = value;
	      }
	      return O;
	    },
	
	    find: function find(predicate) {
	      var list = ES.ToObject(this);
	      var length = ES.ToLength(list.length);
	      if (!ES.IsCallable(predicate)) {
	        throw new TypeError('Array#find: predicate must be a function');
	      }
	      var thisArg = arguments.length > 1 ? arguments[1] : null;
	      for (var i = 0, value; i < length; i++) {
	        value = list[i];
	        if (thisArg) {
	          if (predicate.call(thisArg, value, i, list)) { return value; }
	        } else if (predicate(value, i, list)) {
	          return value;
	        }
	      }
	    },
	
	    findIndex: function findIndex(predicate) {
	      var list = ES.ToObject(this);
	      var length = ES.ToLength(list.length);
	      if (!ES.IsCallable(predicate)) {
	        throw new TypeError('Array#findIndex: predicate must be a function');
	      }
	      var thisArg = arguments.length > 1 ? arguments[1] : null;
	      for (var i = 0; i < length; i++) {
	        if (thisArg) {
	          if (predicate.call(thisArg, list[i], i, list)) { return i; }
	        } else if (predicate(list[i], i, list)) {
	          return i;
	        }
	      }
	      return -1;
	    },
	
	    keys: function () {
	      return new ArrayIterator(this, 'key');
	    },
	
	    values: function () {
	      return new ArrayIterator(this, 'value');
	    },
	
	    entries: function () {
	      return new ArrayIterator(this, 'entry');
	    }
	  };
	  // Safari 7.1 defines Array#keys and Array#entries natively,
	  // but the resulting ArrayIterator objects don't have a "next" method.
	  if (Array.prototype.keys && !ES.IsCallable([1].keys().next)) {
	    delete Array.prototype.keys;
	  }
	  if (Array.prototype.entries && !ES.IsCallable([1].entries().next)) {
	    delete Array.prototype.entries;
	  }
	
	  // Chrome 38 defines Array#keys and Array#entries, and Array#@@iterator, but not Array#values
	  if (Array.prototype.keys && Array.prototype.entries && !Array.prototype.values && Array.prototype[$iterator$]) {
	    defineProperties(Array.prototype, {
	      values: Array.prototype[$iterator$]
	    });
	    if (Type.symbol(Symbol.unscopables)) {
	      Array.prototype[Symbol.unscopables].values = true;
	    }
	  }
	  defineProperties(Array.prototype, ArrayPrototypeShims);
	
	  addIterator(Array.prototype, function () { return this.values(); });
	  // Chrome defines keys/values/entries on Array, but doesn't give us
	  // any way to identify its iterator.  So add our own shimmed field.
	  if (Object.getPrototypeOf) {
	    addIterator(Object.getPrototypeOf([].values()));
	  }
	
	  var maxSafeInteger = Math.pow(2, 53) - 1;
	  defineProperties(Number, {
	    MAX_SAFE_INTEGER: maxSafeInteger,
	    MIN_SAFE_INTEGER: -maxSafeInteger,
	    EPSILON: 2.220446049250313e-16,
	
	    parseInt: globals.parseInt,
	    parseFloat: globals.parseFloat,
	
	    isFinite: function (value) {
	      return typeof value === 'number' && global_isFinite(value);
	    },
	
	    isInteger: function (value) {
	      return Number.isFinite(value) && ES.ToInteger(value) === value;
	    },
	
	    isSafeInteger: function (value) {
	      return Number.isInteger(value) && Math.abs(value) <= Number.MAX_SAFE_INTEGER;
	    },
	
	    isNaN: function (value) {
	      // NaN !== NaN, but they are identical.
	      // NaNs are the only non-reflexive value, i.e., if x !== x,
	      // then x is NaN.
	      // isNaN is broken: it converts its argument to number, so
	      // isNaN('foo') => true
	      return value !== value;
	    }
	  });
	
	  // Work around bugs in Array#find and Array#findIndex -- early
	  // implementations skipped holes in sparse arrays. (Note that the
	  // implementations of find/findIndex indirectly use shimmed
	  // methods of Number, so this test has to happen down here.)
	  if (![, 1].find(function (item, idx) { return idx === 0; })) {
	    defineProperty(Array.prototype, 'find', ArrayPrototypeShims.find, true);
	  }
	  if ([, 1].findIndex(function (item, idx) { return idx === 0; }) !== 0) {
	    defineProperty(Array.prototype, 'findIndex', ArrayPrototypeShims.findIndex, true);
	  }
	
	  if (supportsDescriptors) {
	    defineProperties(Object, {
	      // 19.1.3.1
	      assign: function (target, source) {
	        if (!ES.TypeIsObject(target)) {
	          throw new TypeError('target must be an object');
	        }
	        return Array.prototype.reduce.call(arguments, function (target, source) {
	          return Object.keys(Object(source)).reduce(function (target, key) {
	            target[key] = source[key];
	            return target;
	          }, target);
	        });
	      },
	
	      is: function (a, b) {
	        return ES.SameValue(a, b);
	      },
	
	      // 19.1.3.9
	      // shim from https://gist.github.com/WebReflection/5593554
	      setPrototypeOf: (function (Object, magic) {
	        var set;
	
	        var checkArgs = function (O, proto) {
	          if (!ES.TypeIsObject(O)) {
	            throw new TypeError('cannot set prototype on a non-object');
	          }
	          if (!(proto === null || ES.TypeIsObject(proto))) {
	            throw new TypeError('can only set prototype to an object or null' + proto);
	          }
	        };
	
	        var setPrototypeOf = function (O, proto) {
	          checkArgs(O, proto);
	          set.call(O, proto);
	          return O;
	        };
	
	        try {
	          // this works already in Firefox and Safari
	          set = Object.getOwnPropertyDescriptor(Object.prototype, magic).set;
	          set.call({}, null);
	        } catch (e) {
	          if (Object.prototype !== {}[magic]) {
	            // IE < 11 cannot be shimmed
	            return;
	          }
	          // probably Chrome or some old Mobile stock browser
	          set = function (proto) {
	            this[magic] = proto;
	          };
	          // please note that this will **not** work
	          // in those browsers that do not inherit
	          // __proto__ by mistake from Object.prototype
	          // in these cases we should probably throw an error
	          // or at least be informed about the issue
	          setPrototypeOf.polyfill = setPrototypeOf(
	            setPrototypeOf({}, null),
	            Object.prototype
	          ) instanceof Object;
	          // setPrototypeOf.polyfill === true means it works as meant
	          // setPrototypeOf.polyfill === false means it's not 100% reliable
	          // setPrototypeOf.polyfill === undefined
	          // or
	          // setPrototypeOf.polyfill ==  null means it's not a polyfill
	          // which means it works as expected
	          // we can even delete Object.prototype.__proto__;
	        }
	        return setPrototypeOf;
	      }(Object, '__proto__'))
	    });
	  }
	
	  // Workaround bug in Opera 12 where setPrototypeOf(x, null) doesn't work,
	  // but Object.create(null) does.
	  if (Object.setPrototypeOf && Object.getPrototypeOf &&
	      Object.getPrototypeOf(Object.setPrototypeOf({}, null)) !== null &&
	      Object.getPrototypeOf(Object.create(null)) === null) {
	    (function () {
	      var FAKENULL = Object.create(null);
	      var gpo = Object.getPrototypeOf, spo = Object.setPrototypeOf;
	      Object.getPrototypeOf = function (o) {
	        var result = gpo(o);
	        return result === FAKENULL ? null : result;
	      };
	      Object.setPrototypeOf = function (o, p) {
	        if (p === null) { p = FAKENULL; }
	        return spo(o, p);
	      };
	      Object.setPrototypeOf.polyfill = false;
	    }());
	  }
	
	  try {
	    Object.keys('foo');
	  } catch (e) {
	    var originalObjectKeys = Object.keys;
	    Object.keys = function (obj) {
	      return originalObjectKeys(ES.ToObject(obj));
	    };
	  }
	
	  if (!RegExp.prototype.flags && supportsDescriptors) {
	    var regExpFlagsGetter = function flags() {
	      if (!ES.TypeIsObject(this)) {
	        throw new TypeError('Method called on incompatible type: must be an object.');
	      }
	      var result = '';
	      if (this.global) {
	        result += 'g';
	      }
	      if (this.ignoreCase) {
	        result += 'i';
	      }
	      if (this.multiline) {
	        result += 'm';
	      }
	      if (this.unicode) {
	        result += 'u';
	      }
	      if (this.sticky) {
	        result += 'y';
	      }
	      return result;
	    };
	
	    Value.getter(RegExp.prototype, 'flags', regExpFlagsGetter);
	  }
	
	  var regExpSupportsFlagsWithRegex = (function () {
	    try {
	      return String(new RegExp(/a/g, 'i')) === '/a/i';
	    } catch (e) {
	      return false;
	    }
	  }());
	
	  if (!regExpSupportsFlagsWithRegex && supportsDescriptors) {
	    var OrigRegExp = RegExp;
	    var RegExpShim = function RegExp(pattern, flags) {
	      if (Type.regex(pattern) && Type.string(flags)) {
	        return new RegExp(pattern.source, flags);
	      }
	      return new OrigRegExp(pattern, flags);
	    };
	    defineProperty(RegExpShim, 'toString', OrigRegExp.toString.bind(OrigRegExp), true);
	    if (Object.setPrototypeOf) {
	      // sets up proper prototype chain where possible
	      Object.setPrototypeOf(OrigRegExp, RegExpShim);
	    }
	    Object.getOwnPropertyNames(OrigRegExp).forEach(function (key) {
	      if (key === '$input') { return; } // Chrome < v39 & Opera < 26 have a nonstandard "$input" property
	      if (key in noop) { return; }
	      Value.proxy(OrigRegExp, key, RegExpShim);
	    });
	    RegExpShim.prototype = OrigRegExp.prototype;
	    Value.redefine(OrigRegExp.prototype, 'constructor', RegExpShim);
	    /*globals RegExp: true */
	    RegExp = RegExpShim;
	    Value.redefine(globals, 'RegExp', RegExpShim);
	    /*globals RegExp: false */
	  }
	
	  var MathShims = {
	    acosh: function (value) {
	      value = Number(value);
	      if (Number.isNaN(value) || value < 1) { return NaN; }
	      if (value === 1) { return 0; }
	      if (value === Infinity) { return value; }
	      return Math.log(value + Math.sqrt(value * value - 1));
	    },
	
	    asinh: function (value) {
	      value = Number(value);
	      if (value === 0 || !global_isFinite(value)) {
	        return value;
	      }
	      return value < 0 ? -Math.asinh(-value) : Math.log(value + Math.sqrt(value * value + 1));
	    },
	
	    atanh: function (value) {
	      value = Number(value);
	      if (Number.isNaN(value) || value < -1 || value > 1) {
	        return NaN;
	      }
	      if (value === -1) { return -Infinity; }
	      if (value === 1) { return Infinity; }
	      if (value === 0) { return value; }
	      return 0.5 * Math.log((1 + value) / (1 - value));
	    },
	
	    cbrt: function (value) {
	      value = Number(value);
	      if (value === 0) { return value; }
	      var negate = value < 0, result;
	      if (negate) { value = -value; }
	      result = Math.pow(value, 1 / 3);
	      return negate ? -result : result;
	    },
	
	    clz32: function (value) {
	      // See https://bugs.ecmascript.org/show_bug.cgi?id=2465
	      value = Number(value);
	      var number = ES.ToUint32(value);
	      if (number === 0) {
	        return 32;
	      }
	      return 32 - (number).toString(2).length;
	    },
	
	    cosh: function (value) {
	      value = Number(value);
	      if (value === 0) { return 1; } // +0 or -0
	      if (Number.isNaN(value)) { return NaN; }
	      if (!global_isFinite(value)) { return Infinity; }
	      if (value < 0) { value = -value; }
	      if (value > 21) { return Math.exp(value) / 2; }
	      return (Math.exp(value) + Math.exp(-value)) / 2;
	    },
	
	    expm1: function (value) {
	      value = Number(value);
	      if (value === -Infinity) { return -1; }
	      if (!global_isFinite(value) || value === 0) { return value; }
	      return Math.exp(value) - 1;
	    },
	
	    hypot: function (x, y) {
	      var anyNaN = false;
	      var allZero = true;
	      var anyInfinity = false;
	      var numbers = [];
	      Array.prototype.every.call(arguments, function (arg) {
	        var num = Number(arg);
	        if (Number.isNaN(num)) {
	          anyNaN = true;
	        } else if (num === Infinity || num === -Infinity) {
	          anyInfinity = true;
	        } else if (num !== 0) {
	          allZero = false;
	        }
	        if (anyInfinity) {
	          return false;
	        } else if (!anyNaN) {
	          numbers.push(Math.abs(num));
	        }
	        return true;
	      });
	      if (anyInfinity) { return Infinity; }
	      if (anyNaN) { return NaN; }
	      if (allZero) { return 0; }
	
	      numbers.sort(function (a, b) { return b - a; });
	      var largest = numbers[0];
	      var divided = numbers.map(function (number) { return number / largest; });
	      var sum = divided.reduce(function (sum, number) { return sum + (number * number); }, 0);
	      return largest * Math.sqrt(sum);
	    },
	
	    log2: function (value) {
	      return Math.log(value) * Math.LOG2E;
	    },
	
	    log10: function (value) {
	      return Math.log(value) * Math.LOG10E;
	    },
	
	    log1p: function (value) {
	      value = Number(value);
	      if (value < -1 || Number.isNaN(value)) { return NaN; }
	      if (value === 0 || value === Infinity) { return value; }
	      if (value === -1) { return -Infinity; }
	      var result = 0;
	      var n = 50;
	
	      if (value < 0 || value > 1) { return Math.log(1 + value); }
	      for (var i = 1; i < n; i++) {
	        if ((i % 2) === 0) {
	          result -= Math.pow(value, i) / i;
	        } else {
	          result += Math.pow(value, i) / i;
	        }
	      }
	
	      return result;
	    },
	
	    sign: function (value) {
	      var number = +value;
	      if (number === 0) { return number; }
	      if (Number.isNaN(number)) { return number; }
	      return number < 0 ? -1 : 1;
	    },
	
	    sinh: function (value) {
	      value = Number(value);
	      if (!global_isFinite(value) || value === 0) { return value; }
	      return (Math.exp(value) - Math.exp(-value)) / 2;
	    },
	
	    tanh: function (value) {
	      value = Number(value);
	      if (Number.isNaN(value) || value === 0) { return value; }
	      if (value === Infinity) { return 1; }
	      if (value === -Infinity) { return -1; }
	      return (Math.exp(value) - Math.exp(-value)) / (Math.exp(value) + Math.exp(-value));
	    },
	
	    trunc: function (value) {
	      var number = Number(value);
	      return number < 0 ? -Math.floor(-number) : Math.floor(number);
	    },
	
	    imul: function (x, y) {
	      // taken from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/imul
	      x = ES.ToUint32(x);
	      y = ES.ToUint32(y);
	      var ah = (x >>> 16) & 0xffff;
	      var al = x & 0xffff;
	      var bh = (y >>> 16) & 0xffff;
	      var bl = y & 0xffff;
	      // the shift by 0 fixes the sign on the high part
	      // the final |0 converts the unsigned value into a signed value
	      return ((al * bl) + (((ah * bl + al * bh) << 16) >>> 0) | 0);
	    },
	
	    fround: function (x) {
	      if (x === 0 || x === Infinity || x === -Infinity || Number.isNaN(x)) {
	        return x;
	      }
	      var num = Number(x);
	      return numberConversion.toFloat32(num);
	    }
	  };
	  defineProperties(Math, MathShims);
	
	  if (Math.imul(0xffffffff, 5) !== -5) {
	    // Safari 6.1, at least, reports "0" for this value
	    Math.imul = MathShims.imul;
	  }
	
	  // Promises
	  // Simplest possible implementation; use a 3rd-party library if you
	  // want the best possible speed and/or long stack traces.
	  var PromiseShim = (function () {
	
	    var Promise, Promise$prototype;
	
	    ES.IsPromise = function (promise) {
	      if (!ES.TypeIsObject(promise)) {
	        return false;
	      }
	      if (!promise._promiseConstructor) {
	        // _promiseConstructor is a bit more unique than _status, so we'll
	        // check that instead of the [[PromiseStatus]] internal field.
	        return false;
	      }
	      if (typeof promise._status === 'undefined') {
	        return false; // uninitialized
	      }
	      return true;
	    };
	
	    // "PromiseCapability" in the spec is what most promise implementations
	    // call a "deferred".
	    var PromiseCapability = function (C) {
	      if (!ES.IsCallable(C)) {
	        throw new TypeError('bad promise constructor');
	      }
	      var capability = this;
	      var resolver = function (resolve, reject) {
	        capability.resolve = resolve;
	        capability.reject = reject;
	      };
	      capability.promise = ES.Construct(C, [resolver]);
	      // see https://bugs.ecmascript.org/show_bug.cgi?id=2478
	      if (!capability.promise._es6construct) {
	        throw new TypeError('bad promise constructor');
	      }
	      if (!(ES.IsCallable(capability.resolve) && ES.IsCallable(capability.reject))) {
	        throw new TypeError('bad promise constructor');
	      }
	    };
	
	    // find an appropriate setImmediate-alike
	    var setTimeout = globals.setTimeout;
	    var makeZeroTimeout;
	    /*global window */
	    if (typeof window !== 'undefined' && ES.IsCallable(window.postMessage)) {
	      makeZeroTimeout = function () {
	        // from http://dbaron.org/log/20100309-faster-timeouts
	        var timeouts = [];
	        var messageName = 'zero-timeout-message';
	        var setZeroTimeout = function (fn) {
	          timeouts.push(fn);
	          window.postMessage(messageName, '*');
	        };
	        var handleMessage = function (event) {
	          if (event.source === window && event.data === messageName) {
	            event.stopPropagation();
	            if (timeouts.length === 0) { return; }
	            var fn = timeouts.shift();
	            fn();
	          }
	        };
	        window.addEventListener('message', handleMessage, true);
	        return setZeroTimeout;
	      };
	    }
	    var makePromiseAsap = function () {
	      // An efficient task-scheduler based on a pre-existing Promise
	      // implementation, which we can use even if we override the
	      // global Promise below (in order to workaround bugs)
	      // https://github.com/Raynos/observ-hash/issues/2#issuecomment-35857671
	      var P = globals.Promise;
	      return P && P.resolve && function (task) {
	        return P.resolve().then(task);
	      };
	    };
	    /*global process */
	    var enqueue = ES.IsCallable(globals.setImmediate) ?
	      globals.setImmediate.bind(globals) :
	      typeof process === 'object' && process.nextTick ? process.nextTick :
	      makePromiseAsap() ||
	      (ES.IsCallable(makeZeroTimeout) ? makeZeroTimeout() :
	      function (task) { setTimeout(task, 0); }); // fallback
	
	    var updatePromiseFromPotentialThenable = function (x, capability) {
	      if (!ES.TypeIsObject(x)) {
	        return false;
	      }
	      var resolve = capability.resolve;
	      var reject = capability.reject;
	      try {
	        var then = x.then; // only one invocation of accessor
	        if (!ES.IsCallable(then)) { return false; }
	        then.call(x, resolve, reject);
	      } catch (e) {
	        reject(e);
	      }
	      return true;
	    };
	
	    var triggerPromiseReactions = function (reactions, x) {
	      reactions.forEach(function (reaction) {
	        enqueue(function () {
	          // PromiseReactionTask
	          var handler = reaction.handler;
	          var capability = reaction.capability;
	          var resolve = capability.resolve;
	          var reject = capability.reject;
	          try {
	            var result = handler(x);
	            if (result === capability.promise) {
	              throw new TypeError('self resolution');
	            }
	            var updateResult =
	              updatePromiseFromPotentialThenable(result, capability);
	            if (!updateResult) {
	              resolve(result);
	            }
	          } catch (e) {
	            reject(e);
	          }
	        });
	      });
	    };
	
	    var promiseResolutionHandler = function (promise, onFulfilled, onRejected) {
	      return function (x) {
	        if (x === promise) {
	          return onRejected(new TypeError('self resolution'));
	        }
	        var C = promise._promiseConstructor;
	        var capability = new PromiseCapability(C);
	        var updateResult = updatePromiseFromPotentialThenable(x, capability);
	        if (updateResult) {
	          return capability.promise.then(onFulfilled, onRejected);
	        } else {
	          return onFulfilled(x);
	        }
	      };
	    };
	
	    Promise = function (resolver) {
	      var promise = this;
	      promise = emulateES6construct(promise);
	      if (!promise._promiseConstructor) {
	        // we use _promiseConstructor as a stand-in for the internal
	        // [[PromiseStatus]] field; it's a little more unique.
	        throw new TypeError('bad promise');
	      }
	      if (typeof promise._status !== 'undefined') {
	        throw new TypeError('promise already initialized');
	      }
	      // see https://bugs.ecmascript.org/show_bug.cgi?id=2482
	      if (!ES.IsCallable(resolver)) {
	        throw new TypeError('not a valid resolver');
	      }
	      promise._status = 'unresolved';
	      promise._resolveReactions = [];
	      promise._rejectReactions = [];
	
	      var resolve = function (resolution) {
	        if (promise._status !== 'unresolved') { return; }
	        var reactions = promise._resolveReactions;
	        promise._result = resolution;
	        promise._resolveReactions = void 0;
	        promise._rejectReactions = void 0;
	        promise._status = 'has-resolution';
	        triggerPromiseReactions(reactions, resolution);
	      };
	      var reject = function (reason) {
	        if (promise._status !== 'unresolved') { return; }
	        var reactions = promise._rejectReactions;
	        promise._result = reason;
	        promise._resolveReactions = void 0;
	        promise._rejectReactions = void 0;
	        promise._status = 'has-rejection';
	        triggerPromiseReactions(reactions, reason);
	      };
	      try {
	        resolver(resolve, reject);
	      } catch (e) {
	        reject(e);
	      }
	      return promise;
	    };
	    Promise$prototype = Promise.prototype;
	    var _promiseAllResolver = function (index, values, capability, remaining) {
	      var done = false;
	      return function (x) {
	        if (done) { return; } // protect against being called multiple times
	        done = true;
	        values[index] = x;
	        if ((--remaining.count) === 0) {
	          var resolve = capability.resolve;
	          resolve(values); // call w/ this===undefined
	        }
	      };
	    };
	
	    defineProperties(Promise, {
	      '@@create': function (obj) {
	        var constructor = this;
	        // AllocatePromise
	        // The `obj` parameter is a hack we use for es5
	        // compatibility.
	        var prototype = constructor.prototype || Promise$prototype;
	        obj = obj || create(prototype);
	        defineProperties(obj, {
	          _status: void 0,
	          _result: void 0,
	          _resolveReactions: void 0,
	          _rejectReactions: void 0,
	          _promiseConstructor: void 0
	        });
	        obj._promiseConstructor = constructor;
	        return obj;
	      },
	
	      all: function all(iterable) {
	        var C = this;
	        var capability = new PromiseCapability(C);
	        var resolve = capability.resolve;
	        var reject = capability.reject;
	        try {
	          if (!ES.IsIterable(iterable)) {
	            throw new TypeError('bad iterable');
	          }
	          var it = ES.GetIterator(iterable);
	          var values = [], remaining = { count: 1 };
	          for (var index = 0; ; index++) {
	            var next = ES.IteratorNext(it);
	            if (next.done) {
	              break;
	            }
	            var nextPromise = C.resolve(next.value);
	            var resolveElement = _promiseAllResolver(
	              index, values, capability, remaining
	            );
	            remaining.count++;
	            nextPromise.then(resolveElement, capability.reject);
	          }
	          if ((--remaining.count) === 0) {
	            resolve(values); // call w/ this===undefined
	          }
	        } catch (e) {
	          reject(e);
	        }
	        return capability.promise;
	      },
	
	      race: function race(iterable) {
	        var C = this;
	        var capability = new PromiseCapability(C);
	        var resolve = capability.resolve;
	        var reject = capability.reject;
	        try {
	          if (!ES.IsIterable(iterable)) {
	            throw new TypeError('bad iterable');
	          }
	          var it = ES.GetIterator(iterable);
	          while (true) {
	            var next = ES.IteratorNext(it);
	            if (next.done) {
	              // If iterable has no items, resulting promise will never
	              // resolve; see:
	              // https://github.com/domenic/promises-unwrapping/issues/75
	              // https://bugs.ecmascript.org/show_bug.cgi?id=2515
	              break;
	            }
	            var nextPromise = C.resolve(next.value);
	            nextPromise.then(resolve, reject);
	          }
	        } catch (e) {
	          reject(e);
	        }
	        return capability.promise;
	      },
	
	      reject: function reject(reason) {
	        var C = this;
	        var capability = new PromiseCapability(C);
	        var rejectPromise = capability.reject;
	        rejectPromise(reason); // call with this===undefined
	        return capability.promise;
	      },
	
	      resolve: function resolve(v) {
	        var C = this;
	        if (ES.IsPromise(v)) {
	          var constructor = v._promiseConstructor;
	          if (constructor === C) { return v; }
	        }
	        var capability = new PromiseCapability(C);
	        var resolvePromise = capability.resolve;
	        resolvePromise(v); // call with this===undefined
	        return capability.promise;
	      }
	    });
	
	    defineProperties(Promise$prototype, {
	      'catch': function (onRejected) {
	        return this.then(void 0, onRejected);
	      },
	
	      then: function then(onFulfilled, onRejected) {
	        var promise = this;
	        if (!ES.IsPromise(promise)) { throw new TypeError('not a promise'); }
	        // this.constructor not this._promiseConstructor; see
	        // https://bugs.ecmascript.org/show_bug.cgi?id=2513
	        var C = this.constructor;
	        var capability = new PromiseCapability(C);
	        if (!ES.IsCallable(onRejected)) {
	          onRejected = function (e) { throw e; };
	        }
	        if (!ES.IsCallable(onFulfilled)) {
	          onFulfilled = function (x) { return x; };
	        }
	        var resolutionHandler = promiseResolutionHandler(promise, onFulfilled, onRejected);
	        var resolveReaction = { capability: capability, handler: resolutionHandler };
	        var rejectReaction = { capability: capability, handler: onRejected };
	        switch (promise._status) {
	          case 'unresolved':
	            promise._resolveReactions.push(resolveReaction);
	            promise._rejectReactions.push(rejectReaction);
	            break;
	          case 'has-resolution':
	            triggerPromiseReactions([resolveReaction], promise._result);
	            break;
	          case 'has-rejection':
	            triggerPromiseReactions([rejectReaction], promise._result);
	            break;
	          default:
	            throw new TypeError('unexpected');
	        }
	        return capability.promise;
	      }
	    });
	
	    return Promise;
	  }());
	
	  // Chrome's native Promise has extra methods that it shouldn't have. Let's remove them.
	  if (globals.Promise) {
	    delete globals.Promise.accept;
	    delete globals.Promise.defer;
	    delete globals.Promise.prototype.chain;
	  }
	
	  // export the Promise constructor.
	  defineProperties(globals, { Promise: PromiseShim });
	  // In Chrome 33 (and thereabouts) Promise is defined, but the
	  // implementation is buggy in a number of ways.  Let's check subclassing
	  // support to see if we have a buggy implementation.
	  var promiseSupportsSubclassing = supportsSubclassing(globals.Promise, function (S) {
	    return S.resolve(42) instanceof S;
	  });
	  var promiseIgnoresNonFunctionThenCallbacks = (function () {
	    try {
	      globals.Promise.reject(42).then(null, 5).then(null, noop);
	      return true;
	    } catch (ex) {
	      return false;
	    }
	  }());
	  var promiseRequiresObjectContext = (function () {
	    /*global Promise */
	    try { Promise.call(3, noop); } catch (e) { return true; }
	    return false;
	  }());
	  if (!promiseSupportsSubclassing || !promiseIgnoresNonFunctionThenCallbacks || !promiseRequiresObjectContext) {
	    /*globals Promise: true */
	    Promise = PromiseShim;
	    /*globals Promise: false */
	    defineProperty(globals, 'Promise', PromiseShim, true);
	  }
	
	  // Map and Set require a true ES5 environment
	  // Their fast path also requires that the environment preserve
	  // property insertion order, which is not guaranteed by the spec.
	  var testOrder = function (a) {
	    var b = Object.keys(a.reduce(function (o, k) {
	      o[k] = true;
	      return o;
	    }, {}));
	    return a.join(':') === b.join(':');
	  };
	  var preservesInsertionOrder = testOrder(['z', 'a', 'bb']);
	  // some engines (eg, Chrome) only preserve insertion order for string keys
	  var preservesNumericInsertionOrder = testOrder(['z', 1, 'a', '3', 2]);
	
	  if (supportsDescriptors) {
	
	    var fastkey = function fastkey(key) {
	      if (!preservesInsertionOrder) {
	        return null;
	      }
	      var type = typeof key;
	      if (type === 'string') {
	        return '$' + key;
	      } else if (type === 'number') {
	        // note that -0 will get coerced to "0" when used as a property key
	        if (!preservesNumericInsertionOrder) {
	          return 'n' + key;
	        }
	        return key;
	      }
	      return null;
	    };
	
	    var emptyObject = function emptyObject() {
	      // accomodate some older not-quite-ES5 browsers
	      return Object.create ? Object.create(null) : {};
	    };
	
	    var collectionShims = {
	      Map: (function () {
	
	        var empty = {};
	
	        function MapEntry(key, value) {
	          this.key = key;
	          this.value = value;
	          this.next = null;
	          this.prev = null;
	        }
	
	        MapEntry.prototype.isRemoved = function () {
	          return this.key === empty;
	        };
	
	        function MapIterator(map, kind) {
	          this.head = map._head;
	          this.i = this.head;
	          this.kind = kind;
	        }
	
	        MapIterator.prototype = {
	          next: function () {
	            var i = this.i, kind = this.kind, head = this.head, result;
	            if (typeof this.i === 'undefined') {
	              return { value: void 0, done: true };
	            }
	            while (i.isRemoved() && i !== head) {
	              // back up off of removed entries
	              i = i.prev;
	            }
	            // advance to next unreturned element.
	            while (i.next !== head) {
	              i = i.next;
	              if (!i.isRemoved()) {
	                if (kind === 'key') {
	                  result = i.key;
	                } else if (kind === 'value') {
	                  result = i.value;
	                } else {
	                  result = [i.key, i.value];
	                }
	                this.i = i;
	                return { value: result, done: false };
	              }
	            }
	            // once the iterator is done, it is done forever.
	            this.i = void 0;
	            return { value: void 0, done: true };
	          }
	        };
	        addIterator(MapIterator.prototype);
	
	        function Map(iterable) {
	          var map = this;
	          if (!ES.TypeIsObject(map)) {
	            throw new TypeError('Map does not accept arguments when called as a function');
	          }
	          map = emulateES6construct(map);
	          if (!map._es6map) {
	            throw new TypeError('bad map');
	          }
	
	          var head = new MapEntry(null, null);
	          // circular doubly-linked list.
	          head.next = head.prev = head;
	
	          defineProperties(map, {
	            _head: head,
	            _storage: emptyObject(),
	            _size: 0
	          });
	
	          // Optionally initialize map from iterable
	          if (typeof iterable !== 'undefined' && iterable !== null) {
	            var it = ES.GetIterator(iterable);
	            var adder = map.set;
	            if (!ES.IsCallable(adder)) { throw new TypeError('bad map'); }
	            while (true) {
	              var next = ES.IteratorNext(it);
	              if (next.done) { break; }
	              var nextItem = next.value;
	              if (!ES.TypeIsObject(nextItem)) {
	                throw new TypeError('expected iterable of pairs');
	              }
	              adder.call(map, nextItem[0], nextItem[1]);
	            }
	          }
	          return map;
	        }
	        var Map$prototype = Map.prototype;
	        defineProperties(Map, {
	          '@@create': function (obj) {
	            var constructor = this;
	            var prototype = constructor.prototype || Map$prototype;
	            obj = obj || create(prototype);
	            defineProperties(obj, { _es6map: true });
	            return obj;
	          }
	        });
	
	        Value.getter(Map.prototype, 'size', function () {
	          if (typeof this._size === 'undefined') {
	            throw new TypeError('size method called on incompatible Map');
	          }
	          return this._size;
	        });
	
	        defineProperties(Map.prototype, {
	          get: function (key) {
	            var fkey = fastkey(key);
	            if (fkey !== null) {
	              // fast O(1) path
	              var entry = this._storage[fkey];
	              if (entry) {
	                return entry.value;
	              } else {
	                return;
	              }
	            }
	            var head = this._head, i = head;
	            while ((i = i.next) !== head) {
	              if (ES.SameValueZero(i.key, key)) {
	                return i.value;
	              }
	            }
	          },
	
	          has: function (key) {
	            var fkey = fastkey(key);
	            if (fkey !== null) {
	              // fast O(1) path
	              return typeof this._storage[fkey] !== 'undefined';
	            }
	            var head = this._head, i = head;
	            while ((i = i.next) !== head) {
	              if (ES.SameValueZero(i.key, key)) {
	                return true;
	              }
	            }
	            return false;
	          },
	
	          set: function (key, value) {
	            var head = this._head, i = head, entry;
	            var fkey = fastkey(key);
	            if (fkey !== null) {
	              // fast O(1) path
	              if (typeof this._storage[fkey] !== 'undefined') {
	                this._storage[fkey].value = value;
	                return this;
	              } else {
	                entry = this._storage[fkey] = new MapEntry(key, value);
	                i = head.prev;
	                // fall through
	              }
	            }
	            while ((i = i.next) !== head) {
	              if (ES.SameValueZero(i.key, key)) {
	                i.value = value;
	                return this;
	              }
	            }
	            entry = entry || new MapEntry(key, value);
	            if (ES.SameValue(-0, key)) {
	              entry.key = +0; // coerce -0 to +0 in entry
	            }
	            entry.next = this._head;
	            entry.prev = this._head.prev;
	            entry.prev.next = entry;
	            entry.next.prev = entry;
	            this._size += 1;
	            return this;
	          },
	
	          'delete': function (key) {
	            var head = this._head, i = head;
	            var fkey = fastkey(key);
	            if (fkey !== null) {
	              // fast O(1) path
	              if (typeof this._storage[fkey] === 'undefined') {
	                return false;
	              }
	              i = this._storage[fkey].prev;
	              delete this._storage[fkey];
	              // fall through
	            }
	            while ((i = i.next) !== head) {
	              if (ES.SameValueZero(i.key, key)) {
	                i.key = i.value = empty;
	                i.prev.next = i.next;
	                i.next.prev = i.prev;
	                this._size -= 1;
	                return true;
	              }
	            }
	            return false;
	          },
	
	          clear: function () {
	            this._size = 0;
	            this._storage = emptyObject();
	            var head = this._head, i = head, p = i.next;
	            while ((i = p) !== head) {
	              i.key = i.value = empty;
	              p = i.next;
	              i.next = i.prev = head;
	            }
	            head.next = head.prev = head;
	          },
	
	          keys: function () {
	            return new MapIterator(this, 'key');
	          },
	
	          values: function () {
	            return new MapIterator(this, 'value');
	          },
	
	          entries: function () {
	            return new MapIterator(this, 'key+value');
	          },
	
	          forEach: function (callback) {
	            var context = arguments.length > 1 ? arguments[1] : null;
	            var it = this.entries();
	            for (var entry = it.next(); !entry.done; entry = it.next()) {
	              if (context) {
	                callback.call(context, entry.value[1], entry.value[0], this);
	              } else {
	                callback(entry.value[1], entry.value[0], this);
	              }
	            }
	          }
	        });
	        addIterator(Map.prototype, function () { return this.entries(); });
	
	        return Map;
	      }()),
	
	      Set: (function () {
	        // Creating a Map is expensive.  To speed up the common case of
	        // Sets containing only string or numeric keys, we use an object
	        // as backing storage and lazily create a full Map only when
	        // required.
	        var SetShim = function Set(iterable) {
	          var set = this;
	          if (!ES.TypeIsObject(set)) {
	            throw new TypeError('Set does not accept arguments when called as a function');
	          }
	          set = emulateES6construct(set);
	          if (!set._es6set) {
	            throw new TypeError('bad set');
	          }
	
	          defineProperties(set, {
	            '[[SetData]]': null,
	            _storage: emptyObject()
	          });
	
	          // Optionally initialize map from iterable
	          if (typeof iterable !== 'undefined' && iterable !== null) {
	            var it = ES.GetIterator(iterable);
	            var adder = set.add;
	            if (!ES.IsCallable(adder)) { throw new TypeError('bad set'); }
	            while (true) {
	              var next = ES.IteratorNext(it);
	              if (next.done) { break; }
	              var nextItem = next.value;
	              adder.call(set, nextItem);
	            }
	          }
	          return set;
	        };
	        var Set$prototype = SetShim.prototype;
	        defineProperties(SetShim, {
	          '@@create': function (obj) {
	            var constructor = this;
	            var prototype = constructor.prototype || Set$prototype;
	            obj = obj || create(prototype);
	            defineProperties(obj, { _es6set: true });
	            return obj;
	          }
	        });
	
	        // Switch from the object backing storage to a full Map.
	        var ensureMap = function ensureMap(set) {
	          if (!set['[[SetData]]']) {
	            var m = set['[[SetData]]'] = new collectionShims.Map();
	            Object.keys(set._storage).forEach(function (k) {
	              // fast check for leading '$'
	              if (k.charCodeAt(0) === 36) {
	                k = k.slice(1);
	              } else if (k.charAt(0) === 'n') {
	                k = +k.slice(1);
	              } else {
	                k = +k;
	              }
	              m.set(k, k);
	            });
	            set._storage = null; // free old backing storage
	          }
	        };
	
	        Value.getter(SetShim.prototype, 'size', function () {
	          if (typeof this._storage === 'undefined') {
	            // https://github.com/paulmillr/es6-shim/issues/176
	            throw new TypeError('size method called on incompatible Set');
	          }
	          ensureMap(this);
	          return this['[[SetData]]'].size;
	        });
	
	        defineProperties(SetShim.prototype, {
	          has: function (key) {
	            var fkey;
	            if (this._storage && (fkey = fastkey(key)) !== null) {
	              return !!this._storage[fkey];
	            }
	            ensureMap(this);
	            return this['[[SetData]]'].has(key);
	          },
	
	          add: function (key) {
	            var fkey;
	            if (this._storage && (fkey = fastkey(key)) !== null) {
	              this._storage[fkey] = true;
	              return this;
	            }
	            ensureMap(this);
	            this['[[SetData]]'].set(key, key);
	            return this;
	          },
	
	          'delete': function (key) {
	            var fkey;
	            if (this._storage && (fkey = fastkey(key)) !== null) {
	              var hasFKey = _hasOwnProperty(this._storage, fkey);
	              return (delete this._storage[fkey]) && hasFKey;
	            }
	            ensureMap(this);
	            return this['[[SetData]]']['delete'](key);
	          },
	
	          clear: function () {
	            if (this._storage) {
	              this._storage = emptyObject();
	            } else {
	              this['[[SetData]]'].clear();
	            }
	          },
	
	          values: function () {
	            ensureMap(this);
	            return this['[[SetData]]'].values();
	          },
	
	          entries: function () {
	            ensureMap(this);
	            return this['[[SetData]]'].entries();
	          },
	
	          forEach: function (callback) {
	            var context = arguments.length > 1 ? arguments[1] : null;
	            var entireSet = this;
	            ensureMap(entireSet);
	            this['[[SetData]]'].forEach(function (value, key) {
	              if (context) {
	                callback.call(context, key, key, entireSet);
	              } else {
	                callback(key, key, entireSet);
	              }
	            });
	          }
	        });
	        defineProperty(SetShim, 'keys', SetShim.values, true);
	        addIterator(SetShim.prototype, function () { return this.values(); });
	
	        return SetShim;
	      }())
	    };
	    defineProperties(globals, collectionShims);
	
	    if (globals.Map || globals.Set) {
	      /*
	        - In Firefox < 23, Map#size is a function.
	        - In all current Firefox, Set#entries/keys/values & Map#clear do not exist
	        - https://bugzilla.mozilla.org/show_bug.cgi?id=869996
	        - In Firefox 24, Map and Set do not implement forEach
	        - In Firefox 25 at least, Map and Set are callable without "new"
	      */
	      if (
	        typeof globals.Map.prototype.clear !== 'function' ||
	        new globals.Set().size !== 0 ||
	        new globals.Map().size !== 0 ||
	        typeof globals.Map.prototype.keys !== 'function' ||
	        typeof globals.Set.prototype.keys !== 'function' ||
	        typeof globals.Map.prototype.forEach !== 'function' ||
	        typeof globals.Set.prototype.forEach !== 'function' ||
	        isCallableWithoutNew(globals.Map) ||
	        isCallableWithoutNew(globals.Set) ||
	        !supportsSubclassing(globals.Map, function (M) {
	          var m = new M([]);
	          // Firefox 32 is ok with the instantiating the subclass but will
	          // throw when the map is used.
	          m.set(42, 42);
	          return m instanceof M;
	        })
	      ) {
	        globals.Map = collectionShims.Map;
	        globals.Set = collectionShims.Set;
	      }
	    }
	    if (globals.Set.prototype.keys !== globals.Set.prototype.values) {
	      defineProperty(globals.Set.prototype, 'keys', globals.Set.prototype.values, true);
	    }
	    // Shim incomplete iterator implementations.
	    addIterator(Object.getPrototypeOf((new globals.Map()).keys()));
	    addIterator(Object.getPrototypeOf((new globals.Set()).keys()));
	  }
	
	  return globals;
	}));
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(93)))

/***/ },

/***/ 93:
/***/ function(module, exports, __webpack_require__) {

	// shim for using process in browser
	
	var process = module.exports = {};
	
	process.nextTick = (function () {
	    var canSetImmediate = typeof window !== 'undefined'
	    && window.setImmediate;
	    var canMutationObserver = typeof window !== 'undefined'
	    && window.MutationObserver;
	    var canPost = typeof window !== 'undefined'
	    && window.postMessage && window.addEventListener
	    ;
	
	    if (canSetImmediate) {
	        return function (f) { return window.setImmediate(f) };
	    }
	
	    var queue = [];
	
	    if (canMutationObserver) {
	        var hiddenDiv = document.createElement("div");
	        var observer = new MutationObserver(function () {
	            var queueList = queue.slice();
	            queue.length = 0;
	            queueList.forEach(function (fn) {
	                fn();
	            });
	        });
	
	        observer.observe(hiddenDiv, { attributes: true });
	
	        return function nextTick(fn) {
	            if (!queue.length) {
	                hiddenDiv.setAttribute('yes', 'no');
	            }
	            queue.push(fn);
	        };
	    }
	
	    if (canPost) {
	        window.addEventListener('message', function (ev) {
	            var source = ev.source;
	            if ((source === window || source === null) && ev.data === 'process-tick') {
	                ev.stopPropagation();
	                if (queue.length > 0) {
	                    var fn = queue.shift();
	                    fn();
	                }
	            }
	        }, true);
	
	        return function nextTick(fn) {
	            queue.push(fn);
	            window.postMessage('process-tick', '*');
	        };
	    }
	
	    return function nextTick(fn) {
	        setTimeout(fn, 0);
	    };
	})();
	
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	
	function noop() {}
	
	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;
	
	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};
	
	// TODO(shtylman)
	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};


/***/ }

});
//# sourceMappingURL=1.1.js.map