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
})({"../node_modules/parcel-bundler/src/builtins/bundle-url.js":[function(require,module,exports) {
var bundleURL = null;

function getBundleURLCached() {
  if (!bundleURL) {
    bundleURL = getBundleURL();
  }

  return bundleURL;
}

function getBundleURL() {
  // Attempt to find the URL of the current script and use that as the base URL
  try {
    throw new Error();
  } catch (err) {
    var matches = ('' + err.stack).match(/(https?|file|ftp|chrome-extension|moz-extension):\/\/[^)\n]+/g);

    if (matches) {
      return getBaseURL(matches[0]);
    }
  }

  return '/';
}

function getBaseURL(url) {
  return ('' + url).replace(/^((?:https?|file|ftp|chrome-extension|moz-extension):\/\/.+)\/[^/]+$/, '$1') + '/';
}

exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
},{}],"../node_modules/parcel-bundler/src/builtins/css-loader.js":[function(require,module,exports) {
var bundle = require('./bundle-url');

function updateLink(link) {
  var newLink = link.cloneNode();

  newLink.onload = function () {
    link.remove();
  };

  newLink.href = link.href.split('?')[0] + '?' + Date.now();
  link.parentNode.insertBefore(newLink, link.nextSibling);
}

var cssTimeout = null;

function reloadCSS() {
  if (cssTimeout) {
    return;
  }

  cssTimeout = setTimeout(function () {
    var links = document.querySelectorAll('link[rel="stylesheet"]');

    for (var i = 0; i < links.length; i++) {
      if (bundle.getBaseURL(links[i].href) === bundle.getBundleURL()) {
        updateLink(links[i]);
      }
    }

    cssTimeout = null;
  }, 50);
}

module.exports = reloadCSS;
},{"./bundle-url":"../node_modules/parcel-bundler/src/builtins/bundle-url.js"}],"index.less":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"../node_modules/parcel-bundler/src/builtins/css-loader.js"}],"algorithm/util.ts":[function(require,module,exports) {
"use strict";

exports.__esModule = true;

function step(arr, i, j) {
  if (i === void 0) {
    i = -1;
  }

  if (j === void 0) {
    j = -1;
  }

  var dom = document.querySelector(".process");
  var htmls = arr.map(function (ele, idx) {
    var clas = idx == i || idx == j ? "array-item active" : "array-item";
    return "<span class=\"" + clas + "\">" + ele + "</span>";
  });
  dom.innerHTML += "<div class=\"log\">" + htmls.join("") + "</div>";
  document.querySelector(".exchange").innerHTML = "交换次数" + document.querySelectorAll(".log").length;
}

exports.step = step;
},{}],"algorithm/bubbleSort.ts":[function(require,module,exports) {
"use strict";

exports.__esModule = true;

var util_1 = require("./util");

function bubbleSort(arr) {
  var _a;

  var cnt = 0;

  for (var i = arr.length - 1; i > 0; i--) {
    for (var j = 0; j < i; j++) {
      if (arr[j] > arr[j + 1]) {
        _a = [arr[j + 1], arr[j]], arr[j] = _a[0], arr[j + 1] = _a[1];
        util_1.step(arr, j, j + 1); //显示日志
      }

      cnt++;
    }

    cnt++;
  }

  return [arr, cnt];
}

exports.bubbleSort = bubbleSort;
},{"./util":"algorithm/util.ts"}],"algorithm/selectionSort.ts":[function(require,module,exports) {
"use strict";

exports.__esModule = true;

var util_1 = require("./util");

function selectionSort(arr) {
  var _a;

  var cnt = 0;

  for (var i = 0, len = arr.length; i < len; i++) {
    var index = i;

    for (var j = i + 1; j < len; j++) {
      if (arr[index] > arr[j]) {
        index = j;
      }

      cnt++;
    }

    _a = [arr[index], arr[i]], arr[i] = _a[0], arr[index] = _a[1];
    util_1.step(arr, i, index); //显示日志

    cnt++;
  }

  return [arr, cnt];
}

exports.selectionSort = selectionSort;
},{"./util":"algorithm/util.ts"}],"algorithm/insertSort.ts":[function(require,module,exports) {
"use strict";

exports.__esModule = true;

var util_1 = require("./util");

function insertSort(arr) {
  var cnt = 0;

  for (var i = 1; i < arr.length; i++) {
    if (arr[i] < arr[i - 1]) {
      var index = 0;

      for (var j = i - 1; j >= 0; j--) {
        cnt++;

        if (arr[j] < arr[i]) {
          index = j + 1;
          break;
        }
      }

      util_1.step(arr, index, i);
      var ele = arr.splice(i, 1);
      arr.splice(index, 0, ele[0]);
    }
  }

  return [arr, cnt];
}

exports.insertSort = insertSort;
},{"./util":"algorithm/util.ts"}],"algorithm/shellSort.ts":[function(require,module,exports) {
"use strict";

exports.__esModule = true;

var util_1 = require("./util");

function shellSort(arr) {
  var _a;

  var cnt = 0;
  var len = arr.length;

  for (var gap = Math.ceil(arr.length / 2); gap >= 1; gap = gap == 1 ? 0 : Math.ceil(gap / 2)) {
    for (var i = 0; i < gap; i++) {
      for (var j = i; j < len - gap; j += gap) {
        cnt++;
        var next = j + gap;

        if (arr[j] > arr[next]) {
          util_1.step(arr, j, next);
          _a = [arr[next], arr[j]], arr[j] = _a[0], arr[next] = _a[1];
        }
      }
    }
  }

  return [arr, cnt];
}

exports.shellSort = shellSort;
},{"./util":"algorithm/util.ts"}],"algorithm/mergeSort.ts":[function(require,module,exports) {
"use strict";

exports.__esModule = true;

var util_1 = require("./util");

function mergeSort(arr) {
  return [mergeArray(arr), 0];
}

exports.mergeSort = mergeSort;

function mergeArray(arr) {
  if (arr.length == 1) {
    return arr;
  } else {
    var middle = Math.floor(arr.length / 2);
    var left = arr.slice(0, middle);
    var right = arr.slice(middle);
    util_1.step(arr, middle);
    return merge(mergeArray(left), mergeArray(right));
  }
}

function merge(left, right) {
  var i = 0;
  var j = 0;
  var temp = [];

  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      temp.push(left[i]);
      i++;
    } else {
      temp.push(right[j]);
      j++;
    }
  }

  for (var m = i; m < left.length; m++) {
    temp.push(left[m]);
  }

  for (var n = j; n < right.length; n++) {
    temp.push(right[n]);
  }

  return temp;
}

function mergeSort2(arr) {
  var cnt = 0;
  var result = [];

  if (arr.length < 2) {
    return arr;
  } else {
    var middle = Math.floor(arr.length / 2);
    var left = arr.slice(0, middle);
    var right = arr.slice(middle);
    result = merge(mergeSort2(left), mergeSort2(right));
    console.log(result);
    return result;
  }
}
},{"./util":"algorithm/util.ts"}],"main.ts":[function(require,module,exports) {
"use strict";

exports.__esModule = true;

require("./index.less");

var bubbleSort_1 = require("./algorithm/bubbleSort");

var selectionSort_1 = require("./algorithm/selectionSort");

var insertSort_1 = require("./algorithm/insertSort");

var shellSort_1 = require("./algorithm/shellSort");

var mergeSort_1 = require("./algorithm/mergeSort");

var source = [];
var NUM = 6;
document.querySelector('#menu').addEventListener('click', function (e) {
  var tar = e.target;
  var href = tar.getAttribute('href');
  document.querySelector(".algo").innerHTML = tar.innerHTML;
  document.querySelector(".process").innerHTML = "";
  var copy = source.slice(0);
  var start = Date.now();

  switch (href) {
    case "bubbleSort":
      displayResult.apply(void 0, bubbleSort_1.bubbleSort(copy).concat([start]));
      break;

    case "selectionSort":
      displayResult.apply(void 0, selectionSort_1.selectionSort(copy).concat([start]));
      break;

    case "insertSort":
      displayResult.apply(void 0, insertSort_1.insertSort(copy).concat([start]));
      break;

    case "shellSort":
      displayResult.apply(void 0, shellSort_1.shellSort(copy).concat([start]));
      break;

    case "mergeSort":
      displayResult.apply(void 0, mergeSort_1.mergeSort(copy).concat([start]));
      break;
  }
});

function generateSourceData() {
  for (var i = 0; i < NUM; i++) {
    source.push(Math.round(Math.random() * 1000));
  }

  displayArray(source, document.querySelector(".source"), false);
}

function displayArray(arr, dom, append) {
  var htmls = arr.map(function (ele) {
    return "<span class=\"array-item\">" + ele + "</span>";
  });

  if (append) {
    dom.innerHTML += htmls.join("");
  } else {
    dom.innerHTML = htmls.join("");
  }
}

function displayResult(arr, count, start) {
  var dom = document.querySelector(".output");
  var htmls = arr.map(function (ele) {
    return "<span class=\"array-item\">" + ele + "</span>";
  });
  var delta = console.timeEnd("algotime");
  dom.innerHTML = htmls.join("") + ("<h3>\u5FAA\u73AF\u6B21\u6570\uFF1A" + count + "</h3>") + ("<h3>\u8017\u65F6\uFF1A" + (Date.now() - start) + "</h3>");
}

function init() {
  generateSourceData();
}

init();
},{"./index.less":"index.less","./algorithm/bubbleSort":"algorithm/bubbleSort.ts","./algorithm/selectionSort":"algorithm/selectionSort.ts","./algorithm/insertSort":"algorithm/insertSort.ts","./algorithm/shellSort":"algorithm/shellSort.ts","./algorithm/mergeSort":"algorithm/mergeSort.ts"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "64780" + '/');

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
      }); // Enable HMR for CSS by default.

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
  overlay.id = OVERLAY_ID; // html encode message and stack trace

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
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","main.ts"], null)
//# sourceMappingURL=/main.c39d6dcf.js.map