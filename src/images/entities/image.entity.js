"use strict";
var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
var __setFunctionName = (this && this.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Image = void 0;
var typeorm_1 = require("typeorm");
var Image = function () {
    var _classDecorators = [(0, typeorm_1.Entity)({ name: 'image' })];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _instanceExtraInitializers = [];
    var _id_decorators;
    var _id_initializers = [];
    var _userId_decorators;
    var _userId_initializers = [];
    var _imageUrl_decorators;
    var _imageUrl_initializers = [];
    var _steganoPath_decorators;
    var _steganoPath_initializers = [];
    var _dateCreation_decorators;
    var _dateCreation_initializers = [];
    var _isCertified_decorators;
    var _isCertified_initializers = [];
    var _certificatePurchasedAt_decorators;
    var _certificatePurchasedAt_initializers = [];
    var _verificationCount_decorators;
    var _verificationCount_initializers = [];
    var Image = _classThis = /** @class */ (function () {
        function Image_1() {
            this.id = (__runInitializers(this, _instanceExtraInitializers), __runInitializers(this, _id_initializers, void 0));
            this.userId = __runInitializers(this, _userId_initializers, void 0);
            this.imageUrl = __runInitializers(this, _imageUrl_initializers, void 0);
            this.steganoPath = __runInitializers(this, _steganoPath_initializers, void 0);
            this.dateCreation = __runInitializers(this, _dateCreation_initializers, void 0);
            this.isCertified = __runInitializers(this, _isCertified_initializers, void 0);
            this.certificatePurchasedAt = __runInitializers(this, _certificatePurchasedAt_initializers, void 0);
            this.verificationCount = __runInitializers(this, _verificationCount_initializers, void 0);
        }
        return Image_1;
    }());
    __setFunctionName(_classThis, "Image");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _id_decorators = [(0, typeorm_1.PrimaryGeneratedColumn)('uuid')];
        _userId_decorators = [(0, typeorm_1.Column)({ nullable: true })];
        _imageUrl_decorators = [(0, typeorm_1.Column)()];
        _steganoPath_decorators = [(0, typeorm_1.Column)()];
        _dateCreation_decorators = [(0, typeorm_1.Column)()];
        _isCertified_decorators = [(0, typeorm_1.Column)({ default: false })];
        _certificatePurchasedAt_decorators = [(0, typeorm_1.Column)({ type: 'timestamp', nullable: true })];
        _verificationCount_decorators = [(0, typeorm_1.Column)({ default: 0 })];
        __esDecorate(null, null, _id_decorators, { kind: "field", name: "id", static: false, private: false, access: { has: function (obj) { return "id" in obj; }, get: function (obj) { return obj.id; }, set: function (obj, value) { obj.id = value; } }, metadata: _metadata }, _id_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _userId_decorators, { kind: "field", name: "userId", static: false, private: false, access: { has: function (obj) { return "userId" in obj; }, get: function (obj) { return obj.userId; }, set: function (obj, value) { obj.userId = value; } }, metadata: _metadata }, _userId_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _imageUrl_decorators, { kind: "field", name: "imageUrl", static: false, private: false, access: { has: function (obj) { return "imageUrl" in obj; }, get: function (obj) { return obj.imageUrl; }, set: function (obj, value) { obj.imageUrl = value; } }, metadata: _metadata }, _imageUrl_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _steganoPath_decorators, { kind: "field", name: "steganoPath", static: false, private: false, access: { has: function (obj) { return "steganoPath" in obj; }, get: function (obj) { return obj.steganoPath; }, set: function (obj, value) { obj.steganoPath = value; } }, metadata: _metadata }, _steganoPath_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _dateCreation_decorators, { kind: "field", name: "dateCreation", static: false, private: false, access: { has: function (obj) { return "dateCreation" in obj; }, get: function (obj) { return obj.dateCreation; }, set: function (obj, value) { obj.dateCreation = value; } }, metadata: _metadata }, _dateCreation_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _isCertified_decorators, { kind: "field", name: "isCertified", static: false, private: false, access: { has: function (obj) { return "isCertified" in obj; }, get: function (obj) { return obj.isCertified; }, set: function (obj, value) { obj.isCertified = value; } }, metadata: _metadata }, _isCertified_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _certificatePurchasedAt_decorators, { kind: "field", name: "certificatePurchasedAt", static: false, private: false, access: { has: function (obj) { return "certificatePurchasedAt" in obj; }, get: function (obj) { return obj.certificatePurchasedAt; }, set: function (obj, value) { obj.certificatePurchasedAt = value; } }, metadata: _metadata }, _certificatePurchasedAt_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _verificationCount_decorators, { kind: "field", name: "verificationCount", static: false, private: false, access: { has: function (obj) { return "verificationCount" in obj; }, get: function (obj) { return obj.verificationCount; }, set: function (obj, value) { obj.verificationCount = value; } }, metadata: _metadata }, _verificationCount_initializers, _instanceExtraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        Image = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return Image = _classThis;
}();
exports.Image = Image;
