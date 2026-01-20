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
exports.CreateDistributionReportDto = void 0;
var class_validator_1 = require("class-validator");
var CreateDistributionReportDto = function () {
    var _a;
    var _reportId_decorators;
    var _reportId_initializers = [];
    var _reportId_extraInitializers = [];
    var _governmentId_decorators;
    var _governmentId_initializers = [];
    var _governmentId_extraInitializers = [];
    var _aidId_decorators;
    var _aidId_initializers = [];
    var _aidId_extraInitializers = [];
    var _totalRecipients_decorators;
    var _totalRecipients_initializers = [];
    var _totalRecipients_extraInitializers = [];
    var _reportDate_decorators;
    var _reportDate_initializers = [];
    var _reportDate_extraInitializers = [];
    return _a = /** @class */ (function () {
            function CreateDistributionReportDto() {
                this.reportId = __runInitializers(this, _reportId_initializers, void 0);
                this.governmentId = (__runInitializers(this, _reportId_extraInitializers), __runInitializers(this, _governmentId_initializers, void 0));
                this.aidId = (__runInitializers(this, _governmentId_extraInitializers), __runInitializers(this, _aidId_initializers, void 0));
                this.totalRecipients = (__runInitializers(this, _aidId_extraInitializers), __runInitializers(this, _totalRecipients_initializers, void 0));
                this.reportDate = (__runInitializers(this, _totalRecipients_extraInitializers), __runInitializers(this, _reportDate_initializers, void 0));
                __runInitializers(this, _reportDate_extraInitializers);
            }
            return CreateDistributionReportDto;
        }()),
        (function () {
            var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _reportId_decorators = [(0, class_validator_1.IsString)()];
            _governmentId_decorators = [(0, class_validator_1.IsString)(), (0, class_validator_1.IsOptional)()];
            _aidId_decorators = [(0, class_validator_1.IsString)(), (0, class_validator_1.IsOptional)()];
            _totalRecipients_decorators = [(0, class_validator_1.IsString)(), (0, class_validator_1.IsOptional)()];
            _reportDate_decorators = [(0, class_validator_1.IsDateString)(), (0, class_validator_1.IsOptional)()];
            __esDecorate(null, null, _reportId_decorators, { kind: "field", name: "reportId", static: false, private: false, access: { has: function (obj) { return "reportId" in obj; }, get: function (obj) { return obj.reportId; }, set: function (obj, value) { obj.reportId = value; } }, metadata: _metadata }, _reportId_initializers, _reportId_extraInitializers);
            __esDecorate(null, null, _governmentId_decorators, { kind: "field", name: "governmentId", static: false, private: false, access: { has: function (obj) { return "governmentId" in obj; }, get: function (obj) { return obj.governmentId; }, set: function (obj, value) { obj.governmentId = value; } }, metadata: _metadata }, _governmentId_initializers, _governmentId_extraInitializers);
            __esDecorate(null, null, _aidId_decorators, { kind: "field", name: "aidId", static: false, private: false, access: { has: function (obj) { return "aidId" in obj; }, get: function (obj) { return obj.aidId; }, set: function (obj, value) { obj.aidId = value; } }, metadata: _metadata }, _aidId_initializers, _aidId_extraInitializers);
            __esDecorate(null, null, _totalRecipients_decorators, { kind: "field", name: "totalRecipients", static: false, private: false, access: { has: function (obj) { return "totalRecipients" in obj; }, get: function (obj) { return obj.totalRecipients; }, set: function (obj, value) { obj.totalRecipients = value; } }, metadata: _metadata }, _totalRecipients_initializers, _totalRecipients_extraInitializers);
            __esDecorate(null, null, _reportDate_decorators, { kind: "field", name: "reportDate", static: false, private: false, access: { has: function (obj) { return "reportDate" in obj; }, get: function (obj) { return obj.reportDate; }, set: function (obj, value) { obj.reportDate = value; } }, metadata: _metadata }, _reportDate_initializers, _reportDate_extraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a;
}();
exports.CreateDistributionReportDto = CreateDistributionReportDto;
