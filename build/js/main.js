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
  var _Number;
  var apiURL = 'https://fav-prom.com/api_click_cast_win';
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
  var periodAmount = 1; // кількість періодів в акції, треба для кешування інфи з табли

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
    buttonsRight = document.querySelectorAll('.predict__move-right'),
    makeChoseBtn = document.querySelector('.predict__btn'),
    lastPredict = document.querySelector('.predict__last-text-item');
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

  // let locale = "en"
  var locale = sessionStorage.getItem("locale") || "uk";
  if (ukLeng) locale = 'uk';
  if (enLeng) locale = 'en';
  var debug = false;
  if (debug) hideLoader();
  var i18nData = {};
  var translateState = true;
  // let userId = null;
  var userId = (_Number = Number(sessionStorage.getItem("userId"))) !== null && _Number !== void 0 ? _Number : null;

  // userId = 100300268

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
      //
      // reportError(err);
      //
      // document.querySelector('.fav-page').style.display = 'none';
      // if (window.location.href.startsWith("https://www.favbet.hr/")) {
      //     window.location.href = '/promocije/promocija/stub/';
      // } else {
      //     window.location.href = '/promos/promo/stub/';
      // }

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
              checkUserAuth().then(loadUsers).then(function () {
                setTimeout(hideLoader, 1000);
                document.querySelectorAll(".table__tabs-item").forEach(function (tab, i) {
                  tab.classList.remove('active');
                  if (i === activeWeek - 1) tab.classList.add('active');
                });
                // renderUsers(activeWeek, tableData);
                participateBtns.forEach(function (btn) {
                  return btn.addEventListener('click', participate);
                });
                lastPredict.textContent = translateKey("lastPredict") + " " + translateKey("tableTeam12");
                updateSlider();
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
                makeChoseBtn.addEventListener('click', function () {
                  this.removeAttribute('data-popup');
                  this.setAttribute('data-popup', "predict".concat(currentIndex + 1));
                  var dataPopup = this.getAttribute('data-popup');
                  openPopupByAttr(dataPopup);
                });
                document.querySelector('.popups').addEventListener('click', function (e) {
                  var openPopupEl = document.querySelector('.popup.active');
                  var isInside = openPopupEl ? openPopupEl.contains(e.target) : false;
                  if (openPopupEl && !isInside) {
                    closeAllPopups();
                  }
                });
              });
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

  // function openPopupByAttr(popupAttr) {
  //     const allPopups = document.querySelectorAll('.popup');
  //     allPopups.forEach(p => p.classList.remove('active'));
  //     document.body.style.overflow = 'hidden';
  //
  //     console.log(popupAttr);
  //
  //     const targetPopup = document.querySelector(`.popup[data-popup="${popupAttr}"]`);
  //     if (targetPopup) {
  //         targetPopup.classList.add('active');
  //         document.querySelector('.popups').classList.remove('opacity');
  //     }
  // }

  function loadTranslations() {
    return request("/new-translates/".concat(locale)).then(function (json) {
      i18nData = json;
      translate();
      // const mutationObserver = new MutationObserver(function (mutations) {
      //     mutationObserver.disconnect();
      //     translate();
      //     mutationObserver.observe(targetNode, { childList: true, subtree: true });
      // });
      // mutationObserver.observe(document.getElementById("hardcoreTennis"), {
      //     childList: true,
      //     subtree: true
      // });
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
    refreshLocalizedClass(mainPage, '');
  }
  function refreshLocalizedClass(element, baseCssClass) {
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
      var req = request("/users").then(function (data) {
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
  loadTranslations().then(init); // запуск ініту сторінки

  //
  // /// test

  document.addEventListener("DOMContentLoaded", function () {
    var _document$querySelect;
    (_document$querySelect = document.querySelector(".menu-btn")) === null || _document$querySelect === void 0 ? void 0 : _document$querySelect.addEventListener("click", function () {
      var _document$querySelect2;
      (_document$querySelect2 = document.querySelector(".menu-test")) === null || _document$querySelect2 === void 0 ? void 0 : _document$querySelect2.classList.toggle("hide");
    });
  });
  var lngBtn = document.querySelector(".lng-btn");
  lngBtn.addEventListener("click", function () {
    if (sessionStorage.getItem("locale")) {
      sessionStorage.removeItem("locale");
    } else {
      sessionStorage.setItem("locale", "en");
    }
    window.location.reload();
  });
  var authBtn = document.querySelector(".auth-btn");
  authBtn.addEventListener("click", function () {
    if (userId) {
      sessionStorage.removeItem("userId");
    } else {
      sessionStorage.setItem("userId", "100300268");
    }
    window.location.reload();
  });
  var popupsMenu = document.querySelector(".popups-btn");
  popupsMenu.addEventListener("click", function () {
    document.querySelector(".menu-popup").classList.toggle("hide");
  });
})();

// після тесту видали цю функцію і розкоменти аналогічну в функції виклику
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsiYXBpVVJMIiwiZ2V0QWN0aXZlV2VlayIsInByb21vU3RhcnREYXRlIiwid2Vla0R1cmF0aW9uIiwiY3VycmVudERhdGUiLCJEYXRlIiwid2Vla0RhdGVzIiwiRGF5IiwiV2VlayIsImZvcm1hdERhdGUiLCJkYXRlIiwiZ2V0RGF0ZSIsInRvU3RyaW5nIiwicGFkU3RhcnQiLCJnZXRNb250aCIsImNhbGN1bGF0ZVdlZWtQZXJpb2QiLCJ3ZWVrSW5kZXgiLCJiYXNlU3RhcnQiLCJnZXRUaW1lIiwic3RhcnQiLCJlbmQiLCJhY3RpdmVXZWVrSW5kZXgiLCJpIiwiaXNWZXJpZmllZFVzZXIiLCJwZXJpb2RBbW91bnQiLCJ0YWJsZURhdGEiLCJhY3RpdmVXZWVrIiwiY3VycmVudEluZGV4Iiwic3RhcnRYIiwiaXNEcmFnZ2luZyIsIm1haW5QYWdlIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwidW5hdXRoTXNncyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJwYXJ0aWNpcGF0ZUJ0bnMiLCJyZWRpcmVjdEJ0bnMiLCJsb2FkZXIiLCJkZXRhaWxzUG9wdXBCdG4iLCJydWxlc1BvcHVwQnRuIiwic2xpZGVyIiwiaXRlbXMiLCJ0b3RhbEl0ZW1zIiwibGVuZ3RoIiwicnVuZXMiLCJidXR0b25zTGVmdCIsImJ1dHRvbnNSaWdodCIsIm1ha2VDaG9zZUJ0biIsImxhc3RQcmVkaWN0IiwidWtMZW5nIiwiZW5MZW5nIiwidG9nZ2xlQ2xhc3NlcyIsImVsZW1lbnRzIiwiY2xhc3NOYW1lIiwiZm9yRWFjaCIsImVsIiwiY2xhc3NMaXN0IiwidG9nZ2xlIiwidG9nZ2xlVHJhbnNsYXRlcyIsImRhdGFBdHRyIiwic2V0QXR0cmlidXRlIiwiaW5uZXJIVE1MIiwiaTE4bkRhdGEiLCJyZW1vdmVBdHRyaWJ1dGUiLCJsb2FkZXJCdG4iLCJsb2NhbGUiLCJzZXNzaW9uU3RvcmFnZSIsImdldEl0ZW0iLCJkZWJ1ZyIsImhpZGVMb2FkZXIiLCJ0cmFuc2xhdGVTdGF0ZSIsInVzZXJJZCIsIk51bWJlciIsInJlcXVlc3QiLCJsaW5rIiwiZXh0cmFPcHRpb25zIiwiZmV0Y2giLCJoZWFkZXJzIiwidGhlbiIsInJlcyIsIm9rIiwiRXJyb3IiLCJqc29uIiwiZXJyIiwiY29uc29sZSIsImVycm9yIiwiUHJvbWlzZSIsInJlamVjdCIsImFkZCIsImJvZHkiLCJzdHlsZSIsIm92ZXJmbG93IiwicmVtb3ZlIiwiaW5pdCIsInRyeURldGVjdFVzZXJJZCIsInF1aWNrQ2hlY2tBbmRSZW5kZXIiLCJjaGVja1VzZXJBdXRoIiwibG9hZFVzZXJzIiwic2V0VGltZW91dCIsInRhYiIsImJ0biIsImFkZEV2ZW50TGlzdGVuZXIiLCJwYXJ0aWNpcGF0ZSIsInRleHRDb250ZW50IiwidHJhbnNsYXRlS2V5IiwidXBkYXRlU2xpZGVyIiwic2hvd0l0ZW1zT25TY3JvbGwiLCJjbG9zZUJ0biIsImNsb3NlQWxsUG9wdXBzIiwicG9wdXBBdHRyIiwiZ2V0QXR0cmlidXRlIiwib3BlblBvcHVwQnlBdHRyIiwiZGF0YVBvcHVwIiwiZSIsIm9wZW5Qb3B1cEVsIiwiaXNJbnNpZGUiLCJjb250YWlucyIsInRhcmdldCIsIndpbmRvdyIsInN0b3JlIiwic3RhdGUiLCJnZXRTdGF0ZSIsImF1dGgiLCJpc0F1dGhvcml6ZWQiLCJpZCIsImdfdXNlcl9pZCIsImF0dGVtcHRzIiwibWF4QXR0ZW1wdHMiLCJhdHRlbXB0SW50ZXJ2YWwiLCJ3YWl0Rm9yVXNlcklkIiwicmVzb2x2ZSIsImludGVydmFsIiwic2V0SW50ZXJ2YWwiLCJjbGVhckludGVydmFsIiwicCIsImxvYWRUcmFuc2xhdGlvbnMiLCJ0cmFuc2xhdGUiLCJsb2ciLCJ1bmF1dGhNZXMiLCJ1c2VyaWQiLCJpdGVtIiwicmVkaXJlY3RCdG4iLCJwYXJ0aWNpcGF0ZUJ0biIsInJlcG9ydEVycm9yIiwicmVwb3J0RGF0YSIsIm9yaWdpbiIsImxvY2F0aW9uIiwiaHJlZiIsImVycm9yVGV4dCIsInRleHQiLCJtZXNzYWdlIiwidHlwZSIsIm5hbWUiLCJzdGFjayIsIm1ldGhvZCIsIkpTT04iLCJzdHJpbmdpZnkiLCJ3YXJuIiwiZWxlbXMiLCJlbGVtIiwia2V5IiwicmVmcmVzaExvY2FsaXplZENsYXNzIiwiZWxlbWVudCIsImJhc2VDc3NDbGFzcyIsImxhbmciLCJyZW5kZXJVc2VycyIsIndlZWtOdW0iLCJ1c2VyRGF0YSIsImZpbmQiLCJ3ZWVrIiwidXNlcnMiLCJjdXJyZW50VXNlciIsInVzZXIiLCJwb2ludHMiLCJwb3B1bGF0ZVVzZXJzVGFibGUiLCJjdXJyZW50VXNlcklkIiwicmVzdWx0c1RhYmxlIiwicmVzdWx0c1RhYmxlT3RoZXIiLCJpc1RvcEN1cnJlbnRVc2VyIiwic2xpY2UiLCJzb21lIiwidG9wVXNlcnNMZW5ndGgiLCJ0b3BVc2VycyIsImRpc3BsYXlVc2VyIiwiaXNDdXJyZW50VXNlciIsInRhYmxlIiwicmVuZGVyUm93Iiwib3B0aW9ucyIsImhpZ2hsaWdodCIsIm5laWdoYm9yIiwidXNlclJvdyIsImNyZWF0ZUVsZW1lbnQiLCJ1c2VyUGxhY2UiLCJpbmRleE9mIiwicHJpemVLZXkiLCJnZXRQcml6ZVRyYW5zbGF0aW9uS2V5IiwibWFza1VzZXJJZCIsInRvRml4ZWQiLCJhcHBlbmQiLCJpbmRleCIsImRlZmF1bHRWYWx1ZSIsIm5lZWRLZXkiLCJwbGFjZSIsInBhcmFtcyIsImRpc3BsYXkiLCJzdGFydHNXaXRoIiwicGFyYW1ldHIiLCJyZXF1ZXN0cyIsInJlcSIsImRhdGEiLCJwdXNoIiwiYWxsIiwiaXRlbUNsYXNzIiwiQmxvY2tzIiwib2JzZXJ2ZXIiLCJJbnRlcnNlY3Rpb25PYnNlcnZlciIsImVudHJpZXMiLCJlbnRyeSIsImlzSW50ZXJzZWN0aW5nIiwiaW50ZXJzZWN0aW9uUmF0aW8iLCJ1bm9ic2VydmUiLCJ0aHJlc2hvbGQiLCJvYnNlcnZlIiwiZGlzdGFuY2UiLCJpc1Zpc2libGUiLCJNYXRoIiwiYWJzIiwidXBkYXRlUnVuZXMiLCJydW5lQ291bnQiLCJyaWdodFJ1bmVJbmRleCIsImxlZnRSdW5lSW5kZXgiLCJjbGFzc1J1bmVMZWZ0IiwiY2xhc3NSdW5lUmlnaHQiLCJydW5lIiwibW92ZVNsaWRlciIsIm9mZnNldCIsImhhbmRsZVN0YXJ0IiwiZXZlbnQiLCJjbGllbnRYIiwidG91Y2hlcyIsImhhbmRsZU1vdmUiLCJjdXJyZW50WCIsImRpZmZYIiwiaGFuZGxlRW5kIiwicG9pbnRlckV2ZW50cyIsImxuZ0J0biIsInJlbW92ZUl0ZW0iLCJzZXRJdGVtIiwicmVsb2FkIiwiYXV0aEJ0biIsInBvcHVwc01lbnUiLCJhbGxQb3B1cHMiLCJ0YXJnZXRQb3B1cCJdLCJtYXBwaW5ncyI6Ijs7OytDQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBLENBQUMsWUFBWTtFQUFBO0VBRVQsSUFBTUEsTUFBTSxHQUFHLHlDQUF5QztFQUV4RCxJQUFNQyxhQUFhLEdBQUcsU0FBaEJBLGFBQWEsQ0FBSUMsY0FBYyxFQUFFQyxZQUFZLEVBQUs7SUFDcEQsSUFBTUMsV0FBVyxHQUFHLElBQUlDLElBQUksRUFBRTtJQUM5QixJQUFJQyxTQUFTLEdBQUcsRUFBRTtJQUVsQixJQUFNQyxHQUFHLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsSUFBSTtJQUMvQixJQUFNQyxJQUFJLEdBQUdMLFlBQVksR0FBR0ksR0FBRztJQUUvQixJQUFNRSxVQUFVLEdBQUcsU0FBYkEsVUFBVSxDQUFJQyxJQUFJO01BQUEsaUJBQ2pCQSxJQUFJLENBQUNDLE9BQU8sRUFBRSxDQUFDQyxRQUFRLEVBQUUsQ0FBQ0MsUUFBUSxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsY0FBSSxDQUFDSCxJQUFJLENBQUNJLFFBQVEsRUFBRSxHQUFHLENBQUMsRUFBRUYsUUFBUSxFQUFFLENBQUNDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDO0lBQUEsQ0FBRTtJQUV4RyxJQUFNRSxtQkFBbUIsR0FBRyxTQUF0QkEsbUJBQW1CLENB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QUNySixnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsWUFBTTtJQUN2Q3RFLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLGFBQWEsQ0FBQyxDQUFDd0IsU0FBUyxDQUFDQyxNQUFNLENBQUMsTUFBTSxDQUFDO0VBQ2xFLENBQUMsQ0FBQztBQUdOLENBQUMsR0FBRzs7QUFFSjtBQUNBLFNBQVNzRCxlQUFlLENBQUNGLFNBQVMsRUFBRTtFQUNoQyxJQUFNOEksU0FBUyxHQUFHNU4sUUFBUSxDQUFDRyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUM7RUFDckR5TixTQUFTLENBQUNyTSxPQUFPLENBQUMsVUFBQWdGLENBQUM7SUFBQSxPQUFJQSxDQUFDLENBQUM5RSxTQUFTLENBQUNvQyxNQUFNLENBQUMsUUFBUSxDQUFDO0VBQUEsRUFBQztFQUNwRDdELFFBQVEsQ0FBQzBELElBQUksQ0FBQ0MsS0FBSyxDQUFDQyxRQUFRLEdBQUcsUUFBUTtFQUV2Q1AsT0FBTyxDQUFDcUQsR0FBRyxDQUFDNUIsU0FBUyxDQUFDO0VBRXRCLElBQU0rSSxXQUFXLEdBQUc3TixRQUFRLENBQUNDLGFBQWEsK0JBQXVCNkUsU0FBUyxTQUFLO0VBQy9FLElBQUkrSSxXQUFXLEVBQUU7SUFDYkEsV0FBVyxDQUFDcE0sU0FBUyxDQUFDZ0MsR0FBRyxDQUFDLFFBQVEsQ0FBQztJQUNuQ3pELFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLFNBQVMsQ0FBQyxDQUFDd0IsU0FBUyxDQUFDb0MsTUFBTSxDQUFDLFNBQVMsQ0FBQztFQUNqRTtBQUNKIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gKCkge1xuXG4gICAgY29uc3QgYXBpVVJMID0gJ2h0dHBzOi8vZmF2LXByb20uY29tL2FwaV9jbGlja19jYXN0X3dpbidcblxuICAgIGNvbnN0IGdldEFjdGl2ZVdlZWsgPSAocHJvbW9TdGFydERhdGUsIHdlZWtEdXJhdGlvbikgPT4ge1xuICAgICAgICBjb25zdCBjdXJyZW50RGF0ZSA9IG5ldyBEYXRlKCk7XG4gICAgICAgIGxldCB3ZWVrRGF0ZXMgPSBbXTtcblxuICAgICAgICBjb25zdCBEYXkgPSAyNCAqIDYwICogNjAgKiAxMDAwO1xuICAgICAgICBjb25zdCBXZWVrID0gd2Vla0R1cmF0aW9uICogRGF5O1xuXG4gICAgICAgIGNvbnN0IGZvcm1hdERhdGUgPSAoZGF0ZSkgPT5cbiAgICAgICAgICAgIGAke2RhdGUuZ2V0RGF0ZSgpLnRvU3RyaW5nKCkucGFkU3RhcnQoMiwgXCIwXCIpfS4keyhkYXRlLmdldE1vbnRoKCkgKyAxKS50b1N0cmluZygpLnBhZFN0YXJ0KDIsIFwiMFwiKX1gO1xuXG4gICAgICAgIGNvbnN0IGNhbGN1bGF0ZVdlZWtQZXJpb2QgPSAod2Vla0luZGV4KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBiYXNlU3RhcnQgPSBwcm9tb1N0YXJ0RGF0ZS5nZXRUaW1lKCk7XG4gICAgICAgICAgICBjb25zdCBzdGFydCA9IG5ldyBEYXRlKGJhc2VTdGFydCArIHdlZWtJbmRleCAqIFdlZWspO1xuICAgICAgICAgICAgbGV0IGVuZCA9IG5ldyBEYXRlKHN0YXJ0LmdldFRpbWUoKSArICh3ZWVrRHVyYXRpb24gKiBEYXkgLSAxKSk7XG4gICAgICAgICAgICByZXR1cm4geyBzdGFydCwgZW5kIH07XG4gICAgICAgIH07XG5cbiAgICAgICAgbGV0IGFjdGl2ZVdlZWtJbmRleCA9IG51bGw7XG5cbiAgICAgICAgLy8g0J/QtdGA0LXQstGW0YDQutCwINC/0L7RgtC+0YfQvdC+0LPQviDRgtC40LbQvdGPXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkrKykgeyAvLyDQntCx0LzQtdC20YPRlNC80L4gMTAg0YLQuNC20L3Rj9C80LggKNGP0LrRidC+INC/0L7RgtGA0ZbQsdC90L4g0LHRltC70YzRiNC1LCDQv9GA0L7RgdGC0L4g0LfQvNGW0L3RltGC0Ywg0LvRltGH0LjQu9GM0L3QuNC6KVxuICAgICAgICAgICAgY29uc3QgeyBzdGFydCwgZW5kIH0gPSBjYWxjdWxhdGVXZWVrUGVyaW9kKGkpO1xuICAgICAgICAgICAgaWYgKGN1cnJlbnREYXRlID49IHN0YXJ0ICYmIGN1cnJlbnREYXRlIDw9IGVuZCkge1xuICAgICAgICAgICAgICAgIGFjdGl2ZVdlZWtJbmRleCA9IGkgKyAxO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGFjdGl2ZVdlZWtJbmRleDtcbiAgICB9O1xuXG4gICAgY29uc3QgcHJvbW9TdGFydERhdGUgPSBuZXcgRGF0ZShcIjIwMjUtMDUtMDVUMDA6MDA6MDBcIik7XG4gICAgY29uc3Qgd2Vla0R1cmF0aW9uID0gMTA7XG5cbiAgICBsZXQgaXNWZXJpZmllZFVzZXIgPSBmYWxzZTtcblxuICAgIGxldCBwZXJpb2RBbW91bnQgPSAxIC8vINC60ZbQu9GM0LrRltGB0YLRjCDQv9C10YDRltC+0LTRltCyINCyINCw0LrRhtGW0ZcsINGC0YDQtdCx0LAg0LTQu9GPINC60LXRiNGD0LLQsNC90L3RjyDRltC90YTQuCDQtyDRgtCw0LHQu9C4XG5cbiAgICBsZXQgdGFibGVEYXRhID0gW11cbiAgICBsZXQgYWN0aXZlV2VlayA9IGdldEFjdGl2ZVdlZWsocHJvbW9TdGFydERhdGUsIHdlZWtEdXJhdGlvbikgfHwgMTtcbiAgICAvLyBsZXQgYWN0aXZlV2VlayA9IDJcblxuICAgIGlmIChhY3RpdmVXZWVrID4gMikgYWN0aXZlV2VlayA9IDJcblxuICAgIGxldCBjdXJyZW50SW5kZXggPSA0O1xuICAgIGxldCBzdGFydFggPSAwO1xuICAgIGxldCBpc0RyYWdnaW5nID0gZmFsc2U7XG5cbiAgICBjb25zdCBtYWluUGFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZmF2LXBhZ2VcIiksXG4gICAgICAgIHVuYXV0aE1zZ3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudW5hdXRoLW1zZycpLFxuICAgICAgICBwYXJ0aWNpcGF0ZUJ0bnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucGFydC1idG4nKSxcbiAgICAgICAgcmVkaXJlY3RCdG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnBsYXktYnRuJyksXG4gICAgICAgIGxvYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc3Bpbm5lci1vdmVybGF5XCIpLFxuICAgICAgICBkZXRhaWxzUG9wdXBCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmluZm9fX2RldGFpbHNcIiksXG4gICAgICAgIHJ1bGVzUG9wdXBCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhYmxlX19wb3B1cC1idG5cIiksXG4gICAgICAgIHNsaWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXJkcycpLFxuICAgICAgICBpdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jYXJkJyksXG4gICAgICAgIHRvdGFsSXRlbXMgPSBpdGVtcy5sZW5ndGgsXG4gICAgICAgIHJ1bmVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnByZWRpY3RfX3J1bmVzLWl0ZW0nKSxcbiAgICAgICAgYnV0dG9uc0xlZnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucHJlZGljdF9fbW92ZS1sZWZ0JyksXG4gICAgICAgIGJ1dHRvbnNSaWdodCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wcmVkaWN0X19tb3ZlLXJpZ2h0JyksXG4gICAgICAgIG1ha2VDaG9zZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcmVkaWN0X19idG4nKSxcbiAgICAgICAgbGFzdFByZWRpY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJlZGljdF9fbGFzdC10ZXh0LWl0ZW0nKVxuXG5cbiAgICBjb25zdCB1a0xlbmcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdWtMZW5nJyk7XG4gICAgY29uc3QgZW5MZW5nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2VuTGVuZycpO1xuXG4gICAgY29uc3QgdG9nZ2xlQ2xhc3NlcyA9IChlbGVtZW50cywgY2xhc3NOYW1lKSA9PiBlbGVtZW50cy5mb3JFYWNoKGVsID0+IGVsLmNsYXNzTGlzdC50b2dnbGUoYCR7Y2xhc3NOYW1lfWApKTtcbiAgICBjb25zdCB0b2dnbGVUcmFuc2xhdGVzID0gKGVsZW1lbnRzLCBkYXRhQXR0cikgPT4gZWxlbWVudHMuZm9yRWFjaChlbCA9PiB7XG4gICAgICAgIGVsLnNldEF0dHJpYnV0ZSgnZGF0YS10cmFuc2xhdGUnLCBgJHtkYXRhQXR0cn1gKVxuICAgICAgICBlbC5pbm5lckhUTUwgPSBpMThuRGF0YVtkYXRhQXR0cl0gfHwgJyotLS0tTkVFRCBUTyBCRSBUUkFOU0xBVEVELS0tLSogICBrZXk6ICAnICsgZGF0YUF0dHI7XG4gICAgICAgIGVsLnJlbW92ZUF0dHJpYnV0ZSgnZGF0YS10cmFuc2xhdGUnKTtcbiAgICB9KTtcblxuICAgIGxldCBsb2FkZXJCdG4gPSBmYWxzZVxuXG4gICAgLy8gbGV0IGxvY2FsZSA9IFwiZW5cIlxuICAgIGxldCBsb2NhbGUgPSBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKFwibG9jYWxlXCIpIHx8IFwidWtcIlxuXG4gICAgaWYgKHVrTGVuZykgbG9jYWxlID0gJ3VrJztcbiAgICBpZiAoZW5MZW5nKSBsb2NhbGUgPSAnZW4nO1xuXG4gICAgbGV0IGRlYnVnID0gZmFsc2VcblxuICAgIGlmIChkZWJ1ZykgaGlkZUxvYWRlcigpXG5cbiAgICBsZXQgaTE4bkRhdGEgPSB7fTtcbiAgICBjb25zdCB0cmFuc2xhdGVTdGF0ZSA9IHRydWU7XG4gICAgLy8gbGV0IHVzZXJJZCA9IG51bGw7XG4gICAgbGV0IHVzZXJJZCA9IE51bWJlcihzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKFwidXNlcklkXCIpKSA/PyBudWxsXG5cbiAgICAvLyB1c2VySWQgPSAxMDAzMDAyNjhcblxuICAgIGNvbnN0IHJlcXVlc3QgPSBmdW5jdGlvbiAobGluaywgZXh0cmFPcHRpb25zKSB7XG4gICAgICAgIHJldHVybiBmZXRjaChhcGlVUkwgKyBsaW5rLCB7XG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgJ0FjY2VwdCc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgLi4uKGV4dHJhT3B0aW9ucyB8fCB7fSlcbiAgICAgICAgfSlcbiAgICAgICAgICAgIC50aGVuKHJlcyA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKCFyZXMub2spIHRocm93IG5ldyBFcnJvcignQVBJIGVycm9yJyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlcy5qc29uKCk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKGVyciA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignQVBJIHJlcXVlc3QgZmFpbGVkOicsIGVycik7XG4gICAgICAgICAgICAgICAgLy9cbiAgICAgICAgICAgICAgICAvLyByZXBvcnRFcnJvcihlcnIpO1xuICAgICAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAgICAgLy8gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZhdi1wYWdlJykuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgICAgICAgICAvLyBpZiAod2luZG93LmxvY2F0aW9uLmhyZWYuc3RhcnRzV2l0aChcImh0dHBzOi8vd3d3LmZhdmJldC5oci9cIikpIHtcbiAgICAgICAgICAgICAgICAvLyAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSAnL3Byb21vY2lqZS9wcm9tb2NpamEvc3R1Yi8nO1xuICAgICAgICAgICAgICAgIC8vIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gJy9wcm9tb3MvcHJvbW8vc3R1Yi8nO1xuICAgICAgICAgICAgICAgIC8vIH1cblxuICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChlcnIpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBoaWRlTG9hZGVyKCl7XG4gICAgICAgIGxvYWRlci5jbGFzc0xpc3QuYWRkKFwiaGlkZVwiKVxuICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gXCJhdXRvXCJcbiAgICAgICAgbWFpblBhZ2UuY2xhc3NMaXN0LnJlbW92ZShcImxvYWRpbmdcIilcbiAgICB9XG5cbiAgICBhc3luYyBmdW5jdGlvbiBpbml0KCkge1xuICAgICAgICBsZXQgYXR0ZW1wdHMgPSAwO1xuICAgICAgICBjb25zdCBtYXhBdHRlbXB0cyA9IDIwO1xuICAgICAgICBjb25zdCBhdHRlbXB0SW50ZXJ2YWwgPSA1MDtcblxuICAgICAgICBmdW5jdGlvbiB0cnlEZXRlY3RVc2VySWQoKSB7XG4gICAgICAgICAgICBpZiAod2luZG93LnN0b3JlKSB7XG4gICAgICAgICAgICAgICAgY29uc3Qgc3RhdGUgPSB3aW5kb3cuc3RvcmUuZ2V0U3RhdGUoKTtcbiAgICAgICAgICAgICAgICB1c2VySWQgPSBzdGF0ZS5hdXRoLmlzQXV0aG9yaXplZCAmJiBzdGF0ZS5hdXRoLmlkIHx8ICcnO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh3aW5kb3cuZ191c2VyX2lkKSB7XG4gICAgICAgICAgICAgICAgdXNlcklkID0gd2luZG93LmdfdXNlcl9pZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG5cblxuICAgICAgICBmdW5jdGlvbiBxdWlja0NoZWNrQW5kUmVuZGVyKCkge1xuICAgICAgICAgICAgY2hlY2tVc2VyQXV0aCgpXG4gICAgICAgICAgICAgICAgLnRoZW4obG9hZFVzZXJzKVxuICAgICAgICAgICAgICAgIC50aGVuKCgpID0+e1xuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGhpZGVMb2FkZXIsIDEwMDApO1xuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnRhYmxlX190YWJzLWl0ZW1cIikuZm9yRWFjaCgodGFiLCBpKSA9PntcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhYi5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKGkgPT09IGFjdGl2ZVdlZWsgLSAxKSB0YWIuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIC8vIHJlbmRlclVzZXJzKGFjdGl2ZVdlZWssIHRhYmxlRGF0YSk7XG4gICAgICAgICAgICAgICAgICAgIHBhcnRpY2lwYXRlQnRucy5mb3JFYWNoKGJ0biA9PiBidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBwYXJ0aWNpcGF0ZSkpO1xuXG4gICAgICAgICAgICAgICAgICAgIGxhc3RQcmVkaWN0LnRleHRDb250ZW50ID0gdHJhbnNsYXRlS2V5KFwibGFzdFByZWRpY3RcIikrIFwiIFwiICsgdHJhbnNsYXRlS2V5KFwidGFibGVUZWFtMTJcIilcblxuICAgICAgICAgICAgICAgICAgICB1cGRhdGVTbGlkZXIoKTtcblxuICAgICAgICAgICAgICAgICAgICBzaG93SXRlbXNPblNjcm9sbChcIi5zbW9rZV9fYW5pbWFsXCIpXG5cbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnBvcHVwX19jbG9zZScpLmZvckVhY2goY2xvc2VCdG4gPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2xvc2VCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbG9zZUFsbFBvcHVwcyk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5vcGVuLWJ0bicpLmZvckVhY2goYnRuID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwb3B1cEF0dHIgPSBidG4uZ2V0QXR0cmlidXRlKCdkYXRhLXBvcHVwJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3BlblBvcHVwQnlBdHRyKHBvcHVwQXR0cik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgbWFrZUNob3NlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCl7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlbW92ZUF0dHJpYnV0ZSgnZGF0YS1wb3B1cCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRBdHRyaWJ1dGUoJ2RhdGEtcG9wdXAnLCBgcHJlZGljdCR7Y3VycmVudEluZGV4ICsgMX1gKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZGF0YVBvcHVwID0gdGhpcy5nZXRBdHRyaWJ1dGUoJ2RhdGEtcG9wdXAnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgb3BlblBvcHVwQnlBdHRyKGRhdGFQb3B1cCk7XG5cbiAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvcHVwcycpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG9wZW5Qb3B1cEVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvcHVwLmFjdGl2ZScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgaXNJbnNpZGUgPSBvcGVuUG9wdXBFbCA/IG9wZW5Qb3B1cEVsLmNvbnRhaW5zKGUudGFyZ2V0KSA6IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG9wZW5Qb3B1cEVsICYmICFpc0luc2lkZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsb3NlQWxsUG9wdXBzKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICBjb25zdCB3YWl0Rm9yVXNlcklkID0gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRyeURldGVjdFVzZXJJZCgpO1xuICAgICAgICAgICAgICAgIGlmICh1c2VySWQgfHwgYXR0ZW1wdHMgPj0gbWF4QXR0ZW1wdHMpIHtcbiAgICAgICAgICAgICAgICAgICAgcXVpY2tDaGVja0FuZFJlbmRlcigpO1xuICAgICAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKGludGVydmFsKTtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBhdHRlbXB0cysrO1xuICAgICAgICAgICAgfSwgYXR0ZW1wdEludGVydmFsKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgYXdhaXQgd2FpdEZvclVzZXJJZDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjbG9zZUFsbFBvcHVwcygpIHtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnBvcHVwJykuZm9yRWFjaChwID0+IHAuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJykpO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG9wdXBzJykuY2xhc3NMaXN0LmFkZCgnb3BhY2l0eScpO1xuICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gJ2F1dG8nO1xuICAgIH1cblxuICAgIC8vIGZ1bmN0aW9uIG9wZW5Qb3B1cEJ5QXR0cihwb3B1cEF0dHIpIHtcbiAgICAvLyAgICAgY29uc3QgYWxsUG9wdXBzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnBvcHVwJyk7XG4gICAgLy8gICAgIGFsbFBvcHVwcy5mb3JFYWNoKHAgPT4gcC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKSk7XG4gICAgLy8gICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSAnaGlkZGVuJztcbiAgICAvL1xuICAgIC8vICAgICBjb25zb2xlLmxvZyhwb3B1cEF0dHIpO1xuICAgIC8vXG4gICAgLy8gICAgIGNvbnN0IHRhcmdldFBvcHVwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLnBvcHVwW2RhdGEtcG9wdXA9XCIke3BvcHVwQXR0cn1cIl1gKTtcbiAgICAvLyAgICAgaWYgKHRhcmdldFBvcHVwKSB7XG4gICAgLy8gICAgICAgICB0YXJnZXRQb3B1cC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICAvLyAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3B1cHMnKS5jbGFzc0xpc3QucmVtb3ZlKCdvcGFjaXR5Jyk7XG4gICAgLy8gICAgIH1cbiAgICAvLyB9XG5cbiAgICBmdW5jdGlvbiBsb2FkVHJhbnNsYXRpb25zKCkge1xuICAgICAgICByZXR1cm4gcmVxdWVzdChgL25ldy10cmFuc2xhdGVzLyR7bG9jYWxlfWApXG4gICAgICAgICAgICAudGhlbihqc29uID0+IHtcbiAgICAgICAgICAgICAgICBpMThuRGF0YSA9IGpzb247XG4gICAgICAgICAgICAgICAgdHJhbnNsYXRlKCk7XG4gICAgICAgICAgICAgICAgLy8gY29uc3QgbXV0YXRpb25PYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKGZ1bmN0aW9uIChtdXRhdGlvbnMpIHtcbiAgICAgICAgICAgICAgICAvLyAgICAgbXV0YXRpb25PYnNlcnZlci5kaXNjb25uZWN0KCk7XG4gICAgICAgICAgICAgICAgLy8gICAgIHRyYW5zbGF0ZSgpO1xuICAgICAgICAgICAgICAgIC8vICAgICBtdXRhdGlvbk9ic2VydmVyLm9ic2VydmUodGFyZ2V0Tm9kZSwgeyBjaGlsZExpc3Q6IHRydWUsIHN1YnRyZWU6IHRydWUgfSk7XG4gICAgICAgICAgICAgICAgLy8gfSk7XG4gICAgICAgICAgICAgICAgLy8gbXV0YXRpb25PYnNlcnZlci5vYnNlcnZlKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaGFyZGNvcmVUZW5uaXNcIiksIHtcbiAgICAgICAgICAgICAgICAvLyAgICAgY2hpbGRMaXN0OiB0cnVlLFxuICAgICAgICAgICAgICAgIC8vICAgICBzdWJ0cmVlOiB0cnVlXG4gICAgICAgICAgICAgICAgLy8gfSk7XG5cbiAgICAgICAgICAgIH0pO1xuICAgIH1cblxuXG4gICAgZnVuY3Rpb24gY2hlY2tVc2VyQXV0aCgpIHtcbiAgICAgICAgY29uc29sZS5sb2codXNlcklkKVxuICAgICAgICBpZiAodXNlcklkKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IHVuYXV0aE1lcyBvZiB1bmF1dGhNc2dzKSB7XG4gICAgICAgICAgICAgICAgdW5hdXRoTWVzLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiByZXF1ZXN0KGAvZmF2dXNlci8ke3VzZXJJZH0/bm9jYWNoZT0xYClcbiAgICAgICAgICAgICAgICAudGhlbihyZXMgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAocmVzLnVzZXJpZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFydGljaXBhdGVCdG5zLmZvckVhY2goaXRlbSA9PiBpdGVtLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZWRpcmVjdEJ0bnMuZm9yRWFjaChpdGVtID0+IGl0ZW0uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzVmVyaWZpZWRVc2VyID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGlzVmVyaWZpZWRVc2VyKVxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFydGljaXBhdGVCdG5zLmZvckVhY2goaXRlbSA9PiBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZWRpcmVjdEJ0bnMuZm9yRWFjaChpdGVtID0+IGl0ZW0uY2xhc3NMaXN0LmFkZCgnaGlkZScpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzVmVyaWZpZWRVc2VyID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBmb3IgKGxldCByZWRpcmVjdEJ0biBvZiByZWRpcmVjdEJ0bnMpIHtcbiAgICAgICAgICAgICAgICByZWRpcmVjdEJ0bi5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmb3IgKGxldCBwYXJ0aWNpcGF0ZUJ0biBvZiBwYXJ0aWNpcGF0ZUJ0bnMpIHtcbiAgICAgICAgICAgICAgICBwYXJ0aWNpcGF0ZUJ0bi5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmb3IgKGNvbnN0IHVuYXV0aE1lcyBvZiB1bmF1dGhNc2dzKSB7XG4gICAgICAgICAgICAgICAgdW5hdXRoTWVzLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShmYWxzZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZXBvcnRFcnJvcihlcnIpIHtcbiAgICAgICAgY29uc3QgcmVwb3J0RGF0YSA9IHtcbiAgICAgICAgICAgIG9yaWdpbjogd2luZG93LmxvY2F0aW9uLmhyZWYsXG4gICAgICAgICAgICB1c2VyaWQ6IHVzZXJJZCxcbiAgICAgICAgICAgIGVycm9yVGV4dDogZXJyPy5lcnJvciB8fCBlcnI/LnRleHQgfHwgZXJyPy5tZXNzYWdlIHx8ICdVbmtub3duIGVycm9yJyxcbiAgICAgICAgICAgIHR5cGU6IGVycj8ubmFtZSB8fCAnVW5rbm93bkVycm9yJyxcbiAgICAgICAgICAgIHN0YWNrOiBlcnI/LnN0YWNrIHx8ICcnXG4gICAgICAgIH07XG5cbiAgICAgICAgZmV0Y2goJ2h0dHBzOi8vZmF2LXByb20uY29tL2FwaS1jbXMvcmVwb3J0cy9hZGQnLCB7XG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkocmVwb3J0RGF0YSlcbiAgICAgICAgfSkuY2F0Y2goY29uc29sZS53YXJuKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB0cmFuc2xhdGUoKSB7XG4gICAgICAgIGNvbnN0IGVsZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtdHJhbnNsYXRlXScpXG4gICAgICAgIGlmIChlbGVtcyAmJiBlbGVtcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGlmKHRyYW5zbGF0ZVN0YXRlKXtcbiAgICAgICAgICAgICAgICBlbGVtcy5mb3JFYWNoKGVsZW0gPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBrZXkgPSBlbGVtLmdldEF0dHJpYnV0ZSgnZGF0YS10cmFuc2xhdGUnKTtcbiAgICAgICAgICAgICAgICAgICAgZWxlbS5pbm5lckhUTUwgPSBpMThuRGF0YVtrZXldIHx8ICcqLS0tLU5FRUQgVE8gQkUgVFJBTlNMQVRFRC0tLS0qICAga2V5OiAgJyArIGtleTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGkxOG5EYXRhW2tleV0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW0ucmVtb3ZlQXR0cmlidXRlKCdkYXRhLXRyYW5zbGF0ZScpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwidHJhbnNsYXRpb24gd29ya3MhXCIpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGxvY2FsZSA9PT0gJ2VuJykge1xuICAgICAgICAgICAgbWFpblBhZ2UuY2xhc3NMaXN0LmFkZCgnZW4nKTtcbiAgICAgICAgfVxuICAgICAgICByZWZyZXNoTG9jYWxpemVkQ2xhc3MobWFpblBhZ2UsICcnKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZWZyZXNoTG9jYWxpemVkQ2xhc3MoZWxlbWVudCwgYmFzZUNzc0NsYXNzKSB7XG4gICAgICAgIGlmICghZWxlbWVudCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGZvciAoY29uc3QgbGFuZyBvZiBbJ3VrJywgJ2VuJ10pIHtcbiAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShiYXNlQ3NzQ2xhc3MgKyBsYW5nKTtcbiAgICAgICAgfVxuICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoYmFzZUNzc0NsYXNzICsgbG9jYWxlKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZW5kZXJVc2Vycyh3ZWVrTnVtLCB1c2VyRGF0YSA9IFtdKSB7XG4gICAgICAgIHdlZWtOdW0gPSBOdW1iZXIod2Vla051bSk7XG4gICAgICAgIHVzZXJEYXRhID0gdXNlckRhdGEuZmluZCh3ZWVrID0+IHtcbiAgICAgICAgICAgIHJldHVybiB3ZWVrLndlZWsgPT09IHdlZWtOdW1cbiAgICAgICAgfSkudXNlcnM7XG5cbiAgICAgICAgY29uc29sZS5sb2codXNlckRhdGEpO1xuXG4gICAgICAgIGNvbnN0IGN1cnJlbnRVc2VyID0gdXNlckRhdGEuZmluZCh1c2VyID0+IHVzZXIudXNlcmlkID09PSB1c2VySWQpO1xuXG4gICAgICAgIGNvbnNvbGUubG9nKHVzZXJJZClcbiAgICAgICAgY29uc29sZS5sb2coY3VycmVudFVzZXIpXG4gICAgICAgIGNvbnNvbGUubG9nKGlzVmVyaWZpZWRVc2VyKVxuXG4gICAgICAgIGlmKHVzZXJJZCAmJiAhY3VycmVudFVzZXIgJiYgaXNWZXJpZmllZFVzZXIpe1xuICAgICAgICAgICAgdXNlckRhdGEgPSBbLi4udXNlckRhdGEsIHt1c2VyaWQ6IHVzZXJJZCwgcG9pbnRzOiAwfV1cbiAgICAgICAgfVxuICAgICAgICBjb25zb2xlLmxvZyh1c2VyRGF0YSk7XG5cbiAgICAgICAgcG9wdWxhdGVVc2Vyc1RhYmxlKHVzZXJEYXRhLCB1c2VySWQsIHdlZWtOdW0sIGN1cnJlbnRVc2VyLCBpc1ZlcmlmaWVkVXNlcik7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcG9wdWxhdGVVc2Vyc1RhYmxlKHVzZXJzLCBjdXJyZW50VXNlcklkLCB3ZWVrLCBjdXJyZW50VXNlciwgaXNWZXJpZmllZFVzZXIpIHtcblxuICAgICAgICBjb25zb2xlLmxvZyh1c2Vycyk7XG4gICAgICAgIHJlc3VsdHNUYWJsZS5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgcmVzdWx0c1RhYmxlT3RoZXIuaW5uZXJIVE1MID0gJyc7XG4gICAgICAgIGlmICghdXNlcnM/Lmxlbmd0aCkgcmV0dXJuO1xuXG4gICAgICAgIGNvbnN0IGlzVG9wQ3VycmVudFVzZXIgPSBjdXJyZW50VXNlciAmJiB1c2Vycy5zbGljZSgwLCAxMCkuc29tZSh1c2VyID0+IHVzZXIudXNlcmlkID09PSBjdXJyZW50VXNlcklkKTtcblxuICAgICAgICBjb25zdCB0b3BVc2Vyc0xlbmd0aCA9ICF1c2VySWQgfHwgaXNUb3BDdXJyZW50VXNlciAgPyAxMyA6IDEwO1xuXG4gICAgICAgIGNvbnN0IHRvcFVzZXJzID0gdXNlcnMuc2xpY2UoMCwgdG9wVXNlcnNMZW5ndGgpO1xuXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHVzZXJzKTtcbiAgICAgICAgdG9wVXNlcnMuZm9yRWFjaCh1c2VyID0+IHtcbiAgICAgICAgICAgIGRpc3BsYXlVc2VyKHVzZXIsIHVzZXIudXNlcmlkID09PSBjdXJyZW50VXNlcklkLCByZXN1bHRzVGFibGUsIHRvcFVzZXJzLCBpc1RvcEN1cnJlbnRVc2VyLCB3ZWVrKTtcbiAgICAgICAgfSk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGlzVG9wQ3VycmVudFVzZXIpXG4gICAgICAgIGNvbnNvbGUubG9nKGlzVmVyaWZpZWRVc2VyKVxuICAgICAgICBpZihpc1ZlcmlmaWVkVXNlciAmJiAhY3VycmVudFVzZXIpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCd1c2VyIHZlcmlmaWVkJyk7XG4gICAgICAgICAgICBkaXNwbGF5VXNlcihjdXJyZW50VXNlciwgdHJ1ZSwgcmVzdWx0c1RhYmxlT3RoZXIsIHVzZXJzLCBmYWxzZSwgd2Vlayk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFpc1RvcEN1cnJlbnRVc2VyICYmIGN1cnJlbnRVc2VyKSB7XG4gICAgICAgICAgICBpc1ZlcmlmaWVkVXNlciA9IGZhbHNlO1xuICAgICAgICAgICAgZGlzcGxheVVzZXIoY3VycmVudFVzZXIsIHRydWUsIHJlc3VsdHNUYWJsZU90aGVyLCB1c2VycywgZmFsc2UsIHdlZWspO1xuICAgICAgICB9XG5cblxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGRpc3BsYXlVc2VyKHVzZXIsIGlzQ3VycmVudFVzZXIsIHRhYmxlLCB1c2VycywgaXNUb3BDdXJyZW50VXNlciwgd2Vlaykge1xuXG4gICAgICAgIGNvbnN0IHJlbmRlclJvdyA9ICh1c2VyRGF0YSwgb3B0aW9ucyA9IHt9KSA9PiB7XG4gICAgICAgICAgICBjb25zdCB7IGhpZ2hsaWdodCA9IGZhbHNlLCBuZWlnaGJvciA9IGZhbHNlIH0gPSBvcHRpb25zO1xuICAgICAgICAgICAgY29uc3QgdXNlclJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgdXNlclJvdy5jbGFzc0xpc3QuYWRkKCd0YWJsZV9fcm93Jyk7XG5cbiAgICAgICAgICAgIGNvbnN0IHVzZXJQbGFjZSA9IHVzZXJzLmluZGV4T2YodXNlckRhdGEpICsgMTtcbiAgICAgICAgICAgIGNvbnN0IHByaXplS2V5ID0gZGVidWcgPyBudWxsIDogZ2V0UHJpemVUcmFuc2xhdGlvbktleSh1c2VyUGxhY2UsIHdlZWspO1xuXG4gICAgICAgICAgICBpZiAodXNlclBsYWNlIDw9IDMpIHtcbiAgICAgICAgICAgICAgICB1c2VyUm93LmNsYXNzTGlzdC5hZGQoYHBsYWNlJHt1c2VyUGxhY2V9YCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChoaWdobGlnaHQgfHwgaXNDdXJyZW50VXNlciAmJiAhbmVpZ2hib3IpIHtcbiAgICAgICAgICAgICAgICB1c2VyUm93LmNsYXNzTGlzdC5hZGQoJ3lvdScpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChuZWlnaGJvcikge1xuICAgICAgICAgICAgICAgIHVzZXJSb3cuY2xhc3NMaXN0LmFkZCgnX25laWdoYm9yJyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHVzZXJSb3cuaW5uZXJIVE1MID0gYFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRhYmxlX19yb3ctaXRlbVwiPlxuICAgICAgICAgICAgICAgICR7dXNlclBsYWNlIDwgMTAgPyAnMCcgKyB1c2VyUGxhY2UgOiB1c2VyUGxhY2V9XG4gICAgICAgICAgICAgICAgJHtpc0N1cnJlbnRVc2VyICYmICFuZWlnaGJvciA/ICc8c3BhbiBjbGFzcz1cInlvdVwiPicgKyB0cmFuc2xhdGVLZXkoXCJ5b3VcIikgKyAnPC9zcGFuPicgOiAnJ31cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRhYmxlX19yb3ctaXRlbVwiPlxuICAgICAgICAgICAgICAgICR7aXNDdXJyZW50VXNlciAmJiAhbmVpZ2hib3IgPyB1c2VyRGF0YS51c2VyaWQgOiBtYXNrVXNlcklkKHVzZXJEYXRhLnVzZXJpZCl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0YWJsZV9fcm93LWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAke051bWJlcih1c2VyRGF0YS5wb2ludHMpLnRvRml4ZWQoMil9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0YWJsZV9fcm93LWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAke3ByaXplS2V5ID8gdHJhbnNsYXRlS2V5KHByaXplS2V5KSA6ICcgLSAnfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIGA7XG5cbiAgICAgICAgICAgIHRhYmxlLmFwcGVuZCh1c2VyUm93KTtcbiAgICAgICAgfTtcbiAgICAgICAgaWYgKGlzQ3VycmVudFVzZXIgJiYgIWlzVG9wQ3VycmVudFVzZXIpIHtcbiAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gdXNlcnMuaW5kZXhPZih1c2VyKTtcbiAgICAgICAgICAgIGlmICh1c2Vyc1tpbmRleCAtIDFdKSB7XG4gICAgICAgICAgICAgICAgcmVuZGVyUm93KHVzZXJzW2luZGV4IC0gMV0sIHsgbmVpZ2hib3I6IHRydWUgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZW5kZXJSb3codXNlciwgeyBoaWdobGlnaHQ6IHRydWUgfSk7XG4gICAgICAgICAgICBpZiAodXNlcnNbaW5kZXggKyAxXSkge1xuICAgICAgICAgICAgICAgIHJlbmRlclJvdyh1c2Vyc1tpbmRleCArIDFdLCB7IG5laWdoYm9yOiB0cnVlIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmVuZGVyUm93KHVzZXIpO1xuICAgICAgICB9XG4gICAgfVxuXG5cbiAgICBmdW5jdGlvbiB0cmFuc2xhdGVLZXkoa2V5LCBkZWZhdWx0VmFsdWUpIHtcbiAgICAgICAgaWYgKCFrZXkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBsZXQgbmVlZEtleSA9IGRlYnVnID8ga2V5IDogYCotLS0tTkVFRCBUTyBCRSBUUkFOU0xBVEVELS0tLSoga2V5OiAke2tleX1gXG5cbiAgICAgICAgZGVmYXVsdFZhbHVlID0gIG5lZWRLZXkgfHwga2V5O1xuICAgICAgICByZXR1cm4gaTE4bkRhdGFba2V5XSB8fCBkZWZhdWx0VmFsdWU7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbWFza1VzZXJJZCh1c2VySWQpIHtcbiAgICAgICAgcmV0dXJuIFwiKipcIiArIHVzZXJJZC50b1N0cmluZygpLnNsaWNlKDIpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldFByaXplVHJhbnNsYXRpb25LZXkocGxhY2UsIHdlZWspIHtcbiAgICAgICAgaWYgKHBsYWNlIDw9IDMpIHJldHVybiBgcHJpemVfJHt3ZWVrfS0ke3BsYWNlfWA7XG4gICAgICAgIGlmIChwbGFjZSA8PSAxMCkgcmV0dXJuIGBwcml6ZV8ke3dlZWt9LTQtMTBgO1xuICAgICAgICBpZiAocGxhY2UgPD0gMjUpIHJldHVybiBgcHJpemVfJHt3ZWVrfS0xMS0yNWA7XG4gICAgICAgIGlmIChwbGFjZSA8PSA1MCkgcmV0dXJuIGBwcml6ZV8ke3dlZWt9LTI2LTUwYDtcbiAgICAgICAgaWYgKHBsYWNlIDw9IDc1KSByZXR1cm4gYHByaXplXyR7d2Vla30tNTEtNzVgO1xuICAgICAgICBpZiAocGxhY2UgPD0gMTAwKSByZXR1cm4gYHByaXplXyR7d2Vla30tNzYtMTAwYDtcbiAgICAgICAgaWYgKHBsYWNlIDw9IDEyNSkgcmV0dXJuIGBwcml6ZV8ke3dlZWt9LTEwMS0xMjVgO1xuICAgICAgICBpZiAocGxhY2UgPD0gMTUwKSByZXR1cm4gYHByaXplXyR7d2Vla30tMTI2LTE1MGA7XG4gICAgICAgIGlmIChwbGFjZSA8PSAxNzUpIHJldHVybiBgcHJpemVfJHt3ZWVrfS0xNTEtMTc1YDtcbiAgICAgICAgaWYgKHBsYWNlIDw9IDIwMCkgcmV0dXJuIGBwcml6ZV8ke3dlZWt9LTE3Ni0yMDBgO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHBhcnRpY2lwYXRlKCkge1xuICAgICAgICBpZiAoIXVzZXJJZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHBhcmFtcyA9IHsgdXNlcmlkOiB1c2VySWQgfTtcbiAgICAgICAgZmV0Y2goYXBpVVJMICsgJy91c2VyLycsIHtcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAnQWNjZXB0JzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHBhcmFtcylcbiAgICAgICAgfSkudGhlbihyZXMgPT4gcmVzLmpzb24oKSlcbiAgICAgICAgICAgIC50aGVuKHJlcyA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzKTtcbiAgICAgICAgICAgICAgICBsb2FkZXJCdG4gPSB0cnVlXG4gICAgICAgICAgICAgICAgdG9nZ2xlQ2xhc3NlcyhwYXJ0aWNpcGF0ZUJ0bnMsIFwibG9hZGVyXCIpXG4gICAgICAgICAgICAgICAgdG9nZ2xlVHJhbnNsYXRlcyhwYXJ0aWNpcGF0ZUJ0bnMsIFwibG9hZGVyXCIpXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PntcbiAgICAgICAgICAgICAgICAgICAgdG9nZ2xlVHJhbnNsYXRlcyhwYXJ0aWNpcGF0ZUJ0bnMsIFwibG9hZGVyX3JlYWR5XCIpXG4gICAgICAgICAgICAgICAgICAgIHRvZ2dsZUNsYXNzZXMocGFydGljaXBhdGVCdG5zLCBcImRvbmVcIilcbiAgICAgICAgICAgICAgICAgICAgdG9nZ2xlQ2xhc3NlcyhwYXJ0aWNpcGF0ZUJ0bnMsIFwibG9hZGVyXCIpXG4gICAgICAgICAgICAgICAgfSwgNTAwKVxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCk9PntcbiAgICAgICAgICAgICAgICAgICAgY2hlY2tVc2VyQXV0aCgpXG4gICAgICAgICAgICAgICAgICAgIGxvYWRVc2VycyhcIj9ub2NhY2hlPTFcIikudGhlbihyZXMgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVuZGVyVXNlcnMoYWN0aXZlV2VlaywgdGFibGVEYXRhKVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH0sIDEwMDApXG5cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdBUEkgcmVxdWVzdCBmYWlsZWQ6JywgZXJyKTtcblxuICAgICAgICAgICAgICAgIHJlcG9ydEVycm9yKGVycik7XG5cbiAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZmF2LXBhZ2UnKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICAgICAgICAgIGlmICh3aW5kb3cubG9jYXRpb24uaHJlZi5zdGFydHNXaXRoKFwiaHR0cHM6Ly93d3cuZmF2YmV0LmhyL1wiKSkge1xuICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9ICcvcHJvbW9jaWplL3Byb21vY2lqYS9zdHViLyc7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSAnL3Byb21vcy9wcm9tby9zdHViLyc7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGVycik7XG4gICAgICAgICAgICB9KTtcbiAgICB9XG4gICAgZnVuY3Rpb24gbG9hZFVzZXJzKHBhcmFtZXRyKSB7XG4gICAgICAgIGNvbnN0IHJlcXVlc3RzID0gW107XG4gICAgICAgIHRhYmxlRGF0YS5sZW5ndGggPSAwXG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gcGVyaW9kQW1vdW50OyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IHdlZWsgPSBpOyAvLyDQsNCx0L4g0LHRg9C00Ywt0Y/QutCwINC70L7Qs9GW0LrQsCDQtNC70Y8g0YTQvtGA0LzRg9Cy0LDQvdC90Y8g0L3QvtC80LXRgNCwINGC0LjQttC90Y9cbiAgICAgICAgICAgIGNvbnN0IHJlcSA9IHJlcXVlc3QoYC91c2Vyc2ApLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XG4gICAgICAgICAgICAgICAgdGFibGVEYXRhLnB1c2goeyB3ZWVrLCB1c2VyczogZGF0YSB9KTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICByZXF1ZXN0cy5wdXNoKHJlcSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gUHJvbWlzZS5hbGwocmVxdWVzdHMpXG4gICAgICAgIC5jYXRjaChlcnJvciA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBsb2FkaW5nIHVzZXJzOicsIGVycm9yKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG5cbiAgICBmdW5jdGlvbiBzaG93SXRlbXNPblNjcm9sbChpdGVtQ2xhc3MpIHtcbiAgICAgICAgY29uc3QgQmxvY2tzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgJHtpdGVtQ2xhc3N9YCk7XG4gICAgICAgIGlmICghQmxvY2tzKSByZXR1cm5cblxuICAgICAgICBjb25zdCBvYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcigoZW50cmllcywgb2JzZXJ2ZXIpID0+IHtcbiAgICAgICAgICAgIGVudHJpZXMuZm9yRWFjaChlbnRyeSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGVudHJ5LmlzSW50ZXJzZWN0aW5nICYmIGVudHJ5LmludGVyc2VjdGlvblJhdGlvID49IDAuMykge1xuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+e1xuICAgICAgICAgICAgICAgICAgICAgICAgQmxvY2tzLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5jbGFzc0xpc3QuYWRkKFwic2hvd0l0ZW1cIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvYnNlcnZlci51bm9ic2VydmUoaXRlbSlcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIH0sIDIwMClcblxuXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSwge1xuICAgICAgICAgICAgdGhyZXNob2xkOiAwLjNcbiAgICAgICAgfSlcbiAgICAgICAgQmxvY2tzLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgICAgICBvYnNlcnZlci5vYnNlcnZlKGl0ZW0pXG4gICAgICAgIH0pXG4gICAgfVxuICAgIFxuLy9zbGlkZXJcblxuICAgIGZ1bmN0aW9uIHVwZGF0ZVNsaWRlcigpIHtcbiAgICAgICAgaXRlbXMuZm9yRWFjaCgoaXRlbSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGRpc3RhbmNlID0gaW5kZXggLSBjdXJyZW50SW5kZXg7XG4gICAgICAgICAgICBjb25zdCBpc1Zpc2libGUgPSBNYXRoLmFicyhkaXN0YW5jZSkgPD0gMSB8fCAoaW5kZXggPT09IDAgJiYgY3VycmVudEluZGV4ID09PSB0b3RhbEl0ZW1zIC0gMSkgfHwgKGluZGV4ID09PSB0b3RhbEl0ZW1zIC0gMSAmJiBjdXJyZW50SW5kZXggPT09IDApO1xuICAgICAgICAgICAgaXRlbS5jbGFzc0xpc3QudG9nZ2xlKCdfaGlkZS1zbGlkZScsICFpc1Zpc2libGUpO1xuICAgICAgICAgICAgaXRlbS5jbGFzc0xpc3QudG9nZ2xlKCdfYWN0aXZlJywgaW5kZXggPT09IGN1cnJlbnRJbmRleCk7XG5cbiAgICAgICAgICAgIHVwZGF0ZVJ1bmVzKGN1cnJlbnRJbmRleClcblxuICAgICAgICAgICAgaXRlbS5jbGFzc0xpc3QucmVtb3ZlKCdfbGVmdCcsICdfcmlnaHQnKTtcbiAgICAgICAgICAgIGlmIChkaXN0YW5jZSA9PT0gMSB8fCAoY3VycmVudEluZGV4ID09PSB0b3RhbEl0ZW1zIC0gMSAmJiBpbmRleCA9PT0gMCkpIHtcbiAgICAgICAgICAgICAgICBpdGVtLmNsYXNzTGlzdC5hZGQoJ19yaWdodCcpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChkaXN0YW5jZSA9PT0gLTEgfHwgKGN1cnJlbnRJbmRleCA9PT0gMCAmJiBpbmRleCA9PT0gdG90YWxJdGVtcyAtIDEpKSB7XG4gICAgICAgICAgICAgICAgaXRlbS5jbGFzc0xpc3QuYWRkKCdfbGVmdCcpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoIWl0ZW0uY2xhc3NMaXN0LmNvbnRhaW5zKCdfYWN0aXZlJykpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHVwZGF0ZVJ1bmVzKGN1cnJlbnRJbmRleCkge1xuICAgICAgICBjb25zdCBydW5lQ291bnQgPSBydW5lcy5sZW5ndGg7XG5cbiAgICAgICAgY29uc29sZS5sb2coY3VycmVudEluZGV4ICsgMSk7XG5cbiAgICAgICAgWy4uLmJ1dHRvbnNMZWZ0LCAuLi5idXR0b25zUmlnaHRdLmZvckVhY2goYnRuID0+IHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IHJ1bmVDb3VudDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgYnRuLmNsYXNzTGlzdC5yZW1vdmUoYF9ydW5lJHtpfWApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBjb25zdCByaWdodFJ1bmVJbmRleCA9IChjdXJyZW50SW5kZXggKyAxKSAlIHJ1bmVDb3VudDtcbiAgICAgICAgY29uc3QgbGVmdFJ1bmVJbmRleCA9IChjdXJyZW50SW5kZXggLSAxICsgcnVuZUNvdW50KSAlIHJ1bmVDb3VudDtcblxuICAgICAgICBjb25zdCBjbGFzc1J1bmVMZWZ0ID0gcnVuZXNbbGVmdFJ1bmVJbmRleF0uZ2V0QXR0cmlidXRlKCdkYXRhLXJ1bmUnKTtcbiAgICAgICAgY29uc3QgY2xhc3NSdW5lUmlnaHQgPSBydW5lc1tyaWdodFJ1bmVJbmRleF0uZ2V0QXR0cmlidXRlKCdkYXRhLXJ1bmUnKTtcblxuICAgICAgICBidXR0b25zTGVmdC5mb3JFYWNoKGJ0biA9PiBidG4uY2xhc3NMaXN0LmFkZChjbGFzc1J1bmVMZWZ0KSk7XG4gICAgICAgIGJ1dHRvbnNSaWdodC5mb3JFYWNoKGJ0biA9PiBidG4uY2xhc3NMaXN0LmFkZChjbGFzc1J1bmVSaWdodCkpO1xuXG4gICAgICAgIHJ1bmVzLmZvckVhY2goKHJ1bmUsIGkpID0+IHtcbiAgICAgICAgICAgIHJ1bmUuY2xhc3NMaXN0LnJlbW92ZSgnX2FjdGl2ZScsICdfcmlnaHQxJywgJ19yaWdodDInLCAnX2xlZnQxJywgJ19sZWZ0MicpO1xuXG4gICAgICAgICAgICBpZiAoaSA9PT0gY3VycmVudEluZGV4KSB7XG4gICAgICAgICAgICAgICAgcnVuZS5jbGFzc0xpc3QuYWRkKCdfYWN0aXZlJyk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGkgPT09IChjdXJyZW50SW5kZXggKyAxKSAlIHJ1bmVDb3VudCkge1xuICAgICAgICAgICAgICAgIHJ1bmUuY2xhc3NMaXN0LmFkZCgnX3JpZ2h0MScpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChpID09PSAoY3VycmVudEluZGV4ICsgMikgJSBydW5lQ291bnQpIHtcbiAgICAgICAgICAgICAgICBydW5lLmNsYXNzTGlzdC5hZGQoJ19yaWdodDInKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoaSA9PT0gKGN1cnJlbnRJbmRleCAtIDEgKyBydW5lQ291bnQpICUgcnVuZUNvdW50KSB7XG4gICAgICAgICAgICAgICAgcnVuZS5jbGFzc0xpc3QuYWRkKCdfbGVmdDEnKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoaSA9PT0gKGN1cnJlbnRJbmRleCAtIDIgKyBydW5lQ291bnQpICUgcnVuZUNvdW50KSB7XG4gICAgICAgICAgICAgICAgcnVuZS5jbGFzc0xpc3QuYWRkKCdfbGVmdDInKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG5cblxuICAgIGZ1bmN0aW9uIG1vdmVTbGlkZXIob2Zmc2V0KSB7XG4gICAgICAgIGN1cnJlbnRJbmRleCA9IChjdXJyZW50SW5kZXggKyBvZmZzZXQgKyB0b3RhbEl0ZW1zKSAlIHRvdGFsSXRlbXM7XG4gICAgICAgIHVwZGF0ZVNsaWRlcigpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGhhbmRsZVN0YXJ0KGV2ZW50KSB7XG4gICAgICAgIGlzRHJhZ2dpbmcgPSB0cnVlO1xuICAgICAgICBzdGFydFggPSBldmVudC5jbGllbnRYIHx8IGV2ZW50LnRvdWNoZXNbMF0uY2xpZW50WDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBoYW5kbGVNb3ZlKGV2ZW50KSB7XG4gICAgICAgIGlmICghaXNEcmFnZ2luZykgcmV0dXJuO1xuXG4gICAgICAgIGNvbnN0IGN1cnJlbnRYID0gZXZlbnQuY2xpZW50WCB8fCBldmVudC50b3VjaGVzWzBdLmNsaWVudFg7XG4gICAgICAgIGNvbnN0IGRpZmZYID0gY3VycmVudFggLSBzdGFydFg7XG5cbiAgICAgICAgaWYgKE1hdGguYWJzKGRpZmZYKSA+IDUwKSB7XG4gICAgICAgICAgICBtb3ZlU2xpZGVyKGRpZmZYID4gMCA/IC0xIDogMSk7XG4gICAgICAgICAgICBpc0RyYWdnaW5nID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBoYW5kbGVFbmQoKSB7XG4gICAgICAgIGlzRHJhZ2dpbmcgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBidXR0b25zTGVmdC5mb3JFYWNoKGJ0biAgPT4ge1xuICAgICAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBtb3ZlU2xpZGVyKC0xKTtcbiAgICAgICAgICAgIGJ0bi5zdHlsZS5wb2ludGVyRXZlbnRzID0gJ25vbmUnO1xuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7IGJ0bi5zdHlsZS5wb2ludGVyRXZlbnRzID0gJ2luaXRpYWwnOyB9LCAxMDAwKTtcbiAgICAgICAgfSlcbiAgICB9KVxuICAgIGJ1dHRvbnNSaWdodC5mb3JFYWNoKGJ0biAgPT4ge1xuICAgICAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBtb3ZlU2xpZGVyKDEpO1xuICAgICAgICAgICAgYnRuLnN0eWxlLnBvaW50ZXJFdmVudHMgPSAnbm9uZSc7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHsgYnRuLnN0eWxlLnBvaW50ZXJFdmVudHMgPSAnaW5pdGlhbCc7IH0sIDEwMDApO1xuICAgICAgICB9KVxuICAgIH0pXG5cbiAgICBzbGlkZXIuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgaGFuZGxlU3RhcnQpO1xuICAgIHNsaWRlci5hZGRFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgaGFuZGxlU3RhcnQpO1xuXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgaGFuZGxlTW92ZSk7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2htb3ZlJywgaGFuZGxlTW92ZSk7XG5cbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgaGFuZGxlRW5kKTtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsIGhhbmRsZUVuZCk7XG5cbi8vc2xpZGVyXG4gICAgbG9hZFRyYW5zbGF0aW9ucygpXG4gICAgICAgIC50aGVuKGluaXQpIC8vINC30LDQv9GD0YHQuiDRltC90ZbRgtGDINGB0YLQvtGA0ZbQvdC60LhcblxuICAgIC8vXG4vLyAvLy8gdGVzdFxuXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT4ge1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1lbnUtYnRuXCIpPy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tZW51LXRlc3RcIik/LmNsYXNzTGlzdC50b2dnbGUoXCJoaWRlXCIpO1xuICAgICAgICB9KTtcbiAgICB9KTtcblxuICAgIGNvbnN0IGxuZ0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubG5nLWJ0blwiKVxuXG4gICAgbG5nQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIGlmIChzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKFwibG9jYWxlXCIpKSB7XG4gICAgICAgICAgICBzZXNzaW9uU3RvcmFnZS5yZW1vdmVJdGVtKFwibG9jYWxlXCIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShcImxvY2FsZVwiLCBcImVuXCIpO1xuICAgICAgICB9XG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcbiAgICB9KTtcblxuICAgIGNvbnN0IGF1dGhCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmF1dGgtYnRuXCIpXG5cbiAgICBhdXRoQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PntcbiAgICAgICAgaWYodXNlcklkKXtcbiAgICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnJlbW92ZUl0ZW0oXCJ1c2VySWRcIilcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKFwidXNlcklkXCIsIFwiMTAwMzAwMjY4XCIpXG4gICAgICAgIH1cbiAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpXG4gICAgfSk7XG5cbiAgICBjb25zdCBwb3B1cHNNZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wb3B1cHMtYnRuXCIpO1xuXG4gICAgcG9wdXBzTWVudS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1lbnUtcG9wdXBcIikuY2xhc3NMaXN0LnRvZ2dsZShcImhpZGVcIik7XG4gICAgfSlcblxuXG59KSgpO1xuXG4vLyDQv9GW0YHQu9GPINGC0LXRgdGC0YMg0LLQuNC00LDQu9C4INGG0Y4g0YTRg9C90LrRhtGW0Y4g0ZYg0YDQvtC30LrQvtC80LXQvdGC0Lgg0LDQvdCw0LvQvtCz0ZbRh9C90YMg0LIg0YTRg9C90LrRhtGW0Zcg0LLQuNC60LvQuNC60YNcbmZ1bmN0aW9uIG9wZW5Qb3B1cEJ5QXR0cihwb3B1cEF0dHIpIHtcbiAgICBjb25zdCBhbGxQb3B1cHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucG9wdXAnKTtcbiAgICBhbGxQb3B1cHMuZm9yRWFjaChwID0+IHAuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJykpO1xuICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSAnaGlkZGVuJztcblxuICAgIGNvbnNvbGUubG9nKHBvcHVwQXR0cik7XG5cbiAgICBjb25zdCB0YXJnZXRQb3B1cCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5wb3B1cFtkYXRhLXBvcHVwPVwiJHtwb3B1cEF0dHJ9XCJdYCk7XG4gICAgaWYgKHRhcmdldFBvcHVwKSB7XG4gICAgICAgIHRhcmdldFBvcHVwLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG9wdXBzJykuY2xhc3NMaXN0LnJlbW92ZSgnb3BhY2l0eScpO1xuICAgIH1cbn1cbiJdfQ==
