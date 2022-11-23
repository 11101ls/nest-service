"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.SpiderModule = void 0;
var common_1 = require("@nestjs/common");
var spider_service_1 = require("./spider.service");
var spider_controller_1 = require("./spider.controller");
var SpiderModule = /** @class */ (function () {
    function SpiderModule() {
    }
    SpiderModule = __decorate([
        (0, common_1.Module)({
            controllers: [spider_controller_1.SpiderController],
            providers: [spider_service_1.SpiderService]
        })
    ], SpiderModule);
    return SpiderModule;
}());
exports.SpiderModule = SpiderModule;