// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"data/venue_data.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = exports.default = venues = [{
  v_id: 1,
  v_name: "Museum of Modern Art",
  v_city: "New York",
  v_country: "USA",
  v_size: 630000,
  v_visitors: 3000000,
  exhibited_paintings: 2000,
  artists: 500,
  exhibitions: 50
}, {
  v_id: 2,
  v_name: "Louvre Museum",
  v_city: "Paris",
  v_country: "France",
  v_size: 782910,
  v_visitors: 10000000,
  exhibited_paintings: 3500,
  artists: 800,
  exhibitions: 70
}, {
  v_id: 3,
  v_name: "National Gallery",
  v_city: "London",
  v_country: "UK",
  v_size: 460000,
  v_visitors: 6000000,
  exhibited_paintings: 2500,
  artists: 600,
  exhibitions: 60
}, {
  v_id: 4,
  v_name: "Rijksmuseum",
  v_city: "Amsterdam",
  v_country: "Netherlands",
  v_size: 90000,
  v_visitors: 2500000,
  exhibited_paintings: 1500,
  artists: 400,
  exhibitions: 40
}, {
  v_id: 5,
  v_name: "Uffizi Gallery",
  v_city: "Florence",
  v_country: "Italy",
  v_size: 86000,
  v_visitors: 2000000,
  exhibited_paintings: 1800,
  artists: 450,
  exhibitions: 45
}, {
  v_id: 6,
  v_name: "Hermitage Museum",
  v_city: "St. Petersburg",
  v_country: "Russia",
  v_size: 233345,
  v_visitors: 4000000,
  exhibited_paintings: 3000,
  artists: 700,
  exhibitions: 65
}, {
  v_id: 7,
  v_name: "Prado Museum",
  v_city: "Madrid",
  v_country: "Spain",
  v_size: 80000,
  v_visitors: 3000000,
  exhibited_paintings: 2200,
  artists: 550,
  exhibitions: 55
}, {
  v_id: 8,
  v_name: "Tate Modern",
  v_city: "London",
  v_country: "UK",
  v_size: 34000,
  v_visitors: 5000000,
  exhibited_paintings: 1700,
  artists: 430,
  exhibitions: 48
}, {
  v_id: 9,
  v_name: "Guggenheim Museum",
  v_city: "New York",
  v_country: "USA",
  v_size: 32000,
  v_visitors: 2000000,
  exhibited_paintings: 1600,
  artists: 420,
  exhibitions: 42
}, {
  v_id: 10,
  v_name: "Centre Pompidou",
  v_city: "Paris",
  v_country: "France",
  v_size: 103000,
  v_visitors: 3500000,
  exhibited_paintings: 2400,
  artists: 600,
  exhibitions: 60
}, {
  v_id: 11,
  v_name: "Vatican Museums",
  v_city: "Vatican City",
  v_country: "Vatican City",
  v_size: 42000,
  v_visitors: 6000000,
  exhibited_paintings: 2800,
  artists: 700,
  exhibitions: 70
}, {
  v_id: 12,
  v_name: "British Museum",
  v_city: "London",
  v_country: "UK",
  v_size: 92000,
  v_visitors: 5800000,
  exhibited_paintings: 2600,
  artists: 650,
  exhibitions: 65
}, {
  v_id: 13,
  v_name: "Metropolitan Museum of Art",
  v_city: "New York",
  v_country: "USA",
  v_size: 2000000,
  v_visitors: 7000000,
  exhibited_paintings: 4000,
  artists: 1000,
  exhibitions: 80
}, {
  v_id: 14,
  v_name: "Art Institute of Chicago",
  v_city: "Chicago",
  v_country: "USA",
  v_size: 100000,
  v_visitors: 1500000,
  exhibited_paintings: 1400,
  artists: 350,
  exhibitions: 35
}, {
  v_id: 15,
  v_name: "Van Gogh Museum",
  v_city: "Amsterdam",
  v_country: "Netherlands",
  v_size: 15000,
  v_visitors: 2100000,
  exhibited_paintings: 1200,
  artists: 300,
  exhibitions: 30
}, {
  v_id: 16,
  v_name: "Getty Center",
  v_city: "Los Angeles",
  v_country: "USA",
  v_size: 24000,
  v_visitors: 1800000,
  exhibited_paintings: 1300,
  artists: 320,
  exhibitions: 32
}, {
  v_id: 17,
  v_name: "National Museum of Korea",
  v_city: "Seoul",
  v_country: "South Korea",
  v_size: 137000,
  v_visitors: 3000000,
  exhibited_paintings: 2000,
  artists: 500,
  exhibitions: 50
}, {
  v_id: 18,
  v_name: "Tokyo National Museum",
  v_city: "Tokyo",
  v_country: "Japan",
  v_size: 110000,
  v_visitors: 2300000,
  exhibited_paintings: 1900,
  artists: 480,
  exhibitions: 48
}, {
  v_id: 19,
  v_name: "National Gallery of Art",
  v_city: "Washington, D.C.",
  v_country: "USA",
  v_size: 271000,
  v_visitors: 4500000,
  exhibited_paintings: 3000,
  artists: 750,
  exhibitions: 75
}, {
  v_id: 20,
  v_name: "Museo Nacional Centro de Arte Reina Sofía",
  v_city: "Madrid",
  v_country: "Spain",
  v_size: 84000,
  v_visitors: 3600000,
  exhibited_paintings: 2100,
  artists: 520,
  exhibitions: 52
}, {
  v_id: 21,
  v_name: "Museum of Fine Arts",
  v_city: "Boston",
  v_country: "USA",
  v_size: 45000,
  v_visitors: 1200000,
  exhibited_paintings: 1100,
  artists: 280,
  exhibitions: 28
}, {
  v_id: 22,
  v_name: "National Palace Museum",
  v_city: "Taipei",
  v_country: "Taiwan",
  v_size: 100000,
  v_visitors: 4000000,
  exhibited_paintings: 2500,
  artists: 620,
  exhibitions: 62
}, {
  v_id: 23,
  v_name: "State Hermitage Museum",
  v_city: "St. Petersburg",
  v_country: "Russia",
  v_size: 233345,
  v_visitors: 4000000,
  exhibited_paintings: 3000,
  artists: 700,
  exhibitions: 65
}, {
  v_id: 24,
  v_name: "Victoria and Albert Museum",
  v_city: "London",
  v_country: "UK",
  v_size: 120000,
  v_visitors: 3200000,
  exhibited_paintings: 2300,
  artists: 580,
  exhibitions: 58
}, {
  v_id: 25,
  v_name: "National Museum of China",
  v_city: "Beijing",
  v_country: "China",
  v_size: 192000,
  v_visitors: 8000000,
  exhibited_paintings: 3500,
  artists: 900,
  exhibitions: 90
}, {
  v_id: 26,
  v_name: "Pergamon Museum",
  v_city: "Berlin",
  v_country: "Germany",
  v_size: 20000,
  v_visitors: 1000000,
  exhibited_paintings: 1000,
  artists: 250,
  exhibitions: 25
}, {
  v_id: 27,
  v_name: "National Museum of Anthropology",
  v_city: "Mexico City",
  v_country: "Mexico",
  v_size: 79000,
  v_visitors: 2300000,
  exhibited_paintings: 1800,
  artists: 450,
  exhibitions: 45
}, {
  v_id: 28,
  v_name: "Museo del Prado",
  v_city: "Madrid",
  v_country: "Spain",
  v_size: 45000,
  v_visitors: 3000000,
  exhibited_paintings: 2200,
  artists: 550,
  exhibitions: 55
}, {
  v_id: 29,
  v_name: "Museum of Islamic Art",
  v_city: "Doha",
  v_country: "Qatar",
  v_size: 45000,
  v_visitors: 500000,
  exhibited_paintings: 900,
  artists: 220,
  exhibitions: 22
}, {
  v_id: 30,
  v_name: "National Museum of Western Art",
  v_city: "Tokyo",
  v_country: "Japan",
  v_size: 5000,
  v_visitors: 1000000,
  exhibited_paintings: 800,
  artists: 200,
  exhibitions: 20
}];
},{}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}
module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "55773" + '/');
  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);
    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);
          if (didAccept) {
            handled = true;
          }
        }
      });

      // Enable HMR for CSS by default.
      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });
      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }
    if (data.type === 'reload') {
      ws.close();
      ws.onclose = function () {
        location.reload();
      };
    }
    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }
    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}
function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);
  if (overlay) {
    overlay.remove();
  }
}
function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID;

  // html encode message and stack trace
  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}
function getParents(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }
  var parents = [];
  var k, d, dep;
  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }
  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }
  return parents;
}
function hmrApply(bundle, asset) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}
function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }
  if (checkedAssets[id]) {
    return;
  }
  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }
  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}
function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};
  if (cached) {
    cached.hot.data = bundle.hotData;
  }
  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }
  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });
    return true;
  }
}
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","data/venue_data.js"], null)
//# sourceMappingURL=/venue_data.dfe84cee.js.map