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
exports.CreateBansosValidationDto = void 0;
var class_validator_1 = require("class-validator");
var CreateBansosValidationDto = function () {
    var _a;
    var _validationId_decorators;
    var _validationId_initializers = [];
    var _validationId_extraInitializers = [];
    var _userId_decorators;
    var _userId_initializers = [];
    var _userId_extraInitializers = [];
    var _citizenId_decorators;
    var _citizenId_initializers = [];
    var _citizenId_extraInitializers = [];
    var _validationResult_decorators;
    var _validationResult_initializers = [];
    var _validationResult_extraInitializers = [];
    var _notes_decorators;
    var _notes_initializers = [];
    var _notes_extraInitializers = [];
    return _a = /** @class */ (function () {
            function CreateBansosValidationDto() {
                this.validationId = __runInitializers(this, _validationId_initializers, void 0);
                this.userId = (__runInitializers(this, _validationId_extraInitializers), __runInitializers(this, _userId_initializers, void 0));
                this.citizenId = (__runInitializers(this, _userId_extraInitializers), __runInitializers(this, _citizenId_initializers, void 0));
                this.validationResult = (__runInitializers(this, _citizenId_extraInitializers), __runInitializers(this, _validationResult_initializers, void 0));
                this.notes = (__runInitializers(this, _validationResult_extraInitializers), __runInitializers(this, _notes_initializers, void 0));
                __runInitializers(this, _notes_extraInitializers);
            }
            return CreateBansosValidationDto;
        }()),
        (function () {
            var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _validationId_decorators = [(0, class_validator_1.IsString)()];
            _userId_decorators = [(0, class_validator_1.IsString)(), (0, class_validator_1.IsOptional)()];
            _citizenId_decorators = [(0, class_validator_1.IsString)(), (0, class_validator_1.IsOptional)()];
            _validationResult_decorators = [(0, class_validator_1.IsBoolean)(), (0, class_validator_1.IsOptional)()];
            _notes_decorators = [(0, class_validator_1.IsString)(), (0, class_validator_1.IsOptional)()];
            __esDecorate(null, null, _validationId_decorators, { kind: "field", name: "validationId", static: false, private: false, access: { has: function (obj) { return "validationId" in obj; }, get: function (obj) { return obj.validationId; }, set: function (obj, value) { obj.validationId = value; } }, metadata: _metadata }, _validationId_initializers, _validationId_extraInitializers);
            __esDecorate(null, null, _userId_decorators, { kind: "field", name: "userId", static: false, private: false, access: { has: function (obj) { return "userId" in obj; }, get: function (obj) { return obj.userId; }, set: function (obj, value) { obj.userId = value; } }, metadata: _metadata }, _userId_initializers, _userId_extraInitializers);
            __esDecorate(null, null, _citizenId_decorators, { kind: "field", name: "citizenId", static: false, private: false, access: { has: function (obj) { return "citizenId" in obj; }, get: function (obj) { return obj.citizenId; }, set: function (obj, value) { obj.citizenId = value; } }, metadata: _metadata }, _citizenId_initializers, _citizenId_extraInitializers);
            __esDecorate(null, null, _validationResult_decorators, { kind: "field", name: "validationResult", static: false, private: false, access: { has: function (obj) { return "validationResult" in obj; }, get: function (obj) { return obj.validationResult; }, set: function (obj, value) { obj.validationResult = value; } }, metadata: _metadata }, _validationResult_initializers, _validationResult_extraInitializers);
            __esDecorate(null, null, _notes_decorators, { kind: "field", name: "notes", static: false, private: false, access: { has: function (obj) { return "notes" in obj; }, get: function (obj) { return obj.notes; }, set: function (obj, value) { obj.notes = value; } }, metadata: _metadata }, _notes_initializers, _notes_extraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a;
}();
exports.CreateBansosValidationDto = CreateBansosValidationDto;
