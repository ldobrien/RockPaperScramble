"use strict";
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var auth0_js_1 = require("auth0-js");
var IMPLICTY_RESPONSE_TYPE = 'token id_token';
var Auth0Web = /** @class */ (function () {
    function Auth0Web(properties) {
        this._subscribers = {};
        this._currentProperties = properties;
        var scope = properties.scope;
        scope = Auth0Web.normalizeScope(scope);
        this._auth0Client = new auth0_js_1.WebAuth(__assign({}, properties, { scope: scope, responseType: IMPLICTY_RESPONSE_TYPE }));
    }
    Auth0Web.prototype.clearSession = function () {
        delete this._profile;
        delete this._accessToken;
        delete this._idToken;
        this.notifySubscribers(false);
    };
    Auth0Web.prototype.getProfile = function () {
        return this._profile;
    };
    Auth0Web.prototype.getIdToken = function () {
        return this._idToken;
    };
    Auth0Web.prototype.getAccessToken = function () {
        return this._accessToken;
    };
    Auth0Web.prototype.getProperties = function () {
        return this._currentProperties;
    };
    Auth0Web.prototype.signIn = function () {
        this._auth0Client.authorize();
    };
    Auth0Web.prototype.signOut = function (returnTo) {
        var clientID = this._currentProperties.clientID;
        this._auth0Client.logout({
            returnTo: returnTo,
            clientID: clientID,
        });
    };
    Auth0Web.prototype.isAuthenticated = function () {
        return this._accessToken != null;
    };
    Auth0Web.prototype.parseHash = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this._auth0Client.parseHash(function (err, authResult) { return __awaiter(_this, void 0, void 0, function () {
                var _a, err_1;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            if (err)
                                return [2 /*return*/, reject(err)];
                            if (!authResult)
                                resolve(null);
                            window.location.hash = '';
                            _b.label = 1;
                        case 1:
                            _b.trys.push([1, 3, , 4]);
                            _a = resolve;
                            return [4 /*yield*/, this.loadProfile(authResult)];
                        case 2:
                            _a.apply(void 0, [_b.sent()]);
                            return [3 /*break*/, 4];
                        case 3:
                            err_1 = _b.sent();
                            reject(err_1);
                            return [3 /*break*/, 4];
                        case 4: return [2 /*return*/];
                    }
                });
            }); });
        });
    };
    Auth0Web.prototype.checkSession = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this._auth0Client.checkSession(_this._currentProperties, function (error, authResult) { return __awaiter(_this, void 0, void 0, function () {
                var err_2;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (error && error.error !== 'login_required') {
                                // some other error
                                return [2 /*return*/, reject(error)];
                            }
                            else if (error) {
                                // explicit authentication required
                                return [2 /*return*/, resolve(false)];
                            }
                            if (this.isAuthenticated()) {
                                this.setAccessToken(authResult.accessToken, authResult.expiresIn);
                                return [2 /*return*/, resolve(true)];
                            }
                            _a.label = 1;
                        case 1:
                            _a.trys.push([1, 3, , 4]);
                            return [4 /*yield*/, this.handleAuthResult(authResult)];
                        case 2:
                            _a.sent();
                            resolve(true);
                            return [3 /*break*/, 4];
                        case 3:
                            err_2 = _a.sent();
                            reject(err_2);
                            return [3 /*break*/, 4];
                        case 4: return [2 /*return*/];
                    }
                });
            }); });
        });
    };
    // returns a function to unsubscribe
    Auth0Web.prototype.subscribe = function (subscriber) {
        var _this = this;
        var subscriberKey = Date.now();
        this._subscribers[subscriberKey] = subscriber;
        return function () {
            delete _this._subscribers[subscriberKey];
        };
    };
    Auth0Web.prototype.setAccessToken = function (accessToken, expiresIn) {
        var _this = this;
        this._accessToken = accessToken;
        // tries to refresh session before expering
        var timeout = setTimeout(function () {
            _this.notifySubscribers(false);
            clearTimeout(timeout);
        }, expiresIn * 1000 - 1000);
    };
    Auth0Web.prototype.handleAuthResult = function (authResult) {
        window.location.hash = '';
        return this.loadProfile(authResult);
    };
    Auth0Web.prototype.loadProfile = function (authResult) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this._auth0Client.client.userInfo(authResult.accessToken, function (err, profile) {
                if (err)
                    return reject(err);
                _this.setAccessToken(authResult.accessToken, authResult.expiresIn);
                _this._idToken = authResult.idToken;
                _this._profile = profile;
                _this.notifySubscribers(true);
                resolve();
            });
        });
    };
    Auth0Web.prototype.notifySubscribers = function (authenticated) {
        var _this = this;
        Object.keys(this._subscribers).forEach(function (subscriberKey) {
            _this._subscribers[subscriberKey](authenticated);
        });
    };
    Auth0Web.normalizeScope = function (scope) {
        if (scope === void 0) { scope = 'openid'; }
        if (scope.indexOf('openid') < 0) {
            scope = "openid " + scope;
        }
        return scope;
    };
    return Auth0Web;
}());
exports.default = Auth0Web;
//# sourceMappingURL=index.js.map