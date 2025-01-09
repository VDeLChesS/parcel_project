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
})({"data/exhibition_data.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = exports.default = exhibitions = [{
  e_id: 1,
  e_title: "Modern Art Exhibition",
  e_venue: "Albertina",
  e_startdate: "1906-03-15",
  e_type: "Modern Art",
  e_paintings: 45,
  e_country: "Austria",
  e_city: "Vienna",
  e_latitude: 48.2082,
  e_longitude: 16.3669,
  a_id: 1,
  a_firstname: "Vincent",
  a_lastname: "van Gogh",
  a_gender: "M",
  a_nationality: "Dutch"
}, {
  e_id: 2,
  e_title: "Impressionist Masters",
  e_venue: "Musée d'Orsay",
  e_startdate: "1907-06-20",
  e_type: "Impressionism",
  e_paintings: 32,
  e_country: "France",
  e_city: "Paris",
  e_latitude: 48.8606,
  e_longitude: 2.3376,
  a_id: 2,
  a_firstname: "Paul",
  a_lastname: "Cézanne",
  a_gender: "M",
  a_nationality: "French"
}, {
  e_id: 3,
  e_title: "Northern Expressions",
  e_venue: "National Gallery",
  e_startdate: "1908-09-10",
  e_type: "Expressionism",
  e_paintings: 28,
  e_country: "Norway",
  e_city: "Oslo",
  e_latitude: 59.9139,
  e_longitude: 10.7522,
  a_id: 3,
  a_firstname: "Edvard",
  a_lastname: "Munch",
  a_gender: "M",
  a_nationality: "Norwegian"
}, {
  e_id: 4,
  e_title: "Post-Impressionist Collection",
  e_venue: "Albertina",
  e_startdate: "1909-04-15",
  e_type: "Post-Impressionism",
  e_paintings: 55,
  e_country: "Austria",
  e_city: "Vienna",
  e_latitude: 48.2082,
  e_longitude: 16.3669,
  a_id: 1,
  a_firstname: "Vincent",
  a_lastname: "van Gogh",
  a_gender: "M",
  a_nationality: "Dutch"
}, {
  e_id: 5,
  e_title: "Modern Landscapes",
  e_venue: "Musée d'Orsay",
  e_startdate: "1910-07-22",
  e_type: "Landscape",
  e_paintings: 40,
  e_country: "France",
  e_city: "Paris",
  e_latitude: 48.8606,
  e_longitude: 2.3376,
  a_id: 2,
  a_firstname: "Paul",
  a_lastname: "Cézanne",
  a_gender: "M",
  a_nationality: "French"
}, {
  e_id: 6,
  e_title: "Fauvist Collection",
  e_venue: "National Gallery",
  e_startdate: "1911-10-05",
  e_type: "Fauvism",
  e_paintings: 35,
  e_country: "Norway",
  e_city: "Oslo",
  e_latitude: 59.9139,
  e_longitude: 10.7522,
  a_id: 3,
  a_firstname: "Edvard",
  a_lastname: "Munch",
  a_gender: "M",
  a_nationality: "Norwegian"
}, {
  e_id: 7,
  e_title: "Cubist Collection",
  e_venue: "Albertina",
  e_startdate: "1912-05-15",
  e_type: "Cubism",
  e_paintings: 50,
  e_country: "Austria",
  e_city: "Vienna",
  e_latitude: 48.2082,
  e_longitude: 16.3669,
  a_id: 1,
  a_firstname: "Vincent",
  a_lastname: "van Gogh",
  a_gender: "M",
  a_nationality: "Dutch"
}, {
  e_id: 8,
  e_title: "Surrealist Collection",
  e_venue: "Musée d'Orsay",
  e_startdate: "1913-08-20",
  e_type: "Surrealism",
  e_paintings: 30,
  e_country: "France",
  e_city: "Paris",
  e_latitude: 48.8606,
  e_longitude: 2.3376,
  a_id: 2,
  a_firstname: "Paul",
  a_lastname: "Cézanne",
  a_gender: "M",
  a_nationality: "French"
}, {
  e_id: 9,
  e_title: "Abstract Expressionist Collection",
  e_venue: "National Gallery",
  e_startdate: "1914-11-15",
  e_type: "Abstract Expressionism",
  e_paintings: 25,
  e_country: "Norway",
  e_city: "Oslo",
  e_latitude: 59.9139,
  e_longitude: 10.7522,
  a_id: 3,
  a_firstname: "Edvard",
  a_lastname: "Munch",
  a_gender: "M",
  a_nationality: "Norwegian"
}, {
  e_id: 10,
  e_title: "Pop Art Collection",
  e_venue: "Albertina",
  e_startdate: "1915-12-20",
  e_type: "Pop Art",
  e_paintings: 60,
  e_country: "Austria",
  e_city: "Vienna",
  e_latitude: 48.2082,
  e_longitude: 16.3669,
  a_id: 1,
  a_firstname: "Vincent",
  a_lastname: "van Gogh",
  a_gender: "M",
  a_nationality: "Dutch"
}, {
  e_id: 11,
  e_title: "Impressionist Landscapes",
  e_venue: "National Gallery",
  e_startdate: "1916-03-10",
  e_type: "Impressionism",
  e_paintings: 38,
  e_country: "Norway",
  e_city: "Oslo",
  e_latitude: 59.9139,
  e_longitude: 10.7522,
  a_id: 4,
  a_firstname: "Claude",
  a_lastname: "Monet",
  a_gender: "M",
  a_nationality: "French"
}, {
  e_id: 12,
  e_title: "Cubist Masters",
  e_venue: "Musée d'Orsay",
  e_startdate: "1917-05-15",
  e_type: "Cubism",
  e_paintings: 45,
  e_country: "France",
  e_city: "Paris",
  e_latitude: 48.8606,
  e_longitude: 2.3376,
  a_id: 5,
  a_firstname: "Pablo",
  a_lastname: "Picasso",
  a_gender: "M",
  a_nationality: "Spanish"
}, {
  e_id: 13,
  e_title: "Surrealist Dreams",
  e_venue: "Albertina",
  e_startdate: "1918-08-20",
  e_type: "Surrealism",
  e_paintings: 33,
  e_country: "Austria",
  e_city: "Vienna",
  e_latitude: 48.2082,
  e_longitude: 16.3669,
  a_id: 6,
  a_firstname: "Salvador",
  a_lastname: "Dalí",
  a_gender: "M",
  a_nationality: "Spanish"
}, {
  e_id: 14,
  e_title: "Fauvist Expressions",
  e_venue: "National Gallery",
  e_startdate: "1919-10-05",
  e_type: "Fauvism",
  e_paintings: 29,
  e_country: "Norway",
  e_city: "Oslo",
  e_latitude: 59.9139,
  e_longitude: 10.7522,
  a_id: 7,
  a_firstname: "Henri",
  a_lastname: "Matisse",
  a_gender: "M",
  a_nationality: "French"
}, {
  e_id: 15,
  e_title: "Abstract Masters",
  e_venue: "Musée d'Orsay",
  e_startdate: "1920-11-15",
  e_type: "Abstract",
  e_paintings: 40,
  e_country: "France",
  e_city: "Paris",
  e_latitude: 48.8606,
  e_longitude: 2.3376,
  a_id: 8,
  a_firstname: "Jackson",
  a_lastname: "Pollock",
  a_gender: "M",
  a_nationality: "American"
}, {
  e_id: 121,
  e_title: "Modern Art Exhibition",
  e_venue: "Albertina",
  e_startdate: "1906-03-15",
  e_type: "Modern Art",
  e_paintings: 45,
  e_country: "Austria",
  e_city: "Vienna",
  e_latitude: 48.2082,
  e_longitude: 16.3669,
  a_id: 1,
  a_firstname: "Vincent",
  a_lastname: "van Gogh",
  a_gender: "M",
  a_nationality: "Dutch"
}, {
  e_id: 122,
  e_title: "Impressionist Masters",
  e_venue: "Musée d'Orsay",
  e_startdate: "1907-06-20",
  e_type: "Impressionism",
  e_paintings: 32,
  e_country: "France",
  e_city: "Paris",
  e_latitude: 48.8606,
  e_longitude: 2.3376,
  a_id: 2,
  a_firstname: "Paul",
  a_lastname: "Cézanne",
  a_gender: "M",
  a_nationality: "French"
}, {
  e_id: 322,
  e_title: "Northern Expressions",
  e_venue: "National Gallery",
  e_startdate: "1908-09-10",
  e_type: "Expressionism",
  e_paintings: 28,
  e_country: "Norway",
  e_city: "Oslo",
  e_latitude: 59.9139,
  e_longitude: 10.7522,
  a_id: 3,
  a_firstname: "Edvard",
  a_lastname: "Munch",
  a_gender: "M",
  a_nationality: "Norwegian"
}, {
  e_id: 42,
  e_title: "Post-Impressionist Collection",
  e_venue: "Albertina",
  e_startdate: "1909-04-15",
  e_type: "Post-Impressionism",
  e_paintings: 55,
  e_country: "Austria",
  e_city: "Vienna",
  e_latitude: 48.2082,
  e_longitude: 16.3669,
  a_id: 1,
  a_firstname: "Vincent",
  a_lastname: "van Gogh",
  a_gender: "M",
  a_nationality: "Dutch"
}, {
  e_id: 45,
  e_title: "Modern Landscapes",
  e_venue: "Musée d'Orsay",
  e_startdate: "1910-07-22",
  e_type: "Landscape",
  e_paintings: 40,
  e_country: "France",
  e_city: "Paris",
  e_latitude: 48.8606,
  e_longitude: 2.3376,
  a_id: 2,
  a_firstname: "Paul",
  a_lastname: "Cézanne",
  a_gender: "M",
  a_nationality: "French"
}, {
  e_id: 64,
  e_title: "Fauvist Collection",
  e_venue: "National Gallery",
  e_startdate: "1911-10-05",
  e_type: "Fauvism",
  e_paintings: 35,
  e_country: "Norway",
  e_city: "Oslo",
  e_latitude: 59.9139,
  e_longitude: 10.7522,
  a_id: 3,
  a_firstname: "Edvard",
  a_lastname: "Munch",
  a_gender: "M",
  a_nationality: "Norwegian"
}, {
  e_id: 73,
  e_title: "Cubist Collection",
  e_venue: "Albertina",
  e_startdate: "1912-05-15",
  e_type: "Cubism",
  e_paintings: 50,
  e_country: "Austria",
  e_city: "Vienna",
  e_latitude: 48.2082,
  e_longitude: 16.3669,
  a_id: 1,
  a_firstname: "Vincent",
  a_lastname: "van Gogh",
  a_gender: "M",
  a_nationality: "Dutch"
}, {
  e_id: 83,
  e_title: "Surrealist Collection",
  e_venue: "Musée d'Orsay",
  e_startdate: "1913-08-20",
  e_type: "Surrealism",
  e_paintings: 30,
  e_country: "France",
  e_city: "Paris",
  e_latitude: 48.8606,
  e_longitude: 2.3376,
  a_id: 2,
  a_firstname: "Paul",
  a_lastname: "Cézanne",
  a_gender: "M",
  a_nationality: "French"
}, {
  e_id: 92,
  e_title: "Abstract Expressionist Collection",
  e_venue: "National Gallery",
  e_startdate: "1914-11-15",
  e_type: "Abstract Expressionism",
  e_paintings: 25,
  e_country: "Norway",
  e_city: "Oslo",
  e_latitude: 59.9139,
  e_longitude: 10.7522,
  a_id: 3,
  a_firstname: "Edvard",
  a_lastname: "Munch",
  a_gender: "M",
  a_nationality: "Norwegian"
}, {
  e_id: 104,
  e_title: "Pop Art Collection",
  e_venue: "Albertina",
  e_startdate: "1915-12-20",
  e_type: "Pop Art",
  e_paintings: 60,
  e_country: "Austria",
  e_city: "Vienna",
  e_latitude: 48.2082,
  e_longitude: 16.3669,
  a_id: 129,
  a_firstname: "Vincent",
  a_lastname: "van Gogh",
  a_gender: "M",
  a_nationality: "Dutch"
}, {
  e_id: 119,
  e_title: "Impressionist Landscapes",
  e_venue: "National Gallery",
  e_startdate: "1916-03-10",
  e_type: "Impressionism",
  e_paintings: 38,
  e_country: "Norway",
  e_city: "Oslo",
  e_latitude: 59.9139,
  e_longitude: 10.7522,
  a_id: 4,
  a_firstname: "Claude",
  a_lastname: "Monet",
  a_gender: "M",
  a_nationality: "French"
}, {
  e_id: 127,
  e_title: "Cubist Masters",
  e_venue: "Musée d'Orsay",
  e_startdate: "1917-05-15",
  e_type: "Cubism",
  e_paintings: 45,
  e_country: "France",
  e_city: "Paris",
  e_latitude: 48.8606,
  e_longitude: 2.3376,
  a_id: 5,
  a_firstname: "Pablo",
  a_lastname: "Picasso",
  a_gender: "M",
  a_nationality: "Spanish"
}, {
  e_id: 137,
  e_title: "Surrealist Dreams",
  e_venue: "Albertina",
  e_startdate: "1918-08-20",
  e_type: "Surrealism",
  e_paintings: 33,
  e_country: "Austria",
  e_city: "Vienna",
  e_latitude: 48.2082,
  e_longitude: 16.3669,
  a_id: 6,
  a_firstname: "Salvador",
  a_lastname: "Dalí",
  a_gender: "M",
  a_nationality: "Spanish"
}, {
  e_id: 144,
  e_title: "Fauvist Expressions",
  e_venue: "National Gallery",
  e_startdate: "1919-10-05",
  e_type: "Fauvism",
  e_paintings: 29,
  e_country: "Norway",
  e_city: "Oslo",
  e_latitude: 59.9139,
  e_longitude: 10.7522,
  a_id: 7,
  a_firstname: "Henri",
  a_lastname: "Matisse",
  a_gender: "M",
  a_nationality: "French"
}, {
  e_id: 154,
  e_title: "Abstract Masters",
  e_venue: "Musée d'Orsay",
  e_startdate: "1920-11-15",
  e_type: "Abstract",
  e_paintings: 40,
  e_country: "France",
  e_city: "Paris",
  e_latitude: 48.8606,
  e_longitude: 2.3376,
  a_id: 8,
  a_firstname: "Jackson",
  a_lastname: "Pollock",
  a_gender: "M",
  a_nationality: "American"
}, {
  e_id: 16,
  e_title: "Expressionist Visions",
  e_venue: "Albertina",
  e_startdate: "1921-01-10",
  e_type: "Expressionism",
  e_paintings: 42,
  e_country: "Austria",
  e_city: "Vienna",
  e_latitude: 48.2082,
  e_longitude: 16.3669,
  a_id: 9,
  a_firstname: "Wassily",
  a_lastname: "Kandinsky",
  a_gender: "M",
  a_nationality: "Russian"
}, {
  e_id: 17,
  e_title: "Surrealist Fantasies",
  e_venue: "Musée d'Orsay",
  e_startdate: "1922-03-15",
  e_type: "Surrealism",
  e_paintings: 37,
  e_country: "France",
  e_city: "Paris",
  e_latitude: 48.8606,
  e_longitude: 2.3376,
  a_id: 6,
  a_firstname: "Salvador",
  a_lastname: "Dalí",
  a_gender: "M",
  a_nationality: "Spanish"
}, {
  e_id: 18,
  e_title: "Modernist Innovations",
  e_venue: "National Gallery",
  e_startdate: "1923-05-20",
  e_type: "Modernism",
  e_paintings: 50,
  e_country: "Norway",
  e_city: "Oslo",
  e_latitude: 59.9139,
  e_longitude: 10.7522,
  a_id: 10,
  a_firstname: "Piet",
  a_lastname: "Mondrian",
  a_gender: "M",
  a_nationality: "Dutch"
}, {
  e_id: 19,
  e_title: "Cubist Revolution",
  e_venue: "Albertina",
  e_startdate: "1924-07-25",
  e_type: "Cubism",
  e_paintings: 45,
  e_country: "Austria",
  e_city: "Vienna",
  e_latitude: 48.2082,
  e_longitude: 16.3669,
  a_id: 5,
  a_firstname: "Pablo",
  a_lastname: "Picasso",
  a_gender: "M",
  a_nationality: "Spanish"
}, {
  e_id: 20,
  e_title: "Abstract Innovations",
  e_venue: "Musée d'Orsay",
  e_startdate: "1925-09-30",
  e_type: "Abstract",
  e_paintings: 38,
  e_country: "France",
  e_city: "Paris",
  e_latitude: 48.8606,
  e_longitude: 2.3376,
  a_id: 8,
  a_firstname: "Jackson",
  a_lastname: "Pollock",
  a_gender: "M",
  a_nationality: "American"
}, {
  e_id: 21,
  e_title: "Impressionist Wonders",
  e_venue: "National Gallery",
  e_startdate: "1926-11-15",
  e_type: "Impressionism",
  e_paintings: 40,
  e_country: "Norway",
  e_city: "Oslo",
  e_latitude: 59.9139,
  e_longitude: 10.7522,
  a_id: 4,
  a_firstname: "Claude",
  a_lastname: "Monet",
  a_gender: "M",
  a_nationality: "French"
}, {
  e_id: 22,
  e_title: "Fauvist Colors",
  e_venue: "Albertina",
  e_startdate: "1927-01-10",
  e_type: "Fauvism",
  e_paintings: 35,
  e_country: "Austria",
  e_city: "Vienna",
  e_latitude: 48.2082,
  e_longitude: 16.3669,
  a_id: 7,
  a_firstname: "Henri",
  a_lastname: "Matisse",
  a_gender: "M",
  a_nationality: "French"
}, {
  e_id: 23,
  e_title: "Surrealist Dreams",
  e_venue: "Musée d'Orsay",
  e_startdate: "1928-03-20",
  e_type: "Surrealism",
  e_paintings: 33,
  e_country: "France",
  e_city: "Paris",
  e_latitude: 48.8606,
  e_longitude: 2.3376,
  a_id: 6,
  a_firstname: "Salvador",
  a_lastname: "Dalí",
  a_gender: "M",
  a_nationality: "Spanish"
}, {
  e_id: 24,
  e_title: "Expressionist Visions",
  e_venue: "National Gallery",
  e_startdate: "1929-05-25",
  e_type: "Expressionism",
  e_paintings: 42,
  e_country: "Norway",
  e_city: "Oslo",
  e_latitude: 59.9139,
  e_longitude: 10.7522,
  a_id: 9,
  a_firstname: "Wassily",
  a_lastname: "Kandinsky",
  a_gender: "M",
  a_nationality: "Russian"
}, {
  e_id: 25,
  e_title: "Modernist Innovations",
  e_venue: "Albertina",
  e_startdate: "1930-07-30",
  e_type: "Modernism",
  e_paintings: 50,
  e_country: "Austria",
  e_city: "Vienna",
  e_latitude: 48.2082,
  e_longitude: 16.3669,
  a_id: 10,
  a_firstname: "Piet",
  a_lastname: "Mondrian",
  a_gender: "M",
  a_nationality: "Dutch"
}, {
  e_id: 26,
  e_title: "Cubist Revolution",
  e_venue: "Musée d'Orsay",
  e_startdate: "1931-09-15",
  e_type: "Cubism",
  e_paintings: 45,
  e_country: "France",
  e_city: "Paris",
  e_latitude: 48.8606,
  e_longitude: 2.3376,
  a_id: 5,
  a_firstname: "Pablo",
  a_lastname: "Picasso",
  a_gender: "M",
  a_nationality: "Spanish"
}, {
  e_id: 27,
  e_title: "Abstract Innovations",
  e_venue: "National Gallery",
  e_startdate: "1932-11-20",
  e_type: "Abstract",
  e_paintings: 38,
  e_country: "Norway",
  e_city: "Oslo",
  e_latitude: 59.9139,
  e_longitude: 10.7522,
  a_id: 8,
  a_firstname: "Jackson",
  a_lastname: "Pollock",
  a_gender: "M",
  a_nationality: "American"
}, {
  e_id: 28,
  e_title: "Impressionist Wonders",
  e_venue: "Albertina",
  e_startdate: "1933-01-10",
  e_type: "Impressionism",
  e_paintings: 40,
  e_country: "Austria",
  e_city: "Vienna",
  e_latitude: 48.2082,
  e_longitude: 16.3669,
  a_id: 4,
  a_firstname: "Claude",
  a_lastname: "Monet",
  a_gender: "M",
  a_nationality: "French"
}, {
  e_id: 29,
  e_title: "Fauvist Colors",
  e_venue: "Musée d'Orsay",
  e_startdate: "1934-03-15",
  e_type: "Fauvism",
  e_paintings: 35,
  e_country: "France",
  e_city: "Paris",
  e_latitude: 48.8606,
  e_longitude: 2.3376,
  a_id: 7,
  a_firstname: "Henri",
  a_lastname: "Matisse",
  a_gender: "M",
  a_nationality: "French"
}, {
  e_id: 30,
  e_title: "Surrealist Fantasies",
  e_venue: "National Gallery",
  e_startdate: "1935-05-20",
  e_type: "Surrealism",
  e_paintings: 37,
  e_country: "Norway",
  e_city: "Oslo",
  e_latitude: 59.9139,
  e_longitude: 10.7522,
  a_id: 6,
  a_firstname: "Salvador",
  a_lastname: "Dalí",
  a_gender: "M",
  a_nationality: "Spanish"
}, {
  e_id: 31,
  e_title: "Expressionist Visions",
  e_venue: "Albertina",
  e_startdate: "1936-07-25",
  e_type: "Expressionism",
  e_paintings: 42,
  e_country: "Austria",
  e_city: "Vienna",
  e_latitude: 48.2082,
  e_longitude: 16.3669,
  a_id: 9,
  a_firstname: "Wassily",
  a_lastname: "Kandinsky",
  a_gender: "M",
  a_nationality: "Russian"
}, {
  e_id: 32,
  e_title: "Modernist Innovations",
  e_venue: "Musée d'Orsay",
  e_startdate: "1937-09-30",
  e_type: "Modernism",
  e_paintings: 50,
  e_country: "France",
  e_city: "Paris",
  e_latitude: 48.8606,
  e_longitude: 2.3376,
  a_id: 10,
  a_firstname: "Piet",
  a_lastname: "Mondrian",
  a_gender: "M",
  a_nationality: "Dutch"
}, {
  e_id: 33,
  e_title: "Cubist Revolution",
  e_venue: "National Gallery",
  e_startdate: "1938-11-15",
  e_type: "Cubism",
  e_paintings: 45,
  e_country: "Norway",
  e_city: "Oslo",
  e_latitude: 59.9139,
  e_longitude: 10.7522,
  a_id: 5,
  a_firstname: "Pablo",
  a_lastname: "Picasso",
  a_gender: "M",
  a_nationality: "Spanish"
}, {
  e_id: 34,
  e_title: "Abstract Innovations",
  e_venue: "Albertina",
  e_startdate: "1939-01-10",
  e_type: "Abstract",
  e_paintings: 38,
  e_country: "Austria",
  e_city: "Vienna",
  e_latitude: 48.2082,
  e_longitude: 16.3669,
  a_id: 8,
  a_firstname: "Jackson",
  a_lastname: "Pollock",
  a_gender: "M",
  a_nationality: "American"
}, {
  e_id: 35,
  e_title: "Impressionist Wonders",
  e_venue: "Musée d'Orsay",
  e_startdate: "1940-03-15",
  e_type: "Impressionism",
  e_paintings: 40,
  e_country: "France",
  e_city: "Paris",
  e_latitude: 48.8606,
  e_longitude: 2.3376,
  a_id: 4,
  a_firstname: "Claude",
  a_lastname: "Monet",
  a_gender: "M",
  a_nationality: "French"
}, {
  e_id: 36,
  e_title: "Fauvist Colors",
  e_venue: "National Gallery",
  e_startdate: "1941-05-20",
  e_type: "Fauvism",
  e_paintings: 35,
  e_country: "Norway",
  e_city: "Oslo",
  e_latitude: 59.9139,
  e_longitude: 10.7522,
  a_id: 7,
  a_firstname: "Henri",
  a_lastname: "Matisse",
  a_gender: "M",
  a_nationality: "French"
}, {
  e_id: 37,
  e_title: "Surrealist Fantasies",
  e_venue: "Albertina",
  e_startdate: "1942-07-25",
  e_type: "Surrealism",
  e_paintings: 37,
  e_country: "Austria",
  e_city: "Vienna",
  e_latitude: 48.2082,
  e_longitude: 16.3669,
  a_id: 6,
  a_firstname: "Paul",
  a_lastname: "Cézanne",
  a_gender: "M",
  a_nationality: "French"
}, {
  e_id: 38,
  e_title: "Expressionist Visions",
  e_venue: "Musée d'Orsay",
  e_startdate: "1943-09-30",
  e_type: "Expressionism",
  e_paintings: 42,
  e_country: "France",
  e_city: "Paris",
  e_latitude: 48.8606,
  e_longitude: 2.3376,
  a_id: 9,
  a_firstname: "Wassily",
  a_lastname: "Kandinsky",
  a_gender: "M",
  a_nationality: "Russian"
}, {
  e_id: 39,
  e_title: "Van Gogh's Masterpieces",
  e_venue: "Albertina",
  e_startdate: "1944-11-15",
  e_type: "Post-Impressionism",
  e_paintings: 50,
  e_country: "Austria",
  e_city: "Vienna",
  e_latitude: 48.2082,
  e_longitude: 16.3669,
  a_id: 1,
  a_firstname: "Vincent",
  a_lastname: "van Gogh",
  a_gender: "M",
  a_nationality: "Dutch"
}, {
  e_id: 40,
  e_title: "Cézanne's Legacy",
  e_venue: "Musée d'Orsay",
  e_startdate: "1945-03-20",
  e_type: "Post-Impressionism",
  e_paintings: 45,
  e_country: "France",
  e_city: "Paris",
  e_latitude: 48.8606,
  e_longitude: 2.3376,
  a_id: 2,
  a_firstname: "Paul",
  a_lastname: "Cézanne",
  a_gender: "M",
  a_nationality: "French"
}, {
  e_id: 41,
  e_title: "Munch's Visions",
  e_venue: "National Gallery",
  e_startdate: "1946-05-25",
  e_type: "Expressionism",
  e_paintings: 40,
  e_country: "Norway",
  e_city: "Oslo",
  e_latitude: 59.9139,
  e_longitude: 10.7522,
  a_id: 3,
  a_firstname: "Edvard",
  a_lastname: "Munch",
  a_gender: "M",
  a_nationality: "Norwegian"
}, {
  e_id: 42,
  e_title: "Van Gogh's Colors",
  e_venue: "Albertina",
  e_startdate: "1947-07-30",
  e_type: "Post-Impressionism",
  e_paintings: 55,
  e_country: "Austria",
  e_city: "Vienna",
  e_latitude: 48.2082,
  e_longitude: 16.3669,
  a_id: 1,
  a_firstname: "Vincent",
  a_lastname: "van Gogh",
  a_gender: "M",
  a_nationality: "Dutch"
}, {
  e_id: 43,
  e_title: "Cézanne's Brushstrokes",
  e_venue: "Musée d'Orsay",
  e_startdate: "1948-09-15",
  e_type: "Post-Impressionism",
  e_paintings: 50,
  e_country: "France",
  e_city: "Paris",
  e_latitude: 48.8606,
  e_longitude: 2.3376,
  a_id: 2,
  a_firstname: "Paul",
  a_lastname: "Cézanne",
  a_gender: "M",
  a_nationality: "French"
}, {
  e_id: 44,
  e_title: "Munch's Emotions",
  e_venue: "National Gallery",
  e_startdate: "1949-11-20",
  e_type: "Expressionism",
  e_paintings: 38,
  e_country: "Norway",
  e_city: "Oslo",
  e_latitude: 59.9139,
  e_longitude: 10.7522,
  a_id: 3,
  a_firstname: "Edvard",
  a_lastname: "Munch",
  a_gender: "M",
  a_nationality: "Norwegian"
}, {
  e_id: 45,
  e_title: "Van Gogh's Landscapes",
  e_venue: "Albertina",
  e_startdate: "1950-01-10",
  e_type: "Post-Impressionism",
  e_paintings: 45,
  e_country: "Austria",
  e_city: "Vienna",
  e_latitude: 48.2082,
  e_longitude: 16.3669,
  a_id: 1,
  a_firstname: "Vincent",
  a_lastname: "van Gogh",
  a_gender: "M",
  a_nationality: "Dutch"
}, {
  e_id: 46,
  e_title: "Cézanne's Nature",
  e_venue: "Musée d'Orsay",
  e_startdate: "1951-03-15",
  e_type: "Post-Impressionism",
  e_paintings: 40,
  e_country: "France",
  e_city: "Paris",
  e_latitude: 48.8606,
  e_longitude: 2.3376,
  a_id: 2,
  a_firstname: "Paul",
  a_lastname: "Cézanne",
  a_gender: "M",
  a_nationality: "French"
}, {
  e_id: 47,
  e_title: "Munch's Nightmares",
  e_venue: "National Gallery",
  e_startdate: "1952-05-20",
  e_type: "Expressionism",
  e_paintings: 42,
  e_country: "Norway",
  e_city: "Oslo",
  e_latitude: 59.9139,
  e_longitude: 10.7522,
  a_id: 3,
  a_firstname: "Edvard",
  a_lastname: "Munch",
  a_gender: "M",
  a_nationality: "Norwegian"
}, {
  e_id: 48,
  e_title: "Van Gogh's Sunflowers",
  e_venue: "Albertina",
  e_startdate: "1953-07-25",
  e_type: "Post-Impressionism",
  e_paintings: 50,
  e_country: "Austria",
  e_city: "Vienna",
  e_latitude: 48.2082,
  e_longitude: 16.3669,
  a_id: 1,
  a_firstname: "Vincent",
  a_lastname: "van Gogh",
  a_gender: "M",
  a_nationality: "Dutch"
}, {
  e_id: 49,
  e_title: "Cézanne's Still Life",
  e_venue: "Musée d'Orsay",
  e_startdate: "1954-09-30",
  e_type: "Post-Impressionism",
  e_paintings: 45,
  e_country: "France",
  e_city: "Paris",
  e_latitude: 48.8606,
  e_longitude: 2.3376,
  a_id: 2,
  a_firstname: "Paul",
  a_lastname: "Cézanne",
  a_gender: "M",
  a_nationality: "French"
}, {
  e_id: 50,
  e_title: "Munch's Scream",
  e_venue: "National Gallery",
  e_startdate: "1955-11-15",
  e_type: "Expressionism",
  e_paintings: 40,
  e_country: "Norway",
  e_city: "Oslo",
  e_latitude: 59.9139,
  e_longitude: 10.7522,
  a_id: 3,
  a_firstname: "Edvard",
  a_lastname: "Munch",
  a_gender: "M",
  a_nationality: "Norwegian"
}, {
  e_id: 51,
  e_title: "Van Gogh's Starry Night",
  e_venue: "Albertina",
  e_startdate: "1956-01-10",
  e_type: "Post-Impressionism",
  e_paintings: 55,
  e_country: "Austria",
  e_city: "Vienna",
  e_latitude: 48.2082,
  e_longitude: 16.3669,
  a_id: 1,
  a_firstname: "Vincent",
  a_lastname: "van Gogh",
  a_gender: "M",
  a_nationality: "Dutch"
}, {
  e_id: 52,
  e_title: "Cézanne's Mountains",
  e_venue: "Musée d'Orsay",
  e_startdate: "1957-03-15",
  e_type: "Post-Impressionism",
  e_paintings: 50,
  e_country: "France",
  e_city: "Paris",
  e_latitude: 48.8606,
  e_longitude: 2.3376,
  a_id: 2,
  a_firstname: "Paul",
  a_lastname: "Cézanne",
  a_gender: "M",
  a_nationality: "French"
}, {
  e_id: 53,
  e_title: "Munch's Melancholy",
  e_venue: "National Gallery",
  e_startdate: "1958-05-20",
  e_type: "Expressionism",
  e_paintings: 42,
  e_country: "Norway",
  e_city: "Oslo",
  e_latitude: 59.9139,
  e_longitude: 10.7522,
  a_id: 3,
  a_firstname: "Edvard",
  a_lastname: "Munch",
  a_gender: "M",
  a_nationality: "Norwegian"
}, {
  e_id: 54,
  e_title: "Van Gogh's Irises",
  e_venue: "Albertina",
  e_startdate: "1959-07-25",
  e_type: "Post-Impressionism",
  e_paintings: 50,
  e_country: "Austria",
  e_city: "Vienna",
  e_latitude: 48.2082,
  e_longitude: 16.3669,
  a_id: 1,
  a_firstname: "Vincent",
  a_lastname: "van Gogh",
  a_gender: "M",
  a_nationality: "Dutch"
}, {
  e_id: 55,
  e_title: "Cézanne's Apples",
  e_venue: "Musée d'Orsay",
  e_startdate: "1960-09-30",
  e_type: "Post-Impressionism",
  e_paintings: 45,
  e_country: "France",
  e_city: "Paris",
  e_latitude: 48.8606,
  e_longitude: 2.3376,
  a_id: 2,
  a_firstname: "Paul",
  a_lastname: "Cézanne",
  a_gender: "M",
  a_nationality: "French"
}, {
  e_id: 56,
  e_title: "Munch's Despair",
  e_venue: "National Gallery",
  e_startdate: "1961-11-15",
  e_type: "Expressionism",
  e_paintings: 40,
  e_country: "Norway",
  e_city: "Oslo",
  e_latitude: 59.9139,
  e_longitude: 10.7522,
  a_id: 3,
  a_firstname: "Edvard",
  a_lastname: "Munch",
  a_gender: "M",
  a_nationality: "Norwegian"
}, {
  e_id: 57,
  e_title: "Van Gogh's Wheatfield",
  e_venue: "Albertina",
  e_startdate: "1962-01-10",
  e_type: "Post-Impressionism",
  e_paintings: 55,
  e_country: "Austria",
  e_city: "Vienna",
  e_latitude: 48.2082,
  e_longitude: 16.3669,
  a_id: 1,
  a_firstname: "Vincent",
  a_lastname: "van Gogh",
  a_gender: "M",
  a_nationality: "Dutch"
}, {
  e_id: 58,
  e_title: "Cézanne's Forest",
  e_venue: "Musée d'Orsay",
  e_startdate: "1963-03-15",
  e_type: "Post-Impressionism",
  e_paintings: 50,
  e_country: "France",
  e_city: "Paris",
  e_latitude: 48.8606,
  e_longitude: 2.3376,
  a_id: 2,
  a_firstname: "Paul",
  a_lastname: "Cézanne",
  a_gender: "M",
  a_nationality: "French"
}, {
  e_id: 59,
  e_title: "Munch's Anxiety",
  e_venue: "National Gallery",
  e_startdate: "1964-05-20",
  e_type: "Expressionism",
  e_paintings: 42,
  e_country: "Norway",
  e_city: "Oslo",
  e_latitude: 59.9139,
  e_longitude: 10.7522,
  a_id: 3,
  a_firstname: "Edvard",
  a_lastname: "Munch",
  a_gender: "M",
  a_nationality: "Norwegian"
}, {
  e_id: 60,
  e_title: "Van Gogh's Night Café",
  e_venue: "Albertina",
  e_startdate: "1965-07-25",
  e_type: "Post-Impressionism",
  e_paintings: 50,
  e_country: "Austria",
  e_city: "Vienna",
  e_latitude: 48.2082,
  e_longitude: 16.3669,
  a_id: 1,
  a_firstname: "Vincent",
  a_lastname: "van Gogh",
  a_gender: "M",
  a_nationality: "Dutch"
}, {
  e_id: 61,
  e_title: "Cézanne's Bathers",
  e_venue: "Musée d'Orsay",
  e_startdate: "1966-09-30",
  e_type: "Post-Impressionism",
  e_paintings: 45,
  e_country: "France",
  e_city: "Paris",
  e_latitude: 48.8606,
  e_longitude: 2.3376,
  a_id: 2,
  a_firstname: "Paul",
  a_lastname: "Cézanne",
  a_gender: "M",
  a_nationality: "French"
}, {
  e_id: 62,
  e_title: "Munch's Love",
  e_venue: "National Gallery",
  e_startdate: "1967-11-15",
  e_type: "Expressionism",
  e_paintings: 40,
  e_country: "Norway",
  e_city: "Oslo",
  e_latitude: 59.9139,
  e_longitude: 10.7522,
  a_id: 3,
  a_firstname: "Edvard",
  a_lastname: "Munch",
  a_gender: "M",
  a_nationality: "Norwegian"
}, {
  e_id: 63,
  e_title: "Van Gogh's Bedroom",
  e_venue: "Albertina",
  e_startdate: "1968-01-10",
  e_type: "Post-Impressionism",
  e_paintings: 55,
  e_country: "Austria",
  e_city: "Vienna",
  e_latitude: 48.2082,
  e_longitude: 16.3669,
  a_id: 1,
  a_firstname: "Vincent",
  a_lastname: "van Gogh",
  a_gender: "M",
  a_nationality: "Dutch"
}, {
  e_id: 64,
  e_title: "Cézanne's Still Life",
  e_venue: "Musée d'Orsay",
  e_startdate: "1969-03-15",
  e_type: "Post-Impressionism",
  e_paintings: 50,
  e_country: "France",
  e_city: "Paris",
  e_latitude: 48.8606,
  e_longitude: 2.3376,
  a_id: 2,
  a_firstname: "Paul",
  a_lastname: "Cézanne",
  a_gender: "M",
  a_nationality: "French"
}, {
  e_id: 65,
  e_title: "Munch's Jealousy",
  e_venue: "National Gallery",
  e_startdate: "1970-05-20",
  e_type: "Expressionism",
  e_paintings: 42,
  e_country: "Norway",
  e_city: "Oslo",
  e_latitude: 59.9139,
  e_longitude: 10.7522,
  a_id: 3,
  a_firstname: "Edvard",
  a_lastname: "Munch",
  a_gender: "M",
  a_nationality: "Norwegian"
}, {
  e_id: 66,
  e_title: "Van Gogh's Blossoms",
  e_venue: "Albertina",
  e_startdate: "1971-07-25",
  e_type: "Post-Impressionism",
  e_paintings: 50,
  e_country: "Austria",
  e_city: "Vienna",
  e_latitude: 48.2082,
  e_longitude: 16.3669,
  a_id: 1,
  a_firstname: "Vincent",
  a_lastname: "van Gogh",
  a_gender: "M",
  a_nationality: "Dutch"
}, {
  e_id: 67,
  e_title: "Cézanne's Portraits",
  e_venue: "Musée d'Orsay",
  e_startdate: "1972-09-30",
  e_type: "Post-Impressionism",
  e_paintings: 45,
  e_country: "France",
  e_city: "Paris",
  e_latitude: 48.8606,
  e_longitude: 2.3376,
  a_id: 2,
  a_firstname: "Paul",
  a_lastname: "Cézanne",
  a_gender: "M",
  a_nationality: "French"
}, {
  e_id: 68,
  e_title: "Munch's Madonna",
  e_venue: "National Gallery",
  e_startdate: "1973-11-15",
  e_type: "Expressionism",
  e_paintings: 40,
  e_country: "Norway",
  e_city: "Oslo",
  e_latitude: 59.9139,
  e_longitude: 10.7522,
  a_id: 3,
  a_firstname: "Edvard",
  a_lastname: "Munch",
  a_gender: "M",
  a_nationality: "Norwegian"
}, {
  e_id: 69,
  e_title: "Van Gogh's Cypresses",
  e_venue: "Albertina",
  e_startdate: "1974-01-10",
  e_type: "Post-Impressionism",
  e_paintings: 55,
  e_country: "Austria",
  e_city: "Vienna",
  e_latitude: 48.2082,
  e_longitude: 16.3669,
  a_id: 1,
  a_firstname: "Vincent",
  a_lastname: "van Gogh",
  a_gender: "M",
  a_nationality: "Dutch"
}, {
  e_id: 70,
  e_title: "Cézanne's Landscapes",
  e_venue: "Musée d'Orsay",
  e_startdate: "1975-03-15",
  e_type: "Post-Impressionism",
  e_paintings: 50,
  e_country: "France",
  e_city: "Paris",
  e_latitude: 48.8606,
  e_longitude: 2.3376,
  a_id: 2,
  a_firstname: "Paul",
  a_lastname: "Cézanne",
  a_gender: "M",
  a_nationality: "French"
}, {
  e_id: 71,
  e_title: "Munch's Ashes",
  e_venue: "National Gallery",
  e_startdate: "1976-05-20",
  e_type: "Expressionism",
  e_paintings: 42,
  e_country: "Norway",
  e_city: "Oslo",
  e_latitude: 59.9139,
  e_longitude: 10.7522,
  a_id: 3,
  a_firstname: "Edvard",
  a_lastname: "Munch",
  a_gender: "M",
  a_nationality: "Norwegian"
}, {
  e_id: 72,
  e_title: "Van Gogh's Olive Trees",
  e_venue: "Albertina",
  e_startdate: "1977-07-25",
  e_type: "Post-Impressionism",
  e_paintings: 50,
  e_country: "Austria",
  e_city: "Vienna",
  e_latitude: 48.2082,
  e_longitude: 16.3669,
  a_id: 1,
  a_firstname: "Vincent",
  a_lastname: "van Gogh",
  a_gender: "M",
  a_nationality: "Dutch"
}, {
  e_id: 73,
  e_title: "Cézanne's Card Players",
  e_venue: "Musée d'Orsay",
  e_startdate: "1978-09-30",
  e_type: "Post-Impressionism",
  e_paintings: 45,
  e_country: "France",
  e_city: "Paris",
  e_latitude: 48.8606,
  e_longitude: 2.3376,
  a_id: 2,
  a_firstname: "Paul",
  a_lastname: "Cézanne",
  a_gender: "M",
  a_nationality: "French"
}, {
  e_id: 74,
  e_title: "Munch's Vampire",
  e_venue: "National Gallery",
  e_startdate: "1979-11-15",
  e_type: "Expressionism",
  e_paintings: 40,
  e_country: "Norway",
  e_city: "Oslo",
  e_latitude: 59.9139,
  e_longitude: 10.7522,
  a_id: 3,
  a_firstname: "Edvard",
  a_lastname: "Munch",
  a_gender: "M",
  a_nationality: "Norwegian"
}, {
  e_id: 75,
  e_title: "Modernist Movements",
  e_venue: "Stedelijk Museum",
  e_startdate: "1980-01-10",
  e_type: "Modernism",
  e_paintings: 45,
  e_country: "Netherlands",
  e_city: "Amsterdam",
  e_latitude: 52.3676,
  e_longitude: 4.9041,
  a_id: 11,
  a_firstname: "Piet",
  a_lastname: "Mondrian",
  a_gender: "M",
  a_nationality: "Dutch"
}, {
  e_id: 76,
  e_title: "Abstract Art",
  e_venue: "Stedelijk Museum",
  e_startdate: "1981-03-15",
  e_type: "Abstract",
  e_paintings: 50,
  e_country: "Netherlands",
  e_city: "Amsterdam",
  e_latitude: 52.3676,
  e_longitude: 4.9041,
  a_id: 12,
  a_firstname: "Kazimir",
  a_lastname: "Malevich",
  a_gender: "M",
  a_nationality: "Russian"
}, {
  e_id: 77,
  e_title: "Expressionist Art",
  e_venue: "Stedelijk Museum",
  e_startdate: "1982-05-20",
  e_type: "Expressionism",
  e_paintings: 40,
  e_country: "Netherlands",
  e_city: "Amsterdam",
  e_latitude: 52.3676,
  e_longitude: 4.9041,
  a_id: 13,
  a_firstname: "Wassily",
  a_lastname: "Kandinsky",
  a_gender: "M",
  a_nationality: "Russian"
}, {
  e_id: 78,
  e_title: "Modern Art",
  e_venue: "Moderne Kunst Kring",
  e_startdate: "1983-07-25",
  e_type: "Modern Art",
  e_paintings: 55,
  e_country: "Netherlands",
  e_city: "Amsterdam",
  e_latitude: 52.3676,
  e_longitude: 4.9041,
  a_id: 14,
  a_firstname: "Theo",
  a_lastname: "van Doesburg",
  a_gender: "M",
  a_nationality: "Dutch"
}, {
  e_id: 79,
  e_title: "Cubist Art",
  e_venue: "Moderne Kunst Kring",
  e_startdate: "1984-09-30",
  e_type: "Cubism",
  e_paintings: 45,
  e_country: "Netherlands",
  e_city: "Amsterdam",
  e_latitude: 52.3676,
  e_longitude: 4.9041,
  a_id: 15,
  a_firstname: "Pablo",
  a_lastname: "Picasso",
  a_gender: "M",
  a_nationality: "Spanish"
}, {
  e_id: 80,
  e_title: "Surrealist Art",
  e_venue: "Moderne Kunst Kring",
  e_startdate: "1985-11-15",
  e_type: "Surrealism",
  e_paintings: 50,
  e_country: "Netherlands",
  e_city: "Amsterdam",
  e_latitude: 52.3676,
  e_longitude: 4.9041,
  a_id: 16,
  a_firstname: "Salvador",
  a_lastname: "Dalí",
  a_gender: "M",
  a_nationality: "Spanish"
}, {
  e_id: 81,
  e_title: "Expressionist Art",
  e_venue: "Ausstellungshaus am Kurfürstendamm",
  e_startdate: "1986-01-10",
  e_type: "Expressionism",
  e_paintings: 42,
  e_country: "Germany",
  e_city: "Berlin",
  e_latitude: 52.52,
  e_longitude: 13.405,
  a_id: 17,
  a_firstname: "Ernst",
  a_lastname: "Ludwig Kirchner",
  a_gender: "M",
  a_nationality: "German"
}, {
  e_id: 82,
  e_title: "Modernist Art",
  e_venue: "Ausstellungshaus am Kurfürstendamm",
  e_startdate: "1987-03-15",
  e_type: "Modernism",
  e_paintings: 50,
  e_country: "Germany",
  e_city: "Berlin",
  e_latitude: 52.52,
  e_longitude: 13.405,
  a_id: 18,
  a_firstname: "Paul",
  a_lastname: "Klee",
  a_gender: "M",
  a_nationality: "Swiss"
}, {
  e_id: 83,
  e_title: "Abstract Art",
  e_venue: "Ausstellungshaus am Kurfürstendamm",
  e_startdate: "1988-05-20",
  e_type: "Abstract",
  e_paintings: 45,
  e_country: "Germany",
  e_city: "Berlin",
  e_latitude: 52.52,
  e_longitude: 13.405,
  a_id: 19,
  a_firstname: "Wassily",
  a_lastname: "Kandinsky",
  a_gender: "M",
  a_nationality: "Russian"
}, {
  e_id: 84,
  e_title: "Modern Art",
  e_venue: "Wallraf-Richartz-Museum",
  e_startdate: "1989-07-25",
  e_type: "Modern Art",
  e_paintings: 55,
  e_country: "Germany",
  e_city: "Cologne",
  e_latitude: 50.9375,
  e_longitude: 6.9603,
  a_id: 20,
  a_firstname: "Max",
  a_lastname: "Ernst",
  a_gender: "M",
  a_nationality: "German"
}, {
  e_id: 85,
  e_title: "Cubist Art",
  e_venue: "Wallraf-Richartz-Museum",
  e_startdate: "1990-09-30",
  e_type: "Cubism",
  e_paintings: 45,
  e_country: "Germany",
  e_city: "Cologne",
  e_latitude: 50.9375,
  e_longitude: 6.9603,
  a_id: 21,
  a_firstname: "Georges",
  a_lastname: "Braque",
  a_gender: "M",
  a_nationality: "French"
}, {
  e_id: 86,
  e_title: "Surrealist Art",
  e_venue: "Wallraf-Richartz-Museum",
  e_startdate: "1991-11-15",
  e_type: "Surrealism",
  e_paintings: 50,
  e_country: "Germany",
  e_city: "Cologne",
  e_latitude: 50.9375,
  e_longitude: 6.9603,
  a_id: 22,
  a_firstname: "Joan",
  a_lastname: "Miró",
  a_gender: "M",
  a_nationality: "Spanish"
}, {
  e_id: 87,
  e_title: "Modernist Art",
  e_venue: "Münchener Künstlergenossenschaft",
  e_startdate: "1992-01-10",
  e_type: "Modernism",
  e_paintings: 45,
  e_country: "Germany",
  e_city: "Munich",
  e_latitude: 48.1351,
  e_longitude: 11.582,
  a_id: 23,
  a_firstname: "Franz",
  a_lastname: "Marc",
  a_gender: "M",
  a_nationality: "German"
}, {
  e_id: 88,
  e_title: "Expressionist Art",
  e_venue: "Münchener Künstlergenossenschaft",
  e_startdate: "1993-03-15",
  e_type: "Expressionism",
  e_paintings: 50,
  e_country: "Germany",
  e_city: "Munich",
  e_latitude: 48.1351,
  e_longitude: 11.582,
  a_id: 24,
  a_firstname: "August",
  a_lastname: "Macke",
  a_gender: "M",
  a_nationality: "German"
}, {
  e_id: 89,
  e_title: "Abstract Art",
  e_venue: "Münchener Künstlergenossenschaft",
  e_startdate: "1994-05-20",
  e_type: "Abstract",
  e_paintings: 45,
  e_country: "Germany",
  e_city: "Munich",
  e_latitude: 48.1351,
  e_longitude: 11.582,
  a_id: 25,
  a_firstname: "Paul",
  a_lastname: "Klee",
  a_gender: "M",
  a_nationality: "Swiss"
}, {
  e_id: 90,
  e_title: "Modern Art",
  e_venue: "Der Sturm",
  e_startdate: "1995-07-25",
  e_type: "Modern Art",
  e_paintings: 55,
  e_country: "Germany",
  e_city: "Berlin",
  e_latitude: 52.52,
  e_longitude: 13.405,
  a_id: 26,
  a_firstname: "Kurt",
  a_lastname: "Schwitters",
  a_gender: "M",
  a_nationality: "German"
}, {
  e_id: 91,
  e_title: "Cubist Art",
  e_venue: "Der Sturm",
  e_startdate: "1996-09-30",
  e_type: "Cubism",
  e_paintings: 45,
  e_country: "Germany",
  e_city: "Berlin",
  e_latitude: 52.52,
  e_longitude: 13.405,
  a_id: 27,
  a_firstname: "Juan",
  a_lastname: "Gris",
  a_gender: "M",
  a_nationality: "Spanish"
}, {
  e_id: 92,
  e_title: "Surrealist Art",
  e_venue: "Der Sturm",
  e_startdate: "1997-11-15",
  e_type: "Surrealism",
  e_paintings: 50,
  e_country: "Germany",
  e_city: "Berlin",
  e_latitude: 52.52,
  e_longitude: 13.405,
  a_id: 28,
  a_firstname: "Max",
  a_lastname: "Ernst",
  a_gender: "M",
  a_nationality: "German"
}, {
  e_id: 93,
  e_title: "Modernist Art",
  e_venue: "Vladimir Izdebsky",
  e_startdate: "1998-01-10",
  e_type: "Modernism",
  e_paintings: 45,
  e_country: "Ukraine",
  e_city: "Odessa",
  e_latitude: 46.4825,
  e_longitude: 30.7233,
  a_id: 29,
  a_firstname: "Kazimir",
  a_lastname: "Malevich",
  a_gender: "M",
  a_nationality: "Russian"
}, {
  e_id: 94,
  e_title: "Expressionist Art",
  e_venue: "Vladimir Izdebsky",
  e_startdate: "1999-03-15",
  e_type: "Expressionism",
  e_paintings: 50,
  e_country: "Ukraine",
  e_city: "Odessa",
  e_latitude: 46.4825,
  e_longitude: 30.7233,
  a_id: 30,
  a_firstname: "Wassily",
  a_lastname: "Kandinsky",
  a_gender: "M",
  a_nationality: "Russian"
}, {
  e_id: 95,
  e_title: "Abstract Art",
  e_venue: "Vladimir Izdebsky",
  e_startdate: "2000-05-20",
  e_type: "Abstract",
  e_paintings: 45,
  e_country: "Ukraine",
  e_city: "Odessa",
  e_latitude: 46.4825,
  e_longitude: 30.7233,
  a_id: 31,
  a_firstname: "Kazimir",
  a_lastname: "Malevich",
  a_gender: "M",
  a_nationality: "Russian"
}, {
  e_id: 96,
  e_title: "Modern Art",
  e_venue: "Angers",
  e_startdate: "2001-07-25",
  e_type: "Modern Art",
  e_paintings: 55,
  e_country: "France",
  e_city: "Angers",
  e_latitude: 47.4784,
  e_longitude: -0.5632,
  a_id: 32,
  a_firstname: "Fernand",
  a_lastname: "Léger",
  a_gender: "M",
  a_nationality: "French"
}, {
  e_id: 97,
  e_title: "Cubist Art",
  e_venue: "Angers",
  e_startdate: "2002-09-30",
  e_type: "Cubism",
  e_paintings: 45,
  e_country: "France",
  e_city: "Angers",
  e_latitude: 47.4784,
  e_longitude: -0.5632,
  a_id: 33,
  a_firstname: "Georges",
  a_lastname: "Braque",
  a_gender: "M",
  a_nationality: "French"
}, {
  e_id: 98,
  e_title: "Surrealist Art",
  e_venue: "Angers",
  e_startdate: "2003-11-15",
  e_type: "Surrealism",
  e_paintings: 50,
  e_country: "France",
  e_city: "Angers",
  e_latitude: 47.4784,
  e_longitude: -0.5632,
  a_id: 34,
  a_firstname: "Joan",
  a_lastname: "Miró",
  a_gender: "M",
  a_nationality: "Spanish"
}, {
  e_id: 99,
  e_title: "Modernist Art",
  e_venue: "Centre d'Art",
  e_startdate: "2004-01-10",
  e_type: "Modernism",
  e_paintings: 45,
  e_country: "France",
  e_city: "Paris",
  e_latitude: 48.8566,
  e_longitude: 2.3522,
  a_id: 35,
  a_firstname: "Fernand",
  a_lastname: "Léger",
  a_gender: "M",
  a_nationality: "French"
}, {
  e_id: 100,
  e_title: "Expressionist Art",
  e_venue: "Centre d'Art",
  e_startdate: "2005-03-15",
  e_type: "Expressionism",
  e_paintings: 50,
  e_country: "France",
  e_city: "Paris",
  e_latitude: 48.8566,
  e_longitude: 2.3522,
  a_id: 36,
  a_firstname: "Wassily",
  a_lastname: "Kandinsky",
  a_gender: "M",
  a_nationality: "Russian"
}, {
  e_id: 101,
  e_title: "Abstract Art",
  e_venue: "Centre d'Art",
  e_startdate: "2006-05-20",
  e_type: "Abstract",
  e_paintings: 45,
  e_country: "France",
  e_city: "Paris",
  e_latitude: 48.8566,
  e_longitude: 2.3522,
  a_id: 37,
  a_firstname: "Kazimir",
  a_lastname: "Malevich",
  a_gender: "M",
  a_nationality: "Russian"
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
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","data/exhibition_data.js"], null)
//# sourceMappingURL=/exhibition_data.02875f8c.js.map