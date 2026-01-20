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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateAidRecipientDto = void 0;
var class_validator_1 = require("class-validator");
var CreateAidRecipientDto = function () {
    var _a;
    var _recipientId_decorators;
    var _recipientId_initializers = [];
    var _recipientId_extraInitializers = [];
    var _citizenId_decorators;
    var _citizenId_initializers = [];
    var _citizenId_extraInitializers = [];
    var _aidId_decorators;
    var _aidId_initializers = [];
    var _aidId_extraInitializers = [];
    var _receiveDate_decorators;
    var _receiveDate_initializers = [];
    var _receiveDate_extraInitializers = [];
    var _recipientStatus_decorators;
    var _recipientStatus_initializers = [];
    var _recipientStatus_extraInitializers = [];
    return _a = /** @class */ (function () {
            function CreateAidRecipientDto() {
                this.recipientId = __runInitializers(this, _recipientId_initializers, void 0);
                this.citizenId = (__runInitializers(this, _recipientId_extraInitializers), __runInitializers(this, _citizenId_initializers, void 0));
                this.aidId = (__runInitializers(this, _citizenId_extraInitializers), __runInitializers(this, _aidId_initializers, void 0));
                this.receiveDate = (__runInitializers(this, _aidId_extraInitializers), __runInitializers(this, _receiveDate_initializers, void 0));
                this.recipientStatus = (__runInitializers(this, _receiveDate_extraInitializers), __runInitializers(this, _recipientStatus_initializers, void 0));
                __runInitializers(this, _recipientStatus_extraInitializers);
            }
            return CreateAidRecipientDto;
        }()),
        (function () {
            var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _recipientId_decorators = [(0, class_validator_1.IsString)()];
            _citizenId_decorators = [(0, class_validator_1.IsString)()];
            _aidId_decorators = [(0, class_validator_1.IsString)()];
            _receiveDate_decorators = [(0, class_validator_1.IsDateString)(), (0, class_validator_1.IsOptional)()];
            _recipientStatus_decorators = [(0, class_validator_1.IsString)(), (0, class_validator_1.IsOptional)()];
            __esDecorate(null, null, _recipientId_decorators, { kind: "field", name: "recipientId", static: false, private: false, access: { has: function (obj) { return "recipientId" in obj; }, get: function (obj) { return obj.recipientId; }, set: function (obj, value) { obj.recipientId = value; } }, metadata: _metadata }, _recipientId_initializers, _recipientId_extraInitializers);
            __esDecorate(null, null, _citizenId_decorators, { kind: "field", name: "citizenId", static: false, private: false, access: { has: function (obj) { return "citizenId" in obj; }, get: function (obj) { return obj.citizenId; }, set: function (obj, value) { obj.citizenId = value; } }, metadata: _metadata }, _citizenId_initializers, _citizenId_extraInitializers);
            __esDecorate(null, null, _aidId_decorators, { kind: "field", name: "aidId", static: false, private: false, access: { has: function (obj) { return "aidId" in obj; }, get: function (obj) { return obj.aidId; }, set: function (obj, value) { obj.aidId = value; } }, metadata: _metadata }, _aidId_initializers, _aidId_extraInitializers);
            __esDecorate(null, null, _receiveDate_decorators, { kind: "field", name: "receiveDate", static: false, private: false, access: { has: function (obj) { return "receiveDate" in obj; }, get: function (obj) { return obj.receiveDate; }, set: function (obj, value) { obj.receiveDate = value; } }, metadata: _metadata }, _receiveDate_initializers, _receiveDate_extraInitializers);
            __esDecorate(null, null, _recipientStatus_decorators, { kind: "field", name: "recipientStatus", static: false, private: false, access: { has: function (obj) { return "recipientStatus" in obj; }, get: function (obj) { return obj.recipientStatus; }, set: function (obj, value) { obj.recipientStatus = value; } }, metadata: _metadata }, _recipientStatus_initializers, _recipientStatus_extraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a;
}();
exports.CreateAidRecipientDto = CreateAidRecipientDto;
