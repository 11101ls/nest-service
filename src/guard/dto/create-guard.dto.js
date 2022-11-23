"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.CreateGuardDto = void 0;
var swagger_1 = require("@nestjs/swagger");
// post参数体
var CreateGuardDto = /** @class */ (function () {
    function CreateGuardDto() {
    }
    __decorate([
        (0, swagger_1.ApiProperty)({ example: 'name' })
    ], CreateGuardDto.prototype, "name");
    __decorate([
        (0, swagger_1.ApiProperty)({ example: 18 })
    ], CreateGuardDto.prototype, "age");
    return CreateGuardDto;
}());
exports.CreateGuardDto = CreateGuardDto;
