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
exports.CreateCitizenDto = void 0;
var class_validator_1 = require("class-validator");
var CreateCitizenDto = function () {
    var _a;
    var _userId_decorators;
    var _userId_initializers = [];
    var _userId_extraInitializers = [];
    var _rtId_decorators;
    var _rtId_initializers = [];
    var _rtId_extraInitializers = [];
    var _idCardNumber_decorators;
    var _idCardNumber_initializers = [];
    var _idCardNumber_extraInitializers = [];
    var _familyCardNumber_decorators;
    var _familyCardNumber_initializers = [];
    var _familyCardNumber_extraInitializers = [];
    var _birthDate_decorators;
    var _birthDate_initializers = [];
    var _birthDate_extraInitializers = [];
    var _gender_decorators;
    var _gender_initializers = [];
    var _gender_extraInitializers = [];
    var _age_decorators;
    var _age_initializers = [];
    var _age_extraInitializers = [];
    var _address_decorators;
    var _address_initializers = [];
    var _address_extraInitializers = [];
    var _occupation_decorators;
    var _occupation_initializers = [];
    var _occupation_extraInitializers = [];
    var _monthlyIncome_decorators;
    var _monthlyIncome_initializers = [];
    var _monthlyIncome_extraInitializers = [];
    var _aidStatus_decorators;
    var _aidStatus_initializers = [];
    var _aidStatus_extraInitializers = [];
    return _a = /** @class */ (function () {
            function CreateCitizenDto() {
                this.userId = __runInitializers(this, _userId_initializers, void 0);
                this.rtId = (__runInitializers(this, _userId_extraInitializers), __runInitializers(this, _rtId_initializers, void 0));
                this.idCardNumber = (__runInitializers(this, _rtId_extraInitializers), __runInitializers(this, _idCardNumber_initializers, void 0));
                this.familyCardNumber = (__runInitializers(this, _idCardNumber_extraInitializers), __runInitializers(this, _familyCardNumber_initializers, void 0));
                this.birthDate = (__runInitializers(this, _familyCardNumber_extraInitializers), __runInitializers(this, _birthDate_initializers, void 0));
                this.gender = (__runInitializers(this, _birthDate_extraInitializers), __runInitializers(this, _gender_initializers, void 0));
                this.age = (__runInitializers(this, _gender_extraInitializers), __runInitializers(this, _age_initializers, void 0));
                this.address = (__runInitializers(this, _age_extraInitializers), __runInitializers(this, _address_initializers, void 0));
                this.occupation = (__runInitializers(this, _address_extraInitializers), __runInitializers(this, _occupation_initializers, void 0));
                this.monthlyIncome = (__runInitializers(this, _occupation_extraInitializers), __runInitializers(this, _monthlyIncome_initializers, void 0));
                this.aidStatus = (__runInitializers(this, _monthlyIncome_extraInitializers), __runInitializers(this, _aidStatus_initializers, void 0));
                __runInitializers(this, _aidStatus_extraInitializers);
            }
            return CreateCitizenDto;
        }()),
        (function () {
            var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _userId_decorators = [(0, class_validator_1.IsOptional)(), (0, class_validator_1.IsString)()];
            _rtId_decorators = [(0, class_validator_1.IsOptional)(), (0, class_validator_1.IsString)()];
            _idCardNumber_decorators = [(0, class_validator_1.IsString)()];
            _familyCardNumber_decorators = [(0, class_validator_1.IsOptional)(), (0, class_validator_1.IsString)()];
            _birthDate_decorators = [(0, class_validator_1.IsOptional)(), (0, class_validator_1.IsDateString)()];
            _gender_decorators = [(0, class_validator_1.IsOptional)(), (0, class_validator_1.IsString)()];
            _age_decorators = [(0, class_validator_1.IsOptional)(), (0, class_validator_1.IsInt)()];
            _address_decorators = [(0, class_validator_1.IsOptional)(), (0, class_validator_1.IsString)()];
            _occupation_decorators = [(0, class_validator_1.IsOptional)(), (0, class_validator_1.IsString)()];
            _monthlyIncome_decorators = [(0, class_validator_1.IsOptional)(), (0, class_validator_1.IsString)()];
            _aidStatus_decorators = [(0, class_validator_1.IsOptional)(), (0, class_validator_1.IsString)()];
            __esDecorate(null, null, _userId_decorators, { kind: "field", name: "userId", static: false, private: false, access: { has: function (obj) { return "userId" in obj; }, get: function (obj) { return obj.userId; }, set: function (obj, value) { obj.userId = value; } }, metadata: _metadata }, _userId_initializers, _userId_extraInitializers);
            __esDecorate(null, null, _rtId_decorators, { kind: "field", name: "rtId", static: false, private: false, access: { has: function (obj) { return "rtId" in obj; }, get: function (obj) { return obj.rtId; }, set: function (obj, value) { obj.rtId = value; } }, metadata: _metadata }, _rtId_initializers, _rtId_extraInitializers);
            __esDecorate(null, null, _idCardNumber_decorators, { kind: "field", name: "idCardNumber", static: false, private: false, access: { has: function (obj) { return "idCardNumber" in obj; }, get: function (obj) { return obj.idCardNumber; }, set: function (obj, value) { obj.idCardNumber = value; } }, metadata: _metadata }, _idCardNumber_initializers, _idCardNumber_extraInitializers);
            __esDecorate(null, null, _familyCardNumber_decorators, { kind: "field", name: "familyCardNumber", static: false, private: false, access: { has: function (obj) { return "familyCardNumber" in obj; }, get: function (obj) { return obj.familyCardNumber; }, set: function (obj, value) { obj.familyCardNumber = value; } }, metadata: _metadata }, _familyCardNumber_initializers, _familyCardNumber_extraInitializers);
            __esDecorate(null, null, _birthDate_decorators, { kind: "field", name: "birthDate", static: false, private: false, access: { has: function (obj) { return "birthDate" in obj; }, get: function (obj) { return obj.birthDate; }, set: function (obj, value) { obj.birthDate = value; } }, metadata: _metadata }, _birthDate_initializers, _birthDate_extraInitializers);
            __esDecorate(null, null, _gender_decorators, { kind: "field", name: "gender", static: false, private: false, access: { has: function (obj) { return "gender" in obj; }, get: function (obj) { return obj.gender; }, set: function (obj, value) { obj.gender = value; } }, metadata: _metadata }, _gender_initializers, _gender_extraInitializers);
            __esDecorate(null, null, _age_decorators, { kind: "field", name: "age", static: false, private: false, access: { has: function (obj) { return "age" in obj; }, get: function (obj) { return obj.age; }, set: function (obj, value) { obj.age = value; } }, metadata: _metadata }, _age_initializers, _age_extraInitializers);
            __esDecorate(null, null, _address_decorators, { kind: "field", name: "address", static: false, private: false, access: { has: function (obj) { return "address" in obj; }, get: function (obj) { return obj.address; }, set: function (obj, value) { obj.address = value; } }, metadata: _metadata }, _address_initializers, _address_extraInitializers);
            __esDecorate(null, null, _occupation_decorators, { kind: "field", name: "occupation", static: false, private: false, access: { has: function (obj) { return "occupation" in obj; }, get: function (obj) { return obj.occupation; }, set: function (obj, value) { obj.occupation = value; } }, metadata: _metadata }, _occupation_initializers, _occupation_extraInitializers);
            __esDecorate(null, null, _monthlyIncome_decorators, { kind: "field", name: "monthlyIncome", static: false, private: false, access: { has: function (obj) { return "monthlyIncome" in obj; }, get: function (obj) { return obj.monthlyIncome; }, set: function (obj, value) { obj.monthlyIncome = value; } }, metadata: _metadata }, _monthlyIncome_initializers, _monthlyIncome_extraInitializers);
            __esDecorate(null, null, _aidStatus_decorators, { kind: "field", name: "aidStatus", static: false, private: false, access: { has: function (obj) { return "aidStatus" in obj; }, get: function (obj) { return obj.aidStatus; }, set: function (obj, value) { obj.aidStatus = value; } }, metadata: _metadata }, _aidStatus_initializers, _aidStatus_extraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a;
}();
exports.CreateCitizenDto = CreateCitizenDto;
