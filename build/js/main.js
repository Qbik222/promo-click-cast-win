"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
(function () {
  var apiURL = 'https://fav-prom.com/api_your_promo';
  var getActiveWeek = function getActiveWeek(promoStartDate, weekDuration) {
    var currentDate = new Date();
    var weekDates = [];
    var Day = 24 * 60 * 60 * 1000;
    var Week = weekDuration * Day;
    var formatDate = function formatDate(date) {
      return "".concat(date.getDate().toString().padStart(2, "0"), ".").concat((date.getMonth() + 1).toString().padStart(2, "0"));
    };
    var calculateWeekPeriod = function calculateWeekPeriod(weekIndex) {
      var baseStart = promoStartDate.getTime();
      var start = new Date(baseStart + weekIndex * Week);
      var end = new Date(start.getTime() + (weekDuration * Day - 1));
      return {
        start: start,
        end: end
      };
    };
    var activeWeekIndex = null;

    // Перевірка поточного тижня
    for (var i = 0; i < 10; i++) {
      // Обмежуємо 10 тижнями (якщо потрібно більше, просто змініть лічильник)
      var _calculateWeekPeriod = calculateWeekPeriod(i),
        start = _calculateWeekPeriod.start,
        end = _calculateWeekPeriod.end;
      if (currentDate >= start && currentDate <= end) {
        activeWeekIndex = i + 1;
        break;
      }
    }
    return activeWeekIndex;
  };
  var promoStartDate = new Date("2025-05-05T00:00:00");
  var weekDuration = 10;
  var isVerifiedUser = false;
  var periodAmount = 2; // кількість періодів в акції, треба для кешування інфи з табли

  var tableData = [];
  var activeWeek = getActiveWeek(promoStartDate, weekDuration) || 1;
  // let activeWeek = 2

  if (activeWeek > 2) activeWeek = 2;
  var currentIndex = 4;
  var startX = 0;
  var isDragging = false;
  var mainPage = document.querySelector(".fav-page"),
    unauthMsgs = document.querySelectorAll('.unauth-msg'),
    participateBtns = document.querySelectorAll('.part-btn'),
    redirectBtns = document.querySelectorAll('.play-btn'),
    loader = document.querySelector(".spinner-overlay"),
    detailsPopupBtn = document.querySelector(".info__details"),
    rulesPopupBtn = document.querySelector(".table__popup-btn"),
    slider = document.querySelector('.cards'),
    items = document.querySelectorAll('.card'),
    totalItems = items.length,
    runes = document.querySelectorAll('.predict__runes-item'),
    buttonsLeft = document.querySelectorAll('.predict__move-left'),
    buttonsRight = document.querySelectorAll('.predict__move-right');
  var ukLeng = document.querySelector('#ukLeng');
  var enLeng = document.querySelector('#enLeng');
  var toggleClasses = function toggleClasses(elements, className) {
    return elements.forEach(function (el) {
      return el.classList.toggle("".concat(className));
    });
  };
  var toggleTranslates = function toggleTranslates(elements, dataAttr) {
    return elements.forEach(function (el) {
      el.setAttribute('data-translate', "".concat(dataAttr));
      el.innerHTML = i18nData[dataAttr] || '*----NEED TO BE TRANSLATED----*   key:  ' + dataAttr;
      el.removeAttribute('data-translate');
    });
  };
  var loaderBtn = false;
  var locale = "en";
  // let locale = sessionStorage.getItem("locale") || "uk"

  if (ukLeng) locale = 'uk';
  if (enLeng) locale = 'en';
  var debug = false;
  if (debug) hideLoader();
  var i18nData = {};
  var translateState = true;
  var userId = null;
  // let userId = Number(sessionStorage.getItem("userId")) ?? null

  var request = function request(link, extraOptions) {
    return fetch(apiURL + link, _objectSpread({
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }, extraOptions || {})).then(function (res) {
      if (!res.ok) throw new Error('API error');
      return res.json();
    })["catch"](function (err) {
      console.error('API request failed:', err);
      reportError(err);
      document.querySelector('.fav-page').style.display = 'none';
      if (window.location.href.startsWith("https://www.favbet.hr/")) {
        window.location.href = '/promocije/promocija/stub/';
      } else {
        window.location.href = '/promos/promo/stub/';
      }
      return Promise.reject(err);
    });
  };
  function hideLoader() {
    loader.classList.add("hide");
    document.body.style.overflow = "auto";
    mainPage.classList.remove("loading");
  }
  function init() {
    return _init.apply(this, arguments);
  }
  function _init() {
    _init = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      var attempts, maxAttempts, attemptInterval, tryDetectUserId, quickCheckAndRender, waitForUserId;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            quickCheckAndRender = function _quickCheckAndRender() {
              // checkUserAuth()
              //     .then(loadUsers)
              //     .then(() =>{
              //         setTimeout(hideLoader, 300);
              //         document.querySelectorAll(".table__tabs-item").forEach((tab, i) =>{
              //             tab.classList.remove('active');
              //             if(i === activeWeek - 1) tab.classList.add('active');
              //         })
              //         // renderUsers(activeWeek, tableData);
              //         participateBtns.forEach(btn => btn.addEventListener('click', participate));
              //     })

              updateSlider();
              setTimeout(hideLoader, 300);
              showItemsOnScroll(".smoke__animal");
              document.querySelectorAll('.popup__close').forEach(function (closeBtn) {
                closeBtn.addEventListener('click', closeAllPopups);
              });
              document.querySelectorAll('.open-btn').forEach(function (btn) {
                btn.addEventListener('click', function () {
                  var popupAttr = btn.getAttribute('data-popup');
                  openPopupByAttr(popupAttr);
                });
              });
              document.querySelector('.popups').addEventListener('click', function (e) {
                var openPopupEl = document.querySelector('.popup.active');
                var isInside = openPopupEl ? openPopupEl.contains(e.target) : false;
                if (openPopupEl && !isInside) {
                  closeAllPopups();
                }
              });

              // participateBtns.forEach(btn => btn.addEventListener('click', participate));
            };
            tryDetectUserId = function _tryDetectUserId() {
              if (window.store) {
                var state = window.store.getState();
                userId = state.auth.isAuthorized && state.auth.id || '';
              } else if (window.g_user_id) {
                userId = window.g_user_id;
              }
            };
            attempts = 0;
            maxAttempts = 20;
            attemptInterval = 50;
            waitForUserId = new Promise(function (resolve) {
              var interval = setInterval(function () {
                tryDetectUserId();
                if (userId || attempts >= maxAttempts) {
                  quickCheckAndRender();
                  clearInterval(interval);
                  resolve();
                }
                attempts++;
              }, attemptInterval);
            });
            _context.next = 8;
            return waitForUserId;
          case 8:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return _init.apply(this, arguments);
  }
  function closeAllPopups() {
    document.querySelectorAll('.popup').forEach(function (p) {
      return p.classList.remove('active');
    });
    document.querySelector('.popups').classList.add('opacity');
    document.body.style.overflow = 'auto';
  }
  function openPopupByAttr(popupAttr) {
    var allPopups = document.querySelectorAll('.popup');
    allPopups.forEach(function (p) {
      return p.classList.remove('active');
    });
    document.body.style.overflow = 'hidden';
    console.log(popupAttr);
    var targetPopup = document.querySelector(".popup[data-popup=\"".concat(popupAttr, "\"]"));
    if (targetPopup) {
      targetPopup.classList.add('active');
      document.querySelector('.popups').classList.remove('opacity');
    }
  }
  function loadTranslations() {
    return request("/new-translates/".concat(locale)).then(function (json) {
      i18nData = json;
      translate();
      var mutationObserver = new MutationObserver(function (mutations) {
        mutationObserver.disconnect();
        translate();
        mutationObserver.observe(targetNode, {
          childList: true,
          subtree: true
        });
      });
      mutationObserver.observe(document.getElementById("hardcoreTennis"), {
        childList: true,
        subtree: true
      });
    });
  }
  function checkUserAuth() {
    console.log(userId);
    if (userId) {
      var _iterator = _createForOfIteratorHelper(unauthMsgs),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var unauthMes = _step.value;
          unauthMes.classList.add('hide');
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      return request("/favuser/".concat(userId, "?nocache=1")).then(function (res) {
        if (res.userid) {
          participateBtns.forEach(function (item) {
            return item.classList.add('hide');
          });
          redirectBtns.forEach(function (item) {
            return item.classList.remove('hide');
          });
          isVerifiedUser = true;
          console.log(isVerifiedUser);
        } else {
          participateBtns.forEach(function (item) {
            return item.classList.remove('hide');
          });
          redirectBtns.forEach(function (item) {
            return item.classList.add('hide');
          });
          isVerifiedUser = false;
        }
      });
    } else {
      var _iterator2 = _createForOfIteratorHelper(redirectBtns),
        _step2;
      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var redirectBtn = _step2.value;
          redirectBtn.classList.add('hide');
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
      var _iterator3 = _createForOfIteratorHelper(participateBtns),
        _step3;
      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          var participateBtn = _step3.value;
          participateBtn.classList.add('hide');
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }
      var _iterator4 = _createForOfIteratorHelper(unauthMsgs),
        _step4;
      try {
        for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
          var _unauthMes = _step4.value;
          _unauthMes.classList.remove('hide');
        }
      } catch (err) {
        _iterator4.e(err);
      } finally {
        _iterator4.f();
      }
      return Promise.resolve(false);
    }
  }
  function reportError(err) {
    var reportData = {
      origin: window.location.href,
      userid: userId,
      errorText: (err === null || err === void 0 ? void 0 : err.error) || (err === null || err === void 0 ? void 0 : err.text) || (err === null || err === void 0 ? void 0 : err.message) || 'Unknown error',
      type: (err === null || err === void 0 ? void 0 : err.name) || 'UnknownError',
      stack: (err === null || err === void 0 ? void 0 : err.stack) || ''
    };
    fetch('https://fav-prom.com/api-cms/reports/add', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(reportData)
    })["catch"](console.warn);
  }
  function translate() {
    var elems = document.querySelectorAll('[data-translate]');
    if (elems && elems.length) {
      if (translateState) {
        elems.forEach(function (elem) {
          var key = elem.getAttribute('data-translate');
          elem.innerHTML = i18nData[key] || '*----NEED TO BE TRANSLATED----*   key:  ' + key;
          if (i18nData[key]) {
            elem.removeAttribute('data-translate');
          }
        });
      } else {
        console.log("translation works!");
      }
    }
    if (locale === 'en') {
      mainPage.classList.add('en');
    }
    refreshLocalizedClass(mainPage);
  }
  function refreshLocalizedClass(element) {
    if (!element) {
      return;
    }
    for (var _i = 0, _arr = ['uk', 'en']; _i < _arr.length; _i++) {
      var lang = _arr[_i];
      element.classList.remove(baseCssClass + lang);
    }
    element.classList.add(baseCssClass + locale);
  }
  function renderUsers(weekNum) {
    var userData = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
    weekNum = Number(weekNum);
    userData = userData.find(function (week) {
      return week.week === weekNum;
    }).users;
    console.log(userData);
    var currentUser = userData.find(function (user) {
      return user.userid === userId;
    });
    console.log(userId);
    console.log(currentUser);
    console.log(isVerifiedUser);
    if (userId && !currentUser && isVerifiedUser) {
      userData = [].concat(_toConsumableArray(userData), [{
        userid: userId,
        points: 0
      }]);
    }
    console.log(userData);
    populateUsersTable(userData, userId, weekNum, currentUser, isVerifiedUser);
  }
  function populateUsersTable(users, currentUserId, week, currentUser, isVerifiedUser) {
    console.log(users);
    resultsTable.innerHTML = '';
    resultsTableOther.innerHTML = '';
    if (!(users !== null && users !== void 0 && users.length)) return;
    var isTopCurrentUser = currentUser && users.slice(0, 10).some(function (user) {
      return user.userid === currentUserId;
    });
    var topUsersLength = !userId || isTopCurrentUser ? 13 : 10;
    var topUsers = users.slice(0, topUsersLength);

    // console.log(users);
    topUsers.forEach(function (user) {
      displayUser(user, user.userid === currentUserId, resultsTable, topUsers, isTopCurrentUser, week);
    });
    // console.log(isTopCurrentUser)
    console.log(isVerifiedUser);
    if (isVerifiedUser && !currentUser) {
      console.log('user verified');
      displayUser(currentUser, true, resultsTableOther, users, false, week);
    }
    if (!isTopCurrentUser && currentUser) {
      isVerifiedUser = false;
      displayUser(currentUser, true, resultsTableOther, users, false, week);
    }
  }
  function displayUser(user, isCurrentUser, table, users, isTopCurrentUser, week) {
    var renderRow = function renderRow(userData) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var _options$highlight = options.highlight,
        highlight = _options$highlight === void 0 ? false : _options$highlight,
        _options$neighbor = options.neighbor,
        neighbor = _options$neighbor === void 0 ? false : _options$neighbor;
      var userRow = document.createElement('div');
      userRow.classList.add('table__row');
      var userPlace = users.indexOf(userData) + 1;
      var prizeKey = debug ? null : getPrizeTranslationKey(userPlace, week);
      if (userPlace <= 3) {
        userRow.classList.add("place".concat(userPlace));
      }
      if (highlight || isCurrentUser && !neighbor) {
        userRow.classList.add('you');
      } else if (neighbor) {
        userRow.classList.add('_neighbor');
      }
      userRow.innerHTML = "\n            <div class=\"table__row-item\">\n                ".concat(userPlace < 10 ? '0' + userPlace : userPlace, "\n                ").concat(isCurrentUser && !neighbor ? '<span class="you">' + translateKey("you") + '</span>' : '', "\n            </div>\n            <div class=\"table__row-item\">\n                ").concat(isCurrentUser && !neighbor ? userData.userid : maskUserId(userData.userid), "\n            </div>\n            <div class=\"table__row-item\">\n                ").concat(Number(userData.points).toFixed(2), "\n            </div>\n            <div class=\"table__row-item\">\n                ").concat(prizeKey ? translateKey(prizeKey) : ' - ', "\n            </div>\n        ");
      table.append(userRow);
    };
    if (isCurrentUser && !isTopCurrentUser) {
      var index = users.indexOf(user);
      if (users[index - 1]) {
        renderRow(users[index - 1], {
          neighbor: true
        });
      }
      renderRow(user, {
        highlight: true
      });
      if (users[index + 1]) {
        renderRow(users[index + 1], {
          neighbor: true
        });
      }
    } else {
      renderRow(user);
    }
  }
  function translateKey(key, defaultValue) {
    if (!key) {
      return;
    }
    var needKey = debug ? key : "*----NEED TO BE TRANSLATED----* key: ".concat(key);
    defaultValue = needKey || key;
    return i18nData[key] || defaultValue;
  }
  function maskUserId(userId) {
    return "**" + userId.toString().slice(2);
  }
  function getPrizeTranslationKey(place, week) {
    if (place <= 3) return "prize_".concat(week, "-").concat(place);
    if (place <= 10) return "prize_".concat(week, "-4-10");
    if (place <= 25) return "prize_".concat(week, "-11-25");
    if (place <= 50) return "prize_".concat(week, "-26-50");
    if (place <= 75) return "prize_".concat(week, "-51-75");
    if (place <= 100) return "prize_".concat(week, "-76-100");
    if (place <= 125) return "prize_".concat(week, "-101-125");
    if (place <= 150) return "prize_".concat(week, "-126-150");
    if (place <= 175) return "prize_".concat(week, "-151-175");
    if (place <= 200) return "prize_".concat(week, "-176-200");
  }
  function participate() {
    if (!userId) {
      return;
    }
    var params = {
      userid: userId
    };
    fetch(apiURL + '/user/', {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify(params)
    }).then(function (res) {
      return res.json();
    }).then(function (res) {
      console.log(res);
      loaderBtn = true;
      toggleClasses(participateBtns, "loader");
      toggleTranslates(participateBtns, "loader");
      setTimeout(function () {
        toggleTranslates(participateBtns, "loader_ready");
        toggleClasses(participateBtns, "done");
        toggleClasses(participateBtns, "loader");
      }, 500);
      setTimeout(function () {
        checkUserAuth();
        loadUsers("?nocache=1").then(function (res) {
          renderUsers(activeWeek, tableData);
        });
      }, 1000);
    })["catch"](function (err) {
      console.error('API request failed:', err);
      reportError(err);
      document.querySelector('.fav-page').style.display = 'none';
      if (window.location.href.startsWith("https://www.favbet.hr/")) {
        window.location.href = '/promocije/promocija/stub/';
      } else {
        window.location.href = '/promos/promo/stub/';
      }
      return Promise.reject(err);
    });
  }
  function loadUsers(parametr) {
    var requests = [];
    tableData.length = 0;
    var _loop = function _loop() {
      var week = i; // або будь-яка логіка для формування номера тижня
      var req = request("/users/".concat(week).concat(parametr ? parametr : "")).then(function (data) {
        console.log(data);
        tableData.push({
          week: week,
          users: data
        });
      });
      requests.push(req);
    };
    for (var i = 1; i <= periodAmount; i++) {
      _loop();
    }
    return Promise.all(requests)["catch"](function (error) {
      console.error('Error loading users:', error);
    });
  }
  function showItemsOnScroll(itemClass) {
    var Blocks = document.querySelectorAll("".concat(itemClass));
    if (!Blocks) return;
    var observer = new IntersectionObserver(function (entries, observer) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting && entry.intersectionRatio >= 0.3) {
          setTimeout(function () {
            Blocks.forEach(function (item) {
              item.classList.add("showItem");
              observer.unobserve(item);
            });
          }, 200);
        }
      });
    }, {
      threshold: 0.3
    });
    Blocks.forEach(function (item) {
      observer.observe(item);
    });
  }

  //slider

  function updateSlider() {
    items.forEach(function (item, index) {
      var distance = index - currentIndex;
      var isVisible = Math.abs(distance) <= 1 || index === 0 && currentIndex === totalItems - 1 || index === totalItems - 1 && currentIndex === 0;
      item.classList.toggle('_hide-slide', !isVisible);
      item.classList.toggle('_active', index === currentIndex);
      updateRunes(currentIndex);
      item.classList.remove('_left', '_right');
      if (distance === 1 || currentIndex === totalItems - 1 && index === 0) {
        item.classList.add('_right');
      } else if (distance === -1 || currentIndex === 0 && index === totalItems - 1) {
        item.classList.add('_left');
      }
      if (!item.classList.contains('_active')) {
        return;
      }
    });
  }
  function updateRunes(currentIndex) {
    var runeCount = runes.length;
    console.log(currentIndex + 1);
    [].concat(_toConsumableArray(buttonsLeft), _toConsumableArray(buttonsRight)).forEach(function (btn) {
      for (var i = 1; i <= runeCount; i++) {
        btn.classList.remove("_rune".concat(i));
      }
    });
    var rightRuneIndex = (currentIndex + 1) % runeCount;
    var leftRuneIndex = (currentIndex - 1 + runeCount) % runeCount;
    var classRuneLeft = runes[leftRuneIndex].getAttribute('data-rune');
    var classRuneRight = runes[rightRuneIndex].getAttribute('data-rune');
    buttonsLeft.forEach(function (btn) {
      return btn.classList.add(classRuneLeft);
    });
    buttonsRight.forEach(function (btn) {
      return btn.classList.add(classRuneRight);
    });
    runes.forEach(function (rune, i) {
      rune.classList.remove('_active', '_right1', '_right2', '_left1', '_left2');
      if (i === currentIndex) {
        rune.classList.add('_active');
      } else if (i === (currentIndex + 1) % runeCount) {
        rune.classList.add('_right1');
      } else if (i === (currentIndex + 2) % runeCount) {
        rune.classList.add('_right2');
      } else if (i === (currentIndex - 1 + runeCount) % runeCount) {
        rune.classList.add('_left1');
      } else if (i === (currentIndex - 2 + runeCount) % runeCount) {
        rune.classList.add('_left2');
      }
    });
  }
  function moveSlider(offset) {
    currentIndex = (currentIndex + offset + totalItems) % totalItems;
    updateSlider();
  }
  function handleStart(event) {
    isDragging = true;
    startX = event.clientX || event.touches[0].clientX;
  }
  function handleMove(event) {
    if (!isDragging) return;
    var currentX = event.clientX || event.touches[0].clientX;
    var diffX = currentX - startX;
    if (Math.abs(diffX) > 50) {
      moveSlider(diffX > 0 ? -1 : 1);
      isDragging = false;
    }
  }
  function handleEnd() {
    isDragging = false;
  }
  buttonsLeft.forEach(function (btn) {
    btn.addEventListener('click', function () {
      moveSlider(-1);
      btn.style.pointerEvents = 'none';
      setTimeout(function () {
        btn.style.pointerEvents = 'initial';
      }, 1000);
    });
  });
  buttonsRight.forEach(function (btn) {
    btn.addEventListener('click', function () {
      moveSlider(1);
      btn.style.pointerEvents = 'none';
      setTimeout(function () {
        btn.style.pointerEvents = 'initial';
      }, 1000);
    });
  });
  slider.addEventListener('mousedown', handleStart);
  slider.addEventListener('touchstart', handleStart);
  document.addEventListener('mousemove', handleMove);
  document.addEventListener('touchmove', handleMove);
  document.addEventListener('mouseup', handleEnd);
  document.addEventListener('touchend', handleEnd);

  //slider
  // loadTranslations()
  //     .then(init) // запуск ініту сторінки
  init();
})();
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsiYXBpVVJMIiwiZ2V0QWN0aXZlV2VlayIsInByb21vU3RhcnREYXRlIiwid2Vla0R1cmF0aW9uIiwiY3VycmVudERhdGUiLCJEYXRlIiwid2Vla0RhdGVzIiwiRGF5IiwiV2VlayIsImZvcm1hdERhdGUiLCJkYXRlIiwiZ2V0RGF0ZSIsInRvU3RyaW5nIiwicGFkU3RhcnQiLCJnZXRNb250aCIsImNhbGN1bGF0ZVdlZWtQZXJpb2QiLCJ3ZWVrSW5kZXgiLCJiYXNlU3RhcnQiLCJnZXRUaW1lIiwic3RhcnQiLCJlbmQiLCJhY3RpdmVXZWVrSW5kZXgiLCJpIiwiaXNWZXJpZmllZFVzZXIiLCJwZXJpb2RBbW91bnQiLCJ0YWJsZURhdGEiLCJhY3RpdmVXZWVrIiwiY3VycmVudEluZGV4Iiwic3RhcnRYIiwiaXNEcmFnZ2luZyIsIm1haW5QYWdlIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwidW5hdXRoTXNncyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJwYXJ0aWNpcGF0ZUJ0bnMiLCJyZWRpcmVjdEJ0bnMiLCJsb2FkZXIiLCJkZXRhaWxzUG9wdXBCdG4iLCJydWxlc1BvcHVwQnRuIiwic2xpZGVyIiwiaXRlbXMiLCJ0b3RhbEl0ZW1zIiwibGVuZ3RoIiwicnVuZXMiLCJidXR0b25zTGVmdCIsImJ1dHRvbnNSaWdodCIsInVrTGVuZyIsImVuTGVuZyIsInRvZ2dsZUNsYXNzZXMiLCJlbGVtZW50cyIsImNsYXNzTmFtZSIsImZvckVhY2giLCJlbCIsImNsYXNzTGlzdCIsInRvZ2dsZSIsInRvZ2dsZVRyYW5zbGF0ZXMiLCJkYXRhQXR0ciIsInNldEF0dHJpYnV0ZSIsImlubmVySFRNTCIsImkxOG5EYXRhIiwicmVtb3ZlQXR0cmlidXRlIiwibG9hZGVyQnRuIiwibG9jYWxlIiwiZGVidWciLCJoaWRlTG9hZGVyIiwidHJhbnNsYXRlU3RhdGUiLCJ1c2VySWQiLCJyZXF1ZXN0IiwibGluayIsImV4dHJhT3B0aW9ucyIsImZldGNoIiwiaGVhZGVycyIsInRoZW4iLCJyZXMiLCJvayIsIkVycm9yIiwianNvbiIsImVyciIsImNvbnNvbGUiLCJlcnJvciIsInJlcG9ydEVycm9yIiwic3R5bGUiLCJkaXNwbGF5Iiwid2luZG93IiwibG9jYXRpb24iLCJocmVmIiwic3RhcnRzV2l0aCIsIlByb21pc2UiLCJyZWplY3QiLCJhZGQiLCJib2R5Iiwib3ZlcmZsb3ciLCJyZW1vdmUiLCJpbml0IiwidHJ5RGV0ZWN0VXNlcklkIiwicXVpY2tDaGVja0FuZFJlbmRlciIsInVwZGF0ZVNsaWRlciIsInNldFRpbWVvdXQiLCJzaG93SXRlbXNPblNjcm9sbCIsImNsb3NlQnRuIiwiYWRkRXZlbnRMaXN0ZW5lciIsImNsb3NlQWxsUG9wdXBzIiwiYnRuIiwicG9wdXBBdHRyIiwiZ2V0QXR0cmlidXRlIiwib3BlblBvcHVwQnlBdHRyIiwiZSIsIm9wZW5Qb3B1cEVsIiwiaXNJbnNpZGUiLCJjb250YWlucyIsInRhcmdldCIsInN0b3JlIiwic3RhdGUiLCJnZXRTdGF0ZSIsImF1dGgiLCJpc0F1dGhvcml6ZWQiLCJpZCIsImdfdXNlcl9pZCIsImF0dGVtcHRzIiwibWF4QXR0ZW1wdHMiLCJhdHRlbXB0SW50ZXJ2YWwiLCJ3YWl0Rm9yVXNlcklkIiwicmVzb2x2ZSIsImludGVydmFsIiwic2V0SW50ZXJ2YWwiLCJjbGVhckludGVydmFsIiwicCIsImFsbFBvcHVwcyIsImxvZyIsInRhcmdldFBvcHVwIiwibG9hZFRyYW5zbGF0aW9ucyIsInRyYW5zbGF0ZSIsIm11dGF0aW9uT2JzZXJ2ZXIiLCJNdXRhdGlvbk9ic2VydmVyIiwibXV0YXRpb25zIiwiZGlzY29ubmVjdCIsIm9ic2VydmUiLCJ0YXJnZXROb2RlIiwiY2hpbGRMaXN0Iiwic3VidHJlZSIsImdldEVsZW1lbnRCeUlkIiwiY2hlY2tVc2VyQXV0aCIsInVuYXV0aE1lcyIsInVzZXJpZCIsIml0ZW0iLCJyZWRpcmVjdEJ0biIsInBhcnRpY2lwYXRlQnRuIiwicmVwb3J0RGF0YSIsIm9yaWdpbiIsImVycm9yVGV4dCIsInRleHQiLCJtZXNzYWdlIiwidHlwZSIsIm5hbWUiLCJzdGFjayIsIm1ldGhvZCIsIkpTT04iLCJzdHJpbmdpZnkiLCJ3YXJuIiwiZWxlbXMiLCJlbGVtIiwia2V5IiwicmVmcmVzaExvY2FsaXplZENsYXNzIiwiZWxlbWVudCIsImxhbmciLCJiYXNlQ3NzQ2xhc3MiLCJyZW5kZXJVc2VycyIsIndlZWtOdW0iLCJ1c2VyRGF0YSIsIk51bWJlciIsImZpbmQiLCJ3ZWVrIiwidXNlcnMiLCJjdXJyZW50VXNlciIsInVzZXIiLCJwb2ludHMiLCJwb3B1bGF0ZVVzZXJzVGFibGUiLCJjdXJyZW50VXNlcklkIiwicmVzdWx0c1RhYmxlIiwicmVzdWx0c1RhYmxlT3RoZXIiLCJpc1RvcEN1cnJlbnRVc2VyIiwic2xpY2UiLCJzb21lIiwidG9wVXNlcnNMZW5ndGgiLCJ0b3BVc2VycyIsImRpc3BsYXlVc2VyIiwiaXNDdXJyZW50VXNlciIsInRhYmxlIiwicmVuZGVyUm93Iiwib3B0aW9ucyIsImhpZ2hsaWdodCIsIm5laWdoYm9yIiwidXNlclJvdyIsImNyZWF0ZUVsZW1lbnQiLCJ1c2VyUGxhY2UiLCJpbmRleE9mIiwicHJpemVLZXkiLCJnZXRQcml6ZVRyYW5zbGF0aW9uS2V5IiwidHJhbnNsYXRlS2V5IiwibWFza1VzZXJJZCIsInRvRml4ZWQiLCJhcHBlbmQiLCJpbmRleCIsImRlZmF1bHRWYWx1ZSIsIm5lZWRLZXkiLCJwbGFjZSIsInBhcnRpY2lwYXRlIiwicGFyYW1zIiwibG9hZFVzZXJzIiwicGFyYW1ldHIiLCJyZXF1ZXN0cyIsInJlcSIsImRhdGEiLCJwdXNoIiwiYWxsIiwiaXRlbUNsYXNzIiwiQmxvY2tzIiwib2JzZXJ2ZXIiLCJJbnRlcnNlY3Rpb25PYnNlcnZlciIsImVudHJpZXMiLCJlbnRyeSIsImlzSW50ZXJzZWN0aW5nIiwiaW50ZXJzZWN0aW9uUmF0aW8iLCJ1bm9ic2VydmUiLCJ0aHJlc2hvbGQiLCJkaXN0YW5jZSIsImlzVmlzaWJsZSIsIk1hdGgiLCJhYnMiLCJ1cGRhdGVSdW5lcyIsInJ1bmVDb3VudCIsInJpZ2h0UnVuZUluZGV4IiwibGVmdFJ1bmVJbmRleCIsImNsYXNzUnVuZUxlZnQiLCJjbGFzc1J1bmVSaWdodCIsInJ1bmUiLCJtb3ZlU2xpZGVyIiwib2Zmc2V0IiwiaGFuZGxlU3RhcnQiLCJldmVudCIsImNsaWVudFgiLCJ0b3VjaGVzIiwiaGFuZGxlTW92ZSIsImN1cnJlbnRYIiwiZGlmZlgiLCJoYW5kbGVFbmQiLCJwb2ludGVyRXZlbnRzIl0sIm1hcHBpbmdzIjoiOzs7K0NBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREEsQ0FBQyxZQUFZO0VBRVQsSUFBTUEsTUFBTSxHQUFHLHFDQUFxQztFQUVwRCxJQUFNQyxhQUFhLEdBQUcsU0FBaEJBLGFBQWEsQ0FBSUMsY0FBYyxFQUFFQyxZQUFZLEVBQUs7SUFDcEQsSUFBTUMsV0FBVyxHQUFHLElBQUlDLElBQUksRUFBRTtJQUM5QixJQUFJQyxTQUFTLEdBQUcsRUFBRTtJQUVsQixJQUFNQyxHQUFHLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsSUFBSTtJQUMvQixJQUFNQyxJQUFJLEdBQUdMLFlBQVksR0FBR0ksR0FBRztJQUUvQixJQUFNRSxVQUFVLEdBQUcsU0FBYkEsVUFBVSxDQUFJQyxJQUFJO01BQUEsaUJBQ2pCQSxJQUFJLENBQUNDLE9BQU8sRUFBRSxDQUFDQyxRQUFRLEVBQUUsQ0FBQ0MsUUFBUSxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsY0FBSSxDQUFDSCxJQUFJLENBQUNJLFFBQVEsRUFBRSxHQUFHLENBQUMsRUFBRUYsUUFBUSxFQUFFLENBQUNDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDO0lBQUEsQ0FBRTtJQUV4RyxJQUFNRSxtQkFBbUIsR0FBRyxTQUF0QkEsbUJBQW1CLENBQUlDLFNBQVMsRUFBSztNQUN2QyxJQUFNQyxTQUFTLEdBQUdmLGNBQWMs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e1xuXG4gICAgY29uc3QgYXBpVVJMID0gJ2h0dHBzOi8vZmF2LXByb20uY29tL2FwaV95b3VyX3Byb21vJ1xuXG4gICAgY29uc3QgZ2V0QWN0aXZlV2VlayA9IChwcm9tb1N0YXJ0RGF0ZSwgd2Vla0R1cmF0aW9uKSA9PiB7XG4gICAgICAgIGNvbnN0IGN1cnJlbnREYXRlID0gbmV3IERhdGUoKTtcbiAgICAgICAgbGV0IHdlZWtEYXRlcyA9IFtdO1xuXG4gICAgICAgIGNvbnN0IERheSA9IDI0ICogNjAgKiA2MCAqIDEwMDA7XG4gICAgICAgIGNvbnN0IFdlZWsgPSB3ZWVrRHVyYXRpb24gKiBEYXk7XG5cbiAgICAgICAgY29uc3QgZm9ybWF0RGF0ZSA9IChkYXRlKSA9PlxuICAgICAgICAgICAgYCR7ZGF0ZS5nZXREYXRlKCkudG9TdHJpbmcoKS5wYWRTdGFydCgyLCBcIjBcIil9LiR7KGRhdGUuZ2V0TW9udGgoKSArIDEpLnRvU3RyaW5nKCkucGFkU3RhcnQoMiwgXCIwXCIpfWA7XG5cbiAgICAgICAgY29uc3QgY2FsY3VsYXRlV2Vla1BlcmlvZCA9ICh3ZWVrSW5kZXgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGJhc2VTdGFydCA9IHByb21vU3RhcnREYXRlLmdldFRpbWUoKTtcbiAgICAgICAgICAgIGNvbnN0IHN0YXJ0ID0gbmV3IERhdGUoYmFzZVN0YXJ0ICsgd2Vla0luZGV4ICogV2Vlayk7XG4gICAgICAgICAgICBsZXQgZW5kID0gbmV3IERhdGUoc3RhcnQuZ2V0VGltZSgpICsgKHdlZWtEdXJhdGlvbiAqIERheSAtIDEpKTtcbiAgICAgICAgICAgIHJldHVybiB7IHN0YXJ0LCBlbmQgfTtcbiAgICAgICAgfTtcblxuICAgICAgICBsZXQgYWN0aXZlV2Vla0luZGV4ID0gbnVsbDtcblxuICAgICAgICAvLyDQn9C10YDQtdCy0ZbRgNC60LAg0L/QvtGC0L7Rh9C90L7Qs9C+INGC0LjQttC90Y9cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKSB7IC8vINCe0LHQvNC10LbRg9GU0LzQviAxMCDRgtC40LbQvdGP0LzQuCAo0Y/QutGJ0L4g0L/QvtGC0YDRltCx0L3QviDQsdGW0LvRjNGI0LUsINC/0YDQvtGB0YLQviDQt9C80ZbQvdGW0YLRjCDQu9GW0YfQuNC70YzQvdC40LopXG4gICAgICAgICAgICBjb25zdCB7IHN0YXJ0LCBlbmQgfSA9IGNhbGN1bGF0ZVdlZWtQZXJpb2QoaSk7XG4gICAgICAgICAgICBpZiAoY3VycmVudERhdGUgPj0gc3RhcnQgJiYgY3VycmVudERhdGUgPD0gZW5kKSB7XG4gICAgICAgICAgICAgICAgYWN0aXZlV2Vla0luZGV4ID0gaSArIDE7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gYWN0aXZlV2Vla0luZGV4O1xuICAgIH07XG5cbiAgICBjb25zdCBwcm9tb1N0YXJ0RGF0ZSA9IG5ldyBEYXRlKFwiMjAyNS0wNS0wNVQwMDowMDowMFwiKTtcbiAgICBjb25zdCB3ZWVrRHVyYXRpb24gPSAxMDtcblxuICAgIGxldCBpc1ZlcmlmaWVkVXNlciA9IGZhbHNlO1xuXG4gICAgbGV0IHBlcmlvZEFtb3VudCA9IDIgLy8g0LrRltC70YzQutGW0YHRgtGMINC/0LXRgNGW0L7QtNGW0LIg0LIg0LDQutGG0ZbRlywg0YLRgNC10LHQsCDQtNC70Y8g0LrQtdGI0YPQstCw0L3QvdGPINGW0L3RhNC4INC3INGC0LDQsdC70LhcblxuICAgIGxldCB0YWJsZURhdGEgPSBbXVxuICAgIGxldCBhY3RpdmVXZWVrID0gZ2V0QWN0aXZlV2Vlayhwcm9tb1N0YXJ0RGF0ZSwgd2Vla0R1cmF0aW9uKSB8fCAxO1xuICAgIC8vIGxldCBhY3RpdmVXZWVrID0gMlxuXG4gICAgaWYgKGFjdGl2ZVdlZWsgPiAyKSBhY3RpdmVXZWVrID0gMlxuXG4gICAgbGV0IGN1cnJlbnRJbmRleCA9IDQ7XG4gICAgbGV0IHN0YXJ0WCA9IDA7XG4gICAgbGV0IGlzRHJhZ2dpbmcgPSBmYWxzZTtcblxuXG5cbiAgICBjb25zdCBtYWluUGFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZmF2LXBhZ2VcIiksXG4gICAgICAgIHVuYXV0aE1zZ3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudW5hdXRoLW1zZycpLFxuICAgICAgICBwYXJ0aWNpcGF0ZUJ0bnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucGFydC1idG4nKSxcbiAgICAgICAgcmVkaXJlY3RCdG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnBsYXktYnRuJyksXG4gICAgICAgIGxvYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc3Bpbm5lci1vdmVybGF5XCIpLFxuICAgICAgICBkZXRhaWxzUG9wdXBCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmluZm9fX2RldGFpbHNcIiksXG4gICAgICAgIHJ1bGVzUG9wdXBCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhYmxlX19wb3B1cC1idG5cIiksXG4gICAgICAgIHNsaWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXJkcycpLFxuICAgICAgICBpdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jYXJkJyksXG4gICAgICAgIHRvdGFsSXRlbXMgPSBpdGVtcy5sZW5ndGgsXG4gICAgICAgIHJ1bmVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnByZWRpY3RfX3J1bmVzLWl0ZW0nKSxcbiAgICAgICAgYnV0dG9uc0xlZnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucHJlZGljdF9fbW92ZS1sZWZ0JyksXG4gICAgICAgIGJ1dHRvbnNSaWdodCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wcmVkaWN0X19tb3ZlLXJpZ2h0JylcblxuXG5cblxuXG5cblxuICAgIGNvbnN0IHVrTGVuZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN1a0xlbmcnKTtcbiAgICBjb25zdCBlbkxlbmcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZW5MZW5nJyk7XG5cbiAgICBjb25zdCB0b2dnbGVDbGFzc2VzID0gKGVsZW1lbnRzLCBjbGFzc05hbWUpID0+IGVsZW1lbnRzLmZvckVhY2goZWwgPT4gZWwuY2xhc3NMaXN0LnRvZ2dsZShgJHtjbGFzc05hbWV9YCkpO1xuICAgIGNvbnN0IHRvZ2dsZVRyYW5zbGF0ZXMgPSAoZWxlbWVudHMsIGRhdGFBdHRyKSA9PiBlbGVtZW50cy5mb3JFYWNoKGVsID0+IHtcbiAgICAgICAgZWwuc2V0QXR0cmlidXRlKCdkYXRhLXRyYW5zbGF0ZScsIGAke2RhdGFBdHRyfWApXG4gICAgICAgIGVsLmlubmVySFRNTCA9IGkxOG5EYXRhW2RhdGFBdHRyXSB8fCAnKi0tLS1ORUVEIFRPIEJFIFRSQU5TTEFURUQtLS0tKiAgIGtleTogICcgKyBkYXRhQXR0cjtcbiAgICAgICAgZWwucmVtb3ZlQXR0cmlidXRlKCdkYXRhLXRyYW5zbGF0ZScpO1xuICAgIH0pO1xuXG4gICAgbGV0IGxvYWRlckJ0biA9IGZhbHNlXG5cbiAgICBsZXQgbG9jYWxlID0gXCJlblwiXG4gICAgLy8gbGV0IGxvY2FsZSA9IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oXCJsb2NhbGVcIikgfHwgXCJ1a1wiXG5cbiAgICBpZiAodWtMZW5nKSBsb2NhbGUgPSAndWsnO1xuICAgIGlmIChlbkxlbmcpIGxvY2FsZSA9ICdlbic7XG5cbiAgICBsZXQgZGVidWcgPSBmYWxzZVxuXG4gICAgaWYgKGRlYnVnKSBoaWRlTG9hZGVyKClcblxuICAgIGxldCBpMThuRGF0YSA9IHt9O1xuICAgIGNvbnN0IHRyYW5zbGF0ZVN0YXRlID0gdHJ1ZTtcbiAgICBsZXQgdXNlcklkID0gbnVsbDtcbiAgICAvLyBsZXQgdXNlcklkID0gTnVtYmVyKHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oXCJ1c2VySWRcIikpID8/IG51bGxcblxuICAgIGNvbnN0IHJlcXVlc3QgPSBmdW5jdGlvbiAobGluaywgZXh0cmFPcHRpb25zKSB7XG4gICAgICAgIHJldHVybiBmZXRjaChhcGlVUkwgKyBsaW5rLCB7XG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgJ0FjY2VwdCc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgLi4uKGV4dHJhT3B0aW9ucyB8fCB7fSlcbiAgICAgICAgfSlcbiAgICAgICAgICAgIC50aGVuKHJlcyA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKCFyZXMub2spIHRocm93IG5ldyBFcnJvcignQVBJIGVycm9yJyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlcy5qc29uKCk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKGVyciA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignQVBJIHJlcXVlc3QgZmFpbGVkOicsIGVycik7XG5cbiAgICAgICAgICAgICAgICByZXBvcnRFcnJvcihlcnIpO1xuXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZhdi1wYWdlJykuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgICAgICAgICBpZiAod2luZG93LmxvY2F0aW9uLmhyZWYuc3RhcnRzV2l0aChcImh0dHBzOi8vd3d3LmZhdmJldC5oci9cIikpIHtcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSAnL3Byb21vY2lqZS9wcm9tb2NpamEvc3R1Yi8nO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gJy9wcm9tb3MvcHJvbW8vc3R1Yi8nO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChlcnIpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBoaWRlTG9hZGVyKCl7XG4gICAgICAgIGxvYWRlci5jbGFzc0xpc3QuYWRkKFwiaGlkZVwiKVxuICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gXCJhdXRvXCJcbiAgICAgICAgbWFpblBhZ2UuY2xhc3NMaXN0LnJlbW92ZShcImxvYWRpbmdcIilcbiAgICB9XG5cbiAgICBhc3luYyBmdW5jdGlvbiBpbml0KCkge1xuICAgICAgICBsZXQgYXR0ZW1wdHMgPSAwO1xuICAgICAgICBjb25zdCBtYXhBdHRlbXB0cyA9IDIwO1xuICAgICAgICBjb25zdCBhdHRlbXB0SW50ZXJ2YWwgPSA1MDtcblxuICAgICAgICBmdW5jdGlvbiB0cnlEZXRlY3RVc2VySWQoKSB7XG4gICAgICAgICAgICBpZiAod2luZG93LnN0b3JlKSB7XG4gICAgICAgICAgICAgICAgY29uc3Qgc3RhdGUgPSB3aW5kb3cuc3RvcmUuZ2V0U3RhdGUoKTtcbiAgICAgICAgICAgICAgICB1c2VySWQgPSBzdGF0ZS5hdXRoLmlzQXV0aG9yaXplZCAmJiBzdGF0ZS5hdXRoLmlkIHx8ICcnO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh3aW5kb3cuZ191c2VyX2lkKSB7XG4gICAgICAgICAgICAgICAgdXNlcklkID0gd2luZG93LmdfdXNlcl9pZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG5cblxuICAgICAgICBmdW5jdGlvbiBxdWlja0NoZWNrQW5kUmVuZGVyKCkge1xuICAgICAgICAgICAgLy8gY2hlY2tVc2VyQXV0aCgpXG4gICAgICAgICAgICAvLyAgICAgLnRoZW4obG9hZFVzZXJzKVxuICAgICAgICAgICAgLy8gICAgIC50aGVuKCgpID0+e1xuICAgICAgICAgICAgLy8gICAgICAgICBzZXRUaW1lb3V0KGhpZGVMb2FkZXIsIDMwMCk7XG4gICAgICAgICAgICAvLyAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIudGFibGVfX3RhYnMtaXRlbVwiKS5mb3JFYWNoKCh0YWIsIGkpID0+e1xuICAgICAgICAgICAgLy8gICAgICAgICAgICAgdGFiLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgLy8gICAgICAgICAgICAgaWYoaSA9PT0gYWN0aXZlV2VlayAtIDEpIHRhYi5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICAgICAgICAgIC8vICAgICAgICAgfSlcbiAgICAgICAgICAgIC8vICAgICAgICAgLy8gcmVuZGVyVXNlcnMoYWN0aXZlV2VlaywgdGFibGVEYXRhKTtcbiAgICAgICAgICAgIC8vICAgICAgICAgcGFydGljaXBhdGVCdG5zLmZvckVhY2goYnRuID0+IGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHBhcnRpY2lwYXRlKSk7XG4gICAgICAgICAgICAvLyAgICAgfSlcblxuICAgICAgICAgICAgdXBkYXRlU2xpZGVyKCk7XG5cbiAgICAgICAgICAgIHNldFRpbWVvdXQoaGlkZUxvYWRlciwgMzAwKTtcblxuICAgICAgICAgICAgc2hvd0l0ZW1zT25TY3JvbGwoXCIuc21va2VfX2FuaW1hbFwiKVxuXG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucG9wdXBfX2Nsb3NlJykuZm9yRWFjaChjbG9zZUJ0biA9PiB7XG4gICAgICAgICAgICAgICAgY2xvc2VCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbG9zZUFsbFBvcHVwcyk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm9wZW4tYnRuJykuZm9yRWFjaChidG4gPT4ge1xuICAgICAgICAgICAgICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcG9wdXBBdHRyID0gYnRuLmdldEF0dHJpYnV0ZSgnZGF0YS1wb3B1cCcpO1xuICAgICAgICAgICAgICAgICAgICBvcGVuUG9wdXBCeUF0dHIocG9wdXBBdHRyKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuXG5cbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3B1cHMnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3Qgb3BlblBvcHVwRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG9wdXAuYWN0aXZlJyk7XG4gICAgICAgICAgICAgICAgY29uc3QgaXNJbnNpZGUgPSBvcGVuUG9wdXBFbCA/IG9wZW5Qb3B1cEVsLmNvbnRhaW5zKGUudGFyZ2V0KSA6IGZhbHNlO1xuICAgICAgICAgICAgICAgIGlmIChvcGVuUG9wdXBFbCAmJiAhaXNJbnNpZGUpIHtcbiAgICAgICAgICAgICAgICAgICAgY2xvc2VBbGxQb3B1cHMoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgLy8gcGFydGljaXBhdGVCdG5zLmZvckVhY2goYnRuID0+IGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHBhcnRpY2lwYXRlKSk7XG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICBjb25zdCB3YWl0Rm9yVXNlcklkID0gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRyeURldGVjdFVzZXJJZCgpO1xuICAgICAgICAgICAgICAgIGlmICh1c2VySWQgfHwgYXR0ZW1wdHMgPj0gbWF4QXR0ZW1wdHMpIHtcbiAgICAgICAgICAgICAgICAgICAgcXVpY2tDaGVja0FuZFJlbmRlcigpO1xuICAgICAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKGludGVydmFsKTtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBhdHRlbXB0cysrO1xuICAgICAgICAgICAgfSwgYXR0ZW1wdEludGVydmFsKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgYXdhaXQgd2FpdEZvclVzZXJJZDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjbG9zZUFsbFBvcHVwcygpIHtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnBvcHVwJykuZm9yRWFjaChwID0+IHAuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJykpO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG9wdXBzJykuY2xhc3NMaXN0LmFkZCgnb3BhY2l0eScpO1xuICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gJ2F1dG8nO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIG9wZW5Qb3B1cEJ5QXR0cihwb3B1cEF0dHIpIHtcbiAgICAgICAgY29uc3QgYWxsUG9wdXBzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnBvcHVwJyk7XG4gICAgICAgIGFsbFBvcHVwcy5mb3JFYWNoKHAgPT4gcC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKSk7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSAnaGlkZGVuJztcblxuICAgICAgICBjb25zb2xlLmxvZyhwb3B1cEF0dHIpO1xuXG4gICAgICAgIGNvbnN0IHRhcmdldFBvcHVwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLnBvcHVwW2RhdGEtcG9wdXA9XCIke3BvcHVwQXR0cn1cIl1gKTtcbiAgICAgICAgaWYgKHRhcmdldFBvcHVwKSB7XG4gICAgICAgICAgICB0YXJnZXRQb3B1cC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3B1cHMnKS5jbGFzc0xpc3QucmVtb3ZlKCdvcGFjaXR5Jyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBsb2FkVHJhbnNsYXRpb25zKCkge1xuICAgICAgICByZXR1cm4gcmVxdWVzdChgL25ldy10cmFuc2xhdGVzLyR7bG9jYWxlfWApXG4gICAgICAgICAgICAudGhlbihqc29uID0+IHtcbiAgICAgICAgICAgICAgICBpMThuRGF0YSA9IGpzb247XG4gICAgICAgICAgICAgICAgdHJhbnNsYXRlKCk7XG4gICAgICAgICAgICAgICAgY29uc3QgbXV0YXRpb25PYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKGZ1bmN0aW9uIChtdXRhdGlvbnMpIHtcbiAgICAgICAgICAgICAgICAgICAgbXV0YXRpb25PYnNlcnZlci5kaXNjb25uZWN0KCk7XG4gICAgICAgICAgICAgICAgICAgIHRyYW5zbGF0ZSgpO1xuICAgICAgICAgICAgICAgICAgICBtdXRhdGlvbk9ic2VydmVyLm9ic2VydmUodGFyZ2V0Tm9kZSwgeyBjaGlsZExpc3Q6IHRydWUsIHN1YnRyZWU6IHRydWUgfSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgbXV0YXRpb25PYnNlcnZlci5vYnNlcnZlKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaGFyZGNvcmVUZW5uaXNcIiksIHtcbiAgICAgICAgICAgICAgICAgICAgY2hpbGRMaXN0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBzdWJ0cmVlOiB0cnVlXG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIH0pO1xuICAgIH1cblxuXG4gICAgZnVuY3Rpb24gY2hlY2tVc2VyQXV0aCgpIHtcbiAgICAgICAgY29uc29sZS5sb2codXNlcklkKVxuICAgICAgICBpZiAodXNlcklkKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IHVuYXV0aE1lcyBvZiB1bmF1dGhNc2dzKSB7XG4gICAgICAgICAgICAgICAgdW5hdXRoTWVzLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiByZXF1ZXN0KGAvZmF2dXNlci8ke3VzZXJJZH0/bm9jYWNoZT0xYClcbiAgICAgICAgICAgICAgICAudGhlbihyZXMgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAocmVzLnVzZXJpZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFydGljaXBhdGVCdG5zLmZvckVhY2goaXRlbSA9PiBpdGVtLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZWRpcmVjdEJ0bnMuZm9yRWFjaChpdGVtID0+IGl0ZW0uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzVmVyaWZpZWRVc2VyID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGlzVmVyaWZpZWRVc2VyKVxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFydGljaXBhdGVCdG5zLmZvckVhY2goaXRlbSA9PiBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZWRpcmVjdEJ0bnMuZm9yRWFjaChpdGVtID0+IGl0ZW0uY2xhc3NMaXN0LmFkZCgnaGlkZScpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzVmVyaWZpZWRVc2VyID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBmb3IgKGxldCByZWRpcmVjdEJ0biBvZiByZWRpcmVjdEJ0bnMpIHtcbiAgICAgICAgICAgICAgICByZWRpcmVjdEJ0bi5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmb3IgKGxldCBwYXJ0aWNpcGF0ZUJ0biBvZiBwYXJ0aWNpcGF0ZUJ0bnMpIHtcbiAgICAgICAgICAgICAgICBwYXJ0aWNpcGF0ZUJ0bi5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmb3IgKGNvbnN0IHVuYXV0aE1lcyBvZiB1bmF1dGhNc2dzKSB7XG4gICAgICAgICAgICAgICAgdW5hdXRoTWVzLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShmYWxzZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZXBvcnRFcnJvcihlcnIpIHtcbiAgICAgICAgY29uc3QgcmVwb3J0RGF0YSA9IHtcbiAgICAgICAgICAgIG9yaWdpbjogd2luZG93LmxvY2F0aW9uLmhyZWYsXG4gICAgICAgICAgICB1c2VyaWQ6IHVzZXJJZCxcbiAgICAgICAgICAgIGVycm9yVGV4dDogZXJyPy5lcnJvciB8fCBlcnI/LnRleHQgfHwgZXJyPy5tZXNzYWdlIHx8ICdVbmtub3duIGVycm9yJyxcbiAgICAgICAgICAgIHR5cGU6IGVycj8ubmFtZSB8fCAnVW5rbm93bkVycm9yJyxcbiAgICAgICAgICAgIHN0YWNrOiBlcnI/LnN0YWNrIHx8ICcnXG4gICAgICAgIH07XG5cbiAgICAgICAgZmV0Y2goJ2h0dHBzOi8vZmF2LXByb20uY29tL2FwaS1jbXMvcmVwb3J0cy9hZGQnLCB7XG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkocmVwb3J0RGF0YSlcbiAgICAgICAgfSkuY2F0Y2goY29uc29sZS53YXJuKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB0cmFuc2xhdGUoKSB7XG4gICAgICAgIGNvbnN0IGVsZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtdHJhbnNsYXRlXScpXG4gICAgICAgIGlmIChlbGVtcyAmJiBlbGVtcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGlmKHRyYW5zbGF0ZVN0YXRlKXtcbiAgICAgICAgICAgICAgICBlbGVtcy5mb3JFYWNoKGVsZW0gPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBrZXkgPSBlbGVtLmdldEF0dHJpYnV0ZSgnZGF0YS10cmFuc2xhdGUnKTtcbiAgICAgICAgICAgICAgICAgICAgZWxlbS5pbm5lckhUTUwgPSBpMThuRGF0YVtrZXldIHx8ICcqLS0tLU5FRUQgVE8gQkUgVFJBTlNMQVRFRC0tLS0qICAga2V5OiAgJyArIGtleTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGkxOG5EYXRhW2tleV0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW0ucmVtb3ZlQXR0cmlidXRlKCdkYXRhLXRyYW5zbGF0ZScpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwidHJhbnNsYXRpb24gd29ya3MhXCIpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGxvY2FsZSA9PT0gJ2VuJykge1xuICAgICAgICAgICAgbWFpblBhZ2UuY2xhc3NMaXN0LmFkZCgnZW4nKTtcbiAgICAgICAgfVxuICAgICAgICByZWZyZXNoTG9jYWxpemVkQ2xhc3MobWFpblBhZ2UpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlZnJlc2hMb2NhbGl6ZWRDbGFzcyhlbGVtZW50KSB7XG4gICAgICAgIGlmICghZWxlbWVudCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGZvciAoY29uc3QgbGFuZyBvZiBbJ3VrJywgJ2VuJ10pIHtcbiAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShiYXNlQ3NzQ2xhc3MgKyBsYW5nKTtcbiAgICAgICAgfVxuICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoYmFzZUNzc0NsYXNzICsgbG9jYWxlKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZW5kZXJVc2Vycyh3ZWVrTnVtLCB1c2VyRGF0YSA9IFtdKSB7XG4gICAgICAgIHdlZWtOdW0gPSBOdW1iZXIod2Vla051bSk7XG4gICAgICAgIHVzZXJEYXRhID0gdXNlckRhdGEuZmluZCh3ZWVrID0+IHtcbiAgICAgICAgICAgIHJldHVybiB3ZWVrLndlZWsgPT09IHdlZWtOdW1cbiAgICAgICAgfSkudXNlcnM7XG5cbiAgICAgICAgY29uc29sZS5sb2codXNlckRhdGEpO1xuXG4gICAgICAgIGNvbnN0IGN1cnJlbnRVc2VyID0gdXNlckRhdGEuZmluZCh1c2VyID0+IHVzZXIudXNlcmlkID09PSB1c2VySWQpO1xuXG4gICAgICAgIGNvbnNvbGUubG9nKHVzZXJJZClcbiAgICAgICAgY29uc29sZS5sb2coY3VycmVudFVzZXIpXG4gICAgICAgIGNvbnNvbGUubG9nKGlzVmVyaWZpZWRVc2VyKVxuXG4gICAgICAgIGlmKHVzZXJJZCAmJiAhY3VycmVudFVzZXIgJiYgaXNWZXJpZmllZFVzZXIpe1xuICAgICAgICAgICAgdXNlckRhdGEgPSBbLi4udXNlckRhdGEsIHt1c2VyaWQ6IHVzZXJJZCwgcG9pbnRzOiAwfV1cbiAgICAgICAgfVxuICAgICAgICBjb25zb2xlLmxvZyh1c2VyRGF0YSk7XG5cbiAgICAgICAgcG9wdWxhdGVVc2Vyc1RhYmxlKHVzZXJEYXRhLCB1c2VySWQsIHdlZWtOdW0sIGN1cnJlbnRVc2VyLCBpc1ZlcmlmaWVkVXNlcik7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcG9wdWxhdGVVc2Vyc1RhYmxlKHVzZXJzLCBjdXJyZW50VXNlcklkLCB3ZWVrLCBjdXJyZW50VXNlciwgaXNWZXJpZmllZFVzZXIpIHtcblxuICAgICAgICBjb25zb2xlLmxvZyh1c2Vycyk7XG4gICAgICAgIHJlc3VsdHNUYWJsZS5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgcmVzdWx0c1RhYmxlT3RoZXIuaW5uZXJIVE1MID0gJyc7XG4gICAgICAgIGlmICghdXNlcnM/Lmxlbmd0aCkgcmV0dXJuO1xuXG4gICAgICAgIGNvbnN0IGlzVG9wQ3VycmVudFVzZXIgPSBjdXJyZW50VXNlciAmJiB1c2Vycy5zbGljZSgwLCAxMCkuc29tZSh1c2VyID0+IHVzZXIudXNlcmlkID09PSBjdXJyZW50VXNlcklkKTtcblxuICAgICAgICBjb25zdCB0b3BVc2Vyc0xlbmd0aCA9ICF1c2VySWQgfHwgaXNUb3BDdXJyZW50VXNlciAgPyAxMyA6IDEwO1xuXG4gICAgICAgIGNvbnN0IHRvcFVzZXJzID0gdXNlcnMuc2xpY2UoMCwgdG9wVXNlcnNMZW5ndGgpO1xuXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHVzZXJzKTtcbiAgICAgICAgdG9wVXNlcnMuZm9yRWFjaCh1c2VyID0+IHtcbiAgICAgICAgICAgIGRpc3BsYXlVc2VyKHVzZXIsIHVzZXIudXNlcmlkID09PSBjdXJyZW50VXNlcklkLCByZXN1bHRzVGFibGUsIHRvcFVzZXJzLCBpc1RvcEN1cnJlbnRVc2VyLCB3ZWVrKTtcbiAgICAgICAgfSk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGlzVG9wQ3VycmVudFVzZXIpXG4gICAgICAgIGNvbnNvbGUubG9nKGlzVmVyaWZpZWRVc2VyKVxuICAgICAgICBpZihpc1ZlcmlmaWVkVXNlciAmJiAhY3VycmVudFVzZXIpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCd1c2VyIHZlcmlmaWVkJyk7XG4gICAgICAgICAgICBkaXNwbGF5VXNlcihjdXJyZW50VXNlciwgdHJ1ZSwgcmVzdWx0c1RhYmxlT3RoZXIsIHVzZXJzLCBmYWxzZSwgd2Vlayk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFpc1RvcEN1cnJlbnRVc2VyICYmIGN1cnJlbnRVc2VyKSB7XG4gICAgICAgICAgICBpc1ZlcmlmaWVkVXNlciA9IGZhbHNlO1xuICAgICAgICAgICAgZGlzcGxheVVzZXIoY3VycmVudFVzZXIsIHRydWUsIHJlc3VsdHNUYWJsZU90aGVyLCB1c2VycywgZmFsc2UsIHdlZWspO1xuICAgICAgICB9XG5cblxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGRpc3BsYXlVc2VyKHVzZXIsIGlzQ3VycmVudFVzZXIsIHRhYmxlLCB1c2VycywgaXNUb3BDdXJyZW50VXNlciwgd2Vlaykge1xuXG4gICAgICAgIGNvbnN0IHJlbmRlclJvdyA9ICh1c2VyRGF0YSwgb3B0aW9ucyA9IHt9KSA9PiB7XG4gICAgICAgICAgICBjb25zdCB7IGhpZ2hsaWdodCA9IGZhbHNlLCBuZWlnaGJvciA9IGZhbHNlIH0gPSBvcHRpb25zO1xuICAgICAgICAgICAgY29uc3QgdXNlclJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgdXNlclJvdy5jbGFzc0xpc3QuYWRkKCd0YWJsZV9fcm93Jyk7XG5cbiAgICAgICAgICAgIGNvbnN0IHVzZXJQbGFjZSA9IHVzZXJzLmluZGV4T2YodXNlckRhdGEpICsgMTtcbiAgICAgICAgICAgIGNvbnN0IHByaXplS2V5ID0gZGVidWcgPyBudWxsIDogZ2V0UHJpemVUcmFuc2xhdGlvbktleSh1c2VyUGxhY2UsIHdlZWspO1xuXG4gICAgICAgICAgICBpZiAodXNlclBsYWNlIDw9IDMpIHtcbiAgICAgICAgICAgICAgICB1c2VyUm93LmNsYXNzTGlzdC5hZGQoYHBsYWNlJHt1c2VyUGxhY2V9YCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChoaWdobGlnaHQgfHwgaXNDdXJyZW50VXNlciAmJiAhbmVpZ2hib3IpIHtcbiAgICAgICAgICAgICAgICB1c2VyUm93LmNsYXNzTGlzdC5hZGQoJ3lvdScpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChuZWlnaGJvcikge1xuICAgICAgICAgICAgICAgIHVzZXJSb3cuY2xhc3NMaXN0LmFkZCgnX25laWdoYm9yJyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHVzZXJSb3cuaW5uZXJIVE1MID0gYFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRhYmxlX19yb3ctaXRlbVwiPlxuICAgICAgICAgICAgICAgICR7dXNlclBsYWNlIDwgMTAgPyAnMCcgKyB1c2VyUGxhY2UgOiB1c2VyUGxhY2V9XG4gICAgICAgICAgICAgICAgJHtpc0N1cnJlbnRVc2VyICYmICFuZWlnaGJvciA/ICc8c3BhbiBjbGFzcz1cInlvdVwiPicgKyB0cmFuc2xhdGVLZXkoXCJ5b3VcIikgKyAnPC9zcGFuPicgOiAnJ31cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRhYmxlX19yb3ctaXRlbVwiPlxuICAgICAgICAgICAgICAgICR7aXNDdXJyZW50VXNlciAmJiAhbmVpZ2hib3IgPyB1c2VyRGF0YS51c2VyaWQgOiBtYXNrVXNlcklkKHVzZXJEYXRhLnVzZXJpZCl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0YWJsZV9fcm93LWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAke051bWJlcih1c2VyRGF0YS5wb2ludHMpLnRvRml4ZWQoMil9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0YWJsZV9fcm93LWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAke3ByaXplS2V5ID8gdHJhbnNsYXRlS2V5KHByaXplS2V5KSA6ICcgLSAnfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIGA7XG5cbiAgICAgICAgICAgIHRhYmxlLmFwcGVuZCh1c2VyUm93KTtcbiAgICAgICAgfTtcbiAgICAgICAgaWYgKGlzQ3VycmVudFVzZXIgJiYgIWlzVG9wQ3VycmVudFVzZXIpIHtcbiAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gdXNlcnMuaW5kZXhPZih1c2VyKTtcbiAgICAgICAgICAgIGlmICh1c2Vyc1tpbmRleCAtIDFdKSB7XG4gICAgICAgICAgICAgICAgcmVuZGVyUm93KHVzZXJzW2luZGV4IC0gMV0sIHsgbmVpZ2hib3I6IHRydWUgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZW5kZXJSb3codXNlciwgeyBoaWdobGlnaHQ6IHRydWUgfSk7XG4gICAgICAgICAgICBpZiAodXNlcnNbaW5kZXggKyAxXSkge1xuICAgICAgICAgICAgICAgIHJlbmRlclJvdyh1c2Vyc1tpbmRleCArIDFdLCB7IG5laWdoYm9yOiB0cnVlIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmVuZGVyUm93KHVzZXIpO1xuICAgICAgICB9XG4gICAgfVxuXG5cbiAgICBmdW5jdGlvbiB0cmFuc2xhdGVLZXkoa2V5LCBkZWZhdWx0VmFsdWUpIHtcbiAgICAgICAgaWYgKCFrZXkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBsZXQgbmVlZEtleSA9IGRlYnVnID8ga2V5IDogYCotLS0tTkVFRCBUTyBCRSBUUkFOU0xBVEVELS0tLSoga2V5OiAke2tleX1gXG5cbiAgICAgICAgZGVmYXVsdFZhbHVlID0gIG5lZWRLZXkgfHwga2V5O1xuICAgICAgICByZXR1cm4gaTE4bkRhdGFba2V5XSB8fCBkZWZhdWx0VmFsdWU7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbWFza1VzZXJJZCh1c2VySWQpIHtcbiAgICAgICAgcmV0dXJuIFwiKipcIiArIHVzZXJJZC50b1N0cmluZygpLnNsaWNlKDIpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldFByaXplVHJhbnNsYXRpb25LZXkocGxhY2UsIHdlZWspIHtcbiAgICAgICAgaWYgKHBsYWNlIDw9IDMpIHJldHVybiBgcHJpemVfJHt3ZWVrfS0ke3BsYWNlfWA7XG4gICAgICAgIGlmIChwbGFjZSA8PSAxMCkgcmV0dXJuIGBwcml6ZV8ke3dlZWt9LTQtMTBgO1xuICAgICAgICBpZiAocGxhY2UgPD0gMjUpIHJldHVybiBgcHJpemVfJHt3ZWVrfS0xMS0yNWA7XG4gICAgICAgIGlmIChwbGFjZSA8PSA1MCkgcmV0dXJuIGBwcml6ZV8ke3dlZWt9LTI2LTUwYDtcbiAgICAgICAgaWYgKHBsYWNlIDw9IDc1KSByZXR1cm4gYHByaXplXyR7d2Vla30tNTEtNzVgO1xuICAgICAgICBpZiAocGxhY2UgPD0gMTAwKSByZXR1cm4gYHByaXplXyR7d2Vla30tNzYtMTAwYDtcbiAgICAgICAgaWYgKHBsYWNlIDw9IDEyNSkgcmV0dXJuIGBwcml6ZV8ke3dlZWt9LTEwMS0xMjVgO1xuICAgICAgICBpZiAocGxhY2UgPD0gMTUwKSByZXR1cm4gYHByaXplXyR7d2Vla30tMTI2LTE1MGA7XG4gICAgICAgIGlmIChwbGFjZSA8PSAxNzUpIHJldHVybiBgcHJpemVfJHt3ZWVrfS0xNTEtMTc1YDtcbiAgICAgICAgaWYgKHBsYWNlIDw9IDIwMCkgcmV0dXJuIGBwcml6ZV8ke3dlZWt9LTE3Ni0yMDBgO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHBhcnRpY2lwYXRlKCkge1xuICAgICAgICBpZiAoIXVzZXJJZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHBhcmFtcyA9IHsgdXNlcmlkOiB1c2VySWQgfTtcbiAgICAgICAgZmV0Y2goYXBpVVJMICsgJy91c2VyLycsIHtcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAnQWNjZXB0JzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHBhcmFtcylcbiAgICAgICAgfSkudGhlbihyZXMgPT4gcmVzLmpzb24oKSlcbiAgICAgICAgICAgIC50aGVuKHJlcyA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzKTtcbiAgICAgICAgICAgICAgICBsb2FkZXJCdG4gPSB0cnVlXG4gICAgICAgICAgICAgICAgdG9nZ2xlQ2xhc3NlcyhwYXJ0aWNpcGF0ZUJ0bnMsIFwibG9hZGVyXCIpXG4gICAgICAgICAgICAgICAgdG9nZ2xlVHJhbnNsYXRlcyhwYXJ0aWNpcGF0ZUJ0bnMsIFwibG9hZGVyXCIpXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PntcbiAgICAgICAgICAgICAgICAgICAgdG9nZ2xlVHJhbnNsYXRlcyhwYXJ0aWNpcGF0ZUJ0bnMsIFwibG9hZGVyX3JlYWR5XCIpXG4gICAgICAgICAgICAgICAgICAgIHRvZ2dsZUNsYXNzZXMocGFydGljaXBhdGVCdG5zLCBcImRvbmVcIilcbiAgICAgICAgICAgICAgICAgICAgdG9nZ2xlQ2xhc3NlcyhwYXJ0aWNpcGF0ZUJ0bnMsIFwibG9hZGVyXCIpXG4gICAgICAgICAgICAgICAgfSwgNTAwKVxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCk9PntcbiAgICAgICAgICAgICAgICAgICAgY2hlY2tVc2VyQXV0aCgpXG4gICAgICAgICAgICAgICAgICAgIGxvYWRVc2VycyhcIj9ub2NhY2hlPTFcIikudGhlbihyZXMgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVuZGVyVXNlcnMoYWN0aXZlV2VlaywgdGFibGVEYXRhKVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH0sIDEwMDApXG5cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdBUEkgcmVxdWVzdCBmYWlsZWQ6JywgZXJyKTtcblxuICAgICAgICAgICAgICAgIHJlcG9ydEVycm9yKGVycik7XG5cbiAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZmF2LXBhZ2UnKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICAgICAgICAgIGlmICh3aW5kb3cubG9jYXRpb24uaHJlZi5zdGFydHNXaXRoKFwiaHR0cHM6Ly93d3cuZmF2YmV0LmhyL1wiKSkge1xuICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9ICcvcHJvbW9jaWplL3Byb21vY2lqYS9zdHViLyc7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSAnL3Byb21vcy9wcm9tby9zdHViLyc7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGVycik7XG4gICAgICAgICAgICB9KTtcbiAgICB9XG4gICAgZnVuY3Rpb24gbG9hZFVzZXJzKHBhcmFtZXRyKSB7XG4gICAgICAgIGNvbnN0IHJlcXVlc3RzID0gW107XG4gICAgICAgIHRhYmxlRGF0YS5sZW5ndGggPSAwXG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gcGVyaW9kQW1vdW50OyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IHdlZWsgPSBpOyAvLyDQsNCx0L4g0LHRg9C00Ywt0Y/QutCwINC70L7Qs9GW0LrQsCDQtNC70Y8g0YTQvtGA0LzRg9Cy0LDQvdC90Y8g0L3QvtC80LXRgNCwINGC0LjQttC90Y9cbiAgICAgICAgICAgIGNvbnN0IHJlcSA9IHJlcXVlc3QoYC91c2Vycy8ke3dlZWt9JHtwYXJhbWV0ciA/IHBhcmFtZXRyIDogXCJcIn1gKS50aGVuKGRhdGEgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgICAgICAgICAgICAgIHRhYmxlRGF0YS5wdXNoKHsgd2VlaywgdXNlcnM6IGRhdGEgfSk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgcmVxdWVzdHMucHVzaChyZXEpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIFByb21pc2UuYWxsKHJlcXVlc3RzKVxuICAgICAgICAuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgbG9hZGluZyB1c2VyczonLCBlcnJvcik7XG4gICAgICAgIH0pO1xuICAgIH1cblxuXG4gICAgZnVuY3Rpb24gc2hvd0l0ZW1zT25TY3JvbGwoaXRlbUNsYXNzKSB7XG4gICAgICAgIGNvbnN0IEJsb2NrcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYCR7aXRlbUNsYXNzfWApO1xuICAgICAgICBpZiAoIUJsb2NrcykgcmV0dXJuXG5cbiAgICAgICAgY29uc3Qgb2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoKGVudHJpZXMsIG9ic2VydmVyKSA9PiB7XG4gICAgICAgICAgICBlbnRyaWVzLmZvckVhY2goZW50cnkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChlbnRyeS5pc0ludGVyc2VjdGluZyAmJiBlbnRyeS5pbnRlcnNlY3Rpb25SYXRpbyA+PSAwLjMpIHtcbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PntcbiAgICAgICAgICAgICAgICAgICAgICAgIEJsb2Nrcy5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0uY2xhc3NMaXN0LmFkZChcInNob3dJdGVtXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb2JzZXJ2ZXIudW5vYnNlcnZlKGl0ZW0pXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICB9LCAyMDApXG5cblxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIHRocmVzaG9sZDogMC4zXG4gICAgICAgIH0pXG4gICAgICAgIEJsb2Nrcy5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICAgICAgb2JzZXJ2ZXIub2JzZXJ2ZShpdGVtKVxuICAgICAgICB9KVxuICAgIH1cbiAgICBcbi8vc2xpZGVyXG5cbiAgICBmdW5jdGlvbiB1cGRhdGVTbGlkZXIoKSB7XG4gICAgICAgIGl0ZW1zLmZvckVhY2goKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBkaXN0YW5jZSA9IGluZGV4IC0gY3VycmVudEluZGV4O1xuICAgICAgICAgICAgY29uc3QgaXNWaXNpYmxlID0gTWF0aC5hYnMoZGlzdGFuY2UpIDw9IDEgfHwgKGluZGV4ID09PSAwICYmIGN1cnJlbnRJbmRleCA9PT0gdG90YWxJdGVtcyAtIDEpIHx8IChpbmRleCA9PT0gdG90YWxJdGVtcyAtIDEgJiYgY3VycmVudEluZGV4ID09PSAwKTtcbiAgICAgICAgICAgIGl0ZW0uY2xhc3NMaXN0LnRvZ2dsZSgnX2hpZGUtc2xpZGUnLCAhaXNWaXNpYmxlKTtcbiAgICAgICAgICAgIGl0ZW0uY2xhc3NMaXN0LnRvZ2dsZSgnX2FjdGl2ZScsIGluZGV4ID09PSBjdXJyZW50SW5kZXgpO1xuXG4gICAgICAgICAgICB1cGRhdGVSdW5lcyhjdXJyZW50SW5kZXgpXG5cbiAgICAgICAgICAgIGl0ZW0uY2xhc3NMaXN0LnJlbW92ZSgnX2xlZnQnLCAnX3JpZ2h0Jyk7XG4gICAgICAgICAgICBpZiAoZGlzdGFuY2UgPT09IDEgfHwgKGN1cnJlbnRJbmRleCA9PT0gdG90YWxJdGVtcyAtIDEgJiYgaW5kZXggPT09IDApKSB7XG4gICAgICAgICAgICAgICAgaXRlbS5jbGFzc0xpc3QuYWRkKCdfcmlnaHQnKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZGlzdGFuY2UgPT09IC0xIHx8IChjdXJyZW50SW5kZXggPT09IDAgJiYgaW5kZXggPT09IHRvdGFsSXRlbXMgLSAxKSkge1xuICAgICAgICAgICAgICAgIGl0ZW0uY2xhc3NMaXN0LmFkZCgnX2xlZnQnKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKCFpdGVtLmNsYXNzTGlzdC5jb250YWlucygnX2FjdGl2ZScpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB1cGRhdGVSdW5lcyhjdXJyZW50SW5kZXgpIHtcbiAgICAgICAgY29uc3QgcnVuZUNvdW50ID0gcnVuZXMubGVuZ3RoO1xuXG4gICAgICAgIGNvbnNvbGUubG9nKGN1cnJlbnRJbmRleCArIDEpO1xuXG4gICAgICAgIFsuLi5idXR0b25zTGVmdCwgLi4uYnV0dG9uc1JpZ2h0XS5mb3JFYWNoKGJ0biA9PiB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8PSBydW5lQ291bnQ7IGkrKykge1xuICAgICAgICAgICAgICAgIGJ0bi5jbGFzc0xpc3QucmVtb3ZlKGBfcnVuZSR7aX1gKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29uc3QgcmlnaHRSdW5lSW5kZXggPSAoY3VycmVudEluZGV4ICsgMSkgJSBydW5lQ291bnQ7XG4gICAgICAgIGNvbnN0IGxlZnRSdW5lSW5kZXggPSAoY3VycmVudEluZGV4IC0gMSArIHJ1bmVDb3VudCkgJSBydW5lQ291bnQ7XG5cbiAgICAgICAgY29uc3QgY2xhc3NSdW5lTGVmdCA9IHJ1bmVzW2xlZnRSdW5lSW5kZXhdLmdldEF0dHJpYnV0ZSgnZGF0YS1ydW5lJyk7XG4gICAgICAgIGNvbnN0IGNsYXNzUnVuZVJpZ2h0ID0gcnVuZXNbcmlnaHRSdW5lSW5kZXhdLmdldEF0dHJpYnV0ZSgnZGF0YS1ydW5lJyk7XG5cbiAgICAgICAgYnV0dG9uc0xlZnQuZm9yRWFjaChidG4gPT4gYnRuLmNsYXNzTGlzdC5hZGQoY2xhc3NSdW5lTGVmdCkpO1xuICAgICAgICBidXR0b25zUmlnaHQuZm9yRWFjaChidG4gPT4gYnRuLmNsYXNzTGlzdC5hZGQoY2xhc3NSdW5lUmlnaHQpKTtcblxuICAgICAgICBydW5lcy5mb3JFYWNoKChydW5lLCBpKSA9PiB7XG4gICAgICAgICAgICBydW5lLmNsYXNzTGlzdC5yZW1vdmUoJ19hY3RpdmUnLCAnX3JpZ2h0MScsICdfcmlnaHQyJywgJ19sZWZ0MScsICdfbGVmdDInKTtcblxuICAgICAgICAgICAgaWYgKGkgPT09IGN1cnJlbnRJbmRleCkge1xuICAgICAgICAgICAgICAgIHJ1bmUuY2xhc3NMaXN0LmFkZCgnX2FjdGl2ZScpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChpID09PSAoY3VycmVudEluZGV4ICsgMSkgJSBydW5lQ291bnQpIHtcbiAgICAgICAgICAgICAgICBydW5lLmNsYXNzTGlzdC5hZGQoJ19yaWdodDEnKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoaSA9PT0gKGN1cnJlbnRJbmRleCArIDIpICUgcnVuZUNvdW50KSB7XG4gICAgICAgICAgICAgICAgcnVuZS5jbGFzc0xpc3QuYWRkKCdfcmlnaHQyJyk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGkgPT09IChjdXJyZW50SW5kZXggLSAxICsgcnVuZUNvdW50KSAlIHJ1bmVDb3VudCkge1xuICAgICAgICAgICAgICAgIHJ1bmUuY2xhc3NMaXN0LmFkZCgnX2xlZnQxJyk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGkgPT09IChjdXJyZW50SW5kZXggLSAyICsgcnVuZUNvdW50KSAlIHJ1bmVDb3VudCkge1xuICAgICAgICAgICAgICAgIHJ1bmUuY2xhc3NMaXN0LmFkZCgnX2xlZnQyJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuXG5cbiAgICBmdW5jdGlvbiBtb3ZlU2xpZGVyKG9mZnNldCkge1xuICAgICAgICBjdXJyZW50SW5kZXggPSAoY3VycmVudEluZGV4ICsgb2Zmc2V0ICsgdG90YWxJdGVtcykgJSB0b3RhbEl0ZW1zO1xuICAgICAgICB1cGRhdGVTbGlkZXIoKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBoYW5kbGVTdGFydChldmVudCkge1xuICAgICAgICBpc0RyYWdnaW5nID0gdHJ1ZTtcbiAgICAgICAgc3RhcnRYID0gZXZlbnQuY2xpZW50WCB8fCBldmVudC50b3VjaGVzWzBdLmNsaWVudFg7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaGFuZGxlTW92ZShldmVudCkge1xuICAgICAgICBpZiAoIWlzRHJhZ2dpbmcpIHJldHVybjtcblxuICAgICAgICBjb25zdCBjdXJyZW50WCA9IGV2ZW50LmNsaWVudFggfHwgZXZlbnQudG91Y2hlc1swXS5jbGllbnRYO1xuICAgICAgICBjb25zdCBkaWZmWCA9IGN1cnJlbnRYIC0gc3RhcnRYO1xuXG4gICAgICAgIGlmIChNYXRoLmFicyhkaWZmWCkgPiA1MCkge1xuICAgICAgICAgICAgbW92ZVNsaWRlcihkaWZmWCA+IDAgPyAtMSA6IDEpO1xuICAgICAgICAgICAgaXNEcmFnZ2luZyA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaGFuZGxlRW5kKCkge1xuICAgICAgICBpc0RyYWdnaW5nID0gZmFsc2U7XG4gICAgfVxuXG4gICAgYnV0dG9uc0xlZnQuZm9yRWFjaChidG4gID0+IHtcbiAgICAgICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgbW92ZVNsaWRlcigtMSk7XG4gICAgICAgICAgICBidG4uc3R5bGUucG9pbnRlckV2ZW50cyA9ICdub25lJztcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4geyBidG4uc3R5bGUucG9pbnRlckV2ZW50cyA9ICdpbml0aWFsJzsgfSwgMTAwMCk7XG4gICAgICAgIH0pXG4gICAgfSlcbiAgICBidXR0b25zUmlnaHQuZm9yRWFjaChidG4gID0+IHtcbiAgICAgICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgbW92ZVNsaWRlcigxKTtcbiAgICAgICAgICAgIGJ0bi5zdHlsZS5wb2ludGVyRXZlbnRzID0gJ25vbmUnO1xuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7IGJ0bi5zdHlsZS5wb2ludGVyRXZlbnRzID0gJ2luaXRpYWwnOyB9LCAxMDAwKTtcbiAgICAgICAgfSlcbiAgICB9KVxuXG4gICAgc2xpZGVyLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIGhhbmRsZVN0YXJ0KTtcbiAgICBzbGlkZXIuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIGhhbmRsZVN0YXJ0KTtcblxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIGhhbmRsZU1vdmUpO1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIGhhbmRsZU1vdmUpO1xuXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIGhhbmRsZUVuZCk7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCBoYW5kbGVFbmQpO1xuXG4vL3NsaWRlclxuICAgIC8vIGxvYWRUcmFuc2xhdGlvbnMoKVxuICAgIC8vICAgICAudGhlbihpbml0KSAvLyDQt9Cw0L/Rg9GB0Log0ZbQvdGW0YLRgyDRgdGC0L7RgNGW0L3QutC4XG4gICAgaW5pdCgpXG5cbn0pKCk7XG4iXX0=
